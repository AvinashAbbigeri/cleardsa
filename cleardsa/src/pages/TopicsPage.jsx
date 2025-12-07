import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./TopicsPage.css";

export default function TopicsPage() {

  const [selected, setSelected] = useState("Problems");  // default tab

  const problemsTopics = [
    "Arrays",
    "Binary Search",
    "HashMap",
    "Two Pointers",
    "Sliding Window",
    "Dynamic Programming",
    "Recursion",
    "Graphs",
    "Trees",
    "Linked List"
  ];

  const algoTopics = [
    "Sorting Algorithms",
    "Searching Algorithms",
    "Greedy Algorithms",
    "Graph Algorithms",
    "Dynamic Programming",
    "Divide & Conquer",
    "Backtracking"
  ];

  // choose which list to show
  const currentList = selected === "Problems" ? problemsTopics : algoTopics;

  return (
    <>
      <Navbar />

      <div className="topics-page">

        {/* DROPDOWN */}
        <div className="dropdown">
          <select 
            className="dropdown-select" 
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="Problems">Problem List</option>
            <option value="Algorithms">Algorithm List</option>
          </select>
        </div>

        {/* TOPICS LIST */}
        <div className="topics-list">
          {currentList.map((topic, index) => (
            <a 
              key={index} 
              href={`/topics/${topic.toLowerCase().replace(/ /g, "-")}`} 
              className="topic-item"
            >
              {topic}
            </a>
          ))}
        </div>

      </div>

      <Footer />
    </>
  );
}
