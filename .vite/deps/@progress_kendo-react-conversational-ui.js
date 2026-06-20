"use client";
import { i as __toESM, r as __exportAll, t as require_react } from "./react-BDWiK9rz.js";
import { $ as e$18, A as a$10, B as u$9, D as o$20, E as o$19, F as l$14, G as I$4, H as u$10, I as p$18, J as n$13, K as o$22, L as r$24, M as e$15, N as g$7, O as e$17, P as i$16, Q as v$11, R as s$16, T as s$17, U as o$21, V as r$26, W as a$11, X as M$5, Y as v$10, Z as _$1, a as ie, et as A$6, f as N$7, h as s$18, it as require_prop_types, j as d$10, k as v$9, m as r$25, n as p$19, nt as n$12, o as ee, p as i$17, q as a$12, rt as e$19, tt as e$16, w as A$5, x as re, z as x$6 } from "./kendo-react-buttons-DpP-TOWc.js";
import { t as require_react_dom } from "./react-dom-C08K6auO.js";
import { arrowDownOutlineIcon, arrowRotateCwIcon, arrowRotateCwOutlineIcon, arrowRotateCwSmallIcon, arrowUpOutlineIcon, cancelIcon, cancelOutlineIcon, caretAltDownIcon, caretAltLeftIcon, caretAltRightIcon, caretAltUpIcon, checkIcon, checkOutlineIcon, chevronDownIcon, chevronLeftIcon, chevronRightIcon, chevronUpIcon, commentIcon, copyIcon, downloadLightIcon, exclamationCircleIcon, fileAudioIcon, fileConfigIcon, fileDataIcon, fileIcon, fileImageIcon, filePdfIcon, filePresentationIcon, fileProgrammingIcon, fileTxtIcon, fileVideoIcon, fileWordIcon, fileZipIcon, infoCircleIcon, menuIcon, moreHorizontalIcon, moreVerticalIcon, paperPlaneIcon, paperclipOutlineAltRightIcon, pinOutlineIcon, sparklesIcon, stopSmIcon, thumbDownOutlineIcon, thumbUpOutlineIcon, undoIcon, uploadIcon, warningTriangleIcon, xIcon, xMarkSmOutlineIcon, xOutlineIcon } from "./@progress_kendo-svg-icons.js";
//#region node_modules/@progress/kendo-react-common/noop.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var o$18 = function() {};
//#endregion
//#region node_modules/@progress/kendo-react-common/hooks/useRtl.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function u$8(t, n, o) {
	const [r, c] = import_react.useState(n);
	return import_react.useEffect(() => {
		if (!r && window && t.current) {
			const e = window.getComputedStyle(t.current).direction;
			e && c(e);
		}
	}, o), r;
}
//#endregion
//#region node_modules/@progress/kendo-react-common/hooks/useCustomComponent.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var n$11 = () => null, r$23 = ({ children: e }) => e, s$15 = (e) => {
	if (e) {
		if (e === import_react.Fragment) return [r$23, {}];
		if (import_react.isValidElement(e)) return [e.type, e.props];
	} else return [n$11, {}];
	return [e, {}];
};
//#endregion
//#region node_modules/@progress/kendo-react-common/navigation.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var l$13 = class {
	constructor(t) {
		this.rovingTabIndex = !0, this.update = () => {}, this.setFocusClass = (s) => {
			s.target.classList.add(this.focusClass);
		}, this.disableTabindexForRest = (s) => {
			this.elements.forEach((e) => {
				e !== s && e.setAttribute("tabindex", "-1");
			});
		}, this.focusNextIndex = (s, e, i) => {
			const n = e === 1 ? this.next(s, i) : this.previous(s, i);
			return this.focusElement(n, s), n;
		}, this.tabIndex = t.tabIndex || 0, this.root = t.root, this.selectors = t.selectors, this.focusOptions = t.focusOptions || { preventScroll: !0 }, this.rovingTabIndex = t.rovingTabIndex !== void 0 ? t.rovingTabIndex : !0, this.mouseEvents = t.mouseEvents || {}, this.keyboardEvents = t.keyboardEvents || {}, this.focusClass = t.focusClass, this.lastFocused = null;
	}
	/**
	* Returns the collection of DOM elements which the module will navigate in.
	*/
	get elements() {
		return this.root.current ? Array.from(this.root.current.querySelectorAll(this.selectors.join(","))) : [];
	}
	/**
	* Returns the first navigation DOM element.
	*/
	get first() {
		return this.root.current && this.root.current.querySelector(this.selectors.join(",")) || null;
	}
	/**
	* Returns the last navigation DOM element.
	*/
	get last() {
		const t = this.elements;
		return t[t.length - 1] || null;
	}
	/**
	* Returns the focused DOM element from the navigation collection of DOM elements.
	*/
	get current() {
		return this.elements.find((t) => t.matches(":focus")) || null;
	}
	/**
	* Returns the next DOM element from the navigation collection of DOM elements.
	*/
	next(t, s) {
		const e = s ? this.customElements(s) : this.elements;
		let i = e.indexOf(t) + 1;
		return i = i < 0 ? e.length - 1 : i, e[i % e.length];
	}
	/**
	* Returns the previous DOM element from the navigation collection of DOM elements.
	*/
	previous(t, s) {
		const e = s ? this.customElements(s) : this.elements;
		let i = e.indexOf(t) - 1;
		return i = i < 0 ? e.length - 1 : i, e[i % e.length];
	}
	/**
	* Focuses the next element from the navigation collection of DOM elements.
	*/
	focusNext(t, s) {
		return this.focusNextIndex(t, 1, s);
	}
	/**
	* Focuses the previous element from the navigation collection of DOM elements.
	*/
	focusPrevious(t, s) {
		return this.focusNextIndex(t, -1, s);
	}
	/**
	* The keyboard events handler.
	*/
	triggerKeyboardEvent(t, s) {
		const e = this.target(t.target), i = e && e.closest(this.selectors.join(",")), n = t.key === " " ? "Space" : t.key, r = t.nativeEvent.type;
		i && this.keyboardEvents[r][n] && this.keyboardEvents[r][n].call(void 0, i, this, t, s);
	}
	/**
	* The mouse events handler.
	*/
	triggerMouseEvent(t) {
		const s = this.target(t.target), e = s && s.closest(this.selectors.join(",")), i = t.nativeEvent.type;
		e && this.mouseEvents[i].call(void 0, e, this, t);
	}
	/**
	* Focuses the passed element from the navigation collection of DOM elements.
	*/
	focusElement(t, s) {
		t && (s && (this.rovingTabIndex && s.setAttribute("tabindex", "-1"), this.focusClass && (this.removeFocusClass(s), s.removeEventListener("focus", this.setFocusClass))), this.rovingTabIndex && t.setAttribute("tabindex", String(this.tabIndex)), this.focusClass && (t.classList.add(this.focusClass), t.addEventListener("focus", this.setFocusClass)), t.focus(this.focusOptions), this.lastFocused = t);
	}
	/**
	* Set the first element tabIndex to `1` and `-1` for the rest.
	*/
	initializeRovingTab(t) {
		const s = t ? this.elements[t] : this.first;
		s && (this.focusClass && s.addEventListener("focus", this.setFocusClass), s.setAttribute("tabindex", String(this.tabIndex)), this.disableTabindexForRest(s));
	}
	/**
	* Remove a focus listener.
	*/
	removeFocusListener() {
		this.lastFocused && this.lastFocused.removeEventListener("focus", this.setFocusClass);
	}
	/**
	* Remove a focus class.
	*/
	removeFocusClass(t) {
		this.focusClass && t.classList.remove(this.focusClass);
	}
	customElements(t) {
		return this.root.current ? Array.from(this.root.current.querySelectorAll(t.join(","))) : [];
	}
	target(t) {
		var n;
		const s = t, e = s && s.ownerDocument || null;
		return t instanceof (e && ((n = e == null ? void 0 : e.defaultView) == null ? void 0 : n.Element) || Element) ? t : null;
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-common/fileExtensionIcon.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
function g$6(e) {
	if (!e) return {
		name: "file",
		icon: fileIcon
	};
	switch (e) {
		case ".png":
		case ".jpg":
		case ".jpeg":
		case ".tiff":
		case ".bmp":
		case ".gif": return {
			name: "file-image",
			icon: fileImageIcon
		};
		case ".mp3":
		case ".mp4":
		case ".wav": return {
			name: "file-audio",
			icon: fileAudioIcon
		};
		case ".mkv":
		case ".webm":
		case ".flv":
		case ".gifv":
		case ".avi":
		case ".wmv": return {
			name: "file-video",
			icon: fileVideoIcon
		};
		case ".txt": return {
			name: "file-txt",
			icon: fileTxtIcon
		};
		case ".pdf": return {
			name: "file-pdf",
			icon: filePdfIcon
		};
		case ".ppt":
		case ".pptx": return {
			name: "file-presentation",
			icon: filePresentationIcon
		};
		case ".csv":
		case ".xls":
		case ".xlsx": return {
			name: "file-data",
			icon: fileDataIcon
		};
		case ".html":
		case ".css":
		case ".js":
		case ".ts": return {
			name: "file-programming",
			icon: fileProgrammingIcon
		};
		case ".exe": return {
			name: "file-config",
			icon: fileConfigIcon
		};
		case ".zip":
		case ".rar": return {
			name: "file-zip",
			icon: fileZipIcon
		};
		case ".doc":
		case ".docm":
		case ".docx": return {
			name: "file-zip",
			icon: fileWordIcon
		};
		default: return {
			name: "file",
			icon: fileIcon
		};
	}
}
//#endregion
//#region node_modules/@progress/kendo-react-common/unstyled/inputs.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var s$14 = `${e$15.prefix}-${i$16.input}`, y$7 = `${e$15.prefix}-${i$16.maskedtextbox}`, m$11 = `${e$15.prefix}-${i$16.radio}`, N$6 = `${e$15.prefix}-${i$16.textbox}`, h$10 = `${e$15.prefix}-${i$16.input}-${i$16.prefix}`, p$17 = `${e$15.prefix}-${i$16.input}-${i$16.suffix}`;
`${m$11}`, `${m$11}${l$14.small}`, `${m$11}${l$14.medium}`, `${m$11}${l$14.large}`, `${e$15.prefix}${x$6.invalid}`, `${e$15.prefix}${x$6.checked}`, `${m$11}${r$24.wrap}`, `${m$11}${a$10.label}`;
`${m$11}${r$24.list}`, `${e$15.prefix}${r$24.list}${x$6.horizontal}`, `${e$15.prefix}${r$24.list}${x$6.vertical}`, `${m$11}${r$24.list}${r$24.item}`, `${e$15.prefix}${x$6.disabled}`;
s$17({
	wrapper: {
		main: y$7,
		input: s$14,
		size: {
			small: `${s$14}-${l$14.small}`,
			medium: `${s$14}-${l$14.medium}`,
			large: `${s$14}-${l$14.large}`
		},
		fillMode: {
			solid: `${s$14}-${s$16.solid}`,
			outline: `${s$14}-${s$16.outline}`,
			flat: `${s$14}-${s$16.flat}`
		},
		rounded: {
			small: `${e$15.prefix}-${e$15.rounded}-${d$10.small}`,
			medium: `${e$15.prefix}-${e$15.rounded}-${d$10.medium}`,
			large: `${e$15.prefix}-${e$15.rounded}-${d$10.large}`
		},
		disabled: `${e$15.prefix}-${x$6.disabled}`,
		invalid: `${e$15.prefix}-${x$6.invalid}`,
		isRtl: `${e$15.prefix}-${e$15.rtl}`
	},
	inputInner: `${s$14}-${i$16.inner}`
}, "inputInner");
var M$4 = {
	wrapper: {
		main: N$6,
		input: s$14,
		size: {
			small: `${s$14}-${l$14.small}`,
			medium: `${s$14}-${l$14.medium}`,
			large: `${s$14}-${l$14.large}`
		},
		fillMode: {
			solid: `${s$14}-${s$16.solid}`,
			outline: `${s$14}-${s$16.outline}`,
			flat: `${s$14}-${s$16.flat}`
		},
		rounded: {
			small: `${e$15.prefix}-${e$15.rounded}-${d$10.small}`,
			medium: `${e$15.prefix}-${e$15.rounded}-${d$10.medium}`,
			large: `${e$15.prefix}-${e$15.rounded}-${d$10.large}`
		},
		disabled: `${e$15.prefix}-${x$6.disabled}`,
		focused: `${e$15.prefix}-${x$6.focus}`,
		required: `${e$15.prefix}-${x$6.required}`,
		invalid: `${e$15.prefix}-${x$6.invalid}`,
		isRtl: `${e$15.prefix}-${e$15.rtl}`
	},
	inputInner: `${s$14}-${i$16.inner}`,
	prefix: {
		main: h$10,
		orientation: {
			horizontal: `${h$10}-${p$18.horizontal}`,
			vertical: `${h$10}-${p$18.vertical}`
		}
	},
	suffix: {
		main: p$17,
		orientation: {
			horizontal: `${p$17}-${p$18.horizontal}`,
			vertical: `${p$17}-${p$18.vertical}`
		}
	}
}, E$10 = {
	wrapper: (d) => {
		const { disabled: t, invalid: a, focused: l, required: o, size: n, fillMode: $, rounded: r, isRtl: q, c: T = M$4 } = d, e = T.wrapper;
		return {
			[e == null ? void 0 : e.main]: !0,
			[e == null ? void 0 : e.input]: !0,
			[e == null ? void 0 : e.size[n]]: e == null ? void 0 : e.size[n],
			[`${s$14}-${n}`]: n && !(e != null && e.size[n]),
			[e == null ? void 0 : e.fillMode[$]]: e == null ? void 0 : e.fillMode[$],
			[e == null ? void 0 : e.rounded[r]]: e == null ? void 0 : e.rounded[r],
			[`${e$15.prefix}-${e$15.rounded}-${r}`]: r && !(e != null && e.rounded[r]),
			[e == null ? void 0 : e.disabled]: t,
			[e == null ? void 0 : e.focused]: l,
			[e == null ? void 0 : e.required]: o,
			[e == null ? void 0 : e.invalid]: a,
			[e == null ? void 0 : e.isRtl]: q
		};
	},
	inputInner: s$17(M$4, "inputInner"),
	prefix: (d) => {
		const { orientation: t, c: a = M$4 } = d, l = a.prefix;
		return {
			[l.main]: !0,
			[l.orientation[t]]: l.orientation[t]
		};
	},
	suffix: (d) => {
		const { orientation: t, c: a = M$4 } = d, l = a.suffix;
		return {
			[l == null ? void 0 : l.main]: !0,
			[l == null ? void 0 : l.orientation[t]]: l == null ? void 0 : l.orientation[t]
		};
	}
};
s$17({
	input: {
		main: `${s$14} ${s$14}-${l$14.medium} ${e$15.prefix}-${e$15.rounded}-${d$10.medium} ${s$14}-${s$16.solid}`,
		disabled: `${e$15.prefix}-${x$6.disabled}`,
		required: `${e$15.prefix}-${x$6.required}`,
		invalid: `${e$15.prefix}-${x$6.invalid}`,
		isRtl: `${e$15.prefix}-${e$15.rtl}`
	},
	clearButton: `${e$15.prefix}-${e$15.clear}-${e$15.value}`
}, "clearButton");
//#endregion
//#region node_modules/@progress/kendo-react-common/kendopaste/useKendoPaste.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
function T$4(n, t) {
	const { fieldName: e, onValueChange: r, enabled: s = !0 } = t, u = import_react.useRef(r);
	import_react.useEffect(() => {
		u.current = r;
	}, [r]), import_react.useEffect(() => {
		if (!s || !e) return;
		const c = n.current;
		if (!c) return;
		const a = E$9(c), o = (f) => {
			const { fieldValues: d } = f.detail;
			if (d && e in d) {
				const m = d[e];
				u.current(m);
			}
		};
		return a.addEventListener(o$19, o), () => {
			a.removeEventListener(o$19, o);
		};
	}, [
		n,
		e,
		s
	]);
}
function E$9(n) {
	const t = n.closest("form");
	if (t) return t;
	return n.closest(".k-form") || document.body;
}
//#endregion
//#region node_modules/@progress/kendo-react-common/unstyled/animations.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var p$16 = {
	child: {
		container: `${e$15.prefix}-${g$7[g$7.prefix + "-" + r$24.container]}`,
		relative: `${e$15.prefix}-${g$7[g$7.prefix + "-" + r$24.container + "-" + g$7.relative]}`
	},
	childContainer: { container: `${e$15.prefix}-${g$7[g$7.child + "-" + g$7.prefix + "-" + r$24.container]}` },
	appear: {
		"push-right": `${e$15.prefix}-${g$7.pushRight}-${g$7.appear}`,
		"push-left": `${e$15.prefix}-${g$7.pushLeft}-${g$7.appear}`,
		"push-down": `${e$15.prefix}-${g$7.pushDown}-${g$7.appear}`,
		"push-up": `${e$15.prefix}-${g$7.pushUp}-${g$7.appear}`,
		"expand-vertical": `${e$15.prefix}-${g$7.expandVertical}-${g$7.appear}`,
		"expand-horizontal": `${e$15.prefix}-${g$7.expandHorizontal}-${g$7.appear}`,
		fade: `${e$15.prefix}-${g$7.fade}-${g$7.appear}`,
		"zoom-in": `${e$15.prefix}-${g$7.zoomIn}-${g$7.appear}`,
		"zoom-out": `${e$15.prefix}-${g$7.zoomOut}-${g$7.appear}`,
		"slide-in": `${e$15.prefix}-${g$7.slideIn}-${g$7.appear}`,
		"slide-down": `${e$15.prefix}-${g$7.slideDown}-${g$7.appear}`,
		"slide-up": `${e$15.prefix}-${g$7.slideUp}-${g$7.appear}`,
		"slide-right": `${e$15.prefix}-${g$7.slideRight}-${g$7.appear}`,
		"slide-left": `${e$15.prefix}-${g$7.slideLeft}-${g$7.appear}`,
		"reveal-vertical": `${e$15.prefix}-${g$7.revealVertical}-${g$7.appear}`,
		"reveal-horizontal": `${e$15.prefix}-${g$7.revealHorizontal}-${g$7.appear}`
	},
	appearActive: {
		"push-right": `${e$15.prefix}-${g$7.pushRight}-${g$7.appear}-${g$7.active}`,
		"push-left": `${e$15.prefix}-${g$7.pushLeft}-${g$7.appear}-${g$7.active}`,
		"push-down": `${e$15.prefix}-${g$7.pushDown}-${g$7.appear}-${g$7.active}`,
		"push-up": `${e$15.prefix}-${g$7.pushUp}-${g$7.appear}-${g$7.active}`,
		"expand-vertical": `${e$15.prefix}-${g$7.expandVertical}-${g$7.appear}-${g$7.active}`,
		"expand-horizontal": `${e$15.prefix}-${g$7.expandHorizontal}-${g$7.appear}-${g$7.active}`,
		fade: `${e$15.prefix}-${g$7.fade}-${g$7.appear}-${g$7.active}`,
		"zoom-in": `${e$15.prefix}-${g$7.zoomIn}-${g$7.appear}-${g$7.active}`,
		"zoom-out": `${e$15.prefix}-${g$7.zoomOut}-${g$7.appear}-${g$7.active}`,
		"slide-in": `${e$15.prefix}-${g$7.slideIn}-${g$7.appear}-${g$7.active}`,
		"slide-down": `${e$15.prefix}-${g$7.slideDown}-${g$7.appear}-${g$7.active}`,
		"slide-up": `${e$15.prefix}-${g$7.slideUp}-${g$7.appear}-${g$7.active}`,
		"slide-right": `${e$15.prefix}-${g$7.slideRight}-${g$7.appear}-${g$7.active}`,
		"slide-left": `${e$15.prefix}-${g$7.slideLeft}-${g$7.appear}-${g$7.active}`,
		"reveal-vertical": `${e$15.prefix}-${g$7.revealVertical}-${g$7.appear}-${g$7.active}`,
		"reveal-horizontal": `${e$15.prefix}-${g$7.revealHorizontal}-${g$7.appear}-${g$7.active}`
	},
	enter: {
		"push-right": `${e$15.prefix}-${g$7.pushRight}-${g$7.enter}`,
		"push-left": `${e$15.prefix}-${g$7.pushLeft}-${g$7.enter}`,
		"push-down": `${e$15.prefix}-${g$7.pushDown}-${g$7.enter}`,
		"push-up": `${e$15.prefix}-${g$7.pushUp}-${g$7.enter}`,
		"expand-vertical": `${e$15.prefix}-${g$7.expandVertical}-${g$7.enter}`,
		"expand-horizontal": `${e$15.prefix}-${g$7.expandHorizontal}-${g$7.enter}`,
		fade: `${e$15.prefix}-${g$7.fade}-${g$7.enter}`,
		"zoom-in": `${e$15.prefix}-${g$7.zoomIn}-${g$7.enter}`,
		"zoom-out": `${e$15.prefix}-${g$7.zoomOut}-${g$7.enter}`,
		"slide-in": `${e$15.prefix}-${g$7.slideIn}-${g$7.enter}`,
		"slide-down": `${e$15.prefix}-${g$7.slideDown}-${g$7.enter}`,
		"slide-up": `${e$15.prefix}-${g$7.slideUp}-${g$7.enter}`,
		"slide-right": `${e$15.prefix}-${g$7.slideRight}-${g$7.enter}`,
		"slide-left": `${e$15.prefix}-${g$7.slideLeft}-${g$7.enter}`,
		"reveal-vertical": `${e$15.prefix}-${g$7.revealVertical}-${g$7.enter}`,
		"reveal-horizontal": `${e$15.prefix}-${g$7.revealHorizontal}-${g$7.enter}`
	},
	enterActive: {
		"push-right": `${e$15.prefix}-${g$7.pushRight}-${g$7.enter}-${g$7.active}`,
		"push-left": `${e$15.prefix}-${g$7.pushLeft}-${g$7.enter}-${g$7.active}`,
		"push-down": `${e$15.prefix}-${g$7.pushDown}-${g$7.enter}-${g$7.active}`,
		"push-up": `${e$15.prefix}-${g$7.pushUp}-${g$7.enter}-${g$7.active}`,
		"expand-vertical": `${e$15.prefix}-${g$7.expandVertical}-${g$7.enter}-${g$7.active}`,
		"expand-horizontal": `${e$15.prefix}-${g$7.expandHorizontal}-${g$7.enter}-${g$7.active}`,
		fade: `${e$15.prefix}-${g$7.fade}-${g$7.enter}-${g$7.active}`,
		"zoom-in": `${e$15.prefix}-${g$7.zoomIn}-${g$7.enter}-${g$7.active}`,
		"zoom-out": `${e$15.prefix}-${g$7.zoomOut}-${g$7.enter}-${g$7.active}`,
		"slide-in": `${e$15.prefix}-${g$7.slideIn}-${g$7.enter}-${g$7.active}`,
		"slide-down": `${e$15.prefix}-${g$7.slideDown}-${g$7.enter}-${g$7.active}`,
		"slide-up": `${e$15.prefix}-${g$7.slideUp}-${g$7.enter}-${g$7.active}`,
		"slide-right": `${e$15.prefix}-${g$7.slideRight}-${g$7.enter}-${g$7.active}`,
		"slide-left": `${e$15.prefix}-${g$7.slideLeft}-${g$7.enter}-${g$7.active}`,
		"reveal-vertical": `${e$15.prefix}-${g$7.revealVertical}-${g$7.enter}-${g$7.active}`,
		"reveal-horizontal": `${e$15.prefix}-${g$7.revealHorizontal}-${g$7.enter}-${g$7.active}`
	},
	exit: {
		"push-right": `${e$15.prefix}-${g$7.pushRight}-${g$7.exit}`,
		"push-left": `${e$15.prefix}-${g$7.pushLeft}-${g$7.exit}`,
		"push-down": `${e$15.prefix}-${g$7.pushDown}-${g$7.exit}`,
		"push-up": `${e$15.prefix}-${g$7.pushUp}-${g$7.exit}`,
		"expand-vertical": `${e$15.prefix}-${g$7.expandVertical}-${g$7.exit}`,
		"expand-horizontal": `${e$15.prefix}-${g$7.expandHorizontal}-${g$7.exit}`,
		fade: `${e$15.prefix}-${g$7.fade}-${g$7.exit}`,
		"zoom-in": `${e$15.prefix}-${g$7.zoomIn}-${g$7.exit}`,
		"zoom-out": `${e$15.prefix}-${g$7.zoomOut}-${g$7.exit}`,
		"slide-in": `${e$15.prefix}-${g$7.slideIn}-${g$7.exit}`,
		"slide-down": `${e$15.prefix}-${g$7.slideDown}-${g$7.exit}`,
		"slide-up": `${e$15.prefix}-${g$7.slideUp}-${g$7.exit}`,
		"slide-right": `${e$15.prefix}-${g$7.slideRight}-${g$7.exit}`,
		"slide-left": `${e$15.prefix}-${g$7.slideLeft}-${g$7.exit}`,
		"reveal-vertical": `${e$15.prefix}-${g$7.revealVertical}-${g$7.exit}`,
		"reveal-horizontal": `${e$15.prefix}-${g$7.revealHorizontal}-${g$7.exit}`
	},
	exitActive: {
		"push-right": `${e$15.prefix}-${g$7.pushRight}-${g$7.exit}-${g$7.active}`,
		"push-left": `${e$15.prefix}-${g$7.pushLeft}-${g$7.exit}-${g$7.active}`,
		"push-down": `${e$15.prefix}-${g$7.pushDown}-${g$7.exit}-${g$7.active}`,
		"push-up": `${e$15.prefix}-${g$7.pushUp}-${g$7.exit}-${g$7.active}`,
		"expand-vertical": `${e$15.prefix}-${g$7.expandVertical}-${g$7.exit}-${g$7.active}`,
		"expand-horizontal": `${e$15.prefix}-${g$7.expandHorizontal}-${g$7.exit}-${g$7.active}`,
		fade: `${e$15.prefix}-${g$7.fade}-${g$7.exit}-${g$7.active}`,
		"zoom-in": `${e$15.prefix}-${g$7.zoomIn}-${g$7.exit}-${g$7.active}`,
		"zoom-out": `${e$15.prefix}-${g$7.zoomOut}-${g$7.exit}-${g$7.active}`,
		"slide-in": `${e$15.prefix}-${g$7.slideIn}-${g$7.exit}-${g$7.active}`,
		"slide-down": `${e$15.prefix}-${g$7.slideDown}-${g$7.exit}-${g$7.active}`,
		"slide-up": `${e$15.prefix}-${g$7.slideUp}-${g$7.exit}-${g$7.active}`,
		"slide-right": `${e$15.prefix}-${g$7.slideRight}-${g$7.exit}-${g$7.active}`,
		"slide-left": `${e$15.prefix}-${g$7.slideLeft}-${g$7.exit}-${g$7.active}`,
		"reveal-vertical": `${e$15.prefix}-${g$7.revealVertical}-${g$7.exit}-${g$7.active}`,
		"reveal-horizontal": `${e$15.prefix}-${g$7.revealHorizontal}-${g$7.exit}-${g$7.active}`
	}
}, x$5 = {
	child: (t) => {
		const { c: r = p$16 } = t;
		return {
			[r.child.container]: !0,
			[r.child.relative]: !0
		};
	},
	childContainer: (t) => {
		const { c: r = p$16 } = t;
		return { [r.childContainer.container]: !0 };
	},
	appear: (t) => {
		const { c: r = p$16, transitionName: $ } = t;
		return {
			[`${r.appear[$]}`]: r.appear[$],
			[`${$}-${g$7.appear}`]: !r.appear[$]
		};
	},
	appearActive: (t) => {
		const { c: r = p$16, transitionName: $ } = t;
		return {
			[`${r.appearActive[$]}`]: r.appearActive[$],
			[`${$}-${g$7.appear}-${g$7.active}`]: !r.appearActive[$]
		};
	},
	enter: (t) => {
		const { c: r = p$16, transitionName: $ } = t;
		return {
			[`${r.enter[$]}`]: r.enter[$],
			[`${$}-${g$7.enter}`]: !r.enter[$]
		};
	},
	enterActive: (t) => {
		const { c: r = p$16, transitionName: $ } = t;
		return {
			[`${r.enterActive[$]}`]: r.enterActive[$],
			[`${$}-${g$7.enter}-${g$7.active}`]: !r.enterActive[$]
		};
	},
	exit: (t) => {
		const { c: r = p$16, transitionName: $ } = t;
		return {
			[`${r.exit[$]}`]: r.exit[$],
			[`${$}-${g$7.exit}`]: !r.exit[$]
		};
	},
	exitActive: (t) => {
		const { c: r = p$16, transitionName: $ } = t;
		return {
			[`${r.exitActive[$]}`]: r.exitActive[$],
			[`${$}-${g$7.exit}-${g$7.active}`]: !r.exitActive[$]
		};
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-intl/intlUtils.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
function s$13(t) {
	if (!t && true) throw `Passed component - ${t} is invalid.`;
	const o = t.context;
	return o && o.localization ? o.localization : new s$18();
}
function v$8(t) {
	t.contextType = r$25;
}
//#endregion
//#region node_modules/@progress/kendo-react-intl/hooks/useInternationalization.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var i$15 = () => import_react.useContext(r$25).intl;
//#endregion
//#region node_modules/@progress/kendo-react-layout/menu/utils/itemsIdsUtils.mjs
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types(), 1);
function o$17(n, r) {
	if (u$7(n)) return r[Number(n)];
	const t = r[Number(i$14(n))];
	return t.items ? o$17(c$10(n), t.items) : void 0;
}
function i$14(n) {
	return e$14(n) ? n : n.split("_")[0];
}
function c$10(n) {
	if (e$14(n)) return n;
	const r = n.indexOf("_");
	return n.substring(r + 1);
}
function S$4(n) {
	return f$10("0", n);
}
function g$5(n, r) {
	return r.indexOf(n) === 0 ? r.length === n.length || r.charAt(n.length) === "_" : !1;
}
function f$10(n, r) {
	return r ? r + "_" + n : n;
}
function P$5(n) {
	const r = n.lastIndexOf("_");
	return r < 0 ? "" : n.substring(0, r);
}
function e$14(n) {
	return n === "" || n.indexOf("_") < 0;
}
function u$7(n) {
	return n !== "" && n.indexOf("_") < 0;
}
function a$9(n) {
	return E$8(n) === 1;
}
function l$12(n) {
	return R$7(n) === "0";
}
function R$7(n) {
	const r = n.lastIndexOf("_");
	return r < 0 ? n : n.substring(r + 1);
}
function T$3(n, r, t) {
	return u$7(r) ? n ? Number(r) < t - 1 ? (Number(r) + 1).toString() : "0" : Number(r) > 0 ? (Number(r) - 1).toString() : (t - 1).toString() : r;
}
function E$8(n) {
	return n.split("_").length - 1;
}
//#endregion
//#region node_modules/@progress/kendo-react-layout/menu/components/MenuItem.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var s$12 = class s extends import_react.Component {
	/**
	* @hidden
	*/
	render() {
		return null;
	}
};
s$12.propTypes = {
	text: import_prop_types.default.string,
	url: import_prop_types.default.string,
	icon: import_prop_types.default.string,
	disabled: import_prop_types.default.bool,
	cssClass: import_prop_types.default.string,
	cssStyle: import_prop_types.default.object,
	render: import_prop_types.default.any,
	linkRender: import_prop_types.default.any,
	contentRender: import_prop_types.default.any,
	data: import_prop_types.default.any,
	separator: import_prop_types.default.bool
};
var t$13 = s$12;
//#endregion
//#region node_modules/@progress/kendo-react-layout/menu/utils/prepareInputItemsForInternalWork.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
function L$2(e, n) {
	if (e && e.length > 0) return {
		items: c$9(e),
		inputItems: e
	};
	if (s$11(n).length > 0) {
		const t = R$6(s$11(n));
		return {
			items: c$9(t),
			inputItems: t
		};
	}
	return {
		items: [],
		inputItems: []
	};
}
function h$9(e, n) {
	const t = {}, { text: i, url: o, icon: r, svgIcon: d, disabled: u, cssClass: f, cssStyle: a, render: l, linkRender: p, contentRender: m, data: I, separator: v } = e || n.props;
	return i !== void 0 && (t.text = i), o !== void 0 && (t.url = o), r !== void 0 && (t.icon = r), d !== void 0 && (t.svgIcon = d), u !== void 0 && (t.disabled = u), f !== void 0 && (t.cssClass = f), a !== void 0 && (t.cssStyle = a), l !== void 0 && (t.render = l), p !== void 0 && (t.linkRender = p), m !== void 0 && (t.contentRender = m), I !== void 0 && (t.data = I), v !== void 0 && (t.separator = v), t;
}
function s$11(e) {
	return import_react.Children.toArray(e).filter((n) => n && n.type === t$13);
}
function R$6(e) {
	const n = [];
	for (let t = 0; t < e.length; t++) {
		const i = e[t], o = h$9(void 0, i), r = R$6(s$11(i.props.children));
		r.length > 0 && (o.items = r), n.push(o);
	}
	return n;
}
function c$9(e, n) {
	const t = [];
	for (let i = 0; i < e.length; i++) {
		const o = e[i], r = h$9(o);
		r.id = f$10(i.toString(), n), r.isLastFromSiblings = i === e.length - 1, r.separator = o.separator === !0, r.items = E$7(o, r), t.push(r);
	}
	return t;
}
function E$7(e, n) {
	return e.contentRender ? [{
		contentParentItemId: n.id,
		id: f$10("0", n.id),
		isLastFromSiblings: !0,
		separator: !1,
		contentRender: e.contentRender,
		items: []
	}] : e.items ? c$9(e.items, n.id) : [];
}
//#endregion
//#region node_modules/@progress/kendo-react-layout/menu/utils/getNewItemIdUponKeyboardNavigation.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var Q$2 = /\S/;
function V(g, n, G, S, l, c) {
	const H = u();
	switch (G) {
		case e$16.left: return x();
		case e$16.right: return B();
		case e$16.up: return A();
		case e$16.down: return z();
		case e$16.enter:
		case e$16.space: return R();
		case e$16.home: return W();
		case e$16.end: return Z();
		case e$16.esc: return _();
		default: return X() ? M() : n;
	}
	function x() {
		return l ? c ? F() : U() : c ? C() : K();
	}
	function B() {
		return l ? c ? U() : F() : c ? K() : C();
	}
	function z() {
		return l ? f() : u$7(n) ? d() : f();
	}
	function A() {
		return l ? s() : u$7(n) ? E() : s();
	}
	function R() {
		return H.disabled ? n : h() ? S$4(n) : i$14(n);
	}
	function W() {
		return y()[0].id;
	}
	function Z() {
		const t = y();
		return t[t.length - 1].id;
	}
	function _() {
		return u$7(n) ? n : P$5(n);
	}
	function M() {
		const t = S.toLowerCase(), r = y(), o = Number(R$7(n)), p = r.slice(o + 1).concat(r.slice(0, o + 1)).find((j) => (j.text || "").toLowerCase().startsWith(t));
		return p ? p.id : n;
	}
	function K() {
		return u$7(n) ? s() : a$9(n) ? d(s(i$14(n))) : P$5(n);
	}
	function U() {
		return u$7(n) ? E() : P$5(n);
	}
	function C() {
		return u$7(n) ? f() : d(h() ? n : f(i$14(n)));
	}
	function F() {
		return d(u$7(n) || h() ? n : f(i$14(n)));
	}
	function d(t) {
		return v(!0, t);
	}
	function E(t) {
		return v(!1, t);
	}
	function X() {
		return S.length === 1 && Q$2.test(S);
	}
	function u(t, r) {
		return t === void 0 && (t = n), r === void 0 && (r = g), o$17(t, r);
	}
	function h(t) {
		return u(t).items.length > 0;
	}
	function s(t) {
		return L(!1, t);
	}
	function f(t) {
		return L(!0, t);
	}
	function $(t) {
		const r = u(t).items;
		return r[r.length - 1].id;
	}
	function y() {
		return u$7(n) ? g : u(P$5(n), g).items;
	}
	function v(t, r) {
		r === void 0 && (r = n);
		const o = u(r);
		return h(r) && !o.disabled ? t ? S$4(r) : $(r) : r;
	}
	function L(t, r) {
		if (r === void 0 && (r = n), u$7(r)) return T$3(t, r, g.length);
		const o = P$5(r), w = R$7(r), p = u(o).items.length;
		return f$10(T$3(t, w, p), o);
	}
}
//#endregion
//#region node_modules/@progress/kendo-react-layout/menu/utils/hoverDelay.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
function n$10(e) {
	return e.hoverOpenDelay !== void 0 ? e.hoverOpenDelay : e.openOnClick ? 0 : 100;
}
function o$16(e) {
	return e.hoverCloseDelay !== void 0 ? e.hoverCloseDelay : 100;
}
//#endregion
//#region node_modules/@progress/kendo-react-layout/menu/consts.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var t$12 = {
	vertical: "top",
	horizontal: "left"
}, n$9 = {
	vertical: "top",
	horizontal: "left"
}, l$11 = {
	vertical: "top",
	horizontal: "right"
}, r$21 = {
	vertical: "top",
	horizontal: "right"
}, o$15 = {
	vertical: "flip",
	horizontal: "fit"
}, i$13 = {
	vertical: "fit",
	horizontal: "flip"
}, a$8 = {
	downward: {
		anchorAlign: {
			vertical: "bottom",
			horizontal: "right"
		},
		popupAlign: l$11,
		collision: o$15,
		animationDirection: "down"
	},
	leftward: {
		anchorAlign: {
			vertical: "top",
			horizontal: "left"
		},
		popupAlign: r$21,
		collision: i$13,
		animationDirection: "left"
	}
}, c$8 = {
	downward: {
		anchorAlign: {
			vertical: "bottom",
			horizontal: "left"
		},
		popupAlign: t$12,
		collision: o$15,
		animationDirection: "down"
	},
	rightward: {
		anchorAlign: {
			vertical: "top",
			horizontal: "right"
		},
		popupAlign: n$9,
		collision: i$13,
		animationDirection: "right"
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-layout/menu/utils/misc.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
function f$9(r, n, t) {
	const o = i$12(r, n, t);
	return t ? o === "downward" ? a$8.downward : a$8.leftward : o === "downward" ? c$8.downward : c$8.rightward;
}
function i$12(r, n, t) {
	return u$7(r) ? n ? t ? "leftward" : "rightward" : "downward" : t ? "leftward" : "rightward";
}
function l$10(r) {
	return r ? "rtl" : "ltr";
}
function P$4(r, n) {
	return `${r}_${n}`;
}
//#endregion
//#region node_modules/@progress/kendo-react-layout/menu/components/MenuItemLink.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var s$10 = class s extends import_react.Component {
	/**
	* @hidden
	*/
	render() {
		return this.props.url ? /* @__PURE__ */ import_react.createElement("a", {
			className: this.getMenuItemClassName(),
			role: "presentation",
			href: this.props.url,
			tabIndex: -1
		}, this.props.children) : /* @__PURE__ */ import_react.createElement("span", {
			id: this.props.id,
			className: n$12(this.getMenuItemClassName(), this.props.className),
			style: this.props.style,
			role: "presentation"
		}, this.props.children);
	}
	getMenuItemClassName() {
		return n$12("k-link", "k-menu-link", { "k-active": this.props.opened });
	}
};
s$10.propTypes = {
	opened: import_prop_types.default.bool,
	url: import_prop_types.default.string
};
var p$15 = s$10;
//#endregion
//#region node_modules/@progress/kendo-react-layout/menu/components/MenuItemArrow.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var l$9 = "caret-alt-down", p$14 = "caret-alt-right", d$9 = "caret-alt-left", r$20 = class r extends import_react.Component {
	/**
	* @hidden
	*/
	render() {
		return /* @__PURE__ */ import_react.createElement(v$9, {
			"aria-hidden": !0,
			...this.getIcon()
		});
	}
	getIcon() {
		switch (i$12(this.props.itemId, this.props.verticalMenu === !0, this.props.dir === "rtl")) {
			case "downward": return {
				name: l$9,
				icon: caretAltDownIcon
			};
			case "rightward": return {
				name: p$14,
				icon: caretAltRightIcon
			};
			case "leftward": return {
				name: d$9,
				icon: caretAltLeftIcon
			};
			default: return {};
		}
	}
};
r$20.propTypes = {
	itemId: import_prop_types.default.string,
	dir: import_prop_types.default.string,
	verticalMenu: import_prop_types.default.bool
};
var o$14 = r$20;
//#endregion
//#region node_modules/@progress/kendo-react-layout/menu/components/MenuItemInternal.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var k$4 = class extends import_react.Component {
	constructor() {
		super(...arguments), this.onMouseOver = (e) => {
			this.props.onMouseOver(this.props.parentItemId), e.stopPropagation();
		}, this.onMouseLeave = (e) => {
			this.props.onMouseLeave(this.props.parentItemId), e.stopPropagation();
		};
	}
	render() {
		const e = this.props.parentItemId;
		return /* @__PURE__ */ import_react.createElement("ul", {
			className: this.props.className,
			role: this.props.role ? this.props.role : e !== void 0 ? "menu" : "menubar",
			id: e !== void 0 ? P$4(this.props.menuGuid, e) : void 0,
			onMouseOver: e !== void 0 ? this.onMouseOver : void 0,
			onMouseLeave: e !== void 0 ? this.onMouseLeave : void 0,
			"aria-orientation": this.props["aria-orientation"]
		}, this.renderChildItems());
	}
	renderChildItems() {
		return this.props.items.length > 0 ? this.props.items.map((e, t) => /* @__PURE__ */ import_react.createElement(O$3, {
			item: e,
			animate: this.props.animate,
			isMenuVertical: this.props.isMenuVertical,
			isDirectionRightToLeft: this.props.isDirectionRightToLeft,
			focusedItemId: this.props.focusedItemId,
			lastItemIdToBeOpened: this.props.lastItemIdToBeOpened,
			tabbableItemId: this.props.tabbableItemId,
			itemRender: this.props.itemRender,
			linkRender: this.props.linkRender,
			menuGuid: this.props.menuGuid,
			onMouseOver: this.props.onMouseOver,
			onMouseLeave: this.props.onMouseLeave,
			onBlur: this.props.onBlur,
			onFocus: this.props.onFocus,
			onClick: this.props.onClick,
			onOriginalItemNeeded: this.props.onOriginalItemNeeded,
			onPopupClose: this.props.onPopupClose,
			key: t
		})) : null;
	}
};
var O$3 = class extends import_react.Component {
	constructor(e) {
		super(e), this.isFirstRender = !0, this.onMouseOver = (t) => {
			this.props.onMouseOver(this.props.item.id), t.stopPropagation();
		}, this.onMouseLeave = (t) => {
			this.props.onMouseLeave(this.props.item.id), t.stopPropagation();
		}, this.onPopupClose = (t) => {
			this.props.onPopupClose(this.props.item.id, t);
		}, this.state = { opened: !1 };
	}
	componentDidMount() {
		const e = this.props.focusedItemId, t = this.props.item.id;
		e && e === t && this.itemElement.focus({ preventScroll: !0 }), this.isFirstRender = !1;
	}
	componentDidUpdate(e) {
		const t = this.props.focusedItemId, i = this.props.item.id;
		if (t) {
			const n = o$20(document);
			e.focusedItemId !== t && t === i && !this.itemElement.contains(n) && this.itemElement.focus({ preventScroll: !0 });
		}
	}
	render() {
		const e = this.props.item, t = e.id, i = P$4(this.props.menuGuid, t), n = e.separator;
		return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, n ? /* @__PURE__ */ import_react.createElement("li", {
			className: "k-separator k-item",
			"aria-hidden": !0,
			key: i,
			id: i,
			ref: (o) => {
				this.itemElement = o;
			}
		}) : /* @__PURE__ */ import_react.createElement("li", {
			id: i,
			className: this.getMenuItemClassName(e),
			style: e.cssStyle,
			tabIndex: t === this.props.tabbableItemId ? 0 : -1,
			onMouseOver: this.onMouseOver,
			onMouseLeave: this.onMouseLeave,
			onBlur: (o) => this.props.onBlur(t, o),
			onFocus: () => this.props.onFocus(t),
			onClick: (o) => this.props.onClick(o, t),
			role: "menuitem",
			"aria-disabled": e.disabled ? !0 : void 0,
			"aria-haspopup": e.items.length > 0 ? !0 : void 0,
			"aria-expanded": e.items.length > 0 ? this.Opened : void 0,
			"aria-label": e.text,
			"aria-owns": this.Opened ? i : void 0,
			ref: (o) => {
				this.itemElement = o;
			},
			key: i
		}, this.contentRender ? this.renderContent() : this.renderMenuItemLink()), this.renderPopupIfOpened());
	}
	renderContent() {
		const e = this.props.item.contentParentItemId;
		return /* @__PURE__ */ import_react.createElement("div", {
			className: "k-content",
			role: "presentation"
		}, /* @__PURE__ */ import_react.createElement(this.contentRender, {
			item: this.props.onOriginalItemNeeded(e),
			itemId: e
		}));
	}
	renderMenuItemLink() {
		const e = this.props.item;
		if (this.linkRender) return /* @__PURE__ */ import_react.createElement(this.linkRender, {
			item: this.props.onOriginalItemNeeded(e.id),
			itemId: e.id,
			opened: this.Opened,
			dir: l$10(this.props.isDirectionRightToLeft)
		});
		const t = this.itemRender ? /* @__PURE__ */ import_react.createElement(this.itemRender, {
			item: this.props.onOriginalItemNeeded(e.id),
			itemId: e.id,
			key: "1"
		}) : /* @__PURE__ */ import_react.createElement("span", { className: "k-menu-link-text" }, e.text);
		return /* @__PURE__ */ import_react.createElement(p$15, {
			url: e.url,
			opened: this.Opened
		}, this.renderMenuIconIfApplicable(), t, this.renderArrowIfApplicable());
	}
	renderPopupIfOpened() {
		const e = this.props.item.id, t = this.props.animate, { anchorAlign: i, popupAlign: n, collision: o, animationDirection: r } = f$9(e, this.props.isMenuVertical, this.props.isDirectionRightToLeft), l = t === !0 ? {
			openDuration: 300,
			closeDuration: 300,
			direction: r
		} : t === !1 ? !1 : {
			openDuration: (t == null ? void 0 : t.openDuration) || 300,
			closeDuration: (t == null ? void 0 : t.closeDuration) || 300,
			direction: (t == null ? void 0 : t.direction) || r
		};
		return /* @__PURE__ */ import_react.createElement(re, {
			anchor: this.itemElement,
			show: this.Opened,
			popupClass: this.getPopupClassName(),
			anchorAlign: i,
			popupAlign: n,
			collision: o,
			animate: l,
			onClose: this.onPopupClose,
			key: "1"
		}, /* @__PURE__ */ import_react.createElement(k$4, {
			parentItemId: e,
			animate: this.props.animate,
			items: this.props.item.items,
			menuGuid: this.props.menuGuid,
			focusedItemId: this.props.focusedItemId,
			lastItemIdToBeOpened: this.props.lastItemIdToBeOpened,
			tabbableItemId: this.props.tabbableItemId,
			itemRender: this.props.itemRender,
			linkRender: this.props.linkRender,
			isMenuVertical: this.props.isMenuVertical,
			isDirectionRightToLeft: this.props.isDirectionRightToLeft,
			className: "k-group k-menu-group k-reset k-menu-group-md",
			onMouseOver: this.props.onMouseOver,
			onMouseLeave: this.props.onMouseLeave,
			onBlur: this.props.onBlur,
			onFocus: this.props.onFocus,
			onClick: this.props.onClick,
			onOriginalItemNeeded: this.props.onOriginalItemNeeded,
			onPopupClose: this.props.onPopupClose
		}));
	}
	renderMenuIconIfApplicable() {
		const { icon: e, svgIcon: t } = this.props.item;
		return e || t ? /* @__PURE__ */ import_react.createElement(v$9, {
			name: e,
			icon: t,
			key: "0"
		}) : null;
	}
	renderArrowIfApplicable() {
		return this.props.item.items.length > 0 ? /* @__PURE__ */ import_react.createElement("span", {
			className: "k-menu-expand-arrow",
			"aria-hidden": !0
		}, /* @__PURE__ */ import_react.createElement(o$14, {
			itemId: this.props.item.id,
			verticalMenu: this.props.isMenuVertical,
			dir: l$10(this.props.isDirectionRightToLeft),
			key: "2"
		})) : null;
	}
	get itemRender() {
		return this.props.item.render || this.props.itemRender;
	}
	get linkRender() {
		return this.props.item.linkRender || this.props.linkRender;
	}
	get contentRender() {
		return this.props.item.contentParentItemId ? this.props.item.contentRender : null;
	}
	get Opened() {
		const e = this.props;
		return e.item.items.length > 0 && g$5(e.item.id, e.lastItemIdToBeOpened) && !this.isFirstRender;
	}
	getPopupClassName() {
		return n$12("k-menu-popup", { "k-rtl": this.props.isDirectionRightToLeft });
	}
	getMenuItemClassName(e) {
		return n$12("k-item", "k-menu-item", {
			"k-first": l$12(e.id),
			"k-last": e.isLastFromSiblings,
			"k-disabled": e.disabled
		}, e.cssClass);
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-layout/menu/utils/DirectionHolder.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var e$13 = class {
	constructor() {
		this.phase = "Initialized";
	}
	getIsDirectionRightToLeft() {
		return this.isDirectionRightToLeft;
	}
	setIsDirectionRightToLeft(i) {
		this.phase = this.phase === "NotInitialized" ? "Initialized" : "NewValueReceived", this.previousIsDirectionRightToLeft = this.isDirectionRightToLeft, this.isDirectionRightToLeft = i;
	}
	hasDirectionChanged() {
		return this.phase === "NewValueReceived" ? this.previousIsDirectionRightToLeft !== this.isDirectionRightToLeft : !1;
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-layout/menu/utils/MouseOverHandler.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var i$11 = class {
	constructor(e, s) {
		this.openOnClick = e, this.resetMenu = s, this.isMouseOverEnabled = !e;
	}
	set OpenOnClick(e) {
		!!e != !!this.openOnClick && (this.isMouseOverEnabled = !e), this.openOnClick = e;
	}
	handleItemSelectedViaKeyboard() {
		this.openOnClick && (this.isMouseOverEnabled = !1, this.resetMenu());
	}
	get IsMouseOverEnabled() {
		return this.isMouseOverEnabled;
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-layout/menu/components/Menu.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var v$7 = {
	focusedItemId: "",
	hoveredItemId: "",
	tabbableItemId: "0"
}, h$8 = class h extends import_react.Component {
	constructor(s) {
		super(s), this.menuWrapperEl = null, this.directionHolder = new e$13(), this.inputItems = [], this.items = [], this.reset = () => {
			this.clearItemHoverAndLeaveRequestsIfApplicable(), this.setState(v$7);
		}, this.handleClickOutside = (e) => {
			var t;
			if (this.props.openOnClick && this.state.hoveredItemId !== "") {
				const i = e.target;
				this.menuWrapperEl && !this.menuWrapperEl.contains(i) && (this.menuItemId && (t = i.closest) != null && t.call(i, `[id^="${this.menuItemId}_"]`) || this.setHoveredItemId(""));
			}
		}, this.onKeyDown = (e) => {
			if (this.state.focusedItemId !== "") {
				const t = o$17(this.state.focusedItemId, this.items);
				let i = V(this.items, t.id, e.keyCode, e.key, this.props.vertical, this.directionHolder.getIsDirectionRightToLeft());
				const n = o$17(i, this.items);
				if (n && n.separator && (i = V(this.items, i, e.keyCode, e.key, this.props.vertical, this.directionHolder.getIsDirectionRightToLeft())), t.id !== i && (e.preventDefault(), this.setFocusedItemId(i)), (e.keyCode === e$16.enter || e.keyCode === e$16.space) && !t.disabled && (this.mouseOverHandler.handleItemSelectedViaKeyboard(), this.dispatchSelectEventIfWired(e, t.id), !e.isDefaultPrevented() && t.items.length === 0 && t.url && window.location.assign(t.url)), e.keyCode === e$16.esc && u$7(t.id) && this.props.onClose) {
					const a = this.getInputItem(t.id);
					this.props.onClose({
						target: this,
						item: a,
						itemId: t.id
					});
				}
			}
		}, this.onItemMouseOver = (e) => {
			const t = this.props.openOnClick && !u$7(e) && this.state.hoveredItemId !== "";
			(this.mouseOverHandler.IsMouseOverEnabled || t) && (this.clearItemHoverAndLeaveRequestsIfApplicable(), this.itemHoverRequest = window.setTimeout(() => {
				this.setHoveredItemId(e), this.itemHoverRequest = null;
			}, n$10(this.props)));
		}, this.onItemMouseLeave = (e) => {
			const t = this.props.openOnClick && !u$7(e) && this.state.hoveredItemId !== "";
			(this.mouseOverHandler.IsMouseOverEnabled || t) && this.isItemWithDefaultClose(e) && (this.clearItemHoverAndLeaveRequestsIfApplicable(), this.itemLeaveRequest = window.setTimeout(() => {
				t ? this.setHoveredItemId(P$5(e)) : this.setHoveredItemId(""), this.itemLeaveRequest = null;
			}, o$16(this.props)));
		}, this.onItemFocus = (e) => {
			this.state.hoveredItemId === "" ? this.setFocusedItemId(e) : this.setState((t) => ({
				focusedItemId: e,
				hoveredItemId: t.hoveredItemId,
				tabbableItemId: i$14(e)
			}));
		}, this.onItemClick = (e, t) => {
			const i = o$17(t, this.items);
			if (!i.disabled) {
				const n = u$7(t), a = !i.items || i.items.length === 0;
				n ? (this.setFocusedItemId(t), a ? this.setHoveredItemId("") : this.props.openOnClick && this.state.hoveredItemId !== "" && i$14(this.state.hoveredItemId) === t ? this.setHoveredItemId("") : this.setHoveredItemId(t)) : a && (this.setFocusedItemId(t), this.setHoveredItemId("")), this.dispatchSelectEventIfWired(e, t), !e.isDefaultPrevented() && i.url && window.location.assign(i.url);
			}
		}, this.onPopupClose = (e, t) => {
			this.props.onClose && this.props.onClose({
				target: this,
				item: this.getInputItem(e),
				itemId: e,
				popupCloseEvent: t
			});
		}, this.onItemBlur = (e, t) => {
			if (this.isItemWithDefaultClose(e) && this.setFocusedItemId(""), t.relatedTarget && t.relatedTarget.nodeName === "LI") {
				const i = t.relatedTarget.getAttribute("id");
				if (i && i.includes(this.menuItemId)) return;
			}
			if (u$7(e) && this.props.onClose) {
				const i = this.getInputItem(e);
				this.props.onClose({
					target: this,
					item: i,
					itemId: e
				});
			}
		}, this.getInputItem = (e) => o$17(e, this.inputItems), this.mouseOverHandler = new i$11(this.props.openOnClick, this.reset), this.state = Object.assign({}, v$7, { isFirstRender: !0 });
	}
	get menuItemId() {
		return this.props.id;
	}
	/**
	* The current element or `null` if there is no one.
	*/
	get element() {
		return this.menuWrapperEl;
	}
	get animate() {
		return this.props.animate !== void 0 ? this.props.animate : h.defaultProps.animate;
	}
	/**
	* @hidden
	*/
	render() {
		this.prepareItems(), this.state.isFirstRender || this.directionHolder.setIsDirectionRightToLeft(this.checkIsDirectionRightToLeft());
		const s = this.state.hoveredItemId ? this.state.hoveredItemId : this.state.focusedItemId ? P$5(this.state.focusedItemId) : "";
		return /* @__PURE__ */ import_react.createElement("div", {
			id: this.props.id,
			onKeyDown: this.onKeyDown,
			style: this.props.style,
			className: this.directionHolder.getIsDirectionRightToLeft() ? "k-rtl" : void 0,
			ref: (e) => {
				this.menuWrapperEl = e;
			}
		}, /* @__PURE__ */ import_react.createElement(k$4, {
			className: this.getMenuClassName(),
			"aria-orientation": this.props.vertical ? "vertical" : void 0,
			items: this.items,
			animate: this.animate,
			isMenuVertical: this.props.vertical,
			isDirectionRightToLeft: this.directionHolder.getIsDirectionRightToLeft(),
			focusedItemId: this.state.focusedItemId,
			lastItemIdToBeOpened: s,
			tabbableItemId: this.state.tabbableItemId,
			itemRender: this.props.itemRender,
			linkRender: this.props.linkRender,
			menuGuid: this.menuItemId,
			onMouseLeave: this.onItemMouseLeave,
			onMouseOver: this.onItemMouseOver,
			onFocus: this.onItemFocus,
			onClick: this.onItemClick,
			onBlur: this.onItemBlur,
			onOriginalItemNeeded: this.getInputItem,
			onPopupClose: this.onPopupClose,
			role: this.props.role
		}));
	}
	/**
	* @hidden
	*/
	componentDidMount() {
		this.setState({ isFirstRender: !1 }), this.props.openOnClick && document.addEventListener("mousedown", this.handleClickOutside);
	}
	/**
	* @hidden
	*/
	componentDidUpdate(s) {
		(!!s.vertical != !!this.props.vertical || this.directionHolder.hasDirectionChanged()) && this.reset(), this.mouseOverHandler.OpenOnClick = this.props.openOnClick, s.openOnClick !== this.props.openOnClick && (this.props.openOnClick ? document.addEventListener("mousedown", this.handleClickOutside) : document.removeEventListener("mousedown", this.handleClickOutside));
	}
	/**
	* @hidden
	*/
	componentWillUnmount() {
		this.clearItemHoverAndLeaveRequestsIfApplicable(), document.removeEventListener("mousedown", this.handleClickOutside);
	}
	setFocusedItemId(s) {
		this.setState((e) => {
			const t = s === "" ? e.tabbableItemId : i$14(s);
			return {
				hoveredItemId: s === "" || e$14(e.hoveredItemId) && e$14(s) ? e.hoveredItemId : "",
				focusedItemId: s,
				tabbableItemId: t
			};
		});
	}
	setHoveredItemId(s) {
		this.setState((e) => e$14(s) && e$14(e.focusedItemId) ? {
			hoveredItemId: s,
			focusedItemId: e.focusedItemId,
			tabbableItemId: e.tabbableItemId
		} : {
			hoveredItemId: s,
			focusedItemId: "",
			tabbableItemId: "0"
		});
	}
	getMenuClassName() {
		return n$12("k-reset", "k-header", "k-menu", { "k-menu-horizontal": !this.props.vertical }, { "k-menu-vertical": this.props.vertical }, this.props.className);
	}
	clearItemHoverAndLeaveRequestsIfApplicable() {
		this.itemHoverRequest && (clearTimeout(this.itemHoverRequest), this.itemHoverRequest = null), this.itemLeaveRequest && (clearTimeout(this.itemLeaveRequest), this.itemLeaveRequest = null);
	}
	isItemWithDefaultClose(s) {
		return !this.props.customCloseItemIds || this.props.customCloseItemIds.indexOf(s) === -1;
	}
	checkIsDirectionRightToLeft() {
		return !!(this.props.dir !== void 0 ? this.props.dir === "rtl" : this.menuWrapperEl && getComputedStyle(this.menuWrapperEl).direction === "rtl");
	}
	prepareItems() {
		const { items: s, inputItems: e } = L$2(this.props.items, this.props.children);
		this.items = s, this.inputItems = e;
	}
	dispatchSelectEventIfWired(s, e) {
		v$10(this.props.onSelect, s, this, {
			item: this.getInputItem(e),
			itemId: e
		});
	}
};
h$8.propTypes = {
	vertical: import_prop_types.default.bool,
	items: import_prop_types.default.arrayOf(import_prop_types.default.object),
	style: import_prop_types.default.object,
	animate: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.shape({
		openDuration: import_prop_types.default.number,
		closeDuration: import_prop_types.default.number
	})]),
	dir: import_prop_types.default.string,
	hoverOpenDelay: import_prop_types.default.number,
	hoverCloseDelay: import_prop_types.default.number,
	openOnClick: import_prop_types.default.bool,
	itemRender: import_prop_types.default.any,
	linkRender: import_prop_types.default.any,
	customCloseItemIds: import_prop_types.default.arrayOf(import_prop_types.default.string),
	onSelect: import_prop_types.default.func,
	onClose: import_prop_types.default.func,
	role: import_prop_types.default.string
}, h$8.defaultProps = {
	vertical: !1,
	animate: !0
};
var b$7 = h$8;
//#endregion
//#region node_modules/@progress/kendo-react-layout/tabstrip/TabStripNavigationItem.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var v$6 = import_react.forwardRef((C, I) => {
	const { id: d, active: o, disabled: r, title: g = "Untitled", index: a, renderAllContent: u, first: b, last: p, contentPanelId: n, onSelect: i } = C, s = import_react.useRef(null), f = import_react.useCallback(() => {
		var l;
		(l = s.current) == null || l.focus();
	}, []), c = import_react.useCallback(() => {
		var l;
		(l = s.current) == null || l.blur();
	}, []), N = import_react.useCallback(() => ({
		focus: f,
		blur: c
	}), [f, c]);
	import_react.useImperativeHandle(I, N);
	const k = import_react.useCallback(() => {
		i?.(a), s.current && (s.current.tabIndex = 0, s.current.focus());
	}, [i, a]), m = import_react.useMemo(() => u ? `${n}-${a.toString()}` : n, [
		u,
		n,
		a
	]), T = import_react.useMemo(() => n$12("k-tabstrip-item", {
		"k-disabled": r,
		"k-active": o,
		"k-first": b,
		"k-last": p
	}), [
		r,
		o,
		b,
		p
	]), x = import_react.useMemo(() => ({
		id: `${d}-${a.toString()}`,
		"aria-selected": o,
		"aria-controls": o ? m : void 0,
		"aria-disabled": r,
		role: "tab",
		onClick: r ? void 0 : k
	}), [
		d,
		a,
		o,
		m,
		r,
		k
	]);
	return /* @__PURE__ */ import_react.createElement("li", {
		...x,
		className: T,
		ref: s,
		onBlur: c,
		"aria-controls": m
	}, /* @__PURE__ */ import_react.createElement("span", { className: "k-link" }, g));
});
v$6.propTypes = {
	active: import_prop_types.default.bool,
	disabled: import_prop_types.default.bool,
	index: import_prop_types.default.number,
	onSelect: import_prop_types.default.func,
	title: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.element]),
	first: import_prop_types.default.bool,
	last: import_prop_types.default.bool
};
v$6.displayName = "TabStripNavigationItem";
//#endregion
//#region node_modules/@progress/kendo-react-layout/tabstrip/messages/index.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var r$19 = "prevArrow.title", t$8 = "nextArrow.title", e$12 = {
	[r$19]: "Previous tab arrow",
	[t$8]: "Next tab arrow"
};
//#endregion
//#region node_modules/@progress/kendo-react-layout/tabstrip/TabStripNavigation.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var ht = (P) => Array.from({ length: P }), S$3 = "smooth", p$13 = "prev", h$7 = "next", lt = (P) => {
	const { selected: g, tabPosition: m, tabAlignment: B, children: k, onSelect: O, onKeyDown: R, onScroll: T, navItemId: E, contentPanelId: M, renderAllContent: F, scrollable: H, scrollButtons: C, scrollButtonsPosition: b, tabIndex: y, buttonScrollSpeed: D, mouseScrollSpeed: W, prevButton: $, nextButton: _, dir: K, size: U, containerScrollPosition: d, itemsNavRef: rt } = P, st = import_react.useRef(null), I = rt || st, L = i$17(), u = import_react.useCallback(() => /top|bottom/.test(m || "top"), [m]), v = import_react.useCallback(() => K === "rtl", [K]), V = import_react.useCallback(() => {
		const t = I.current, o = t == null ? void 0 : t.children[g || 0];
		if (o instanceof HTMLElement && t instanceof HTMLElement) {
			const l = u(), i = l ? t.offsetWidth : t.offsetHeight, s = l ? o.offsetWidth : o.offsetHeight, f = l ? "left" : "top";
			let e = l ? t.scrollLeft : t.scrollTop, c = 0;
			if (v()) {
				const a = o.offsetLeft;
				e = e * -1, a < 0 ? (c = a - s + t.offsetLeft, t.scrollTo({
					[f]: c,
					behavior: S$3
				})) : a + s > i - e && (c = e + a - s, t.scrollTo({
					[f]: c,
					behavior: S$3
				}));
			} else {
				const a = l ? o.offsetLeft - t.offsetLeft : o.offsetTop - t.offsetTop;
				e + i < a + s ? (c = a + s - i, t.scrollTo({
					[f]: c,
					behavior: S$3
				})) : e > a && (c = a, t.scrollTo({
					[f]: c,
					behavior: S$3
				}));
			}
		}
	}, [
		I,
		g,
		u,
		v
	]);
	import_react.useEffect(() => {
		H && V();
	}, [
		H,
		g,
		V
	]);
	const A = import_react.useCallback(() => {
		T?.();
	}, [T]), X = import_react.useCallback((t, o) => {
		const l = I.current;
		if (!l) return;
		const i = u(), s = i ? l.scrollWidth - l.offsetWidth : l.scrollHeight - l.offsetHeight, f = (o.type === "click" ? D : W) || 0;
		let e = i ? l.scrollLeft : l.scrollTop;
		v() && u() ? (t === p$13 && e < 0 && (e += f), t === h$7 && e < s && (e -= f), e = Math.min(0, Math.min(s, e))) : (t === p$13 && e > 0 && (e -= f), t === h$7 && e < s && (e += f), e = Math.max(0, Math.min(s, e)));
		const c = o.type === "click" ? S$3 : void 0;
		i ? l.scrollTo({
			left: e,
			behavior: c
		}) : l.scrollTo({
			top: e,
			behavior: c
		});
	}, [
		I,
		u,
		v,
		D,
		W
	]), N = import_react.useCallback((t, o) => {
		X(t, o);
	}, [X]), j = import_react.useCallback((t) => {
		N(p$13, t);
	}, [N]), q = import_react.useCallback((t) => {
		N(h$7, t);
	}, [N]), z = import_react.useCallback((t) => {
		const o = u(), l = v(), s = o ? l ? "caret-alt-right" : "caret-alt-left" : "caret-alt-up", e = o ? l ? caretAltRightIcon : caretAltLeftIcon : caretAltUpIcon, a = o ? l ? "caret-alt-left" : "caret-alt-right" : "caret-alt-down", at = o ? l ? caretAltLeftIcon : caretAltRightIcon : caretAltDownIcon, w = {
			prev: {
				arrowTab: "k-tabstrip-prev",
				fontIcon: s,
				svgIcon: e,
				title: L.toLanguageString(r$19, e$12[r$19])
			},
			next: {
				arrowTab: "k-tabstrip-next",
				fontIcon: a,
				svgIcon: at,
				title: L.toLanguageString(t$8, e$12[t$8])
			}
		}, it = (t === p$13 ? $ : _) || A$5, ft = t === p$13 ? j : q, mt = d === null || t === p$13 && (d === "start" || d === "top") || t === h$7 && (d === "end" || d === "bottom");
		return /* @__PURE__ */ import_react.createElement(it, {
			disabled: mt,
			className: n$12(`${w[t].arrowTab}`),
			onClick: ft,
			icon: w[t].fontIcon,
			svgIcon: w[t].svgIcon,
			size: U,
			tabIndex: -1,
			fillMode: "flat",
			title: w[t].title
		});
	}, [
		u,
		v,
		$,
		_,
		j,
		q,
		d,
		U,
		L
	]), G = import_react.Children.count(k), J = import_react.Children.toArray(k), Q = import_react.useMemo(() => k ? ht(G).map((t, o, l) => {
		const i = {
			active: g === o,
			disabled: J[o].props.disabled,
			index: o,
			title: J[o].props.title,
			first: o === 0,
			last: o === l.length - 1,
			contentPanelId: M,
			renderAllContent: F,
			id: E,
			onSelect: O,
			onScroll: A
		};
		return /* @__PURE__ */ import_react.createElement(v$6, {
			key: `${E}-${o}`,
			...i
		});
	}) : null, [
		k,
		G,
		g,
		M,
		F,
		E,
		O,
		A
	]), ct = import_react.useMemo(() => n$12("k-tabstrip-items-wrapper k-tabstrip-items-wrapper-scroll", {
		"k-hstack": m === "top" || m === "bottom",
		"k-vstack": m === "left" || m === "right"
	}), [m]), Y = import_react.useMemo(() => n$12("k-tabstrip-items k-tabstrip-items-scroll k-reset", `k-tabstrip-items-${B}`), [B]);
	return /* @__PURE__ */ import_react.createElement("div", { className: ct }, H ? /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, C !== "hidden" && b && [
		"split",
		"start",
		"around",
		"before"
	].includes(b) && z(p$13), C !== "hidden" && (b === "start" || b === "before") && z(h$7), /* @__PURE__ */ import_react.createElement("ul", {
		ref: I,
		className: Y,
		role: "tablist",
		tabIndex: y,
		onKeyDown: R,
		onScroll: A,
		"aria-orientation": m === "left" || m === "right" ? "vertical" : void 0
	}, Q), C !== "hidden" && (b === "end" || b === "after") && z(p$13), C !== "hidden" && b && [
		"split",
		"end",
		"around",
		"after"
	].includes(b) && z(h$7)) : /* @__PURE__ */ import_react.createElement("ul", {
		className: Y,
		role: "tablist",
		tabIndex: y,
		onKeyDown: R
	}, Q));
};
lt.propTypes = {
	children: import_prop_types.default.oneOfType([import_prop_types.default.element, import_prop_types.default.arrayOf(import_prop_types.default.element)]),
	onSelect: import_prop_types.default.func,
	onKeyDown: import_prop_types.default.func,
	onScroll: import_prop_types.default.func,
	selected: import_prop_types.default.number,
	tabIndex: import_prop_types.default.number,
	scrollable: import_prop_types.default.bool,
	size: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large"
	]),
	scrollButtons: import_prop_types.default.oneOf([
		"auto",
		"visible",
		"hidden"
	]),
	scrollButtonsPosition: import_prop_types.default.oneOf([
		"split",
		"start",
		"end",
		"around",
		"before",
		"after"
	]),
	containerScrollPosition: import_prop_types.default.oneOf([
		"start",
		"end",
		"top",
		"bottom",
		"middle",
		null
	])
};
lt.displayName = "TabStripNavigation";
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
	return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
		return t.__proto__ = e, t;
	}, _setPrototypeOf(t, e);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
	t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
//#endregion
//#region node_modules/dom-helpers/esm/hasClass.js
/**
* Checks if a given element has a CSS class.
* 
* @param element the element
* @param className the CSS class name
*/
function hasClass(element, className) {
	if (element.classList) return !!className && element.classList.contains(className);
	return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
//#endregion
//#region node_modules/dom-helpers/esm/addClass.js
/**
* Adds a CSS class to a given element.
* 
* @param element the element
* @param className the CSS class name
*/
function addClass(element, className) {
	if (element.classList) element.classList.add(className);
	else if (!hasClass(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
	else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}
//#endregion
//#region node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
	return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
/**
* Removes a CSS class from a given element.
* 
* @param element the element
* @param className the CSS class name
*/
function removeClass$1(element, className) {
	if (element.classList) element.classList.remove(className);
	else if (typeof element.className === "string") element.className = replaceClassName(element.className, className);
	else element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
}
//#endregion
//#region node_modules/react-transition-group/esm/config.js
var config_default = { disabled: false };
//#endregion
//#region node_modules/react-transition-group/esm/utils/PropTypes.js
var timeoutsShape = import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.shape({
	enter: import_prop_types.default.number,
	exit: import_prop_types.default.number,
	appear: import_prop_types.default.number
}).isRequired]);
var classNamesShape = import_prop_types.default.oneOfType([
	import_prop_types.default.string,
	import_prop_types.default.shape({
		enter: import_prop_types.default.string,
		exit: import_prop_types.default.string,
		active: import_prop_types.default.string
	}),
	import_prop_types.default.shape({
		enter: import_prop_types.default.string,
		enterDone: import_prop_types.default.string,
		enterActive: import_prop_types.default.string,
		exit: import_prop_types.default.string,
		exitDone: import_prop_types.default.string,
		exitActive: import_prop_types.default.string
	})
]);
//#endregion
//#region node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext_default = import_react.createContext(null);
//#endregion
//#region node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow(node) {
	return node.scrollTop;
};
//#endregion
//#region node_modules/react-transition-group/esm/Transition.js
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
/**
* The Transition component lets you describe a transition from one component
* state to another _over time_ with a simple declarative API. Most commonly
* it's used to animate the mounting and unmounting of a component, but can also
* be used to describe in-place transition states as well.
*
* ---
*
* **Note**: `Transition` is a platform-agnostic base component. If you're using
* transitions in CSS, you'll probably want to use
* [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
* instead. It inherits all the features of `Transition`, but contains
* additional features necessary to play nice with CSS transitions (hence the
* name of the component).
*
* ---
*
* By default the `Transition` component does not alter the behavior of the
* component it renders, it only tracks "enter" and "exit" states for the
* components. It's up to you to give meaning and effect to those states. For
* example we can add styles to a component when it enters or exits:
*
* ```jsx
* import { Transition } from 'react-transition-group';
*
* const duration = 300;
*
* const defaultStyle = {
*   transition: `opacity ${duration}ms ease-in-out`,
*   opacity: 0,
* }
*
* const transitionStyles = {
*   entering: { opacity: 1 },
*   entered:  { opacity: 1 },
*   exiting:  { opacity: 0 },
*   exited:  { opacity: 0 },
* };
*
* const Fade = ({ in: inProp }) => (
*   <Transition in={inProp} timeout={duration}>
*     {state => (
*       <div style={{
*         ...defaultStyle,
*         ...transitionStyles[state]
*       }}>
*         I'm a fade Transition!
*       </div>
*     )}
*   </Transition>
* );
* ```
*
* There are 4 main states a Transition can be in:
*  - `'entering'`
*  - `'entered'`
*  - `'exiting'`
*  - `'exited'`
*
* Transition state is toggled via the `in` prop. When `true` the component
* begins the "Enter" stage. During this stage, the component will shift from
* its current transition state, to `'entering'` for the duration of the
* transition and then to the `'entered'` stage once it's complete. Let's take
* the following example (we'll use the
* [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
*
* ```jsx
* function App() {
*   const [inProp, setInProp] = useState(false);
*   return (
*     <div>
*       <Transition in={inProp} timeout={500}>
*         {state => (
*           // ...
*         )}
*       </Transition>
*       <button onClick={() => setInProp(true)}>
*         Click to Enter
*       </button>
*     </div>
*   );
* }
* ```
*
* When the button is clicked the component will shift to the `'entering'` state
* and stay there for 500ms (the value of `timeout`) before it finally switches
* to `'entered'`.
*
* When `in` is `false` the same thing happens except the state moves from
* `'exiting'` to `'exited'`.
*/
var Transition = /* @__PURE__ */ function(_React$Component) {
	_inheritsLoose(Transition, _React$Component);
	function Transition(props, context) {
		var _this = _React$Component.call(this, props, context) || this;
		var parentGroup = context;
		var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
		var initialStatus;
		_this.appearStatus = null;
		if (props.in) if (appear) {
			initialStatus = EXITED;
			_this.appearStatus = ENTERING;
		} else initialStatus = ENTERED;
		else if (props.unmountOnExit || props.mountOnEnter) initialStatus = UNMOUNTED;
		else initialStatus = EXITED;
		_this.state = { status: initialStatus };
		_this.nextCallback = null;
		return _this;
	}
	Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
		if (_ref.in && prevState.status === "unmounted") return { status: EXITED };
		return null;
	};
	var _proto = Transition.prototype;
	_proto.componentDidMount = function componentDidMount() {
		this.updateStatus(true, this.appearStatus);
	};
	_proto.componentDidUpdate = function componentDidUpdate(prevProps) {
		var nextStatus = null;
		if (prevProps !== this.props) {
			var status = this.state.status;
			if (this.props.in) {
				if (status !== "entering" && status !== "entered") nextStatus = ENTERING;
			} else if (status === "entering" || status === "entered") nextStatus = EXITING;
		}
		this.updateStatus(false, nextStatus);
	};
	_proto.componentWillUnmount = function componentWillUnmount() {
		this.cancelNextCallback();
	};
	_proto.getTimeouts = function getTimeouts() {
		var timeout = this.props.timeout;
		var exit = enter = appear = timeout, enter, appear;
		if (timeout != null && typeof timeout !== "number") {
			exit = timeout.exit;
			enter = timeout.enter;
			appear = timeout.appear !== void 0 ? timeout.appear : enter;
		}
		return {
			exit,
			enter,
			appear
		};
	};
	_proto.updateStatus = function updateStatus(mounting, nextStatus) {
		if (mounting === void 0) mounting = false;
		if (nextStatus !== null) {
			this.cancelNextCallback();
			if (nextStatus === "entering") {
				if (this.props.unmountOnExit || this.props.mountOnEnter) {
					var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
					if (node) forceReflow(node);
				}
				this.performEnter(mounting);
			} else this.performExit();
		} else if (this.props.unmountOnExit && this.state.status === "exited") this.setState({ status: UNMOUNTED });
	};
	_proto.performEnter = function performEnter(mounting) {
		var _this2 = this;
		var enter = this.props.enter;
		var appearing = this.context ? this.context.isMounting : mounting;
		var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
		var timeouts = this.getTimeouts();
		var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
		if (!mounting && !enter || config_default.disabled) {
			this.safeSetState({ status: ENTERED }, function() {
				_this2.props.onEntered(maybeNode);
			});
			return;
		}
		this.props.onEnter(maybeNode, maybeAppearing);
		this.safeSetState({ status: ENTERING }, function() {
			_this2.props.onEntering(maybeNode, maybeAppearing);
			_this2.onTransitionEnd(enterTimeout, function() {
				_this2.safeSetState({ status: ENTERED }, function() {
					_this2.props.onEntered(maybeNode, maybeAppearing);
				});
			});
		});
	};
	_proto.performExit = function performExit() {
		var _this3 = this;
		var exit = this.props.exit;
		var timeouts = this.getTimeouts();
		var maybeNode = this.props.nodeRef ? void 0 : import_react_dom.default.findDOMNode(this);
		if (!exit || config_default.disabled) {
			this.safeSetState({ status: EXITED }, function() {
				_this3.props.onExited(maybeNode);
			});
			return;
		}
		this.props.onExit(maybeNode);
		this.safeSetState({ status: EXITING }, function() {
			_this3.props.onExiting(maybeNode);
			_this3.onTransitionEnd(timeouts.exit, function() {
				_this3.safeSetState({ status: EXITED }, function() {
					_this3.props.onExited(maybeNode);
				});
			});
		});
	};
	_proto.cancelNextCallback = function cancelNextCallback() {
		if (this.nextCallback !== null) {
			this.nextCallback.cancel();
			this.nextCallback = null;
		}
	};
	_proto.safeSetState = function safeSetState(nextState, callback) {
		callback = this.setNextCallback(callback);
		this.setState(nextState, callback);
	};
	_proto.setNextCallback = function setNextCallback(callback) {
		var _this4 = this;
		var active = true;
		this.nextCallback = function(event) {
			if (active) {
				active = false;
				_this4.nextCallback = null;
				callback(event);
			}
		};
		this.nextCallback.cancel = function() {
			active = false;
		};
		return this.nextCallback;
	};
	_proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
		this.setNextCallback(handler);
		var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
		var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
		if (!node || doesNotHaveTimeoutOrListener) {
			setTimeout(this.nextCallback, 0);
			return;
		}
		if (this.props.addEndListener) {
			var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
			this.props.addEndListener(maybeNode, maybeNextCallback);
		}
		if (timeout != null) setTimeout(this.nextCallback, timeout);
	};
	_proto.render = function render() {
		var status = this.state.status;
		if (status === "unmounted") return null;
		var _this$props = this.props, children = _this$props.children;
		_this$props.in;
		_this$props.mountOnEnter;
		_this$props.unmountOnExit;
		_this$props.appear;
		_this$props.enter;
		_this$props.exit;
		_this$props.timeout;
		_this$props.addEndListener;
		_this$props.onEnter;
		_this$props.onEntering;
		_this$props.onEntered;
		_this$props.onExit;
		_this$props.onExiting;
		_this$props.onExited;
		_this$props.nodeRef;
		var childProps = _objectWithoutPropertiesLoose(_this$props, [
			"children",
			"in",
			"mountOnEnter",
			"unmountOnExit",
			"appear",
			"enter",
			"exit",
			"timeout",
			"addEndListener",
			"onEnter",
			"onEntering",
			"onEntered",
			"onExit",
			"onExiting",
			"onExited",
			"nodeRef"
		]);
		return /* @__PURE__ */ import_react.createElement(TransitionGroupContext_default.Provider, { value: null }, typeof children === "function" ? children(status, childProps) : import_react.cloneElement(import_react.Children.only(children), childProps));
	};
	return Transition;
}(import_react.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = {
	/**
	* A React reference to DOM element that need to transition:
	* https://stackoverflow.com/a/51127130/4671932
	*
	*   - When `nodeRef` prop is used, `node` is not passed to callback functions
	*      (e.g. `onEnter`) because user already has direct access to the node.
	*   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
	*     `nodeRef` need to be provided to `Transition` with changed `key` prop
	*     (see
	*     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
	*/
	nodeRef: import_prop_types.default.shape({ current: typeof Element === "undefined" ? import_prop_types.default.any : function(propValue, key, componentName, location, propFullName, secret) {
		var value = propValue[key];
		return import_prop_types.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
	} }),
	/**
	* A `function` child can be used instead of a React element. This function is
	* called with the current transition status (`'entering'`, `'entered'`,
	* `'exiting'`, `'exited'`), which can be used to apply context
	* specific props to a component.
	*
	* ```jsx
	* <Transition in={this.state.in} timeout={150}>
	*   {state => (
	*     <MyComponent className={`fade fade-${state}`} />
	*   )}
	* </Transition>
	* ```
	*/
	children: import_prop_types.default.oneOfType([import_prop_types.default.func.isRequired, import_prop_types.default.element.isRequired]).isRequired,
	/**
	* Show the component; triggers the enter or exit states
	*/
	in: import_prop_types.default.bool,
	/**
	* By default the child component is mounted immediately along with
	* the parent `Transition` component. If you want to "lazy mount" the component on the
	* first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
	* mounted, even on "exited", unless you also specify `unmountOnExit`.
	*/
	mountOnEnter: import_prop_types.default.bool,
	/**
	* By default the child component stays mounted after it reaches the `'exited'` state.
	* Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
	*/
	unmountOnExit: import_prop_types.default.bool,
	/**
	* By default the child component does not perform the enter transition when
	* it first mounts, regardless of the value of `in`. If you want this
	* behavior, set both `appear` and `in` to `true`.
	*
	* > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
	* > only adds an additional enter transition. However, in the
	* > `<CSSTransition>` component that first enter transition does result in
	* > additional `.appear-*` classes, that way you can choose to style it
	* > differently.
	*/
	appear: import_prop_types.default.bool,
	/**
	* Enable or disable enter transitions.
	*/
	enter: import_prop_types.default.bool,
	/**
	* Enable or disable exit transitions.
	*/
	exit: import_prop_types.default.bool,
	/**
	* The duration of the transition, in milliseconds.
	* Required unless `addEndListener` is provided.
	*
	* You may specify a single timeout for all transitions:
	*
	* ```jsx
	* timeout={500}
	* ```
	*
	* or individually:
	*
	* ```jsx
	* timeout={{
	*  appear: 500,
	*  enter: 300,
	*  exit: 500,
	* }}
	* ```
	*
	* - `appear` defaults to the value of `enter`
	* - `enter` defaults to `0`
	* - `exit` defaults to `0`
	*
	* @type {number | { enter?: number, exit?: number, appear?: number }}
	*/
	timeout: function timeout(props) {
		var pt = timeoutsShape;
		if (!props.addEndListener) pt = pt.isRequired;
		for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
		return pt.apply(void 0, [props].concat(args));
	},
	/**
	* Add a custom transition end trigger. Called with the transitioning
	* DOM node and a `done` callback. Allows for more fine grained transition end
	* logic. Timeouts are still used as a fallback if provided.
	*
	* **Note**: when `nodeRef` prop is passed, `node` is not passed.
	*
	* ```jsx
	* addEndListener={(node, done) => {
	*   // use the css transitionend event to mark the finish of a transition
	*   node.addEventListener('transitionend', done, false);
	* }}
	* ```
	*/
	addEndListener: import_prop_types.default.func,
	/**
	* Callback fired before the "entering" status is applied. An extra parameter
	* `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	*
	* **Note**: when `nodeRef` prop is passed, `node` is not passed.
	*
	* @type Function(node: HtmlElement, isAppearing: bool) -> void
	*/
	onEnter: import_prop_types.default.func,
	/**
	* Callback fired after the "entering" status is applied. An extra parameter
	* `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	*
	* **Note**: when `nodeRef` prop is passed, `node` is not passed.
	*
	* @type Function(node: HtmlElement, isAppearing: bool)
	*/
	onEntering: import_prop_types.default.func,
	/**
	* Callback fired after the "entered" status is applied. An extra parameter
	* `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	*
	* **Note**: when `nodeRef` prop is passed, `node` is not passed.
	*
	* @type Function(node: HtmlElement, isAppearing: bool) -> void
	*/
	onEntered: import_prop_types.default.func,
	/**
	* Callback fired before the "exiting" status is applied.
	*
	* **Note**: when `nodeRef` prop is passed, `node` is not passed.
	*
	* @type Function(node: HtmlElement) -> void
	*/
	onExit: import_prop_types.default.func,
	/**
	* Callback fired after the "exiting" status is applied.
	*
	* **Note**: when `nodeRef` prop is passed, `node` is not passed.
	*
	* @type Function(node: HtmlElement) -> void
	*/
	onExiting: import_prop_types.default.func,
	/**
	* Callback fired after the "exited" status is applied.
	*
	* **Note**: when `nodeRef` prop is passed, `node` is not passed
	*
	* @type Function(node: HtmlElement) -> void
	*/
	onExited: import_prop_types.default.func
};
function noop$1() {}
Transition.defaultProps = {
	in: false,
	mountOnEnter: false,
	unmountOnExit: false,
	appear: false,
	enter: true,
	exit: true,
	onEnter: noop$1,
	onEntering: noop$1,
	onEntered: noop$1,
	onExit: noop$1,
	onExiting: noop$1,
	onExited: noop$1
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
//#endregion
//#region node_modules/react-transition-group/esm/CSSTransition.js
var _addClass = function addClass$1(node, classes) {
	return node && classes && classes.split(" ").forEach(function(c) {
		return addClass(node, c);
	});
};
var removeClass = function removeClass(node, classes) {
	return node && classes && classes.split(" ").forEach(function(c) {
		return removeClass$1(node, c);
	});
};
/**
* A transition component inspired by the excellent
* [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
* use it if you're using CSS transitions or animations. It's built upon the
* [`Transition`](https://reactcommunity.org/react-transition-group/transition)
* component, so it inherits all of its props.
*
* `CSSTransition` applies a pair of class names during the `appear`, `enter`,
* and `exit` states of the transition. The first class is applied and then a
* second `*-active` class in order to activate the CSS transition. After the
* transition, matching `*-done` class names are applied to persist the
* transition state.
*
* ```jsx
* function App() {
*   const [inProp, setInProp] = useState(false);
*   return (
*     <div>
*       <CSSTransition in={inProp} timeout={200} classNames="my-node">
*         <div>
*           {"I'll receive my-node-* classes"}
*         </div>
*       </CSSTransition>
*       <button type="button" onClick={() => setInProp(true)}>
*         Click to Enter
*       </button>
*     </div>
*   );
* }
* ```
*
* When the `in` prop is set to `true`, the child component will first receive
* the class `example-enter`, then the `example-enter-active` will be added in
* the next tick. `CSSTransition` [forces a
* reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
* between before adding the `example-enter-active`. This is an important trick
* because it allows us to transition between `example-enter` and
* `example-enter-active` even though they were added immediately one after
* another. Most notably, this is what makes it possible for us to animate
* _appearance_.
*
* ```css
* .my-node-enter {
*   opacity: 0;
* }
* .my-node-enter-active {
*   opacity: 1;
*   transition: opacity 200ms;
* }
* .my-node-exit {
*   opacity: 1;
* }
* .my-node-exit-active {
*   opacity: 0;
*   transition: opacity 200ms;
* }
* ```
*
* `*-active` classes represent which styles you want to animate **to**, so it's
* important to add `transition` declaration only to them, otherwise transitions
* might not behave as intended! This might not be obvious when the transitions
* are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
* the example above (minus `transition`), but it becomes apparent in more
* complex transitions.
*
* **Note**: If you're using the
* [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
* prop, make sure to define styles for `.appear-*` classes as well.
*/
var CSSTransition = /* @__PURE__ */ function(_React$Component) {
	_inheritsLoose(CSSTransition, _React$Component);
	function CSSTransition() {
		var _this;
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		_this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
		_this.appliedClasses = {
			appear: {},
			enter: {},
			exit: {}
		};
		_this.onEnter = function(maybeNode, maybeAppearing) {
			var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
			_this.removeClasses(node, "exit");
			_this.addClass(node, appearing ? "appear" : "enter", "base");
			if (_this.props.onEnter) _this.props.onEnter(maybeNode, maybeAppearing);
		};
		_this.onEntering = function(maybeNode, maybeAppearing) {
			var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0];
			var type = _this$resolveArgument2[1] ? "appear" : "enter";
			_this.addClass(node, type, "active");
			if (_this.props.onEntering) _this.props.onEntering(maybeNode, maybeAppearing);
		};
		_this.onEntered = function(maybeNode, maybeAppearing) {
			var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0];
			var type = _this$resolveArgument3[1] ? "appear" : "enter";
			_this.removeClasses(node, type);
			_this.addClass(node, type, "done");
			if (_this.props.onEntered) _this.props.onEntered(maybeNode, maybeAppearing);
		};
		_this.onExit = function(maybeNode) {
			var node = _this.resolveArguments(maybeNode)[0];
			_this.removeClasses(node, "appear");
			_this.removeClasses(node, "enter");
			_this.addClass(node, "exit", "base");
			if (_this.props.onExit) _this.props.onExit(maybeNode);
		};
		_this.onExiting = function(maybeNode) {
			var node = _this.resolveArguments(maybeNode)[0];
			_this.addClass(node, "exit", "active");
			if (_this.props.onExiting) _this.props.onExiting(maybeNode);
		};
		_this.onExited = function(maybeNode) {
			var node = _this.resolveArguments(maybeNode)[0];
			_this.removeClasses(node, "exit");
			_this.addClass(node, "exit", "done");
			if (_this.props.onExited) _this.props.onExited(maybeNode);
		};
		_this.resolveArguments = function(maybeNode, maybeAppearing) {
			return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
		};
		_this.getClassNames = function(type) {
			var classNames = _this.props.classNames;
			var isStringClassNames = typeof classNames === "string";
			var prefix = isStringClassNames && classNames ? classNames + "-" : "";
			var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
			return {
				baseClassName,
				activeClassName: isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"],
				doneClassName: isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"]
			};
		};
		return _this;
	}
	var _proto = CSSTransition.prototype;
	_proto.addClass = function addClass(node, type, phase) {
		var className = this.getClassNames(type)[phase + "ClassName"];
		var doneClassName = this.getClassNames("enter").doneClassName;
		if (type === "appear" && phase === "done" && doneClassName) className += " " + doneClassName;
		if (phase === "active") {
			if (node) forceReflow(node);
		}
		if (className) {
			this.appliedClasses[type][phase] = className;
			_addClass(node, className);
		}
	};
	_proto.removeClasses = function removeClasses(node, type) {
		var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
		this.appliedClasses[type] = {};
		if (baseClassName) removeClass(node, baseClassName);
		if (activeClassName) removeClass(node, activeClassName);
		if (doneClassName) removeClass(node, doneClassName);
	};
	_proto.render = function render() {
		var _this$props = this.props;
		_this$props.classNames;
		var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
		return /* @__PURE__ */ import_react.createElement(Transition, _extends({}, props, {
			onEnter: this.onEnter,
			onEntered: this.onEntered,
			onEntering: this.onEntering,
			onExit: this.onExit,
			onExiting: this.onExiting,
			onExited: this.onExited
		}));
	};
	return CSSTransition;
}(import_react.Component);
CSSTransition.defaultProps = { classNames: "" };
CSSTransition.propTypes = _extends({}, Transition.propTypes, {
	/**
	* The animation classNames applied to the component as it appears, enters,
	* exits or has finished the transition. A single name can be provided, which
	* will be suffixed for each stage, e.g. `classNames="fade"` applies:
	*
	* - `fade-appear`, `fade-appear-active`, `fade-appear-done`
	* - `fade-enter`, `fade-enter-active`, `fade-enter-done`
	* - `fade-exit`, `fade-exit-active`, `fade-exit-done`
	*
	* A few details to note about how these classes are applied:
	*
	* 1. They are _joined_ with the ones that are already defined on the child
	*    component, so if you want to add some base styles, you can use
	*    `className` without worrying that it will be overridden.
	*
	* 2. If the transition component mounts with `in={false}`, no classes are
	*    applied yet. You might be expecting `*-exit-done`, but if you think
	*    about it, a component cannot finish exiting if it hasn't entered yet.
	*
	* 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
	*    allows you to define different behavior for when appearing is done and
	*    when regular entering is done, using selectors like
	*    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
	*    an epic entrance animation when element first appears in the DOM using
	*    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
	*    simply use `fade-enter-done` for defining both cases.
	*
	* Each individual classNames can also be specified independently like:
	*
	* ```js
	* classNames={{
	*  appear: 'my-appear',
	*  appearActive: 'my-active-appear',
	*  appearDone: 'my-done-appear',
	*  enter: 'my-enter',
	*  enterActive: 'my-active-enter',
	*  enterDone: 'my-done-enter',
	*  exit: 'my-exit',
	*  exitActive: 'my-active-exit',
	*  exitDone: 'my-done-exit',
	* }}
	* ```
	*
	* If you want to set these classes using CSS Modules:
	*
	* ```js
	* import styles from './styles.css';
	* ```
	*
	* you might want to use camelCase in your CSS file, that way could simply
	* spread them instead of listing them one by one:
	*
	* ```js
	* classNames={{ ...styles }}
	* ```
	*
	* @type {string | {
	*  appear?: string,
	*  appearActive?: string,
	*  appearDone?: string,
	*  enter?: string,
	*  enterActive?: string,
	*  enterDone?: string,
	*  exit?: string,
	*  exitActive?: string,
	*  exitDone?: string,
	* }}
	*/
	classNames: classNamesShape,
	/**
	* A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
	* applied.
	*
	* **Note**: when `nodeRef` prop is passed, `node` is not passed.
	*
	* @type Function(node: HtmlElement, isAppearing: bool)
	*/
	onEnter: import_prop_types.default.func,
	/**
	* A `<Transition>` callback fired immediately after the 'enter-active' or
	* 'appear-active' class is applied.
	*
	* **Note**: when `nodeRef` prop is passed, `node` is not passed.
	*
	* @type Function(node: HtmlElement, isAppearing: bool)
	*/
	onEntering: import_prop_types.default.func,
	/**
	* A `<Transition>` callback fired immediately after the 'enter' or
	* 'appear' classes are **removed** and the `done` class is added to the DOM node.
	*
	* **Note**: when `nodeRef` prop is passed, `node` is not passed.
	*
	* @type Function(node: HtmlElement, isAppearing: bool)
	*/
	onEntered: import_prop_types.default.func,
	/**
	* A `<Transition>` callback fired immediately after the 'exit' class is
	* applied.
	*
	* **Note**: when `nodeRef` prop is passed, `node` is not passed
	*
	* @type Function(node: HtmlElement)
	*/
	onExit: import_prop_types.default.func,
	/**
	* A `<Transition>` callback fired immediately after the 'exit-active' is applied.
	*
	* **Note**: when `nodeRef` prop is passed, `node` is not passed
	*
	* @type Function(node: HtmlElement)
	*/
	onExiting: import_prop_types.default.func,
	/**
	* A `<Transition>` callback fired immediately after the 'exit' classes
	* are **removed** and the `exit-done` class is added to the DOM node.
	*
	* **Note**: when `nodeRef` prop is passed, `node` is not passed
	*
	* @type Function(node: HtmlElement)
	*/
	onExited: import_prop_types.default.func
});
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
	if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
//#endregion
//#region node_modules/react-transition-group/esm/utils/ChildMapping.js
/**
* Given `this.props.children`, return an object mapping key to child.
*
* @param {*} children `this.props.children`
* @return {object} Mapping of key to child
*/
function getChildMapping(children, mapFn) {
	var mapper = function mapper(child) {
		return mapFn && (0, import_react.isValidElement)(child) ? mapFn(child) : child;
	};
	var result = Object.create(null);
	if (children) import_react.Children.map(children, function(c) {
		return c;
	}).forEach(function(child) {
		result[child.key] = mapper(child);
	});
	return result;
}
/**
* When you're adding or removing children some may be added or removed in the
* same render pass. We want to show *both* since we want to simultaneously
* animate elements in and out. This function takes a previous set of keys
* and a new set of keys and merges them with its best guess of the correct
* ordering. In the future we may expose some of the utilities in
* ReactMultiChild to make this easy, but for now React itself does not
* directly have this concept of the union of prevChildren and nextChildren
* so we implement it here.
*
* @param {object} prev prev children as returned from
* `ReactTransitionChildMapping.getChildMapping()`.
* @param {object} next next children as returned from
* `ReactTransitionChildMapping.getChildMapping()`.
* @return {object} a key set that contains all keys in `prev` and all keys
* in `next` in a reasonable order.
*/
function mergeChildMappings(prev, next) {
	prev = prev || {};
	next = next || {};
	function getValueForKey(key) {
		return key in next ? next[key] : prev[key];
	}
	var nextKeysPending = Object.create(null);
	var pendingKeys = [];
	for (var prevKey in prev) if (prevKey in next) {
		if (pendingKeys.length) {
			nextKeysPending[prevKey] = pendingKeys;
			pendingKeys = [];
		}
	} else pendingKeys.push(prevKey);
	var i;
	var childMapping = {};
	for (var nextKey in next) {
		if (nextKeysPending[nextKey]) for (i = 0; i < nextKeysPending[nextKey].length; i++) {
			var pendingNextKey = nextKeysPending[nextKey][i];
			childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
		}
		childMapping[nextKey] = getValueForKey(nextKey);
	}
	for (i = 0; i < pendingKeys.length; i++) childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	return childMapping;
}
function getProp(child, prop, props) {
	return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
	return getChildMapping(props.children, function(child) {
		return (0, import_react.cloneElement)(child, {
			onExited: onExited.bind(null, child),
			in: true,
			appear: getProp(child, "appear", props),
			enter: getProp(child, "enter", props),
			exit: getProp(child, "exit", props)
		});
	});
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
	var nextChildMapping = getChildMapping(nextProps.children);
	var children = mergeChildMappings(prevChildMapping, nextChildMapping);
	Object.keys(children).forEach(function(key) {
		var child = children[key];
		if (!(0, import_react.isValidElement)(child)) return;
		var hasPrev = key in prevChildMapping;
		var hasNext = key in nextChildMapping;
		var prevChild = prevChildMapping[key];
		var isLeaving = (0, import_react.isValidElement)(prevChild) && !prevChild.props.in;
		if (hasNext && (!hasPrev || isLeaving)) children[key] = (0, import_react.cloneElement)(child, {
			onExited: onExited.bind(null, child),
			in: true,
			exit: getProp(child, "exit", nextProps),
			enter: getProp(child, "enter", nextProps)
		});
		else if (!hasNext && hasPrev && !isLeaving) children[key] = (0, import_react.cloneElement)(child, { in: false });
		else if (hasNext && hasPrev && (0, import_react.isValidElement)(prevChild)) children[key] = (0, import_react.cloneElement)(child, {
			onExited: onExited.bind(null, child),
			in: prevChild.props.in,
			exit: getProp(child, "exit", nextProps),
			enter: getProp(child, "enter", nextProps)
		});
	});
	return children;
}
//#endregion
//#region node_modules/react-transition-group/esm/TransitionGroup.js
var values = Object.values || function(obj) {
	return Object.keys(obj).map(function(k) {
		return obj[k];
	});
};
var defaultProps = {
	component: "div",
	childFactory: function childFactory(child) {
		return child;
	}
};
/**
* The `<TransitionGroup>` component manages a set of transition components
* (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
* components, `<TransitionGroup>` is a state machine for managing the mounting
* and unmounting of components over time.
*
* Consider the example below. As items are removed or added to the TodoList the
* `in` prop is toggled automatically by the `<TransitionGroup>`.
*
* Note that `<TransitionGroup>`  does not define any animation behavior!
* Exactly _how_ a list item animates is up to the individual transition
* component. This means you can mix and match animations across different list
* items.
*/
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
	_inheritsLoose(TransitionGroup, _React$Component);
	function TransitionGroup(props, context) {
		var _this = _React$Component.call(this, props, context) || this;
		_this.state = {
			contextValue: { isMounting: true },
			handleExited: _this.handleExited.bind(_assertThisInitialized(_this)),
			firstRender: true
		};
		return _this;
	}
	var _proto = TransitionGroup.prototype;
	_proto.componentDidMount = function componentDidMount() {
		this.mounted = true;
		this.setState({ contextValue: { isMounting: false } });
	};
	_proto.componentWillUnmount = function componentWillUnmount() {
		this.mounted = false;
	};
	TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
		var prevChildMapping = _ref.children, handleExited = _ref.handleExited;
		return {
			children: _ref.firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
			firstRender: false
		};
	};
	_proto.handleExited = function handleExited(child, node) {
		var currentChildMapping = getChildMapping(this.props.children);
		if (child.key in currentChildMapping) return;
		if (child.props.onExited) child.props.onExited(node);
		if (this.mounted) this.setState(function(state) {
			var children = _extends({}, state.children);
			delete children[child.key];
			return { children };
		});
	};
	_proto.render = function render() {
		var _this$props = this.props, Component = _this$props.component, childFactory = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
		var contextValue = this.state.contextValue;
		var children = values(this.state.children).map(childFactory);
		delete props.appear;
		delete props.enter;
		delete props.exit;
		if (Component === null) return /* @__PURE__ */ import_react.createElement(TransitionGroupContext_default.Provider, { value: contextValue }, children);
		return /* @__PURE__ */ import_react.createElement(TransitionGroupContext_default.Provider, { value: contextValue }, /* @__PURE__ */ import_react.createElement(Component, props, children));
	};
	return TransitionGroup;
}(import_react.Component);
TransitionGroup.propTypes = {
	/**
	* `<TransitionGroup>` renders a `<div>` by default. You can change this
	* behavior by providing a `component` prop.
	* If you use React v16+ and would like to avoid a wrapping `<div>` element
	* you can pass in `component={null}`. This is useful if the wrapping div
	* borks your css styles.
	*/
	component: import_prop_types.default.any,
	/**
	* A set of `<Transition>` components, that are toggled `in` and out as they
	* leave. the `<TransitionGroup>` will inject specific transition props, so
	* remember to spread them through if you are wrapping the `<Transition>` as
	* with our `<Fade>` example.
	*
	* While this component is meant for multiple `Transition` or `CSSTransition`
	* children, sometimes you may want to have a single transition child with
	* content that you want to be transitioned out and in when you change it
	* (e.g. routes, images etc.) In that case you can change the `key` prop of
	* the transition child as you change its content, this will cause
	* `TransitionGroup` to transition the child out and back in.
	*/
	children: import_prop_types.default.node,
	/**
	* A convenience prop that enables or disables appear animations
	* for all children. Note that specifying this will override any defaults set
	* on individual children Transitions.
	*/
	appear: import_prop_types.default.bool,
	/**
	* A convenience prop that enables or disables enter animations
	* for all children. Note that specifying this will override any defaults set
	* on individual children Transitions.
	*/
	enter: import_prop_types.default.bool,
	/**
	* A convenience prop that enables or disables exit animations
	* for all children. Note that specifying this will override any defaults set
	* on individual children Transitions.
	*/
	exit: import_prop_types.default.bool,
	/**
	* You may need to apply reactive updates to a child as it is exiting.
	* This is generally done by using `cloneElement` however in the case of an exiting
	* child the element has already been removed and not accessible to the consumer.
	*
	* If you do need to update a child as it leaves you can provide a `childFactory`
	* to wrap every child, even the ones that are leaving.
	*
	* @type Function(child: ReactElement) -> ReactElement
	*/
	childFactory: import_prop_types.default.func
};
TransitionGroup.defaultProps = defaultProps;
//#endregion
//#region node_modules/@progress/kendo-react-animation/AnimationChild.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var R$5 = import_react.forwardRef((E, O) => {
	const e = import_react.useRef(null), { mountOnEnter: N = n$8.mountOnEnter, unmountOnExit: h = n$8.unmountOnExit, onEnter: s = n$8.onEnter, onEntering: d = n$8.onEntering, onEntered: x = n$8.onEntered, onExit: g = n$8.onExit, onExiting: f = n$8.onExiting, onExited: y = n$8.onExited, onAfterExited: p = n$8.onAfterExited, animationEnteringStyle: D = n$8.animationEnteringStyle, animationEnteredStyle: C = n$8.animationEnteredStyle, animationExitingStyle: T = n$8.animationExitingStyle, animationExitedStyle: j = n$8.animationExitedStyle, children: q, style: P, appear: H, enter: I, exit: $, transitionName: u, transitionEnterDuration: S, transitionExitDuration: v, className: w, unstyled: A, ...K } = E, k = {
		transitionDelay: "0ms",
		...P
	}, o = A && A.uAnimation, z = n$12(w, x$5.childContainer({ c: o })), r = import_react.useRef({
		element: e.current,
		props: E
	}), i = import_react.useRef(null);
	import_react.useImperativeHandle(i, () => ({
		element: e.current,
		props: E
	})), import_react.useImperativeHandle(O, () => i.current, []);
	const B = {
		entering: {
			transitionDuration: `${S}ms`,
			...D
		},
		entered: { ...C },
		exiting: {
			transitionDuration: `${v}ms`,
			...T
		},
		exited: { ...j }
	}, F = {
		in: E.in,
		appear: H,
		enter: I,
		exit: $,
		mountOnEnter: N,
		unmountOnExit: h,
		timeout: {
			enter: S,
			exit: v
		},
		onEnter: () => {
			s && s.call(void 0, {
				animatedElement: e.current,
				target: i.current || r.current
			});
		},
		onEntering: () => {
			d && d.call(void 0, {
				animatedElement: e.current,
				target: i.current || r.current
			});
		},
		onEntered: () => {
			x && x.call(void 0, {
				animatedElement: e.current,
				target: i.current || r.current
			});
		},
		onExit: () => {
			g && g.call(void 0, {
				animatedElement: e.current,
				target: i.current || r.current
			});
		},
		onExiting: () => {
			f && f.call(void 0, {
				animatedElement: e.current,
				target: i.current || r.current
			});
		},
		onExited: () => {
			p && p.call(void 0, {
				animatedElement: e.current,
				target: i.current || r.current
			}), y && y.call(void 0, {
				animatedElement: e.current,
				target: i.current || r.current
			});
		},
		classNames: {
			appear: n$12(x$5.appear({
				c: o,
				transitionName: u
			})),
			appearActive: n$12(x$5.appearActive({
				c: o,
				transitionName: u
			})),
			enter: n$12(x$5.enter({
				c: o,
				transitionName: u
			})),
			enterActive: n$12(x$5.enterActive({
				c: o,
				transitionName: u
			})),
			exit: n$12(x$5.exit({
				c: o,
				transitionName: u
			})),
			exitActive: n$12(x$5.exitActive({
				c: o,
				transitionName: u
			}))
		}
	};
	return /* @__PURE__ */ import_react.createElement(CSSTransition, {
		...F,
		...K,
		nodeRef: e
	}, (G) => /* @__PURE__ */ import_react.createElement("div", {
		style: {
			...k,
			...B[G]
		},
		className: z,
		ref: (b) => {
			e.current = b, r.current.element = b;
		}
	}, q));
}), n$8 = {
	mountOnEnter: !0,
	unmountOnExit: !1,
	onEnter: o$18,
	onEntering: o$18,
	onEntered: o$18,
	onExit: o$18,
	onExiting: o$18,
	onExited: o$18,
	onAfterExited: o$18,
	animationEnteringStyle: {},
	animationEnteredStyle: {},
	animationExitingStyle: {},
	animationExitedStyle: {}
};
R$5.displayName = "KendoReactAnimationChild";
R$5.propTypes = {
	in: import_prop_types.default.bool,
	children: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.node), import_prop_types.default.node]),
	transitionName: import_prop_types.default.string.isRequired,
	className: import_prop_types.default.string,
	appear: import_prop_types.default.bool,
	enter: import_prop_types.default.bool,
	exit: import_prop_types.default.bool,
	transitionEnterDuration: import_prop_types.default.number.isRequired,
	transitionExitDuration: import_prop_types.default.number.isRequired,
	mountOnEnter: import_prop_types.default.bool,
	unmountOnExit: import_prop_types.default.bool,
	animationEnteringStyle: import_prop_types.default.object,
	animationEnteredStyle: import_prop_types.default.object,
	animationExitingStyle: import_prop_types.default.object,
	animationExitedStyle: import_prop_types.default.object
};
//#endregion
//#region node_modules/@progress/kendo-react-animation/Animation.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var x$4 = (i) => {
	const { id: o, style: r, children: s, component: a = "div", className: l, childFactory: c, stackChildren: E, componentChildStyle: m, componentChildClassName: d, ...p } = i, u = o$21(), n = i.unstyled || u, y = n && n.uAnimation, h = {
		id: o,
		style: r,
		component: a,
		childFactory: c,
		className: n$12(x$5.child({ c: y }), l)
	}, f = import_react.Children.map(s || null, (N) => /* @__PURE__ */ import_react.createElement(R$5, {
		...p,
		unstyled: n,
		style: m,
		className: d
	}, N));
	return /* @__PURE__ */ import_react.createElement(TransitionGroup, { ...h }, f);
};
x$4.propTypes = {
	children: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.node), import_prop_types.default.node]),
	childFactory: import_prop_types.default.any,
	className: import_prop_types.default.string,
	component: import_prop_types.default.node,
	id: import_prop_types.default.string,
	style: import_prop_types.default.any,
	transitionName: import_prop_types.default.string.isRequired,
	appear: import_prop_types.default.bool.isRequired,
	enter: import_prop_types.default.bool.isRequired,
	exit: import_prop_types.default.bool.isRequired,
	transitionEnterDuration: import_prop_types.default.number.isRequired,
	transitionExitDuration: import_prop_types.default.number.isRequired
};
//#endregion
//#region node_modules/@progress/kendo-react-animation/Fade.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var l$8 = (r) => {
	const { appear: e = n$7.appear, enter: i = n$7.enter, exit: a = n$7.exit, transitionEnterDuration: o = n$7.transitionEnterDuration, transitionExitDuration: s = n$7.transitionExitDuration, children: p, ...c } = r;
	return /* @__PURE__ */ import_react.createElement(x$4, {
		transitionName: "fade",
		appear: e,
		enter: i,
		exit: a,
		transitionEnterDuration: o,
		transitionExitDuration: s,
		...c
	}, p);
}, n$7 = {
	appear: !1,
	enter: !0,
	exit: !1,
	transitionEnterDuration: 500,
	transitionExitDuration: 500
};
l$8.propTypes = {
	children: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.node), import_prop_types.default.node]),
	childFactory: import_prop_types.default.any,
	className: import_prop_types.default.string,
	component: import_prop_types.default.node,
	id: import_prop_types.default.string,
	style: import_prop_types.default.any
};
//#endregion
//#region node_modules/@progress/kendo-react-animation/util.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var e$10 = (t) => {
	if (!t || !t.ownerDocument.defaultView) return 0;
	const o = t.ownerDocument.defaultView.getComputedStyle(t), n = parseFloat(o.marginTop), r = parseFloat(o.marginBottom);
	return t.offsetHeight + n + r;
}, i$10 = (t) => {
	if (!t || !t.ownerDocument.defaultView) return 0;
	const o = t.ownerDocument.defaultView.getComputedStyle(t), n = parseFloat(o.marginLeft), r = parseFloat(o.marginRight);
	return t.offsetWidth + n + r;
}, c$7 = {
	outerHeight: e$10,
	outerWidth: i$10,
	styles: g$7
};
//#endregion
//#region node_modules/@progress/kendo-react-animation/Reveal.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var R$4 = (a) => {
	const [c, f] = import_react.useState(), [m, u] = import_react.useState(), [s, g] = import_react.useState({}), { appear: y = r$17.appear, enter: W = r$17.enter, exit: H = r$17.exit, transitionEnterDuration: v = r$17.transitionEnterDuration, transitionExitDuration: D = r$17.transitionExitDuration, direction: x = r$17.direction, children: T, childFactory: h, ...O } = a;
	let i;
	x === "vertical" ? i = { maxHeight: c ? `${c}px` : "" } : i = { maxWidth: m ? `${m}px` : "" };
	const S = {
		maxHeight: i.maxHeight,
		maxWidth: i.maxWidth
	};
	import_react.useEffect(() => {
		a && s.name && a[s.name] && a[s.name].call(void 0, s.event);
	}, [
		c,
		m,
		s
	]);
	const F = (t) => {
		const { onBeforeEnter: e } = a;
		e && e.call(void 0, t), l(t, "onEnter");
	}, M = (t) => {
		l(t, "onEntering");
	}, $ = (t) => {
		l(t, "onExit");
	}, l = (t, e) => {
		var p;
		const d = (p = t.animatedElement) == null ? void 0 : p.firstChild;
		if (d) {
			const C = c$7.outerHeight(d), N = c$7.outerWidth(d);
			f(C), u(N), g({
				name: e,
				event: t
			});
		}
	}, w = (t) => {
		const e = h ? h(t) : t;
		return e.props.in ? e : import_react.cloneElement(e, {
			...e.props,
			style: {
				...e.props.style,
				maxHeight: i.maxHeight,
				maxWidth: i.maxWidth
			}
		});
	};
	return /* @__PURE__ */ import_react.createElement(x$4, {
		...O,
		appear: y,
		enter: W,
		exit: H,
		transitionEnterDuration: v,
		transitionExitDuration: D,
		childFactory: w,
		onEnter: F,
		onEntering: M,
		onExit: $,
		animationEnteringStyle: S,
		transitionName: `reveal-${x}`
	}, T);
}, r$17 = {
	appear: !1,
	enter: !0,
	exit: !0,
	transitionEnterDuration: 300,
	transitionExitDuration: 300,
	direction: "vertical"
};
R$4.propTypes = {
	children: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.node), import_prop_types.default.node]),
	childFactory: import_prop_types.default.any,
	className: import_prop_types.default.string,
	direction: import_prop_types.default.oneOf(["horizontal", "vertical"]),
	component: import_prop_types.default.node,
	id: import_prop_types.default.string,
	style: import_prop_types.default.any
};
//#endregion
//#region node_modules/@progress/kendo-react-animation/hooks/useAnimation.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var p$12 = (s, m) => {
	const t = import_react.useRef(0), i = import_react.useRef(!1), r = import_react.useRef(null), d = (e) => {
		const l = e.duration;
		let o, u;
		const w = t.current && 1 - t.current;
		e.onStart && e.onStart();
		const a = (f) => {
			o || (o = f), u = f - o + 1;
			const c = u / l + w;
			c <= 1 ? (e.onUpdate && e.onUpdate(c), r.current = window.requestAnimationFrame(a), t.current = c) : (e.onEnd && e.onEnd(1), t.current = 0);
		};
		r.current = window.requestAnimationFrame(a);
	};
	import_react.useEffect(() => (d(s), () => {
		r.current && window.cancelAnimationFrame(r.current);
	}), m), import_react.useEffect(() => {
		i.current = !0;
	}, []);
};
//#endregion
//#region node_modules/@progress/kendo-react-layout/tabstrip/TabStripContent.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var k$3 = ($) => {
	const { children: s, selected: t, contentPanelId: p, keepTabsMounted: i, navItemId: u, renderAllContent: E, animation: c, style: y } = $, d = p, h = import_react.useCallback((n) => import_react.cloneElement(n, {
		...n.props,
		in: n.props.children.props.id === String(d + t)
	}), [d, t]), b = import_react.useCallback((n, r) => {
		const o = r === t, a = { style: { display: o ? void 0 : "none" } }, C = { display: o ? void 0 : "none" };
		return n.props.disabled ? null : c ? /* @__PURE__ */ import_react.createElement(l$8, {
			appear: !0,
			exit: i,
			style: C,
			childFactory: i ? h : void 0
		}, /* @__PURE__ */ import_react.createElement("div", {
			...a,
			id: String(d + r),
			key: r
		}, n.props.children)) : /* @__PURE__ */ import_react.createElement("div", {
			...a,
			key: r
		}, n.props.children);
	}, [
		t,
		c,
		i,
		h,
		d
	]), S = import_react.useCallback((n) => i ? import_react.Children.map(n, (r, o) => b(r, o)) : b(import_react.Children.toArray(n)[t], t), [
		i,
		b,
		t
	]), I = import_react.useMemo(() => import_react.Children.map(s, (n, r) => {
		const o = n, a = r === t, C = n$12("k-tabstrip-content", { "k-active": a }, o.props.contentClassName), N = c ? /* @__PURE__ */ import_react.createElement(l$8, {
			key: `${r}-${a}`,
			appear: !0,
			enter: !0,
			exit: !1
		}, o.props.children) : o.props.children;
		return /* @__PURE__ */ import_react.createElement("div", {
			className: C,
			style: y,
			id: `${p}-${r}`,
			role: "tabpanel",
			"aria-hidden": !a,
			hidden: !a,
			"aria-labelledby": `${u}-${r}`
		}, N);
	}), [
		s,
		t,
		p,
		u,
		y,
		c
	]), m = import_react.useMemo(() => !s || typeof t != "number" ? null : import_react.Children.toArray(s)[t], [s, t]), M = import_react.useMemo(() => n$12("k-tabstrip-content", "k-active", m == null ? void 0 : m.props.contentClassName), [m]);
	return E ? I : /* @__PURE__ */ import_react.createElement("div", {
		className: M,
		style: y,
		id: p,
		role: "tabpanel",
		"aria-hidden": i,
		"aria-labelledby": `${u}-${(t == null ? void 0 : t.toString()) || ""}`,
		tabIndex: 0
	}, S(s));
};
k$3.propTypes = {
	animation: import_prop_types.default.bool,
	children: import_prop_types.default.oneOfType([import_prop_types.default.element, import_prop_types.default.arrayOf(import_prop_types.default.element)]),
	selected: import_prop_types.default.number,
	style: import_prop_types.default.object
};
k$3.displayName = "TabStripContent";
//#endregion
//#region node_modules/@progress/kendo-react-layout/tabstrip/TabStrip.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var de = {
	animation: !0,
	tabPosition: "top",
	tabAlignment: "start",
	keepTabsMounted: !1,
	buttonScrollSpeed: 100,
	mouseScrollSpeed: 10,
	scrollButtons: "auto",
	scrollButtonsPosition: "split",
	renderAllContent: !1
}, E$6 = import_react.forwardRef((Z, _) => {
	const R = {
		...de,
		...Z
	}, { id: m, animation: H, children: M, selected: u, onSelect: A, style: ee, tabContentStyle: O, tabPosition: p, tabAlignment: z, tabIndex: L, className: W, dir: v, renderAllContent: P, keepTabsMounted: K, size: h, scrollable: g, scrollButtons: x, scrollButtonsPosition: j, buttonScrollSpeed: F, mouseScrollSpeed: te, prevButton: U, nextButton: $ } = R, [f, ne] = import_react.useState(null), oe = import_react.useRef({ props: R }), C = import_react.useRef(null), D = import_react.useRef(null), T = import_react.useRef(void 0), I = import_react.useRef(void 0), q = import_react.useCallback(() => ({ props: R }), [R]);
	import_react.useImperativeHandle(oe, q), import_react.useImperativeHandle(_, q);
	const y = import_react.useMemo(() => m ? m + "-content-panel-id" : void 0, [m]), w = import_react.useMemo(() => m ? m + "-nav-item-id" : void 0, [m]), S = import_react.useMemo(() => import_react.Children.toArray(M).filter(Boolean), [M]), G = import_react.useCallback(() => /top|bottom/.test(p || "top"), [p]), k = import_react.useCallback(() => {
		const s = G(), i = D.current;
		if (!i) return;
		const a = i.scrollLeft, t = i.clientWidth, e = i.scrollWidth, l = i.scrollTop, o = i.scrollHeight, d = i.clientHeight;
		let c = null;
		const re = s ? e > t : o > d, X = v === "rtl";
		re ? s ? a + t === e || (X && t - a) === e ? c = "end" : a === 0 || X && -a === 0 ? c = "start" : a > 0 && a + t < e || -a > 0 && t - a < e ? c = "middle" : c = null : o - (l + d) === 0 ? c = "bottom" : l === 0 ? c = "top" : l > 0 && o - (l + d) > 0 ? c = "middle" : c = null : c = null, ne(c);
	}, [G, v]), B = import_react.useCallback((s) => {
		u !== s && A && A({ selected: s });
	}, [u, A]), b = import_react.useCallback((s) => {
		var t, e;
		const i = S;
		(e = (t = i == null ? void 0 : i[s]) == null ? void 0 : t.props) != null && e.disabled || B(s);
	}, [S, B]), J = import_react.useCallback((s) => {
		I.current && I.current.triggerKeyboardEvent(s);
	}, []);
	import_react.useEffect(() => {
		var a;
		const s = C.current, i = s && getComputedStyle(s).direction === "rtl" || !1;
		return s && (I.current = new l$13({
			tabIndex: 0,
			root: C,
			rovingTabIndex: !0,
			focusClass: "k-focus",
			selectors: [".k-tabstrip .k-tabstrip-item"],
			keyboardEvents: { keydown: {
				ArrowLeft: (t, e, l) => {
					l.preventDefault();
					const o = e.elements.indexOf(t), d = o !== 0 ? o - 1 : e.elements.length - 1, c = o !== e.elements.length - 1 ? o + 1 : 0;
					i ? (e.focusNext(t), b(c)) : (e.focusPrevious(t), b(d));
				},
				ArrowRight: (t, e, l) => {
					l.preventDefault();
					const o = e.elements.indexOf(t), d = o !== 0 ? o - 1 : e.elements.length - 1, c = o !== e.elements.length - 1 ? o + 1 : 0;
					i ? (e.focusPrevious(t), b(d)) : (e.focusNext(t), b(c));
				},
				ArrowDown: (t, e, l) => {
					l.preventDefault();
					const o = e.elements.indexOf(t), d = o !== e.elements.length - 1 ? o + 1 : 0;
					e.focusNext(t), b(d);
				},
				ArrowUp: (t, e, l) => {
					l.preventDefault();
					const o = e.elements.indexOf(t), d = o !== 0 ? o - 1 : e.elements.length - 1;
					e.focusPrevious(t), b(d);
				},
				Home: (t, e, l) => {
					l.preventDefault(), e.focusElement(e.first, t), b(0);
				},
				End: (t, e, l) => {
					l.preventDefault(), e.focusElement(e.last, t), b(e.elements.length - 1);
				}
			} }
		}), (a = I.current) == null || a.initializeRovingTab(u), k(), T.current = window.ResizeObserver && new ResizeObserver(() => k()), C.current && T.current && T.current.observe(C.current)), () => {
			var t;
			(t = I.current) == null || t.removeFocusListener(), T.current && T.current.disconnect();
		};
	}, [
		u,
		b,
		k
	]);
	const se = import_react.useMemo(() => {
		return u < import_react.Children.count(S) && u > -1 ? /* @__PURE__ */ import_react.createElement(k$3, {
			index: u,
			selected: u,
			contentPanelId: y,
			navItemId: w,
			animation: H,
			keepTabsMounted: K,
			renderAllContent: P,
			style: O
		}, S) : null;
	}, [
		u,
		S,
		y,
		w,
		H,
		K,
		P,
		O
	]), N = x === "hidden" || f === null && x === "auto" ? "hidden" : "visible", Q = import_react.useMemo(() => ({
		itemsNavRef: D,
		children: S,
		selected: u,
		tabIndex: L,
		tabPosition: p,
		tabAlignment: z,
		size: h,
		scrollable: g,
		scrollButtons: N,
		scrollButtonsPosition: j,
		buttonScrollSpeed: F,
		mouseScrollSpeed: te,
		prevButton: U,
		nextButton: $,
		dir: v,
		contentPanelId: y,
		renderAllContent: P,
		navItemId: w,
		onKeyDown: J,
		onSelect: B,
		onScroll: k,
		containerScrollPosition: f
	}), [
		D,
		S,
		u,
		L,
		p,
		z,
		h,
		g,
		N,
		j,
		F,
		U,
		$,
		v,
		y,
		P,
		w,
		J,
		B,
		k,
		f
	]), V = p === "bottom", le = import_react.useMemo(() => n$12("k-tabstrip k-pos-relative", {
		[`k-tabstrip-${e$17.sizeMap[h || "medium"] || h}`]: h,
		"k-tabstrip-left": p === "left",
		"k-tabstrip-right": p === "right",
		"k-tabstrip-bottom": p === "bottom",
		"k-tabstrip-top": p === "top",
		"k-tabstrip-scrollable": g,
		"k-tabstrip-scrollable-start k-tabstrip-scrollable-end": g && N === "visible",
		"k-tabstrip-scrollable-start": g && x === "auto" && (f === "end" || f === "middle"),
		"k-tabstrip-scrollable-end": g && x === "auto" && (f === "start" || f === "middle")
	}, W), [
		h,
		p,
		g,
		x,
		N,
		f,
		W
	]);
	return /* @__PURE__ */ import_react.createElement("div", {
		id: m,
		ref: C,
		dir: v,
		className: le,
		style: ee,
		onScroll: k
	}, !V && /* @__PURE__ */ import_react.createElement(lt, { ...Q }), se, V && /* @__PURE__ */ import_react.createElement(lt, { ...Q }));
});
E$6.displayName = "TabStrip";
E$6.propTypes = {
	id: import_prop_types.default.string,
	animation: import_prop_types.default.bool,
	children: import_prop_types.default.node,
	onSelect: import_prop_types.default.func,
	selected: import_prop_types.default.number,
	style: import_prop_types.default.object,
	tabContentStyle: import_prop_types.default.object,
	tabPosition: import_prop_types.default.string,
	tabAlignment: import_prop_types.default.string,
	tabIndex: import_prop_types.default.number,
	className: import_prop_types.default.string,
	dir: import_prop_types.default.string,
	renderAllContent: import_prop_types.default.bool,
	size: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large"
	]),
	scrollButtons: import_prop_types.default.oneOf([
		"auto",
		"visible",
		"hidden"
	]),
	scrollButtonsPosition: import_prop_types.default.oneOf([
		"split",
		"start",
		"end",
		"around",
		"before",
		"after"
	])
};
var ge = E$6;
//#endregion
//#region node_modules/@progress/kendo-react-layout/panelbar/PanelBarItem.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
function J$1({ imageUrl: o, icon: i, svgIcon: s, iconClass: a }) {
	return o ? /* @__PURE__ */ import_react.createElement("img", {
		role: "presentation",
		className: "k-panelbar-item-icon k-image",
		src: o
	}) : i || s ? /* @__PURE__ */ import_react.createElement(v$9, {
		className: "k-panelbar-item-icon",
		name: i,
		icon: s
	}) : a ? /* @__PURE__ */ import_react.createElement("span", {
		role: "presentation",
		className: "k-panelbar-item-icon " + a
	}) : null;
}
var f$8 = import_react.forwardRef((o, i) => {
	const { id: s, children: a, title: E = Q$1.title, uniquePrivateKey: c, disabled: t, selected: k, focused: N, expanded: r, className: C, level: b, headerClassName: x, animation: y, keepItemsMounted: l, onSelect: m, imageUrl: B, icon: R, svgIcon: w, iconClass: P } = o, d = import_react.useRef({ props: o }), S = import_react.useRef(null);
	import_react.useImperativeHandle(d, () => ({ props: o })), import_react.useImperativeHandle(i, () => d.current);
	const [A, g] = import_react.useState(r || !1), D = import_react.useCallback(() => {
		m && !t && m({
			uniquePrivateKey: c,
			id: s,
			target: d.current
		});
	}, [
		m,
		t,
		c,
		s
	]), T = import_react.useCallback((p) => l ? import_react.cloneElement(p, {
		...p.props,
		in: r
	}) : p, [l, r]), U = import_react.useCallback(() => {
		l && g(!0);
	}, [l]), H = import_react.useCallback(() => {
		l && g(!1);
	}, [l]), L = {
		role: "treeitem",
		"aria-disabled": t,
		"aria-hidden": !t && !r ? "true" : "false",
		"aria-selected": !t && k,
		"aria-expanded": !t && r && !!a
	}, O = n$12("k-panelbar-item", {
		"k-panelbar-header": b === 0,
		"k-expanded": r && !!a,
		"k-disabled": t
	}, `k-level-${b}`, C), F = n$12("k-link", {
		"k-selected": !t && k,
		"k-focus": N
	}, x), K = { display: "block" }, M = J$1({
		imageUrl: B,
		icon: R,
		svgIcon: w,
		iconClass: P
	}), q = !t && a ? /* @__PURE__ */ import_react.createElement(v$9, {
		name: r ? "chevron-up" : "chevron-down",
		icon: r ? chevronUpIcon : chevronDownIcon,
		className: n$12("k-panelbar-toggle", r ? "k-panelbar-collapse" : "k-panelbar-expand")
	}) : null;
	let I = !1;
	a && a[0] && Array.isArray(a) && (I = a[0].type === f$8);
	const G = l && !A ? "none" : "block", h = !t && r || l ? I ? /* @__PURE__ */ import_react.createElement("ul", {
		role: "group",
		"aria-hidden": r ? "false" : "true",
		className: "k-panelbar-group",
		style: { display: G }
	}, a) : a : null, W = (y === void 0 || y) && !t && a ? /* @__PURE__ */ import_react.createElement(R$4, {
		transitionEnterDuration: 200,
		transitionExitDuration: 200,
		key: c + "_animation",
		style: K,
		children: h,
		childFactory: l ? T : void 0,
		unmountOnExit: !l,
		onBeforeEnter: U,
		onAfterExited: H
	}) : h;
	return /* @__PURE__ */ import_react.createElement("li", {
		ref: S,
		id: s,
		className: O,
		...L
	}, /* @__PURE__ */ import_react.createElement("span", {
		className: F,
		onClick: D
	}, M, /* @__PURE__ */ import_react.createElement("span", { className: "k-panelbar-item-text" }, E), q), W);
}), Q$1 = { title: "Untitled" };
f$8.propTypes = {
	animation: import_prop_types.default.bool,
	children: import_prop_types.default.any,
	className: import_prop_types.default.string,
	icon: import_prop_types.default.string,
	iconClass: import_prop_types.default.string,
	imageUrl: import_prop_types.default.string,
	svgIcon: r$26,
	expanded: import_prop_types.default.bool,
	disabled: import_prop_types.default.bool,
	onSelect: import_prop_types.default.func,
	selected: import_prop_types.default.bool,
	level: import_prop_types.default.number,
	title: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.element]),
	id: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]),
	focused: import_prop_types.default.bool,
	keepItemsMounted: import_prop_types.default.bool
};
f$8.displayName = "KendoReactPanelBarItem";
//#endregion
//#region node_modules/@progress/kendo-react-layout/panelbar/interfaces/NavigationAction.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var r$15 = /* @__PURE__ */ ((e) => (e[e.Toggle = 0] = "Toggle", e[e.Next = 1] = "Next", e[e.Previous = 2] = "Previous", e[e.First = 3] = "First", e[e.Last = 4] = "Last", e[e.Left = 5] = "Left", e[e.Right = 6] = "Right", e))(r$15 || {});
//#endregion
//#region node_modules/@progress/kendo-react-layout/panelbar/util.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var I$3 = (r) => typeof r != "object" || !("type" in r) || r.type !== f$8, F$7 = ({ animation: r = !0, keepItemsMounted: n = !1, state: e, expanded: p, handleSelect: t, children: o, parentExpanded: i = !0, level: s = 0, parentPrivateKey: c = [] }) => {
	const l = import_react.Children.toArray(o).filter(I$3), b = l.length ? l : o;
	return import_react.Children.map(b, (a, x) => {
		if (a && a.type === f$8) {
			let y;
			const u = m$10(a, c, x);
			if (a.props.children) y = F$7({
				animation: r,
				keepItemsMounted: n,
				state: e,
				expanded: p,
				handleSelect: t,
				children: a.props.children,
				parentExpanded: (p || []).indexOf(u) > -1,
				level: s + 1,
				parentPrivateKey: [...c, u]
			});
			return import_react.cloneElement(a, {
				...a.props,
				animation: a.props.animation !== void 0 ? a.props.animation : r,
				keepItemsMounted: n,
				id: a.props.id || `k-panelbar-item-default-${u}`,
				uniquePrivateKey: u,
				parentUniquePrivateKey: c,
				parentExpanded: i,
				level: s,
				expanded: (p || []).indexOf(u) > -1,
				focused: e.focused === u && e.wrapperFocused,
				selected: e.selected === u,
				children: y,
				onSelect: t
			});
		}
		return /* @__PURE__ */ import_react.createElement("div", { className: "k-panelbar-content" }, a);
	});
}, $$2 = (r) => {
	const n = import_react.Children.toArray(r.children)[0];
	return n ? m$10(n, [], 0) : "";
}, q = (r, n, e = {
	expanded: r.expanded || [],
	selected: r.selected || "",
	focused: r.focused || "",
	wrapperFocused: !1
}, p = !0, t = []) => (import_react.Children.map(r.children, (o, i) => {
	if (o && o.type === f$8) {
		const s = m$10(o, t, i);
		!o.props.disabled && p && (o.props.selected && (e.selected = s), o.props.focused && (e.focused = s), o.props.expanded && (n === "multiple" ? e.expanded.push(s) : n === "single" && (e.expanded = [s])), o.props.children && (e = q(o.props, n, e, !!o.props.expanded, [...t, s])));
	}
}), e), m$10 = (r, n, e) => r && r.props && r.props.id ? r.props.id : n.length ? n[n.length - 1] + `.${e}` : `.${e}`;
function k$2(r, n = []) {
	return import_react.Children.forEach(r, (e) => {
		e && e.props && !e.props.disabled && (n.push(e), e.props.children && k$2(e.props.children, n));
	}), n;
}
function P$3(r, n = []) {
	return import_react.Children.forEach(r, (e) => {
		e && e.props && (e.props.expanded || e.props.parentExpanded) && (n.push(e), e.props.children && P$3(e.props.children, n));
	}), n;
}
var E$5;
((r) => {
	function n(e) {
		return e.map((p, t) => {
			let o;
			return p.content && (o = p.content), p.children && (o = n(p.children)), /* @__PURE__ */ import_react.createElement(f$8, {
				...p,
				children: o,
				key: p.id || t
			});
		});
	}
	r.mapItemsToComponents = n;
})(E$5 || (E$5 = {}));
var K$1 = (r, n) => r.length !== n.length ? !1 : r.every((e, p) => e === n[p]), L$1 = (r, n, e, p, t) => {
	let o;
	if (t === r$15.First || t === r$15.Last) switch (t) {
		case r$15.First:
			o = r[0];
			break;
		case r$15.Last:
			o = r[r.length - 1];
			break;
	}
	else r.forEach((i, s) => {
		if (i.props.uniquePrivateKey === (e.uniquePrivateKey || p)) o = r[s + n < 0 ? r.length - 1 : s + n > r.length - 1 ? 0 : s + n];
	});
	return o;
};
//#endregion
//#region node_modules/@progress/kendo-react-layout/panelbar/PanelBar.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var U$3 = (p) => {
	const { animation: d = !0, children: o, dir: N, selected: w, expanded: O, expandMode: I = "multiple", className: A, keepItemsMounted: T = !1, onSelect: C, style: D, isControlled: W } = p, v = import_react.useRef(null), E = import_react.useRef(void 0), x = import_react.useRef(null), [c, f] = import_react.useState(() => {
		const l = q(p, I || "multiple");
		return l.focused || (l.focused = $$2(p)), l;
	}), F = I || "multiple", R = w !== void 0 ? w : c.selected, h = W ? O || [] : c.expanded, S = import_react.useCallback((r) => {
		x.current = window.setTimeout(() => r());
	}, []), g = import_react.useCallback((r) => {
		const l = K, s = k$2(import_react.Children.toArray(l));
		let t, i;
		switch (s.forEach((e) => {
			e.props.uniquePrivateKey === (r.uniquePrivateKey || c.focused) && (t = e);
		}), F) {
			case "single":
				i = [...t.props.parentUniquePrivateKey, t.props.uniquePrivateKey], K$1(h, i) && (t.props.parentUniquePrivateKey ? i = [...t.props.parentUniquePrivateKey] : i = []);
				break;
			case "multiple": {
				i = h.slice();
				const e = i.indexOf(t.props.uniquePrivateKey);
				e === -1 ? i.push(t.props.uniquePrivateKey) : i.splice(e, 1);
				break;
			}
			default:
				i = h.slice();
				break;
		}
		f((e) => ({
			...e,
			selected: t.props.uniquePrivateKey,
			expanded: i
		})), C && C({
			target: t,
			expandedItems: i
		});
	}, [
		o,
		c.focused,
		F,
		h,
		C
	]), u = import_react.useCallback((r, l = 0, s) => {
		const t = K, e = L$1(P$3(import_react.Children.toArray(t)), l, r, c.focused, s);
		if (e) {
			const k = h.slice();
			if (s === r$15.Right && e && e.props && e.props.children && e.props.children.length > 0) {
				if (k.push(e.props.uniquePrivateKey), f((y) => ({
					...y,
					expanded: [...new Set(k)]
				})), e.props.expanded) {
					const y = e.props.children[0].props.uniquePrivateKey;
					f((P) => ({
						...P,
						focused: y
					}));
				}
			} else if (s === r$15.Left && (e && e.props && e.props.parentUniquePrivateKey && e.props.parentUniquePrivateKey.length > 0 || e && e.props && !e.props.disabled && e.props.children && e.props.children.length > 0)) {
				const y = e.props.parentUniquePrivateKey;
				if (e.props.expanded) {
					const P = e.props.uniquePrivateKey, q = k.indexOf(P);
					k.splice(q, 1), f((H) => ({
						...H,
						expanded: k
					}));
				} else if (e.props.level > 0) {
					const P = e.props.parentUniquePrivateKey[y.length - 1];
					f((q) => ({
						...q,
						focused: P
					}));
				}
			} else E.current = e.props.id, f((y) => ({
				...y,
				focused: e.props.uniquePrivateKey
			}));
		}
	}, [
		o,
		c.focused,
		h
	]), B = import_react.useCallback((r) => {
		g(r), u(r);
	}, [g, u]), K = import_react.useMemo(() => F$7({
		animation: d,
		keepItemsMounted: T,
		state: {
			...c,
			selected: R
		},
		expanded: h,
		handleSelect: B,
		children: o
	}), [
		d,
		T,
		c,
		R,
		h,
		o,
		B
	]), M = import_react.useCallback((r, l) => {
		let s;
		switch (l) {
			case r$15.First:
				u(r, s, r$15.First);
				break;
			case r$15.Last:
				u(r, s, r$15.Last);
				break;
			case r$15.Left:
				u(r, s, r$15.Left);
				break;
			case r$15.Right:
				u(r, s, r$15.Right);
				break;
			case r$15.Previous:
				s = -1, u(r, s);
				break;
			case r$15.Next:
				s = 1, u(r, s);
				break;
			case r$15.Toggle:
				g(r);
				break;
		}
	}, [u, g]), $ = import_react.useCallback(() => {
		clearTimeout(x.current), c.wrapperFocused || f((r) => ({
			...r,
			wrapperFocused: !0
		}));
	}, [c.wrapperFocused]), V = import_react.useCallback(() => {
		S(() => {
			f((r) => ({
				...r,
				wrapperFocused: !1
			}));
		});
	}, [S]), j = import_react.useCallback((r) => {
		const l = v.current && getComputedStyle(v.current).direction === "rtl" || !1;
		if (r.target === r.currentTarget) {
			const s = r.keyCode;
			let t;
			switch (s) {
				case e$16.left:
					t = l ? r$15.Right : r$15.Left;
					break;
				case e$16.up:
					t = r$15.Previous;
					break;
				case e$16.right:
					t = l ? r$15.Left : r$15.Right;
					break;
				case e$16.down:
					t = r$15.Next;
					break;
				case e$16.home:
					t = r$15.First;
					break;
				case e$16.end:
					t = r$15.Last;
					break;
				case e$16.space:
				case e$16.enter:
					t = r$15.Toggle;
					break;
				default:
					t = null;
					break;
			}
			t !== null && (r.preventDefault(), M(r, t));
		}
	}, [M]);
	import_react.useEffect(() => () => {
		x.current && clearTimeout(x.current);
	}, []);
	const z = { "aria-activedescendant": E.current }, G = n$12("k-panelbar", A);
	return /* @__PURE__ */ import_react.createElement("ul", {
		ref: v,
		dir: N,
		role: "tree",
		tabIndex: 0,
		onKeyDown: j,
		onFocus: $,
		onBlur: V,
		className: G,
		style: D,
		...z
	}, K);
};
U$3.propTypes = {
	/**
	* A collection of `PanelBarItem` components.
	*/
	children: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(function(p, d) {
		return p[d].type !== f$8 ? /* @__PURE__ */ new Error("PanelBar children should be either PanelBarItem or an array of PanelBarItem.") : null;
	}), function(p, d) {
		const o = p[d];
		return o && o.type !== f$8 ? /* @__PURE__ */ new Error("PanelBar children should be either PanelBarItem or an array of PanelBarItem.") : null;
	}]),
	/**
	* Expands the item or items that match the `selected` property while respecting the `expandMode` property (see [example]({% slug expandModes_panelbar %}#toc-single-expandMode)).
	* To expand the item on the initial load of the PanelBar, define the `expanded` property of each PanelBarItem.
	*/
	selected: import_prop_types.default.string,
	/**
	* Sets the expand mode of the PanelBar through the `single`, `multiple`, or `default` keywords (see [example]({% slug expandModes_panelbar %})).
	*/
	expandMode(p, d) {
		const o = p[d];
		return o !== "single" && o !== "multiple" && o !== "default" ? /* @__PURE__ */ new Error(`Invalid value '${o}' given to '${d}'. It must be either 'single', 'multiple' or 'default'.`) : null;
	},
	/**
	* Enables or disables the animation of the PanelBar items.
	*/
	animation: import_prop_types.default.bool,
	/**
	* When enabled, keeps PanelBarItem content mounted in the DOM even when collapsed.
	*/
	keepItemsMounted: import_prop_types.default.bool,
	/**
	* Fires when the expand mode of the PanelBar is set to `single` or `multiple`
	* and an item is toggled (see [example]({% slug overview_panelbar %}#toc-expanded-state-management)).
	*/
	onSelect: import_prop_types.default.func
};
U$3.defaultProps = {
	expandMode: "multiple",
	animation: !0,
	keepItemsMounted: !1
};
//#endregion
//#region node_modules/@progress/kendo-react-layout/card/interfaces/Enums.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var E$4 = /* @__PURE__ */ ((r) => (r.TEXT = "text", r.IMAGE = "image", r.ICON = "icon", r))(E$4 || {}), R$3 = /* @__PURE__ */ ((r) => (r.HORIZONTAL = "horizontal", r.VERTICAL = "vertical", r))(R$3 || {}), e$9 = /* @__PURE__ */ ((r) => (r.DEFAULT = "default", r.primary = "primary", r.INFO = "info", r.SUCCESS = "success", r.WARNING = "warning", r.ERROR = "error", r))(e$9 || {}), N$5 = /* @__PURE__ */ ((r) => (r.START = "start", r.CENTER = "center", r.END = "end", r.STRETCHED = "stretched", r))(N$5 || {});
//#endregion
//#region node_modules/@progress/kendo-react-layout/card/Card.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var d$8 = import_react.forwardRef((t, p) => {
	const { children: m, dir: f, style: u, className: y, type: a = s$9.type, orientation: o = s$9.orientation, ...R } = t, n = import_react.useRef(null), i = import_react.useRef(null);
	return import_react.useImperativeHandle(n, () => ({
		element: i.current,
		props: t
	})), import_react.useImperativeHandle(p, () => n.current), /* @__PURE__ */ import_react.createElement("div", {
		dir: f,
		style: u,
		ref: i,
		className: n$12("k-card", y, { [`k-card-${a}`]: a !== e$9.DEFAULT }, o === null ? void 0 : o !== R$3.HORIZONTAL ? "k-card-vertical" : "k-card-horizontal"),
		...R
	}, m);
});
d$8.displayName = "KendoReactCard";
d$8.propTypes = {
	children: import_prop_types.default.node,
	className: import_prop_types.default.string,
	dir: import_prop_types.default.string,
	orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
	style: import_prop_types.default.object,
	type: import_prop_types.default.oneOf([
		"default",
		"primary",
		"info",
		"success",
		"warning",
		"error"
	])
};
var s$9 = {
	type: e$9.DEFAULT,
	orientation: R$3.VERTICAL
};
//#endregion
//#region node_modules/@progress/kendo-react-layout/card/CardHeader.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var t$5 = (e) => /* @__PURE__ */ import_react.createElement("div", {
	style: e.style,
	className: n$12("k-card-header", e.className)
}, e.children);
t$5.propTypes = { className: import_prop_types.default.string };
//#endregion
//#region node_modules/@progress/kendo-react-layout/card/CardTitle.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var a$6 = (e) => /* @__PURE__ */ import_react.createElement("div", {
	style: e.style,
	className: n$12("k-card-title", e.className)
}, e.children);
a$6.propTypes = { className: import_prop_types.default.string };
//#endregion
//#region node_modules/@progress/kendo-react-layout/card/CardBody.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var t$4 = (e) => /* @__PURE__ */ import_react.createElement("div", {
	style: e.style,
	className: n$12("k-card-body", e.className)
}, e.children);
t$4.propTypes = { className: import_prop_types.default.string };
//#endregion
//#region node_modules/@progress/kendo-react-layout/card/CardActions.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var s$7 = (r) => {
	const t = {
		layout: N$5.START,
		orientation: R$3.HORIZONTAL,
		...r
	};
	return /* @__PURE__ */ import_react.createElement("div", {
		style: t.style,
		className: n$12("k-card-actions", "k-actions", t.className, `k-actions-${t.layout}`, t.orientation !== R$3.VERTICAL ? "k-actions-horizontal" : "k-actions-vertical")
	}, t.children);
};
s$7.propTypes = {
	layout: import_prop_types.default.oneOf([
		"stretched",
		"start",
		"center",
		"end"
	]),
	orientation: import_prop_types.default.oneOf(["horizontal", "vertical"])
};
//#endregion
//#region node_modules/@progress/kendo-react-layout/card/CardSubtitle.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var a$5 = (e) => /* @__PURE__ */ import_react.createElement("div", {
	style: e.style,
	className: n$12("k-card-subtitle", e.className)
}, e.children);
a$5.propTypes = { className: import_prop_types.default.string };
//#endregion
//#region node_modules/@progress/kendo-react-layout/card/Avatar.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var i$9 = (s) => {
	const e = {
		type: E$4.TEXT,
		size: void 0,
		rounded: void 0,
		fillMode: void 0,
		themeColor: void 0,
		...s
	};
	return /* @__PURE__ */ import_react.createElement("div", {
		style: e.style,
		className: n$12("k-avatar", {
			"k-avatar-bordered": e.border,
			[`k-rounded-${e$17.roundedMap[e.rounded] || e.rounded}`]: e.rounded,
			[`k-avatar-${e$17.sizeMap[e.size] || e.size}`]: e.size,
			[`k-avatar-${e.fillMode}`]: e.fillMode,
			[`k-avatar-${e.themeColor}`]: !!e.themeColor
		}, e.className)
	}, /* @__PURE__ */ import_react.createElement("span", { className: `k-avatar-${e.type}` }, e.children));
};
i$9.propTypes = {
	className: import_prop_types.default.string,
	type: import_prop_types.default.oneOf([
		"text",
		"image",
		"icon"
	]),
	size: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large"
	]),
	rounded: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large",
		"full",
		"none"
	]),
	fillMode: import_prop_types.default.oneOf(["solid", "outline"]),
	themeColor: import_prop_types.default.oneOf([
		"base",
		"dark",
		"error",
		"info",
		"inverse",
		"light",
		"primary",
		"secondary",
		"success",
		"tertiary",
		"warning"
	])
};
//#endregion
//#region node_modules/@progress/kendo-react-progressbars/common/constants.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var s$5 = (e) => {
	const t = e.toString().split(".");
	return t.length === 1 ? `${t[0]}` : `${t[0]}.${t[1].substr(0, 3)}`;
}, l$6 = (e, t, r) => {
	const n = Math.abs((t - e) / 100);
	return Math.min(Math.max((r - e) / n, 0), 100);
}, M$3 = (e, t, r, n) => {
	const c = Math.max(r, .01), a = 100 / c * 100;
	e.current && t.current && (e.current.style.width = n ? "100%" : `${c}%`, t.current.style.width = n ? "100%" : `${a}%`, e.current.style.height = n ? `${c}%` : "100%", t.current.style.height = n ? `${a}%` : "100%");
};
//#endregion
//#region node_modules/@progress/kendo-react-progressbars/progressbar/hooks/usePrevious.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var o$9 = (t) => {
	const e = import_react.useRef(void 0);
	return import_react.useEffect(() => {
		e.current = t;
	}), e.current;
};
//#endregion
//#region node_modules/@progress/kendo-react-progressbars/progressbar/ProgressBar.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var R$2 = import_react.forwardRef((t, S) => {
	const { animation: p = o$8.animation, disabled: g = o$8.disabled, reverse: C = o$8.reverse, orientation: A, labelVisible: T = o$8.labelVisible, labelPlacement: d, max: l = o$8.max, min: n = o$8.min, tabIndex: V, className: L, style: O, emptyStyle: h, emptyClassName: N, progressStyle: w, progressClassName: k } = t, i = import_react.useRef(null), c = import_react.useRef(null), m = import_react.useRef(null), U = import_react.useCallback(() => {
		i.current && i.current.focus();
	}, []);
	import_react.useImperativeHandle(S, () => ({
		element: i.current,
		progressStatusElement: c.current,
		progressStatusWrapElement: m.current,
		focus: U
	}));
	const s = t.value || o$8.value, u = o$9(s), y = t.value === null, D = u$8(i, t.dir), r = A === "vertical", _ = s$5(s), j = { value: s }, E = T ? t.label ? /* @__PURE__ */ import_react.createElement("span", { className: "k-progress-status" }, /* @__PURE__ */ import_react.createElement(t.label, { ...j })) : /* @__PURE__ */ import_react.createElement("span", { className: "k-progress-status" }, _) : void 0, B = {
		className: n$12("k-progressbar", {
			"k-progressbar-horizontal": !r,
			"k-progressbar-vertical": r,
			"k-progressbar-reverse": C,
			"k-progressbar-indeterminate": y,
			"k-disabled": g
		}, L),
		ref: i,
		dir: D,
		tabIndex: A$6(V, g),
		role: "progressbar",
		"aria-label": t.ariaLabel,
		"aria-valuemin": n,
		"aria-valuemax": l,
		"aria-valuenow": y ? void 0 : s,
		"aria-disabled": g,
		style: O
	}, P = n$12("k-progress-status-wrap", {
		"k-progress-start": d === "start",
		"k-progress-center": d === "center",
		"k-progress-end": d === "end" || d === void 0
	}), x = typeof p != "boolean" && p !== void 0 ? p.duration : p ? 400 : 0;
	return p$12({
		duration: x,
		onStart: import_react.useCallback(() => {
			M$3(c, m, l$6(n, l, u), r);
		}, [
			r,
			l,
			n,
			u
		]),
		onUpdate: import_react.useCallback((b) => {
			M$3(c, m, l$6(n, l, u + (s - u) * b), r);
		}, [
			n,
			l,
			u,
			s,
			r
		]),
		onEnd: import_react.useCallback(() => {
			M$3(c, m, l$6(n, l, s), r);
		}, [
			r,
			l,
			n,
			s
		])
	}, [s, x]), /* @__PURE__ */ import_react.createElement("div", { ...B }, /* @__PURE__ */ import_react.createElement("span", {
		className: P + (N ? " " + N : ""),
		style: h
	}, E), /* @__PURE__ */ import_react.createElement("div", {
		className: "k-progressbar-value k-selected",
		style: w,
		ref: c
	}, /* @__PURE__ */ import_react.createElement("span", {
		className: P + (k ? " " + k : ""),
		ref: m
	}, E)));
});
R$2.propTypes = {
	animation: import_prop_types.default.any,
	ariaLabel: import_prop_types.default.string,
	disabled: import_prop_types.default.bool,
	reverse: import_prop_types.default.bool,
	label: import_prop_types.default.any,
	labelVisible: import_prop_types.default.bool,
	labelPlacement: import_prop_types.default.oneOf([
		"start",
		"center",
		"end"
	]),
	max: import_prop_types.default.number,
	min: import_prop_types.default.number,
	value: import_prop_types.default.number,
	tabIndex: import_prop_types.default.number,
	emptyStyle: import_prop_types.default.object,
	emptyClassName: import_prop_types.default.string,
	progressStyle: import_prop_types.default.object,
	progressClassName: import_prop_types.default.string
};
var o$8 = {
	animation: !1,
	min: 0,
	max: 100,
	value: 0,
	disabled: !1,
	reverse: !1,
	labelVisible: !0
};
R$2.displayName = "KendoProgressBar";
//#endregion
//#region node_modules/@progress/kendo-react-layout/contextmenu/ContextMenu.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var w$1 = (e) => {
	const o = import_react.useRef(null), [u, c] = import_react.useState(e.show), m = I$4(e.id), { animate: a = C$5.animate } = e;
	import_react.useEffect(() => {
		c(e.show), e.show && setTimeout(() => {
			const t = o.current && o.current.element, s = t && t.querySelector(".k-menu-item"), l = o$20(t == null ? void 0 : t.ownerDocument);
			s && s !== l && s.focus();
		});
	}, [e.show]);
	const i = (t) => {
		t.popupCloseEvent || e.onClose(t);
	};
	return /* @__PURE__ */ import_react.createElement(re, {
		show: u,
		offset: e.offset,
		popupClass: "k-menu-popup k-overflow-visible",
		animate: a
	}, /* @__PURE__ */ import_react.createElement(b$7, {
		id: m,
		vertical: !0,
		...e,
		ref: o,
		className: n$12("k-context-menu", e.className),
		onClose: i,
		role: "menu"
	}, e.children));
}, C$5 = { animate: {
	openDuration: 300,
	closeDuration: 300
} };
w$1.displayName = "KendoReactContextMenu";
//#endregion
//#region node_modules/@progress/kendo-react-layout/index.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var e$8 = a$11(b$7);
e$8.displayName = "KendoReactMenu";
a$11(ge);
e$8.displayName = "KendoReactMenu";
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/messages/index.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var e$7 = "newMessage.sendButton", t$3 = "newMessage.optionsButton", o$7 = "newMessage.messageInput", s$4 = "avatar.alt", a$3 = "messageList.ariaLabel", n$4 = "aIPrompt.noOutputs", l$5 = "aIPrompt.cancel", c$6 = "chat.senderDeletedMessage", r$12 = "chat.receiverDeletedMessage", p$11 = "chat.copyNotification", i$7 = "chat.downloadAllFiles", g$4 = "chat.closeReply", m$9 = "chat.collapseMessage", d$7 = "chat.expandMessage", h$6 = "chat.removeFile", B = "chat.fileActions", M$2 = "chat.attachFile", x$3 = "chat.downloadAll", u$6 = "chat.scrollLeft", f$7 = "chat.scrollRight", v$5 = "chat.scrollToBottom", F$6 = "chat.messageFailed", w = "chat.retryMessage", A$2 = "chat.stopGenerating", S$2 = "promptBox.input", b$5 = "promptBox.sendButton", y$6 = "promptBox.attachFile", R$1 = "promptBox.removeFile", I$1 = "promptBox.stopGenerating", L = "promptBox.ariaLabel", D = {
	[e$7]: "Send",
	[t$3]: "Options",
	[o$7]: "Message",
	[s$4]: "Avatar",
	[a$3]: "Message list",
	[l$5]: "Cancel",
	[n$4]: "No output from AI available",
	[c$6]: "You removed this message",
	[r$12]: "The message was removed by its sender",
	[p$11]: "Text copied to clipboard",
	[i$7]: "Download all files",
	[g$4]: "Close reply",
	[m$9]: "Collapse message",
	[d$7]: "Expand message",
	[h$6]: "Remove file",
	[B]: "File actions for",
	[F$6]: "Failed to send",
	[w]: "Retry",
	[A$2]: "Stop generating",
	[M$2]: "Attach file",
	[x$3]: "Download all",
	[u$6]: "Scroll left",
	[f$7]: "Scroll right",
	[v$5]: "Scroll to bottom",
	[S$2]: "Prompt",
	[b$5]: "Send",
	[y$6]: "Attach file",
	[R$1]: "Remove file",
	[I$1]: "Stop generating",
	[L]: "Prompt box"
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/utils.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var p$10 = (e, t) => e && t.author && e.id === t.author.id, f$6 = (e, t) => {
	const s = t.toLanguageString("chatSender.deletedMessage", D[c$6]), o = t.toLanguageString("chatReceiver.deletedMessage", D[r$12]);
	return e ? s : o;
}, m$8 = (e) => {
	navigator.clipboard.writeText(e);
}, T$2 = (e, t) => e.find((s) => s.id === t), M$1 = (e, t, s = 0) => {
	if (!t) return;
	const o = t.querySelector(`[data-message-id="${e}"]`);
	if (!o) return;
	const r = t.querySelector(".k-message-list");
	if (r) {
		const a = r.getBoundingClientRect().top, l = o.getBoundingClientRect().top, i = r.scrollTop + (l - a) - s;
		r.scrollTo({
			top: i,
			behavior: "smooth"
		});
	} else o.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}, n$3 = /(https?:\/\/[^\s]+)/g, y$5 = (e) => {
	if (!e) return [""];
	const t = e.split(n$3), s = [];
	return t.forEach((o) => {
		o && n$3.test(o) ? (n$3.lastIndex = 0, s.push(import_react.createElement("a", {
			key: o,
			href: o,
			target: "_blank",
			rel: "noopener noreferrer",
			style: {
				color: "inherit",
				textDecoration: "underline"
			}
		}, o))) : o && s.push(o);
	}), s;
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/ChatContext.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var r$11 = import_react.createContext(void 0), a$2 = () => {
	const t = (0, import_react.useContext)(r$11);
	if (t === void 0) throw new Error("useChatContext must be used within a ChatContext.Provider");
	return t;
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/elements/FileBox.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var P$2 = (x) => {
	const { files: c, onFileAction: i, onDownload: r, fileActions: N } = x, { messageFilesLayout: s = "vertical" } = a$2(), m = i$17(), p = N || [{
		id: "download",
		label: "Download",
		svgIcon: downloadLightIcon
	}], f = (e) => {
		if (e == null) return "";
		if (e === 0) return "0 B";
		const t = 1024, o = [
			"B",
			"KB",
			"MB",
			"GB",
			"TB"
		], n = Math.floor(Math.log(e) / Math.log(t));
		return `${parseFloat((e / Math.pow(t, n)).toFixed(2))} ${o[n]}`;
	}, g = (e) => "." + e.split(".").pop() || "", v = (e, t) => {
		var o, n;
		(n = (o = e.syntheticEvent) == null ? void 0 : o.stopPropagation) == null || n.call(o), e.item.id === "download" && r?.([t]), i?.(e.item, e, t);
	}, d = (e) => p.length > 0 && /* @__PURE__ */ import_react.createElement(p$19, {
		fillMode: "flat",
		svgIcon: moreVerticalIcon,
		onClick: (t) => {
			t.syntheticEvent.stopPropagation();
		},
		onItemClick: (t) => v(t, e),
		items: p.map((t) => ({
			id: t.id,
			icon: t.icon,
			text: t.label,
			svgIcon: t.svgIcon
		})),
		"aria-label": `${m.toLanguageString("chat.fileActions", D["chat.fileActions"])} ${e.name}`,
		title: `${m.toLanguageString("chat.fileActions", D["chat.fileActions"])} ${e.name}`
	}), z = import_react.useCallback(() => n$12({
		"k-files-wrap": s === "wrap",
		"k-files-vertical": s === "vertical"
	}, "k-file-box-wrapper"), [s]);
	return /* @__PURE__ */ import_react.createElement("ul", { className: z() }, s === "horizontal" ? /* @__PURE__ */ import_react.createElement("div", { className: "k-files-scroll" }, c.map((e) => /* @__PURE__ */ import_react.createElement("li", {
		key: e.name,
		className: "k-file-box"
	}, /* @__PURE__ */ import_react.createElement(v$9, {
		size: "xlarge",
		...g$6(g(e.name))
	}), /* @__PURE__ */ import_react.createElement("div", { className: "k-file-info" }, /* @__PURE__ */ import_react.createElement("span", { className: "k-file-name" }, e.name), /* @__PURE__ */ import_react.createElement("span", { className: "k-file-size" }, f(e.size))), d(e)))) : c.map((e) => /* @__PURE__ */ import_react.createElement("li", {
		key: e.name,
		className: "k-file-box"
	}, /* @__PURE__ */ import_react.createElement(v$9, {
		size: "xlarge",
		...g$6(g(e.name))
	}), /* @__PURE__ */ import_react.createElement("div", { className: "k-file-info" }, /* @__PURE__ */ import_react.createElement("span", { className: "k-file-name" }, e.name), /* @__PURE__ */ import_react.createElement("span", { className: "k-file-size" }, f(e.size))), d(e))));
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/ChatMessage.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var je = import_react.forwardRef((me, d) => {
	const { item: a, template: f, contentTemplate: T, onRequestSelection: p, tabIndex: de = -1, dateFormat: U = "g", selected: o, allowMessageCollapse: g, messageToolbarActions: b, messageContextMenuActions: k, fileActions: q, isSender: C } = me, { setReplyToMessage: E, messages: X, repliedToMessages: M, user: u, onToolbarAction: N, onContextMenuAction: D$5, onFileAction: Y, onDownload: i, onResendMessage: S, setShowCopyNotification: y, statusTemplate: F, timestampVisibility: x = "onFocus", onReferencedMessageClick: I } = a$2(), [$, A] = import_react.useState(!1), [G, R] = import_react.useState(!1), [w$2, fe] = import_react.useState(!0), [pe, J] = import_react.useState(!1), l = i$17(), Q = i$15(), Z = import_react.useRef({
		left: 0,
		top: 0
	}), h = import_react.useCallback(() => {
		a != null && a.text && m$8(a.text), y && (y(!0), setTimeout(() => {
			y(!1);
		}, 3e3));
	}, [a, y]), V = import_react.useCallback((e) => {
		e.stopPropagation(), fe((s) => !s);
	}, []), ge = import_react.useCallback(() => {
		J(!1);
	}, []), be = import_react.useCallback((e) => {
		(e.key === "Tab" || e.key === "Enter" || e.key === " " || e.key === "ArrowUp" || e.key === "ArrowDown") && J(!0);
	}, []), L = import_react.useRef(null);
	import_react.useEffect(() => {
		o && L.current && L.current.focus();
	}, [o]);
	const z = import_react.useCallback((e) => {
		Z.current = {
			left: e.pageX,
			top: e.pageY
		}, e.preventDefault(), R(!0), A(!0);
	}, []), _ = import_react.useCallback(() => {
		R(!1), A(!1);
	}, []), v = import_react.useCallback((e, s) => e.isDeleted ? f$6(s, l) : e.text ? e.text : "", [l]), ee = import_react.useCallback((e) => {
		var s;
		(s = e.item) != null && s.text && (e.item.data.id === "copy" && !a.isDeleted ? h() : e.item.data.id === "reply" && E(a), D$5 && D$5(e.item.data, e, a)), R(!1), A(!1);
	}, [
		a,
		D$5,
		E,
		h
	]), te = import_react.useCallback(() => {
		if (a.replyToId) {
			const e = T$2(X, a.replyToId) || (M ? T$2(M, a.replyToId) : void 0);
			if (e) {
				const s = (n) => {
					n.preventDefault(), n.stopPropagation(), I?.(e.id);
				};
				return /* @__PURE__ */ import_react.createElement("div", {
					className: n$12("k-message-reference", p$10(u, e) ? "k-message-reference-sender" : "k-message-reference-receiver"),
					onClick: s
				}, /* @__PURE__ */ import_react.createElement("div", { className: "k-message-reference-content" }, y$5(v(e, p$10(u, e)))));
			}
		}
		return null;
	}, [
		a.replyToId,
		X,
		M,
		u,
		v,
		I
	]), K = import_react.useCallback(() => {
		const e = [{
			id: "reply",
			label: "Reply",
			svgIcon: undoIcon
		}, {
			id: "copy",
			label: "Copy",
			svgIcon: copyIcon
		}], s = k ? [...e.map((n) => k.find((m) => m.id === n.id) || n), ...k.filter((n) => !e.some((r) => r.id === n.id))] : e;
		return /* @__PURE__ */ import_react.createElement(w$1, {
			onSelect: ee,
			onClose: _,
			vertical: !0,
			show: $,
			offset: Z.current
		}, s.map((n) => n.id === "delete" && !C ? null : /* @__PURE__ */ import_react.createElement(t$13, {
			key: n.id,
			text: n.label,
			icon: n.icon,
			svgIcon: n.svgIcon,
			data: n
		})));
	}, [
		k,
		ee,
		_,
		$,
		C
	]), ae = import_react.useCallback(() => a.files && a.files.length > 1 ? /* @__PURE__ */ import_react.createElement("div", { className: "k-chat-download-button-wrapper" }, /* @__PURE__ */ import_react.createElement(A$5, {
		className: "k-chat-download-button",
		fillMode: "flat",
		svgIcon: downloadLightIcon,
		size: "small",
		onClick: (e) => {
			e.stopPropagation(), i && i(a.files, a);
		},
		"aria-label": l.toLanguageString(i$7, D[i$7])
	}, /* @__PURE__ */ import_react.createElement("span", { className: "k-button-text" }, l.toLanguageString(x$3, D[x$3])))) : null, [
		a,
		i,
		l
	]), ke = import_react.useCallback(() => {
		if (a.typing) return /* @__PURE__ */ import_react.createElement("div", { className: "k-chat-bubble k-bubble" }, /* @__PURE__ */ import_react.createElement("div", { className: "k-bubble-content" }, /* @__PURE__ */ import_react.createElement("div", { className: "k-typing-indicator" }, /* @__PURE__ */ import_react.createElement("span", null), /* @__PURE__ */ import_react.createElement("span", null), /* @__PURE__ */ import_react.createElement("span", null))));
		if (f) {
			const e = f;
			return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(e, { item: a }), K());
		} else if (a.text || a.files && a.files.length > 0) return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("div", {
			className: n$12("k-chat-bubble", "k-bubble", {
				"k-bubble-expandable": g,
				"k-expanded": g && w$2,
				"k-selected": o,
				"k-active": G
			}),
			onClick: () => p(o ? void 0 : a.selectionIndex),
			onContextMenu: z
		}, /* @__PURE__ */ import_react.createElement("div", { className: "k-bubble-content" }, T ? /* @__PURE__ */ import_react.createElement(T, { item: a }) : /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, (a.text || a.isDeleted || a.replyToId) && /* @__PURE__ */ import_react.createElement("span", { className: "k-chat-bubble-text" }, !a.isDeleted && te(), y$5(v(a, p$10(u, a)))), a.files && a.files.length > 0 && /* @__PURE__ */ import_react.createElement(P$2, {
			files: a.files,
			message: a,
			onFileAction: Y,
			onDownload: (e) => i == null ? void 0 : i(e, a),
			renderInTextarea: !1,
			fileActions: q
		}), ae())), g && /* @__PURE__ */ import_react.createElement("span", {
			className: "k-bubble-expandable-indicator",
			onClick: V,
			role: "button",
			"aria-label": w$2 ? l.toLanguageString("chat.collapseMessage", D["chat.collapseMessage"]) : l.toLanguageString("chat.expandMessage", D["chat.expandMessage"]),
			tabIndex: 0,
			onKeyDown: (e) => {
				(e.key === "Enter" || e.key === " ") && (e.preventDefault(), V(e));
			}
		}, /* @__PURE__ */ import_react.createElement(v$9, {
			icon: w$2 ? chevronUpIcon : chevronDownIcon,
			size: "medium"
		}))), K());
		return null;
	}, [
		a,
		f,
		T,
		g,
		w$2,
		o,
		G,
		p,
		z,
		te,
		v,
		u,
		Y,
		q,
		ae,
		V,
		l,
		K,
		i
	]), Ce = import_react.useCallback(() => {
		let e = null;
		if (a.timestamp) {
			const s = x === "onFocus" && o;
			x === "hidden" || (e = /* @__PURE__ */ import_react.createElement("time", {
				className: "k-message-time",
				"aria-hidden": !s
			}, Q.formatDate(a.timestamp, U)));
		}
		return e;
	}, [
		a.timestamp,
		o,
		U,
		x,
		Q
	]), Ee = import_react.useCallback(() => {
		if (!a.status) return null;
		let e;
		if (F) e = import_react.createElement(F, { item: a });
		else {
			const s = typeof a.status == "object" && a.status !== null;
			let n, r, m;
			if (s) {
				const P = a.status;
				n = P.text, r = P.icon, m = P.svgIcon;
			} else n = a.status;
			let O = null;
			r ? O = /* @__PURE__ */ import_react.createElement(u$9, {
				name: r,
				size: "xsmall"
			}) : m && (O = /* @__PURE__ */ import_react.createElement(v$9, {
				icon: m,
				size: "xsmall"
			})), e = /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, O, n);
		}
		return /* @__PURE__ */ import_react.createElement("span", { className: "k-message-status" }, e);
	}, [a, F]), ye = import_react.useCallback(() => {
		let e = null;
		if (a.isFailed) {
			const s = l.toLanguageString(F$6, D[F$6]);
			e = /* @__PURE__ */ import_react.createElement("span", { className: "k-message-failed-content" }, /* @__PURE__ */ import_react.createElement(v$9, {
				icon: warningTriangleIcon,
				size: "xsmall"
			}), /* @__PURE__ */ import_react.createElement("span", { className: "k-message-failed-text" }, s));
		}
		return e;
	}, [a, l]), xe = import_react.useCallback(() => {
		let e = null;
		if (a.isFailed) {
			const s = l.toLanguageString(w, D[w]);
			e = /* @__PURE__ */ import_react.createElement(A$5, {
				fillMode: "clear",
				size: "small",
				className: "k-resend-button",
				svgIcon: arrowRotateCwOutlineIcon,
				"aria-label": s,
				title: s,
				onClick: (n) => {
					n.stopPropagation(), S && S({
						message: a,
						syntheticEvent: n,
						nativeEvent: n.nativeEvent,
						target: n.target
					});
				}
			});
		}
		return e;
	}, [
		a,
		l,
		S
	]), Ie = import_react.useCallback(() => n$12({
		"k-focus": o,
		"k-message-removed": a.isDeleted,
		"k-message-failed": a.isFailed
	}, "k-message"), [
		o,
		a.isDeleted,
		a.isFailed
	]), we = import_react.useCallback(() => b && b.length > 0 && /* @__PURE__ */ import_react.createElement(N$7, {
		className: "k-chat-message-toolbar",
		fillMode: "flat"
	}, b.map((e) => e.id === "delete" && !C ? null : /* @__PURE__ */ import_react.createElement(A$5, {
		key: e.id,
		fillMode: "flat",
		className: "k-toolbar-button",
		icon: e.icon,
		svgIcon: e.svgIcon,
		onClick: (s) => {
			s.stopPropagation(), e.id === "copy" && !a.isDeleted ? h() : e.id === "reply" && E(a), N && N(e, s, a);
		},
		onMouseDown: (s) => s.preventDefault()
	}))), [
		h,
		C,
		a,
		b,
		N,
		E
	]);
	return /* @__PURE__ */ import_react.createElement("div", {
		key: a.id,
		"data-message-id": a.id,
		className: Ie(),
		tabIndex: de,
		onMouseDown: ge,
		onKeyDown: be,
		onFocus: (e) => {
			pe && p(a.selectionIndex);
		},
		ref: (e) => {
			L.current = e, typeof d == "function" ? d(e) : d && (d.current = e);
		},
		onContextMenu: f ? z : void 0
	}, xe(), ke(), (a.status || a.timestamp && x !== "hidden" || a.isFailed) && /* @__PURE__ */ import_react.createElement("div", { className: "k-message-info" }, Ee(), Ce(), ye()), we());
});
je.displayName = "ChatMessage";
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/ViewItem.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var o$5 = (s) => s[s.length - 1], p$9 = (s, e) => s && e && (e.getDate() !== s.getDate() || e.getMonth() !== s.getMonth() || e.getFullYear() !== s.getFullYear()), r$10 = (s, e) => {
	const t = e.timestamp, a = o$5(s);
	if (t && (!a || p$9(t, a.timestamp))) {
		const n = {
			type: "date-marker",
			timestamp: t,
			trackBy: t.getTime()
		};
		s.push(n);
	}
}, u$5 = (s, e, t) => {
	const a = o$5(s);
	let n;
	e.typing && !t || (a && a.type === "message-group" && (n = a.messages), n && p$10(e.author, o$5(n)) ? n.push(e) : s.push({
		type: "message-group",
		messages: [e],
		author: e.author,
		timestamp: e.timestamp,
		trackBy: e
	}));
}, c$5 = (s) => (e, t, a) => {
	const n = a === s - 1;
	return r$10(e, t), u$5(e, t, n), t.attachments && t.attachments.length > 1 && e.push({
		type: "attachment-group",
		attachments: t.attachments,
		attachmentLayout: t.attachmentLayout,
		timestamp: t.timestamp,
		trackBy: t
	}), t.suggestedActions && n && e.push({
		type: "action-group",
		actions: t.suggestedActions,
		timestamp: t.timestamp,
		trackBy: t
	}), e;
};
function h$5(s) {
	let e = 0;
	s.forEach((t) => {
		t.type === "message-group" ? t.messages.forEach((a) => {
			a.selectionIndex = e++;
		}) : (t.type === "attachment-group" || t.type === "action-group") && (t.selectionIndex = e++);
	}), s.lastSelectionIndex = e - 1;
}
var m$7 = (s) => {
	const t = s.slice().reduce(c$5(s.length), []);
	return h$5(t), t;
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/Action.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var m$6 = (c) => {
	const { item: e, onActionExecute: l, selected: s } = c, o = import_react.useRef(null);
	import_react.useEffect(() => {
		s && o.current && o.current.focus();
	}, [s]);
	const n = import_react.useCallback((t) => {
		(t.keyCode === e$16.enter || t.key === " ") && (t.preventDefault(), l(e, t));
	}, [l, e]), r = import_react.useCallback(() => n$12("k-suggestion k-suggestion-primary", { "k-selected": s }, { "k-focus": s }), [s]);
	return /* @__PURE__ */ import_react.createElement("span", {
		role: "button",
		className: r(),
		onClick: (t) => l(e, t),
		ref: o,
		onKeyDown: n,
		tabIndex: 0,
		"aria-label": e.title || e.value
	}, e.title || e.value);
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/ScrollButtonsWrapper.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var k$1 = ({ visible: L, dir: t, canScrollLeft: b, canScrollRight: u, onScrollLeft: v, onScrollRight: h, children: l }) => {
	const o = i$17();
	if (!L) return l;
	const r = o.toLanguageString(u$6, D[u$6]), a = o.toLanguageString(f$7, D[f$7]), s = t !== "rtl" ? r : a, n = t !== "rtl" ? a : r;
	return /* @__PURE__ */ import_react.createElement("div", { className: "k-suggestion-scrollwrap" }, /* @__PURE__ */ import_react.createElement(A$5, {
		fillMode: "flat",
		size: "small",
		svgIcon: t === "rtl" ? chevronRightIcon : chevronLeftIcon,
		onClick: v,
		disabled: !b,
		"aria-label": s,
		title: s
	}), l, /* @__PURE__ */ import_react.createElement(A$5, {
		fillMode: "flat",
		size: "small",
		svgIcon: t === "rtl" ? chevronLeftIcon : chevronRightIcon,
		onClick: h,
		disabled: !u,
		"aria-label": n,
		title: n
	}));
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/hooks/useScrollWithButtons.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var p$8 = 100, a$1 = 1, y$4 = (l, S) => {
	const { enabled: t, dir: s, mode: d, itemsDependency: i = [], scrollSpeed: c = p$8 } = S, [f, L] = import_react.useState(!1), [h, b] = import_react.useState(!1), o = import_react.useCallback(() => {
		if (l.current && t) {
			const { scrollLeft: e, scrollWidth: n, clientWidth: u } = l.current, m = e === 0, C = s !== "rtl" ? e + u >= n - a$1 : u - e >= n - a$1;
			L(!m), b(!C);
		}
	}, [t, s]), v = import_react.useCallback(() => {
		l.current && t && l.current.scrollBy({
			left: s !== "rtl" ? -c : c,
			behavior: "smooth"
		});
	}, [
		t,
		s,
		c
	]), E = import_react.useCallback(() => {
		l.current && t && l.current.scrollBy({
			left: s !== "rtl" ? c : -c,
			behavior: "smooth"
		});
	}, [
		t,
		s,
		c
	]);
	return import_react.useEffect(() => {
		const e = l.current;
		if (!e || !t) return;
		o();
		const n = () => o();
		e.addEventListener("scroll", n, { passive: !0 });
		const u = new ResizeObserver(o);
		return u.observe(e), () => {
			e.removeEventListener("scroll", n), u.disconnect();
		};
	}, [
		t,
		o,
		i.length,
		d
	]), import_react.useLayoutEffect(() => {
		t && o();
	}, [
		t,
		s,
		i
	]), {
		canScrollLeft: f,
		canScrollRight: h,
		scrollLeft: v,
		scrollRight: E
	};
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/ActionGroup.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var P$1 = (I) => {
	var k, C;
	const { group: c, onActionExecute: d, selected: r, onRequestSelection: m, quickActionsLayout: l = "scroll", dir: g } = I, [t, a] = import_react.useState(null), p = import_react.useRef(null), { canScrollLeft: i, canScrollRight: u, scrollLeft: x, scrollRight: R } = y$4(p, {
		enabled: l === "scrollbuttons" || l === "scroll",
		dir: g,
		mode: l,
		itemsDependency: c.actions
	});
	import_react.useEffect(() => {
		!r && t !== null ? a(null) : r && t === null && a(0);
	}, [r, t]);
	const b = import_react.useCallback(() => c.actions ? c.actions.length - 1 : -1, [c.actions]), f = import_react.useCallback((o, s = 0) => {
		let n = null;
		return o ? t === null ? n = s : t < b() && (n = t + 1) : t === null ? n = 0 : t > 0 && (n = t - 1), n !== null && a(n), n;
	}, [t, b]), E = import_react.useCallback(() => {
		m(c.selectionIndex);
	}, [m, c.selectionIndex]), h = import_react.useCallback((o) => {
		let s = null;
		const n = e$16.left, K = e$16.right;
		o.keyCode === n ? s = f(!1) : o.keyCode === K && (s = f(!0)), s !== null && (o.preventDefault(), o.stopPropagation());
	}, [f]), A = import_react.useCallback(() => n$12("k-suggestion-group", {
		"k-suggestion-group-scrollable": l === "scroll",
		"k-suggestion-group-scrollable-start": u && (l === "scroll" || l === "scrollbuttons"),
		"k-suggestion-group-scrollable-end": i && (l === "scroll" || l === "scrollbuttons")
	}), [
		l,
		u,
		i
	]), L = l === "scroll" || l === "scrollbuttons", v = /* @__PURE__ */ import_react.createElement("div", {
		className: A(),
		onClick: E,
		onKeyDown: h,
		role: "toolbar",
		tabIndex: 0,
		"aria-label": "Action group"
	}, L ? /* @__PURE__ */ import_react.createElement("div", {
		className: "k-suggestions-scroll",
		ref: p
	}, (k = c.actions) == null ? void 0 : k.map((o, s) => /* @__PURE__ */ import_react.createElement(m$6, {
		item: o,
		onActionExecute: d,
		selected: s === t,
		key: o.value
	}))) : (C = c.actions) == null ? void 0 : C.map((o, s) => /* @__PURE__ */ import_react.createElement(m$6, {
		item: o,
		onActionExecute: d,
		selected: s === t,
		key: o.value
	})));
	return /* @__PURE__ */ import_react.createElement(k$1, {
		visible: l === "scrollbuttons",
		dir: g,
		canScrollLeft: i,
		canScrollRight: u,
		onScrollLeft: x,
		onScrollRight: R
	}, v);
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/Attachment.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var p$7 = (s) => {
	const { item: e, template: c, tabbable: l, onClick: r, selected: a } = s, n = import_react.useRef(null);
	import_react.useEffect(() => {
		a && n.current && n.current.focus();
	}, [a]);
	const i = import_react.useCallback(() => {
		if (l !== void 0) return l ? 0 : -1;
	}, [l]), u = import_react.useCallback(() => n$12({ "k-selected": a }, { "k-focus": a }), [a]), o = import_react.useCallback(() => e.title ? /* @__PURE__ */ import_react.createElement("h5", { className: "k-card-title" }, e.title) : null, [e.title]), m = import_react.useCallback(() => e.subtitle ? /* @__PURE__ */ import_react.createElement("h6", { className: "k-card-subtitle" }, e.subtitle) : null, [e.subtitle]), d = import_react.useCallback(() => e.contentType.indexOf("image/") === 0 ? /* @__PURE__ */ import_react.createElement("img", {
		src: e.content,
		alt: e.title || "Attachment",
		style: {
			maxHeight: "200px",
			height: "auto",
			maxWidth: "200px",
			width: "auto"
		}
	}) : e.content, [
		e.contentType,
		e.content,
		e.title
	]), b = c;
	return /* @__PURE__ */ import_react.createElement("div", {
		className: u(),
		tabIndex: i(),
		onClick: r,
		ref: n
	}, c ? /* @__PURE__ */ import_react.createElement(b, { item: e }) : /* @__PURE__ */ import_react.createElement("div", { className: "k-card" }, /* @__PURE__ */ import_react.createElement("div", { className: "k-card-body" }, o(), m(), d())));
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/AttachmentGroup.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var P = (y) => {
	const { group: t, itemTemplate: v, selected: f, isLastGroup: L, onRequestSelection: k } = y, [n, r] = import_react.useState(null);
	import_react.useEffect(() => {
		!f && n !== null ? r(null) : f && n === null && r(0);
	}, [f, n]);
	const c = import_react.useCallback((e) => e.attachmentLayout !== "list", []), C = import_react.useCallback(() => t.attachments ? t.attachments.length - 1 : -1, [t.attachments]), h = import_react.useCallback(() => t.attachments.length - 1, [t.attachments]), o = import_react.useCallback((e, s = 0) => {
		let a = null;
		return e ? n === null ? a = s : n < C() && (a = n + 1) : n === null ? a = 0 : n > 0 && (a = n - 1), a !== null && r(a), a;
	}, [n, C]), u = import_react.useCallback(() => {
		k(t.selectionIndex);
	}, [k, t.selectionIndex]), g = import_react.useCallback((e) => {
		let s = null, a, d;
		c(t) ? (a = e$16.left, d = e$16.right) : (a = e$16.up, d = e$16.down), e.keyCode === a ? s = o(!1) : e.keyCode === d && (s = o(!0)), s !== null && (e.preventDefault(), e.stopPropagation());
	}, [
		o,
		c,
		t
	]), S = import_react.useCallback((e) => {
		u(), r(e);
	}, [u]), i = import_react.useCallback((e) => {
		u(), o(e, 1);
	}, [u, o]), w = import_react.useCallback(() => {
		let e = null;
		return c(t) && n && (e = /* @__PURE__ */ import_react.createElement(A$5, {
			icon: "chevron-left",
			onClick: () => i(!1),
			svgIcon: chevronLeftIcon
		})), e;
	}, [
		c,
		t,
		n,
		i
	]), x = import_react.useCallback(() => {
		let e = null;
		return c(t) && n !== h() && (e = /* @__PURE__ */ import_react.createElement(A$5, {
			icon: "chevron-right",
			onClick: () => i(!0),
			svgIcon: chevronRightIcon
		})), e;
	}, [
		c,
		t,
		n,
		h,
		i
	]), E = import_react.useCallback(() => n$12({
		"k-card-list": t.attachmentLayout,
		"k-card-deck": c(t)
	}), [
		t.attachmentLayout,
		t,
		c
	]), p = c(t), I = /* @__PURE__ */ import_react.createElement("div", {
		className: E(),
		onKeyDown: p ? void 0 : g
	}, t.attachments.map((e, s) => /* @__PURE__ */ import_react.createElement(p$7, {
		item: e,
		template: v,
		selected: s === n,
		tabbable: L && s === n,
		onClick: () => S(s),
		key: e.content
	})));
	return p ? /* @__PURE__ */ import_react.createElement("div", {
		className: "k-card-deck-scrollwrap",
		onKeyDown: g
	}, w(), I, x()) : I;
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/DateMarker.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var s$3 = ({ item: t, timestampTemplate: m }) => {
	const n = i$15(), e = m;
	return /* @__PURE__ */ import_react.createElement("div", { className: "k-timestamp" }, e ? /* @__PURE__ */ import_react.createElement(e, { item: t }) : n.formatDate(t.timestamp, "D"));
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/MessageGroup.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var O$2 = (N) => {
	const { group: a, user: n, itemTemplate: l, contentTemplate: c, attachmentTemplate: i, onRequestSelection: u, selectedItemIndex: g, isLastGroup: p, message: d, allowMessageCollapse: h, messageToolbarActions: f, messageContextMenuActions: v, fileActions: k, messageWidthMode: A = "standard", showAvatar: m = !0, showUsername: T = !0 } = N, { userStatusTemplate: E } = a$2(), w = i$17(), o = a.messages.length > 0 && p$10(n, a.messages[0]), { avatarUrl: s, avatarAltText: I, name: C } = a.author, G = import_react.useMemo(() => n$12("k-message-group", {
		"k-message-group-sender": o,
		"k-message-group-receiver": !o,
		"k-message-group-full-width": A === "full",
		"k-no-avatar": !m || !s
	}), [
		o,
		A,
		m,
		s
	]), y = () => {
		if (!m || !s) return;
		const r = /* @__PURE__ */ import_react.createElement(i$9, { type: "image" }, /* @__PURE__ */ import_react.createElement("img", {
			src: s,
			alt: U
		}));
		if (E) {
			const e = a.messages[a.messages.length - 1];
			return /* @__PURE__ */ import_react.createElement("div", { className: "k-chat-user-status-wrapper" }, r, /* @__PURE__ */ import_react.createElement("div", { className: "k-chat-user-status" }, /* @__PURE__ */ import_react.createElement(E, { message: "dataItem" in e ? e.dataItem : e })));
		}
		return r;
	}, L = import_react.useMemo(() => {
		const r = a.messages.length - 1;
		return a.messages.map((e, b) => {
			const M = [/* @__PURE__ */ import_react.createElement(d, {
				item: e,
				template: l,
				contentTemplate: c,
				selected: e.selectionIndex === g,
				onRequestSelection: u,
				tabIndex: b === r && p ? 0 : -1,
				key: e.id,
				allowMessageCollapse: h,
				messageToolbarActions: f,
				messageContextMenuActions: v,
				fileActions: k,
				isSender: p$10(n, e)
			})];
			return e.attachments && e.attachments.length === 1 && M.push(/* @__PURE__ */ import_react.createElement(p$7, {
				item: e.attachments[0],
				template: i,
				selected: !1,
				key: `att-${e.attachments[0].content}`
			})), M;
		});
	}, [
		a.messages,
		d,
		l,
		c,
		g,
		u,
		p,
		h,
		f,
		v,
		k,
		n,
		i
	]), U = I !== void 0 ? I : w.toLanguageString(s$4, D[s$4]);
	return /* @__PURE__ */ import_react.createElement("div", { className: G }, y(), /* @__PURE__ */ import_react.createElement("div", { className: "k-message-group-content" }, T && /* @__PURE__ */ import_react.createElement("span", { className: "k-message-author" }, C), L));
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/SuggestionsGroup.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var N$1 = (f) => {
	const { suggestions: t, onSuggestionClick: l, suggestionsView: o, suggestionTemplate: a, suggestionsLayout: r, dir: i } = f, d = import_react.useRef(null), { canScrollLeft: p, canScrollRight: b, scrollLeft: k, scrollRight: y } = y$4(d, {
		enabled: r === "scrollbuttons" || r === "scroll",
		dir: i,
		mode: r,
		itemsDependency: t
	}), m = import_react.useCallback((e, n) => {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), l?.(n));
	}, [l]), c = import_react.useCallback(() => t.map((e) => a ? /* @__PURE__ */ import_react.createElement(a, {
		key: e.id,
		suggestion: e,
		onClick: () => {
			l?.(e);
		}
	}) : /* @__PURE__ */ import_react.createElement("span", {
		role: "button",
		tabIndex: e.disabled ? -1 : 0,
		"aria-label": e.description,
		"aria-disabled": e.disabled,
		onClick: () => !e.disabled && (l == null ? void 0 : l(e)),
		onKeyDown: (n) => !e.disabled && m(n, e),
		key: e.id,
		title: e.description,
		className: n$12(o === "classic" ? "k-prompt-suggestion" : "k-suggestion", { "k-disabled": e.disabled })
	}, e.text)), [
		t,
		a,
		l,
		o,
		m
	]);
	if (!t || t.length === 0) return null;
	if (o === "classic") return c();
	const h = r === "scroll" || r === "scrollbuttons", E = /* @__PURE__ */ import_react.createElement("div", {
		role: "group",
		className: n$12("k-suggestion-group", {
			"k-suggestion-group-scrollable": r === "scroll",
			"k-suggestion-group-scrollable-start": b && (r === "scroll" || r === "scrollbuttons"),
			"k-suggestion-group-scrollable-end": p && (r === "scroll" || r === "scrollbuttons")
		})
	}, h ? /* @__PURE__ */ import_react.createElement("div", {
		className: "k-suggestions-scroll",
		ref: d
	}, c()) : c());
	return /* @__PURE__ */ import_react.createElement(k$1, {
		visible: r === "scrollbuttons",
		dir: i,
		canScrollLeft: p,
		canScrollRight: b,
		onScrollLeft: k,
		onScrollRight: y
	}, E);
};
//#endregion
//#region node_modules/@progress/kendo-react-upload/interfaces/UploadFileStatus.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var n$2 = /* @__PURE__ */ ((e) => (e[e.UploadFailed = 0] = "UploadFailed", e[e.Initial = 1] = "Initial", e[e.Selected = 2] = "Selected", e[e.Uploading = 3] = "Uploading", e[e.Uploaded = 4] = "Uploaded", e[e.RemoveFailed = 5] = "RemoveFailed", e[e.Removing = 6] = "Removing", e))(n$2 || {});
//#endregion
//#region node_modules/@progress/kendo-react-upload/messages/index.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var e$6 = "upload.cancel", l$4 = "upload.clearSelectedFiles", o$4 = "upload.dropFilesHere", t$2 = "upload.headerStatusUploaded", a = "upload.headerStatusUploading", s$2 = "upload.invalidFileExtension", d$6 = "upload.invalidFiles", i$6 = "upload.invalidMaxFileSize", n$1 = "upload.invalidMinFileSize", p$6 = "upload.remove", c$4 = "upload.retry", u$4 = "upload.select", r$9 = "upload.selectTitle", F$5 = "upload.selectNoFilesTitle", f$5 = "upload.uploadSelectedFiles", S$1 = "upload.total", v$4 = "upload.files", U$2 = "upload.statusUploaded", h$4 = "upload.statusUploadFailed", m$5 = "upload.dropZoneHint", N$3 = "upload.defaultDropZoneNote", g$3 = "upload.dropZoneNote", y$3 = {
	[e$6]: "Cancel",
	[l$4]: "Clear",
	[o$4]: "Drop files here to upload",
	[t$2]: "Done",
	[a]: "Uploading...",
	[s$2]: "File type not allowed.",
	[d$6]: "Invalid file(s). Please check file upload requirements.",
	[i$6]: "File size too large.",
	[n$1]: "File size too small.",
	[p$6]: "Remove",
	[c$4]: "Retry",
	[u$4]: "Select files...",
	[r$9]: "Press to select more files",
	[F$5]: "No files selected",
	[f$5]: "Upload",
	[S$1]: "Total",
	[v$4]: "files",
	[U$2]: "File(s) successfully uploaded.",
	[h$4]: "File(s) failed to upload.",
	[m$5]: "Drag and drop files here to upload.",
	[N$3]: "",
	[g$3]: "Only {0} files are allowed."
};
//#endregion
//#region node_modules/@progress/kendo-react-upload/utils/utils.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var f$4 = /&/g, m$4 = /</g, E$3 = /"/g, x$2 = /'/g, h$3 = />/g, d$5 = (e) => ("" + e).replace(f$4, "&amp;").replace(m$4, "&lt;").replace(h$3, "&gt;").replace(E$3, "&quot;").replace(x$2, "&#39;"), p$5 = (e) => {
	const s = e.match(/\.([^\.]+)$/);
	return s ? s[0] : "";
}, g$2 = (e) => {
	const t = e.name, s = e.size;
	return {
		extension: p$5(t),
		name: d$5(t),
		getRawFile: () => e,
		size: s,
		status: n$2.Selected,
		progress: 0,
		uid: ""
	};
}, F$4 = (e) => {
	const t = new Array();
	let s;
	for (s = 0; s < e.length; s++) t.push(g$2(e[s]));
	return t;
}, i$5 = (e) => !!(e.validationErrors && e.validationErrors.length > 0), z$1 = (e) => {
	for (const t of e) if (i$5(t)) return !0;
	return !1;
}, U$1 = (e) => {
	let t = 0, s;
	if (typeof e[0].size == "number") for (s = 0; s < e.length; s++) e[s].size && (t += e[s].size || 0);
	else return "";
	return t /= 1024, t < 1024 ? t.toFixed(2) + " KB" : (t / 1024).toFixed(2) + " MB";
}, S = (e, t) => {
	const s = e$18();
	return e.map((o) => (o.uid = t ? s : e$18(), o));
}, R = (e) => {
	let t = !1, s = !1, o = !1, l = !1;
	const u = (n) => {
		n.forEach((r) => {
			r.status === n$2.Uploading && (t = !0), r.status === n$2.Uploaded && (s = !0), r.status === n$2.UploadFailed && (o = !0), i$5(r) && (l = !0);
		});
	};
	return Array.isArray(e) ? u(e) : Object.keys(e).forEach((n) => {
		u(e[n]);
	}), [
		t,
		s,
		o,
		l
	];
}, v$3 = {
	fileHasValidationErrors: i$5,
	filesHaveValidationErrors: z$1,
	getTotalFilesSizeMessage: U$1,
	getAllFileInfo: F$4,
	getFileInfo: g$2,
	getFileExtension: p$5,
	htmlEncode: d$5,
	assignGuidToFiles: S,
	getFileStatus: R
};
//#endregion
//#region node_modules/@progress/kendo-react-upload/UploadListActionButton.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var b$4 = class extends import_react.Component {
	constructor(t) {
		super(t), this.buttonClassNames = (o) => {
			const { actionFocused: s, retryFocused: i } = this.state;
			return n$12("k-icon-button k-upload-action", this.props.disabled ? "k-disabled" : "", s && o === "action" || i && o === "retry" ? "k-focus" : "");
		}, this.onRetryFocus = () => {
			this.setState({ retryFocused: !0 });
		}, this.onRetryBlur = () => {
			this.setState({ retryFocused: !1 });
		}, this.onActionFocus = () => {
			this.setState({ actionFocused: !0 });
		}, this.onActionBlur = () => {
			this.setState({ actionFocused: !1 });
		}, this.onActionClick = () => {
			const { status: o, uid: s, disabled: i, onCancel: a, onRemove: n } = this.props;
			i || o === n$2.Removing || (o === n$2.Uploading ? a.call(void 0, s) : n.call(void 0, s));
		}, this.onRetryClick = () => {
			const { uid: o, disabled: s, onRetry: i } = this.props;
			s || i.call(void 0, o);
		}, this.state = {
			retryFocused: !1,
			actionFocused: !1
		};
	}
	actionButtonTitle(t, o) {
		return t === n$2.Uploading ? o.toLanguageString(e$6, y$3[e$6]) : o.toLanguageString(p$6, y$3[p$6]);
	}
	retryButtonTitle(t) {
		return t.toLanguageString(c$4, y$3[c$4]);
	}
	render() {
		const { status: t, progress: o } = this.props, s = t === n$2.UploadFailed, i = t === n$2.Uploading, a = (t === n$2.Uploaded || t === n$2.Initial) && !this.props.async.removeUrl, n = s$13(this);
		return /* @__PURE__ */ import_react.createElement("span", { className: "k-upload-actions" }, i ? /* @__PURE__ */ import_react.createElement("span", { className: "k-upload-pct" }, o, "%") : void 0, s ? /* @__PURE__ */ import_react.createElement(A$5, {
			type: "button",
			fillMode: "flat",
			tabIndex: -1,
			className: this.buttonClassNames("retry"),
			onFocus: this.onRetryFocus,
			onBlur: this.onRetryBlur,
			onClick: this.onRetryClick,
			"aria-label": this.retryButtonTitle(n),
			title: this.retryButtonTitle(n),
			icon: "arrow-rotate-cw-small",
			svgIcon: arrowRotateCwSmallIcon
		}) : void 0, a ? void 0 : /* @__PURE__ */ import_react.createElement(A$5, {
			type: "button",
			fillMode: "flat",
			tabIndex: -1,
			className: this.buttonClassNames("action"),
			onFocus: this.onActionFocus,
			onBlur: this.onActionBlur,
			onClick: this.onActionClick,
			"aria-label": this.actionButtonTitle(t, n),
			"aria-hidden": !0,
			title: this.actionButtonTitle(t, n),
			icon: t === n$2.Uploading ? "cancel" : "x",
			svgIcon: t === n$2.Uploading ? cancelIcon : xIcon
		}));
	}
};
v$8(b$4);
//#endregion
//#region node_modules/@progress/kendo-react-upload/UploadListSingleItem.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var F$3 = class extends import_react.Component {
	/**
	* @hidden
	*/
	getFileExtension(e) {
		return e.extension ? e.extension.substring(1) : "";
	}
	/**
	* @hidden
	*/
	getFileValidationMessage(e, t) {
		const s = s$13(this);
		let r = "";
		if (t) r = s.toLanguageString(h$4, y$3[h$4]);
		else if (e.validationErrors && e.validationErrors.length > 0) {
			const i = `upload.${e.validationErrors[0]}`;
			r = s.toLanguageString(i, y$3[i]);
		}
		return r;
	}
	/**
	* @hidden
	*/
	renderValidationError(e, t) {
		return /* @__PURE__ */ import_react.createElement("span", {
			className: "k-file-info",
			key: "2"
		}, /* @__PURE__ */ import_react.createElement("span", {
			className: "k-file-name",
			title: e.name
		}, e.name), /* @__PURE__ */ import_react.createElement("span", {
			className: "k-file-validation-message",
			"aria-live": "polite"
		}, this.getFileValidationMessage(e, t)));
	}
	/**
	* @hidden
	*/
	renderFileDetails(e) {
		const s = s$13(this).toLanguageString(U$2, y$3[U$2]);
		return /* @__PURE__ */ import_react.createElement("span", {
			className: "k-file-info",
			key: "2"
		}, /* @__PURE__ */ import_react.createElement("span", {
			className: "k-file-name",
			title: e.name
		}, e.name), e.progress !== 100 ? /* @__PURE__ */ import_react.createElement("span", { className: "k-file-size" }, v$3.getTotalFilesSizeMessage([e])) : /* @__PURE__ */ import_react.createElement("span", {
			className: "k-file-validation-message",
			"aria-live": "polite"
		}, s));
	}
	/**
	* @hidden
	*/
	render() {
		const { files: e, ...t } = this.props, s = e[0], [, r, i, o] = v$3.getFileStatus([s]), g = !o && !r && !i;
		return /* @__PURE__ */ import_react.createElement("div", { className: n$12("k-file-single") }, g && /* @__PURE__ */ import_react.createElement(R$2, {
			value: s.progress || 0,
			tabIndex: -1
		}), /* @__PURE__ */ import_react.createElement("span", {
			className: "k-file-icon-wrapper",
			key: "1"
		}, /* @__PURE__ */ import_react.createElement(v$9, {
			className: "k-file-icon",
			...g$6(s.extension),
			size: "xxlarge"
		}), /* @__PURE__ */ import_react.createElement("span", { className: "k-file-state" })), o || i ? this.renderValidationError(s, i) : this.renderFileDetails(s), /* @__PURE__ */ import_react.createElement(b$4, {
			uid: s.uid,
			status: s.status,
			progress: s.progress,
			...t
		}));
	}
};
v$8(F$3);
//#endregion
//#region node_modules/@progress/kendo-react-upload/UploadListMultiItem.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var z = class extends import_react.Component {
	constructor() {
		super(...arguments), this.mapFiles = () => {
			const { files: e } = this.props;
			return e.map((s) => /* @__PURE__ */ import_react.createElement("span", {
				key: s.name,
				className: "k-file-info"
			}, /* @__PURE__ */ import_react.createElement("span", {
				className: "k-file-name",
				title: s.name
			}, s.name), v$3.fileHasValidationErrors(s) ? /* @__PURE__ */ import_react.createElement("span", {
				className: "k-file-validation-message",
				"aria-live": "polite"
			}, this.getFileValidationMessage(s)) : /* @__PURE__ */ import_react.createElement("span", {
				key: `${s.name}-size`,
				className: "k-file-size"
			}, v$3.getTotalFilesSizeMessage([s]))));
		}, this.progress = () => {
			const { files: e } = this.props;
			let s = 0;
			return e.forEach((t) => {
				s += t.progress || 0;
			}), s / e.length;
		};
	}
	/**
	* @hidden
	*/
	getFileValidationMessage(e) {
		const s = s$13(this);
		let t = "";
		if (e.validationErrors && e.validationErrors.length > 0) {
			const i = `upload.${e.validationErrors[0]}`;
			t = s.toLanguageString(i, y$3[i]);
		}
		return t;
	}
	render() {
		const { files: e, ...s } = this.props, [, t, i, d] = v$3.getFileStatus(e), l = s$13(this), f = l.toLanguageString(S$1, y$3[S$1]), E = l.toLanguageString(v$4, y$3[v$4]), h = l.toLanguageString(h$4, y$3[h$4]), k = l.toLanguageString(U$2, y$3[U$2]), n = this.progress();
		return /* @__PURE__ */ import_react.createElement("div", { className: n$12("k-file-multiple") }, !d && !t && !i && /* @__PURE__ */ import_react.createElement(R$2, { value: n || 0 }), /* @__PURE__ */ import_react.createElement("span", { className: "k-file-icon-wrapper" }, /* @__PURE__ */ import_react.createElement(v$9, {
			className: "k-file-icon",
			name: "copy",
			icon: copyIcon,
			size: "xxlarge"
		})), /* @__PURE__ */ import_react.createElement("span", { className: "k-multiple-files-wrapper" }, this.mapFiles(), i ? /* @__PURE__ */ import_react.createElement("span", {
			className: "k-file-validation-message",
			"aria-live": "polite"
		}, `${e.length} ${h}`) : n !== 100 ? /* @__PURE__ */ import_react.createElement("span", { className: "k-file-summary" }, `${f}: ${e.length} ${E}, ${v$3.getTotalFilesSizeMessage(e)}`) : /* @__PURE__ */ import_react.createElement("span", { className: "k-file-summary k-text-success" }, `${e.length} ${k}`)), /* @__PURE__ */ import_react.createElement(b$4, {
			uid: e[0].uid,
			status: e[0].status,
			progress: n,
			...s
		}));
	}
};
v$8(z);
//#endregion
//#region node_modules/@progress/kendo-react-upload/UploadListGroup.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var N$2 = class extends import_react.Component {
	constructor() {
		super(...arguments), this._element = null, this.onClick = () => {
			this.props.onClick.call(void 0, this.props.index);
		};
	}
	componentDidUpdate() {
		const { navigationIndex: e, index: s } = this.props, o = o$20(document);
		e === s && this._element && o !== this._element && this._element.focus();
	}
	render() {
		const { files: e, async: s, disabled: o, navigationIndex: n, index: a, listItemUI: r, onCancel: m, onRemove: c, onRetry: p } = this.props, t = e[0], d = t.status === n$2.Uploaded || t.status === n$2.Initial, u = n$12("k-file", v$3.filesHaveValidationErrors(e) ? "k-file-error k-file-invalid" : "", t.status === n$2.UploadFailed || t.status === n$2.RemoveFailed ? "k-file-error" : "", t.status === n$2.Uploading ? "k-file-progress" : "", d ? "k-file-success" : "", n === a ? "k-focus" : ""), f = {
			async: s,
			disabled: o,
			onCancel: m,
			onRemove: c,
			onRetry: p
		}, h = r || (e.length === 1 ? F$3 : z);
		return /* @__PURE__ */ import_react.createElement("li", {
			ref: (k) => {
				this._element = k;
			},
			className: u,
			"data-uid": t.uid,
			onClick: this.onClick,
			role: "listitem"
		}, /* @__PURE__ */ import_react.createElement(h, {
			files: e,
			...f
		}));
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-upload/UploadList.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var u$3 = class extends import_react.Component {
	mapListGroups() {
		const { groupedFiles: s, navigationIndex: r, ...o } = this.props;
		return Object.keys(s).map((t, a) => {
			const p = s[t];
			return /* @__PURE__ */ import_react.createElement(N$2, {
				key: t,
				files: p,
				index: a,
				navigationIndex: r,
				...o
			});
		});
	}
	render() {
		const s = n$12("k-upload-files");
		return /* @__PURE__ */ import_react.createElement("ul", {
			className: s,
			role: "list",
			id: this.props.listId
		}, this.mapListGroups());
	}
};
//#endregion
//#region node_modules/@progress/kendo-react-upload/UploadInput.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var y$2 = /(chrome)[ \/]([\w.]+)/i, A$1 = /(webkit)[ \/]([\w.]+)/i;
var E$2 = class extends import_react.Component {
	constructor() {
		super(...arguments), this._input = null, this.onMouseDown = (t) => {
			this.props.onMouseDown && this.props.onMouseDown(t);
		}, this.onAdd = () => {
			const t = navigator.userAgent, e = this._input;
			e && (this.props.onAdd && e.files && this.props.onAdd.call(void 0, e.files), !t.match(y$2) && t.match(A$1) || (e.type = "", e.type = "file"));
		};
	}
	get actionElement() {
		return this._input;
	}
	render() {
		const { multiple: t, async: e, disabled: l, accept: c, hasFiles: d, ariaLabelledBy: i, ariaDescribedBy: p, id: u } = this.props, s = s$13(this), o = d ? r$9 : F$5, h = s.toLanguageString(o, y$3[o]), m = s.toLanguageString(u$4, y$3[u$4]);
		return /* @__PURE__ */ import_react.createElement("input", {
			id: u,
			ref: (g) => {
				this._input = g;
			},
			className: "k-hidden",
			autoComplete: "off",
			name: e.saveField,
			accept: c,
			type: "file",
			multiple: t,
			disabled: l,
			onChange: this.onAdd,
			onMouseDown: this.onMouseDown,
			title: h,
			tabIndex: -1,
			"data-testid": "upload-input-testid",
			"aria-label": i !== void 0 ? void 0 : m,
			"aria-labelledby": i,
			"aria-describedby": p,
			"aria-hidden": !0
		});
	}
};
v$8(E$2);
//#endregion
//#region node_modules/@progress/kendo-react-upload/UploadAddButton.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var E$1 = (i) => /* @__PURE__ */ import_react.createElement("span", { "aria-hidden": !0 }, i.message);
var b$3 = class extends import_react.Component {
	constructor() {
		super(...arguments), this._element = null, this._uploadInput = null, this.focus = () => {
			this._element && this._element.focus();
		}, this.onClick = () => {
			this.actionElement && this.actionElement.click(), this.props.onClick.call(void 0, this.props.addButtonIndex);
		}, this.onInputMouseDown = (e) => {
			this._element && (e.preventDefault(), this._element.focus());
		};
	}
	get actionElement() {
		if (this._uploadInput) return this._uploadInput.actionElement;
	}
	componentDidUpdate(e) {
		const { navigationIndex: o, addButtonIndex: s, notFocusedIndex: t } = this.props;
		o !== e.navigationIndex && e.navigationIndex !== t && o === s && this._element && this._element.focus();
	}
	render() {
		const { navigationIndex: e, addButtonIndex: o, tabIndex: s, id: t, ariaControls: c, disabled: d, ariaExpanded: u, selectMessageUI: a, ...p } = this.props, l = s$13(this).toLanguageString(u$4, y$3[u$4]), m = a || E$1;
		return /* @__PURE__ */ import_react.createElement("div", { className: "k-upload-button-wrap" }, /* @__PURE__ */ import_react.createElement(A$5, {
			type: "button",
			id: t ? `${t}-select-button` : "select-button",
			className: n$12("k-upload-button", e === o ? "k-focus" : ""),
			tabIndex: s,
			onClick: this.onClick,
			"aria-label": l,
			"aria-controls": c,
			"aria-disabled": d,
			"aria-expanded": u
		}, /* @__PURE__ */ import_react.createElement(m, { message: l })), /* @__PURE__ */ import_react.createElement(E$2, {
			id: t ? `${t}-files` : "files",
			...p,
			onMouseDown: this.onInputMouseDown,
			ref: (h) => {
				this._uploadInput = h;
			}
		}));
	}
};
v$8(b$3);
//#endregion
//#region node_modules/@progress/kendo-react-upload/UploadActionButtons.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var C$4 = class extends import_react.Component {
	constructor() {
		super(...arguments), this._uploadElement = null, this._clearElement = null, this.onClearClick = () => {
			this.props.disabled || this.props.onClear && this.props.onClear.call(void 0);
		}, this.checkEnterKey = (e) => e.keyCode === e$16.enter, this.onUploadClick = () => {
			this.props.disabled || (this.props.onClick.call(void 0, this.props.uploadButtonIndex), this.props.onUpload && this.props.onUpload.call(void 0));
		};
	}
	componentDidUpdate(e) {
		const { navigationIndex: o, clearButtonIndex: i, uploadButtonIndex: a } = this.props;
		o !== e.navigationIndex && (o === i && this._clearElement && this._clearElement.focus(), o === a && this._uploadElement && this._uploadElement.focus());
	}
	render() {
		const { disabled: e, navigationIndex: o, clearButtonIndex: i, uploadButtonIndex: a, actionsLayout: n } = this.props, r = s$13(this), u = n$12("k-actions", "k-hstack", {
			"k-justify-content-start": n === "start",
			"k-justify-content-center": n === "center",
			"k-justify-content-end": n === "end",
			"k-justify-content-stretch": n === "stretched"
		}), k = n$12("k-button k-button-md k-rounded-md k-button-solid k-button-base", "k-clear-selected", e ? "k-disabled" : "", o === i ? "k-focus" : ""), h = n$12("k-button k-button-md k-rounded-md k-button-solid k-button-primary", "k-primary", "k-upload-selected", e ? "k-disabled" : "", o === a ? "k-focus" : "");
		return /* @__PURE__ */ import_react.createElement("div", { className: u }, /* @__PURE__ */ import_react.createElement("button", {
			ref: (t) => {
				this._clearElement = t;
			},
			type: "button",
			className: k,
			tabIndex: 0,
			onClick: this.onClearClick,
			onKeyDown: (t) => this.checkEnterKey(t) && this.onClearClick()
		}, r.toLanguageString(l$4, y$3[l$4])), /* @__PURE__ */ import_react.createElement("button", {
			ref: (t) => {
				this._uploadElement = t;
			},
			type: "button",
			className: h,
			tabIndex: 0,
			onClick: this.onUploadClick,
			onKeyDown: (t) => this.checkEnterKey(t) && this.onUploadClick()
		}, r.toLanguageString(f$5, y$3[f$5])));
	}
};
v$8(C$4);
//#endregion
//#region node_modules/@progress/kendo-react-upload/UploadStatus.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var v$2 = class extends import_react.Component {
	render() {
		const { isUploading: e, isUploaded: a$13, isUploadFailed: o } = this.props, l = n$12("k-upload-status"), m = !e && !o && a$13 ? "check" : !e && o ? "exclamation-circle" : e ? "upload" : "", p = !e && !o && a$13 ? { icon: checkIcon } : !e && o ? { icon: exclamationCircleIcon } : e ? { icon: uploadIcon } : {};
		let t = "";
		const s = s$13(this);
		return e ? t = s.toLanguageString(a, y$3[a]) : (a$13 || o) && (t = s.toLanguageString("upload.headerStatusUploaded", y$3["upload.headerStatusUploaded"])), /* @__PURE__ */ import_react.createElement("div", { className: l }, /* @__PURE__ */ import_react.createElement(v$9, {
			name: m,
			...p
		}), t);
	}
};
v$8(v$2);
//#endregion
//#region node_modules/@progress/kendo-react-upload/UploadDropZone.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var r$8 = 100;
var A = class extends import_react.Component {
	constructor() {
		super(...arguments), this._lastDocumentDragOver = null, this._lastElementDragOver = null, this._documentActive = !1, this._elementActive = !1, this.onDocumentDragEnter = () => {
			if (!this.documentActive) {
				this.documentActive = !0;
				const e = () => {
					this.isDragOver(this._lastDocumentDragOver) && (this.documentActive = !1, clearInterval(this._documentInterval), this._documentInterval = null, this._lastDocumentDragOver = null);
				};
				this._documentInterval = setInterval(e, r$8);
			}
		}, this.onDocumentDragOver = () => {
			this._lastDocumentDragOver = /* @__PURE__ */ new Date();
		}, this.onElementDragEnter = () => {
			if (!this.elementActive) {
				this.elementActive = !0;
				const e = () => {
					this.isDragOver(this._lastElementDragOver) && (this.elementActive = !1, clearInterval(this._elementInterval), this._elementInterval = null, this._lastElementDragOver = null);
				};
				this._elementInterval = setInterval(e, r$8);
			}
		}, this.onElementDragOver = (e) => {
			e.preventDefault(), this._lastElementDragOver = /* @__PURE__ */ new Date();
		}, this.onDrop = (e) => {
			e.preventDefault();
			const t = e.dataTransfer.files;
			t.length > 0 && !this.props.disabled && this.props.onAdd && (this.props.multiple || t.length <= 1) && this.props.onAdd.call(void 0, t);
		}, this.isDragOver = (e) => (/* @__PURE__ */ new Date()).getTime() - (e || /* @__PURE__ */ new Date()).getTime() > r$8;
	}
	get documentActive() {
		return this._documentActive;
	}
	set documentActive(e) {
		const t = this.documentActive;
		this._documentActive = e, e !== t && this.forceUpdate();
	}
	get elementActive() {
		return this._elementActive;
	}
	set elementActive(e) {
		const t = this._elementActive;
		this._elementActive = e, e !== t && this.setState({});
	}
	componentDidMount() {
		document.addEventListener("dragenter", this.onDocumentDragEnter), document.addEventListener("dragover", this.onDocumentDragOver);
	}
	componentWillUnmount() {
		document.removeEventListener("dragenter", this.onDocumentDragEnter), document.removeEventListener("dragover", this.onDocumentDragOver);
	}
	render() {
		const { addButtonComponent: e, fileGroup: t } = this.props, c = s$13(this).toLanguageString(o$4, y$3[o$4]), m = n$12("k-dropzone k-upload-dropzone", this.documentActive ? "k-dropzone-active" : "", this.elementActive ? "k-dropzone-hovered" : ""), [o, i, s, v] = v$3.getFileStatus(t), d = n$12("k-dropzone-hint", {});
		return /* @__PURE__ */ import_react.createElement("div", {
			className: m,
			onDrop: this.onDrop,
			onDragEnter: this.onElementDragEnter,
			onDragOver: this.onElementDragOver
		}, e, o || i || s || v ? /* @__PURE__ */ import_react.createElement(v$2, {
			isUploading: o,
			isUploaded: i,
			isUploadFailed: s
		}) : /* @__PURE__ */ import_react.createElement("div", { className: d }, c));
	}
};
v$8(A);
//#endregion
//#region node_modules/@progress/kendo-react-upload/UploadUI.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var _ = -1, f$3 = class f extends import_react.Component {
	constructor() {
		super(...arguments), this._container = null, this._uploadAddButton = null, this.focus = () => {
			if (this._uploadAddButton) return this._uploadAddButton.focus();
		}, this.onAdd = (t) => {
			this.props.onAdd && this.props.onAdd.call(void 0, t);
		}, this.onRetry = (t) => {
			this.props.onRetry && this.props.onRetry.call(void 0, t);
		}, this.onCancel = (t) => {
			this.props.onCancel && this.props.onCancel.call(void 0, t);
		}, this.onClear = () => {
			this.props.onClear && this.props.onClear.call(void 0);
		}, this.onUpload = () => {
			this.props.onUpload && this.props.onUpload.call(void 0);
		}, this.onRemove = (t) => {
			this.props.onRemove && this.props.onRemove.call(void 0, t);
		}, this.onKeyDown = (t) => {
			this.props.onKeyDown && this.props.onKeyDown.call(void 0, t, this.isRtl);
		}, this.onFocus = (t) => {
			this.props.onFocus && this.props.onFocus.call(void 0, t);
		}, this.onBlur = (t) => {
			this.props.onBlur && this.props.onBlur.call(void 0, t);
		}, this.onClick = (t) => {
			this.props.onClick && this.props.onClick.call(void 0, t);
		};
	}
	get async() {
		const { autoUpload: t, batch: o, withCredentials: r, saveField: d, saveHeaders: i, saveMethod: e, saveUrl: n, responseType: a, removeField: p, removeHeaders: c, removeMethod: h, removeUrl: l } = this.props;
		return {
			autoUpload: t,
			batch: o,
			withCredentials: r,
			saveField: d,
			saveHeaders: i,
			saveMethod: e,
			saveUrl: n,
			responseType: a,
			removeField: p,
			removeHeaders: c,
			removeMethod: h,
			removeUrl: l
		};
	}
	get groupsCount() {
		return Object.keys(this.props.groupedFiles).length;
	}
	get lastGroupIndex() {
		return this.groupsCount - 1;
	}
	get addButtonIndex() {
		return _;
	}
	get clearButtonIndex() {
		return this.lastGroupIndex + 1;
	}
	get uploadButtonIndex() {
		return this.lastGroupIndex + 2;
	}
	get isRtl() {
		return this._container && getComputedStyle(this._container).direction === "rtl" || !1;
	}
	/**
	* @hidden
	*/
	get actionElement() {
		if (this._uploadAddButton) return this._uploadAddButton.actionElement;
	}
	/**
	* @hidden
	*/
	render() {
		const { multiple: t, disabled: o, tabIndex: r, accept: d, showFileList: i, groupedFiles: e, navigationIndex: n, showActionButtons: a, actionsLayout: p, notFocusedIndex: c, listItemUI: h, id: l, ariaLabelledBy: B, ariaDescribedBy: y, selectMessageUI: C } = this.props, I = n$12("k-upload", { "k-upload-empty": Object.keys(e).length === 0 }, this.props.className, o ? "k-disabled" : ""), v = `${l}-list`, g = /* @__PURE__ */ import_react.createElement(b$3, {
			id: l,
			ariaLabelledBy: B,
			ariaDescribedBy: y,
			ref: (u) => {
				this._uploadAddButton = u;
			},
			accept: d,
			async: this.async,
			addButtonIndex: this.addButtonIndex,
			navigationIndex: n,
			notFocusedIndex: c,
			tabIndex: r,
			multiple: t,
			disabled: o,
			hasFiles: e ? Object.keys(e).length > 0 : !1,
			selectMessageUI: C,
			onAdd: this.onAdd,
			onClick: this.onClick,
			ariaControls: v,
			ariaExpanded: i
		});
		return /* @__PURE__ */ import_react.createElement("div", {
			ref: (u) => {
				this._container = u;
			},
			className: I,
			onKeyDown: this.onKeyDown,
			onFocus: this.onFocus,
			onBlur: this.onBlur
		}, /* @__PURE__ */ import_react.createElement(A, {
			addButtonComponent: g,
			fileGroup: e,
			disabled: o,
			multiple: t,
			onAdd: this.onAdd
		}), i ? /* @__PURE__ */ import_react.createElement(u$3, {
			groupedFiles: e,
			disabled: o,
			async: this.async,
			navigationIndex: n,
			listItemUI: h,
			onCancel: this.onCancel,
			onRemove: this.onRemove,
			onRetry: this.onRetry,
			onClick: this.onClick,
			listId: v
		}) : void 0, a ? /* @__PURE__ */ import_react.createElement(C$4, {
			disabled: o,
			navigationIndex: n,
			clearButtonIndex: this.clearButtonIndex,
			uploadButtonIndex: this.uploadButtonIndex,
			actionsLayout: p,
			onUpload: this.onUpload,
			onClear: this.onClear,
			onClick: this.onClick
		}) : void 0);
	}
};
f$3.defaultProps = {
	disabled: !1,
	groupedFiles: {},
	multiple: !0,
	actionsLayout: "end"
};
var b$2 = a$11(f$3);
b$2.displayName = "KendoReactUploadUI";
//#endregion
//#region node_modules/@progress/kendo-react-upload/UploadNavigation.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var r$7 = -2, i$4 = -1;
var C$3 = class extends import_react.Component {
	constructor(l) {
		super(l), this._uploadUI = null, this.focus = () => {
			this._uploadUI && this._uploadUI.focus();
		}, this.onKeyDown = (o, d) => {
			const e = this.navIndex, c = Object.keys(this.props.groupedFiles), h = c.length - 1, u = this.props.autoUpload || c.length === 0 ? h : h + 1, p = h + 1, f = p + 1, a = e === r$7 ? i$4 : e;
			let n = e;
			switch (o.keyCode) {
				case e$16.up:
					e > -1 && (n = a - 1);
					break;
				case e$16.down:
					e < u && (n = a + 1);
					break;
				case e$16.left:
					d ? e === p && (n = a + 1) : e === f && (n = a - 1);
					break;
				case e$16.right:
					d ? e === f && (n = a - 1) : e === p && (n = a + 1);
					break;
				case e$16.enter:
					if (e === i$4 || e === r$7) {
						const t = o$20(document);
						this.actionElement && e$19 && (t == null ? void 0 : t.className.indexOf("k-upload-button")) === -1 && (t == null ? void 0 : t.className.indexOf("k-upload-selected")) === -1 && (t == null ? void 0 : t.className.indexOf("k-clear-selected")) === -1 && this.actionElement.click();
					}
					e >= 0 && e <= h && this.onRetry(c[e]);
					break;
				case e$16.space:
					(e === i$4 || e === r$7) && this.actionElement && this.actionElement.click(), o.preventDefault();
					break;
				case e$16.tab:
					n = r$7;
					break;
				case e$16.delete:
					e >= 0 && e <= h && (n = a - 1, this.onRemove(c[e]));
					break;
				case e$16.esc:
					e >= 0 && e <= h && (n = a - 1, this.onCancel(c[e]));
					break;
			}
			this.navIndex = n;
		}, this.onCancel = (o) => {
			this.props.onCancel && this.props.onCancel.call(void 0, o);
		}, this.onClear = () => {
			this.navIndex = i$4, this.props.onClear && this.props.onClear.call(void 0);
		}, this.onUpload = () => {
			this.navIndex = i$4, this.props.onUpload && this.props.onUpload.call(void 0);
		}, this.onRetry = (o) => {
			this.props.onRetry && this.props.onRetry.call(void 0, o);
		}, this.onRemove = (o) => {
			this.navIndex = this.navIndex > i$4 ? this.navIndex - 1 : i$4, this.props.onRemove && this.props.onRemove.call(void 0, o);
		}, this.onAdd = (o) => {
			this.navIndex = i$4, this.props.onAdd && this.props.onAdd.call(void 0, o);
		}, this.onClick = (o) => {
			this.navIndex = o;
		}, this.onFocus = () => {
			this._blurTimeout && (clearTimeout(this._blurTimeout), this._blurTimeout = void 0);
		}, this.onBlurTimeout = () => {
			this.navIndex = r$7, this._blurTimeout = void 0;
		}, this.onBlur = () => {
			clearTimeout(this._blurTimeout), this._blurTimeout = window.setTimeout(this.onBlurTimeout);
		}, this._navIndex = r$7;
	}
	get navIndex() {
		return this._navIndex;
	}
	set navIndex(l) {
		const o = this.navIndex;
		this._navIndex = l, l !== o && this.forceUpdate();
	}
	get actionElement() {
		if (this._uploadUI) return this._uploadUI.actionElement;
	}
	componentDidUpdate(l) {
		const o = Object.keys(l.groupedFiles).length, d = Object.keys(this.props.groupedFiles).length;
		o > d && this.navIndex > i$4 && (this.navIndex = this.navIndex - (o - d));
	}
	render() {
		const { onClear: l, onRemove: o, onRetry: d, onCancel: e, onUpload: c, onAdd: h, ...u } = this.props;
		return /* @__PURE__ */ import_react.createElement(b$2, {
			ref: (p) => {
				this._uploadUI = p;
			},
			className: this.props.className,
			onKeyDown: this.onKeyDown,
			navigationIndex: this.navIndex,
			notFocusedIndex: r$7,
			onAdd: this.onAdd,
			onClear: this.onClear,
			onUpload: this.onUpload,
			onRemove: this.onRemove,
			onRetry: this.onRetry,
			onCancel: this.onCancel,
			onClick: this.onClick,
			onFocus: this.onFocus,
			onBlur: this.onBlur,
			...u
		});
	}
};
//#endregion
//#region node_modules/axios/lib/helpers/bind.js
/**
* Create a bound version of a function with a specified `this` context
*
* @param {Function} fn - The function to bind
* @param {*} thisArg - The value to be passed as the `this` parameter
* @returns {Function} A new function that will call the original function with the specified `this` context
*/
function bind(fn, thisArg) {
	return function wrap() {
		return fn.apply(thisArg, arguments);
	};
}
//#endregion
//#region node_modules/axios/lib/utils.js
var { toString } = Object.prototype;
var { getPrototypeOf } = Object;
var { iterator, toStringTag } = Symbol;
var kindOf = ((cache) => (thing) => {
	const str = toString.call(thing);
	return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));
var kindOfTest = (type) => {
	type = type.toLowerCase();
	return (thing) => kindOf(thing) === type;
};
var typeOfTest = (type) => (thing) => typeof thing === type;
/**
* Determine if a value is a non-null object
*
* @param {Object} val The value to test
*
* @returns {boolean} True if value is an Array, otherwise false
*/
var { isArray } = Array;
/**
* Determine if a value is undefined
*
* @param {*} val The value to test
*
* @returns {boolean} True if the value is undefined, otherwise false
*/
var isUndefined = typeOfTest("undefined");
/**
* Determine if a value is a Buffer
*
* @param {*} val The value to test
*
* @returns {boolean} True if value is a Buffer, otherwise false
*/
function isBuffer(val) {
	return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
* Determine if a value is an ArrayBuffer
*
* @param {*} val The value to test
*
* @returns {boolean} True if value is an ArrayBuffer, otherwise false
*/
var isArrayBuffer = kindOfTest("ArrayBuffer");
/**
* Determine if a value is a view on an ArrayBuffer
*
* @param {*} val The value to test
*
* @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
*/
function isArrayBufferView(val) {
	let result;
	if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
	else result = val && val.buffer && isArrayBuffer(val.buffer);
	return result;
}
/**
* Determine if a value is a String
*
* @param {*} val The value to test
*
* @returns {boolean} True if value is a String, otherwise false
*/
var isString = typeOfTest("string");
/**
* Determine if a value is a Function
*
* @param {*} val The value to test
* @returns {boolean} True if value is a Function, otherwise false
*/
var isFunction$1 = typeOfTest("function");
/**
* Determine if a value is a Number
*
* @param {*} val The value to test
*
* @returns {boolean} True if value is a Number, otherwise false
*/
var isNumber = typeOfTest("number");
/**
* Determine if a value is an Object
*
* @param {*} thing The value to test
*
* @returns {boolean} True if value is an Object, otherwise false
*/
var isObject = (thing) => thing !== null && typeof thing === "object";
/**
* Determine if a value is a Boolean
*
* @param {*} thing The value to test
* @returns {boolean} True if value is a Boolean, otherwise false
*/
var isBoolean = (thing) => thing === true || thing === false;
/**
* Determine if a value is a plain Object
*
* @param {*} val The value to test
*
* @returns {boolean} True if value is a plain Object, otherwise false
*/
var isPlainObject = (val) => {
	if (kindOf(val) !== "object") return false;
	const prototype = getPrototypeOf(val);
	return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(toStringTag in val) && !(iterator in val);
};
/**
* Determine if a value is an empty object (safely handles Buffers)
*
* @param {*} val The value to test
*
* @returns {boolean} True if value is an empty object, otherwise false
*/
var isEmptyObject = (val) => {
	if (!isObject(val) || isBuffer(val)) return false;
	try {
		return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
	} catch (e) {
		return false;
	}
};
/**
* Determine if a value is a Date
*
* @param {*} val The value to test
*
* @returns {boolean} True if value is a Date, otherwise false
*/
var isDate = kindOfTest("Date");
/**
* Determine if a value is a File
*
* @param {*} val The value to test
*
* @returns {boolean} True if value is a File, otherwise false
*/
var isFile = kindOfTest("File");
/**
* Determine if a value is a React Native Blob
* React Native "blob": an object with a `uri` attribute. Optionally, it can
* also have a `name` and `type` attribute to specify filename and content type
*
* @see https://github.com/facebook/react-native/blob/26684cf3adf4094eb6c405d345a75bf8c7c0bf88/Libraries/Network/FormData.js#L68-L71
*
* @param {*} value The value to test
*
* @returns {boolean} True if value is a React Native Blob, otherwise false
*/
var isReactNativeBlob = (value) => {
	return !!(value && typeof value.uri !== "undefined");
};
/**
* Determine if environment is React Native
* ReactNative `FormData` has a non-standard `getParts()` method
*
* @param {*} formData The formData to test
*
* @returns {boolean} True if environment is React Native, otherwise false
*/
var isReactNative = (formData) => formData && typeof formData.getParts !== "undefined";
/**
* Determine if a value is a Blob
*
* @param {*} val The value to test
*
* @returns {boolean} True if value is a Blob, otherwise false
*/
var isBlob = kindOfTest("Blob");
/**
* Determine if a value is a FileList
*
* @param {*} val The value to test
*
* @returns {boolean} True if value is a FileList, otherwise false
*/
var isFileList = kindOfTest("FileList");
/**
* Determine if a value is a Stream
*
* @param {*} val The value to test
*
* @returns {boolean} True if value is a Stream, otherwise false
*/
var isStream = (val) => isObject(val) && isFunction$1(val.pipe);
/**
* Determine if a value is a FormData
*
* @param {*} thing The value to test
*
* @returns {boolean} True if value is an FormData, otherwise false
*/
function getGlobal() {
	if (typeof globalThis !== "undefined") return globalThis;
	if (typeof self !== "undefined") return self;
	if (typeof window !== "undefined") return window;
	if (typeof global !== "undefined") return global;
	return {};
}
var G$1 = getGlobal();
var FormDataCtor = typeof G$1.FormData !== "undefined" ? G$1.FormData : void 0;
var isFormData = (thing) => {
	if (!thing) return false;
	if (FormDataCtor && thing instanceof FormDataCtor) return true;
	const proto = getPrototypeOf(thing);
	if (!proto || proto === Object.prototype) return false;
	if (!isFunction$1(thing.append)) return false;
	const kind = kindOf(thing);
	return kind === "formdata" || kind === "object" && isFunction$1(thing.toString) && thing.toString() === "[object FormData]";
};
/**
* Determine if a value is a URLSearchParams object
*
* @param {*} val The value to test
*
* @returns {boolean} True if value is a URLSearchParams object, otherwise false
*/
var isURLSearchParams = kindOfTest("URLSearchParams");
var [isReadableStream, isRequest, isResponse, isHeaders] = [
	"ReadableStream",
	"Request",
	"Response",
	"Headers"
].map(kindOfTest);
/**
* Trim excess whitespace off the beginning and end of a string
*
* @param {String} str The String to trim
*
* @returns {String} The String freed of excess whitespace
*/
var trim = (str) => {
	return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};
/**
* Iterate over an Array or an Object invoking a function for each item.
*
* If `obj` is an Array callback will be called passing
* the value, index, and complete array for each item.
*
* If 'obj' is an Object callback will be called passing
* the value, key, and complete object for each property.
*
* @param {Object|Array<unknown>} obj The object to iterate
* @param {Function} fn The callback to invoke for each item
*
* @param {Object} [options]
* @param {Boolean} [options.allOwnKeys = false]
* @returns {any}
*/
function forEach(obj, fn, { allOwnKeys = false } = {}) {
	if (obj === null || typeof obj === "undefined") return;
	let i;
	let l;
	if (typeof obj !== "object") obj = [obj];
	if (isArray(obj)) for (i = 0, l = obj.length; i < l; i++) fn.call(null, obj[i], i, obj);
	else {
		if (isBuffer(obj)) return;
		const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
		const len = keys.length;
		let key;
		for (i = 0; i < len; i++) {
			key = keys[i];
			fn.call(null, obj[key], key, obj);
		}
	}
}
/**
* Finds a key in an object, case-insensitive, returning the actual key name.
* Returns null if the object is a Buffer or if no match is found.
*
* @param {Object} obj - The object to search.
* @param {string} key - The key to find (case-insensitive).
* @returns {?string} The actual key name if found, otherwise null.
*/
function findKey(obj, key) {
	if (isBuffer(obj)) return null;
	key = key.toLowerCase();
	const keys = Object.keys(obj);
	let i = keys.length;
	let _key;
	while (i-- > 0) {
		_key = keys[i];
		if (key === _key.toLowerCase()) return _key;
	}
	return null;
}
var _global = (() => {
	if (typeof globalThis !== "undefined") return globalThis;
	return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
var isContextDefined = (context) => !isUndefined(context) && context !== _global;
/**
* Accepts varargs expecting each argument to be an object, then
* immutably merges the properties of each object and returns result.
*
* When multiple objects contain the same key the later object in
* the arguments list will take precedence.
*
* Example:
*
* ```js
* const result = merge({foo: 123}, {foo: 456});
* console.log(result.foo); // outputs 456
* ```
*
* @param {Object} obj1 Object to merge
*
* @returns {Object} Result of all merge properties
*/
function merge(...objs) {
	const { caseless, skipUndefined } = isContextDefined(this) && this || {};
	const result = {};
	const assignValue = (val, key) => {
		if (key === "__proto__" || key === "constructor" || key === "prototype") return;
		const targetKey = caseless && findKey(result, key) || key;
		const existing = hasOwnProperty(result, targetKey) ? result[targetKey] : void 0;
		if (isPlainObject(existing) && isPlainObject(val)) result[targetKey] = merge(existing, val);
		else if (isPlainObject(val)) result[targetKey] = merge({}, val);
		else if (isArray(val)) result[targetKey] = val.slice();
		else if (!skipUndefined || !isUndefined(val)) result[targetKey] = val;
	};
	for (let i = 0, l = objs.length; i < l; i++) objs[i] && forEach(objs[i], assignValue);
	return result;
}
/**
* Extends object a by mutably adding to it the properties of object b.
*
* @param {Object} a The object to be extended
* @param {Object} b The object to copy properties from
* @param {Object} thisArg The object to bind function to
*
* @param {Object} [options]
* @param {Boolean} [options.allOwnKeys]
* @returns {Object} The resulting value of object a
*/
var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
	forEach(b, (val, key) => {
		if (thisArg && isFunction$1(val)) Object.defineProperty(a, key, {
			__proto__: null,
			value: bind(val, thisArg),
			writable: true,
			enumerable: true,
			configurable: true
		});
		else Object.defineProperty(a, key, {
			__proto__: null,
			value: val,
			writable: true,
			enumerable: true,
			configurable: true
		});
	}, { allOwnKeys });
	return a;
};
/**
* Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
*
* @param {string} content with BOM
*
* @returns {string} content value without BOM
*/
var stripBOM = (content) => {
	if (content.charCodeAt(0) === 65279) content = content.slice(1);
	return content;
};
/**
* Inherit the prototype methods from one constructor into another
* @param {function} constructor
* @param {function} superConstructor
* @param {object} [props]
* @param {object} [descriptors]
*
* @returns {void}
*/
var inherits = (constructor, superConstructor, props, descriptors) => {
	constructor.prototype = Object.create(superConstructor.prototype, descriptors);
	Object.defineProperty(constructor.prototype, "constructor", {
		__proto__: null,
		value: constructor,
		writable: true,
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(constructor, "super", {
		__proto__: null,
		value: superConstructor.prototype
	});
	props && Object.assign(constructor.prototype, props);
};
/**
* Resolve object with deep prototype chain to a flat object
* @param {Object} sourceObj source object
* @param {Object} [destObj]
* @param {Function|Boolean} [filter]
* @param {Function} [propFilter]
*
* @returns {Object}
*/
var toFlatObject = (sourceObj, destObj, filter, propFilter) => {
	let props;
	let i;
	let prop;
	const merged = {};
	destObj = destObj || {};
	if (sourceObj == null) return destObj;
	do {
		props = Object.getOwnPropertyNames(sourceObj);
		i = props.length;
		while (i-- > 0) {
			prop = props[i];
			if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
				destObj[prop] = sourceObj[prop];
				merged[prop] = true;
			}
		}
		sourceObj = filter !== false && getPrototypeOf(sourceObj);
	} while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
	return destObj;
};
/**
* Determines whether a string ends with the characters of a specified string
*
* @param {String} str
* @param {String} searchString
* @param {Number} [position= 0]
*
* @returns {boolean}
*/
var endsWith = (str, searchString, position) => {
	str = String(str);
	if (position === void 0 || position > str.length) position = str.length;
	position -= searchString.length;
	const lastIndex = str.indexOf(searchString, position);
	return lastIndex !== -1 && lastIndex === position;
};
/**
* Returns new array from array like object or null if failed
*
* @param {*} [thing]
*
* @returns {?Array}
*/
var toArray = (thing) => {
	if (!thing) return null;
	if (isArray(thing)) return thing;
	let i = thing.length;
	if (!isNumber(i)) return null;
	const arr = new Array(i);
	while (i-- > 0) arr[i] = thing[i];
	return arr;
};
/**
* Checking if the Uint8Array exists and if it does, it returns a function that checks if the
* thing passed in is an instance of Uint8Array
*
* @param {TypedArray}
*
* @returns {Array}
*/
var isTypedArray = ((TypedArray) => {
	return (thing) => {
		return TypedArray && thing instanceof TypedArray;
	};
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
/**
* For each entry in the object, call the function with the key and value.
*
* @param {Object<any, any>} obj - The object to iterate over.
* @param {Function} fn - The function to call for each entry.
*
* @returns {void}
*/
var forEachEntry = (obj, fn) => {
	const _iterator = (obj && obj[iterator]).call(obj);
	let result;
	while ((result = _iterator.next()) && !result.done) {
		const pair = result.value;
		fn.call(obj, pair[0], pair[1]);
	}
};
/**
* It takes a regular expression and a string, and returns an array of all the matches
*
* @param {string} regExp - The regular expression to match against.
* @param {string} str - The string to search.
*
* @returns {Array<boolean>}
*/
var matchAll = (regExp, str) => {
	let matches;
	const arr = [];
	while ((matches = regExp.exec(str)) !== null) arr.push(matches);
	return arr;
};
var isHTMLForm = kindOfTest("HTMLFormElement");
var toCamelCase = (str) => {
	return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
		return p1.toUpperCase() + p2;
	});
};
var hasOwnProperty = (({ hasOwnProperty }) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);
/**
* Determine if a value is a RegExp object
*
* @param {*} val The value to test
*
* @returns {boolean} True if value is a RegExp object, otherwise false
*/
var isRegExp = kindOfTest("RegExp");
var reduceDescriptors = (obj, reducer) => {
	const descriptors = Object.getOwnPropertyDescriptors(obj);
	const reducedDescriptors = {};
	forEach(descriptors, (descriptor, name) => {
		let ret;
		if ((ret = reducer(descriptor, name, obj)) !== false) reducedDescriptors[name] = ret || descriptor;
	});
	Object.defineProperties(obj, reducedDescriptors);
};
/**
* Makes all methods read-only
* @param {Object} obj
*/
var freezeMethods = (obj) => {
	reduceDescriptors(obj, (descriptor, name) => {
		if (isFunction$1(obj) && [
			"arguments",
			"caller",
			"callee"
		].includes(name)) return false;
		const value = obj[name];
		if (!isFunction$1(value)) return;
		descriptor.enumerable = false;
		if ("writable" in descriptor) {
			descriptor.writable = false;
			return;
		}
		if (!descriptor.set) descriptor.set = () => {
			throw Error("Can not rewrite read-only method '" + name + "'");
		};
	});
};
/**
* Converts an array or a delimited string into an object set with values as keys and true as values.
* Useful for fast membership checks.
*
* @param {Array|string} arrayOrString - The array or string to convert.
* @param {string} delimiter - The delimiter to use if input is a string.
* @returns {Object} An object with keys from the array or string, values set to true.
*/
var toObjectSet = (arrayOrString, delimiter) => {
	const obj = {};
	const define = (arr) => {
		arr.forEach((value) => {
			obj[value] = true;
		});
	};
	isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
	return obj;
};
var noop = () => {};
var toFiniteNumber = (value, defaultValue) => {
	return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
/**
* If the thing is a FormData object, return true, otherwise return false.
*
* @param {unknown} thing - The thing to check.
*
* @returns {boolean}
*/
function isSpecCompliantForm(thing) {
	return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
}
/**
* Recursively converts an object to a JSON-compatible object, handling circular references and Buffers.
*
* @param {Object} obj - The object to convert.
* @returns {Object} The JSON-compatible object.
*/
var toJSONObject = (obj) => {
	const stack = new Array(10);
	const visit = (source, i) => {
		if (isObject(source)) {
			if (stack.indexOf(source) >= 0) return;
			if (isBuffer(source)) return source;
			if (!("toJSON" in source)) {
				stack[i] = source;
				const target = isArray(source) ? [] : {};
				forEach(source, (value, key) => {
					const reducedValue = visit(value, i + 1);
					!isUndefined(reducedValue) && (target[key] = reducedValue);
				});
				stack[i] = void 0;
				return target;
			}
		}
		return source;
	};
	return visit(obj, 0);
};
/**
* Determines if a value is an async function.
*
* @param {*} thing - The value to test.
* @returns {boolean} True if value is an async function, otherwise false.
*/
var isAsyncFn = kindOfTest("AsyncFunction");
/**
* Determines if a value is thenable (has then and catch methods).
*
* @param {*} thing - The value to test.
* @returns {boolean} True if value is thenable, otherwise false.
*/
var isThenable = (thing) => thing && (isObject(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);
/**
* Provides a cross-platform setImmediate implementation.
* Uses native setImmediate if available, otherwise falls back to postMessage or setTimeout.
*
* @param {boolean} setImmediateSupported - Whether setImmediate is supported.
* @param {boolean} postMessageSupported - Whether postMessage is supported.
* @returns {Function} A function to schedule a callback asynchronously.
*/
var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
	if (setImmediateSupported) return setImmediate;
	return postMessageSupported ? ((token, callbacks) => {
		_global.addEventListener("message", ({ source, data }) => {
			if (source === _global && data === token) callbacks.length && callbacks.shift()();
		}, false);
		return (cb) => {
			callbacks.push(cb);
			_global.postMessage(token, "*");
		};
	})(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(typeof setImmediate === "function", isFunction$1(_global.postMessage));
/**
* Schedules a microtask or asynchronous callback as soon as possible.
* Uses queueMicrotask if available, otherwise falls back to process.nextTick or _setImmediate.
*
* @type {Function}
*/
var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
var isIterable = (thing) => thing != null && isFunction$1(thing[iterator]);
var utils_default = {
	isArray,
	isArrayBuffer,
	isBuffer,
	isFormData,
	isArrayBufferView,
	isString,
	isNumber,
	isBoolean,
	isObject,
	isPlainObject,
	isEmptyObject,
	isReadableStream,
	isRequest,
	isResponse,
	isHeaders,
	isUndefined,
	isDate,
	isFile,
	isReactNativeBlob,
	isReactNative,
	isBlob,
	isRegExp,
	isFunction: isFunction$1,
	isStream,
	isURLSearchParams,
	isTypedArray,
	isFileList,
	forEach,
	merge,
	extend,
	trim,
	stripBOM,
	inherits,
	toFlatObject,
	kindOf,
	kindOfTest,
	endsWith,
	toArray,
	forEachEntry,
	matchAll,
	isHTMLForm,
	hasOwnProperty,
	hasOwnProp: hasOwnProperty,
	reduceDescriptors,
	freezeMethods,
	toObjectSet,
	toCamelCase,
	noop,
	toFiniteNumber,
	findKey,
	global: _global,
	isContextDefined,
	isSpecCompliantForm,
	toJSONObject,
	isAsyncFn,
	isThenable,
	setImmediate: _setImmediate,
	asap,
	isIterable
};
//#endregion
//#region node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf = utils_default.toObjectSet([
	"age",
	"authorization",
	"content-length",
	"content-type",
	"etag",
	"expires",
	"from",
	"host",
	"if-modified-since",
	"if-unmodified-since",
	"last-modified",
	"location",
	"max-forwards",
	"proxy-authorization",
	"referer",
	"retry-after",
	"user-agent"
]);
/**
* Parse headers into an object
*
* ```
* Date: Wed, 27 Aug 2014 08:58:49 GMT
* Content-Type: application/json
* Connection: keep-alive
* Transfer-Encoding: chunked
* ```
*
* @param {String} rawHeaders Headers needing to be parsed
*
* @returns {Object} Headers parsed into an object
*/
var parseHeaders_default = (rawHeaders) => {
	const parsed = {};
	let key;
	let val;
	let i;
	rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
		i = line.indexOf(":");
		key = line.substring(0, i).trim().toLowerCase();
		val = line.substring(i + 1).trim();
		if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
		if (key === "set-cookie") if (parsed[key]) parsed[key].push(val);
		else parsed[key] = [val];
		else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
	});
	return parsed;
};
//#endregion
//#region node_modules/axios/lib/core/AxiosHeaders.js
var $internals = Symbol("internals");
var INVALID_HEADER_VALUE_CHARS_RE = /[^\x09\x20-\x7E\x80-\xFF]/g;
function trimSPorHTAB(str) {
	let start = 0;
	let end = str.length;
	while (start < end) {
		const code = str.charCodeAt(start);
		if (code !== 9 && code !== 32) break;
		start += 1;
	}
	while (end > start) {
		const code = str.charCodeAt(end - 1);
		if (code !== 9 && code !== 32) break;
		end -= 1;
	}
	return start === 0 && end === str.length ? str : str.slice(start, end);
}
function normalizeHeader(header) {
	return header && String(header).trim().toLowerCase();
}
function sanitizeHeaderValue(str) {
	return trimSPorHTAB(str.replace(INVALID_HEADER_VALUE_CHARS_RE, ""));
}
function normalizeValue(value) {
	if (value === false || value == null) return value;
	return utils_default.isArray(value) ? value.map(normalizeValue) : sanitizeHeaderValue(String(value));
}
function parseTokens(str) {
	const tokens = Object.create(null);
	const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	let match;
	while (match = tokensRE.exec(str)) tokens[match[1]] = match[2];
	return tokens;
}
var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
	if (utils_default.isFunction(filter)) return filter.call(this, value, header);
	if (isHeaderNameFilter) value = header;
	if (!utils_default.isString(value)) return;
	if (utils_default.isString(filter)) return value.indexOf(filter) !== -1;
	if (utils_default.isRegExp(filter)) return filter.test(value);
}
function formatHeader(header) {
	return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
		return char.toUpperCase() + str;
	});
}
function buildAccessors(obj, header) {
	const accessorName = utils_default.toCamelCase(" " + header);
	[
		"get",
		"set",
		"has"
	].forEach((methodName) => {
		Object.defineProperty(obj, methodName + accessorName, {
			__proto__: null,
			value: function(arg1, arg2, arg3) {
				return this[methodName].call(this, header, arg1, arg2, arg3);
			},
			configurable: true
		});
	});
}
var AxiosHeaders$1 = class {
	constructor(headers) {
		headers && this.set(headers);
	}
	set(header, valueOrRewrite, rewrite) {
		const self = this;
		function setHeader(_value, _header, _rewrite) {
			const lHeader = normalizeHeader(_header);
			if (!lHeader) throw new Error("header name must be a non-empty string");
			const key = utils_default.findKey(self, lHeader);
			if (!key || self[key] === void 0 || _rewrite === true || _rewrite === void 0 && self[key] !== false) self[key || _header] = normalizeValue(_value);
		}
		const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
		if (utils_default.isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
		else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) setHeaders(parseHeaders_default(header), valueOrRewrite);
		else if (utils_default.isObject(header) && utils_default.isIterable(header)) {
			let obj = {}, dest, key;
			for (const entry of header) {
				if (!utils_default.isArray(entry)) throw TypeError("Object iterator must return a key-value pair");
				obj[key = entry[0]] = (dest = obj[key]) ? utils_default.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]] : entry[1];
			}
			setHeaders(obj, valueOrRewrite);
		} else header != null && setHeader(valueOrRewrite, header, rewrite);
		return this;
	}
	get(header, parser) {
		header = normalizeHeader(header);
		if (header) {
			const key = utils_default.findKey(this, header);
			if (key) {
				const value = this[key];
				if (!parser) return value;
				if (parser === true) return parseTokens(value);
				if (utils_default.isFunction(parser)) return parser.call(this, value, key);
				if (utils_default.isRegExp(parser)) return parser.exec(value);
				throw new TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(header, matcher) {
		header = normalizeHeader(header);
		if (header) {
			const key = utils_default.findKey(this, header);
			return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
		}
		return false;
	}
	delete(header, matcher) {
		const self = this;
		let deleted = false;
		function deleteHeader(_header) {
			_header = normalizeHeader(_header);
			if (_header) {
				const key = utils_default.findKey(self, _header);
				if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
					delete self[key];
					deleted = true;
				}
			}
		}
		if (utils_default.isArray(header)) header.forEach(deleteHeader);
		else deleteHeader(header);
		return deleted;
	}
	clear(matcher) {
		const keys = Object.keys(this);
		let i = keys.length;
		let deleted = false;
		while (i--) {
			const key = keys[i];
			if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
				delete this[key];
				deleted = true;
			}
		}
		return deleted;
	}
	normalize(format) {
		const self = this;
		const headers = {};
		utils_default.forEach(this, (value, header) => {
			const key = utils_default.findKey(headers, header);
			if (key) {
				self[key] = normalizeValue(value);
				delete self[header];
				return;
			}
			const normalized = format ? formatHeader(header) : String(header).trim();
			if (normalized !== header) delete self[header];
			self[normalized] = normalizeValue(value);
			headers[normalized] = true;
		});
		return this;
	}
	concat(...targets) {
		return this.constructor.concat(this, ...targets);
	}
	toJSON(asStrings) {
		const obj = Object.create(null);
		utils_default.forEach(this, (value, header) => {
			value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
		});
		return obj;
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
	}
	getSetCookie() {
		return this.get("set-cookie") || [];
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(thing) {
		return thing instanceof this ? thing : new this(thing);
	}
	static concat(first, ...targets) {
		const computed = new this(first);
		targets.forEach((target) => computed.set(target));
		return computed;
	}
	static accessor(header) {
		const accessors = (this[$internals] = this[$internals] = { accessors: {} }).accessors;
		const prototype = this.prototype;
		function defineAccessor(_header) {
			const lHeader = normalizeHeader(_header);
			if (!accessors[lHeader]) {
				buildAccessors(prototype, _header);
				accessors[lHeader] = true;
			}
		}
		utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
		return this;
	}
};
AxiosHeaders$1.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization"
]);
utils_default.reduceDescriptors(AxiosHeaders$1.prototype, ({ value }, key) => {
	let mapped = key[0].toUpperCase() + key.slice(1);
	return {
		get: () => value,
		set(headerValue) {
			this[mapped] = headerValue;
		}
	};
});
utils_default.freezeMethods(AxiosHeaders$1);
//#endregion
//#region node_modules/axios/lib/core/AxiosError.js
var REDACTED = "[REDACTED ****]";
function hasOwnOrPrototypeToJSON(source) {
	if (utils_default.hasOwnProp(source, "toJSON")) return true;
	let prototype = Object.getPrototypeOf(source);
	while (prototype && prototype !== Object.prototype) {
		if (utils_default.hasOwnProp(prototype, "toJSON")) return true;
		prototype = Object.getPrototypeOf(prototype);
	}
	return false;
}
function redactConfig(config, redactKeys) {
	const lowerKeys = new Set(redactKeys.map((k) => String(k).toLowerCase()));
	const seen = [];
	const visit = (source) => {
		if (source === null || typeof source !== "object") return source;
		if (utils_default.isBuffer(source)) return source;
		if (seen.indexOf(source) !== -1) return void 0;
		if (source instanceof AxiosHeaders$1) source = source.toJSON();
		seen.push(source);
		let result;
		if (utils_default.isArray(source)) {
			result = [];
			source.forEach((v, i) => {
				const reducedValue = visit(v);
				if (!utils_default.isUndefined(reducedValue)) result[i] = reducedValue;
			});
		} else {
			if (!utils_default.isPlainObject(source) && hasOwnOrPrototypeToJSON(source)) {
				seen.pop();
				return source;
			}
			result = Object.create(null);
			for (const [key, value] of Object.entries(source)) {
				const reducedValue = lowerKeys.has(key.toLowerCase()) ? REDACTED : visit(value);
				if (!utils_default.isUndefined(reducedValue)) result[key] = reducedValue;
			}
		}
		seen.pop();
		return result;
	};
	return visit(config);
}
var AxiosError$1 = class AxiosError$1 extends Error {
	static from(error, code, config, request, response, customProps) {
		const axiosError = new AxiosError$1(error.message, code || error.code, config, request, response);
		axiosError.cause = error;
		axiosError.name = error.name;
		if (error.status != null && axiosError.status == null) axiosError.status = error.status;
		customProps && Object.assign(axiosError, customProps);
		return axiosError;
	}
	/**
	* Create an Error with the specified message, config, error code, request and response.
	*
	* @param {string} message The error message.
	* @param {string} [code] The error code (for example, 'ECONNABORTED').
	* @param {Object} [config] The config.
	* @param {Object} [request] The request.
	* @param {Object} [response] The response.
	*
	* @returns {Error} The created error.
	*/
	constructor(message, code, config, request, response) {
		super(message);
		Object.defineProperty(this, "message", {
			__proto__: null,
			value: message,
			enumerable: true,
			writable: true,
			configurable: true
		});
		this.name = "AxiosError";
		this.isAxiosError = true;
		code && (this.code = code);
		config && (this.config = config);
		request && (this.request = request);
		if (response) {
			this.response = response;
			this.status = response.status;
		}
	}
	toJSON() {
		const config = this.config;
		const redactKeys = config && utils_default.hasOwnProp(config, "redact") ? config.redact : void 0;
		const serializedConfig = utils_default.isArray(redactKeys) && redactKeys.length > 0 ? redactConfig(config, redactKeys) : utils_default.toJSONObject(config);
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: serializedConfig,
			code: this.code,
			status: this.status
		};
	}
};
AxiosError$1.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
AxiosError$1.ERR_BAD_OPTION = "ERR_BAD_OPTION";
AxiosError$1.ECONNABORTED = "ECONNABORTED";
AxiosError$1.ETIMEDOUT = "ETIMEDOUT";
AxiosError$1.ECONNREFUSED = "ECONNREFUSED";
AxiosError$1.ERR_NETWORK = "ERR_NETWORK";
AxiosError$1.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
AxiosError$1.ERR_DEPRECATED = "ERR_DEPRECATED";
AxiosError$1.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
AxiosError$1.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
AxiosError$1.ERR_CANCELED = "ERR_CANCELED";
AxiosError$1.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
AxiosError$1.ERR_INVALID_URL = "ERR_INVALID_URL";
AxiosError$1.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
//#endregion
//#region node_modules/axios/lib/helpers/toFormData.js
/**
* Determines if the given thing is a array or js object.
*
* @param {string} thing - The object or array to be visited.
*
* @returns {boolean}
*/
function isVisitable(thing) {
	return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
/**
* It removes the brackets from the end of a string
*
* @param {string} key - The key of the parameter.
*
* @returns {string} the key without the brackets.
*/
function removeBrackets(key) {
	return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
/**
* It takes a path, a key, and a boolean, and returns a string
*
* @param {string} path - The path to the current key.
* @param {string} key - The key of the current object being iterated over.
* @param {string} dots - If true, the key will be rendered with dots instead of brackets.
*
* @returns {string} The path to the current key.
*/
function renderKey(path, key, dots) {
	if (!path) return key;
	return path.concat(key).map(function each(token, i) {
		token = removeBrackets(token);
		return !dots && i ? "[" + token + "]" : token;
	}).join(dots ? "." : "");
}
/**
* If the array is an array and none of its elements are visitable, then it's a flat array.
*
* @param {Array<any>} arr - The array to check
*
* @returns {boolean}
*/
function isFlatArray(arr) {
	return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
	return /^is[A-Z]/.test(prop);
});
/**
* Convert a data object to FormData
*
* @param {Object} obj
* @param {?Object} [formData]
* @param {?Object} [options]
* @param {Function} [options.visitor]
* @param {Boolean} [options.metaTokens = true]
* @param {Boolean} [options.dots = false]
* @param {?Boolean} [options.indexes = false]
*
* @returns {Object}
**/
/**
* It converts an object into a FormData object
*
* @param {Object<any, any>} obj - The object to convert to form data.
* @param {string} formData - The FormData object to append to.
* @param {Object<string, any>} options
*
* @returns
*/
function toFormData$1(obj, formData, options) {
	if (!utils_default.isObject(obj)) throw new TypeError("target must be an object");
	formData = formData || new FormData();
	options = utils_default.toFlatObject(options, {
		metaTokens: true,
		dots: false,
		indexes: false
	}, false, function defined(option, source) {
		return !utils_default.isUndefined(source[option]);
	});
	const metaTokens = options.metaTokens;
	const visitor = options.visitor || defaultVisitor;
	const dots = options.dots;
	const indexes = options.indexes;
	const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
	const maxDepth = options.maxDepth === void 0 ? 100 : options.maxDepth;
	const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
	if (!utils_default.isFunction(visitor)) throw new TypeError("visitor must be a function");
	function convertValue(value) {
		if (value === null) return "";
		if (utils_default.isDate(value)) return value.toISOString();
		if (utils_default.isBoolean(value)) return value.toString();
		if (!useBlob && utils_default.isBlob(value)) throw new AxiosError$1("Blob is not supported. Use a Buffer instead.");
		if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
		return value;
	}
	/**
	* Default visitor.
	*
	* @param {*} value
	* @param {String|Number} key
	* @param {Array<String|Number>} path
	* @this {FormData}
	*
	* @returns {boolean} return true to visit the each prop of the value recursively
	*/
	function defaultVisitor(value, key, path) {
		let arr = value;
		if (utils_default.isReactNative(formData) && utils_default.isReactNativeBlob(value)) {
			formData.append(renderKey(path, key, dots), convertValue(value));
			return false;
		}
		if (value && !path && typeof value === "object") {
			if (utils_default.endsWith(key, "{}")) {
				key = metaTokens ? key : key.slice(0, -2);
				value = JSON.stringify(value);
			} else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
				key = removeBrackets(key);
				arr.forEach(function each(el, index) {
					!(utils_default.isUndefined(el) || el === null) && formData.append(indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
				});
				return false;
			}
		}
		if (isVisitable(value)) return true;
		formData.append(renderKey(path, key, dots), convertValue(value));
		return false;
	}
	const stack = [];
	const exposedHelpers = Object.assign(predicates, {
		defaultVisitor,
		convertValue,
		isVisitable
	});
	function build(value, path, depth = 0) {
		if (utils_default.isUndefined(value)) return;
		if (depth > maxDepth) throw new AxiosError$1("Object is too deeply nested (" + depth + " levels). Max depth: " + maxDepth, AxiosError$1.ERR_FORM_DATA_DEPTH_EXCEEDED);
		if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
		stack.push(value);
		utils_default.forEach(value, function each(el, key) {
			if ((!(utils_default.isUndefined(el) || el === null) && visitor.call(formData, el, utils_default.isString(key) ? key.trim() : key, path, exposedHelpers)) === true) build(el, path ? path.concat(key) : [key], depth + 1);
		});
		stack.pop();
	}
	if (!utils_default.isObject(obj)) throw new TypeError("data must be an object");
	build(obj);
	return formData;
}
//#endregion
//#region node_modules/axios/lib/helpers/AxiosURLSearchParams.js
/**
* It encodes a string by replacing all characters that are not in the unreserved set with
* their percent-encoded equivalents
*
* @param {string} str - The string to encode.
*
* @returns {string} The encoded string.
*/
function encode$1(str) {
	const charMap = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+"
	};
	return encodeURIComponent(str).replace(/[!'()~]|%20/g, function replacer(match) {
		return charMap[match];
	});
}
/**
* It takes a params object and converts it to a FormData object
*
* @param {Object<string, any>} params - The parameters to be converted to a FormData object.
* @param {Object<string, any>} options - The options object passed to the Axios constructor.
*
* @returns {void}
*/
function AxiosURLSearchParams(params, options) {
	this._pairs = [];
	params && toFormData$1(params, this, options);
}
var prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
	this._pairs.push([name, value]);
};
prototype.toString = function toString(encoder) {
	const _encode = encoder ? function(value) {
		return encoder.call(this, value, encode$1);
	} : encode$1;
	return this._pairs.map(function each(pair) {
		return _encode(pair[0]) + "=" + _encode(pair[1]);
	}, "").join("&");
};
//#endregion
//#region node_modules/axios/lib/helpers/buildURL.js
/**
* It replaces URL-encoded forms of `:`, `$`, `,`, and spaces with
* their plain counterparts (`:`, `$`, `,`, `+`).
*
* @param {string} val The value to be encoded.
*
* @returns {string} The encoded value.
*/
function encode(val) {
	return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
/**
* Build a URL by appending params to the end
*
* @param {string} url The base of the url (e.g., http://www.google.com)
* @param {object} [params] The params to be appended
* @param {?(object|Function)} options
*
* @returns {string} The formatted url
*/
function buildURL(url, params, options) {
	if (!params) return url;
	const _encode = options && options.encode || encode;
	const _options = utils_default.isFunction(options) ? { serialize: options } : options;
	const serializeFn = _options && _options.serialize;
	let serializedParams;
	if (serializeFn) serializedParams = serializeFn(params, _options);
	else serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, _options).toString(_encode);
	if (serializedParams) {
		const hashmarkIndex = url.indexOf("#");
		if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
		url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
	}
	return url;
}
//#endregion
//#region node_modules/axios/lib/core/InterceptorManager.js
var InterceptorManager = class {
	constructor() {
		this.handlers = [];
	}
	/**
	* Add a new interceptor to the stack
	*
	* @param {Function} fulfilled The function to handle `then` for a `Promise`
	* @param {Function} rejected The function to handle `reject` for a `Promise`
	* @param {Object} options The options for the interceptor, synchronous and runWhen
	*
	* @return {Number} An ID used to remove interceptor later
	*/
	use(fulfilled, rejected, options) {
		this.handlers.push({
			fulfilled,
			rejected,
			synchronous: options ? options.synchronous : false,
			runWhen: options ? options.runWhen : null
		});
		return this.handlers.length - 1;
	}
	/**
	* Remove an interceptor from the stack
	*
	* @param {Number} id The ID that was returned by `use`
	*
	* @returns {void}
	*/
	eject(id) {
		if (this.handlers[id]) this.handlers[id] = null;
	}
	/**
	* Clear all interceptors from the stack
	*
	* @returns {void}
	*/
	clear() {
		if (this.handlers) this.handlers = [];
	}
	/**
	* Iterate over all the registered interceptors
	*
	* This method is particularly useful for skipping over any
	* interceptors that may have become `null` calling `eject`.
	*
	* @param {Function} fn The function to call for each interceptor
	*
	* @returns {void}
	*/
	forEach(fn) {
		utils_default.forEach(this.handlers, function forEachHandler(h) {
			if (h !== null) fn(h);
		});
	}
};
//#endregion
//#region node_modules/axios/lib/defaults/transitional.js
var transitional_default = {
	silentJSONParsing: true,
	forcedJSONParsing: true,
	clarifyTimeoutError: false,
	legacyInterceptorReqResOrdering: true
};
//#endregion
//#region node_modules/axios/lib/platform/browser/index.js
var browser_default = {
	isBrowser: true,
	classes: {
		URLSearchParams: typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams,
		FormData: typeof FormData !== "undefined" ? FormData : null,
		Blob: typeof Blob !== "undefined" ? Blob : null
	},
	protocols: [
		"http",
		"https",
		"file",
		"blob",
		"url",
		"data"
	]
};
//#endregion
//#region node_modules/axios/lib/platform/common/utils.js
var utils_exports = /* @__PURE__ */ __exportAll({
	hasBrowserEnv: () => hasBrowserEnv,
	hasStandardBrowserEnv: () => hasStandardBrowserEnv,
	hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
	navigator: () => _navigator,
	origin: () => origin
});
var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
var _navigator = typeof navigator === "object" && navigator || void 0;
/**
* Determine if we're running in a standard browser environment
*
* This allows axios to run in a web worker, and react-native.
* Both environments support XMLHttpRequest, but not fully standard globals.
*
* web workers:
*  typeof window -> undefined
*  typeof document -> undefined
*
* react-native:
*  navigator.product -> 'ReactNative'
* nativescript
*  navigator.product -> 'NativeScript' or 'NS'
*
* @returns {boolean}
*/
var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || [
	"ReactNative",
	"NativeScript",
	"NS"
].indexOf(_navigator.product) < 0);
/**
* Determine if we're running in a standard browser webWorker environment
*
* Although the `isStandardBrowserEnv` method indicates that
* `allows axios to run in a web worker`, the WebWorker will still be
* filtered out due to its judgment standard
* `typeof window !== 'undefined' && typeof document !== 'undefined'`.
* This leads to a problem when axios post `FormData` in webWorker
*/
var hasStandardBrowserWebWorkerEnv = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
var origin = hasBrowserEnv && window.location.href || "http://localhost";
//#endregion
//#region node_modules/axios/lib/platform/index.js
var platform_default = {
	...utils_exports,
	...browser_default
};
//#endregion
//#region node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
	return toFormData$1(data, new platform_default.classes.URLSearchParams(), {
		visitor: function(value, key, path, helpers) {
			if (platform_default.isNode && utils_default.isBuffer(value)) {
				this.append(key, value.toString("base64"));
				return false;
			}
			return helpers.defaultVisitor.apply(this, arguments);
		},
		...options
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/formDataToJSON.js
/**
* It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
*
* @param {string} name - The name of the property to get.
*
* @returns An array of strings.
*/
function parsePropPath(name) {
	return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
		return match[0] === "[]" ? "" : match[1] || match[0];
	});
}
/**
* Convert an array to an object.
*
* @param {Array<any>} arr - The array to convert to an object.
*
* @returns An object with the same keys and values as the array.
*/
function arrayToObject(arr) {
	const obj = {};
	const keys = Object.keys(arr);
	let i;
	const len = keys.length;
	let key;
	for (i = 0; i < len; i++) {
		key = keys[i];
		obj[key] = arr[key];
	}
	return obj;
}
/**
* It takes a FormData object and returns a JavaScript object
*
* @param {string} formData The FormData object to convert to JSON.
*
* @returns {Object<string, any> | null} The converted object.
*/
function formDataToJSON(formData) {
	function buildPath(path, value, target, index) {
		let name = path[index++];
		if (name === "__proto__") return true;
		const isNumericKey = Number.isFinite(+name);
		const isLast = index >= path.length;
		name = !name && utils_default.isArray(target) ? target.length : name;
		if (isLast) {
			if (utils_default.hasOwnProp(target, name)) target[name] = utils_default.isArray(target[name]) ? target[name].concat(value) : [target[name], value];
			else target[name] = value;
			return !isNumericKey;
		}
		if (!target[name] || !utils_default.isObject(target[name])) target[name] = [];
		if (buildPath(path, value, target[name], index) && utils_default.isArray(target[name])) target[name] = arrayToObject(target[name]);
		return !isNumericKey;
	}
	if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
		const obj = {};
		utils_default.forEachEntry(formData, (name, value) => {
			buildPath(parsePropPath(name), value, obj, 0);
		});
		return obj;
	}
	return null;
}
//#endregion
//#region node_modules/axios/lib/defaults/index.js
var own = (obj, key) => obj != null && utils_default.hasOwnProp(obj, key) ? obj[key] : void 0;
/**
* It takes a string, tries to parse it, and if it fails, it returns the stringified version
* of the input
*
* @param {any} rawValue - The value to be stringified.
* @param {Function} parser - A function that parses a string into a JavaScript object.
* @param {Function} encoder - A function that takes a value and returns a string.
*
* @returns {string} A stringified version of the rawValue.
*/
function stringifySafely(rawValue, parser, encoder) {
	if (utils_default.isString(rawValue)) try {
		(parser || JSON.parse)(rawValue);
		return utils_default.trim(rawValue);
	} catch (e) {
		if (e.name !== "SyntaxError") throw e;
	}
	return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
	transitional: transitional_default,
	adapter: [
		"xhr",
		"http",
		"fetch"
	],
	transformRequest: [function transformRequest(data, headers) {
		const contentType = headers.getContentType() || "";
		const hasJSONContentType = contentType.indexOf("application/json") > -1;
		const isObjectPayload = utils_default.isObject(data);
		if (isObjectPayload && utils_default.isHTMLForm(data)) data = new FormData(data);
		if (utils_default.isFormData(data)) return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
		if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) return data;
		if (utils_default.isArrayBufferView(data)) return data.buffer;
		if (utils_default.isURLSearchParams(data)) {
			headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
			return data.toString();
		}
		let isFileList;
		if (isObjectPayload) {
			const formSerializer = own(this, "formSerializer");
			if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return toURLEncodedForm(data, formSerializer).toString();
			if ((isFileList = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
				const env = own(this, "env");
				const _FormData = env && env.FormData;
				return toFormData$1(isFileList ? { "files[]": data } : data, _FormData && new _FormData(), formSerializer);
			}
		}
		if (isObjectPayload || hasJSONContentType) {
			headers.setContentType("application/json", false);
			return stringifySafely(data);
		}
		return data;
	}],
	transformResponse: [function transformResponse(data) {
		const transitional = own(this, "transitional") || defaults.transitional;
		const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
		const responseType = own(this, "responseType");
		const JSONRequested = responseType === "json";
		if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) return data;
		if (data && utils_default.isString(data) && (forcedJSONParsing && !responseType || JSONRequested)) {
			const strictJSONParsing = !(transitional && transitional.silentJSONParsing) && JSONRequested;
			try {
				return JSON.parse(data, own(this, "parseReviver"));
			} catch (e) {
				if (strictJSONParsing) {
					if (e.name === "SyntaxError") throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, own(this, "response"));
					throw e;
				}
			}
		}
		return data;
	}],
	/**
	* A timeout in milliseconds to abort a request. If set to 0 (default) a
	* timeout is not created.
	*/
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: {
		FormData: platform_default.classes.FormData,
		Blob: platform_default.classes.Blob
	},
	validateStatus: function validateStatus(status) {
		return status >= 200 && status < 300;
	},
	headers: { common: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": void 0
	} }
};
utils_default.forEach([
	"delete",
	"get",
	"head",
	"post",
	"put",
	"patch",
	"query"
], (method) => {
	defaults.headers[method] = {};
});
//#endregion
//#region node_modules/axios/lib/core/transformData.js
/**
* Transform the data for a request or a response
*
* @param {Array|Function} fns A single function or Array of functions
* @param {?Object} response The response object
*
* @returns {*} The resulting transformed data
*/
function transformData(fns, response) {
	const config = this || defaults;
	const context = response || config;
	const headers = AxiosHeaders$1.from(context.headers);
	let data = context.data;
	utils_default.forEach(fns, function transform(fn) {
		data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
	});
	headers.normalize();
	return data;
}
//#endregion
//#region node_modules/axios/lib/cancel/isCancel.js
function isCancel$1(value) {
	return !!(value && value.__CANCEL__);
}
//#endregion
//#region node_modules/axios/lib/cancel/CanceledError.js
var CanceledError$1 = class extends AxiosError$1 {
	/**
	* A `CanceledError` is an object that is thrown when an operation is canceled.
	*
	* @param {string=} message The message.
	* @param {Object=} config The config.
	* @param {Object=} request The request.
	*
	* @returns {CanceledError} The created error.
	*/
	constructor(message, config, request) {
		super(message == null ? "canceled" : message, AxiosError$1.ERR_CANCELED, config, request);
		this.name = "CanceledError";
		this.__CANCEL__ = true;
	}
};
//#endregion
//#region node_modules/axios/lib/core/settle.js
/**
* Resolve or reject a Promise based on response status.
*
* @param {Function} resolve A function that resolves the promise.
* @param {Function} reject A function that rejects the promise.
* @param {object} response The response.
*
* @returns {object} The response.
*/
function settle(resolve, reject, response) {
	const validateStatus = response.config.validateStatus;
	if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
	else reject(new AxiosError$1("Request failed with status code " + response.status, response.status >= 400 && response.status < 500 ? AxiosError$1.ERR_BAD_REQUEST : AxiosError$1.ERR_BAD_RESPONSE, response.config, response.request, response));
}
//#endregion
//#region node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url) {
	const match = /^([-+\w]{1,25}):(?:\/\/)?/.exec(url);
	return match && match[1] || "";
}
//#endregion
//#region node_modules/axios/lib/helpers/speedometer.js
/**
* Calculate data maxRate
* @param {Number} [samplesCount= 10]
* @param {Number} [min= 1000]
* @returns {Function}
*/
function speedometer(samplesCount, min) {
	samplesCount = samplesCount || 10;
	const bytes = new Array(samplesCount);
	const timestamps = new Array(samplesCount);
	let head = 0;
	let tail = 0;
	let firstSampleTS;
	min = min !== void 0 ? min : 1e3;
	return function push(chunkLength) {
		const now = Date.now();
		const startedAt = timestamps[tail];
		if (!firstSampleTS) firstSampleTS = now;
		bytes[head] = chunkLength;
		timestamps[head] = now;
		let i = tail;
		let bytesCount = 0;
		while (i !== head) {
			bytesCount += bytes[i++];
			i = i % samplesCount;
		}
		head = (head + 1) % samplesCount;
		if (head === tail) tail = (tail + 1) % samplesCount;
		if (now - firstSampleTS < min) return;
		const passed = startedAt && now - startedAt;
		return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/throttle.js
/**
* Throttle decorator
* @param {Function} fn
* @param {Number} freq
* @return {Function}
*/
function throttle(fn, freq) {
	let timestamp = 0;
	let threshold = 1e3 / freq;
	let lastArgs;
	let timer;
	const invoke = (args, now = Date.now()) => {
		timestamp = now;
		lastArgs = null;
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		fn(...args);
	};
	const throttled = (...args) => {
		const now = Date.now();
		const passed = now - timestamp;
		if (passed >= threshold) invoke(args, now);
		else {
			lastArgs = args;
			if (!timer) timer = setTimeout(() => {
				timer = null;
				invoke(lastArgs);
			}, threshold - passed);
		}
	};
	const flush = () => lastArgs && invoke(lastArgs);
	return [throttled, flush];
}
//#endregion
//#region node_modules/axios/lib/helpers/progressEventReducer.js
var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
	let bytesNotified = 0;
	const _speedometer = speedometer(50, 250);
	return throttle((e) => {
		const rawLoaded = e.loaded;
		const total = e.lengthComputable ? e.total : void 0;
		const loaded = total != null ? Math.min(rawLoaded, total) : rawLoaded;
		const progressBytes = Math.max(0, loaded - bytesNotified);
		const rate = _speedometer(progressBytes);
		bytesNotified = Math.max(bytesNotified, loaded);
		listener({
			loaded,
			total,
			progress: total ? loaded / total : void 0,
			bytes: progressBytes,
			rate: rate ? rate : void 0,
			estimated: rate && total ? (total - loaded) / rate : void 0,
			event: e,
			lengthComputable: total != null,
			[isDownloadStream ? "download" : "upload"]: true
		});
	}, freq);
};
var progressEventDecorator = (total, throttled) => {
	const lengthComputable = total != null;
	return [(loaded) => throttled[0]({
		lengthComputable,
		total,
		loaded
	}), throttled[1]];
};
var asyncDecorator = (fn) => (...args) => utils_default.asap(() => fn(...args));
//#endregion
//#region node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? ((origin, isMSIE) => (url) => {
	url = new URL(url, platform_default.origin);
	return origin.protocol === url.protocol && origin.host === url.host && (isMSIE || origin.port === url.port);
})(new URL(platform_default.origin), platform_default.navigator && /(msie|trident)/i.test(platform_default.navigator.userAgent)) : () => true;
//#endregion
//#region node_modules/axios/lib/helpers/cookies.js
var cookies_default = platform_default.hasStandardBrowserEnv ? {
	write(name, value, expires, path, domain, secure, sameSite) {
		if (typeof document === "undefined") return;
		const cookie = [`${name}=${encodeURIComponent(value)}`];
		if (utils_default.isNumber(expires)) cookie.push(`expires=${new Date(expires).toUTCString()}`);
		if (utils_default.isString(path)) cookie.push(`path=${path}`);
		if (utils_default.isString(domain)) cookie.push(`domain=${domain}`);
		if (secure === true) cookie.push("secure");
		if (utils_default.isString(sameSite)) cookie.push(`SameSite=${sameSite}`);
		document.cookie = cookie.join("; ");
	},
	read(name) {
		if (typeof document === "undefined") return null;
		const cookies = document.cookie.split(";");
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].replace(/^\s+/, "");
			const eq = cookie.indexOf("=");
			if (eq !== -1 && cookie.slice(0, eq) === name) return decodeURIComponent(cookie.slice(eq + 1));
		}
		return null;
	},
	remove(name) {
		this.write(name, "", Date.now() - 864e5, "/");
	}
} : {
	write() {},
	read() {
		return null;
	},
	remove() {}
};
//#endregion
//#region node_modules/axios/lib/helpers/isAbsoluteURL.js
/**
* Determines whether the specified URL is absolute
*
* @param {string} url The URL to test
*
* @returns {boolean} True if the specified URL is absolute, otherwise false
*/
function isAbsoluteURL(url) {
	if (typeof url !== "string") return false;
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
//#endregion
//#region node_modules/axios/lib/helpers/combineURLs.js
/**
* Creates a new URL by combining the specified URLs
*
* @param {string} baseURL The base URL
* @param {string} relativeURL The relative URL
*
* @returns {string} The combined URL
*/
function combineURLs(baseURL, relativeURL) {
	return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
//#endregion
//#region node_modules/axios/lib/core/buildFullPath.js
/**
* Creates a new URL by combining the baseURL with the requestedURL,
* only when the requestedURL is not already an absolute URL.
* If the requestURL is absolute, this function returns the requestedURL untouched.
*
* @param {string} baseURL The base URL
* @param {string} requestedURL Absolute or relative URL to combine
*
* @returns {string} The combined full path
*/
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
	let isRelativeUrl = !isAbsoluteURL(requestedURL);
	if (baseURL && (isRelativeUrl || allowAbsoluteUrls === false)) return combineURLs(baseURL, requestedURL);
	return requestedURL;
}
//#endregion
//#region node_modules/axios/lib/core/mergeConfig.js
var headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;
/**
* Config-specific merge-function which creates a new config-object
* by merging two configuration objects together.
*
* @param {Object} config1
* @param {Object} config2
*
* @returns {Object} New object resulting from merging config2 to config1
*/
function mergeConfig$1(config1, config2) {
	config2 = config2 || {};
	const config = Object.create(null);
	Object.defineProperty(config, "hasOwnProperty", {
		__proto__: null,
		value: Object.prototype.hasOwnProperty,
		enumerable: false,
		writable: true,
		configurable: true
	});
	function getMergedValue(target, source, prop, caseless) {
		if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) return utils_default.merge.call({ caseless }, target, source);
		else if (utils_default.isPlainObject(source)) return utils_default.merge({}, source);
		else if (utils_default.isArray(source)) return source.slice();
		return source;
	}
	function mergeDeepProperties(a, b, prop, caseless) {
		if (!utils_default.isUndefined(b)) return getMergedValue(a, b, prop, caseless);
		else if (!utils_default.isUndefined(a)) return getMergedValue(void 0, a, prop, caseless);
	}
	function valueFromConfig2(a, b) {
		if (!utils_default.isUndefined(b)) return getMergedValue(void 0, b);
	}
	function defaultToConfig2(a, b) {
		if (!utils_default.isUndefined(b)) return getMergedValue(void 0, b);
		else if (!utils_default.isUndefined(a)) return getMergedValue(void 0, a);
	}
	function mergeDirectKeys(a, b, prop) {
		if (utils_default.hasOwnProp(config2, prop)) return getMergedValue(a, b);
		else if (utils_default.hasOwnProp(config1, prop)) return getMergedValue(void 0, a);
	}
	const mergeMap = {
		url: valueFromConfig2,
		method: valueFromConfig2,
		data: valueFromConfig2,
		baseURL: defaultToConfig2,
		transformRequest: defaultToConfig2,
		transformResponse: defaultToConfig2,
		paramsSerializer: defaultToConfig2,
		timeout: defaultToConfig2,
		timeoutMessage: defaultToConfig2,
		withCredentials: defaultToConfig2,
		withXSRFToken: defaultToConfig2,
		adapter: defaultToConfig2,
		responseType: defaultToConfig2,
		xsrfCookieName: defaultToConfig2,
		xsrfHeaderName: defaultToConfig2,
		onUploadProgress: defaultToConfig2,
		onDownloadProgress: defaultToConfig2,
		decompress: defaultToConfig2,
		maxContentLength: defaultToConfig2,
		maxBodyLength: defaultToConfig2,
		beforeRedirect: defaultToConfig2,
		transport: defaultToConfig2,
		httpAgent: defaultToConfig2,
		httpsAgent: defaultToConfig2,
		cancelToken: defaultToConfig2,
		socketPath: defaultToConfig2,
		allowedSocketPaths: defaultToConfig2,
		responseEncoding: defaultToConfig2,
		validateStatus: mergeDirectKeys,
		headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
	};
	utils_default.forEach(Object.keys({
		...config1,
		...config2
	}), function computeConfigValue(prop) {
		if (prop === "__proto__" || prop === "constructor" || prop === "prototype") return;
		const merge = utils_default.hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
		const configValue = merge(utils_default.hasOwnProp(config1, prop) ? config1[prop] : void 0, utils_default.hasOwnProp(config2, prop) ? config2[prop] : void 0, prop);
		utils_default.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
	});
	return config;
}
//#endregion
//#region node_modules/axios/lib/helpers/resolveConfig.js
var FORM_DATA_CONTENT_HEADERS = ["content-type", "content-length"];
function setFormDataHeaders(headers, formHeaders, policy) {
	if (policy !== "content-only") {
		headers.set(formHeaders);
		return;
	}
	Object.entries(formHeaders).forEach(([key, val]) => {
		if (FORM_DATA_CONTENT_HEADERS.includes(key.toLowerCase())) headers.set(key, val);
	});
}
/**
* Encode a UTF-8 string to a Latin-1 byte string for use with btoa().
* This is a modern replacement for the deprecated unescape(encodeURIComponent(str)) pattern.
*
* @param {string} str The string to encode
*
* @returns {string} UTF-8 bytes as a Latin-1 string
*/
var encodeUTF8 = (str) => encodeURIComponent(str).replace(/%([0-9A-F]{2})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
var resolveConfig_default = (config) => {
	const newConfig = mergeConfig$1({}, config);
	const own = (key) => utils_default.hasOwnProp(newConfig, key) ? newConfig[key] : void 0;
	const data = own("data");
	let withXSRFToken = own("withXSRFToken");
	const xsrfHeaderName = own("xsrfHeaderName");
	const xsrfCookieName = own("xsrfCookieName");
	let headers = own("headers");
	const auth = own("auth");
	const baseURL = own("baseURL");
	const allowAbsoluteUrls = own("allowAbsoluteUrls");
	const url = own("url");
	newConfig.headers = headers = AxiosHeaders$1.from(headers);
	newConfig.url = buildURL(buildFullPath(baseURL, url, allowAbsoluteUrls), config.params, config.paramsSerializer);
	if (auth) headers.set("Authorization", "Basic " + btoa((auth.username || "") + ":" + (auth.password ? encodeUTF8(auth.password) : "")));
	if (utils_default.isFormData(data)) {
		if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) headers.setContentType(void 0);
		else if (utils_default.isFunction(data.getHeaders)) setFormDataHeaders(headers, data.getHeaders(), own("formDataHeaderPolicy"));
	}
	if (platform_default.hasStandardBrowserEnv) {
		if (utils_default.isFunction(withXSRFToken)) withXSRFToken = withXSRFToken(newConfig);
		if (withXSRFToken === true || withXSRFToken == null && isURLSameOrigin_default(newConfig.url)) {
			const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
			if (xsrfValue) headers.set(xsrfHeaderName, xsrfValue);
		}
	}
	return newConfig;
};
var xhr_default = typeof XMLHttpRequest !== "undefined" && function(config) {
	return new Promise(function dispatchXhrRequest(resolve, reject) {
		const _config = resolveConfig_default(config);
		let requestData = _config.data;
		const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
		let { responseType, onUploadProgress, onDownloadProgress } = _config;
		let onCanceled;
		let uploadThrottled, downloadThrottled;
		let flushUpload, flushDownload;
		function done() {
			flushUpload && flushUpload();
			flushDownload && flushDownload();
			_config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
			_config.signal && _config.signal.removeEventListener("abort", onCanceled);
		}
		let request = new XMLHttpRequest();
		request.open(_config.method.toUpperCase(), _config.url, true);
		request.timeout = _config.timeout;
		function onloadend() {
			if (!request) return;
			const responseHeaders = AxiosHeaders$1.from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
			settle(function _resolve(value) {
				resolve(value);
				done();
			}, function _reject(err) {
				reject(err);
				done();
			}, {
				data: !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response,
				status: request.status,
				statusText: request.statusText,
				headers: responseHeaders,
				config,
				request
			});
			request = null;
		}
		if ("onloadend" in request) request.onloadend = onloadend;
		else request.onreadystatechange = function handleLoad() {
			if (!request || request.readyState !== 4) return;
			if (request.status === 0 && !(request.responseURL && request.responseURL.startsWith("file:"))) return;
			setTimeout(onloadend);
		};
		request.onabort = function handleAbort() {
			if (!request) return;
			reject(new AxiosError$1("Request aborted", AxiosError$1.ECONNABORTED, config, request));
			done();
			request = null;
		};
		request.onerror = function handleError(event) {
			const err = new AxiosError$1(event && event.message ? event.message : "Network Error", AxiosError$1.ERR_NETWORK, config, request);
			err.event = event || null;
			reject(err);
			done();
			request = null;
		};
		request.ontimeout = function handleTimeout() {
			let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
			const transitional = _config.transitional || transitional_default;
			if (_config.timeoutErrorMessage) timeoutErrorMessage = _config.timeoutErrorMessage;
			reject(new AxiosError$1(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED, config, request));
			done();
			request = null;
		};
		requestData === void 0 && requestHeaders.setContentType(null);
		if ("setRequestHeader" in request) utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
			request.setRequestHeader(key, val);
		});
		if (!utils_default.isUndefined(_config.withCredentials)) request.withCredentials = !!_config.withCredentials;
		if (responseType && responseType !== "json") request.responseType = _config.responseType;
		if (onDownloadProgress) {
			[downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
			request.addEventListener("progress", downloadThrottled);
		}
		if (onUploadProgress && request.upload) {
			[uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
			request.upload.addEventListener("progress", uploadThrottled);
			request.upload.addEventListener("loadend", flushUpload);
		}
		if (_config.cancelToken || _config.signal) {
			onCanceled = (cancel) => {
				if (!request) return;
				reject(!cancel || cancel.type ? new CanceledError$1(null, config, request) : cancel);
				request.abort();
				done();
				request = null;
			};
			_config.cancelToken && _config.cancelToken.subscribe(onCanceled);
			if (_config.signal) _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
		}
		const protocol = parseProtocol(_config.url);
		if (protocol && !platform_default.protocols.includes(protocol)) {
			reject(new AxiosError$1("Unsupported protocol " + protocol + ":", AxiosError$1.ERR_BAD_REQUEST, config));
			return;
		}
		request.send(requestData || null);
	});
};
//#endregion
//#region node_modules/axios/lib/helpers/composeSignals.js
var composeSignals = (signals, timeout) => {
	const { length } = signals = signals ? signals.filter(Boolean) : [];
	if (timeout || length) {
		let controller = new AbortController();
		let aborted;
		const onabort = function(reason) {
			if (!aborted) {
				aborted = true;
				unsubscribe();
				const err = reason instanceof Error ? reason : this.reason;
				controller.abort(err instanceof AxiosError$1 ? err : new CanceledError$1(err instanceof Error ? err.message : err));
			}
		};
		let timer = timeout && setTimeout(() => {
			timer = null;
			onabort(new AxiosError$1(`timeout of ${timeout}ms exceeded`, AxiosError$1.ETIMEDOUT));
		}, timeout);
		const unsubscribe = () => {
			if (signals) {
				timer && clearTimeout(timer);
				timer = null;
				signals.forEach((signal) => {
					signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener("abort", onabort);
				});
				signals = null;
			}
		};
		signals.forEach((signal) => signal.addEventListener("abort", onabort));
		const { signal } = controller;
		signal.unsubscribe = () => utils_default.asap(unsubscribe);
		return signal;
	}
};
//#endregion
//#region node_modules/axios/lib/helpers/trackStream.js
var streamChunk = function* (chunk, chunkSize) {
	let len = chunk.byteLength;
	if (!chunkSize || len < chunkSize) {
		yield chunk;
		return;
	}
	let pos = 0;
	let end;
	while (pos < len) {
		end = pos + chunkSize;
		yield chunk.slice(pos, end);
		pos = end;
	}
};
var readBytes = async function* (iterable, chunkSize) {
	for await (const chunk of readStream(iterable)) yield* streamChunk(chunk, chunkSize);
};
var readStream = async function* (stream) {
	if (stream[Symbol.asyncIterator]) {
		yield* stream;
		return;
	}
	const reader = stream.getReader();
	try {
		for (;;) {
			const { done, value } = await reader.read();
			if (done) break;
			yield value;
		}
	} finally {
		await reader.cancel();
	}
};
var trackStream = (stream, chunkSize, onProgress, onFinish) => {
	const iterator = readBytes(stream, chunkSize);
	let bytes = 0;
	let done;
	let _onFinish = (e) => {
		if (!done) {
			done = true;
			onFinish && onFinish(e);
		}
	};
	return new ReadableStream({
		async pull(controller) {
			try {
				const { done, value } = await iterator.next();
				if (done) {
					_onFinish();
					controller.close();
					return;
				}
				let len = value.byteLength;
				if (onProgress) onProgress(bytes += len);
				controller.enqueue(new Uint8Array(value));
			} catch (err) {
				_onFinish(err);
				throw err;
			}
		},
		cancel(reason) {
			_onFinish(reason);
			return iterator.return();
		}
	}, { highWaterMark: 2 });
};
//#endregion
//#region node_modules/axios/lib/helpers/estimateDataURLDecodedBytes.js
/**
* Estimate decoded byte length of a data:// URL *without* allocating large buffers.
* - For base64: compute exact decoded size using length and padding;
*               handle %XX at the character-count level (no string allocation).
* - For non-base64: use UTF-8 byteLength of the encoded body as a safe upper bound.
*
* @param {string} url
* @returns {number}
*/
function estimateDataURLDecodedBytes(url) {
	if (!url || typeof url !== "string") return 0;
	if (!url.startsWith("data:")) return 0;
	const comma = url.indexOf(",");
	if (comma < 0) return 0;
	const meta = url.slice(5, comma);
	const body = url.slice(comma + 1);
	if (/;base64/i.test(meta)) {
		let effectiveLen = body.length;
		const len = body.length;
		for (let i = 0; i < len; i++) if (body.charCodeAt(i) === 37 && i + 2 < len) {
			const a = body.charCodeAt(i + 1);
			const b = body.charCodeAt(i + 2);
			if ((a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102) && (b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102)) {
				effectiveLen -= 2;
				i += 2;
			}
		}
		let pad = 0;
		let idx = len - 1;
		const tailIsPct3D = (j) => j >= 2 && body.charCodeAt(j - 2) === 37 && body.charCodeAt(j - 1) === 51 && (body.charCodeAt(j) === 68 || body.charCodeAt(j) === 100);
		if (idx >= 0) {
			if (body.charCodeAt(idx) === 61) {
				pad++;
				idx--;
			} else if (tailIsPct3D(idx)) {
				pad++;
				idx -= 3;
			}
		}
		if (pad === 1 && idx >= 0) {
			if (body.charCodeAt(idx) === 61) pad++;
			else if (tailIsPct3D(idx)) pad++;
		}
		const bytes = Math.floor(effectiveLen / 4) * 3 - (pad || 0);
		return bytes > 0 ? bytes : 0;
	}
	if (typeof Buffer !== "undefined" && typeof Buffer.byteLength === "function") return Buffer.byteLength(body, "utf8");
	let bytes = 0;
	for (let i = 0, len = body.length; i < len; i++) {
		const c = body.charCodeAt(i);
		if (c < 128) bytes += 1;
		else if (c < 2048) bytes += 2;
		else if (c >= 55296 && c <= 56319 && i + 1 < len) {
			const next = body.charCodeAt(i + 1);
			if (next >= 56320 && next <= 57343) {
				bytes += 4;
				i++;
			} else bytes += 3;
		} else bytes += 3;
	}
	return bytes;
}
//#endregion
//#region node_modules/axios/lib/env/data.js
var VERSION$1 = "1.16.0";
//#endregion
//#region node_modules/axios/lib/adapters/fetch.js
var DEFAULT_CHUNK_SIZE = 64 * 1024;
var { isFunction } = utils_default;
var test = (fn, ...args) => {
	try {
		return !!fn(...args);
	} catch (e) {
		return false;
	}
};
var factory = (env) => {
	const globalObject = utils_default.global ?? globalThis;
	const { ReadableStream, TextEncoder } = globalObject;
	env = utils_default.merge.call({ skipUndefined: true }, {
		Request: globalObject.Request,
		Response: globalObject.Response
	}, env);
	const { fetch: envFetch, Request, Response } = env;
	const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === "function";
	const isRequestSupported = isFunction(Request);
	const isResponseSupported = isFunction(Response);
	if (!isFetchSupported) return false;
	const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream);
	const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Request(str).arrayBuffer()));
	const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
		let duplexAccessed = false;
		const request = new Request(platform_default.origin, {
			body: new ReadableStream(),
			method: "POST",
			get duplex() {
				duplexAccessed = true;
				return "half";
			}
		});
		const hasContentType = request.headers.has("Content-Type");
		if (request.body != null) request.body.cancel();
		return duplexAccessed && !hasContentType;
	});
	const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils_default.isReadableStream(new Response("").body));
	const resolvers = { stream: supportsResponseStream && ((res) => res.body) };
	isFetchSupported && [
		"text",
		"arrayBuffer",
		"blob",
		"formData",
		"stream"
	].forEach((type) => {
		!resolvers[type] && (resolvers[type] = (res, config) => {
			let method = res && res[type];
			if (method) return method.call(res);
			throw new AxiosError$1(`Response type '${type}' is not supported`, AxiosError$1.ERR_NOT_SUPPORT, config);
		});
	});
	const getBodyLength = async (body) => {
		if (body == null) return 0;
		if (utils_default.isBlob(body)) return body.size;
		if (utils_default.isSpecCompliantForm(body)) return (await new Request(platform_default.origin, {
			method: "POST",
			body
		}).arrayBuffer()).byteLength;
		if (utils_default.isArrayBufferView(body) || utils_default.isArrayBuffer(body)) return body.byteLength;
		if (utils_default.isURLSearchParams(body)) body = body + "";
		if (utils_default.isString(body)) return (await encodeText(body)).byteLength;
	};
	const resolveBodyLength = async (headers, body) => {
		const length = utils_default.toFiniteNumber(headers.getContentLength());
		return length == null ? getBodyLength(body) : length;
	};
	return async (config) => {
		let { url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, withCredentials = "same-origin", fetchOptions, maxContentLength, maxBodyLength } = resolveConfig_default(config);
		const hasMaxContentLength = utils_default.isNumber(maxContentLength) && maxContentLength > -1;
		const hasMaxBodyLength = utils_default.isNumber(maxBodyLength) && maxBodyLength > -1;
		let _fetch = envFetch || fetch;
		responseType = responseType ? (responseType + "").toLowerCase() : "text";
		let composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
		let request = null;
		const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
			composedSignal.unsubscribe();
		});
		let requestContentLength;
		try {
			if (hasMaxContentLength && typeof url === "string" && url.startsWith("data:")) {
				if (estimateDataURLDecodedBytes(url) > maxContentLength) throw new AxiosError$1("maxContentLength size of " + maxContentLength + " exceeded", AxiosError$1.ERR_BAD_RESPONSE, config, request);
			}
			if (hasMaxBodyLength && method !== "get" && method !== "head") {
				const outboundLength = await resolveBodyLength(headers, data);
				if (typeof outboundLength === "number" && isFinite(outboundLength) && outboundLength > maxBodyLength) throw new AxiosError$1("Request body larger than maxBodyLength limit", AxiosError$1.ERR_BAD_REQUEST, config, request);
			}
			if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
				let _request = new Request(url, {
					method: "POST",
					body: data,
					duplex: "half"
				});
				let contentTypeHeader;
				if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) headers.setContentType(contentTypeHeader);
				if (_request.body) {
					const [onProgress, flush] = progressEventDecorator(requestContentLength, progressEventReducer(asyncDecorator(onUploadProgress)));
					data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
				}
			}
			if (!utils_default.isString(withCredentials)) withCredentials = withCredentials ? "include" : "omit";
			const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
			if (utils_default.isFormData(data)) {
				const contentType = headers.getContentType();
				if (contentType && /^multipart\/form-data/i.test(contentType) && !/boundary=/i.test(contentType)) headers.delete("content-type");
			}
			headers.set("User-Agent", "axios/" + VERSION$1, false);
			const resolvedOptions = {
				...fetchOptions,
				signal: composedSignal,
				method: method.toUpperCase(),
				headers: headers.normalize().toJSON(),
				body: data,
				duplex: "half",
				credentials: isCredentialsSupported ? withCredentials : void 0
			};
			request = isRequestSupported && new Request(url, resolvedOptions);
			let response = await (isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions));
			if (hasMaxContentLength) {
				const declaredLength = utils_default.toFiniteNumber(response.headers.get("content-length"));
				if (declaredLength != null && declaredLength > maxContentLength) throw new AxiosError$1("maxContentLength size of " + maxContentLength + " exceeded", AxiosError$1.ERR_BAD_RESPONSE, config, request);
			}
			const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
			if (supportsResponseStream && response.body && (onDownloadProgress || hasMaxContentLength || isStreamResponse && unsubscribe)) {
				const options = {};
				[
					"status",
					"statusText",
					"headers"
				].forEach((prop) => {
					options[prop] = response[prop];
				});
				const responseContentLength = utils_default.toFiniteNumber(response.headers.get("content-length"));
				const [onProgress, flush] = onDownloadProgress && progressEventDecorator(responseContentLength, progressEventReducer(asyncDecorator(onDownloadProgress), true)) || [];
				let bytesRead = 0;
				const onChunkProgress = (loadedBytes) => {
					if (hasMaxContentLength) {
						bytesRead = loadedBytes;
						if (bytesRead > maxContentLength) throw new AxiosError$1("maxContentLength size of " + maxContentLength + " exceeded", AxiosError$1.ERR_BAD_RESPONSE, config, request);
					}
					onProgress && onProgress(loadedBytes);
				};
				response = new Response(trackStream(response.body, DEFAULT_CHUNK_SIZE, onChunkProgress, () => {
					flush && flush();
					unsubscribe && unsubscribe();
				}), options);
			}
			responseType = responseType || "text";
			let responseData = await resolvers[utils_default.findKey(resolvers, responseType) || "text"](response, config);
			if (hasMaxContentLength && !supportsResponseStream && !isStreamResponse) {
				let materializedSize;
				if (responseData != null) {
					if (typeof responseData.byteLength === "number") materializedSize = responseData.byteLength;
					else if (typeof responseData.size === "number") materializedSize = responseData.size;
					else if (typeof responseData === "string") materializedSize = typeof TextEncoder === "function" ? new TextEncoder().encode(responseData).byteLength : responseData.length;
				}
				if (typeof materializedSize === "number" && materializedSize > maxContentLength) throw new AxiosError$1("maxContentLength size of " + maxContentLength + " exceeded", AxiosError$1.ERR_BAD_RESPONSE, config, request);
			}
			!isStreamResponse && unsubscribe && unsubscribe();
			return await new Promise((resolve, reject) => {
				settle(resolve, reject, {
					data: responseData,
					headers: AxiosHeaders$1.from(response.headers),
					status: response.status,
					statusText: response.statusText,
					config,
					request
				});
			});
		} catch (err) {
			unsubscribe && unsubscribe();
			if (composedSignal && composedSignal.aborted && composedSignal.reason instanceof AxiosError$1) {
				const canceledError = composedSignal.reason;
				canceledError.config = config;
				request && (canceledError.request = request);
				err !== canceledError && (canceledError.cause = err);
				throw canceledError;
			}
			if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) throw Object.assign(new AxiosError$1("Network Error", AxiosError$1.ERR_NETWORK, config, request, err && err.response), { cause: err.cause || err });
			throw AxiosError$1.from(err, err && err.code, config, request, err && err.response);
		}
	};
};
var seedCache = /* @__PURE__ */ new Map();
var getFetch = (config) => {
	let env = config && config.env || {};
	const { fetch, Request, Response } = env;
	const seeds = [
		Request,
		Response,
		fetch
	];
	let i = seeds.length, seed, target, map = seedCache;
	while (i--) {
		seed = seeds[i];
		target = map.get(seed);
		target === void 0 && map.set(seed, target = i ? /* @__PURE__ */ new Map() : factory(env));
		map = target;
	}
	return target;
};
getFetch();
//#endregion
//#region node_modules/axios/lib/adapters/adapters.js
/**
* Known adapters mapping.
* Provides environment-specific adapters for Axios:
* - `http` for Node.js
* - `xhr` for browsers
* - `fetch` for fetch API-based requests
*
* @type {Object<string, Function|Object>}
*/
var knownAdapters = {
	http: null,
	xhr: xhr_default,
	fetch: { get: getFetch }
};
utils_default.forEach(knownAdapters, (fn, value) => {
	if (fn) {
		try {
			Object.defineProperty(fn, "name", {
				__proto__: null,
				value
			});
		} catch (e) {}
		Object.defineProperty(fn, "adapterName", {
			__proto__: null,
			value
		});
	}
});
/**
* Render a rejection reason string for unknown or unsupported adapters
*
* @param {string} reason
* @returns {string}
*/
var renderReason = (reason) => `- ${reason}`;
/**
* Check if the adapter is resolved (function, null, or false)
*
* @param {Function|null|false} adapter
* @returns {boolean}
*/
var isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
/**
* Get the first suitable adapter from the provided list.
* Tries each adapter in order until a supported one is found.
* Throws an AxiosError if no adapter is suitable.
*
* @param {Array<string|Function>|string|Function} adapters - Adapter(s) by name or function.
* @param {Object} config - Axios request configuration
* @throws {AxiosError} If no suitable adapter is available
* @returns {Function} The resolved adapter function
*/
function getAdapter$1(adapters, config) {
	adapters = utils_default.isArray(adapters) ? adapters : [adapters];
	const { length } = adapters;
	let nameOrAdapter;
	let adapter;
	const rejectedReasons = {};
	for (let i = 0; i < length; i++) {
		nameOrAdapter = adapters[i];
		let id;
		adapter = nameOrAdapter;
		if (!isResolvedHandle(nameOrAdapter)) {
			adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
			if (adapter === void 0) throw new AxiosError$1(`Unknown adapter '${id}'`);
		}
		if (adapter && (utils_default.isFunction(adapter) || (adapter = adapter.get(config)))) break;
		rejectedReasons[id || "#" + i] = adapter;
	}
	if (!adapter) {
		const reasons = Object.entries(rejectedReasons).map(([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build"));
		throw new AxiosError$1(`There is no suitable adapter to dispatch the request ` + (length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
	}
	return adapter;
}
/**
* Exports Axios adapters and utility to resolve an adapter
*/
var adapters_default = {
	/**
	* Resolve an adapter from a list of adapter names or functions.
	* @type {Function}
	*/
	getAdapter: getAdapter$1,
	/**
	* Exposes all known adapters
	* @type {Object<string, Function|Object>}
	*/
	adapters: knownAdapters
};
//#endregion
//#region node_modules/axios/lib/core/dispatchRequest.js
/**
* Throws a `CanceledError` if cancellation has been requested.
*
* @param {Object} config The config that is to be used for the request
*
* @returns {void}
*/
function throwIfCancellationRequested(config) {
	if (config.cancelToken) config.cancelToken.throwIfRequested();
	if (config.signal && config.signal.aborted) throw new CanceledError$1(null, config);
}
/**
* Dispatch a request to the server using the configured adapter.
*
* @param {object} config The config that is to be used for the request
*
* @returns {Promise} The Promise to be fulfilled
*/
function dispatchRequest(config) {
	throwIfCancellationRequested(config);
	config.headers = AxiosHeaders$1.from(config.headers);
	config.data = transformData.call(config, config.transformRequest);
	if ([
		"post",
		"put",
		"patch"
	].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
	return adapters_default.getAdapter(config.adapter || defaults.adapter, config)(config).then(function onAdapterResolution(response) {
		throwIfCancellationRequested(config);
		config.response = response;
		try {
			response.data = transformData.call(config, config.transformResponse, response);
		} finally {
			delete config.response;
		}
		response.headers = AxiosHeaders$1.from(response.headers);
		return response;
	}, function onAdapterRejection(reason) {
		if (!isCancel$1(reason)) {
			throwIfCancellationRequested(config);
			if (reason && reason.response) {
				config.response = reason.response;
				try {
					reason.response.data = transformData.call(config, config.transformResponse, reason.response);
				} finally {
					delete config.response;
				}
				reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
			}
		}
		return Promise.reject(reason);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/validator.js
var validators$1 = {};
[
	"object",
	"boolean",
	"number",
	"function",
	"string",
	"symbol"
].forEach((type, i) => {
	validators$1[type] = function validator(thing) {
		return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
	};
});
var deprecatedWarnings = {};
/**
* Transitional option validator
*
* @param {function|boolean?} validator - set to false if the transitional option has been removed
* @param {string?} version - deprecated version / removed since version
* @param {string?} message - some message with additional info
*
* @returns {function}
*/
validators$1.transitional = function transitional(validator, version, message) {
	function formatMessage(opt, desc) {
		return "[Axios v" + VERSION$1 + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
	}
	return (value, opt, opts) => {
		if (validator === false) throw new AxiosError$1(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), AxiosError$1.ERR_DEPRECATED);
		if (version && !deprecatedWarnings[opt]) {
			deprecatedWarnings[opt] = true;
			console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
		}
		return validator ? validator(value, opt, opts) : true;
	};
};
validators$1.spelling = function spelling(correctSpelling) {
	return (value, opt) => {
		console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
		return true;
	};
};
/**
* Assert object's properties type
*
* @param {object} options
* @param {object} schema
* @param {boolean?} allowUnknown
*
* @returns {object}
*/
function assertOptions(options, schema, allowUnknown) {
	if (typeof options !== "object") throw new AxiosError$1("options must be an object", AxiosError$1.ERR_BAD_OPTION_VALUE);
	const keys = Object.keys(options);
	let i = keys.length;
	while (i-- > 0) {
		const opt = keys[i];
		const validator = Object.prototype.hasOwnProperty.call(schema, opt) ? schema[opt] : void 0;
		if (validator) {
			const value = options[opt];
			const result = value === void 0 || validator(value, opt, options);
			if (result !== true) throw new AxiosError$1("option " + opt + " must be " + result, AxiosError$1.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (allowUnknown !== true) throw new AxiosError$1("Unknown option " + opt, AxiosError$1.ERR_BAD_OPTION);
	}
}
var validator_default = {
	assertOptions,
	validators: validators$1
};
//#endregion
//#region node_modules/axios/lib/core/Axios.js
var validators = validator_default.validators;
/**
* Create a new instance of Axios
*
* @param {Object} instanceConfig The default config for the instance
*
* @return {Axios} A new instance of Axios
*/
var Axios$1 = class {
	constructor(instanceConfig) {
		this.defaults = instanceConfig || {};
		this.interceptors = {
			request: new InterceptorManager(),
			response: new InterceptorManager()
		};
	}
	/**
	* Dispatch a request
	*
	* @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
	* @param {?Object} config
	*
	* @returns {Promise} The Promise to be fulfilled
	*/
	async request(configOrUrl, config) {
		try {
			return await this._request(configOrUrl, config);
		} catch (err) {
			if (err instanceof Error) {
				let dummy = {};
				Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = /* @__PURE__ */ new Error();
				const stack = (() => {
					if (!dummy.stack) return "";
					const firstNewlineIndex = dummy.stack.indexOf("\n");
					return firstNewlineIndex === -1 ? "" : dummy.stack.slice(firstNewlineIndex + 1);
				})();
				try {
					if (!err.stack) err.stack = stack;
					else if (stack) {
						const firstNewlineIndex = stack.indexOf("\n");
						const secondNewlineIndex = firstNewlineIndex === -1 ? -1 : stack.indexOf("\n", firstNewlineIndex + 1);
						const stackWithoutTwoTopLines = secondNewlineIndex === -1 ? "" : stack.slice(secondNewlineIndex + 1);
						if (!String(err.stack).endsWith(stackWithoutTwoTopLines)) err.stack += "\n" + stack;
					}
				} catch (e) {}
			}
			throw err;
		}
	}
	_request(configOrUrl, config) {
		if (typeof configOrUrl === "string") {
			config = config || {};
			config.url = configOrUrl;
		} else config = configOrUrl || {};
		config = mergeConfig$1(this.defaults, config);
		const { transitional, paramsSerializer, headers } = config;
		if (transitional !== void 0) validator_default.assertOptions(transitional, {
			silentJSONParsing: validators.transitional(validators.boolean),
			forcedJSONParsing: validators.transitional(validators.boolean),
			clarifyTimeoutError: validators.transitional(validators.boolean),
			legacyInterceptorReqResOrdering: validators.transitional(validators.boolean)
		}, false);
		if (paramsSerializer != null) if (utils_default.isFunction(paramsSerializer)) config.paramsSerializer = { serialize: paramsSerializer };
		else validator_default.assertOptions(paramsSerializer, {
			encode: validators.function,
			serialize: validators.function
		}, true);
		if (config.allowAbsoluteUrls !== void 0) {} else if (this.defaults.allowAbsoluteUrls !== void 0) config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
		else config.allowAbsoluteUrls = true;
		validator_default.assertOptions(config, {
			baseUrl: validators.spelling("baseURL"),
			withXsrfToken: validators.spelling("withXSRFToken")
		}, true);
		config.method = (config.method || this.defaults.method || "get").toLowerCase();
		let contextHeaders = headers && utils_default.merge(headers.common, headers[config.method]);
		headers && utils_default.forEach([
			"delete",
			"get",
			"head",
			"post",
			"put",
			"patch",
			"query",
			"common"
		], (method) => {
			delete headers[method];
		});
		config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
		const requestInterceptorChain = [];
		let synchronousRequestInterceptors = true;
		this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
			if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
			synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
			const transitional = config.transitional || transitional_default;
			if (transitional && transitional.legacyInterceptorReqResOrdering) requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
			else requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
		});
		const responseInterceptorChain = [];
		this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
			responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
		});
		let promise;
		let i = 0;
		let len;
		if (!synchronousRequestInterceptors) {
			const chain = [dispatchRequest.bind(this), void 0];
			chain.unshift(...requestInterceptorChain);
			chain.push(...responseInterceptorChain);
			len = chain.length;
			promise = Promise.resolve(config);
			while (i < len) promise = promise.then(chain[i++], chain[i++]);
			return promise;
		}
		len = requestInterceptorChain.length;
		let newConfig = config;
		while (i < len) {
			const onFulfilled = requestInterceptorChain[i++];
			const onRejected = requestInterceptorChain[i++];
			try {
				newConfig = onFulfilled(newConfig);
			} catch (error) {
				onRejected.call(this, error);
				break;
			}
		}
		try {
			promise = dispatchRequest.call(this, newConfig);
		} catch (error) {
			return Promise.reject(error);
		}
		i = 0;
		len = responseInterceptorChain.length;
		while (i < len) promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
		return promise;
	}
	getUri(config) {
		config = mergeConfig$1(this.defaults, config);
		return buildURL(buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls), config.params, config.paramsSerializer);
	}
};
utils_default.forEach([
	"delete",
	"get",
	"head",
	"options"
], function forEachMethodNoData(method) {
	Axios$1.prototype[method] = function(url, config) {
		return this.request(mergeConfig$1(config || {}, {
			method,
			url,
			data: (config || {}).data
		}));
	};
});
utils_default.forEach([
	"post",
	"put",
	"patch",
	"query"
], function forEachMethodWithData(method) {
	function generateHTTPMethod(isForm) {
		return function httpMethod(url, data, config) {
			return this.request(mergeConfig$1(config || {}, {
				method,
				headers: isForm ? { "Content-Type": "multipart/form-data" } : {},
				url,
				data
			}));
		};
	}
	Axios$1.prototype[method] = generateHTTPMethod();
	if (method !== "query") Axios$1.prototype[method + "Form"] = generateHTTPMethod(true);
});
//#endregion
//#region node_modules/axios/lib/cancel/CancelToken.js
/**
* A `CancelToken` is an object that can be used to request cancellation of an operation.
*
* @param {Function} executor The executor function.
*
* @returns {CancelToken}
*/
var CancelToken$1 = class CancelToken$1 {
	constructor(executor) {
		if (typeof executor !== "function") throw new TypeError("executor must be a function.");
		let resolvePromise;
		this.promise = new Promise(function promiseExecutor(resolve) {
			resolvePromise = resolve;
		});
		const token = this;
		this.promise.then((cancel) => {
			if (!token._listeners) return;
			let i = token._listeners.length;
			while (i-- > 0) token._listeners[i](cancel);
			token._listeners = null;
		});
		this.promise.then = (onfulfilled) => {
			let _resolve;
			const promise = new Promise((resolve) => {
				token.subscribe(resolve);
				_resolve = resolve;
			}).then(onfulfilled);
			promise.cancel = function reject() {
				token.unsubscribe(_resolve);
			};
			return promise;
		};
		executor(function cancel(message, config, request) {
			if (token.reason) return;
			token.reason = new CanceledError$1(message, config, request);
			resolvePromise(token.reason);
		});
	}
	/**
	* Throws a `CanceledError` if cancellation has been requested.
	*/
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	/**
	* Subscribe to the cancel signal
	*/
	subscribe(listener) {
		if (this.reason) {
			listener(this.reason);
			return;
		}
		if (this._listeners) this._listeners.push(listener);
		else this._listeners = [listener];
	}
	/**
	* Unsubscribe from the cancel signal
	*/
	unsubscribe(listener) {
		if (!this._listeners) return;
		const index = this._listeners.indexOf(listener);
		if (index !== -1) this._listeners.splice(index, 1);
	}
	toAbortSignal() {
		const controller = new AbortController();
		const abort = (err) => {
			controller.abort(err);
		};
		this.subscribe(abort);
		controller.signal.unsubscribe = () => this.unsubscribe(abort);
		return controller.signal;
	}
	/**
	* Returns an object that contains a new `CancelToken` and a function that, when called,
	* cancels the `CancelToken`.
	*/
	static source() {
		let cancel;
		return {
			token: new CancelToken$1(function executor(c) {
				cancel = c;
			}),
			cancel
		};
	}
};
//#endregion
//#region node_modules/axios/lib/helpers/spread.js
/**
* Syntactic sugar for invoking a function and expanding an array for arguments.
*
* Common use case would be to use `Function.prototype.apply`.
*
*  ```js
*  function f(x, y, z) {}
*  const args = [1, 2, 3];
*  f.apply(null, args);
*  ```
*
* With `spread` this example can be re-written.
*
*  ```js
*  spread(function(x, y, z) {})([1, 2, 3]);
*  ```
*
* @param {Function} callback
*
* @returns {Function}
*/
function spread$1(callback) {
	return function wrap(arr) {
		return callback.apply(null, arr);
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/isAxiosError.js
/**
* Determines whether the payload is an error thrown by Axios
*
* @param {*} payload The value to test
*
* @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
*/
function isAxiosError$1(payload) {
	return utils_default.isObject(payload) && payload.isAxiosError === true;
}
//#endregion
//#region node_modules/axios/lib/helpers/HttpStatusCode.js
var HttpStatusCode$1 = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
	WebServerIsDown: 521,
	ConnectionTimedOut: 522,
	OriginIsUnreachable: 523,
	TimeoutOccurred: 524,
	SslHandshakeFailed: 525,
	InvalidSslCertificate: 526
};
Object.entries(HttpStatusCode$1).forEach(([key, value]) => {
	HttpStatusCode$1[value] = key;
});
//#endregion
//#region node_modules/axios/lib/axios.js
/**
* Create an instance of Axios
*
* @param {Object} defaultConfig The default config for the instance
*
* @returns {Axios} A new instance of Axios
*/
function createInstance(defaultConfig) {
	const context = new Axios$1(defaultConfig);
	const instance = bind(Axios$1.prototype.request, context);
	utils_default.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
	utils_default.extend(instance, context, null, { allOwnKeys: true });
	instance.create = function create(instanceConfig) {
		return createInstance(mergeConfig$1(defaultConfig, instanceConfig));
	};
	return instance;
}
var axios = createInstance(defaults);
axios.Axios = Axios$1;
axios.CanceledError = CanceledError$1;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel$1;
axios.VERSION = VERSION$1;
axios.toFormData = toFormData$1;
axios.AxiosError = AxiosError$1;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
	return Promise.all(promises);
};
axios.spread = spread$1;
axios.isAxiosError = isAxiosError$1;
axios.mergeConfig = mergeConfig$1;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = (thing) => formDataToJSON(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters_default.getAdapter;
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
//#endregion
//#region node_modules/axios/index.js
var { Axios, AxiosError, CanceledError, isCancel, CancelToken, VERSION, all, Cancel, isAxiosError, spread, toFormData, AxiosHeaders, HttpStatusCode, formToJSON, getAdapter, mergeConfig, create } = axios;
//#endregion
//#region node_modules/@progress/kendo-react-upload/utils/stateUtils.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var d$4 = (s) => (s || []).map((t) => ({ ...t })), e$5 = (s, t) => {
	t.push(s);
}, p$4 = (s, t) => {
	s.forEach((o) => e$5(o, t));
}, l$3 = (s) => {
	const t = {};
	return s.forEach((o) => {
		t[o.uid] ? t[o.uid].push(o) : t[o.uid] = [o];
	}), t;
}, i$3 = (s) => {
	const t = {};
	return r$6(s, (o, a) => {
		let c = !0;
		o.forEach((n) => {
			(n.status !== n$2.Selected || n.validationErrors && n.validationErrors.length > 0) && (c = !1);
		}), c && (t[a] = o);
	}), t;
}, h$2 = (s, t) => {
	r$6(s, (o) => {
		o.forEach((a) => {
			a.status = t;
		});
	});
}, f$2 = (s) => {
	const t = [];
	return r$6(s, (o) => {
		t.push.apply(t, o);
	}), t;
}, r$6 = (s, t) => {
	Object.keys(s).forEach((o) => {
		t(s[o], o);
	});
}, F$2 = {
	copyState: d$4,
	addMany: p$4,
	add: e$5,
	groupFilesByUid: l$3,
	filesForUpload: i$3,
	setFilesStatus: h$2,
	flatFileGroup: f$2,
	groupForEach: r$6
};
//#endregion
//#region node_modules/@progress/kendo-react-upload/utils/connectionUtils.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var r$5 = (t, e) => {
	Object.keys(e).forEach((o) => {
		t.append(o, e[o]);
	});
}, p$3 = (t, e, o) => {
	const n = new FormData();
	return r$5(n, o), t.forEach((a) => {
		const s = a.getRawFile ? a.getRawFile() : "";
		s ? n.append(e, s, a.name) : n.append(e, s);
	}), n;
}, c$3 = (t, e, o) => {
	const n = new FormData();
	return r$5(n, o), t.forEach((a) => {
		n.append(e, a);
	}), n;
}, l$2 = (t, e) => ({
	headers: t,
	responseType: e.responseType,
	withCredentials: e.withCredentials
}), u$2 = (t) => {
	const e = {};
	return Object.keys(t).forEach((o) => {
		e[o] = t[o];
	}), e;
}, d$3 = (t) => {
	const { data: e, config: o, ...n } = t;
	return {
		response: e,
		...n
	};
}, i$2 = {
	populateClientFormData: r$5,
	populateUploadFormData: p$3,
	populateRemoveFormData: c$3,
	populateRequestOptions: l$2,
	cloneRequestHeaders: u$2,
	convertAxiosResponse: d$3
};
//#endregion
//#region node_modules/@progress/kendo-react-upload/utils/validationUtils.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var r$4 = "invalidMaxFileSize", t$1 = "invalidMinFileSize", d$2 = "invalidFileExtension", E = (i, o) => {
	o.length > 0 && o.indexOf((i.extension || "").toLowerCase()) < 0 && (i.validationErrors = i.validationErrors || [], i.validationErrors.indexOf(d$2) < 0 && i.validationErrors.push(d$2));
}, l$1 = (i, o, n) => {
	o !== 0 && (i.size || 0) < o && (i.validationErrors = i.validationErrors || [], i.validationErrors.indexOf(t$1) < 0 && i.validationErrors.push(t$1)), n !== 0 && (i.size || 0) > n && (i.validationErrors = i.validationErrors || [], i.validationErrors.indexOf(r$4) < 0 && i.validationErrors.push(r$4));
}, v$1 = (i) => i.map((n) => (n.substring(0, 1) === "." ? n : "." + n).toLowerCase()), x$1 = (i, o) => {
	const n = v$1(o.allowedExtensions || []), s = o.maxFileSize || 0, e = o.minFileSize || 0;
	let a;
	for (a = 0; a < i.length; a++) E(i[a], n), l$1(i[a], e, s);
}, c$2 = { validateFiles: x$1 };
//#endregion
//#region node_modules/@progress/kendo-react-upload/package-metadata.mjs
/**
* @hidden
*/
var packageMetadata$1 = Object.freeze({
	name: "@progress/kendo-react-upload",
	productName: "KendoReact",
	productCode: "KENDOUIREACT",
	productCodes: ["KENDOUIREACT"],
	publishDate: 1777886276,
	version: "14.4.1",
	licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
});
//#endregion
//#region node_modules/@progress/kendo-react-upload/Upload.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var g$1 = class g extends import_react.Component {
	constructor(u) {
		super(u), this._httpSubscriptions = {}, this._lastEmittedState = null, this._uploadNavigation = null, this.showLicenseWatermark = !1, this.focus = () => {
			this._uploadNavigation && this._uploadNavigation.focus();
		}, this.triggerUpload = () => {
			this.onUpload();
		}, this.uploadFiles = (i) => {
			const t = this.async;
			F$2.setFilesStatus(i, n$2.Uploading), F$2.groupForEach(i, (s, a) => {
				const n = i$2.cloneRequestHeaders(t.saveHeaders || {}), l = {
					target: this,
					files: s,
					headers: n,
					additionalData: {}
				};
				this.props.onBeforeUpload && this.props.onBeforeUpload.call(void 0, l);
				const d = i$2.populateRequestOptions(l.headers, this.async), m = i$2.populateUploadFormData(s, t.saveField, l.additionalData);
				if (this.isCustomSave) this.props.saveUrl(s, {
					formData: m,
					requestOptions: d
				}, this.onUploadProgress).then((c) => this.onUploadSuccess(c.uid)).catch((c) => this.onUploadError(c.uid));
				else {
					const c = axios.CancelToken.source();
					this._httpSubscriptions[a] = c, axios({
						method: t.saveMethod,
						url: t.saveUrl,
						data: m,
						cancelToken: c.token,
						...d,
						onUploadProgress: (h) => this.onUploadProgress(a, h)
					}).then((h) => this.onUploadSuccess(a, h)).catch((h) => this.onUploadError(a, h));
				}
			});
		}, this.removeFiles = (i) => {
			const t = this.async;
			F$2.groupForEach(i, (s, a) => {
				const n = i$2.cloneRequestHeaders(t.removeHeaders || {}), l = {
					target: this,
					files: s,
					headers: n,
					additionalData: {}
				};
				this.props.onBeforeRemove && this.props.onBeforeRemove.call(void 0, l);
				const d = s.map((h) => h.name), m = i$2.populateRequestOptions(l.headers, this.async), c = i$2.populateRemoveFormData(d, t.removeField, l.additionalData);
				this.isCustomRemove ? this.props.removeUrl(s, {
					formData: c,
					requestOptions: m
				}).then((h) => this.onRemoveSuccess(h.uid)).catch((h) => this.onRemoveError(h.uid)) : axios({
					method: t.removeMethod,
					url: t.removeUrl,
					data: c,
					...m
				}).then((h) => this.onRemoveSuccess(a, h)).catch((h) => this.onRemoveError(a, h));
			});
		}, this.onUpload = () => {
			const i = this.fileStateCopy, t = F$2.groupFilesByUid(i), s = F$2.filesForUpload(t);
			this.uploadFiles(s);
			const a = () => {
				if (this.props.onStatusChange) {
					const n = {
						target: this,
						newState: i,
						affectedFiles: F$2.flatFileGroup(s)
					};
					this.props.onStatusChange.call(void 0, n);
				}
			};
			this.isControlled ? a() : this.setState({ files: i }, a);
		}, this.onAdd = (i) => {
			let t = v$3.getAllFileInfo(i), s;
			if (t = v$3.assignGuidToFiles(t, this.async.batch), c$2.validateFiles(t, this.props.restrictions), this.props.multiple ? s = this.fileStateCopy : s = [], F$2.addMany(t, s), this.async.autoUpload) {
				const n = F$2.groupFilesByUid(s);
				this.uploadFiles(F$2.filesForUpload(n));
			}
			const a = () => {
				if (this.props.onAdd) {
					const n = {
						target: this,
						newState: s,
						affectedFiles: t
					};
					this.props.onAdd.call(void 0, n);
				}
			};
			this.isControlled ? a() : this.setState({ files: s }, a);
		}, this.onUploadProgress = (i, t) => {
			const s = Math.round(100 * t.loaded / (t.total || 0)) || 0, a = () => {
				if (this.props.onProgress) {
					const n = this.fileStateCopy, o = n.filter((d) => d.uid === i);
					this.setFilesProgress(o, s), this._lastEmittedState = n;
					const l = {
						target: this,
						newState: n,
						affectedFiles: o
					};
					this.props.onProgress.call(void 0, l);
				}
			};
			this.isControlled ? a() : this.setState((n) => {
				const o = n.files, l = o.filter((d) => d.uid === i);
				if (this.setFilesProgress(l, s), !!l.length) return { files: o };
			}, a);
		}, this.onUploadSuccess = (i, t) => {
			const s = this.fileStateCopy, a = s.filter((o) => o.uid === i);
			a.forEach((o) => {
				o.status = n$2.Uploaded, o.progress = 100;
			}), this._lastEmittedState = s, delete this._httpSubscriptions[i];
			const n = () => {
				if (this.props.onStatusChange) {
					const o = {
						target: this,
						newState: s,
						affectedFiles: a,
						response: t ? i$2.convertAxiosResponse(t) : void 0
					};
					this.props.onStatusChange.call(void 0, o);
				}
			};
			this.isControlled ? n() : this.setState({ files: s }, n);
		}, this.onUploadError = (i, t) => {
			const s = this.fileStateCopy, a = s.filter((o) => o.uid === i);
			if (a.forEach((o) => {
				o.status = n$2.UploadFailed;
			}), this._lastEmittedState = s, delete this._httpSubscriptions[i], !a.length) return;
			const n = () => {
				if (this.props.onStatusChange) {
					const o = {
						target: this,
						newState: s,
						affectedFiles: a,
						response: t ? i$2.convertAxiosResponse(t) : void 0
					};
					this.props.onStatusChange.call(void 0, o);
				}
			};
			this.isControlled ? n() : this.setState({ files: s }, n);
		}, this.onRemove = (i) => {
			const t = this.fileStateCopy, s = t.filter((o) => o.uid === i), a = t.filter((o) => o.uid !== i);
			if ([
				n$2.Uploaded,
				n$2.Initial,
				n$2.RemoveFailed
			].indexOf(s[0].status) > -1) {
				const o = { [i]: s };
				F$2.setFilesStatus(o, n$2.Removing), this.removeFiles(o);
				const l = () => {
					if (this.props.onStatusChange) {
						const d = {
							target: this,
							newState: t,
							affectedFiles: s
						};
						this.props.onStatusChange.call(void 0, d);
					}
				};
				this.isControlled ? l() : this.setState({ files: t }, l);
			} else {
				const o = () => {
					if (this.props.onRemove) {
						const l = {
							target: this,
							newState: a,
							affectedFiles: s
						};
						this.props.onRemove.call(void 0, l);
					}
				};
				this.isControlled ? o() : this.setState({ files: a }, o);
			}
		}, this.onRemoveSuccess = (i, t) => {
			const s = this.fileStateCopy, a = s.filter((l) => l.uid === i), n = s.filter((l) => l.uid !== i);
			this._lastEmittedState = n;
			const o = () => {
				if (this.props.onRemove) {
					const l = {
						target: this,
						newState: n,
						affectedFiles: a,
						response: t ? i$2.convertAxiosResponse(t) : void 0
					};
					this.props.onRemove.call(void 0, l);
				}
			};
			this.isControlled ? o() : this.setState({ files: n }, o);
		}, this.onRemoveError = (i, t) => {
			const s = this.fileStateCopy, a = s.filter((o) => o.uid === i);
			a.forEach((o) => {
				o.status = n$2.RemoveFailed;
			}), this._lastEmittedState = s;
			const n = () => {
				if (this.props.onStatusChange) {
					const o = {
						target: this,
						newState: s,
						affectedFiles: a,
						response: t ? i$2.convertAxiosResponse(t) : void 0
					};
					this.props.onStatusChange.call(void 0, o);
				}
			};
			this.isControlled ? n() : this.setState({ files: s }, n);
		}, this.onRetry = (i) => {
			const t = this.fileStateCopy, s = F$2.groupFilesByUid(t.filter((n) => n.uid === i));
			F$2.setFilesStatus(s, n$2.Uploading), this.uploadFiles(s);
			const a = () => {
				if (this.props.onStatusChange) {
					const n = {
						target: this,
						newState: t,
						affectedFiles: F$2.flatFileGroup(s)
					};
					this.props.onStatusChange.call(void 0, n);
				}
			};
			this.isControlled ? a() : this.setState({ files: t }, a);
		}, this.onCancel = (i) => {
			const t = this.fileStateCopy, s = t.filter((o) => o.uid !== i), a = t.filter((o) => o.uid === i);
			if (this._httpSubscriptions[i] && (this._httpSubscriptions[i].cancel(), delete this._httpSubscriptions[i]), this.props.onCancel) {
				const o = {
					target: this,
					uid: i
				};
				this.props.onCancel.call(void 0, o);
			}
			const n = () => {
				if (this.props.onRemove) {
					const o = {
						target: this,
						newState: s,
						affectedFiles: a
					};
					this.props.onRemove.call(void 0, o);
				}
			};
			this.isControlled ? n() : this.setState({ files: s }, n);
		}, this.onClear = () => {
			if (!this.files.length) return;
			Object.keys(this._httpSubscriptions).forEach((t) => {
				this._httpSubscriptions[t].cancel();
			}), this._httpSubscriptions = {};
			const i = () => {
				if (this.props.onRemove) {
					const t = {
						target: this,
						newState: [],
						affectedFiles: this.fileStateCopy
					};
					this.props.onRemove.call(void 0, t);
				}
			};
			this.isControlled ? i() : this.setState({ files: [] }, i);
		}, this.showLicenseWatermark = !_$1(packageMetadata$1, { component: "Upload" }), this.licenseMessage = v$11(packageMetadata$1), this.state = { files: u.defaultFiles || [] };
	}
	get async() {
		const { autoUpload: u, batch: i, removeField: t, removeHeaders: s, removeMethod: a, removeUrl: n, responseType: o, saveField: l, saveHeaders: d, saveMethod: m, saveUrl: c, withCredentials: h } = this.props;
		return {
			autoUpload: u,
			batch: i,
			removeField: t,
			removeHeaders: s,
			removeMethod: a,
			removeUrl: n,
			responseType: o,
			saveField: l,
			saveHeaders: d,
			saveMethod: m,
			saveUrl: c,
			withCredentials: h
		};
	}
	get files() {
		return (this.isControlled ? this.props.files : this.state.files) || [];
	}
	get isControlled() {
		return !this.props.defaultFiles;
	}
	get isCustomSave() {
		return this.props.saveUrl && typeof this.props.saveUrl == "function";
	}
	get isCustomRemove() {
		return this.props.removeUrl && typeof this.props.removeUrl == "function";
	}
	get fileStateCopy() {
		return this._lastEmittedState ? F$2.copyState(this._lastEmittedState) : this.isControlled ? F$2.copyState(this.props.files) : F$2.copyState(this.state.files);
	}
	/**
	* @hidden
	*/
	componentDidUpdate() {
		this._lastEmittedState = null;
	}
	/**
	* @hidden
	*/
	get actionElement() {
		if (this._uploadNavigation) return this._uploadNavigation.actionElement;
	}
	/**
	* @hidden
	*/
	setFilesProgress(u, i) {
		u.forEach((t) => {
			t.progress = i;
		});
	}
	/**
	* @hidden
	*/
	render() {
		var F;
		const { showFileList: u, onAdd: i, onRemove: t, onCancel: s, autoUpload: a, showActionButtons: n, actionsLayout: o, tabIndex: l, disabled: d, ...m } = this.props, c = F$2.groupFilesByUid(this.files), h = F$2.filesForUpload(c);
		return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(C$3, {
			groupedFiles: c,
			className: this.props.className,
			showFileList: u && !!Object.keys(c).length,
			showActionButtons: n && !a && (!!Object.keys(h).length || !!((F = this.props.defaultFiles) != null && F.length)),
			actionsLayout: o,
			autoUpload: a,
			disabled: d,
			onAdd: this.onAdd,
			onRemove: this.onRemove,
			onClear: this.onClear,
			onUpload: this.onUpload,
			onRetry: this.onRetry,
			onCancel: this.onCancel,
			tabIndex: A$6(l, d),
			ref: (R) => {
				this._uploadNavigation = R;
			},
			...m
		}), this.showLicenseWatermark && /* @__PURE__ */ import_react.createElement(M$5, { message: this.licenseMessage }));
	}
};
g$1.defaultProps = {
	autoUpload: !0,
	batch: !1,
	removeField: "fileNames",
	removeHeaders: {},
	removeMethod: "POST",
	removeUrl: "",
	responseType: "json",
	saveField: "files",
	saveHeaders: {},
	saveMethod: "POST",
	saveUrl: "",
	withCredentials: !0,
	restrictions: {
		allowedExtensions: [],
		maxFileSize: 0,
		minFileSize: 0
	},
	multiple: !0,
	showFileList: !0,
	showActionButtons: !0,
	actionsLayout: "end",
	disabled: !1
}, g$1.propTypes = {
	autoUpload: import_prop_types.default.bool,
	batch: import_prop_types.default.bool,
	withCredentials: import_prop_types.default.bool,
	saveField: import_prop_types.default.string,
	saveHeaders: import_prop_types.default.object,
	saveMethod: import_prop_types.default.string,
	saveUrl: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
	responseType: import_prop_types.default.oneOf([
		"arraybuffer",
		"blob",
		"json",
		"text"
	]),
	removeField: import_prop_types.default.string,
	removeHeaders: import_prop_types.default.object,
	removeMethod: import_prop_types.default.string,
	removeUrl: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
	multiple: import_prop_types.default.bool,
	disabled: import_prop_types.default.bool,
	showFileList: import_prop_types.default.bool,
	showActionButtons: import_prop_types.default.bool,
	actionsLayout: import_prop_types.default.oneOf([
		"start",
		"center",
		"end",
		"stretched"
	]),
	tabIndex: import_prop_types.default.number,
	accept: import_prop_types.default.string,
	listItemUI: import_prop_types.default.oneOfType([
		import_prop_types.default.func,
		import_prop_types.default.string,
		import_prop_types.default.shape({ render: import_prop_types.default.func.isRequired })
	]),
	restrictions: import_prop_types.default.shape({
		allowedExtensions: import_prop_types.default.arrayOf(import_prop_types.default.string),
		maxFileSize: import_prop_types.default.number,
		minFileSize: import_prop_types.default.number
	}),
	files: import_prop_types.default.arrayOf(import_prop_types.default.shape({
		uid: import_prop_types.default.string,
		name: import_prop_types.default.string,
		extension: import_prop_types.default.string,
		size: import_prop_types.default.number,
		validationErrors: import_prop_types.default.arrayOf(import_prop_types.default.string),
		status: import_prop_types.default.oneOf([
			n$2.Initial,
			n$2.RemoveFailed,
			n$2.Removing,
			n$2.Selected,
			n$2.UploadFailed,
			n$2.Uploaded,
			n$2.Uploading
		]),
		progress: import_prop_types.default.number,
		getRawFile: import_prop_types.default.func
	})),
	defaultFiles: import_prop_types.default.arrayOf(import_prop_types.default.shape({
		uid: import_prop_types.default.string,
		name: import_prop_types.default.string,
		extension: import_prop_types.default.string,
		size: import_prop_types.default.number,
		validationErrors: import_prop_types.default.arrayOf(import_prop_types.default.string),
		status: import_prop_types.default.oneOf([
			n$2.Initial,
			n$2.RemoveFailed,
			n$2.Removing,
			n$2.Selected,
			n$2.UploadFailed,
			n$2.Uploaded,
			n$2.Uploading
		]),
		progress: import_prop_types.default.number,
		getRawFile: import_prop_types.default.func
	}))
};
var y$1 = g$1;
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/prompt-box/PromptBoxUploadButton.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var e = import_react.forwardRef(({ onFilesAdd: p, files: o = [], restrictions: u, multiple: i = !0, accept: t, uploadRef: s, onSelectAttachments: a, onRemoveAttachment: d, _registerRemoveCallback: r, ...B }, E) => {
	import_react.useEffect(() => (r && d && r(d), () => {
		r && d && r(void 0);
	}), [d, r]);
	const U = import_react.useCallback((l) => {
		p && p(l), a && a({
			selectedFiles: l.affectedFiles,
			allFiles: l.newState
		});
	}, [p, a]);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(A$5, {
		ref: E,
		...B
	}), /* @__PURE__ */ import_react.createElement(y$1, {
		ref: s,
		files: o,
		onAdd: U,
		autoUpload: !1,
		restrictions: u,
		multiple: i,
		accept: t,
		className: "k-hidden"
	}));
});
e.displayName = "PromptBoxUploadButton";
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/prompt-box/PromptBoxActionButton.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var m = import_react.forwardRef((o, r) => /* @__PURE__ */ import_react.createElement(A$5, {
	ref: r,
	...o
}));
m.displayName = "PromptBoxActionButton";
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/prompt-box/PromptBoxSpeechToTextButton.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var p = import_react.forwardRef((e, o) => /* @__PURE__ */ import_react.createElement(ie, {
	ref: o,
	...e
}));
p.displayName = "PromptBoxSpeechToTextButton";
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/prompt-box/FileBox.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var M = "k-prompt-box", b$1 = 1, C$2 = (e) => "." + e.split(".").pop() || "", F$1 = (e) => {
	if (e == null) return "";
	if (e === 0) return "0 B";
	const l = 1024, s = [
		"B",
		"KB",
		"MB",
		"GB",
		"TB"
	], o = Math.floor(Math.log(e) / Math.log(l));
	return `${parseFloat((e / Math.pow(l, o)).toFixed(2))} ${s[o]}`;
}, O$1 = (e) => e ? typeof e == "function" ? e() : e : null, T$1 = ({ files: e, onRemoveFile: l, header: s }) => {
	const o = i$17(), m = import_react.useRef(null), [p, f] = import_react.useState(!1), [d, g] = import_react.useState(!1), a = import_react.useCallback(() => {
		const t = m.current;
		if (!t) return;
		const { scrollLeft: r, scrollWidth: c, clientWidth: k } = t, v = r === 0, x = r + k >= c - b$1;
		g(!v), f(!x);
	}, []);
	if (import_react.useLayoutEffect(() => {
		a();
	}, [e, a]), import_react.useEffect(() => {
		const t = m.current;
		if (!t) return;
		const r = () => a(), c = new ResizeObserver(a);
		return c.observe(t), t.addEventListener("scroll", r, { passive: !0 }), () => {
			t.removeEventListener("scroll", r), c.disconnect();
		};
	}, [a, e.length]), e.length === 0 && !s) return null;
	const E = O$1(s), S = e.length > 0 && /* @__PURE__ */ import_react.createElement("ul", { className: n$12("k-file-box-wrapper", {
		"k-file-box-wrapper-scrollable-start": p,
		"k-file-box-wrapper-scrollable-end": d
	}) }, /* @__PURE__ */ import_react.createElement("div", {
		className: "k-files-scroll",
		ref: m
	}, e.map((t) => /* @__PURE__ */ import_react.createElement("li", {
		key: t.name,
		className: "k-file-box"
	}, /* @__PURE__ */ import_react.createElement(v$9, {
		size: "xlarge",
		...g$6(C$2(t.name))
	}), /* @__PURE__ */ import_react.createElement("div", { className: "k-file-info" }, /* @__PURE__ */ import_react.createElement("span", { className: "k-file-name" }, t.name), /* @__PURE__ */ import_react.createElement("span", { className: "k-file-size" }, F$1(t.size))), /* @__PURE__ */ import_react.createElement(A$5, {
		fillMode: "flat",
		svgIcon: xMarkSmOutlineIcon,
		onClick: (r) => {
			r.stopPropagation(), l(t.name);
		},
		"aria-label": `${o.toLanguageString("promptBox.removeFile", D["promptBox.removeFile"])} ${t.name}`,
		title: `${o.toLanguageString("promptBox.removeFile", D["promptBox.removeFile"])} ${t.name}`
	})))));
	return /* @__PURE__ */ import_react.createElement("div", { className: `${M}-header` }, E, S);
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/package-metadata.mjs
/**
* @hidden
*/
var packageMetadata = Object.freeze({
	name: "@progress/kendo-react-conversational-ui",
	productName: "KendoReact",
	productCode: "KENDOUIREACT",
	productCodes: ["KENDOUIREACT"],
	publishDate: 1777886321,
	version: "14.4.1",
	licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
});
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/prompt-box/PromptBox.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var p$2 = "k-prompt-box", ct$1 = 20, ut = 50, b = {
	mode: "auto",
	rows: 1,
	defaultValue: "",
	disabled: !1,
	readOnly: !1,
	loading: !1,
	uploadButtonConfig: !1,
	speechToTextButtonConfig: !0,
	actionButtonConfig: !0
}, Te$1 = import_react.forwardRef((Ae, Re) => {
	const we = !_$1(packageMetadata, { component: "PromptBox" }), Se = v$11(packageMetadata), y = i$17(), { mode: s = b.mode, fillMode: se, rows: F = b.rows, maxTextAreaHeight: c, value: le, defaultValue: Pe = b.defaultValue, disabled: f = b.disabled, readOnly: Ne = b.readOnly, placeholder: He, title: Oe, maxLength: Le, inputAttributes: Me, topAffix: re, startAffix: C, endAffix: v, header: Ie, onChange: R, onFocus: X, onBlur: Z, onPromptAction: J, attachments: ie, loading: B = b.loading, uploadButtonConfig: d = b.uploadButtonConfig, speechToTextButtonConfig: M = b.speechToTextButtonConfig, actionButtonConfig: I = b.actionButtonConfig, className: $e, style: ze, ...je } = {
		...b,
		...Ae
	}, l = import_react.useRef(null), [De, $] = import_react.useState(Pe), [_e, Q] = import_react.useState([]), [a, ae] = import_react.useState(!1), ce = import_react.useRef(null), z = import_react.useRef(null), P = import_react.useRef(0), ue = import_react.useRef(0), N = import_react.useRef(!1), fe = import_react.useRef(0), j = import_react.useRef(0), E = import_react.useCallback((e, n) => e ? typeof e == "function" ? e(n) : e : null, []), x = le !== void 0, u = x ? le : De, T = ie !== void 0, A = T ? ie : _e, H = import_react.useMemo(() => !!(u != null && u.trim() || A.length > 0), [u, A.length]), w = import_react.useCallback(() => {
		if (!l.current || s === "single") return;
		const e = l.current, n = globalThis.getComputedStyle(e), r = Number.parseFloat(n.lineHeight) || ct$1, i = Number.parseFloat(n.paddingTop) || 0, h = Number.parseFloat(n.paddingBottom) || 0;
		P.current = e.offsetHeight || r + i + h, ue.current = r * F + i + h, s === "auto" && !a && (j.current = e.offsetWidth);
	}, [
		s,
		F,
		a
	]), We = import_react.useCallback(() => s === "auto" ? 1 : F, [s, F]), me = import_react.useCallback((e) => {
		if (c) {
			const n = Number.parseInt(c, 10);
			if (e > n) return n;
		}
		return Math.max(ue.current, e);
	}, [c]), D$4 = import_react.useCallback((e) => {
		e.style.overflow = "hidden", e.style.height = `${P.current}px`;
		const n = e.scrollHeight, r = me(n);
		e.style.height = `${r}px`, c && n > Number.parseInt(c, 10) && (e.style.overflow = "");
	}, [me, c]), _ = import_react.useCallback((e) => {
		e.style.overflow = "hidden", e.style.height = `${P.current}px`;
		const n = e.scrollHeight, r = c ? Math.min(n, Number.parseInt(c, 10)) : n;
		e.style.height = `${r}px`, c && n > Number.parseInt(c, 10) && (e.style.overflow = "");
	}, [c]), pe = import_react.useCallback((e) => {
		if (j.current <= 0) return !1;
		const n = e.style.height, r = e.style.width;
		e.style.overflow = "hidden", e.style.width = `${j.current}px`, e.style.height = `${P.current}px`;
		const i = e.scrollWidth <= j.current && e.scrollHeight <= P.current;
		return e.style.overflow = "", r ? e.style.width = r : e.style.width = "", n ? e.style.height = n : e.style.height = "", i;
	}, []), W = import_react.useCallback((e, n) => {
		if (N.current) return;
		if ((e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight) && !a) {
			N.current = !0, ae(!0);
			return;
		}
		if (a) {
			_(e);
			n < fe.current && pe(e) && (e.style.height = "", N.current = !0, ae(!1));
		}
	}, [
		a,
		_,
		pe
	]), S = import_react.useCallback(() => {
		var r;
		if (s === "single" || !l.current) return;
		const e = l.current, n = ((r = e.value) == null ? void 0 : r.length) || 0;
		s === "multi" ? D$4(e) : s === "auto" && W(e, n);
	}, [
		s,
		D$4,
		W
	]);
	import_react.useEffect(() => {
		s !== "single" && l.current && w();
	}, [s, w]), import_react.useEffect(() => {
		s !== "single" && l.current && (w(), S());
	}, [
		F,
		s,
		w,
		S
	]), import_react.useEffect(() => {
		if (s !== "single" && l.current) {
			const e = (u == null ? void 0 : u.length) || 0;
			requestAnimationFrame(() => {
				if (l.current) {
					const n = l.current;
					s === "multi" ? D$4(n) : s === "auto" && W(n, e), fe.current = e;
				}
			});
		}
	}, [
		u,
		s,
		D$4,
		W
	]), import_react.useEffect(() => {
		s === "auto" && a && l.current && requestAnimationFrame(() => {
			if (l.current) {
				const e = l.current;
				_(e), N.current = !1;
			}
		});
	}, [
		a,
		s,
		_
	]), import_react.useEffect(() => {
		if (s === "auto" && l.current) {
			const e = l.current;
			a || (e.style.height = "", e.style.overflow = "", N.current = !1);
		}
	}, [s, a]), import_react.useEffect(() => {
		if (s === "single" || !l.current) return;
		const e = l.current;
		let n;
		const r = () => {
			clearTimeout(n), n = setTimeout(() => {
				l.current && (s === "auto" && !a && w(), S());
			}, ut);
		}, i = new ResizeObserver(r);
		return i.observe(e), () => {
			i.disconnect(), clearTimeout(n);
		};
	}, [
		s,
		a,
		w,
		S
	]);
	const m$12 = import_react.useCallback(() => ({
		focus: () => {
			var e;
			return (e = l.current) == null ? void 0 : e.focus();
		},
		blur: () => {
			var e;
			return (e = l.current) == null ? void 0 : e.blur();
		},
		element: l.current,
		get value() {
			return u;
		}
	}), [u]);
	import_react.useImperativeHandle(Re, m$12);
	const Ue = import_react.useCallback((e) => {
		const n = e.target.value;
		!x && !f && $(n), R && !f && v$10(R, e, {
			...m$12(),
			value: n
		}, { value: n }), s !== "single" && S();
	}, [
		$,
		R,
		f,
		x,
		m$12,
		s,
		S
	]), Ve = import_react.useCallback((e) => {
		X && !f && v$10(X, e, m$12(), void 0);
	}, [
		X,
		f,
		m$12
	]), Ke = import_react.useCallback((e) => {
		Z && !f && v$10(Z, e, m$12(), void 0);
	}, [
		Z,
		f,
		m$12
	]), de = import_react.useCallback((e) => {
		e.preventDefault();
	}, []), U = import_react.useCallback((e) => {
		J && v$10(J, e, m$12(), {
			value: u,
			attachments: A
		}), x || $(""), T || Q([]);
	}, [
		J,
		m$12,
		u,
		A,
		x,
		T
	]), qe = import_react.useCallback((e) => {
		if (!(e.key === "Enter" && e.shiftKey)) {
			if (e.key === "ArrowUp" || e.key === "ArrowDown") {
				e.stopPropagation();
				return;
			}
			if (e.key === "Enter") {
				if (e.preventDefault(), B) return;
				H && U(e);
			}
		}
	}, [
		U,
		B,
		H
	]), ge = {
		disabled: f,
		readOnly: Ne,
		placeholder: He,
		title: Oe,
		maxLength: Le,
		"aria-label": y.toLanguageString(S$2, D[S$2]),
		value: u,
		onKeyDown: qe,
		...Me,
		onChange: Ue,
		onFocus: Ve,
		onBlur: Ke,
		ref: l
	}, he = import_react.useCallback((e) => {
		var i, h;
		const { isFinal: n, alternatives: r } = e;
		if (r.length > 0) {
			const te = r[0];
			if (n) {
				const V = ((i = l.current) == null ? void 0 : i.value) || "", O = (V ? `${V} ` : "") + te.transcript;
				if (x || $(O), R && !f) v$10(R, {
					target: l.current,
					currentTarget: l.current
				}, {
					...m$12(),
					value: O
				}, { value: O });
			}
		}
		(h = l.current) == null || h.focus();
	}, [
		x,
		R,
		f,
		m$12
	]), be = import_react.useCallback(() => {
		var e, n;
		(n = (e = ce.current) == null ? void 0 : e.actionElement) == null || n.click();
	}, []), ye = import_react.useCallback((e) => {
		var i;
		const n = Array.from(e.affectedFiles), r = typeof d == "object" && d.onSelectAttachments;
		T || Q((h) => [...h, ...n]), r && r({
			selectedFiles: e.affectedFiles,
			allFiles: e.newState
		}), (i = l.current) == null || i.focus();
	}, [d, T]), g = import_react.useMemo(() => ({
		uploadButtonProps: {
			fillMode: "flat",
			svgIcon: paperclipOutlineAltRightIcon,
			size: "small",
			rounded: "full",
			onClick: be,
			onFilesAdd: ye,
			files: A,
			uploadRef: ce,
			"aria-label": y.toLanguageString(y$6, D[y$6]),
			title: y.toLanguageString(y$6, D[y$6]),
			_registerRemoveCallback: (e) => {
				z.current = e;
			}
		},
		speechToTextButtonProps: {
			fillMode: "flat",
			size: "small",
			rounded: "full",
			onResult: he
		},
		actionButtonProps: {
			rounded: "full",
			size: "small",
			svgIcon: B ? stopSmIcon : arrowUpOutlineIcon,
			className: B ? "k-generating" : "",
			onClick: U,
			onMouseDown: de,
			disabled: !B && !H,
			"aria-disabled": !B && !H,
			"aria-label": B ? y.toLanguageString(I$1, D[I$1]) : y.toLanguageString(b$5, D[b$5]),
			title: B ? y.toLanguageString(I$1, D[I$1]) : y.toLanguageString(b$5, D[b$5]),
			"aria-live": "polite"
		}
	}), [
		he,
		ye,
		A,
		U,
		de,
		B,
		be,
		y,
		H
	]), Ge = import_react.useCallback((e) => {
		T || Q((r) => r.filter((i) => i.name !== e));
		const n = typeof d == "object" && d.onRemoveAttachment;
		n && (z.current = n), z.current && z.current(e);
	}, [d, T]), Y = () => {
		const e$20 = M !== !1, n = I !== !1, r = d !== !1, i = typeof M == "object" ? M : void 0, { restrictions: te, multiple: V = !0, accept: O, onSelectAttachments: Ce, onRemoveAttachment: ft, ...Ze } = typeof d == "object" ? d : {}, ne = {
			restrictions: te,
			multiple: V,
			accept: O
		}, Je = typeof I == "object" ? I : void 0;
		return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, r && /* @__PURE__ */ import_react.createElement(e, {
			...g.uploadButtonProps,
			restrictions: ne.restrictions,
			multiple: ne.multiple,
			accept: ne.accept,
			...Ze
		}), e$20 && /* @__PURE__ */ import_react.createElement(p, {
			...g.speechToTextButtonProps,
			...i
		}), n && /* @__PURE__ */ import_react.createElement(m, {
			...g.actionButtonProps,
			...Je
		}));
	}, ee = s === "multi" || s === "auto" && a, ve = d !== !1 || M !== !1 || I !== !1, Be = v || ve, Xe = C || v || ve;
	return /* @__PURE__ */ import_react.createElement("div", {
		"aria-label": y.toLanguageString(L, D[L]),
		...je,
		className: n$12($e, "k-input", p$2, {
			[`k-input-${se}`]: se,
			"k-disabled": f,
			"k-prompt-box-singleline": s === "single",
			"k-prompt-box-multiline": ee
		}),
		style: ze
	}, /* @__PURE__ */ import_react.createElement(T$1, {
		files: A,
		onRemoveFile: Ge,
		header: Ie
	}), s === "single" ? /* @__PURE__ */ import_react.createElement("div", { className: `${p$2}-content` }, C && /* @__PURE__ */ import_react.createElement("div", { className: `${p$2}-affix` }, E(C, g)), /* @__PURE__ */ import_react.createElement("input", {
		...ge,
		className: n$12("k-input-inner", `${p$2}-input`)
	}), Be ? /* @__PURE__ */ import_react.createElement("div", { className: `${p$2}-affix` }, v && E(v, g), Y()) : null) : /* @__PURE__ */ import_react.createElement("div", { className: `${p$2}-content` }, s === "multi" && re && /* @__PURE__ */ import_react.createElement("div", { className: `${p$2}-affix` }, E(re, g)), s === "auto" && !a && C && /* @__PURE__ */ import_react.createElement("div", { className: `${p$2}-affix` }, E(C, g)), /* @__PURE__ */ import_react.createElement("textarea", {
		...ge,
		className: n$12("k-input-inner", `${p$2}-textarea`),
		rows: We(),
		style: c ? { maxHeight: c } : {},
		...ee && { "aria-multiline": "true" }
	}), s === "auto" && !a && Be ? /* @__PURE__ */ import_react.createElement("div", { className: `${p$2}-affix` }, v && E(v, g), Y()) : null, ee && Xe ? /* @__PURE__ */ import_react.createElement("div", { className: `${p$2}-affix` }, C && E(C, g), (C || v) && /* @__PURE__ */ import_react.createElement("div", { className: "k-spacer" }), v && E(v, g), Y()) : null), we && /* @__PURE__ */ import_react.createElement(M$5, { message: Se }));
});
Te$1.propTypes = {
	value: import_prop_types.default.string,
	defaultValue: import_prop_types.default.string,
	mode: import_prop_types.default.oneOf([
		"single",
		"multi",
		"auto"
	]),
	rows: import_prop_types.default.number,
	maxTextAreaHeight: import_prop_types.default.string,
	title: import_prop_types.default.string,
	disabled: import_prop_types.default.bool,
	readOnly: import_prop_types.default.bool,
	placeholder: import_prop_types.default.string,
	maxLength: import_prop_types.default.number,
	inputAttributes: import_prop_types.default.object,
	fillMode: import_prop_types.default.oneOf([
		"solid",
		"flat",
		"outline"
	]),
	topAffix: import_prop_types.default.oneOfType([
		import_prop_types.default.func,
		import_prop_types.default.element,
		import_prop_types.default.string
	]),
	startAffix: import_prop_types.default.oneOfType([
		import_prop_types.default.func,
		import_prop_types.default.element,
		import_prop_types.default.string
	]),
	endAffix: import_prop_types.default.oneOfType([
		import_prop_types.default.func,
		import_prop_types.default.element,
		import_prop_types.default.string
	]),
	header: import_prop_types.default.oneOfType([
		import_prop_types.default.func,
		import_prop_types.default.element,
		import_prop_types.default.string
	]),
	onChange: import_prop_types.default.func,
	onFocus: import_prop_types.default.func,
	onBlur: import_prop_types.default.func,
	loading: import_prop_types.default.bool,
	uploadButtonConfig: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.object]),
	speechToTextButtonConfig: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.object]),
	actionButtonConfig: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.object]),
	attachments: import_prop_types.default.array,
	onPromptAction: import_prop_types.default.func,
	className: import_prop_types.default.string,
	style: import_prop_types.default.object
};
Te$1.displayName = "KendoPromptBox";
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/NewMessage.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var Y$1 = import_react.memo(({ affixProps: R, uploadConfig: p, localizationService: c, onFilesSelect: g, onFileRemove: C }) => {
	const A = typeof p == "object" ? p : {};
	return p !== !1 ? /* @__PURE__ */ import_react.createElement(e, {
		...R.uploadButtonProps,
		fillMode: "clear",
		"aria-label": c.toLanguageString(M$2, D[M$2]),
		title: c.toLanguageString(M$2, D[M$2]),
		...A,
		onSelectAttachments: g,
		onRemoveAttachment: C
	}) : null;
});
Y$1.displayName = "UploadButtonAffix";
var fe = import_react.forwardRef((R, p) => {
	const { onSendMessage: c, isDirectionRightToLeft: g, placeholder: C, MessageBox: A, suggestions: h, onSuggestionClick: Z, inputValue: N, onInputValueChange: s, suggestionTemplate: _, sendButtonConfig: k, onInputClick: P, suggestionsLayout: $, dir: B, messageBoxSettings: e, loading: b } = R, { replyToMessage: r, setReplyToMessage: v, user: x, speechToTextConfig: V, uploadConfig: D$3 } = a$2(), [ee, U] = import_react.useState(""), [M, F] = import_react.useState([]), I = import_react.useRef(null), o = i$17(), d = N !== void 0, T = d ? N : ee, i = import_react.useCallback(() => {
		I.current !== null && I.current.focus();
	}, []);
	import_react.useEffect(() => {
		r && i();
	}, [r, i]);
	const z = import_react.useCallback((n) => {
		if (n.preventDefault(), c) {
			const m = {
				id: "",
				author: x,
				text: T || "",
				timestamp: /* @__PURE__ */ new Date(),
				replyToId: r ? r.id : void 0,
				files: M.map((f) => ({
					name: f.name,
					size: f.size,
					type: f.extension,
					rawFile: f.getRawFile ? f.getRawFile() : f
				}))
			};
			v(null), c(m, n), F([]), d || U(""), s && s(""), i();
		}
	}, [
		c,
		T,
		x,
		r,
		M,
		v,
		s,
		i,
		d
	]);
	import_react.useImperativeHandle(p, () => ({ focusInput: i }), [i]);
	const H = import_react.useCallback((n) => {
		F((a) => a.filter((m) => m.name !== n));
	}, []), S = import_react.useCallback((n, a) => n.isDeleted ? f$6(a, o) : n.text, [o]), j = import_react.useCallback(() => {
		if (r) {
			const n = p$10(x, r);
			return /* @__PURE__ */ import_react.createElement("div", { className: n$12("k-message-reference", n ? "k-message-reference-sender" : "k-message-reference-receiver") }, /* @__PURE__ */ import_react.createElement("div", { className: "k-message-reference-content" }, S(r, n)), /* @__PURE__ */ import_react.createElement("span", { className: "k-spacer" }), /* @__PURE__ */ import_react.createElement(A$5, {
				fillMode: "flat",
				svgIcon: xMarkSmOutlineIcon,
				onClick: () => v(null),
				"aria-label": o.toLanguageString(g$4, D[g$4]),
				title: o.toLanguageString(g$4, D[g$4])
			}));
		}
		return null;
	}, [
		r,
		x,
		S,
		v,
		o
	]), G = import_react.useCallback((n) => {
		try {
			F(Array.from(n.allFiles));
		} catch {}
	}, []), O = import_react.useCallback((n) => {
		const a = n.value;
		d || U(a), s && s(a || "");
	}, [d, s]), q = import_react.useCallback((n) => {
		z(n.syntheticEvent);
	}, [z]), u = import_react.useCallback((n) => n ? typeof n == "function" ? n() : n : null, []), J = import_react.useCallback((n) => /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(Y$1, {
		affixProps: n,
		uploadConfig: D$3,
		localizationService: o,
		onFilesSelect: G,
		onFileRemove: H
	}), u(e == null ? void 0 : e.startAffix)), [
		D$3,
		o,
		G,
		H,
		e == null ? void 0 : e.startAffix,
		u
	]), K = import_react.useCallback(() => u(e == null ? void 0 : e.endAffix), [e == null ? void 0 : e.endAffix, u]), Q = import_react.useCallback(() => u(e == null ? void 0 : e.topAffix), [e == null ? void 0 : e.topAffix, u]), W = import_react.useMemo(() => {
		const n = typeof k == "object" ? k : {}, m = k !== !1 ? {
			"aria-label": b ? o.toLanguageString(A$2, D[A$2]) : o.toLanguageString(e$7, D[e$7]),
			title: b ? o.toLanguageString(A$2, D[A$2]) : o.toLanguageString(e$7, D[e$7]),
			dir: g ? "rtl" : void 0,
			...n
		} : !1;
		return /* @__PURE__ */ import_react.createElement(Te$1, {
			header: j(),
			ref: I,
			placeholder: C,
			value: T,
			onChange: O,
			onPromptAction: q,
			mode: (e == null ? void 0 : e.mode) || "multi",
			rows: (e == null ? void 0 : e.rows) || 2,
			maxTextAreaHeight: (e == null ? void 0 : e.maxTextAreaHeight) || "110",
			loading: b,
			speechToTextButtonConfig: V,
			actionButtonConfig: m,
			attachments: M,
			startAffix: J,
			endAffix: e != null && e.endAffix ? K : void 0,
			topAffix: e != null && e.topAffix ? Q : void 0,
			inputAttributes: {
				onClick: P,
				"aria-label": o.toLanguageString(o$7, D[o$7])
			}
		});
	}, [
		C,
		T,
		O,
		q,
		e,
		b,
		V,
		k,
		M,
		j,
		J,
		K,
		Q,
		o,
		g,
		P
	]);
	return /* @__PURE__ */ import_react.createElement("div", { className: "k-message-box-wrapper" }, h && h.length > 0 && /* @__PURE__ */ import_react.createElement(N$1, {
		onSuggestionClick: Z,
		suggestions: h,
		suggestionTemplate: _,
		suggestionsLayout: $,
		dir: B
	}), A ? /* @__PURE__ */ import_react.createElement(A, { messageInput: W }) : W);
});
fe.displayName = "NewMessage";
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/Header.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var o$2 = (e) => /* @__PURE__ */ import_react.createElement(N$7, { className: "k-chat-header" }, e.children);
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/elements/PinnedMessage.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var C$1 = (c) => {
	const { message: e, onUnpin: a, user: n, onReferencedMessageClick: r } = c, i = i$17(), l = import_react.useRef(null), m = n && p$10(n, e), p = import_react.useCallback((o) => {
		o.preventDefault(), o.stopPropagation(), r?.(e.id);
	}, [e.id, r]);
	return /* @__PURE__ */ import_react.createElement("div", {
		ref: l,
		className: `k-message-reference ${m ? "k-message-reference-sender" : "k-message-reference-receiver"} k-message-pinned`,
		onClick: p
	}, /* @__PURE__ */ import_react.createElement(v$9, { icon: pinOutlineIcon }), /* @__PURE__ */ import_react.createElement("div", { className: "k-message-reference-content" }, e != null && e.isDeleted ? n && f$6(p$10(n, e), i) : e == null ? void 0 : e.text), /* @__PURE__ */ import_react.createElement("span", { className: "k-spacer" }), /* @__PURE__ */ import_react.createElement(A$5, {
		fillMode: "flat",
		svgIcon: xMarkSmOutlineIcon,
		onClick: (o) => {
			o.stopPropagation(), a?.(e);
		}
	}));
};
//#endregion
//#region node_modules/@progress/kendo-react-notification/Notification.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var d$1 = "Close", g = {
	success: "check-outline",
	error: "x-outline",
	info: "info-circle",
	warning: "exclamation-circle"
}, v = {
	success: checkOutlineIcon,
	error: xOutlineIcon,
	info: infoCircleIcon,
	warning: exclamationCircleIcon
}, r$3 = {
	closable: !1,
	type: {
		style: "none",
		icon: !0
	}
}, f$1 = (i) => {
	const { children: m, className: c, dir: p, style: y, closable: n = r$3.closable, type: t = r$3.type, onClose: a } = i;
	return /* @__PURE__ */ import_react.createElement("div", {
		dir: p,
		className: "k-notification" + (c ? ` ${c}` : "") + (t.style === "none" ? "" : ` k-notification-${t.style}`) + (n ? " k-notification-closable" : ""),
		style: y
	}, t.icon && /* @__PURE__ */ import_react.createElement(v$9, {
		className: "k-notification-status",
		name: g[t.style],
		icon: v[t.style]
	}), /* @__PURE__ */ import_react.createElement("div", { className: "k-notification-content" }, m), n && /* @__PURE__ */ import_react.createElement("span", { className: "k-notification-actions" }, /* @__PURE__ */ import_react.createElement("span", {
		className: "k-notification-action k-notification-close-action",
		title: d$1,
		onClick: (s) => {
			a && a({
				target: { props: i },
				syntheticEvent: s,
				nativeEvent: s.nativeEvent
			});
		},
		...typeof n != "boolean" ? n : {}
	}, /* @__PURE__ */ import_react.createElement(v$9, {
		name: "x",
		icon: xIcon
	}))));
};
f$1.displayName = "Notification";
f$1.propTypes = {
	className: import_prop_types.default.string,
	closable: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.object]),
	dir: import_prop_types.default.string,
	style: import_prop_types.default.object,
	type: import_prop_types.default.shape({
		style: import_prop_types.default.oneOf([
			"base",
			"secondary",
			"success",
			"error",
			"light",
			"inverse",
			"primary",
			"tertiary",
			"warning",
			"info",
			"dark"
		]),
		icon: import_prop_types.default.bool
	}),
	onClose: import_prop_types.default.func
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/Notification.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var c$1 = (o) => {
	const { show: e, text: n } = o, a = () => ({
		position: "absolute",
		top: "90%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		zIndex: 1e3,
		pointerEvents: e ? "auto" : "none"
	});
	return /* @__PURE__ */ import_react.createElement("div", { style: a() }, /* @__PURE__ */ import_react.createElement(l$8, null, e && /* @__PURE__ */ import_react.createElement(f$1, {
		type: { style: "dark" },
		closable: !1
	}, /* @__PURE__ */ import_react.createElement("span", null, n))));
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/utils/fieldMapping.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var n = {
	textField: "text",
	statusField: "status",
	authorIdField: "authorId",
	authorNameField: "authorName",
	authorImageUrlField: "authorImageUrl",
	authorImageAltTextField: "authorImageAltText",
	idField: "id",
	timestampField: "timestamp",
	filesField: "files",
	attachmentsField: "attachments",
	replyToIdField: "replyToId",
	isDeletedField: "isDeleted",
	isPinnedField: "isPinned",
	typingField: "typing",
	suggestedActionsField: "suggestedActions",
	isFailedField: "isFailed"
}, F = (i, d = {}) => {
	const e = {
		...n,
		...d
	};
	let t;
	i.author && typeof i.author == "object" ? t = {
		id: i.author.id || i.author[e.authorIdField] || i[e.authorIdField] || "",
		name: i.author.name || i.author[e.authorNameField] || i[e.authorNameField],
		avatarUrl: i.author.avatarUrl || i.author[e.authorImageUrlField] || i[e.authorImageUrlField],
		avatarAltText: i.author.avatarAltText || i.author[e.authorImageAltTextField] || i[e.authorImageAltTextField]
	} : t = {
		id: i[e.authorIdField] || i.authorId || "",
		name: i[e.authorNameField] || i.authorName,
		avatarUrl: i[e.authorImageUrlField] || i.authorImageUrl,
		avatarAltText: i[e.authorImageAltTextField] || i.authorImageAltText
	};
	let o;
	i.timestamp ? o = new Date(i.timestamp) : i[e.timestampField] ? o = new Date(i[e.timestampField]) : o = /* @__PURE__ */ new Date();
	const l = {
		id: i.id !== void 0 ? i.id : i[e.idField],
		text: i.text !== void 0 ? i.text : i[e.textField] || "",
		author: t,
		timestamp: o,
		status: i.status !== void 0 ? i.status : i[e.statusField],
		attachments: i.attachments !== void 0 ? i.attachments : i[e.attachmentsField],
		attachmentLayout: i.attachmentLayout || "list",
		suggestedActions: i.suggestedActions !== void 0 ? i.suggestedActions : i[e.suggestedActionsField],
		isPinned: i.isPinned !== void 0 ? i.isPinned : i[e.isPinnedField] || !1,
		typing: i.typing !== void 0 ? i.typing : i[e.typingField],
		files: i.files !== void 0 ? i.files : i[e.filesField] || [],
		isFailed: i.isFailed !== void 0 ? i.isFailed : i[e.isFailedField] || !1
	};
	return i.pinnedAt && (l.pinnedAt = new Date(i.pinnedAt)), i.pinnedBy && (l.pinnedBy = i.pinnedBy), i.replyToId !== void 0 ? l.replyToId = i.replyToId : i[e.replyToIdField] !== void 0 && (l.replyToId = i[e.replyToIdField]), i.isDeleted !== void 0 ? l.isDeleted = i.isDeleted : i[e.isDeletedField] !== void 0 && (l.isDeleted = i[e.isDeletedField]), {
		...l,
		dataItem: i
	};
}, r$2 = (i, d = {}) => Array.isArray(i) ? i.map((e) => F(e, d)) : [], u$1 = (i) => i && typeof i.id != "undefined" && typeof i.text == "string" && i.author && typeof i.author == "object" && typeof i.author.id != "undefined" && (i.timestamp instanceof Date || typeof i.timestamp == "string" || typeof i.timestamp == "number"), h$1 = (i) => ({
	textField: i.textField,
	statusField: i.statusField,
	authorIdField: i.authorIdField,
	authorNameField: i.authorNameField,
	authorImageUrlField: i.authorImageUrlField,
	authorImageAltTextField: i.authorImageAltTextField,
	idField: i.idField,
	timestampField: i.timestampField,
	filesField: i.filesField,
	attachmentsField: i.attachmentsField,
	replyToIdField: i.replyToIdField,
	isDeletedField: i.isDeletedField,
	isPinnedField: i.isPinnedField,
	typingField: i.typingField,
	suggestedActionsField: i.suggestedActionsField,
	isFailedField: i.isFailedField
}), s = (i, d = {}) => {
	const e = {
		...n,
		...d
	}, t = {};
	return i.id !== void 0 && (t[e.idField] = i.id), i.text !== void 0 && (t[e.textField] = i.text), i.status !== void 0 && (t[e.statusField] = i.status), i.isFailed !== void 0 && (t[e.isFailedField] = i.isFailed), i.timestamp !== void 0 && (t[e.timestampField] = i.timestamp), i.attachments !== void 0 && (t[e.attachmentsField] = i.attachments), i.files !== void 0 && (t[e.filesField] = i.files), i.suggestedActions !== void 0 && (t[e.suggestedActionsField] = i.suggestedActions), i.replyToId !== void 0 && (t[e.replyToIdField] = i.replyToId), i.isDeleted !== void 0 && (t[e.isDeletedField] = i.isDeleted), i.isPinned !== void 0 && (t[e.isPinnedField] = i.isPinned), i.typing !== void 0 && (t[e.typingField] = i.typing), i.author && (i.author.id !== void 0 && (t[e.authorIdField] = i.author.id), i.author.name !== void 0 && (t[e.authorNameField] = i.author.name), i.author.avatarUrl !== void 0 && (t[e.authorImageUrlField] = i.author.avatarUrl), i.author.avatarAltText !== void 0 && (t[e.authorImageAltTextField] = i.author.avatarAltText)), i.pinnedAt !== void 0 && (t.pinnedAt = i.pinnedAt), i.pinnedBy !== void 0 && (t.pinnedBy = i.pinnedBy), i.attachmentLayout !== void 0 && (t.attachmentLayout = i.attachmentLayout), t;
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/utils/scroll.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var $ = 100, j = "20%", k = (t) => {
	const r = t.querySelector(".k-message-pinned");
	return r ? r.offsetHeight : 0;
}, G = (t, r) => {
	const n = t != null ? t : j;
	let s;
	if (typeof n == "number") s = n;
	else {
		const l = /^(-?\d+(?:\.\d+)?)%$/.exec(String(n));
		if (l) s = Number.parseFloat(l[1]) / 100 * r;
		else {
			const u = Number.parseFloat(String(n));
			s = Number.isNaN(u) ? .2 * r : u;
		}
	}
	return Math.min(s, r);
}, J = (t) => {
	const { scrollHeight: r, scrollTop: n, clientHeight: s } = t;
	return !(r > s) || r - n - s <= $;
}, y = (t) => {
	t.scrollTop = t.scrollHeight - t.clientHeight;
}, Q = (t) => {
	const r = t.querySelectorAll(".k-message");
	return r.length > 0 ? r[r.length - 1] : null;
}, Y = ({ viewItemsWrapperRef: t, isKeyboardNavigationActiveRef: r, processedMessages: n, authorId: s, autoScrollThreshold: l, isEndless: u = !1, isOnLastBatch: h = !0, skipAutoScrollRef: d }) => {
	var D;
	const R = import_react.useRef(s), E = import_react.useRef(l), L = import_react.useRef(u), x = import_react.useRef(h);
	import_react.useEffect(() => {
		R.current = s, E.current = l, L.current = u, x.current = h;
	});
	const C = import_react.useRef(!1);
	import_react.useEffect(() => {
		u || !t.current || n.length === 0 || C.current || (y(t.current), C.current = !0);
	}, [
		t,
		u,
		n.length
	]);
	const M = import_react.useRef(void 0), p = import_react.useRef(0), F = import_react.useRef(!0), B = import_react.useRef(!0), a = import_react.useRef(!1), f = import_react.useRef(null), z = (n.length > 0 ? (D = n.at(-1)) == null ? void 0 : D.id : void 0) !== M.current, A = n.length > p.current;
	if (z || A) {
		const e = t.current;
		B.current = e ? J(e) : !0;
	}
	import_react.useEffect(() => {
		var q, P;
		const e = n.length, m = e > 0 ? (q = n[e - 1]) == null ? void 0 : q.id : void 0, v = M.current, H = p.current, T = F.current;
		if (M.current = m, p.current = e, F.current = !1, e === 0) return;
		const c = t.current;
		if (!c || r.current) return;
		if (!(!T && m !== v)) {
			!L.current && (T || e > H) && (y(c), a.current = !1, f.current = null);
			return;
		}
		if (L.current && !x.current) return;
		if (d != null && d.current) {
			d.current = !1;
			return;
		}
		const i = n[e - 1];
		if (R.current !== void 0 && ((P = i == null ? void 0 : i.author) == null ? void 0 : P.id) !== void 0 && String(i.author.id) === String(R.current)) {
			c.scrollTo({
				top: c.scrollHeight - c.clientHeight,
				behavior: "smooth"
			}), a.current = !1, f.current = null;
			return;
		}
		if (!B.current) {
			a.current = !1, f.current = null;
			return;
		}
		const b = Q(c);
		if (!b) return;
		const S = k(c), U = Math.max(0, c.clientHeight - S), w = G(E.current, U), I = b.getBoundingClientRect().top - c.getBoundingClientRect().top + c.scrollTop, N = Math.max(0, I - w - S), V = Math.max(0, c.scrollHeight - c.clientHeight), _ = Math.min(N, V);
		_ > c.scrollTop && c.scrollTo({
			top: _,
			behavior: "smooth"
		}), f.current = N, a.current = !0;
	}, [
		n,
		t,
		r
	]), import_react.useEffect(() => {
		const e = t.current;
		if (!e) return;
		let m = e.querySelectorAll(".k-message").length, v = e.scrollHeight, H = e.scrollTop;
		const T = () => {
			const g = e.scrollTop;
			a.current && g < H && (a.current = !1, f.current = null), H = g;
		}, c = new MutationObserver(() => {
			if (r.current) return;
			const g = e.querySelectorAll(".k-message").length, i = e.scrollHeight;
			if (g === m && i > v && a.current) {
				const O = i - e.clientHeight, b = f.current, S = b === null ? O : Math.min(O, b);
				S > e.scrollTop && (e.scrollTop = S), H = e.scrollTop;
			}
			m = g, v = i;
		});
		return c.observe(e, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}), e.addEventListener("scroll", T, { passive: !0 }), () => {
			c.disconnect(), e.removeEventListener("scroll", T);
		};
	}, [t, r]);
}, Z = ({ elementRef: t }) => {
	const [r, n] = import_react.useState(!1);
	return import_react.useEffect(() => {
		const s = t.current;
		if (!s) return;
		const l = () => {
			n(s.scrollHeight > s.clientHeight);
		};
		l();
		const u = new ResizeObserver(l);
		u.observe(s);
		const h = new MutationObserver(() => {
			requestAnimationFrame(l);
		});
		return h.observe(s, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}), () => {
			u.disconnect(), h.disconnect();
		};
	}, [t]), r;
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/utils/messageSettings.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var C = [
	"allowMessageCollapse",
	"messageWidthMode",
	"showAvatar",
	"showUsername",
	"messageTemplate",
	"messageContentTemplate",
	"messageToolbarActions",
	"messageContextMenuActions",
	"fileActions"
], T = (e, o) => {
	var m, c;
	return ((m = e == null ? void 0 : e.author) == null ? void 0 : m.id) === o || ((c = e == null ? void 0 : e.author) == null ? void 0 : c.id) === String(o);
};
function t(e, o, m, c, A) {
	const h = T(e, o) ? c : A, d = {};
	return C.forEach((a) => {
		var n;
		d[a] = (n = h == null ? void 0 : h[a]) != null ? n : m == null ? void 0 : m[a];
	}), d;
}
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/hooks/useEndlessScroll.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var nt = 50, s$1 = 100, ct = ({ scrollMode: I, processedMessages: n, total: C, pageSize: i = nt, startIndex: J, endIndex: Z, onLoadMoreMessages: T, onReferencedMessageClick: b, viewItemsWrapperRef: u, authorId: Y }) => {
	const F = import_react.useRef(!1), E = I === "endless", l = C != null ? C : n.length, a = E && n.length === l && !F.current, f = E && (n.length < l || F.current);
	f && (F.current = !0);
	const [D, B] = import_react.useState(-1), [S, A] = import_react.useState(-1), d = import_react.useRef(D), j = import_react.useRef(S);
	d.current = D, j.current = S;
	const o = import_react.useRef(!1), L = import_react.useRef(0), v = import_react.useRef(0), q = import_react.useRef(!1), g = import_react.useRef(l), k = import_react.useRef(Y);
	k.current = Y;
	const _ = import_react.useRef(!1), $ = import_react.useRef(null), G = import_react.useRef(!1), U = import_react.useRef(!1), K = import_react.useRef(!0), N = import_react.useRef(l);
	import_react.useEffect(() => {
		if (a) {
			if (F.current) {
				(D === -1 || S === -1) && (B(0), A(n.length));
				return;
			}
			if (D === -1 || S === -1) {
				const t = Math.max(0, n.length - i), c = n.length;
				B(t), A(c);
			} else if (S < n.length) {
				const t = g.current;
				if (j.current >= t) A(n.length);
				else if (n.length > t && n.slice(t).some((e) => {
					var x;
					return ((x = e.author) == null ? void 0 : x.id) !== void 0 && String(e.author.id) === String(k.current);
				})) B(Math.max(0, n.length - i)), A(n.length), G.current = !0;
			}
			g.current = l;
		}
	}, [
		a,
		n.length,
		i,
		D,
		S,
		l
	]);
	const O = J != null ? J : 0, H = Z != null ? Z : n.length, P = import_react.useCallback(() => {
		const t = u.current;
		t && (L.current = t.scrollHeight, v.current = t.scrollTop);
	}, [u]), y = import_react.useCallback((t) => {
		var h, e, x;
		M$1(t, (h = u.current) == null ? void 0 : h.closest(".k-chat"), ((x = (e = u.current) == null ? void 0 : e.querySelector(".k-message-pinned")) == null ? void 0 : x.offsetHeight) || 0);
	}, [u]);
	import_react.useLayoutEffect(() => {
		if (!q.current) return;
		const t = u.current;
		if (!t) {
			q.current = !1;
			return;
		}
		const c = t.scrollHeight - L.current;
		c > 0 && (t.scrollTop = v.current + c), q.current = !1, o.current = !1;
	}), import_react.useLayoutEffect(() => {
		if (!G.current) return;
		const t = u.current;
		if (!t) {
			G.current = !1;
			return;
		}
		S >= n.length && S > 0 && (G.current = !1, t.scrollTop = t.scrollHeight - t.clientHeight);
	});
	const w = import_react.useRef(!1);
	import_react.useLayoutEffect(() => {
		if (!E || w.current) return;
		const t = u.current;
		t && t.querySelector("[data-message-id]") && (t.scrollTop = t.scrollHeight - t.clientHeight, w.current = !0);
	}), import_react.useEffect(() => {
		if (!E) return;
		const t = u.current;
		if (!t) return;
		let c = t.scrollTop;
		const m = () => {
			const { scrollTop: h, scrollHeight: e, clientHeight: x } = t, V = h < c, p = h > c;
			if (c = h, !o.current) {
				if (V && h <= s$1) {
					if (a) {
						const R = d.current;
						if (R > 0) {
							const X = Math.max(0, R - i);
							q.current = !0, P(), B(X);
						}
					} else if (f && O > 0) {
						o.current = !0;
						const R = Math.max(0, O - i);
						q.current = !0, P(), T?.({
							startIndex: R,
							endIndex: O
						});
					}
				}
				if (p && e - h - x <= s$1) {
					if (a) {
						const R = j.current;
						if (R < n.length) {
							const X = Math.min(n.length, R + i);
							U.current = !0, A(X);
						}
					} else if (f && H < l) {
						o.current = !0, U.current = !0;
						const R = Math.min(l, H + i);
						T?.({
							startIndex: H,
							endIndex: R
						});
					}
				}
			}
		};
		return t.addEventListener("scroll", m, { passive: !0 }), () => t.removeEventListener("scroll", m);
	}, [
		E,
		a,
		f,
		u,
		i,
		n.length,
		O,
		H,
		l,
		T
	]), import_react.useEffect(() => {
		var h;
		const t = H >= l;
		if (!f) {
			N.current = l, K.current = t;
			return;
		}
		const c = N.current, m = K.current;
		if (N.current = l, K.current = t, l > c && !m && t) {
			const e = n[n.length - 1];
			k.current !== void 0 && ((h = e == null ? void 0 : e.author) == null ? void 0 : h.id) !== void 0 && String(e.author.id) === String(k.current) && (_.current = !0, U.current = !0);
		}
	}, [
		f,
		l,
		H,
		n
	]), import_react.useEffect(() => {
		!f || !_.current || (_.current = !1, o.current = !1, requestAnimationFrame(() => {
			const t = u.current;
			t && (t.scrollTop = t.scrollHeight - t.clientHeight);
		}));
	}, [
		f,
		n,
		u
	]), import_react.useEffect(() => {
		if (!f || $.current === null) return;
		const t = $.current, c = u.current;
		if (!c) return;
		c.querySelector(`[data-message-id="${t}"]`) && ($.current = null, o.current = !1, requestAnimationFrame(() => {
			y(t);
		}));
	}, [
		f,
		n,
		u,
		y
	]), import_react.useEffect(() => {
		f && o.current && !q.current && (o.current = !1);
	}, [
		f,
		O,
		H
	]);
	const z = import_react.useMemo(() => {
		if (a) {
			const t = Math.max(0, D), c = Math.min(n.length, S);
			if (t >= c) {
				const m = Math.max(0, n.length - i);
				return n.slice(m);
			}
			return n.slice(t, c);
		}
		return n;
	}, [
		a,
		n,
		D,
		S,
		i
	]), Q = import_react.useMemo(() => E ? a ? S >= n.length : H >= l : !0, [
		E,
		a,
		S,
		n.length,
		H,
		l
	]);
	return {
		renderedMessages: z,
		handleScrollToBottom: import_react.useCallback(() => {
			if (!E || Q) {
				const t = u.current;
				t && t.scrollTo({
					top: t.scrollHeight - t.clientHeight,
					behavior: "smooth"
				});
				return;
			}
			if (!o.current) {
				if (a) B(Math.max(0, n.length - i)), A(n.length), requestAnimationFrame(() => {
					const c = u.current;
					c && (c.scrollTop = c.scrollHeight - c.clientHeight);
				});
				else if (f) {
					_.current = !0, q.current = !1, o.current = !0;
					const t = Math.max(0, l - i);
					T?.({
						startIndex: t,
						endIndex: l
					});
				}
			}
		}, [
			E,
			a,
			f,
			Q,
			n.length,
			i,
			l,
			T,
			u
		]),
		handleReferencedMessageClick: import_react.useCallback((t) => {
			if (!E) y(t);
			else if (a) {
				const c = u.current;
				if (c == null ? void 0 : c.querySelector(`[data-message-id="${t}"]`)) y(t);
				else {
					if (o.current) return;
					const h = n.findIndex((e) => e.id === t || String(e.id) === String(t));
					if (h >= 0) {
						const e = Math.floor(i / 2), x = Math.max(0, h - e), V = Math.min(n.length, x + i);
						o.current = !0, B(x), A(V), requestAnimationFrame(() => {
							requestAnimationFrame(() => {
								y(t), o.current = !1;
							});
						});
					}
				}
			} else if (f) {
				const c = u.current;
				if (c == null ? void 0 : c.querySelector(`[data-message-id="${t}"]`)) y(t);
				else {
					if (o.current) return;
					$.current = t, q.current = !1, o.current = !0;
				}
			}
			b?.({ id: t });
		}, [
			E,
			a,
			f,
			u,
			n,
			i,
			b,
			y
		]),
		isEndless: E,
		isOnLastBatch: Q,
		skipAutoScrollRef: U
	};
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/Chat.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var Je = import_react.forwardRef((Qe, b) => {
	const { messages: f = [], messageTemplate: W, messageContentTemplate: G, attachmentTemplate: B, width: Xe, height: Ye, onSendMessage: C, onSuggestionClick: H, onInputValueChange: K, onActionExecute: I, dir: p, messageBox: Ze, placeholder: _e, className: $, style: et, message: J = je, authorId: a, suggestions: tt, suggestionTemplate: st, suggestionsLayout: ot = "scroll", quickActionsLayout: Q = "scroll", inputValue: nt, headerTemplate: h, noDataTemplate: M, timestampTemplate: X, statusTemplate: Y$2, userStatusTemplate: Z$1, allowMessageCollapse: _, messageToolbarActions: ee$1, messageContextMenuActions: te, fileActions: v, onUnpin: at, messageWidthMode: se, showAvatar: oe, showUsername: ne, timestampVisibility: ae, authorMessageSettings: re, receiverMessageSettings: le, onToolbarAction: ie, onContextMenuAction: ce, onFileAction: ue, onDownload: me, speechToTextConfig: de, uploadConfig: ge, sendButtonConfig: rt, messageFilesLayout: fe$1, scrollToBottomButton: N = !0, autoScrollThreshold: lt, textField: pe, statusField: he, authorIdField: Me, authorNameField: ye, authorImageUrlField: Ce, authorImageAltTextField: Se, idField: Te, timestampField: ke, filesField: be, attachmentsField: ve, replyToIdField: Ee, isDeletedField: xe, isPinnedField: Re, typingField: Ae, suggestedActionsField: Fe, isFailedField: Le, onResendMessage: we, messageBoxSettings: it, loading: ct$2, scrollMode: ut, total: mt, pageSize: dt, startIndex: gt, endIndex: ft, onLoadMoreMessages: pt, pinnedMessages: D$2, repliedToMessages: Be, onReferencedMessageClick: ht, ...Mt } = Qe, [u, O] = import_react.useState(null), [P$6, yt] = import_react.useState(!1), [Ct, Ie] = import_react.useState(!1), [Ne, De] = import_react.useState(null), [m, Oe] = import_react.useState(null), [St, Pe] = import_react.useState(!1), U = import_react.useRef(null), Ue = import_react.useRef(null), i = import_react.useRef(null), je$1 = import_react.useRef(null), j = import_react.useRef(void 0), V = import_react.useRef(!1), q = import_react.useRef(null), Ve = import_react.useRef(""), c = import_react.useMemo(() => {
		if (!f || f.length === 0) return [];
		const s = {
			textField: pe,
			statusField: he,
			authorIdField: Me,
			authorNameField: ye,
			authorImageUrlField: Ce,
			authorImageAltTextField: Se,
			idField: Te,
			timestampField: ke,
			filesField: be,
			attachmentsField: ve,
			replyToIdField: Ee,
			isDeletedField: xe,
			isPinnedField: Re,
			typingField: Ae,
			suggestedActionsField: Fe,
			isFailedField: Le
		};
		return !Object.values(s).some((n) => n !== void 0) && u$1(f[0]) ? f.map((n) => ({
			...n,
			timestamp: n.timestamp ? new Date(n.timestamp) : n.timestamp
		})) : r$2(f, s);
	}, [
		f,
		pe,
		he,
		Me,
		ye,
		Ce,
		Se,
		Te,
		ke,
		be,
		ve,
		Ee,
		xe,
		Re,
		Ae,
		Fe,
		Le
	]);
	import_react.useEffect(() => {
		if (a === Ve.current && q.current) {
			Oe(q.current);
			return;
		}
		if (a && c.length > 0) {
			const s = c.find((n) => n.author && (n.author.id === a || n.author.id === String(a))), e = (s == null ? void 0 : s.author) || { id: a };
			q.current = e, Ve.current = a, Oe(e);
		}
	}, [a, c]);
	const { renderedMessages: d, handleScrollToBottom: Tt, handleReferencedMessageClick: z, isEndless: kt, isOnLastBatch: qe, skipAutoScrollRef: bt } = ct({
		scrollMode: ut,
		processedMessages: c,
		total: mt,
		pageSize: dt,
		startIndex: gt,
		endIndex: ft,
		onLoadMoreMessages: pt,
		onReferencedMessageClick: ht,
		viewItemsWrapperRef: i,
		authorId: a
	}), g = import_react.useMemo(() => d.length > 0 ? m$7(d) : [], [d]), vt = import_react.useMemo(() => !_$1(packageMetadata, { component: "Chat" }), []), Et = v$11(packageMetadata), ze = import_react.useMemo(() => {
		if (D$2) return D$2.find((e) => e.isPinned);
		const s = c.find((e) => e.isPinned);
		if (s) return s;
	}, [c, D$2]), E = i$17();
	Y({
		viewItemsWrapperRef: i,
		isKeyboardNavigationActiveRef: V,
		processedMessages: d,
		authorId: a,
		autoScrollThreshold: lt,
		isEndless: kt,
		isOnLastBatch: qe,
		skipAutoScrollRef: bt
	});
	const xt = Z({ elementRef: i }), Rt = import_react.useCallback(() => {
		clearTimeout(j.current);
	}, []), At = import_react.useCallback(() => {
		j.current = window.setTimeout(() => {
			O(null);
		}, 0);
	}, []), x = import_react.useCallback((s) => {
		O(s);
	}, []), Ft = import_react.useCallback((s) => {
		let e = null;
		const n = u !== null ? u : g.lastSelectionIndex;
		s.keyCode === e$16.up ? n === null ? e = 0 : n > 0 && (e = n - 1) : s.keyCode === e$16.down ? n === null ? e = 0 : n < g.lastSelectionIndex && (e = n + 1) : s.keyCode === e$16.home ? e = 0 : s.keyCode === e$16.end && (e = g.lastSelectionIndex), e !== null && (O(e), V.current = !0, s.preventDefault());
	}, [u, g]), We = import_react.useCallback((s, e, n) => {
		var l;
		if (I && I({
			action: {
				value: s.value,
				title: s.title,
				type: s.type
			},
			syntheticEvent: e,
			nativeEvent: e.nativeEvent,
			target: e.currentTarget
		}), !e.isDefaultPrevented()) {
			switch (s.type) {
				case "reply":
					C && C({
						message: {
							id: "",
							author: m,
							text: s.value,
							timestamp: /* @__PURE__ */ new Date()
						},
						syntheticEvent: e,
						nativeEvent: e.nativeEvent,
						target: e.currentTarget
					});
					break;
				case "call":
					window.open("tel:" + s.value);
					break;
				case "openUrl":
					window.open(s.value);
					break;
			}
			(l = je$1.current) == null || l.focusInput();
		}
	}, [
		I,
		C,
		m
	]), Lt = import_react.useCallback(() => n$12("k-chat", $, { "k-rtl": P$6 }), [$, P$6]), wt = import_react.useCallback(() => {
		const s = g.length - 1;
		return g.map((e, n) => {
			var l, y, S, T, k, R;
			if (e.type === "date-marker") return /* @__PURE__ */ import_react.createElement(s$3, {
				item: e,
				key: e.trackBy,
				timestampTemplate: X
			});
			if (e.type === "message-group") {
				const A = {
					allowMessageCollapse: _,
					messageWidthMode: se,
					showAvatar: oe,
					showUsername: ne,
					messageTemplate: W,
					messageContentTemplate: G,
					messageToolbarActions: ee$1,
					messageContextMenuActions: te,
					fileActions: v
				}, r = t((l = e == null ? void 0 : e.messages) == null ? void 0 : l[0], a, A, re, le);
				return /* @__PURE__ */ import_react.createElement(O$2, {
					group: e,
					itemTemplate: r.messageTemplate,
					contentTemplate: r.messageContentTemplate,
					attachmentTemplate: B,
					user: m,
					selectedItemIndex: u,
					onRequestSelection: x,
					isLastGroup: n === s,
					key: (y = e.messages[0].id) != null ? y : e.messages[0].selectionIndex,
					message: J,
					allowMessageCollapse: r.allowMessageCollapse,
					messageToolbarActions: r.messageToolbarActions,
					messageContextMenuActions: r.messageContextMenuActions,
					fileActions: r.fileActions,
					messageWidthMode: r.messageWidthMode,
					showAvatar: r.showAvatar,
					showUsername: r.showUsername
				});
			} else {
				if (e.type === "attachment-group") return /* @__PURE__ */ import_react.createElement(P, {
					group: e,
					itemTemplate: B,
					onRequestSelection: x,
					selected: e.selectionIndex === u,
					isLastGroup: n === s,
					key: `att-${(T = (S = e.trackBy) == null ? void 0 : S.id) != null ? T : e.selectionIndex}`
				});
				if (e.type === "action-group") return /* @__PURE__ */ import_react.createElement(P$1, {
					group: e,
					onActionExecute: We,
					onRequestSelection: x,
					selected: e.selectionIndex === u,
					key: `act-${(R = (k = e.trackBy) == null ? void 0 : k.id) != null ? R : e.selectionIndex}`,
					quickActionsLayout: Q,
					dir: p
				});
			}
			return null;
		});
	}, [
		g,
		X,
		W,
		G,
		B,
		m,
		u,
		x,
		J,
		_,
		ee$1,
		te,
		v,
		se,
		oe,
		ne,
		a,
		re,
		le,
		We,
		Q,
		p
	]), Bt = import_react.useCallback(() => h ? typeof h == "function" ? h() : h : null, [h]), It = import_react.useCallback(() => M ? typeof M == "function" ? M() : M : null, [M]);
	import_react.useEffect(() => {
		yt(!!(p !== void 0 ? p === "rtl" : U.current && getComputedStyle(U.current).direction === "rtl"));
	}, [p]), import_react.useEffect(() => () => {
		clearTimeout(j.current);
	}, []), import_react.useEffect(() => {
		if (!N || !i.current) return;
		let s, e;
		const n = () => {
			s = void 0;
			const T = i.current;
			if (!T) return;
			const { scrollHeight: k, scrollTop: R, clientHeight: A } = T;
			!(k > A) || k - R - A <= 100 ? (e !== void 0 && (clearTimeout(e), e = void 0), Pe(!1)) : e ??= setTimeout(() => {
				e = void 0, Pe(!0);
			}, 300);
		}, l = () => {
			s === void 0 && (s = requestAnimationFrame(n));
		}, y = i.current;
		y.addEventListener("scroll", l, { passive: !0 });
		const S = new MutationObserver(l);
		return S.observe(y, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}), () => {
			y.removeEventListener("scroll", l), S.disconnect(), s !== void 0 && cancelAnimationFrame(s), e !== void 0 && clearTimeout(e);
		};
	}, [N]);
	const Nt = import_react.useMemo(() => ({
		replyToMessage: Ne,
		setReplyToMessage: De,
		messages: c,
		repliedToMessages: Be,
		user: m,
		internalScrollContainerRef: Ue,
		messageListScrollContainerRef: i,
		onToolbarAction: ie,
		onContextMenuAction: ce,
		onFileAction: ue,
		setShowCopyNotification: Ie,
		onDownload: me,
		onResendMessage: we,
		fileActions: v,
		speechToTextConfig: de,
		uploadConfig: ge,
		statusTemplate: Y$2,
		userStatusTemplate: Z$1,
		messageFilesLayout: fe$1,
		timestampVisibility: ae,
		onReferencedMessageClick: z
	}), [
		Ne,
		De,
		c,
		Be,
		m,
		ie,
		ce,
		ue,
		Ie,
		me,
		we,
		v,
		de,
		ge,
		Y$2,
		Z$1,
		fe$1,
		ae,
		z
	]);
	return /* @__PURE__ */ import_react.createElement(r$11.Provider, { value: Nt }, /* @__PURE__ */ import_react.createElement("div", {
		style: {
			width: Xe,
			height: Ye,
			position: "relative",
			overflow: "hidden",
			...et
		},
		onKeyDown: Ft,
		className: Lt(),
		ref: (s) => {
			U.current = s, Ue.current = s, typeof b == "function" ? b(s) : b && (b.current = s);
		},
		...Mt
	}, h !== void 0 && /* @__PURE__ */ import_react.createElement(o$2, null, Bt()), /* @__PURE__ */ import_react.createElement("div", {
		className: "k-message-list",
		onBlur: At,
		onFocus: Rt,
		role: "log",
		"aria-label": E.toLanguageString(a$3, D[a$3]),
		"aria-live": "polite",
		ref: i,
		style: { scrollBehavior: "auto" }
	}, ze && /* @__PURE__ */ import_react.createElement(C$1, {
		message: ze,
		onUnpin: at,
		user: m,
		onReferencedMessageClick: z
	}), /* @__PURE__ */ import_react.createElement("div", { className: n$12("k-message-list-content", { "k-message-list-content-empty": d.length === 0 }) }, d.length === 0 && M !== void 0 && It(), d.length > 0 && wt()), N && (St || !qe) && /* @__PURE__ */ import_react.createElement("div", { className: "k-chat-scroll-to-bottom-container" }, /* @__PURE__ */ import_react.createElement(ee, {
		svgIcon: arrowDownOutlineIcon,
		size: "small",
		themeColor: "light",
		rounded: "full",
		onClick: Tt,
		"aria-label": E.toLanguageString("chat.scrollToBottom", D["chat.scrollToBottom"]),
		title: E.toLanguageString("chat.scrollToBottom", D["chat.scrollToBottom"])
	}))), xt && /* @__PURE__ */ import_react.createElement("div", { className: "k-separator" }), /* @__PURE__ */ import_react.createElement(fe, {
		onSendMessage: (s, e) => {
			C && C({
				message: s,
				syntheticEvent: e,
				nativeEvent: e.nativeEvent,
				target: e.currentTarget
			});
		},
		onSuggestionClick: (s) => {
			H && H(s);
		},
		isDirectionRightToLeft: P$6,
		ref: je$1,
		placeholder: _e,
		MessageBox: Ze,
		suggestions: tt,
		suggestionTemplate: st,
		inputValue: nt,
		onInputValueChange: (s) => {
			K && K(s);
		},
		onInputClick: () => {
			V.current = !1;
		},
		sendButtonConfig: rt,
		suggestionsLayout: ot,
		dir: p,
		messageBoxSettings: it,
		loading: ct$2
	}), /* @__PURE__ */ import_react.createElement(c$1, {
		show: Ct,
		text: E.toLanguageString(p$11, D[p$11])
	}), vt && /* @__PURE__ */ import_react.createElement(M$5, { message: Et })));
});
Je.displayName = "Chat";
Je.propTypes = {
	messages: import_prop_types.default.arrayOf(import_prop_types.default.object),
	user: import_prop_types.default.object,
	messageTemplate: import_prop_types.default.any,
	messageContentTemplate: import_prop_types.default.any,
	attachmentTemplate: import_prop_types.default.any,
	width: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]),
	style: import_prop_types.default.object,
	onSendMessage: import_prop_types.default.func,
	onActionExecute: import_prop_types.default.func,
	dir: import_prop_types.default.string,
	messageBox: import_prop_types.default.any,
	noDataTemplate: import_prop_types.default.oneOfType([import_prop_types.default.element, import_prop_types.default.func]),
	suggestionsLayout: import_prop_types.default.oneOf([
		"scroll",
		"wrap",
		"scrollbuttons"
	]),
	quickActionsLayout: import_prop_types.default.oneOf([
		"scroll",
		"wrap",
		"scrollbuttons"
	]),
	userStatusTemplate: import_prop_types.default.elementType,
	messageFilesLayout: import_prop_types.default.oneOf([
		"vertical",
		"wrap",
		"horizontal"
	]),
	showAvatar: import_prop_types.default.bool,
	showUsername: import_prop_types.default.bool,
	authorMessageSettings: import_prop_types.default.object,
	receiverMessageSettings: import_prop_types.default.object,
	scrollMode: import_prop_types.default.oneOf(["scrollable", "endless"]),
	total: import_prop_types.default.number,
	pageSize: import_prop_types.default.number,
	startIndex: import_prop_types.default.number,
	endIndex: import_prop_types.default.number,
	onLoadMoreMessages: import_prop_types.default.func,
	pinnedMessages: import_prop_types.default.arrayOf(import_prop_types.default.object),
	repliedToMessages: import_prop_types.default.arrayOf(import_prop_types.default.object),
	onReferencedMessageClick: import_prop_types.default.func
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/chat/components/templates/HeroCard.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var N = (s) => {
	const { imageUrl: m, imageMaxWidth: i, title: l, subtitle: r, actions: n, onActionExecute: c, altText: d } = s, o = import_react.useCallback((t, a) => {
		c?.({
			action: t,
			syntheticEvent: a,
			nativeEvent: a.nativeEvent,
			target: a.currentTarget
		});
	}, [c]), k = d || l || "";
	return /* @__PURE__ */ import_react.createElement("div", { className: "k-card" }, /* @__PURE__ */ import_react.createElement("img", {
		className: "k-card-image",
		src: m,
		style: { maxWidth: i },
		alt: k
	}), /* @__PURE__ */ import_react.createElement("div", { className: "k-card-body" }, l && /* @__PURE__ */ import_react.createElement("h5", { className: "k-card-title" }, l), r && /* @__PURE__ */ import_react.createElement("h6", { className: "k-card-subtitle" }, r)), /* @__PURE__ */ import_react.createElement("div", { className: "k-card-actions k-card-actions-vertical" }, n.map((t, a) => /* @__PURE__ */ import_react.createElement("span", {
		className: "k-card-action",
		key: `action-${a}-${t.title || t.value || a}`
	}, /* @__PURE__ */ import_react.createElement(A$5, {
		fillMode: "flat",
		onClick: (E) => o(t, E)
	}, t.title)))));
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/ai-prompt/AIPromptHeader.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var d = (a) => {
	const { activeView: l, toolbarItems: r, activeViewChange: t } = a, n = (e) => {
		t?.call(null, e);
	};
	return /* @__PURE__ */ import_react.createElement("div", { className: "k-prompt-header" }, /* @__PURE__ */ import_react.createElement(N$7, {
		keyboardNavigation: !1,
		role: "toolbar",
		className: "k-toolbar-flat"
	}, r.map((e) => import_react.isValidElement(e) ? e : /* @__PURE__ */ import_react.createElement(A$5, {
		key: e.name,
		className: l === e.name ? "k-selected" : "",
		size: "medium",
		themeColor: "primary",
		fillMode: "flat",
		rounded: "full",
		title: e.buttonText,
		svgIcon: e.buttonIcon,
		onClick: () => n(e.name)
	}, e.buttonText))));
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/ai-prompt/views/constants.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var m$1 = {
	name: "Output view",
	buttonText: "Output",
	buttonIcon: commentIcon
}, u = {
	name: "Commands view",
	buttonIcon: moreHorizontalIcon
}, c = {
	name: "Prompt view",
	buttonText: "Ask AI",
	buttonIcon: sparklesIcon
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/ai-prompt/AIPromptContext.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var o = import_react.createContext([{}, () => {}]), e$2 = () => import_react.useContext(o);
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/ai-prompt/AIPrompt.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var O = (c$11) => {
	const m = !_$1(packageMetadata, { component: "AIPrompt" }), n = v$11(packageMetadata), { activeView: a, toolbarItems: i, children: l, onActiveViewChange: o$23, onPromptRequest: p, onCommandExecute: g, style: v, dir: d$11, className: u, streaming: w, loading: f, onCancel: P, suggestionsView: t, ...V } = c$11, h = i || [c, m$1], [S, k] = import_react.useState({ activeView: a }), r = {
		...S,
		activeView: a,
		streaming: w,
		loading: f,
		suggestionsView: t != null ? t : "classic",
		onCancel: P,
		onActiveViewChange: o$23,
		onPromptRequest: p,
		onCommandExecute: g
	}, A = (C) => {
		k(C);
	};
	return /* @__PURE__ */ import_react.createElement(o.Provider, { value: [r, A] }, /* @__PURE__ */ import_react.createElement("div", {
		className: n$12("k-prompt", u),
		style: v,
		dir: d$11,
		...V
	}, /* @__PURE__ */ import_react.createElement(d, {
		activeView: r.activeView,
		toolbarItems: h,
		activeViewChange: o$23
	}), l, m && /* @__PURE__ */ import_react.createElement(M$5, { message: n })));
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/ai-prompt/AIPromptFooter.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var r = (o) => {
	const { children: e } = o;
	return /* @__PURE__ */ import_react.createElement("div", { className: "k-prompt-footer" }, /* @__PURE__ */ import_react.createElement("div", { className: "k-actions k-actions-start k-actions-horizontal k-prompt-actions" }, e));
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/ai-prompt/AIPromptContent.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var I = import_react.forwardRef((m, r) => {
	const { children: s, streaming: e, onCancel: o } = m, n = i$17().toLanguageString(l$5, D[l$5]), [c] = e$2(), l = c.activeView === m$1.name, p = e && !l, u = import_react.useCallback((a) => {
		a.key === "Escape" && e && o && (a.preventDefault(), o());
	}, [e, o]);
	return /* @__PURE__ */ import_react.createElement("div", {
		className: "k-prompt-content",
		ref: r,
		onKeyDown: u
	}, p && /* @__PURE__ */ import_react.createElement(ee, {
		onClick: o,
		svgIcon: stopSmIcon,
		icon: "stop-sm",
		size: "medium",
		positionMode: "absolute",
		className: "k-prompt-stop-fab k-generating",
		"aria-label": n,
		title: n
	}), /* @__PURE__ */ import_react.createElement("div", { className: "k-prompt-view" }, s));
});
I.displayName = "KendoReactAIPromptContent";
//#endregion
//#region node_modules/@progress/kendo-react-inputs/textarea/TextArea.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var Pe = a$12(), K = import_react.forwardRef((L, j) => {
	const u = n$13(Pe, L), { size: b = i$1.size, rounded: p = i$1.rounded, fillMode: P = i$1.fillMode, autoFocus: G = i$1.autoFocus, flow: x = i$1.flow, prefix: J = null, suffix: Q = null, ariaDescribedBy: U, ariaLabelledBy: W, autoSize: c, className: X, defaultValue: Y, disabled: o, readOnly: Z, required: d, rows: _, id: w, name: F, placeholder: ee, style: te, tabIndex: ae, value: v, valid: S, validationMessage: T, validityStyles: V, onChange: g, onFocus: h, onBlur: y, visited: we, touched: Fe, modified: Se, resizable: s, inputAttributes: re, textareaStyle: E, ...oe } = u, t = import_react.useRef(null), I = import_react.useCallback(() => {
		t.current && t.current.focus();
	}, []), O = import_react.useCallback(() => {
		t.current && t.current.blur();
	}, []), [B, M] = import_react.useState(Y), [ne, A] = import_react.useState(!1), [se, le] = s$15(J), [ie, ue] = s$15(Q), f = v !== void 0, m = f ? v : B, N = F || w, n = import_react.useCallback(() => ({
		element: t,
		focus: I,
		blur: O,
		get value() {
			return m;
		},
		get name() {
			return t.current && t.current.name;
		}
	}), [
		O,
		I,
		m
	]);
	import_react.useImperativeHandle(j, n);
	const [H, R] = import_react.useState("auto"), ce = I$4(), de = u$10(t, u.dir), k = S !== void 0 ? S : d ? !!m : !0;
	import_react.useEffect(() => {
		t.current && t.current.setCustomValidity && t.current.setCustomValidity(k ? "" : T || "");
	}, [k, T]), o$22(() => {
		t.current && R(`${t.current.scrollHeight}px`);
	}, [m]);
	const C = import_react.useCallback((r) => {
		const l = r.target.value;
		R("auto"), !f && !o && M(l), g && !o && v$10(g, r, {
			...n(),
			value: l
		}, { value: l });
	}, [
		M,
		g,
		o,
		f
	]), fe = import_react.useCallback((r) => {
		A(!0), h && !o && v$10(h, r, n(), void 0);
	}, [
		h,
		o,
		n
	]), me = import_react.useCallback((r) => {
		A(!1), y && !o && v$10(y, r, n(), void 0);
	}, [
		y,
		o,
		n
	]);
	T$4(t, {
		fieldName: N,
		onValueChange: import_react.useCallback((r) => {
			t.current && (t.current.value = r);
			C({
				target: t.current,
				currentTarget: t.current
			});
		}, [C]),
		enabled: !!N
	});
	const pe = import_react.useMemo(() => {
		let r = {};
		return c ? r = {
			resize: "none",
			overflow: "hidden",
			height: H
		} : s && (r = { resize: s }), {
			...r,
			...E
		};
	}, [
		c,
		s,
		H,
		E
	]), xe = {
		id: w || ce,
		role: "textbox",
		name: F,
		className: n$12("k-input-inner", "!k-overflow-auto", {
			"k-resize": !c && s !== "none",
			"k-resize-none": c || s === "none",
			"!k-flex-none": x === "vertical"
		}),
		ref: t,
		disabled: o,
		rows: _,
		placeholder: ee,
		readOnly: Z,
		required: d,
		tabIndex: A$6(ae, o),
		autoFocus: G,
		style: pe,
		"aria-labelledby": W,
		"aria-describedby": U,
		"aria-multiline": !0,
		"aria-disabled": o || void 0,
		"aria-required": d,
		value: f ? v : B,
		...Object.assign({}, oe, re),
		onChange: C,
		onFocus: fe,
		onBlur: me
	};
	return /* @__PURE__ */ import_react.createElement("span", {
		className: n$12("k-input", "k-textarea", {
			[`k-input-${e$17.sizeMap[b] || b}`]: b,
			[`k-input-${P}`]: P,
			[`k-rounded-${e$17.roundedMap[p] || p}`]: p,
			"k-invalid": !(k || V !== void 0 || V === !0),
			"k-required": d,
			"k-disabled": o,
			"k-focus": ne,
			"!k-flex-col": x === "vertical",
			"!k-flex-row": x === "horizontal"
		}, X),
		style: te,
		dir: de
	}, u.prefix && /* @__PURE__ */ import_react.createElement(se, { ...le }), /* @__PURE__ */ import_react.createElement("textarea", { ...xe }), u.suffix && /* @__PURE__ */ import_react.createElement(ie, { ...ue }));
});
K.propTypes = {
	ariaDescribedBy: import_prop_types.default.string,
	ariaLabelledBy: import_prop_types.default.string,
	autoSize: import_prop_types.default.bool,
	className: import_prop_types.default.string,
	defaultValue: import_prop_types.default.string,
	dir: import_prop_types.default.string,
	disabled: import_prop_types.default.bool,
	readOnly: import_prop_types.default.bool,
	rows: import_prop_types.default.number,
	id: import_prop_types.default.string,
	name: import_prop_types.default.string,
	placeholder: import_prop_types.default.string,
	style: import_prop_types.default.object,
	tabIndex: import_prop_types.default.number,
	value: import_prop_types.default.oneOfType([
		import_prop_types.default.string,
		import_prop_types.default.arrayOf(import_prop_types.default.string),
		import_prop_types.default.number
	]),
	onChange: import_prop_types.default.func,
	onFocus: import_prop_types.default.func,
	onBlur: import_prop_types.default.func,
	size: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large"
	]),
	rounded: import_prop_types.default.oneOf([
		"small",
		"medium",
		"large",
		"full",
		"none"
	]),
	fillMode: import_prop_types.default.oneOf([
		"solid",
		"flat",
		"outline"
	]),
	resizable: import_prop_types.default.oneOf([
		"none",
		"both",
		"horizontal",
		"vertical"
	]),
	autoFocus: import_prop_types.default.bool,
	flow: import_prop_types.default.oneOf(["vertical", "horizontal"])
};
var i$1 = {
	size: void 0,
	rounded: void 0,
	fillMode: void 0,
	autoFocus: !1,
	flow: "horizontal"
};
K.displayName = "KendoTextArea";
//#endregion
//#region node_modules/@progress/kendo-react-inputs/input/InputPrefix.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var f = import_react.forwardRef(({ orientation: t = "horizontal", ...s }, r) => {
	const a = import_react.useRef(null), m = import_react.useRef(null), n = o$21(), l = n && n.uTextBox;
	import_react.useImperativeHandle(a, () => ({ element: m.current })), import_react.useImperativeHandle(r, () => a.current);
	const c = import_react.useMemo(() => n$12(E$10.prefix({
		c: l,
		orientation: t
	}), s.className), [
		s.className,
		l,
		t
	]);
	return /* @__PURE__ */ import_react.createElement("span", {
		...s,
		className: c
	});
});
f.displayName = "KendoReactInputPrefix";
//#endregion
//#region node_modules/@progress/kendo-react-inputs/input/InputSeparator.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var m$2 = import_react.forwardRef(({ orientation: r = "vertical", ...a }, n) => {
	const t = import_react.useRef(null), s = import_react.useRef(null);
	return import_react.useImperativeHandle(t, () => ({ element: s.current })), import_react.useImperativeHandle(n, () => t.current), /* @__PURE__ */ import_react.createElement("span", {
		...a,
		className: n$12("k-input-separator", a.className, `k-input-separator-${r}`)
	});
});
m$2.displayName = "KendoReactInputSeparator";
//#endregion
//#region node_modules/@progress/kendo-react-inputs/input/InputSuffix.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var x = import_react.forwardRef(({ orientation: t = "horizontal", ...s }, u) => {
	const a = import_react.useRef(null), m = import_react.useRef(null), n = o$21(), l = n && n.uTextBox;
	import_react.useImperativeHandle(a, () => ({ element: m.current })), import_react.useImperativeHandle(u, () => a.current);
	const c = import_react.useMemo(() => n$12(E$10.suffix({
		c: l,
		orientation: t
	}), s.className), [
		s.className,
		l,
		t
	]);
	return /* @__PURE__ */ import_react.createElement("span", {
		...s,
		className: c
	});
});
x.displayName = "KendoReactInputSuffix";
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/ai-prompt/views/AIPromptViewRender.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var r$1 = (t) => {
	const [e] = e$2();
	return e.activeView === t.name ? t.children : null;
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/ai-prompt/AIPromptExpander.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var p$1 = (n) => {
	const [e, r] = import_react.useState(!0), { children: a, title: o } = n;
	return /* @__PURE__ */ import_react.createElement("div", { className: "k-prompt-expander" }, /* @__PURE__ */ import_react.createElement(A$5, {
		"aria-controls": n.id,
		fillMode: "flat",
		svgIcon: e ? chevronUpIcon : chevronDownIcon,
		title: o,
		onClick: () => r(!e),
		"aria-expanded": e
	}, o), e && /* @__PURE__ */ import_react.createElement("div", {
		id: n.id,
		className: "k-prompt-expander-content"
	}, a));
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/ai-prompt/views/AIPromptView.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var oe = (S) => {
	const { promptInput: A = K, generateButton: E = A$5, enableSpeechToText: n = !1, promptValue: I$6, promptSuggestions: p } = S, [r$27, i] = import_react.useState(I$6 || ""), [s] = e$2(), [T, g] = s$15(E), [C, h] = s$15(A), R = () => {
		s.onPromptRequest && s.onPromptRequest.call(null, r$27), i("");
	}, m = import_react.useRef(null), w = (t) => {
		i(t);
	};
	import_react.useEffect(() => {
		var t, o;
		(o = (t = m.current) == null ? void 0 : t.element) != null && o.current && requestAnimationFrame(() => {
			var l, c;
			if ((c = (l = m.current) == null ? void 0 : l.element) != null && c.current) {
				const a = m.current.element.current;
				a.style.height = "auto", a.style.height = `${a.scrollHeight}px`;
			}
		});
	}, [r$27]);
	const V = (t) => {
		i(t.target.value);
	}, b = {
		title: "Generate",
		children: "Generate",
		svgIcon: sparklesIcon
	}, y = {
		placeholder: "Ask or generate content with AI ...",
		rows: 2
	}, d = Object.keys(g).length > 0 ? g : b, k = Object.keys(h).length > 0 ? h : y, x$8 = (t) => {
		const { isFinal: o, alternatives: l } = t;
		if (o && l.length > 0) {
			const c = l[0].transcript;
			i((() => {
				const u = r$27;
				return u + (u && !u.endsWith(" ") && !u.endsWith(`
`) ? " " : "") + c;
			})());
		}
	};
	let f;
	return n && (typeof n == "object" ? f = {
		...n,
		onResult: n.onResult || x$8
	} : f = { onResult: x$8 }), /* @__PURE__ */ import_react.createElement(r$1, { name: c.name }, /* @__PURE__ */ import_react.createElement(I, {
		streaming: s.streaming,
		onCancel: s.onCancel
	}, /* @__PURE__ */ import_react.createElement(C, {
		ref: m,
		value: r$27,
		flow: "vertical",
		textareaStyle: { maxHeight: "110px" },
		autoSize: !0,
		suffix: n ? /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(m$2, { orientation: "horizontal" }), /* @__PURE__ */ import_react.createElement(x, { orientation: "horizontal" }, /* @__PURE__ */ import_react.createElement(ie, {
			fillMode: "flat",
			...f
		}))) : void 0,
		onChange: V,
		...k
	}), p && p.length > 0 && /* @__PURE__ */ import_react.createElement(p$1, { title: "Prompt Suggestions" }, /* @__PURE__ */ import_react.createElement(N$1, {
		suggestionsView: s.suggestionsView,
		suggestions: p.map((t, o) => ({
			id: o,
			text: t,
			description: t
		})),
		onSuggestionClick: (t) => {
			w(t.text);
		}
	}))), /* @__PURE__ */ import_react.createElement(r, null, /* @__PURE__ */ import_react.createElement(T, {
		themeColor: "primary",
		fillMode: "solid",
		rounded: "full",
		size: "medium",
		onClick: R,
		disabled: !r$27.trim(),
		...d
	}, d.children)));
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/ai-prompt/views/AIPromptOutputView.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var te = (w) => {
	const [P, d] = import_react.useState(""), r = import_react.useRef(null), [n] = e$2(), { outputs: m, showOutputRating: x, outputCard: z } = w, { header: p, body: u, actions: C } = z || {}, g = i$17(), a = g.toLanguageString(l$5, D[l$5]), A = (t) => {
		n.onPromptRequest && n.onPromptRequest.call(null, t.prompt, {
			...t,
			isRetry: !0
		}), E();
	}, N = (t) => {
		t != null && t.responseContent && navigator.clipboard.writeText(t.responseContent), d(t.id), setTimeout(() => {
			d("");
		}, 1e3);
	}, k = (t, l) => {
		n.onPromptRequest && n.onPromptRequest.call(null, t.prompt, {
			...t,
			ratingType: l,
			isRetry: !1
		}), E();
	}, E = () => {
		r && r.current && r.current.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, O = /* @__PURE__ */ import_react.createElement(d$8, null, /* @__PURE__ */ import_react.createElement(t$5, null, /* @__PURE__ */ import_react.createElement(a$6, null, /* @__PURE__ */ import_react.createElement("span", {
		className: "k-skeleton k-skeleton-text k-skeleton-pulse",
		style: { width: "200px" }
	})), /* @__PURE__ */ import_react.createElement(a$5, null, /* @__PURE__ */ import_react.createElement("span", {
		className: "k-skeleton k-skeleton-text k-skeleton-pulse",
		style: { width: "100%" }
	}))), /* @__PURE__ */ import_react.createElement(t$4, null, /* @__PURE__ */ import_react.createElement("span", {
		className: "k-skeleton k-skeleton-rect k-skeleton-pulse",
		style: { height: "80px" }
	})), /* @__PURE__ */ import_react.createElement(s$7, null, n.streaming && n.onCancel ? /* @__PURE__ */ import_react.createElement(A$5, {
		size: "medium",
		themeColor: "base",
		fillMode: "flat",
		rounded: "medium",
		svgIcon: stopSmIcon,
		title: a,
		onClick: n.onCancel
	}, a) : /* @__PURE__ */ import_react.createElement("span", {
		className: "k-skeleton k-skeleton-text k-skeleton-pulse",
		style: { width: "100%" }
	}))), M = (t, l) => C ? C(t) : l && n.onCancel ? /* @__PURE__ */ import_react.createElement(A$5, {
		size: "medium",
		themeColor: "base",
		fillMode: "flat",
		rounded: "medium",
		svgIcon: stopSmIcon,
		title: a,
		onClick: n.onCancel
	}, a) : /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(A$5, {
		size: "medium",
		themeColor: "primary",
		fillMode: "flat",
		rounded: "medium",
		title: "Copy",
		svgIcon: P === t.id ? checkIcon : copyIcon,
		onClick: () => N(t)
	}, "Copy"), /* @__PURE__ */ import_react.createElement(A$5, {
		size: "medium",
		themeColor: "base",
		fillMode: "flat",
		rounded: "medium",
		title: "Retry",
		svgIcon: arrowRotateCwIcon,
		onClick: () => A(t)
	}, "Retry"), x && /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("span", { className: "k-spacer" }), /* @__PURE__ */ import_react.createElement(A$5, {
		size: "medium",
		themeColor: t.ratingType === "positive" ? "primary" : "base",
		fillMode: "flat",
		rounded: "medium",
		title: "Rate up",
		svgIcon: thumbUpOutlineIcon,
		onClick: () => k(t, "positive")
	}), /* @__PURE__ */ import_react.createElement(A$5, {
		size: "medium",
		themeColor: t.ratingType === "negative" ? "primary" : "base",
		fillMode: "flat",
		rounded: "medium",
		title: "Rate down",
		svgIcon: thumbDownOutlineIcon,
		onClick: () => k(t, "negative")
	}))), s = m == null ? void 0 : m.map((t, l) => {
		const q = !!(n.streaming && !n.loading && l === 0);
		return /* @__PURE__ */ import_react.createElement(d$8, { key: `${t.id}_${l}` }, /* @__PURE__ */ import_react.createElement(t$5, null, p ? p(t) : /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, t.title && /* @__PURE__ */ import_react.createElement(a$6, null, t.title), t.subTitle && /* @__PURE__ */ import_react.createElement(a$5, null, t.subTitle))), /* @__PURE__ */ import_react.createElement(t$4, null, u ? u(t) : t.responseContent), /* @__PURE__ */ import_react.createElement(s$7, null, M(t, q)));
	}), S = /* @__PURE__ */ import_react.createElement(d$8, null, /* @__PURE__ */ import_react.createElement(t$4, null, g.toLanguageString(n$4, D[n$4])));
	return /* @__PURE__ */ import_react.createElement(r$1, { name: m$1.name }, /* @__PURE__ */ import_react.createElement(I, {
		ref: r,
		streaming: n.streaming,
		onCancel: n.onCancel
	}, /* @__PURE__ */ import_react.createElement("div", { className: "k-card-list" }, n.loading && O, s, (!s || s.length === 0) && !n.loading && S)));
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/ai-prompt/views/AIPromptCommandsView.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var i = (t) => t == null ? void 0 : t.map((e) => /* @__PURE__ */ import_react.createElement(f$8, {
	title: e.text,
	key: e.id,
	svgIcon: e.svgIcon,
	data: e
}, e.children && i(e.children || []))), h = (t) => {
	const { commands: e } = t, [n] = e$2(), c = (p) => {
		var a, l, m;
		const o = (l = (a = p.target) == null ? void 0 : a.props) == null ? void 0 : l.data;
		(m = o.children) != null && m.length || n.onCommandExecute && n.onCommandExecute.call(null, o);
	};
	return /* @__PURE__ */ import_react.createElement(r$1, { name: u.name }, /* @__PURE__ */ import_react.createElement(I, {
		streaming: n.streaming,
		onCancel: n.onCancel
	}, /* @__PURE__ */ import_react.createElement("div", { className: "k-prompt-view" }, /* @__PURE__ */ import_react.createElement(U$3, {
		onSelect: c,
		selected: ""
	}, i(e != null ? e : [])))));
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/inline-ai-prompt/InlineAIPromptPopup.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var l = ({ show: e = !1, anchor: r, onOpen: t, onClose: o, animate: p = !0, appendTo: m, popupOptions: n = {}, children: a, style: u }) => /* @__PURE__ */ import_react.createElement(re, {
	show: e,
	anchor: r,
	style: u,
	animate: p,
	appendTo: m,
	onOpen: t,
	onClose: o,
	...n
}, a);
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/inline-ai-prompt/InlineAIPromptInput.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var U = ({ placeholder: P = "Ask or generate content with AI...", promptValue: v, onMenuClick: x$7, promptInput: c = K, generateButton: A, enableSpeechToText: a = !1, streaming: e = !1, commands: i, onPromptRequest: u, onPromptCancel: C }) => {
	const [o, m] = import_react.useState(v || ""), [E, f$11] = s$15(A), [p, d] = s$15(c), S = c === K || p === K, w = {
		svgIcon: e ? stopSmIcon : paperPlaneIcon,
		active: (!!e).toString(),
		title: "Send Button",
		"aria-label": "Send Button",
		disabled: !o.trim() && !e,
		"aria-disabled": !o.trim() && !e
	}, y = {
		placeholder: P,
		className: "!k-flex-row",
		...S ? { autoSize: !0 } : {},
		rows: 1
	}, k = i && i.length > 0, N = Object.keys(f$11).length > 0 ? f$11 : w, b = Object.keys(d).length > 0 ? d : y, g = (n) => {
		const { isFinal: r, alternatives: h } = n;
		if (r && h.length > 0) {
			const j = h[0].transcript;
			m((() => {
				const s = o;
				return s + (s && !s.endsWith(" ") && !s.endsWith(`
`) ? " " : "") + j;
			})());
		}
	}, V = (n) => {
		const r = n.target.value;
		m(r);
	}, I = () => {
		o.trim() && u && u(o.trim());
	};
	return /* @__PURE__ */ import_react.createElement(p, {
		value: o,
		onChange: V,
		onKeyDown: (n) => {
			n.key === "Enter" && !n.shiftKey && (n.preventDefault(), I());
		},
		prefix: k || a ? /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(f, { className: "!k-align-items-start" }, k && /* @__PURE__ */ import_react.createElement(A$5, {
			"aria-label": "Commands Button",
			title: "Commands Button",
			fillMode: "flat",
			svgIcon: menuIcon,
			onClick: x$7
		}), a && /* @__PURE__ */ import_react.createElement(ie, {
			fillMode: "flat",
			...typeof a == "object" ? {
				...a,
				onResult: a.onResult || g
			} : { onResult: g }
		})), /* @__PURE__ */ import_react.createElement(m$2, null)) : void 0,
		suffix: /* @__PURE__ */ import_react.createElement(x, { className: "!k-align-items-start" }, /* @__PURE__ */ import_react.createElement(E, {
			className: n$12("k-prompt-send", {
				"k-generating": e,
				"k-active": e
			}),
			fillMode: "flat",
			onClick: e ? C : I,
			...N
		})),
		...b
	});
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/inline-ai-prompt/InlineAIPrompt.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
var Te = (v) => {
	const M = !_$1(packageMetadata, { component: "InlineAIPrompt" }), b = v$11(packageMetadata), { outputs: i = [], outputCard: w, promptInput: O = K, generateButton: P = A$5, promptPlaceholder: S = "Ask or generate content with AI...", promptValue: T, onPromptRequest: A, onCopy: d, onDiscard: p, outputActions: B, onOutputAction: f, enableSpeechToText: D = !1, streaming: s, onPromptCancel: r, show: N = !1, anchor: R, width: l$15, height: c, onOpen: F, onClose: m, animate: K$2 = !0, appendTo: W, commands: u, onCommandExecute: g, style: $, className: q, popupOptions: z = {}, ...V } = v, [_, k] = import_react.useState(""), [j, C] = import_react.useState(!1), [G, H] = import_react.useState({
		left: 0,
		top: 0
	}), h = import_react.useRef(null), { body: y, actions: I$5 } = w || {}, J = B || [{
		id: "copy",
		text: "Copy",
		svgIcon: copyIcon,
		themeColor: "primary",
		title: "Copy"
	}, {
		id: "discard",
		text: "Discard",
		svgIcon: cancelOutlineIcon,
		themeColor: "base",
		title: "Discard"
	}], Q = (e) => {
		e.responseContent && (navigator.clipboard.writeText(e.responseContent), k(e.id), setTimeout(() => k(""), 1e3)), d?.(e);
	}, U$4 = (e) => {
		p?.(e);
	}, X = (e, n) => {
		switch (e.id) {
			case "copy":
				Q(n);
				break;
			case "discard":
				U$4(n);
				break;
			default:
				f?.(e, n);
				break;
		}
	}, Y = (e) => {
		if (!h.current) return;
		const n = h.current.getBoundingClientRect();
		H({
			left: n.left,
			top: n.bottom
		}), C(!0);
	}, Z = () => {
		C(!1);
	}, L = (e) => {
		C(!1), g && g(e);
	}, ee = (e) => e == null ? void 0 : e.map((n) => ({
		text: n.text,
		svgIcon: n.svgIcon,
		data: n,
		items: n.children ? n.children.map((a) => ({
			text: a.text,
			data: a
		})) : void 0
	})), te = import_react.useCallback((e) => {
		e.key === "Escape" && (s && r ? r() : !s && m && m({ target: null }));
	}, [
		s,
		r,
		m
	]), ne = {
		...$,
		...l$15 && { width: l$15 },
		...c && { height: c }
	}, ae = {
		...l$15 && { width: l$15 },
		...c && { height: c }
	}, oe = /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("div", {
		className: n$12("k-prompt", q),
		style: ne,
		onKeyDown: te,
		...V
	}, /* @__PURE__ */ import_react.createElement(I, { ref: h }, i && i.length > 0 && /* @__PURE__ */ import_react.createElement("div", { className: "k-card-list" }, i.map((e, n) => /* @__PURE__ */ import_react.createElement(d$8, { key: `${e.id}_${n}` }, /* @__PURE__ */ import_react.createElement(t$4, null, y ? y(e) : e.responseContent), /* @__PURE__ */ import_react.createElement(s$7, null, I$5 ? I$5(e) : /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, J.map((a) => {
		var o;
		return a.spacer ? /* @__PURE__ */ import_react.createElement("span", {
			key: a.id,
			className: "k-spacer"
		}) : /* @__PURE__ */ import_react.createElement(A$5, {
			key: a.id,
			size: "medium",
			themeColor: a.themeColor || "primary",
			fillMode: "flat",
			rounded: "medium",
			title: (o = a.title) != null ? o : a.text,
			svgIcon: a.id === "copy" && _ === e.id ? checkIcon : a.svgIcon,
			onClick: () => X(a, e)
		}, a.text);
	})))))), /* @__PURE__ */ import_react.createElement(U, {
		promptValue: T,
		placeholder: S,
		onPromptRequest: A,
		onMenuClick: Y,
		onPromptCancel: r,
		promptInput: O,
		generateButton: P,
		enableSpeechToText: D,
		streaming: s,
		commands: u
	}))), M && /* @__PURE__ */ import_react.createElement(M$5, { message: b }));
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(l, {
		show: N,
		anchor: R,
		onOpen: F,
		onClose: m,
		animate: K$2,
		appendTo: W,
		popupOptions: z,
		style: ae
	}, oe), /* @__PURE__ */ import_react.createElement(w$1, {
		show: j,
		offset: G,
		onClose: Z,
		items: ee(u),
		onSelect: (e) => {
			var a, o;
			const n = (a = e.item) == null ? void 0 : a.data;
			n && !((o = n.children) != null && o.length) && L(n);
		}
	}));
};
//#endregion
//#region node_modules/@progress/kendo-react-conversational-ui/index.mjs
/**
* @license
*-------------------------------------------------------------------------------------------
* Copyright © 2026 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------
*/
//#endregion
export { O as AIPrompt, h as AIPromptCommandsView, I as AIPromptContent, r as AIPromptFooter, te as AIPromptOutputView, oe as AIPromptView, r$1 as AIPromptViewRender, Je as Chat, je as ChatMessage, n as DEFAULT_FIELD_MAPPING, N as HeroCard, Te as InlineAIPrompt, Te$1 as PromptBox, m as PromptBoxActionButton, p as PromptBoxSpeechToTextButton, e as PromptBoxUploadButton, d as PromptHeader, N$1 as SuggestionGroup, u as commandsViewDefaults, h$1 as extractFieldMappingFromProps, u$1 as isStandardMessageFormat, r$2 as mapDataArrayToMessages, F as mapDataToMessage, s as mapMessageToCustomFormat, m$1 as outputViewDefaults, c as promptViewDefaults };

//# sourceMappingURL=@progress_kendo-react-conversational-ui.js.map