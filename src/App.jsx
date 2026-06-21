import { useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: "fixed",
          top: "16px",
          right: "16px",
          zIndex: 999,
          border: "1.5px solid #000000",
          backgroundColor: darkMode ? "#1d2b3a" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
          borderRadius: "50%",
          width: "42px",
          height: "42px",
          fontSize: "18px",
          cursor: "pointer",
        }}
        title="Toggle Dark/Light Mode"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <Dashboard />
    </div>
  );
}

export default App;