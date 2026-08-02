import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";
import {
  FiBookOpen,
  FiActivity,
  FiCode,
  FiZap,
  FiTarget,
  FiArrowRight,
  FiCheckCircle,
  FiLayers,
} from "react-icons/fi";

const Home = () => {
  return (
    <div className="container-fluid px-3 px-md-5 py-4">
      {/* Hero Banner */}
      <div
        className="p-4 p-md-5 mb-5 rounded-4 shadow-sm border text-center text-md-start position-relative overflow-hidden bg-body-tertiary"
      >
        <div className="row align-items-center position-relative z-1">
          <div className="col-lg-8">
            <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold mb-3 fs-6 d-inline-flex align-items-center gap-2">
              <FiCheckCircle size={15} /> Academic & Placement Resource Hub
            </span>
            <h1 className="display-4 fw-bold mb-3 text-body">
              Master Engineering Concepts with <span className="text-primary">StudiMI</span>
            </h1>
            <p className="lead text-muted mb-4" style={{ maxWidth: "680px" }}>
              A clean, structured learning platform for verified study materials, lab practical manuals, project repositories, technical interview guides, and online PDF reading.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <Link to="/materials" className="btn btn-primary btn-lg fw-semibold px-4 rounded-3 shadow-sm d-inline-flex align-items-center gap-2">
                <FiBookOpen size={18} /> Explore Study Materials
              </Link>
              <Link to="/placement" className="btn btn-outline-primary btn-lg fw-semibold px-4 rounded-3 d-inline-flex align-items-center gap-2">
                <FiTarget size={18} /> Placement Preparation
              </Link>
            </div>
          </div>
          <div className="col-lg-4 text-center mt-4 mt-lg-0 d-none d-lg-block">
            <div className="p-4 bg-primary-subtle text-primary rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm" style={{ width: "160px", height: "160px" }}>
              <FaGraduationCap size={80} />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h2 className="fw-bold fs-3 m-0 text-body d-flex align-items-center gap-2">
          <FiLayers className="text-primary" /> Key Learning Modules
        </h2>
      </div>

      <div className="row g-4 mb-5">
        {/* Module 1 */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border shadow-sm rounded-4 hover-lift p-3 bg-body-tertiary">
            <div className="card-body d-flex flex-column">
              <div className="p-3 bg-primary-subtle text-primary rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "48px", height: "48px" }}>
                <FiBookOpen size={24} />
              </div>
              <h4 className="card-title fw-bold">Study Materials</h4>
              <p className="card-text text-muted flex-grow-1 small">
                Access curated PDF textbooks, lecture notes, and question banks filtered by branch and semester.
              </p>
              <Link to="/materials" className="btn btn-outline-primary w-100 rounded-3 fw-semibold mt-3 d-flex align-items-center justify-content-center gap-2">
                <span>Access Materials</span> <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Module 2 */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border shadow-sm rounded-4 hover-lift p-3 bg-body-tertiary">
            <div className="card-body d-flex flex-column">
              <div className="p-3 bg-success-subtle text-success rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "48px", height: "48px" }}>
                <FiActivity size={24} />
              </div>
              <h4 className="card-title fw-bold">Practical Labs</h4>
              <p className="card-text text-muted flex-grow-1 small">
                Step-by-step practical manuals, lab observations, circuit diagrams, and code snippets across all departments.
              </p>
              <Link to="/labs" className="btn btn-outline-success w-100 rounded-3 fw-semibold mt-3 d-flex align-items-center justify-content-center gap-2">
                <span>View Practical Labs</span> <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Module 3 */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border shadow-sm rounded-4 hover-lift p-3 bg-body-tertiary">
            <div className="card-body d-flex flex-column">
              <div className="p-3 bg-warning-subtle text-warning-emphasis rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "48px", height: "48px" }}>
                <FiCode size={24} />
              </div>
              <h4 className="card-title fw-bold">Projects Library</h4>
              <p className="card-text text-muted flex-grow-1 small">
                Mini and major project ideas, full stack repositories, architecture diagrams, and live demo links.
              </p>
              <Link to="/projects" className="btn btn-outline-warning text-dark w-100 rounded-3 fw-semibold mt-3 d-flex align-items-center justify-content-center gap-2">
                <span>Browse Projects</span> <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Module 4 */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border shadow-sm rounded-4 hover-lift p-3 bg-body-tertiary">
            <div className="card-body d-flex flex-column">
              <div className="p-3 bg-info-subtle text-info rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "48px", height: "48px" }}>
                <FiZap size={24} />
              </div>
              <h4 className="card-title fw-bold">Knowledge Zone</h4>
              <p className="card-text text-muted flex-grow-1 small">
                Interactive video tutorials, tech articles, skill assessments, and modern developer learning tools.
              </p>
              <Link to="/knowledge-zone" className="btn btn-outline-info w-100 rounded-3 fw-semibold mt-3 d-flex align-items-center justify-content-center gap-2">
                <span>Explore Knowledge</span> <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Module 5 */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border shadow-sm rounded-4 hover-lift p-3 bg-body-tertiary">
            <div className="card-body d-flex flex-column">
              <div className="p-3 bg-danger-subtle text-danger rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "48px", height: "48px" }}>
                <FiTarget size={24} />
              </div>
              <h4 className="card-title fw-bold">Placement Prep</h4>
              <p className="card-text text-muted flex-grow-1 small">
                Top company technical hiring rounds, DSA problem sets, aptitude guides, and success stories.
              </p>
              <Link to="/placement" className="btn btn-outline-danger w-100 rounded-3 fw-semibold mt-3 d-flex align-items-center justify-content-center gap-2">
                <span>Start Placement Prep</span> <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Module 6 */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border shadow-sm rounded-4 hover-lift p-3 bg-body-tertiary">
            <div className="card-body d-flex flex-column">
              <div className="p-3 bg-secondary-subtle text-secondary rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "48px", height: "48px" }}>
                <FiCheckCircle size={24} />
              </div>
              <h4 className="card-title fw-bold">Responsive Design</h4>
              <p className="card-text text-muted flex-grow-1 small">
                Fully optimized for mobile, tablet, laptop, and desktop viewports with dark mode & crisp typography.
              </p>
              <Link to="/materials" className="btn btn-outline-secondary w-100 rounded-3 fw-semibold mt-3 d-flex align-items-center justify-content-center gap-2">
                <span>Get Started</span> <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
