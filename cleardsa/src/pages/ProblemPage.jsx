import "./ProblemPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function ProblemPage() {
  return (
    <>

    <Navbar />

    <div className="problem-page">

      {/* LEFT NAV (Desktop) */}
      <aside className="side-nav">
        <a href="#question">Question</a>
        <a href="#examples">Examples</a>
        <a href="#code">Code</a>
        <a href="#explanation">Explanation</a>
        <a href="#complexity">Complexity</a>
      </aside>

      {/* TOP NAV (Mobile) */}
      <div className="mobile-nav">
        <a href="#question">Q</a>
        <a href="#examples">Ex</a>
        <a href="#code">{`</>`}</a>
        <a href="#explanation">Exp</a>
        <a href="#complexity">O(n)</a>
      </div>

      {/* MAIN CONTENT */}
      <main className="content">

        <section id="question" className="section-block">
          <h1 className="title">Two Sum</h1>
          <p className="desc">
            Given an array of integers nums and an integer target...
          </p>
        </section>

        <section id="examples" className="section-block">
          <h2>Examples</h2>
          <pre>
{`Input: nums = [2,7,11,15], target = 9
Output: [0,1]`}
          </pre>
        </section>

        <section id="code" className="section-block">
          <h2>Code</h2>
          <pre>
{`def twoSum(nums, target):
    mp = {}
    for i, val in enumerate(nums):
        diff = target - val
        if diff in mp:
            return [i, mp[diff]]
        mp[val] = i`}
          </pre>
        </section>

        <section id="explanation" className="section-block">
          <h2>Explanation</h2>
          <p>
            We use a hash map to store values and indexes...
          </p>
        </section>

        <section id="complexity" className="section-block">
          <h2>Complexity</h2>
          <p>Time: O(n)</p>
          <p>Space: O(n)</p>
        </section>

      </main>

    </div>

    <Footer />
    </>
  );
}
