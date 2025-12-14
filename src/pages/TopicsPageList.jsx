import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import topicsData from "../data/topicsData";
import "./TopicsPageList.css"

export default function TopicsListPage() {
  useEffect(() => {
  document.title = "DSA Topics — ClearDSA";
}, []);

  return (
    <>
      <Navbar />

      <main className="topics-page">
        <h1 className="topics-title">Topics</h1>

        <div className="topics-list">
          {Object.entries(topicsData).map(([slug, topic]) => (
            <Link
              key={slug}
              to={`/topics/${slug}`}
              className="topic-card"
            >
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
