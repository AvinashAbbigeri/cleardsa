import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing">

      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">ClearDSA</h1>
        <p className="hero-subtitle">DSA made simple, understand the "Why?".</p>
      </section>

      {/* Search Bar */}
      <section className="search-section">
        <input 
          type="text" 
          placeholder="Search problems..." 
          className="search-bar"
        />
      </section>

      {/* Categories */}
      <section className="categories">
        <h2 className="section-title">Categories</h2>
        <div className="category-grid">
          {[
            "Array & Hashing", "Two Pointers", "Sliding Window", "Stack", "Binary Search", "Linked List", "Trees", "Heap", "Backtracking", "Tries", "Graphs", "Adv. Graphs", "1-D DP", "2-D DP", "Greedy", "Intervals", "Geometry", "Bit Manipulation"
          ].map((cat) => (
            <div className="category-card" key={cat}>{cat}</div>
          ))}
        </div>
      </section>

      {/* Recent Problems */}
      <section className="recent">
        <h2 className="section-title">Recently Added</h2>
        <ul className="recent-list">
          <li>Two Sum — Explained clearly</li>
          <li>Valid Parentheses — Why stack works</li>
          <li>Binary Search — The intuition behind it</li>
          <li>Kadane’s Algorithm — Understanding the pattern</li>
        </ul>
      </section>

    </div>
  );
}
