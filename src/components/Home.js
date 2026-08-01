import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid px-3 px-md-5 py-4">
      {/* Hero Banner */}
      <div className="p-4 p-md-5 mb-5 rounded-4 shadow-lg text-center text-md-start position-relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)", color: "#fff" }}>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold mb-3 fs-6">
              🚀 Production Ready & Academic Hub
            </span>
            <h1 className="display-4 fw-extrabold mb-3">
              Master Your Engineering Journey with <span style={{ color: "#38bdf8" }}>StudiMI</span>
            </h1>
            <p className="lead opacity-90 mb-4" style={{ maxWidth: "680px" }}>
              Your complete platform for verified notes, laboratory practicals, project source code, interview prep, and knowledge zone tutorials.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <Link to="/materials" className="btn btn-info btn-lg fw-semibold px-4 rounded-3 shadow">
                📚 Explore Materials
              </Link>
              <Link to="/placement" className="btn btn-outline-light btn-lg fw-semibold px-4 rounded-3">
                🎯 Placement Prep
              </Link>
            </div>
          </div>
          <div className="col-lg-4 text-center mt-4 mt-lg-0 d-none d-lg-block">
            <div style={{ fontSize: "7rem", filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.3))" }}>
              🎓
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <h2 className="fw-bold mb-4 d-flex align-items-center gap-2">
        <span>✨</span> Key Learning Modules
      </h2>

      <div className="row g-4 mb-5">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift p-3 transition-all" style={{ backgroundColor: "var(--bs-tertiary-bg)" }}>
            <div className="card-body d-flex flex-column">
              <div className="fs-1 mb-3">📚</div>
              <h4 className="card-title fw-bold">Study Materials</h4>
              <p className="card-text text-secondary flex-grow-1">
                Access curated PDF textbooks, lecture notes, and question banks filtered by branch and semester.
              </p>
              <Link to="/materials" className="btn btn-primary w-100 rounded-3 fw-semibold mt-3">
                Access Materials →
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift p-3 transition-all" style={{ backgroundColor: "var(--bs-tertiary-bg)" }}>
            <div className="card-body d-flex flex-column">
              <div className="fs-1 mb-3">🔬</div>
              <h4 className="card-title fw-bold">Lab Work</h4>
              <p className="card-text text-secondary flex-grow-1">
                Practical manuals, lab observations, circuit diagrams, and code snippets across all branches.
              </p>
              <Link to="/labs" className="btn btn-success w-100 rounded-3 fw-semibold mt-3">
                View Practical Labs →
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift p-3 transition-all" style={{ backgroundColor: "var(--bs-tertiary-bg)" }}>
            <div className="card-body d-flex flex-column">
              <div className="fs-1 mb-3">🚀</div>
              <h4 className="card-title fw-bold">Projects Library</h4>
              <p className="card-text text-secondary flex-grow-1">
                Mini and major project ideas, full stack repositories, documentation, and live demo links.
              </p>
              <Link to="/projects" className="btn btn-warning text-dark w-100 rounded-3 fw-semibold mt-3">
                Browse Projects →
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift p-3 transition-all" style={{ backgroundColor: "var(--bs-tertiary-bg)" }}>
            <div className="card-body d-flex flex-column">
              <div className="fs-1 mb-3">💡</div>
              <h4 className="card-title fw-bold">Knowledge Zone</h4>
              <p className="card-text text-secondary flex-grow-1">
                Video tutorials, tech articles, interactive quizzes, and modern developer tools.
              </p>
              <Link to="/knowledge-zone" className="btn btn-info text-white w-100 rounded-3 fw-semibold mt-3">
                Explore Knowledge →
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift p-3 transition-all" style={{ backgroundColor: "var(--bs-tertiary-bg)" }}>
            <div className="card-body d-flex flex-column">
              <div className="fs-1 mb-3">🎯</div>
              <h4 className="card-title fw-bold">Placement Preparation</h4>
              <p className="card-text text-secondary flex-grow-1">
                Top company tech interview rounds, DSA practice sets, aptitude guides, and success stories.
              </p>
              <Link to="/placement" className="btn btn-danger w-100 rounded-3 fw-semibold mt-3">
                Start Placement Prep →
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift p-3 transition-all" style={{ backgroundColor: "var(--bs-tertiary-bg)" }}>
            <div className="card-body d-flex flex-column">
              <div className="fs-1 mb-3">⚡</div>
              <h4 className="card-title fw-bold">Fast & Responsive</h4>
              <p className="card-text text-secondary flex-grow-1">
                Optimized for mobile, desktop, and tablet devices with dark mode & Vercel deployment.
              </p>
              <Link to="/materials" className="btn btn-outline-primary w-100 rounded-3 fw-semibold mt-3">
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
