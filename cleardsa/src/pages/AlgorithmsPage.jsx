import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AlgorithmsPage.css";

export default function AlgorithmsPage() {
  return (
    <>
      <Navbar />

      <div className="algo-page">

        <div className="algo-content">

          <h1 className="algo-title">Binary Search</h1>

          <p className="algo-desc">
            Binary search is a divide-and-conquer algorithm that finds an element
            in a sorted array in O(log n) time.
          </p>

          <h2 className="algo-heading">Key Idea</h2>
          <p>
            At each step, we eliminate half of the search space by comparing the 
            middle element with the target.
          </p>

          <h2 className="algo-heading">Pseudocode</h2>
          <pre>
{`function binarySearch(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1`}
          </pre>

          <h2 className="algo-heading">Complexity</h2>
          <p><b>Time:</b> O(log n)</p>
          <p><b>Space:</b> O(1)</p>

        </div>

      </div>

      <Footer />
    </>
  );
}
