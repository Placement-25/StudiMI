import React, { useState, useEffect, useMemo } from "react";
import "./Materials.css";

const Materials = () => {
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [selectedSemester, setSelectedSemester] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [filteredMaterials, setFilteredMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const branches = [
    { id: "all", name: "All Branches", icon: "🎓", color: "#667eea" },
    { id: "cse", name: "Computer Science", icon: "💻", color: "#4ecdc4" },
    {
      id: "ece",
      name: "Electronics & Communication",
      icon: "📡",
      color: "#45b7d1",
    },
    { id: "me", name: "Mechanical Engineering", icon: "⚙️", color: "#f39c12" },
    { id: "ce", name: "Civil Engineering", icon: "🏗️", color: "#e74c3c" },
    { id: "ee", name: "Electrical Engineering", icon: "⚡", color: "#9b59b6" },
    { id: "it", name: "Information Technology", icon: "🌐", color: "#2ecc71" },
  ];

  const semesters = [
    { id: "all", name: "All Semesters" },
    { id: "1", name: "1st Semester" },
    { id: "2", name: "2nd Semester" },
    { id: "3", name: "3rd Semester" },
    { id: "4", name: "4th Semester" },
    { id: "5", name: "5th Semester" },
    { id: "6", name: "6th Semester" },
    { id: "7", name: "7th Semester" },
    { id: "8", name: "8th Semester" },
  ];

  const materials = useMemo(
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

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const filtered = materials.filter((material) => {
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
    }, 300);
  }, [selectedBranch, selectedSemester, searchTerm, materials]);

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
      case "assignment":
        return "📋";
      default:
        return "📄";
    }
  };

  const formatFileSize = (size) => {
    if (size.includes("GB")) return size;
    const sizeNum = parseFloat(size);
    if (sizeNum >= 1000) {
      return `${(sizeNum / 1000).toFixed(1)} GB`;
    }
    return size;
  };

  return (
    <div className="materials-container">
      {/* Hero Section */}
      <section className="materials-hero">
        <div className="hero-background">
          <div className="floating-icons">
            <div className="float-icon">📚</div>
            <div className="float-icon">📝</div>
            <div className="float-icon">🎓</div>
            <div className="float-icon">💡</div>
            <div className="float-icon">🔬</div>
            <div className="float-icon">⚡</div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Study <span className="gradient-text">Materials</span> Hub
            </h1>
            <p className="hero-description">
              Access comprehensive study materials, textbooks, notes, and
              resources for all engineering branches and semesters
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-icon">📚</div>
                <div className="stat-info">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Study Materials</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🎓</div>
                <div className="stat-info">
                  <span className="stat-number">7</span>
                  <span className="stat-label">Branches</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">📊</div>
                <div className="stat-info">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Downloads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="search-controls">
            <div className="search-box">
              <div className="search-icon">🔍</div>
              <input
                type="text"
                placeholder="Search materials, subjects, topics, or authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button
                  className="clear-search"
                  onClick={() => setSearchTerm("")}
                >
                  ✕
                </button>
              )}
            </div>

            <div className="view-controls">
              <button
                className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
              >
                <i className="fas fa-th-large"></i>
                Grid
              </button>
              <button
                className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
              >
                <i className="fas fa-list"></i>
                List
              </button>
            </div>
          </div>

          <div className="filter-controls">
            <div className="filter-group">
              <label className="filter-label">Branch</label>
              <div className="branch-filters">
                {branches.map((branch) => (
                  <button
                    key={branch.id}
                    className={`branch-btn ${
                      selectedBranch === branch.id ? "active" : ""
                    }`}
                    onClick={() => setSelectedBranch(branch.id)}
                    style={{ "--branch-color": branch.color }}
                  >
                    <span className="branch-icon">{branch.icon}</span>
                    <span className="branch-name">{branch.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Semester</label>
              <div className="semester-filters">
                {semesters.map((semester) => (
                  <button
                    key={semester.id}
                    className={`semester-btn ${
                      selectedSemester === semester.id ? "active" : ""
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
      <section className="materials-section">
        <div className="container">
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading study materials...</p>
            </div>
          ) : (
            <>
              <div className="materials-header">
                <h2>
                  {selectedBranch === "all"
                    ? "All Materials"
                    : branches.find((b) => b.id === selectedBranch)?.name}
                  {selectedSemester !== "all" &&
                    ` - ${
                      semesters.find((s) => s.id === selectedSemester)?.name
                    }`}
                </h2>
                <p className="materials-count">
                  {filteredMaterials.length} material
                  {filteredMaterials.length !== 1 ? "s" : ""} found
                </p>
              </div>

              <div className={`materials-grid ${viewMode}`}>
                {filteredMaterials.map((material, index) => (
                  <div
                    key={material.id}
                    className={`material-card ${viewMode}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="material-header">
                      <div className="material-type">
                        <span className="type-icon">
                          {getTypeIcon(material.type)}
                        </span>
                        <span className="type-label">{material.type}</span>
                      </div>
                      <div className="material-rating">
                        <span className="rating-stars">⭐</span>
                        <span className="rating-value">{material.rating}</span>
                      </div>
                    </div>

                    <div className="material-content">
                      <h3 className="material-title">{material.title}</h3>
                      <div className="material-meta">
                        <span className="material-subject">
                          {material.subject}
                        </span>
                        <span className="material-branch">
                          {branches.find((b) => b.id === material.branch)?.name}
                        </span>
                        <span className="material-semester">
                          Sem {material.semester}
                        </span>
                      </div>

                      <p className="material-description">
                        {material.description}
                      </p>

                      <div className="material-topics">
                        {material.topics.slice(0, 4).map((topic, idx) => (
                          <span key={idx} className="topic-tag">
                            {topic}
                          </span>
                        ))}
                        {material.topics.length > 4 && (
                          <span className="topic-more">
                            +{material.topics.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="material-info">
                        <div className="info-item">
                          <i className="fas fa-user"></i>
                          <span>{material.author}</span>
                        </div>
                        <div className="info-item">
                          <i className="fas fa-download"></i>
                          <span>
                            {material.downloads.toLocaleString()} downloads
                          </span>
                        </div>
                        <div className="info-item">
                          <i className="fas fa-file"></i>
                          <span>
                            {material.format} • {formatFileSize(material.size)}
                          </span>
                        </div>
                        <div className="info-item">
                          <span
                            className="difficulty-badge"
                            style={{
                              backgroundColor: getDifficultyColor(
                                material.difficulty
                              ),
                            }}
                          >
                            {material.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="material-actions">
                      <button className="action-btn primary">
                        <i className="fas fa-download"></i>
                        Download
                      </button>
                      <button className="action-btn secondary">
                        <i className="fas fa-eye"></i>
                        Preview
                      </button>
                      <button className="action-btn icon">
                        <i className="fas fa-bookmark"></i>
                      </button>
                      <button className="action-btn icon">
                        <i className="fas fa-share"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredMaterials.length === 0 && (
                <div className="no-results">
                  <div className="no-results-icon">📚</div>
                  <h3>No materials found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                  <button
                    className="reset-btn"
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

      {/* Popular Materials Section */}
      <section className="popular-section">
        <div className="container">
          <h2 className="section-title">Most Downloaded This Week</h2>
          <div className="popular-grid">
            {materials.slice(0, 4).map((material, index) => (
              <div key={material.id} className="popular-card">
                <div className="popular-rank">#{index + 1}</div>
                <div className="popular-content">
                  <h4>{material.title}</h4>
                  <p>
                    {material.subject} • {material.downloads.toLocaleString()}{" "}
                    downloads
                  </p>
                  <div className="popular-meta">
                    <span className="popular-rating">⭐ {material.rating}</span>
                    <span className="popular-size">
                      {material.format} • {formatFileSize(material.size)}
                    </span>
                  </div>
                </div>
                <button className="popular-download">
                  <i className="fas fa-download"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Materials;
