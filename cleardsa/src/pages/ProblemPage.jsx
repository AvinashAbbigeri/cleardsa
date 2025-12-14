import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import problemsData from "../data/problemsData";
import "./ProblemPage.css";
import CodeBlock from "../components/CodeBlock";

<Helmet>
  <title>{problem.title} — ClearDSA</title>
  <meta
    name="description"
    content={`Learn ${problem.title} with clear explanation, examples, and code. Understand the intuition behind the solution.`}
  />
  <meta property="og:title" content="ClearDSA" />
  <meta property="og:description" content="DSA made simple, understand the Why." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://cleardsa.com" />

</Helmet>

export default function ProblemPage() {
  const { id } = useParams();
  const problem = problemsData[id];

  const [activeSection, setActiveSection] = useState("question");

  // ---- SCROLL SPY EFFECT ----
  useEffect(() => {
    const sections = document.querySelectorAll(".section-block");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px", // middle of screen
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  if (!problem) {
    return (
      <>
        <Navbar />
        <div className="problem-page not-found">
          <h2>404 — Problem not found</h2>
          <p>The problem “{id}” does not exist.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="problem-page">

        {/* LEFT NAV */}
        <aside className="side-nav">
          <a className={activeSection === "question" ? "active" : ""} href="#question">Question</a>
          <a className={activeSection === "examples" ? "active" : ""} href="#examples">Examples</a>
          <a className={activeSection === "code" ? "active" : ""} href="#code">Code</a>
          <a className={activeSection === "explanation" ? "active" : ""} href="#explanation">Explanation</a>
          <a className={activeSection === "complexity" ? "active" : ""} href="#complexity">Complexity</a>
        </aside>

        {/* MOBILE NAV */}
        <div className="mobile-nav">
          <a className={activeSection === "question" ? "active" : ""} href="#question">Q</a>
          <a className={activeSection === "examples" ? "active" : ""} href="#examples">Ex</a>
          <a className={activeSection === "code" ? "active" : ""} href="#code">{`</>`}</a>
          <a className={activeSection === "explanation" ? "active" : ""} href="#explanation">Exp</a>
          <a className={activeSection === "complexity" ? "active" : ""} href="#complexity">O(n)</a>
        </div>

        {/* MAIN CONTENT */}
        <main className="content">

          <section id="question" className="section-block">
            <h1 className="title">{problem.title}</h1>
            <p className="desc">{problem.question}</p>
          </section>

          <section id="examples" className="section-block">
            <h2>Examples</h2>
            <pre>{problem.examples}</pre>
          </section>


          <section id="code" className="section-block">
            <h2>Code</h2>
            <CodeBlock code={problem.code} language="python" />
          </section>

          <section id="explanation" className="section-block">
            <h2>Explanation</h2>
            <p>{problem.explanation}</p>
          </section>

          <section id="complexity" className="section-block">
            <h2>Complexity</h2>
            <p>Time: {problem.complexity.time}</p>
            <p>Space: {problem.complexity.space}</p>
          </section>

        </main>
      </div>

      <Footer />
    </>
  );
}
