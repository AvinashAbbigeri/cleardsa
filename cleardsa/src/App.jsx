import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

import { Helmet } from "react-helmet-async";

<Helmet>
  <title>ClearDSA — Learn Data Structures & Algorithms the Right Way</title>
  <meta
    name="description"
    content="ClearDSA helps you understand Data Structures and Algorithms by focusing on the why, not memorization."
  />
  <meta name="keywords" content="DSA, algorithms, data structures, coding interviews" />
  <meta property="og:title" content="ClearDSA" />
  <meta property="og:description" content="DSA made simple, understand the Why." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://cleardsa.com" />

</Helmet>

export default function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Footer />
    </>
  );
}
