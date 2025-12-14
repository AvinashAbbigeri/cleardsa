import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import algorithmsData from "../data/algorithmsData";
import { Link } from "react-router-dom";
import "./AlgorithmsListPage.css";
import { useEffect } from "react";

export default function AlgorithmsListPage() {
  useEffect(() => {
    document.title = "Algorithms — ClearDSA";
  }, []);

  return (
    <>
      <Navbar />

      <main className="algorithms-page">
        <h1 className="algorithms-title">Algorithms</h1>

        <div className="algorithms-list">
          {Object.entries(algorithmsData).map(([slug, algo]) => (
            <Link
              key={slug}
              to={`/algorithms/${slug}`}
              className="algorithm-card"
            >
              <h3>{algo.title}</h3>
              <p>{algo.description}</p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
