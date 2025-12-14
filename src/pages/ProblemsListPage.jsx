import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import problemsData from "../data/problemsData";
import "./ProblemsListPage.css";

export default function ProblemsListPage() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("all");

  useEffect(() => {
    document.title = "DSA Problems — ClearDSA";
  }, []);

  const problems = Object.entries(problemsData)
    .map(([id, p]) => ({ id, ...p }))
    .filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      difficulty === "all" ? true : p.difficulty?.toLowerCase() === difficulty
    )


  return (
    <>
      <Navbar />

      <main className="problems-page">
        <h1 className="problems-title">Problems</h1>

        {/* SEARCH */}
        <input
          className="search-input"
          placeholder="Search problems..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* FILTERS */}
        <div className="filters">
          {["all", "easy", "medium", "hard"].map((lvl) => (
            <button
              key={lvl}
              className={difficulty === lvl ? "active" : ""}
              onClick={() => setDifficulty(lvl)}
            >
              {lvl.toUpperCase()}
            </button>
          ))}
        </div>

        {/* LIST */}
        <div className="problems-list">
          {problems.map((p) => (
            <Link key={p.id} to={`/problems/${p.id}`} className="problem-card">
              <div className="p-left">
                <h3>{p.title}</h3>
                <span className="topic">{p.topic}</span>
              </div>
              <div className={`difficulty ${p.difficulty}`}>
                {p.difficulty}
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
