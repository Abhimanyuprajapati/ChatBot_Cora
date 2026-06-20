import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>404</h1>
      <p style={{ margin: 0 }}>Page not found.</p>
      <Link to="/">Go to home</Link>
    </div>
  );
}
