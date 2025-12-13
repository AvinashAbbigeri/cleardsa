import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ProblemsListPage.css";
import problemsData from "../data/problemsData";

export default function ProblemsListPage() {
  const problems = Object.keys(problemsData).map((key) => {
    const item = problemsData[key];

    return {
      id: key,
      title: item.title,
      difficulty: item.difficulty || "Unknown",
      topic: item.topic || "General",
    };
  });

  return (
    <>
      <Navbar />

      <div className="problems-page">
        <h1 className="problems-title">All Problems</h1>

        <div className="problems-list">
          {problems.map((p, i) => (
            <a key={i} href={`/problems/${p.id}`} className="problem-card">
              <div className="p-left">
                <h3>{p.title}</h3>
                <span className="topic">{p.topic}</span>
              </div>

              <div className={`difficulty ${p.difficulty.toLowerCase()}`}>
                {p.difficulty}
              </div>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
