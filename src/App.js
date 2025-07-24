import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/Placement" element={<Placement />} />
          <Route path="/Kzone" element={<Kzone />} />
          <Route path="/Labs" element={<Labs />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
