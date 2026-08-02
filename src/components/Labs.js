import React, { useState } from "react";
import "./Labs.css";
import PdfViewerModal from "./PdfViewerModal";
import {
  FiActivity,
  FiSearch,
  FiFileText,
  FiCheckCircle,
  FiLayers,
  FiInfo,
  FiX,
  FiSliders,
  FiChevronDown,
  FiChevronUp,
  FiRotateCcw,
} from "react-icons/fi";

const Labs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeDepartment, setActiveDepartment] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedExperiment, setSelectedExperiment] = useState(null);
  const [selectedPdfModal, setSelectedPdfModal] = useState(null);

  const labCategories = [
    {
      id: 1,
      title: "Data Structures & Algorithms Lab",
      code: "CS301L",
      dept: "cse",
      description: "Hands-on implementation of arrays, linked lists, trees, graphs, and sorting algorithms in C++ and Java.",
      pdfUrl: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
      experimentsCount: 12,
      subjects: ["Arrays & Pointers", "Trees & Graphs", "Sorting & Searching"],
    },
    {
      id: 2,
      title: "Database Management Systems Lab",
      code: "CS401L",
      dept: "cse",
      description: "SQL queries, schema normalization, stored procedures, and database connectivity with backend applications.",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      experimentsCount: 10,
      subjects: ["DDL/DML Queries", "Joins & Subqueries", "PL/SQL Triggers"],
    },
    {
      id: 3,
      title: "Analog & Digital Electronics Lab",
      code: "EC302L",
      dept: "ece",
      description: "Practical realization of logic gates, flip-flops, multiplexers, and operational amplifier circuits.",
      pdfUrl: "https://raw.githubusercontent.com/pdfobject/pdfobject.github.io/master/sample-3d.pdf",
      experimentsCount: 14,
      subjects: ["Logic Gate Realization", "Op-Amp Circuits", "Wave Generators"],
    },
    {
      id: 4,
      title: "Fluid Mechanics & Machines Lab",
      code: "ME402L",
      dept: "me",
      description: "Flow rate measurements, Bernoulli equation verification, and performance analysis of hydraulic turbines.",
      pdfUrl: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
      experimentsCount: 8,
      subjects: ["Venturimeter Test", "Pelton Turbine", "Pipe Friction Loss"],
    },
    {
      id: 5,
      title: "Concrete Technology & Testing Lab",
      code: "CE403L",
      dept: "ce",
      description: "Testing of cement fineness, concrete compressive strength, slump test, and aggregate impact values.",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      experimentsCount: 10,
      subjects: ["Slump Cone Test", "Compressive Strength", "Sieve Analysis"],
    },
    {
      id: 6,
      title: "Electrical Machines Practical Lab",
      code: "EE501L",
      dept: "ee",
      description: "Performance characteristics of DC motors, transformers, single-phase, and three-phase induction motors.",
      pdfUrl: "https://raw.githubusercontent.com/pdfobject/pdfobject.github.io/master/sample-3d.pdf",
      experimentsCount: 12,
      subjects: ["DC Motor Load Test", "Transformer OC/SC Test", "Induction Motor"],
    },
  ];

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "cse", name: "Computer Science" },
    { id: "ece", name: "Electronics & Comm" },
    { id: "me", name: "Mechanical Engg" },
    { id: "ce", name: "Civil Engg" },
    { id: "ee", name: "Electrical Engg" },
  ];

  const filteredLabs = labCategories.filter((lab) => {
    const matchesDept = activeDepartment === "all" || lab.dept === activeDepartment;
    const matchesSearch =
      lab.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lab.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lab.subjects.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  const activeFiltersCount = activeDepartment !== "all" ? 1 : 0;

  return (
    <div className="labs-container py-4 position-relative pb-5">
      {/* Header Section */}
      <section className="py-4 mb-4 bg-body-tertiary border-bottom">
        <div className="container">
          <h1 className="display-6 fw-bold mb-2 text-body d-flex align-items-center gap-3">
            <div className="p-2 bg-success-subtle text-success rounded-3 d-inline-flex">
              <FiActivity size={26} />
            </div>
            <span>Practical Laboratory Manuals</span>
          </h1>
          <p className="lead text-muted m-0 fs-6" style={{ maxWidth: "720px" }}>
            Step-by-step practical experiment guides, lab procedure manuals, circuit diagrams, and sample observations with online PDF view.
          </p>
        </div>
      </section>

      {/* Search & Collapsible Filters */}
      <section className="mb-4">
        <div className="container">
          <div className="bg-body-tertiary p-3 p-md-4 rounded-4 shadow-sm border mb-4">
            <div className="row g-3 align-items-center">
              <div className="col-md-6">
                <div className="input-group shadow-sm rounded-3 overflow-hidden border">
                  <span className="input-group-text bg-body border-end-0 text-muted">
                    <FiSearch size={18} />
                  </span>
                  <input
                    type="text"
                    placeholder="Search by lab title, code, or experiment topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control border-start-0 bg-body shadow-none"
                  />
                  {searchTerm && (
                    <button
                      className="btn btn-outline-secondary border-start-0 bg-body text-muted"
                      onClick={() => setSearchTerm("")}
                    >
                      <FiX size={16} />
                    </button>
                  )}
                </div>
              </div>

              <div className="col-md-6 d-flex align-items-center justify-content-md-end gap-2">
                <button
                  className={`btn btn-filter-toggle d-flex align-items-center gap-2 ${
                    showFilters || activeFiltersCount > 0 ? "active" : ""
                  }`}
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <FiSliders size={16} />
                  <span>Filter Options</span>
                  {activeFiltersCount > 0 && (
                    <span className="badge bg-success text-white rounded-pill ms-1 px-2">
                      {activeFiltersCount}
                    </span>
                  )}
                  {showFilters ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                </button>

                {activeFiltersCount > 0 && (
                  <button
                    className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1"
                    onClick={() => setActiveDepartment("all")}
                    title="Reset Filters"
                  >
                    <FiRotateCcw size={14} />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            {/* Collapsible Panel for Department Selection */}
            {showFilters && (
              <div className="collapsible-filter-panel mt-3 pt-3 border-top">
                <label className="fw-semibold small text-muted d-block mb-2">Department:</label>
                <div className="d-flex flex-wrap gap-2">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      className={`btn btn-sm rounded-3 px-3 py-2 border transition-all ${
                        activeDepartment === dept.id ? "btn-success shadow-sm text-white" : "btn-outline-secondary"
                      }`}
                      onClick={() => setActiveDepartment(dept.id)}
                    >
                      {dept.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lab Manual Cards Grid */}
      <section className="py-2">
        <div className="container">
          <div className="row g-4">
            {filteredLabs.map((lab) => (
              <div key={lab.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border shadow-sm rounded-4 p-3 hover-lift bg-body-tertiary d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-success-subtle text-success rounded-pill px-3 py-1 small fw-semibold">
                      {lab.code}
                    </span>
                    <span className="badge bg-secondary-subtle text-secondary small">
                      {lab.experimentsCount} Experiments
                    </span>
                  </div>

                  <div className="card-body p-0 py-2 flex-grow-1">
                    <h5 className="card-title fw-bold m-0 mb-2">{lab.title}</h5>
                    <p className="card-text text-muted small line-clamp-3 mb-3">
                      {lab.description}
                    </p>

                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {lab.subjects.map((sub, idx) => (
                        <span key={idx} className="badge bg-body border text-body-tertiary small fw-normal">
                          <FiCheckCircle size={12} className="text-success me-1" />
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="card-footer bg-transparent border-0 p-0 pt-3 d-flex gap-2">
                    <button
                      className="btn btn-success btn-sm flex-grow-1 text-white rounded-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
                      onClick={() => setSelectedPdfModal({ title: lab.title, url: lab.pdfUrl })}
                    >
                      <FiFileText size={15} /> <span>Read Lab Manual</span>
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm rounded-3"
                      onClick={() => setSelectedExperiment(lab)}
                      title="View Details"
                    >
                      <FiInfo size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredLabs.length === 0 && (
            <div className="text-center py-5 my-4 bg-body-tertiary rounded-4 border">
              <FiLayers size={40} className="text-muted mb-3" />
              <h4>No Lab Manuals Found</h4>
              <p className="text-muted">Try adjusting your search terms or department filters.</p>
              <button
                className="btn btn-outline-success rounded-3 px-4"
                onClick={() => {
                  setSearchTerm("");
                  setActiveDepartment("all");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Experiment Details Modal */}
      {selectedExperiment && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4 border shadow-lg">
              <div className="modal-header border-bottom">
                <div>
                  <h5 className="modal-title fw-bold">{selectedExperiment.title}</h5>
                  <span className="badge bg-success-subtle text-success small">
                    {selectedExperiment.code}
                  </span>
                </div>
                <button
                  type="button"
                  className="btn-close shadow-none"
                  onClick={() => setSelectedExperiment(null)}
                ></button>
              </div>
              <div className="modal-body p-4">
                <p className="text-body mb-4">{selectedExperiment.description}</p>

                <h6 className="fw-bold mb-3 d-flex align-items-center gap-2">
                  <FiLayers className="text-success" /> Module Syllabus & Experiments:
                </h6>
                <div className="list-group mb-4">
                  {selectedExperiment.subjects.map((sub, i) => (
                    <div key={i} className="list-group-item d-flex align-items-center gap-3 p-3">
                      <span className="badge bg-success rounded-circle text-white p-2">
                        {i + 1}
                      </span>
                      <span className="fw-semibold text-body">{sub} Practical Observations</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer border-top">
                <button
                  className="btn btn-outline-secondary rounded-3 px-4"
                  onClick={() => setSelectedExperiment(null)}
                >
                  Close
                </button>
                <button
                  className="btn btn-success text-white rounded-3 px-4 d-flex align-items-center gap-2"
                  onClick={() => {
                    setSelectedPdfModal({ title: selectedExperiment.title, url: selectedExperiment.pdfUrl });
                    setSelectedExperiment(null);
                  }}
                >
                  <FiFileText size={16} /> <span>Open Lab PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Online Free PDF Viewer Modal */}
      {selectedPdfModal && (
        <PdfViewerModal
          title={selectedPdfModal.title}
          pdfUrl={selectedPdfModal.url}
          onClose={() => setSelectedPdfModal(null)}
        />
      )}
    </div>
  );
};

export default Labs;
