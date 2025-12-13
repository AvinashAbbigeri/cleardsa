import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import algorithmsData from "../data/algorithmsData";
import "./AlgorithmPage.css";
import CodeBlock from "../components/CodeBlock";

export default function AlgorithmPage() {
  const { algorithmId } = useParams();
  const algo = algorithmsData[algorithmId];

  if (!algo) {
    return (
      <>
        <Navbar />
        <main className="algorithm-page not-found">
          <h2>404 — Algorithm not found</h2>
          <p>The algorithm “{algorithmId}” does not exist.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="algorithm-page">
        <h1 className="algorithm-title">{algo.title}</h1>
        <p className="algorithm-desc">{algo.description}</p>

        <section>
          <h2>Steps</h2>
          <ol>
            {algo.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2>Code</h2>
            <CodeBlock code={algo.code} language="python" />
        </section>

        <section>
          <h2>Complexity</h2>
          <p>Time: {algo.complexity.time}</p>
          <p>Space: {algo.complexity.space}</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
