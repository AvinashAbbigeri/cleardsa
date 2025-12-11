import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './styles/Theme.css';
import './App.css';
import './index.css'

import ProblemPage from './pages/ProblemPage.jsx'
import AlgorithmsPage from "./pages/AlgorithmsPage.jsx";
import TopicsPage from "./pages/TopicsPage.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/problems" element={<ProblemPage />} />
        <Route path="/algorithms" element={<AlgorithmsPage />} />
        <Route path="/topics" element={<TopicsPage />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

