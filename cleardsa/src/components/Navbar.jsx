import { useEffect, useState } from "react";
import './Navbar.css';

export default function Navbar() {

  const [theme, setTheme] = useState("light");

  // Load saved theme on startup
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  // Toggle function
  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">

        <div className="nav-left">
          <a href="/" className="nav-logo">ClearDSA</a>
        </div>

        <div className="nav-links">
          <a href="/problems" className="nav-link">Problems</a>
          <a href="/algorithms" className="nav-link">Algorithms</a>
          <a href="/topics" className="nav-link">Topics</a>
        </div>

        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

      </div>
    </nav>
  );
}
