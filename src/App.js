import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Materials from "./components/Materials";
import Navbar from "./components/Navbar";
import Placement from "./components/Placement";
import Kzone from "./components/KZ";
import Labs from "./components/Labs";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/Placement" element={<Navigate to="/placement" replace />} />
          <Route path="/knowledge-zone" element={<Kzone />} />
          <Route path="/kzone" element={<Navigate to="/knowledge-zone" replace />} />
          <Route path="/Kzone" element={<Navigate to="/knowledge-zone" replace />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/Labs" element={<Navigate to="/labs" replace />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Projects" element={<Navigate to="/projects" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
