import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

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

        <NavLink to="/" className="nav-logo">
          ClearDSA
        </NavLink>

        <div className="nav-links">
          <NavLink to="/problems" className="nav-link">
            Problems
          </NavLink>
          <NavLink to="/algorithms" className="nav-link">
            Algorithms
          </NavLink>
          <NavLink to="/topics" className="nav-link">
            Topics
          </NavLink>
        </div>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

      </div>
    </nav>
  );
}
