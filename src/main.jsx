import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './styles/Theme.css';
import './App.css';
import './index.css'

import ProblemPage from './pages/ProblemPage.jsx'
import TopicPage from "./pages/TopicPage.jsx";
import ProblemsListPage from "./pages/ProblemsListPage.jsx";
import TopicsListPage from "./pages/TopicsPageList.jsx";
import AlgorithmsListPage from "./pages/AlgorithmsListPage.jsx";
import AlgorithmPage from "./pages/AlgorithmPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/problems" element={<ProblemsListPage />} />
        <Route path="/problems/:id" element={<ProblemPage />} />
        <Route path="/topics" element={<TopicsListPage />} />
        <Route path="/topics/:topicId" element={<TopicPage />} />
        <Route path="/algorithms" element={<AlgorithmsListPage />} />
        <Route path="/algorithms/:algorithmId" element={<AlgorithmPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
