import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">
          Welcome to Studimi 🎓
        </h1>
        <p className="lead text-muted">
          Your complete academic companion for all engineering disciplines.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Study Materials</h5>
              <p className="card-text text-muted">
                Download PDFs and notes for all branches and semesters.
              </p>
              <Link to="/materials" className="btn btn-primary btn-sm">
                Explore
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Lab Work</h5>
              <p className="card-text text-muted">
                View and download practical files, circuits, and observations.
              </p>
              <Link to="/labs" className="btn btn-success btn-sm">
                View Labs
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Projects</h5>
              <p className="card-text text-muted">
                Mini and major project ideas, documentation, and GitHub links.
              </p>
              <Link to="/projects" className="btn btn-warning btn-sm">
                Browse Projects
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Placement Prep</h5>
              <p className="card-text text-muted">
                Aptitude tests, interview tips, coding prep, and resume help.
              </p>
              <Link to="/placement" className="btn btn-danger btn-sm">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
