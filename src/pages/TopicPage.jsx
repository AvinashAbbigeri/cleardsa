import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import topicsData from "../data/topicsData";
import problemsData from "../data/problemsData";
import "./TopicPage.css";

export default function TopicPage() {
  const { topicId } = useParams();
  const topic = topicsData[topicId];

  useEffect(() => {
    if (topic) {
      document.title = `${topic.title} — ClearDSA`;
    } else {
      document.title = "Topic not found — ClearDSA";
    }
  }, [topic]);

  if (!topic) {
    return (
      <>
        <Navbar />
        <div className="topic-page not-found">
          <h2>404 — Topic not found</h2>
          <p>The topic “{topicId}” does not exist.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="topic-page">
        <h1 className="topic-title">{topic.title}</h1>
        <p className="topic-desc">{topic.description}</p>

        {/* RELATED PROBLEMS */}
        <section>
          <h2>Related Problems</h2>
          <ul className="topic-list">
            {topic.problems.map((id) => (
              <li key={id}>
                <Link to={`/problems/${id}`}>
                  {problemsData[id]?.title || id}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* RELATED ALGORITHMS */}
        <section>
          <h2>Related Algorithms</h2>
          <ul className="topic-list">
            {topic.algorithms.map((algo) => (
              <li key={algo}>
                <Link to={`/algorithms/${algo}`}>{algo}</Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
