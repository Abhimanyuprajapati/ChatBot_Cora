import * as React from "react";
import { Chat } from "@progress/kendo-react-conversational-ui";
import { Button } from "@progress/kendo-react-buttons";
import {
  trashIcon,
  thumbUpOutlineIcon,
  thumbDownOutlineIcon,
  arrowsRotateOutlineIcon,
} from "@progress/kendo-svg-icons";
import { useLocation } from "react-router-dom";
import { setOptions } from "marked";
import "../index.css";
import sidebarIcon from "../assets/sidebar.svg";

const COPILOT_API =
  "";
const CHAT_HISTORY_API =
  "";
const UPDATE_CHAT_NAME_API =
  "";
const GET_SESSIONS_API =
  "";
const API_KEY_STORAGE_KEY = "cora_api_key";
const SESSION_ID_STORAGE_KEY = "SessionId";
const PROFILE_ID_STORAGE_KEY = "profile_id";
const CORA_VERSION = "v1.0.0";
const CORA_AVATAR_URL =
  "";
const FALLBACK_INITIAL_BOT_TEXT =
  "I'm your Virtual Lab Copilot. How can I help you today?";
const DEFAULT_BRANCH = "FabricIQ";

const bot = {
  id: 0,
};
const user = {
  id: 1,
};

const getStorageItem = (key) => {
  try {
    return localStorage.getItem(key)?.trim() || "";
  } catch (_err) {
    return "";
  }
};
const removeStorageItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (_err) {
    // ignore storage errors
  }
};
const setStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (_err) {
    // ignore storage errors
  }
};
const clearApiKeyFromUrl = () => {
  try {
    const url = new URL(window.location.href);
    url.searchParams.delete("apikey");
    url.searchParams.delete("apiKey");
    window.history.replaceState(
      {},
      "",
      `${url.pathname}${url.search}${url.hash}`,
    );
  } catch (_err) {
    // ignore URL parsing errors
  }
};
const generateSessionId = () => {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const randomValue = (Math.random() * 16) | 0;
    const value = char === "x" ? randomValue : (randomValue & 0x3) | 0x8;
    return value.toString(16);
  });
};
const getOrCreateStorageId = (key) => {
  const existing = getStorageItem(key);
  if (existing) {
    return existing;
  }
  const nextId = generateSessionId();
  setStorageItem(key, nextId);
  return nextId;
};
const sanitizeAnswer = (value) =>
  String(value ?? "")
    .replace(/\[\d+:\d+@source\]/g, "")
    .replace(/\\"/g, '"')
    .trim();
const toSuggestionValues = (rawSuggestions) => {
  if (!Array.isArray(rawSuggestions)) return [];
  return rawSuggestions
    .map((item) => (typeof item === "string" ? item : item?.value))
    .filter(Boolean);
};
const extractChatName = (payload) => {
  if (!payload || typeof payload !== "object") return "";
  const chatName =
    payload.chat_name ??
    payload.chatName ??
    payload["chat name"] ??
    payload.chat_title ??
    payload.chatTitle ??
    "";
  return typeof chatName === "string" ? chatName.trim() : "";
};
const tryParseObjectString = (value) => {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || (!trimmed.startsWith("{") && !trimmed.startsWith("["))) {
    return null;
  }
  try {
    const parsed = JSON.parse(trimmed);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch (_err) {
    return null;
  }
};
const parseAssistantPayload = (content) => {
  if (content == null) {
    return {
      answer: "",
      suggestedActions: [],
      chatName: "",
    };
  }
  let parsed = content;
  if (typeof content === "string") {
    try {
      parsed = JSON.parse(content);
    } catch (_err) {
      parsed = content;
    }
  }
  if (typeof parsed === "object" && parsed !== null) {
    let source = parsed;
    const nestedFromResponse = tryParseObjectString(parsed.response);
    const nestedFromAnswer = tryParseObjectString(parsed.answer);
    const nestedFromContent = tryParseObjectString(parsed.content);
    const nestedSource =
      nestedFromResponse || nestedFromAnswer || nestedFromContent || null;
    if (nestedSource && !Array.isArray(nestedSource)) {
      source = {
        ...source,
        ...nestedSource,
      };
    }
    const singleValue =
      Object.keys(source).length === 1 ? Object.values(source)[0] : "";
    const answer =
      source.answer ??
      source.response ??
      source.message ??
      source.text ??
      source.content ??
      singleValue ??
      "";
    const suggestedActions = toSuggestionValues(
      source.follow_up ?? source.suggestions ?? source.suggestedActions ?? [],
    );
    const chatName = extractChatName(source);
    return {
      answer: typeof answer === "string" ? answer : String(answer ?? ""),
      suggestedActions,
      chatName,
    };
  }
  return {
    answer: String(content ?? ""),
    suggestedActions: [],
    chatName: "",
  };
};
const parseSessionsPayload = (payload) => {
  const source =
    payload && typeof payload === "object"
      ? payload
      : tryParseObjectString(payload) || {};
  const rawSessions = Array.isArray(source?.sessions) ? source.sessions : [];
  return rawSessions
    .map((session) => {
      const sessionId =
        typeof session?.session_id === "string"
          ? session.session_id.trim()
          : "";
      if (!sessionId) return null;
      const chatName =
        typeof session?.chat_name === "string" ? session.chat_name.trim() : "";
      return {
        sessionId,
        chatName,
      };
    })
    .filter(Boolean);
};
const getRawFileFromUploadItem = (item) => {
  if (!item) return null;
  if (typeof File !== "undefined" && item instanceof File) return item;
  if (typeof Blob !== "undefined" && item instanceof Blob) return item;
  if (typeof item.getRawFile === "function") {
    const rawFile = item.getRawFile();
    if (rawFile) return rawFile;
  }
  if (
    item.rawFile &&
    (typeof Blob === "undefined" || item.rawFile instanceof Blob)
  ) {
    return item.rawFile;
  }
  if (item.file && (typeof Blob === "undefined" || item.file instanceof Blob)) {
    return item.file;
  }
  return null;
};
const buildMessageFilePreviews = (files) => {
  if (!Array.isArray(files)) return [];
  return files
    .map((item, index) => {
      const rawFile = getRawFileFromUploadItem(item);
      if (!rawFile) return null;
      const mimeType = rawFile.type || item?.contentType || "";
      const name = rawFile.name || item?.name || `file-${index + 1}`;
      const isImage = mimeType.startsWith("image/");
      const isVideo = mimeType.startsWith("video/");
      const previewUrl =
        (isImage || isVideo) && typeof URL !== "undefined"
          ? URL.createObjectURL(rawFile)
          : "";
      return {
        name,
        mimeType,
        isImage,
        isVideo,
        previewUrl,
      };
    })
    .filter(Boolean);
};
const mapHistoryToMessages = (historyResponse) => {
  let chatName = extractChatName(historyResponse);
  const rawMessages = Array.isArray(historyResponse?.messages)
    ? [...historyResponse.messages]
    : [];
  rawMessages.sort((a, b) => {
    const aSequence = Number(a?.sequence ?? 0);
    const bSequence = Number(b?.sequence ?? 0);
    if (aSequence !== bSequence) return aSequence - bSequence;
    const aDate = new Date(a?.created_at || 0).getTime();
    const bDate = new Date(b?.created_at || 0).getTime();
    return aDate - bDate;
  });
  const mappedMessages = [];
  let lastAssistantIndex = -1;
  rawMessages.forEach((item, index) => {
    const role = String(item?.role || "").toLowerCase();
    const createdAt = item?.created_at ? new Date(item.created_at) : new Date();
    if (role === "user") {
      const userText = String(item?.content ?? "").trim();
      if (!userText) return;
      mappedMessages.push({
        id: `history-user-${index}`,
        author: user,
        text: userText,
        timestamp: createdAt,
      });
      return;
    }
    if (role === "assistant" || role === "bot") {
      const payload = parseAssistantPayload(item?.content);
      if (!chatName && payload.chatName) {
        chatName = payload.chatName;
      }
      const botText =
        sanitizeAnswer(payload.answer) || FALLBACK_INITIAL_BOT_TEXT;
      const botMessage = {
        id: `history-bot-${index}`,
        author: bot,
        text: botText,
        timestamp: createdAt,
      };
      if (payload.suggestedActions.length > 0) {
        botMessage.suggestedActions = payload.suggestedActions.map((value) => ({
          type: "reply",
          value,
        }));
      }
      mappedMessages.push(botMessage);
      lastAssistantIndex = mappedMessages.length - 1;
    }
  });
  const messages = mappedMessages.map((message, index) => {
    if (!message?.suggestedActions) return message;
    if (index === lastAssistantIndex) return message;
    const { suggestedActions, ...rest } = message;
    return rest;
  });
  return { messages, chatName };
};
const getBreakpointMode = () => {
  if (typeof window === "undefined") {
    return "desktop";
  }
  const width = window.innerWidth;
  if (width > 768) {
    return "desktop";
  }
  if (width > 360) {
    return "tablet";
  }
  return "mobile";
};
const getBranchFromPathname = (pathname) => {
  const normalizedPath = String(pathname || "")
    .trim()
    .toLowerCase();
  if (normalizedPath === "/foundry" || normalizedPath.startsWith("/foundry/")) {
    return "FoundryIQ";
  }
  if (
    normalizedPath === "/fabricfoundry" ||
    normalizedPath.startsWith("/fabricfoundry/")
  ) {
    return "FabricIQ-FoundryIQ";
  }
  return DEFAULT_BRANCH;
};
const postRequest = async (url, body, headers) => {
  const response = await fetch(url, {
    method: "POST",
    headers,
    body,
  });
  const contentType = response.headers.get("content-type") || "";
  const responseData = contentType.includes("application/json")
    ? await response.json()
    : await response.text();
  if (!response.ok) {
    const error = new Error(`Request failed with status ${response.status}`);
    error.status = response.status;
    error.data = responseData;
    throw error;
  }
  return responseData;
};

const pencilIcon = {
  content: `<svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
<path d="M11.365 1.03625L11.6675 1.33875C11.98 1.65125 11.98 2.15875 11.6675 2.47125L11 3.13875L9.565 1.70375L10.235 1.03625C10.5475 0.72375 11.055 0.72375 11.3675 1.03625H11.365ZM4.725 6.54375L9 2.27125L10.435 3.70625L6.16 7.98125C6.055 8.08625 5.92 8.16125 5.775 8.19625L4.135 8.57375L4.5125 6.93375C4.545 6.78875 4.62 6.65375 4.7275 6.54875L4.725 6.54375ZM9.6675 0.46875L4.16 5.97875C3.9475 6.19125 3.8 6.45875 3.7325 6.75125L3.21 9.01625C3.18 9.15125 3.22 9.29125 3.3175 9.38875C3.415 9.48625 3.555 9.52625 3.69 9.49625L5.955 8.97375C6.2475 8.90625 6.515 8.75875 6.7275 8.54625L12.235 3.03625C12.86 2.41125 12.86 1.39875 12.235 0.77375L11.9325 0.46875C11.3075 -0.15625 10.295 -0.15625 9.67 0.46875H9.6675ZM2 1.50375C0.895 1.50375 0 2.39875 0 3.50375V10.7037C0 11.8088 0.895 12.7037 2 12.7037H9.2C10.305 12.7037 11.2 11.8088 11.2 10.7037V7.50375C11.2 7.28375 11.02 7.10375 10.8 7.10375C10.58 7.10375 10.4 7.28375 10.4 7.50375V10.7037C10.4 11.3663 9.8625 11.9038 9.2 11.9038H2C1.3375 11.9038 0.8 11.3663 0.8 10.7037V3.50375C0.8 2.84125 1.3375 2.30375 2 2.30375H5.2C5.42 2.30375 5.6 2.12375 5.6 1.90375C5.6 1.68375 5.42 1.50375 5.2 1.50375H2Z"/>
</svg>`,
  name: "pencil",
  viewBox: "0 0 13 13",
};
const attachIcon = {
  content: `<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
<path d="M6.36398 0.499931C6.364 0.223846 6.58784 3.61589e-05 6.86392 -1.56291e-05C7.14005 -1.58187e-05 7.36384 0.223813 7.36387 0.499931L7.36387 6.36395H13.2279C13.504 6.36395 13.7278 6.58775 13.7278 6.86389C13.7278 7.14003 13.504 7.36384 13.2279 7.36384H7.36387L7.36387 13.2279C7.36387 13.504 7.14006 13.7278 6.86392 13.7278C6.58782 13.7277 6.36397 13.504 6.36398 13.2279L6.36398 7.36384L0.499961 7.36384C0.223819 7.36384 1.45116e-05 7.14003 1.4501e-05 6.86389C1.45116e-05 6.58775 0.223819 6.36395 0.499961 6.36395L6.36398 6.36395L6.36398 0.499931Z"/>
</svg>`,
  name: "attach",
  viewBox: "0 0 14 14",
};
const CodeBlock = ({ language, code }) => {
  const handleCopy = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    await navigator.clipboard.writeText(code);
  };
  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <span className="code-block-language">{language}</span>
        <Button
          className="code-block-copy"
          onClick={handleCopy}
          fillMode="flat"
        >
          <svg viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
            <path d="M384 96H192c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V192zm64 352H192V128h160v96h96zM64 384h64v32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h192l32 32H64z"></path>
          </svg>
          Copy code
        </Button>
      </div>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};
const ChatFeedback = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        marginTop: 10,
      }}
    >
      <Button fillMode="flat" size="small" svgIcon={thumbUpOutlineIcon} />
      <Button fillMode="flat" size="small" svgIcon={thumbDownOutlineIcon} />
      <Button fillMode="flat" size="small" svgIcon={arrowsRotateOutlineIcon} />
    </div>
  );
};
const TypingIndicator = () => {
  return (
    <div className="typing-indicator">
      <span className="typing-dot"></span>
      <span className="typing-dot"></span>
      <span className="typing-dot"></span>
    </div>
  );
};
const MessageAvatar = ({ type }) => {
  if (type === "user") {
    return (
      <span
        className="message-avatar user-avatar"
        aria-hidden="true"
        style={{ alignSelf: "flex-start" }}
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12 12a4 4 0 1 0-4-4a4 4 0 0 0 4 4Zm0 2c-3.314 0-6 2.239-6 5v1h12v-1c0-2.761-2.686-5-6-5Z" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className="message-avatar cora-avatar"
      aria-hidden="true"
      style={{ alignSelf: "flex-start", overflow: "hidden", padding: 0 }}
    >
      <img
        src={CORA_AVATAR_URL}
        alt="Cora"
        width={34}
        height={34}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </span>
  );
};

export const Chatbot = () => {
  const location = useLocation();
  const branch = React.useMemo(
    () => getBranchFromPathname(location?.pathname),
    [location?.pathname],
  );
  const [expanded, setExpanded] = React.useState(true);
  const [messages, setMessages] = React.useState([]);
  const [chatHistories, setChatHistories] = React.useState([]);
  const [selectedChatId, setSelectedChatId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [breakpointMode, setBreakpointMode] =
    React.useState(getBreakpointMode());
  const [apiKey, setApiKey] = React.useState("");
  const [apiKeyInput, setApiKeyInput] = React.useState("");
  const [isActivated, setIsActivated] = React.useState(false);
  const [isActivating, setIsActivating] = React.useState(false);
  const [isSessionInitializing, setIsSessionInitializing] =
    React.useState(false);
  const [showFullscreenSetup, setShowFullscreenSetup] = React.useState(false);
  const [activationError, setActivationError] = React.useState("");
  const [apiReady, setApiReady] = React.useState(false);
  const [isSessionsHydrated, setIsSessionsHydrated] = React.useState(false);
  const [editingChatId, setEditingChatId] = React.useState(null);
  const [editingChatTitle, setEditingChatTitle] = React.useState("");
  const [renamingChatId, setRenamingChatId] = React.useState(null);
  const [profileId] = React.useState(() =>
    getOrCreateStorageId(PROFILE_ID_STORAGE_KEY),
  );
  const previewUrlsRef = React.useRef([]);
  const isMobile = breakpointMode === "mobile";
  const isTablet = breakpointMode === "tablet";
  const selectedChatSessionId = React.useMemo(() => {
    if (selectedChatId === null) return "";
    const selectedChat = chatHistories.find(
      (chat) => chat.id === selectedChatId,
    );
    return selectedChat?.sessionId?.trim() || "";
  }, [chatHistories, selectedChatId]);

  const getApiHeaders = React.useCallback(
    (contentType, tokenOverride) => {
      const tokenToUse = (tokenOverride ?? apiKey ?? "").trim();
      const headers = {};
      if (contentType && contentType !== "multipart/form-data") {
        headers["Content-Type"] = contentType;
      }
      if (tokenToUse) {
        headers.Authorization = `Bearer ${tokenToUse}`;
      }
      return headers;
    },
    [apiKey],
  );

  const upsertChatMessages = React.useCallback((chatId, update) => {
    setChatHistories((prev) =>
      prev.map((chat) => {
        if (chat.id !== chatId) return chat;
        const nextMessages =
          typeof update === "function" ? update(chat.messages) : update;
        return {
          ...chat,
          messages: nextMessages,
        };
      }),
    );
  }, []);

  const setChatTitle = React.useCallback((chatId, nextTitle) => {
    const title = typeof nextTitle === "string" ? nextTitle.trim() : "";
    if (!title) return;
    setChatHistories((prev) =>
      prev.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              title,
            }
          : chat,
      ),
    );
  }, []);

  const resetToActivation = React.useCallback((errorMessage = "") => {
    setIsActivated(false);
    setIsActivating(false);
    setIsSessionInitializing(false);
    setShowFullscreenSetup(false);
    setActivationError(errorMessage);
    setApiKey("");
    setApiKeyInput("");
    setMessages([]);
    clearApiKeyFromUrl();
    removeStorageItem(API_KEY_STORAGE_KEY);
  }, []);

  const activateWithApiKey = React.useCallback(() => {
    const trimmedKey = apiKeyInput.trim();
    if (!trimmedKey) {
      setActivationError("Please paste your API key.");
      return;
    }
    setIsActivating(true);
    setShowFullscreenSetup(true);
    setIsSessionInitializing(true);
    setActivationError("");
    setApiKey(trimmedKey);
    setApiKeyInput(trimmedKey);
    setStorageItem(API_KEY_STORAGE_KEY, trimmedKey);
    clearApiKeyFromUrl();
    setIsActivated(true);
    setMessages([]);
    setIsActivating(false);
  }, [apiKeyInput]);

  React.useEffect(() => {
    setIsSessionsHydrated(false);
  }, [profileId, branch]);

  React.useEffect(() => {
    if (!apiReady || !isActivated || !apiKey || isSessionsHydrated) return;
    let isCancelled = false;
    const hydrateSessions = async () => {
      try {
        const sessionsResponse = await postRequest(
          GET_SESSIONS_API,
          JSON.stringify({
            profile_id: profileId,
          }),
          getApiHeaders("application/json"),
        );
        const sessions = parseSessionsPayload(sessionsResponse);
        if (isCancelled) return;
        if (sessions.length > 0) {
          const preferredSessionId = getStorageItem(SESSION_ID_STORAGE_KEY);
          const chatsFromSessions = sessions.map((session, index) => ({
            id: index + 1,
            title: session.chatName || "New Chat",
            messages: [],
            sessionId: session.sessionId,
            shouldAutoGreet: false,
            shouldLoadHistory: true,
          }));
          const preferredChat =
            chatsFromSessions.find(
              (chat) => chat.sessionId === preferredSessionId,
            ) || chatsFromSessions[0];
          setChatHistories(chatsFromSessions);
          setSelectedChatId(preferredChat.id);
          setMessages([]);
          setStorageItem(SESSION_ID_STORAGE_KEY, preferredChat.sessionId);
        }
        setIsSessionsHydrated(true);
      } catch (error) {
        if (isCancelled) return;
        console.error("Failed to fetch sessions:", error);
        if (error?.status === 401) {
          resetToActivation("API key unauthorized. Please activate again.");
          return;
        }
        setIsSessionsHydrated(true);
      }
    };
    hydrateSessions();
    return () => {
      isCancelled = true;
    };
  }, [
    apiReady,
    isActivated,
    apiKey,
    isSessionsHydrated,
    profileId,
    branch,
    getApiHeaders,
    resetToActivation,
  ]);

  React.useEffect(() => {
    if (selectedChatId === null && chatHistories.length === 0) {
      const initialSessionId = getOrCreateStorageId(SESSION_ID_STORAGE_KEY);
      const newChat = {
        id: 1,
        title: "New Chat",
        messages: [],
        sessionId: initialSessionId,
        shouldAutoGreet: true,
        shouldLoadHistory: true,
      };
      setChatHistories([newChat]);
      setSelectedChatId(newChat.id);
    }
  }, [selectedChatId, chatHistories.length]);

  React.useEffect(() => {
    return () => {
      previewUrlsRef.current.forEach((url) => {
        if (!url) return;
        try {
          URL.revokeObjectURL(url);
        } catch (_err) {
          // ignore cleanup errors
        }
      });
      previewUrlsRef.current = [];
    };
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setBreakpointMode(getBreakpointMode());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    if (breakpointMode !== "desktop") {
      setExpanded(false);
    }
  }, [breakpointMode]);

  React.useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const apiKeyFromUrl =
      searchParams.get("apikey")?.trim() ||
      searchParams.get("apiKey")?.trim() ||
      "";
    const apiKeyFromStorage = getStorageItem(API_KEY_STORAGE_KEY);
    const initialApiKey = apiKeyFromUrl || apiKeyFromStorage;
    if (apiKeyFromUrl) {
      setStorageItem(API_KEY_STORAGE_KEY, apiKeyFromUrl);
      clearApiKeyFromUrl();
    }
    setApiKey(initialApiKey);
    setApiKeyInput(initialApiKey);
    setIsActivated(Boolean(initialApiKey));
    setShowFullscreenSetup(Boolean(apiKeyFromUrl));
    setIsSessionInitializing(Boolean(apiKeyFromUrl));
    setApiReady(true);
  }, []);

  React.useEffect(() => {
    if (
      !apiReady ||
      !isActivated ||
      !apiKey ||
      !isSessionsHydrated ||
      selectedChatId === null
    )
      return;
    const activeChatId = selectedChatId;
    const activeChat = chatHistories.find((chat) => chat.id === activeChatId);
    const hasLocalMessages =
      Array.isArray(activeChat?.messages) && activeChat.messages.length > 0;
    let activeSessionId = selectedChatSessionId;
    if (!activeSessionId) {
      const fallbackSessionId = generateSessionId();
      setChatHistories((prev) =>
        prev.map((chat) =>
          chat.id === activeChatId
            ? {
                ...chat,
                sessionId: fallbackSessionId,
              }
            : chat,
        ),
      );
      setStorageItem(SESSION_ID_STORAGE_KEY, fallbackSessionId);
      return;
    }
    setStorageItem(SESSION_ID_STORAGE_KEY, activeSessionId);
    if (hasLocalMessages) {
      setShowFullscreenSetup(false);
      setIsSessionInitializing(false);
      return;
    }
    if (
      activeChat &&
      activeChat.messages.length === 0 &&
      !activeChat.shouldAutoGreet &&
      !activeChat.shouldLoadHistory
    ) {
      setShowFullscreenSetup(false);
      setIsSessionInitializing(false);
      return;
    }
    let isCancelled = false;
    const initializeChat = async () => {
      setIsLoading(true);
      try {
        let restoredMessages = [];
        let resolvedChatName = "";
        try {
          const historyData = await postRequest(
            CHAT_HISTORY_API,
            JSON.stringify({
              session_id: activeSessionId,
              profile_id: profileId,
            }),
            getApiHeaders("application/json"),
          );
          const mappedHistory = mapHistoryToMessages(historyData);
          restoredMessages = mappedHistory.messages;
          resolvedChatName = mappedHistory.chatName;
        } catch (error) {
          if (error?.status === 401) {
            throw error;
          }
          console.error(
            "Unable to fetch chat history. Continuing with a new session.",
            error,
          );
        }
        if (restoredMessages.length === 0 && activeChat?.shouldAutoGreet) {
          const params = new URLSearchParams(window.location.search);
          const username = params.get("username")?.trim();
          const greeting = username ? `hi ${username}` : "hi";
          const responseData = await postRequest(
            COPILOT_API,
            JSON.stringify({
              searchTerm: greeting,
              session_id: activeSessionId,
              profile_id: profileId,
              branch,
            }),
            getApiHeaders("application/json"),
          );
          const payload = parseAssistantPayload(responseData);
          resolvedChatName = payload.chatName;
          const botText =
            sanitizeAnswer(payload.answer) || FALLBACK_INITIAL_BOT_TEXT;
          const initialBotMessage = {
            id: `init-${Date.now()}`,
            author: bot,
            text: botText,
            timestamp: new Date(),
          };
          if (payload.suggestedActions.length > 0) {
            initialBotMessage.suggestedActions = payload.suggestedActions.map(
              (value) => ({
                type: "reply",
                value,
              }),
            );
          }
          restoredMessages = [initialBotMessage];
        }
        if (isCancelled) return;
        setMessages(restoredMessages);
        upsertChatMessages(activeChatId, () => restoredMessages);
        if (activeChat?.shouldAutoGreet || activeChat?.shouldLoadHistory) {
          setChatHistories((prev) =>
            prev.map((chat) =>
              chat.id === activeChatId
                ? {
                    ...chat,
                    shouldAutoGreet: false,
                    shouldLoadHistory: false,
                  }
                : chat,
            ),
          );
        }
        if (resolvedChatName) {
          setChatTitle(activeChatId, resolvedChatName);
        }
        setShowFullscreenSetup(false);
      } catch (error) {
        if (isCancelled) return;
        console.error("Chat initialization failed:", error);
        if (error?.status === 401) {
          resetToActivation("API key unauthorized. Please activate again.");
          return;
        }
        const errorMessage = {
          id: `init-error-${Date.now()}`,
          author: bot,
          text: "Unable to initialize chatbot. Please try again.",
          timestamp: new Date(),
        };
        setMessages([errorMessage]);
        upsertChatMessages(activeChatId, [errorMessage]);
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
          setIsSessionInitializing(false);
        }
      }
    };
    initializeChat();
    return () => {
      isCancelled = true;
    };
  }, [
    apiReady,
    isActivated,
    apiKey,
    isSessionsHydrated,
    selectedChatId,
    selectedChatSessionId,
    profileId,
    branch,
    getApiHeaders,
    upsertChatMessages,
    resetToActivation,
    setChatTitle,
  ]);

  const handleToggleDrawer = () => {
    setExpanded(!expanded);
  };

  const addMessage = async (event) => {
    const messageText = event.message.text?.trim();
    const files = Array.isArray(event.message.files) ? event.message.files : [];
    const hasFiles = files.length > 0;
    if (!messageText && !hasFiles) return;
    if (!isActivated || !apiKey) {
      resetToActivation("Please activate with API key to continue.");
      return;
    }
    if (selectedChatId === null) return;
    const activeChatId = selectedChatId;
    const activeChat = chatHistories.find((chat) => chat.id === activeChatId);
    let activeSessionId = activeChat?.sessionId?.trim() || "";
    if (!activeSessionId) {
      activeSessionId = generateSessionId();
      setChatHistories((prev) =>
        prev.map((chat) =>
          chat.id === activeChatId
            ? {
                ...chat,
                sessionId: activeSessionId,
              }
            : chat,
        ),
      );
    }
    setStorageItem(SESSION_ID_STORAGE_KEY, activeSessionId);
    const filePreviews = hasFiles ? buildMessageFilePreviews(files) : [];
    filePreviews.forEach((file) => {
      if (file.previewUrl) {
        previewUrlsRef.current.push(file.previewUrl);
      }
    });
    const newUserMessage = {
      ...event.message,
      id: Date.now(),
      author: user,
      text: messageText || "",
      filePreviews,
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setChatHistories((prev) =>
      prev.map((chat) => {
        if (chat.id !== activeChatId) return chat;
        const isNewChat = chat.messages.length === 0;
        const chatTitle = isNewChat
          ? messageText && messageText.length > 30
            ? `${messageText.substring(0, 30)}...`
            : messageText || "New Chat"
          : chat.title;
        return {
          ...chat,
          title: chatTitle,
          messages: [...chat.messages, newUserMessage],
        };
      }),
    );
    const thinkingMessage = {
      id: Date.now() + 1,
      author: bot,
      text: "",
      isThinking: true,
    };
    setMessages((prev) => [...prev, thinkingMessage]);
    upsertChatMessages(activeChatId, (prev) => [...prev, thinkingMessage]);
    setIsLoading(true);
    try {
      let responseData;
      if (hasFiles) {
        const uploadItem = files[0];
        const rawFile = getRawFileFromUploadItem(uploadItem);
        if (!rawFile) {
          throw new Error("Unable to read uploaded file.");
        }
        const formData = new FormData();
        formData.append("searchTerm", messageText || "");
        formData.append("session_id", activeSessionId);
        formData.append("profile_id", profileId);
        formData.append("branch", branch);
        formData.append(
          "file",
          rawFile,
          rawFile.name || uploadItem?.name || "upload.bin",
        );
        responseData = await postRequest(
          COPILOT_API,
          formData,
          getApiHeaders(undefined),
        );
      } else {
        responseData = await postRequest(
          COPILOT_API,
          JSON.stringify({
            searchTerm: messageText || "",
            session_id: activeSessionId,
            profile_id: profileId,
            branch,
          }),
          getApiHeaders("application/json"),
        );
      }
      const payload = parseAssistantPayload(responseData);
      const botText =
        sanitizeAnswer(payload.answer) || FALLBACK_INITIAL_BOT_TEXT;
      const botResponse = {
        id: Date.now() + 2,
        author: bot,
        text: botText,
        timestamp: new Date(),
      };
      if (payload.suggestedActions.length > 0) {
        botResponse.suggestedActions = payload.suggestedActions.map(
          (value) => ({
            type: "reply",
            value,
          }),
        );
      }
      setMessages((prev) => [
        ...prev.filter((message) => !message.isThinking),
        botResponse,
      ]);
      upsertChatMessages(activeChatId, (prev) => [
        ...prev.filter((message) => !message.isThinking),
        botResponse,
      ]);
      if (payload.chatName) {
        setChatTitle(activeChatId, payload.chatName);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      if (error?.status === 401) {
        resetToActivation("API key unauthorized. Please activate again.");
        return;
      }
      const errorMessage = {
        id: Date.now() + 3,
        author: bot,
        text: "Sorry, there was an error processing your request. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [
        ...prev.filter((message) => !message.isThinking),
        errorMessage,
      ]);
      upsertChatMessages(activeChatId, (prev) => [
        ...prev.filter((message) => !message.isThinking),
        errorMessage,
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    setEditingChatId(null);
    setEditingChatTitle("");
    const emptyChat = chatHistories.find(
      (chat) => chat.messages.length === 0 && !chat.shouldLoadHistory,
    );
    if (emptyChat) {
      let nextSessionId = emptyChat.sessionId?.trim() || "";
      if (!nextSessionId) {
        nextSessionId = generateSessionId();
        setChatHistories((prev) =>
          prev.map((chat) =>
            chat.id === emptyChat.id
              ? {
                  ...chat,
                  sessionId: nextSessionId,
                  shouldAutoGreet: false,
                  shouldLoadHistory: false,
                }
              : chat,
          ),
        );
      } else if (emptyChat.shouldAutoGreet) {
        setChatHistories((prev) =>
          prev.map((chat) =>
            chat.id === emptyChat.id
              ? {
                  ...chat,
                  shouldAutoGreet: false,
                  shouldLoadHistory: false,
                }
              : chat,
          ),
        );
      }
      setStorageItem(SESSION_ID_STORAGE_KEY, nextSessionId);
      setSelectedChatId(emptyChat.id);
      setMessages([]);
      if (breakpointMode !== "desktop" && expanded) {
        setExpanded(false);
      }
      return;
    }
    const newChatId =
      chatHistories.length > 0
        ? Math.max(...chatHistories.map((c) => c.id)) + 1
        : 1;
    const newSessionId = generateSessionId();
    const newChat = {
      id: newChatId,
      title: "New Chat",
      messages: [],
      sessionId: newSessionId,
      shouldAutoGreet: false,
      shouldLoadHistory: false,
    };
    setStorageItem(SESSION_ID_STORAGE_KEY, newSessionId);
    setChatHistories([newChat, ...chatHistories]);
    setSelectedChatId(newChatId);
    setMessages([]);
    if (breakpointMode !== "desktop" && expanded) {
      setExpanded(false);
    }
  };

  const handleSelectChat = (chatId) => {
    setEditingChatId(null);
    setEditingChatTitle("");
    const selectedChat = chatHistories.find((chat) => chat.id === chatId);
    if (selectedChat) {
      let nextSessionId = selectedChat.sessionId?.trim() || "";
      if (!nextSessionId) {
        nextSessionId = generateSessionId();
        setChatHistories((prev) =>
          prev.map((chat) =>
            chat.id === chatId
              ? {
                  ...chat,
                  sessionId: nextSessionId,
                }
              : chat,
          ),
        );
      }
      setStorageItem(SESSION_ID_STORAGE_KEY, nextSessionId);
      setSelectedChatId(chatId);
      setMessages(selectedChat.messages);
      if (breakpointMode !== "desktop" && expanded) {
        setExpanded(false);
      }
    }
  };

  const handleDeleteChat = (e, chatId) => {
    e.stopPropagation();
    if (editingChatId === chatId) {
      setEditingChatId(null);
      setEditingChatTitle("");
    }
    const updatedHistories = chatHistories.filter((chat) => chat.id !== chatId);
    setChatHistories(updatedHistories);
    if (selectedChatId === chatId) {
      if (updatedHistories.length > 0) {
        const nextSessionId =
          updatedHistories[0].sessionId?.trim() || generateSessionId();
        if (!updatedHistories[0].sessionId?.trim()) {
          setChatHistories((prev) =>
            prev.map((chat) =>
              chat.id === updatedHistories[0].id
                ? {
                    ...chat,
                    sessionId: nextSessionId,
                  }
                : chat,
            ),
          );
        }
        setStorageItem(SESSION_ID_STORAGE_KEY, nextSessionId);
        setSelectedChatId(updatedHistories[0].id);
        setMessages(updatedHistories[0].messages);
      } else {
        removeStorageItem(SESSION_ID_STORAGE_KEY);
        setSelectedChatId(null);
        setMessages([]);
      }
    }
  };

  const handleStartRenameChat = (e, chat) => {
    e.stopPropagation();
    if (!chat) return;
    if (renamingChatId === chat.id) return;
    setEditingChatId(chat.id);
    setEditingChatTitle(chat.title || "");
  };

  const handleCancelRenameChat = (e) => {
    if (e?.preventDefault) e.preventDefault();
    if (e?.stopPropagation) e.stopPropagation();
    setEditingChatId(null);
    setEditingChatTitle("");
  };

  const handleSubmitRenameChat = async (e, chat) => {
    e.preventDefault();
    e.stopPropagation();
    if (!chat) return;
    if (renamingChatId === chat.id) return;
    const previousTitle =
      (typeof chat.title === "string" ? chat.title.trim() : "") || "New Chat";
    const nextTitle = editingChatTitle.trim();
    if (!nextTitle) {
      setEditingChatId(null);
      setEditingChatTitle("");
      return;
    }
    if (nextTitle === previousTitle) {
      setEditingChatId(null);
      setEditingChatTitle("");
      return;
    }
    let sessionId = chat.sessionId?.trim() || "";
    if (!sessionId) {
      sessionId = generateSessionId();
      setChatHistories((prev) =>
        prev.map((item) =>
          item.id === chat.id
            ? {
                ...item,
                sessionId,
              }
            : item,
        ),
      );
      if (chat.id === selectedChatId) {
        setStorageItem(SESSION_ID_STORAGE_KEY, sessionId);
      }
    }
    setChatTitle(chat.id, nextTitle);
    setEditingChatId(null);
    setEditingChatTitle("");
    setRenamingChatId(chat.id);
    try {
      const renameResponse = await postRequest(
        UPDATE_CHAT_NAME_API,
        JSON.stringify({
          session_id: sessionId,
          profile_id: profileId,
          chat_name: nextTitle,
          branch,
        }),
        getApiHeaders("application/json"),
      );
      const renameResponseObject =
        renameResponse && typeof renameResponse === "object"
          ? renameResponse
          : tryParseObjectString(renameResponse);
      const resolvedTitle = extractChatName(renameResponseObject);
      if (resolvedTitle) {
        setChatTitle(chat.id, resolvedTitle);
      }
    } catch (error) {
      console.error("Failed to update chat name:", error);
      if (error?.status === 401) {
        resetToActivation("API key unauthorized. Please activate again.");
        return;
      }
      setChatTitle(chat.id, previousTitle);
    } finally {
      setRenamingChatId((current) => (current === chat.id ? null : current));
    }
  };

  const messageTemplate = (props) => {
    const message = props.item;
    const isUser = message.author?.id === user.id;
    if (message.isThinking) {
      return (
        <div
          className="k-message-group k-alt"
          style={{ alignItems: "flex-start" }}
        >
          <MessageAvatar type="cora" />
          <div className="custom-bot-message">
            <TypingIndicator />
          </div>
        </div>
      );
    }
    if (isUser) {
      return (
        <div className="k-message-group user-message-group">
          <div className="k-message-box">
            <div className="k-bubble" style={{ display: "block" }}>
              {Array.isArray(message.filePreviews) &&
                message.filePreviews.length > 0 && (
                  <div className="uploaded-media-grid">
                    {message.filePreviews.map((file, index) => (
                      <div
                        key={`${file.name}-${index}`}
                        className="uploaded-media-item"
                      >
                        {file.isImage && file.previewUrl ? (
                          <img
                            className="uploaded-media-preview"
                            src={file.previewUrl}
                            alt={file.name}
                          />
                        ) : null}
                        {file.isVideo && file.previewUrl ? (
                          <video
                            className="uploaded-media-preview"
                            controls
                            src={file.previewUrl}
                          />
                        ) : null}
                        {!file.isImage && !file.isVideo ? (
                          <div className="uploaded-file-chip">{file.name}</div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                )}
              {message.text ? <div>{message.text}</div> : null}
            </div>
          </div>
          <MessageAvatar type="user" />
        </div>
      );
    }
    const parser = setOptions({});
    const parsedMessage = parser.parse(message.text || "");
    const codeBlocks = [];
    const codeBlockRegex =
      /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g;
    const processedHtml = parsedMessage.replace(
      codeBlockRegex,
      (_match, language, code) => {
        const decodedCode = code
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&amp;/g, "&")
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'");
        codeBlocks.push({
          language,
          code: decodedCode,
        });
        return `<code-block-placeholder-${codeBlocks.length - 1}></code-block-placeholder-${codeBlocks.length - 1}>`;
      },
    );
    if (codeBlocks.length === 0) {
      return (
        <div
          className="k-message-group k-alt"
          style={{ alignItems: "flex-start" }}
        >
          <MessageAvatar type="cora" />
          <div className="custom-bot-message">
            <div
              className="markdown-content"
              dangerouslySetInnerHTML={{
                __html: parsedMessage,
              }}
            />
            <ChatFeedback />
          </div>
        </div>
      );
    }
    const parts = [];
    let lastIndex = 0;
    codeBlocks.forEach((block, index) => {
      const placeholder = `<code-block-placeholder-${index}></code-block-placeholder-${index}>`;
      const placeholderIndex = processedHtml.indexOf(placeholder, lastIndex);
      if (placeholderIndex > lastIndex) {
        const htmlPart = processedHtml.substring(lastIndex, placeholderIndex);
        parts.push(
          <span
            key={`html-${index}`}
            dangerouslySetInnerHTML={{
              __html: htmlPart,
            }}
          />,
        );
      }
      parts.push(
        <CodeBlock
          key={`code-${index}`}
          language={block.language}
          code={block.code}
        />,
      );
      lastIndex = placeholderIndex + placeholder.length;
    });
    if (lastIndex < processedHtml.length) {
      const remainingHtml = processedHtml.substring(lastIndex);
      parts.push(
        <span
          key="html-last"
          dangerouslySetInnerHTML={{
            __html: remainingHtml,
          }}
        />,
      );
    }
    return (
      <div
        className="k-message-group k-alt"
        style={{ alignItems: "flex-start" }}
      >
        <MessageAvatar type="cora" />
        <div className="custom-bot-message">
          <div className="markdown-content">{parts}</div>
          <ChatFeedback />
        </div>
      </div>
    );
  };
  
  if (isSessionInitializing) {
    return (
      <div className="activation-wrapper">
        <div className="activation-card">
          <div className="activation-title">
            {showFullscreenSetup
              ? "Creating your chatbot setup"
              : "Loading chatbot..."}
          </div>
          <div className="activation-text">
            {showFullscreenSetup
              ? "Verifying API key and preparing Cora. This will take a few seconds."
              : "Loading chatbot..."}
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className={`chatgpt-container ${breakpointMode}`}>
        {isMobile && (
          <div className="mobile-navbar">
            <Button
              fillMode="flat"
              onClick={handleToggleDrawer}
              className="drawer-menu-icon mobile-toggle"
            >
              <img src={sidebarIcon} alt="menu" width={20} height={20} />
            </Button>
          </div>
        )}
        <div
          className={`custom-drawer ${expanded ? "expanded" : "collapsed"} ${breakpointMode === "desktop" ? "push" : "overlay"}`}
        >
          <div
            className={`drawer-top-header ${
              breakpointMode !== "desktop" && expanded
                ? "drawer-popup-header"
                : ""
            }`}
          >
            <Button
              fillMode="flat"
              onClick={handleToggleDrawer}
              className={`drawer-menu-icon ${
                breakpointMode !== "desktop" && expanded
                  ? "drawer-popup-toggle"
                  : ""
              }`}
            >
              <img src={sidebarIcon} alt="menu" width={20} height={20} />
            </Button>

            {expanded && (
              <div className="drawer-brand-title">Cora - Flash</div>
            )}
          </div>
          {!expanded && (breakpointMode === "desktop" || isTablet) && (
            <Button
              svgIcon={pencilIcon}
              fillMode="flat"
              onClick={handleNewChat}
              className="drawer-menu-icon"
            />
          )}
          {expanded && (
            <>
              <Button
                fillMode="flat"
                onClick={handleNewChat}
                className="drawer-new-chat-full"
                svgIcon={pencilIcon}
              >
                <span>New Chat</span>
              </Button>
              <div className="drawer-chats-section">
                <div className="drawer-chats-label">Chats</div>
                <div className="drawer-chat-list">
                  {chatHistories.map((chat) => (
                    <div
                      key={chat.id}
                      className={`chat-list-item ${chat.id === selectedChatId ? "selected" : ""}`}
                      onClick={() => handleSelectChat(chat.id)}
                    >
                      {editingChatId === chat.id ? (
                        <form
                          onSubmit={(e) => {
                            void handleSubmitRenameChat(e, chat);
                          }}
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            display: "flex",
                            gap: 4,
                            alignItems: "center",
                            flex: 1,
                            minWidth: 0,
                          }}
                        >
                          <input
                            type="text"
                            value={editingChatTitle}
                            autoFocus
                            disabled={renamingChatId === chat.id}
                            onChange={(e) =>
                              setEditingChatTitle(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Escape") {
                                handleCancelRenameChat(e);
                              }
                            }}
                            style={{
                              flex: 1,
                              minWidth: 0,
                              borderRadius: 4,
                              border: "1px solid #bfc8d4",
                              padding: "4px 6px",
                              fontSize: 13,
                            }}
                          />
                          <button
                            type="submit"
                            disabled={renamingChatId === chat.id}
                            style={{
                              border: "none",
                              background: "transparent",
                              color: "inherit",
                              cursor: "pointer",
                              fontSize: 12,
                            }}
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={handleCancelRenameChat}
                            disabled={renamingChatId === chat.id}
                            style={{
                              border: "none",
                              background: "transparent",
                              color: "inherit",
                              cursor: "pointer",
                              fontSize: 12,
                            }}
                          >
                            Cancel
                          </button>
                        </form>
                      ) : (
                        <>
                          <span className="chat-list-item-title">
                            {chat.title}
                          </span>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Button
                              svgIcon={pencilIcon}
                              fillMode="flat"
                              size="small"
                              className="chat-delete-btn"
                              tabIndex={-1}
                              disabled={renamingChatId === chat.id}
                              onClick={(e) => handleStartRenameChat(e, chat)}
                            />
                            {chat.messages.length > 0 && (
                              <Button
                                svgIcon={trashIcon}
                                fillMode="flat"
                                size="small"
                                className="chat-delete-btn"
                                tabIndex={-1}
                                onClick={(e) => handleDeleteChat(e, chat.id)}
                              />
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  // borderTop: "1px solid var(--kendo-color-border)",
                  padding: "5px 12px",
                  fontSize: 12,
                  color: "var(--kendo-color-subtle)",
                  opacity: 0.8,
                  textAlign: "center",
                }}
              >
                Cora {CORA_VERSION}
              </div>
            </>
          )}
        </div>
        {breakpointMode !== "desktop" && expanded && (
          <div className="drawer-backdrop" onClick={() => setExpanded(false)} />
        )}
        <div className="chat-content">
          <div
            className={`chat-wrapper ${messages.length > 0 ? "has-messages" : ""}`}
          >
            {messages.length === 0 && (
              <div className="empty-state">
                {/* <h3 className="welcome-title">What's on your mind today?</h3> */}
                <h3 className="welcome-title">
                  Hi there! Are you new to Cora Flash , or do you need help
                  with a specific task?
                </h3>
              </div>
            )}
            <Chat
              authorId={user.id}
              messages={messages}
              onSendMessage={addMessage}
              loading={isLoading}
              width="100%"
              timestampVisibility="hidden"
              timestampTemplate={() => null}
              messageBoxSettings={{
                mode: "auto",
              }}
              placeholder={isLoading ? "Thinking..." : "Ask anything"}
              uploadConfig={{
                svgIcon: attachIcon,
                multiple: true,
              }}
              messageTemplate={messageTemplate}
            />
          </div>
          <div className="chat-disclaimer">
            By messaging{" "}
            <strong>
              <u>Cora</u>
            </strong>
            , an{" "}
            <strong>
              <u>Flash</u>
            </strong>{" "}
            chatbot, you agree to our{" "}
            <strong>
              <u>Terms</u>
            </strong>{" "}
            and have read our{" "}
            <strong>
              <u>Privacy Policy</u>
            </strong>
            . See{" "}
            <strong>
              <u>Cookie</u>
            </strong>{" "}
            Preferences.
          </div>
        </div>
      </div>
    </>
  );
};
