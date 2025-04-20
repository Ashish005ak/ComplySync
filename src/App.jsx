import { useState } from "react";
import { auth, provider, signInWithPopup } from "./firebase";

const userToNotionLink = {
  "mail.ashish005ak@gmail.com": "https://www.notion.so/1db84b6779a5802cad5ee48725974e63?v=1db84b6779a58005b6e3000ce56cc066&pvs=4"
};

function App() {
  const [error, setError] = useState("");

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const email = result.user.email;
        if (userToNotionLink[email]) {
          window.location.href = userToNotionLink[email];
        } else {
          setError("Access Denied: Not authorized");
        }
      })
      .catch(() => setError("Google Sign-In Failed"));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
 
        background: "linear-gradient(135deg,rgb(13, 13, 14),rgb(11, 11, 11))",
        fontFamily: "Segoe UI, sans-serif"
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#FDF6E3",
          marginBottom: "2rem"
        }}
      >
        🛡️ Compliance Portal 🛡️
      </h1>
      <button
        onClick={signIn}
        style={{
          backgroundColor: "#2563eb",
          color: "#fff",
          padding: "12px 24px",
          fontSize: "1rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgb(247, 244, 244)",
          transition: "background-color 0.3s ease"
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
      >
        Login with Google
      </button>
      {error && (
        <p style={{ color: "#dc2626", marginTop: "1rem", fontWeight: "500" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default App;
