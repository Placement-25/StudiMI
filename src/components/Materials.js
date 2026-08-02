import React, { useState, useEffect, useMemo } from "react";
import "./Materials.css";
import PdfViewerModal from "./PdfViewerModal";
import {
  FiBookOpen,
  FiSearch,
  FiGrid,
  FiList,
  FiStar,
  FiFileText,
  FiDownload,
  FiBookmark,
  FiShare2,
  FiCheck,
  FiX,
  FiUser,
  FiSliders,
  FiChevronDown,
  FiChevronUp,
  FiRotateCcw,
} from "react-icons/fi";

const Materials = () => {
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [selectedSemester, setSelectedSemester] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredMaterials, setFilteredMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPdfModal, setSelectedPdfModal] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem("studimi_bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("studimi_bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const branches = [
    { id: "all", name: "All Branches" },
    { id: "cse", name: "Computer Science" },
    { id: "ece", name: "Electronics & Comm" },
    { id: "me", name: "Mechanical Engg" },
    { id: "ce", name: "Civil Engg" },
    { id: "ee", name: "Electrical Engg" },
    { id: "it", name: "Info Tech" },
  ];

  const semesters = [
    { id: "all", name: "All Semesters" },
    { id: "1", name: "1st Sem" },
    { id: "2", name: "2nd Sem" },
    { id: "3", name: "3rd Sem" },
    { id: "4", name: "4th Sem" },
    { id: "5", name: "5th Sem" },
    { id: "6", name: "6th Sem" },
    { id: "7", name: "7th Sem" },
    { id: "8", name: "8th Sem" },
  ];

  const initialMaterials = useMemo(
    () => [
      {
        id: 1,
        title: "Data Structures and Algorithms",
        subject: "DSA",
        branch: "cse",
        semester: "3",
        type: "notes",
        format: "PDF",
        size: "5.2 MB",
        downloads: 1245,
        rating: 4.8,
        lastUpdated: "2024-01-15",
        author: "Prof. Smith",
        pdfUrl: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
        description:
          "Comprehensive notes covering arrays, linked lists, trees, graphs, and dynamic programming with examples.",
        topics: [
          "Arrays",
          "Linked Lists",
          "Trees",
          "Graphs",
          "Dynamic Programming",
        ],
        difficulty: "Intermediate",
        pages: 250,
        language: "English",
      },
      {
        id: 2,
        title: "Database Management Systems",
        subject: "DBMS",
        branch: "cse",
        semester: "4",
        type: "book",
        format: "PDF",
        size: "12.8 MB",
        downloads: 987,
        rating: 4.7,
        lastUpdated: "2024-02-10",
        author: "Dr. Johnson",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        description:
          "Complete textbook covering relational databases, SQL, normalization, and transaction management.",
        topics: [
          "SQL",
          "Normalization",
          "Transactions",
          "Indexing",
          "Query Optimization",
        ],
        difficulty: "Advanced",
        pages: 450,
        language: "English",
      },
      {
        id: 3,
        title: "Digital Signal Processing",
        subject: "DSP",
        branch: "ece",
        semester: "5",
        type: "notes",
        format: "PDF",
        size: "8.1 MB",
        downloads: 756,
        rating: 4.6,
        lastUpdated: "2024-01-28",
        author: "Prof. Williams",
        pdfUrl: "https://raw.githubusercontent.com/pdfobject/pdfobject.github.io/master/sample-3d.pdf",
        description:
          "In-depth coverage of signal processing techniques, filters, and transform methods.",
        topics: [
          "Fourier Transform",
          "Z-Transform",
          "Filters",
          "Signal Analysis",
        ],
        difficulty: "Advanced",
        pages: 180,
        language: "English",
      },
      {
        id: 4,
        title: "Thermodynamics Fundamentals",
        subject: "Thermodynamics",
        branch: "me",
        semester: "3",
        type: "book",
        format: "PDF",
        size: "15.4 MB",
        downloads: 623,
        rating: 4.5,
        lastUpdated: "2024-02-05",
        author: "Dr. Brown",
        pdfUrl: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
        description:
          "Essential concepts of thermodynamics including laws, cycles, and applications in engineering.",
        topics: [
          "Laws of Thermodynamics",
          "Heat Engines",
          "Entropy",
          "Refrigeration",
        ],
        difficulty: "Intermediate",
        pages: 320,
        language: "English",
      },
      {
        id: 5,
        title: "Structural Analysis & Mechanics",
        subject: "Structures",
        branch: "ce",
        semester: "4",
        type: "notes",
        format: "PDF",
        size: "9.7 MB",
        downloads: 445,
        rating: 4.4,
        lastUpdated: "2024-01-20",
        author: "Prof. Davis",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        description:
          "Comprehensive guide to analyzing structures, beams, trusses, and frames.",
        topics: [
          "Beam Analysis",
          "Truss Design",
          "Frame Structures",
          "Load Calculations",
        ],
        difficulty: "Advanced",
        pages: 200,
        language: "English",
      },
      {
        id: 6,
        title: "Power Systems Engineering",
        subject: "Power Systems",
        branch: "ee",
        semester: "6",
        type: "book",
        format: "PDF",
        size: "18.2 MB",
        downloads: 534,
        rating: 4.7,
        lastUpdated: "2024-02-12",
        author: "Dr. Wilson",
        pdfUrl: "https://raw.githubusercontent.com/pdfobject/pdfobject.github.io/master/sample-3d.pdf",
        description:
          "Complete coverage of power generation, transmission, and distribution systems.",
        topics: [
          "Power Generation",
          "Transmission Lines",
          "Fault Analysis",
          "Protection",
        ],
        difficulty: "Advanced",
        pages: 510,
        language: "English",
      },
    ],
    []
  );

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      let result = initialMaterials;
      if (selectedBranch !== "all") {
        result = result.filter((item) => item.branch === selectedBranch);
      }
      if (selectedSemester !== "all") {
        result = result.filter((item) => item.semester === selectedSemester);
      }
      if (searchTerm) {
        const query = searchTerm.toLowerCase();
        result = result.filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            item.subject.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.topics.some((t) => t.toLowerCase().includes(query))
        );
      }
      setFilteredMaterials(result);
      setIsLoading(false);
    }, 250);
  }, [selectedBranch, selectedSemester, searchTerm, initialMaterials]);

  const activeFiltersCount = (selectedBranch !== "all" ? 1 : 0) + (selectedSemester !== "all" ? 1 : 0);

  const toggleBookmark = (id) => {
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter((item) => item !== id));
      showToast("Removed from bookmarks");
    } else {
      setBookmarks([...bookmarks, id]);
      showToast("Added to bookmarks");
    }
  };

  const handleDownload = (title, url) => {
    showToast(`Starting PDF Download for ${title}...`);
    if (url) {
      window.open(url, "_blank");
    }
  };

  const handleShare = (title) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Check out ${title} on StudiMI Academic Hub!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast("Material link copied to clipboard");
    }
  };

  return (
    <div className="materials-container pb-5">
      {toastMessage && (
        <div className="position-fixed bottom-0 end-0 m-4 px-4 py-3 bg-dark text-white rounded-3 shadow-lg z-3 d-flex align-items-center gap-2">
          <FiCheck size={18} className="text-success" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Section */}
      <section className="py-4 mb-4 bg-body-tertiary border-bottom">
        <div className="container">
          <h1 className="display-6 fw-bold mb-2 text-body d-flex align-items-center gap-3">
            <div className="p-2 bg-primary-subtle text-primary rounded-3 d-inline-flex">
              <FiBookOpen size={26} />
            </div>
            <span>Academic Study Materials</span>
          </h1>
          <p className="lead text-muted m-0 fs-6" style={{ maxWidth: "720px" }}>
            Access verified lecture notes, reference textbooks, and syllabus question banks with built-in online PDF reader capability.
          </p>
        </div>
      </section>

      {/* Search & Collapsible Filters Bar */}
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
                    placeholder="Search by subject, title, author, or topic..."
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

              <div className="col-md-6 d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                <button
                  className={`btn btn-filter-toggle d-flex align-items-center gap-2 ${
                    showFilters || activeFiltersCount > 0 ? "active" : ""
                  }`}
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <FiSliders size={16} />
                  <span>Filter Options</span>
                  {activeFiltersCount > 0 && (
                    <span className="badge bg-primary text-white rounded-pill ms-1 px-2">
                      {activeFiltersCount}
                    </span>
                  )}
                  {showFilters ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                </button>

                {activeFiltersCount > 0 && (
                  <button
                    className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1"
                    onClick={() => {
                      setSelectedBranch("all");
                      setSelectedSemester("all");
                    }}
                    title="Reset Filters"
                  >
                    <FiRotateCcw size={14} />
                    <span className="d-none d-sm-inline">Reset</span>
                  </button>
                )}

                <div className="btn-group border rounded-3 p-1 bg-body ms-auto ms-md-0">
                  <button
                    className={`btn btn-sm ${viewMode === "grid" ? "btn-primary" : "btn-light"}`}
                    onClick={() => setViewMode("grid")}
                    title="Grid View"
                  >
                    <FiGrid size={15} />
                  </button>
                  <button
                    className={`btn btn-sm ${viewMode === "list" ? "btn-primary" : "btn-light"}`}
                    onClick={() => setViewMode("list")}
                    title="List View"
                  >
                    <FiList size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* Collapsible Panel for Branch & Semester Selection */}
            {showFilters && (
              <div className="collapsible-filter-panel mt-3 pt-3 border-top">
                <div className="mb-3">
                  <label className="fw-semibold small text-muted d-block mb-2">Branch:</label>
                  <div className="d-flex flex-wrap gap-2">
                    {branches.map((b) => (
                      <button
                        key={b.id}
                        className={`btn btn-sm rounded-3 px-3 py-2 border transition-all ${
                          selectedBranch === b.id ? "btn-primary shadow-sm" : "btn-outline-secondary"
                        }`}
                        onClick={() => setSelectedBranch(b.id)}
                      >
                        <span>{b.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="fw-semibold small text-muted d-block mb-2">Semester:</label>
                  <div className="d-flex flex-wrap gap-2">
                    {semesters.map((s) => (
                      <button
                        key={s.id}
                        className={`btn btn-sm rounded-3 px-3 py-2 border transition-all ${
                          selectedSemester === s.id ? "btn-primary shadow-sm" : "btn-outline-secondary"
                        }`}
                        onClick={() => setSelectedSemester(s.id)}
                      >
                        {s.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Materials List / Grid Display */}
      <section className="py-2">
        <div className="container">
          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status"></div>
              <p className="mt-2 text-muted">Searching materials...</p>
            </div>
          ) : (
            <>
              <div className={viewMode === "grid" ? "row g-4" : "d-flex flex-column gap-3"}>
                {filteredMaterials.map((material) => {
                  const isBookmarked = bookmarks.includes(material.id);
                  return (
                    <div
                      key={material.id}
                      className={viewMode === "grid" ? "col-md-6 col-lg-4" : "col-12"}
                    >
                      <div className="card h-100 border shadow-sm rounded-4 p-3 hover-lift bg-body-tertiary d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-1 small fw-semibold">
                            {material.type.toUpperCase()}
                          </span>
                          <span className="fw-semibold text-warning small d-flex align-items-center gap-1">
                            <FiStar size={14} className="fill-warning" /> {material.rating}
                          </span>
                        </div>

                        <div className="card-body p-0 py-2 flex-grow-1">
                          <h5 className="card-title fw-bold m-0 mb-2">{material.title}</h5>
                          <div className="d-flex flex-wrap gap-2 mb-2">
                            <span className="badge bg-info-subtle text-info small">
                              {material.subject}
                            </span>
                            <span className="badge bg-secondary-subtle text-secondary small">
                              Sem {material.semester}
                            </span>
                            <span
                              className={`badge small ${
                                material.difficulty === "Beginner"
                                  ? "bg-success-subtle text-success"
                                  : material.difficulty === "Intermediate"
                                  ? "bg-warning-subtle text-warning-emphasis"
                                  : "bg-danger-subtle text-danger"
                              }`}
                            >
                              {material.difficulty}
                            </span>
                          </div>
                          <p className="card-text text-muted small line-clamp-2 mb-3">
                            {material.description}
                          </p>

                          <div className="d-flex flex-wrap gap-1 mb-3">
                            {material.topics.map((t, i) => (
                              <span key={i} className="badge bg-body border text-body-tertiary small fw-normal">
                                #{t}
                              </span>
                            ))}
                          </div>

                          <div className="text-muted small d-flex justify-content-between align-items-center pt-2 border-top">
                            <span className="d-flex align-items-center gap-1">
                              <FiUser size={13} /> {material.author}
                            </span>
                            <span>{material.downloads.toLocaleString()} downloads</span>
                          </div>
                        </div>

                        <div className="card-footer bg-transparent border-0 p-0 pt-3 d-flex gap-2 flex-wrap">
                          <button
                            className="btn btn-primary btn-sm flex-grow-1 rounded-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
                            onClick={() => setSelectedPdfModal({ title: material.title, url: material.pdfUrl, size: material.size })}
                          >
                            <FiFileText size={15} /> <span>Read PDF</span>
                          </button>
                          <button
                            className="btn btn-outline-secondary btn-sm rounded-3 d-flex align-items-center gap-1"
                            onClick={() => handleDownload(material.title, material.pdfUrl)}
                            title="Download PDF"
                          >
                            <FiDownload size={14} />
                            <span className="small">({material.size})</span>
                          </button>
                          <button
                            className={`btn btn-sm rounded-3 ${isBookmarked ? "btn-warning" : "btn-outline-secondary"}`}
                            onClick={() => toggleBookmark(material.id)}
                            title="Bookmark"
                          >
                            <FiBookmark size={15} />
                          </button>
                          <button
                            className="btn btn-outline-secondary btn-sm rounded-3"
                            onClick={() => handleShare(material.title)}
                            title="Share Link"
                          >
                            <FiShare2 size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredMaterials.length === 0 && (
                <div className="text-center py-5 my-4 bg-body-tertiary rounded-4 border">
                  <FiBookOpen size={40} className="text-muted mb-3" />
                  <h4>No Materials Found</h4>
                  <p className="text-muted">Try adjusting your search query or branch/semester filters.</p>
                  <button
                    className="btn btn-outline-primary rounded-3 px-4"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedBranch("all");
                      setSelectedSemester("all");
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Online Free PDF Viewer Modal */}
      {selectedPdfModal && (
        <PdfViewerModal
          title={selectedPdfModal.title}
          pdfUrl={selectedPdfModal.url}
          downloadSize={selectedPdfModal.size}
          onClose={() => setSelectedPdfModal(null)}
        />
      )}
    </div>
  );
};

export default Materials;
