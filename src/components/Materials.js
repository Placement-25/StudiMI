import React, { useState, useEffect, useMemo } from "react";
import "./Materials.css";

const Materials = () => {
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [selectedSemester, setSelectedSemester] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [filteredMaterials, setFilteredMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPreview, setSelectedPreview] = useState(null);
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
    { id: "all", name: "All Branches", icon: "🎓", color: "#667eea" },
    { id: "cse", name: "Computer Science", icon: "💻", color: "#4ecdc4" },
    { id: "ece", name: "Electronics & Comm", icon: "📡", color: "#45b7d1" },
    { id: "me", name: "Mechanical Engg", icon: "⚙️", color: "#f39c12" },
    { id: "ce", name: "Civil Engg", icon: "🏗️", color: "#e74c3c" },
    { id: "ee", name: "Electrical Engg", icon: "⚡", color: "#9b59b6" },
    { id: "it", name: "Info Tech", icon: "🌐", color: "#2ecc71" },
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
        title: "Structural Analysis",
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
        description:
          "Complete coverage of power generation, transmission, and distribution systems.",
        topics: [
          "Power Generation",
          "Transmission Lines",
          "Protection",
          "Grid Systems",
        ],
        difficulty: "Advanced",
        pages: 380,
        language: "English",
      },
      {
        id: 7,
        title: "Web Development Complete Course",
        subject: "Web Dev",
        branch: "it",
        semester: "5",
        type: "video",
        format: "MP4",
        size: "2.1 GB",
        downloads: 892,
        rating: 4.9,
        lastUpdated: "2024-02-08",
        author: "Tech Academy",
        description:
          "Full-stack web development course covering HTML, CSS, JavaScript, React, and Node.js.",
        topics: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
        difficulty: "Beginner",
        duration: "45 hours",
        language: "English",
      },
      {
        id: 8,
        title: "Machine Learning Basics",
        subject: "ML",
        branch: "cse",
        semester: "7",
        type: "notes",
        format: "PDF",
        size: "7.3 MB",
        downloads: 1156,
        rating: 4.8,
        lastUpdated: "2024-02-14",
        author: "Prof. Anderson",
        description:
          "Introduction to machine learning algorithms, supervised and unsupervised learning.",
        topics: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Neural Networks",
          "Deep Learning",
        ],
        difficulty: "Advanced",
        pages: 165,
        language: "English",
      },
    ],
    []
  );

  const [materialsList, setMaterialsList] = useState(initialMaterials);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const filtered = materialsList.filter((material) => {
        const matchesBranch =
          selectedBranch === "all" || material.branch === selectedBranch;
        const matchesSemester =
          selectedSemester === "all" || material.semester === selectedSemester;
        const matchesSearch =
          material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          material.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          material.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          material.topics.some((topic) =>
            topic.toLowerCase().includes(searchTerm.toLowerCase())
          );
        return matchesBranch && matchesSemester && matchesSearch;
      });
      setFilteredMaterials(filtered);
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [selectedBranch, selectedSemester, searchTerm, materialsList]);

  const handleDownload = (id, title) => {
    setMaterialsList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, downloads: item.downloads + 1 } : item
      )
    );
    showToast(`Downloading "${title}"...`);
  };

  const toggleBookmark = (id) => {
    if (bookmarks.includes(id)) {
      setBookmarks((prev) => prev.filter((bId) => bId !== id));
      showToast("Removed from bookmarks");
    } else {
      setBookmarks((prev) => [...prev, id]);
      showToast("Added to bookmarks!");
    }
  };

  const handleShare = (title) => {
    navigator.clipboard?.writeText(window.location.href);
    showToast(`Link for "${title}" copied to clipboard!`);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "#28a745";
      case "Intermediate":
        return "#ffc107";
      case "Advanced":
        return "#dc3545";
      default:
        return "#6c757d";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "notes":
        return "📝";
      case "book":
        return "📚";
      case "video":
        return "🎥";
      default:
        return "📄";
    }
  };

  return (
    <div className="materials-container position-relative">
      {/* Toast alert notification */}
      {toastMessage && (
        <div
          className="position-fixed bottom-0 end-0 m-4 px-4 py-3 bg-primary text-white rounded-3 shadow-lg z-3 border border-light animate__animated animate__fadeInUp"
          style={{ zIndex: 9999 }}
        >
          ✨ {toastMessage}
        </div>
      )}

      {/* Hero Section */}
      <section className="materials-hero text-center py-5">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title display-5 fw-bold mb-3">
              Study <span className="gradient-text">Materials</span> Hub
            </h1>
            <p className="hero-description lead mb-4 text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Access comprehensive study materials, textbooks, notes, and resources for all engineering branches and semesters.
            </p>
            <div className="hero-stats d-flex justify-content-center gap-4 flex-wrap">
              <div className="stat-item p-3 rounded-4 shadow-sm bg-body">
                <div className="stat-icon fs-2">📚</div>
                <div className="stat-info">
                  <span className="stat-number fw-bold fs-4">500+</span>
                  <span className="stat-label text-muted d-block small">Materials</span>
                </div>
              </div>
              <div className="stat-item p-3 rounded-4 shadow-sm bg-body">
                <div className="stat-icon fs-2">🎓</div>
                <div className="stat-info">
                  <span className="stat-number fw-bold fs-4">7</span>
                  <span className="stat-label text-muted d-block small">Branches</span>
                </div>
              </div>
              <div className="stat-item p-3 rounded-4 shadow-sm bg-body">
                <div className="stat-icon fs-2">📊</div>
                <div className="stat-info">
                  <span className="stat-number fw-bold fs-4">50K+</span>
                  <span className="stat-label text-muted d-block small">Downloads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="filter-section py-4 border-top border-bottom bg-body-tertiary">
        <div className="container">
          <div className="row g-3 align-items-center mb-4">
            <div className="col-lg-9">
              <div className="input-group input-group-lg shadow-sm rounded-4 overflow-hidden">
                <span className="input-group-text bg-body border-end-0">🔍</span>
                <input
                  type="text"
                  placeholder="Search materials, subjects, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control border-start-0 bg-body shadow-none"
                />
                {searchTerm && (
                  <button
                    className="btn btn-outline-secondary border-start-0 bg-body"
                    onClick={() => setSearchTerm("")}
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            <div className="col-lg-3 d-flex justify-content-lg-end">
              <div className="btn-group w-100 shadow-sm rounded-3">
                <button
                  className={`btn ${viewMode === "grid" ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setViewMode("grid")}
                >
                  ▦ Grid
                </button>
                <button
                  className={`btn ${viewMode === "list" ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setViewMode("list")}
                >
                  ☰ List
                </button>
              </div>
            </div>
          </div>

          <div className="row g-3">
            <div className="col-12">
              <label className="fw-semibold mb-2">Filter by Branch:</label>
              <div className="d-flex flex-wrap gap-2">
                {branches.map((branch) => (
                  <button
                    key={branch.id}
                    className={`btn btn-sm rounded-pill px-3 py-2 border transition-all ${
                      selectedBranch === branch.id
                        ? "btn-primary shadow"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => setSelectedBranch(branch.id)}
                  >
                    <span className="me-1">{branch.icon}</span>
                    {branch.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-12 mt-3">
              <label className="fw-semibold mb-2">Filter by Semester:</label>
              <div className="d-flex flex-wrap gap-2">
                {semesters.map((semester) => (
                  <button
                    key={semester.id}
                    className={`btn btn-sm rounded-pill px-3 py-2 border transition-all ${
                      selectedSemester === semester.id
                        ? "btn-secondary shadow text-white"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => setSelectedSemester(semester.id)}
                  >
                    {semester.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Grid/List */}
      <section className="materials-section py-5">
        <div className="container">
          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}></div>
              <p className="mt-3 text-muted">Loading study materials...</p>
            </div>
          ) : (
            <>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold m-0">
                  {selectedBranch === "all"
                    ? "All Materials"
                    : branches.find((b) => b.id === selectedBranch)?.name}
                  {selectedSemester !== "all" &&
                    ` - ${
                      semesters.find((s) => s.id === selectedSemester)?.name
                    }`}
                </h3>
                <span className="badge bg-secondary-subtle text-secondary px-3 py-2 rounded-pill fs-6">
                  {filteredMaterials.length} material{filteredMaterials.length !== 1 ? "s" : ""} found
                </span>
              </div>

              <div className={viewMode === "grid" ? "row g-4" : "d-flex flex-column gap-3"}>
                {filteredMaterials.map((material) => {
                  const isBookmarked = bookmarks.includes(material.id);
                  return (
                    <div
                      key={material.id}
                      className={viewMode === "grid" ? "col-md-6 col-lg-4" : "col-12"}
                    >
                      <div className="card h-100 border-0 shadow-sm rounded-4 p-3 transition-all hover-lift bg-body-tertiary">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
                            {getTypeIcon(material.type)} {material.type.toUpperCase()}
                          </span>
                          <span className="fw-semibold text-warning small">
                            ⭐ {material.rating}
                          </span>
                        </div>

                        <div className="card-body p-0 py-2">
                          <h5 className="card-title fw-bold">{material.title}</h5>
                          <div className="d-flex flex-wrap gap-2 mb-2">
                            <span className="badge bg-info-subtle text-info small">
                              {material.subject}
                            </span>
                            <span className="badge bg-secondary-subtle text-secondary small">
                              Sem {material.semester}
                            </span>
                            <span
                              className="badge text-white small"
                              style={{ backgroundColor: getDifficultyColor(material.difficulty) }}
                            >
                              {material.difficulty}
                            </span>
                          </div>
                          <p className="card-text text-muted small line-clamp-2">
                            {material.description}
                          </p>

                          <div className="d-flex flex-wrap gap-1 mb-3">
                            {material.topics.map((t, i) => (
                              <span key={i} className="badge bg-body border text-body-tertiary small fw-normal">
                                #{t}
                              </span>
                            ))}
                          </div>

                          <div className="text-secondary small d-flex justify-content-between align-items-center pt-2 border-top">
                            <span>✍️ {material.author}</span>
                            <span>📥 {material.downloads.toLocaleString()} downloads</span>
                          </div>
                        </div>

                        <div className="card-footer bg-transparent border-0 p-0 pt-3 d-flex gap-2">
                          <button
                            className="btn btn-primary btn-sm flex-grow-1 rounded-3 fw-semibold"
                            onClick={() => handleDownload(material.id, material.title)}
                          >
                            📥 Download ({material.size})
                          </button>
                          <button
                            className="btn btn-outline-info btn-sm rounded-3"
                            onClick={() => setSelectedPreview(material)}
                            title="Preview details"
                          >
                            👁️ Preview
                          </button>
                          <button
                            className={`btn btn-sm rounded-3 ${isBookmarked ? "btn-warning" : "btn-outline-warning"}`}
                            onClick={() => toggleBookmark(material.id)}
                            title="Bookmark"
                          >
                            {isBookmarked ? "★" : "☆"}
                          </button>
                          <button
                            className="btn btn-outline-secondary btn-sm rounded-3"
                            onClick={() => handleShare(material.title)}
                            title="Share"
                          >
                            🔗
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredMaterials.length === 0 && (
                <div className="text-center py-5 my-5 bg-body-tertiary rounded-4">
                  <div className="fs-1 mb-3">📚</div>
                  <h4>No materials found</h4>
                  <p className="text-muted">Try adjusting your search query or branch/semester filters.</p>
                  <button
                    className="btn btn-outline-primary rounded-pill px-4"
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

      {/* Preview Modal */}
      {selectedPreview && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4 shadow-lg border-0">
              <div className="modal-header border-bottom">
                <h5 className="modal-header-title fw-bold m-0 d-flex align-items-center gap-2">
                  <span>{getTypeIcon(selectedPreview.type)}</span> {selectedPreview.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedPreview(null)}
                ></button>
              </div>
              <div className="modal-body p-4">
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <p className="m-0 text-muted small">Subject</p>
                    <p className="fw-semibold">{selectedPreview.subject}</p>
                  </div>
                  <div className="col-md-6">
                    <p className="m-0 text-muted small">Author & Instructor</p>
                    <p className="fw-semibold">{selectedPreview.author}</p>
                  </div>
                  <div className="col-md-6">
                    <p className="m-0 text-muted small">Format & Size</p>
                    <p className="fw-semibold">{selectedPreview.format} • {selectedPreview.size}</p>
                  </div>
                  <div className="col-md-6">
                    <p className="m-0 text-muted small">Pages / Duration</p>
                    <p className="fw-semibold">{selectedPreview.pages ? `${selectedPreview.pages} Pages` : selectedPreview.duration || "N/A"}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold mb-2">Description</h6>
                  <p className="text-secondary">{selectedPreview.description}</p>
                </div>

                <div>
                  <h6 className="fw-bold mb-2">Topics Covered</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {selectedPreview.topics.map((t, idx) => (
                      <span key={idx} className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="modal-footer border-top">
                <button
                  type="button"
                  className="btn btn-secondary rounded-3"
                  onClick={() => setSelectedPreview(null)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary rounded-3 fw-semibold"
                  onClick={() => {
                    handleDownload(selectedPreview.id, selectedPreview.title);
                    setSelectedPreview(null);
                  }}
                >
                  Download File Now 📥
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Materials;
