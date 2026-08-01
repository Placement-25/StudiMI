import React, { useState } from "react";
import "./Labs.css";

const Labs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeDepartment, setActiveDepartment] = useState("all");
  const [selectedExperiment, setSelectedExperiment] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const labCategories = [
    {
      id: 1,
      dept: "cs",
      title: "Computer Science & Engineering Labs",
      description: "Programming, Data Structures, Algorithms, DBMS, and Web Development laboratory practicals",
      icon: "💻",
      subjects: ["Programming Lab", "Data Structures", "Database Systems", "Web Development"],
      experimentsCount: 24,
      manualFormat: "PDF & Source Code",
    },
    {
      id: 2,
      dept: "ece",
      title: "Electronics & Communication Labs",
      description: "Circuit analysis, digital logic design, microprocessors, and signals lab exercises",
      icon: "⚡",
      subjects: ["Digital Electronics", "Microprocessors", "VLSI Design", "Communication Systems"],
      experimentsCount: 18,
      manualFormat: "PDF & Proteus Schematics",
    },
    {
      id: 3,
      dept: "me",
      title: "Mechanical Engineering Labs",
      description: "Manufacturing processes, fluid mechanics, IC engines, and heat transfer observations",
      icon: "⚙️",
      subjects: ["Manufacturing Lab", "Fluid Mechanics", "Heat Transfer", "Machine Design"],
      experimentsCount: 20,
      manualFormat: "PDF & AutoCAD Drawings",
    },
    {
      id: 4,
      dept: "ce",
      title: "Civil Engineering Labs",
      description: "Concrete technology, soil mechanics, surveying, and structural testing practicals",
      icon: "🏗️",
      subjects: ["Materials Testing", "Surveying", "Concrete Tech", "Soil Mechanics"],
      experimentsCount: 16,
      manualFormat: "PDF & Calculation Worksheets",
    },
    {
      id: 5,
      dept: "phy",
      title: "Physics & Applied Science Labs",
      description: "Optics, semiconductor physics, laser experiments, and instrumentation techniques",
      icon: "🔬",
      subjects: ["Optics Lab", "Modern Physics", "Instrumentation", "Semiconductor Lab"],
      experimentsCount: 12,
      manualFormat: "PDF Observation Manuals",
    },
    {
      id: 6,
      dept: "chem",
      title: "Engineering Chemistry Labs",
      description: "Water quality analysis, volumetric estimation, polymer chemistry, and chromatography",
      icon: "🧪",
      subjects: ["Analytical Chem", "Water Testing", "Titration Lab", "Polymer Analysis"],
      experimentsCount: 14,
      manualFormat: "PDF Titration Logs",
    },
  ];

  const filteredLabs = labCategories.filter((lab) => {
    const matchesDept = activeDepartment === "all" || lab.dept === activeDepartment;
    const matchesSearch =
      lab.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lab.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lab.subjects.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  return (
    <div className="labs-container py-4 position-relative">
      {toastMessage && (
        <div className="position-fixed bottom-0 end-0 m-4 px-4 py-3 bg-success text-white rounded-3 shadow-lg z-3">
          ✨ {toastMessage}
        </div>
      )}

      {/* Hero Section */}
      <section className="labs-hero text-center py-5 rounded-4 mb-4 bg-body-tertiary">
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">
            🔬 Practical <span className="text-primary">Laboratory</span> Manuals
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "720px" }}>
            Complete step-by-step practical manuals, apparatus setup guidelines, viva-voce preparation questions, and circuit diagrams for engineering students.
          </p>
          <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">
            <div className="bg-body p-3 rounded-4 shadow-sm">
              <span className="fw-bold fs-4 d-block">100+</span>
              <span className="text-muted small">Verified Experiments</span>
            </div>
            <div className="bg-body p-3 rounded-4 shadow-sm">
              <span className="fw-bold fs-4 d-block">6</span>
              <span className="text-muted small">Major Departments</span>
            </div>
            <div className="bg-body p-3 rounded-4 shadow-sm">
              <span className="fw-bold fs-4 d-block">Free</span>
              <span className="text-muted small">Code & Manual Downloads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="mb-4">
        <div className="container">
          <div className="row g-3 align-items-center mb-3">
            <div className="col-md-8">
              <div className="input-group input-group-lg shadow-sm rounded-4 overflow-hidden">
                <span className="input-group-text bg-body border-end-0">🔍</span>
                <input
                  type="text"
                  placeholder="Search lab subjects, practical experiments, or code..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control border-start-0 bg-body shadow-none"
                />
              </div>
            </div>
            <div className="col-md-4 text-md-end">
              <span className="badge bg-primary-subtle text-primary px-3 py-2 fs-6 rounded-pill">
                {filteredLabs.length} Departments Available
              </span>
            </div>
          </div>

          <div className="d-flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Departments" },
              { id: "cs", label: "Computer Science" },
              { id: "ece", label: "Electronics" },
              { id: "me", label: "Mechanical" },
              { id: "ce", label: "Civil" },
              { id: "phy", label: "Physics" },
              { id: "chem", label: "Chemistry" },
            ].map((d) => (
              <button
                key={d.id}
                className={`btn btn-sm rounded-pill px-3 py-2 border ${
                  activeDepartment === d.id ? "btn-primary shadow" : "btn-outline-secondary"
                }`}
                onClick={() => setActiveDepartment(d.id)}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Cards Grid */}
      <section className="py-4">
        <div className="container">
          <div className="row g-4">
            {filteredLabs.map((lab) => (
              <div key={lab.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 hover-lift bg-body-tertiary d-flex flex-column">
                  <div className="fs-1 mb-3">{lab.icon}</div>
                  <h4 className="card-title fw-bold mb-2">{lab.title}</h4>
                  <p className="card-text text-muted small mb-3 flex-grow-1">{lab.description}</p>

                  <div className="mb-3">
                    <span className="fw-semibold small text-secondary d-block mb-1">Practical Modules:</span>
                    <div className="d-flex flex-wrap gap-1">
                      {lab.subjects.map((sub, i) => (
                        <span key={i} className="badge bg-body border text-body-secondary small fw-normal">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center text-muted small pt-3 border-top mb-3">
                    <span>📑 {lab.experimentsCount} Experiments</span>
                    <span>📦 {lab.manualFormat}</span>
                  </div>

                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-primary btn-sm flex-grow-1 rounded-3 fw-semibold"
                      onClick={() => showToast(`Downloading ${lab.title} Manual...`)}
                    >
                      📥 Download Manual
                    </button>
                    <button
                      className="btn btn-outline-info btn-sm rounded-3"
                      onClick={() => setSelectedExperiment(lab)}
                    >
                      👁️ Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredLabs.length === 0 && (
            <div className="text-center py-5 bg-body-tertiary rounded-4">
              <div className="fs-1 mb-3">🔬</div>
              <h4>No Lab Resources Found</h4>
              <p className="text-muted">Try modifying your search filter.</p>
              <button
                className="btn btn-outline-primary rounded-pill px-4"
                onClick={() => {
                  setSearchTerm("");
                  setActiveDepartment("all");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lab Details Modal */}
      {selectedExperiment && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4 shadow-lg border-0">
              <div className="modal-header border-bottom">
                <h5 className="modal-title fw-bold">
                  {selectedExperiment.icon} {selectedExperiment.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedExperiment(null)}
                ></button>
              </div>
              <div className="modal-body p-4">
                <p className="lead">{selectedExperiment.description}</p>
                <hr />
                <h6 className="fw-bold mb-2">Subject Coverage & Practicals</h6>
                <ul className="list-group list-group-flush mb-3">
                  {selectedExperiment.subjects.map((sub, i) => (
                    <li key={i} className="list-group-item bg-transparent d-flex justify-content-between align-items-center">
                      <span>🧪 {sub} Practical Code & Procedure</span>
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => showToast(`Downloading ${sub} Practical...`)}
                      >
                        Download PDF
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary rounded-3"
                  onClick={() => setSelectedExperiment(null)}
                >
                  Close
                </button>
                <button
                  className="btn btn-primary rounded-3 fw-semibold"
                  onClick={() => {
                    showToast(`Downloading Complete ${selectedExperiment.title} Zip Bundle...`);
                    setSelectedExperiment(null);
                  }}
                >
                  Download Full Department Bundle 📦
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Labs;
