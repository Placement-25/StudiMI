import React, { useState, useEffect, useMemo } from "react";
import "./KZ.css";
import {
  FiZap,
  FiVideo,
  FiFileText,
  FiHelpCircle,
  FiCode,
  FiFolder,
  FiTool,
  FiRadio,
  FiSearch,
  FiGrid,
  FiList,
  FiStar,
  FiEye,
  FiUser,
  FiBookmark,
  FiX,
  FiSliders,
  FiChevronDown,
  FiChevronUp,
  FiRotateCcw,
} from "react-icons/fi";

const Kzone = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredContent, setFilteredContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set());

  const categories = [
    { id: "all", name: "All Content", icon: <FiZap size={16} /> },
    { id: "tutorials", name: "Video Tutorials", icon: <FiVideo size={16} /> },
    { id: "articles", name: "Tech Articles", icon: <FiFileText size={16} /> },
    { id: "quizzes", name: "Skill Assessments", icon: <FiHelpCircle size={16} /> },
    { id: "cheatsheets", name: "Cheat Sheets", icon: <FiCode size={16} /> },
    { id: "resources", name: "Dev Resources", icon: <FiFolder size={16} /> },
    { id: "tools", name: "Interactive Tools", icon: <FiTool size={16} /> },
    { id: "podcasts", name: "Tech Podcasts", icon: <FiRadio size={16} /> },
  ];

  const difficulties = ["all", "beginner", "intermediate", "advanced"];

  const knowledgeContent = useMemo(
    () => [
      {
        id: 1,
        title: "Modern React 18 & Redux Toolkit Architecture",
        category: "tutorials",
        difficulty: "intermediate",
        readTime: "45 mins",
        author: "Sarah Drasner",
        views: 14200,
        rating: 4.9,
        description: "Master React 18 concurrent features, custom hooks, global state management with Redux Toolkit, and performance optimizations.",
        topics: ["React", "Redux", "JavaScript", "Frontend"],
        url: "https://react.dev",
        type: "Video Course",
        featured: true,
      },
      {
        id: 2,
        title: "System Design Primer: Scalable Microservices",
        category: "articles",
        difficulty: "advanced",
        readTime: "25 mins",
        author: "Alex Xu",
        views: 28900,
        rating: 4.95,
        description: "Comprehensive blueprint on load balancers, database sharding, caching strategies, and distributed message queues.",
        topics: ["System Design", "Microservices", "Kafka", "Redis"],
        url: "https://bytebytego.com",
        type: "Deep Dive Article",
        featured: true,
      },
      {
        id: 3,
        title: "Data Structures & Algorithms Self-Assessment",
        category: "quizzes",
        difficulty: "intermediate",
        readTime: "20 mins",
        author: "StudiMI Editorial",
        views: 8700,
        rating: 4.7,
        description: "30 interactive multiple-choice questions testing graph traversal, dynamic programming recurrence relations, and tree rotations.",
        topics: ["DSA", "Algorithms", "Practice"],
        url: "#",
        type: "Interactive Quiz",
        featured: false,
      },
      {
        id: 4,
        title: "Complete Docker & Kubernetes Cheat Sheet",
        category: "cheatsheets",
        difficulty: "beginner",
        readTime: "10 mins",
        author: "DevOps Handbook",
        views: 19400,
        rating: 4.85,
        description: "Essential Docker CLI commands, Dockerfile syntax, Kubernetes kubectl cheat sheet, and deployment YAML templates.",
        topics: ["Docker", "Kubernetes", "DevOps"],
        url: "https://kubernetes.io",
        type: "PDF Reference",
        featured: false,
      },
      {
        id: 5,
        title: "Curated List of Free Developer APIs & Public Data",
        category: "resources",
        difficulty: "beginner",
        readTime: "15 mins",
        author: "Community",
        views: 31200,
        rating: 4.9,
        description: "Over 500 free REST APIs for machine learning, weather, finance, sports, and placeholder data for student side projects.",
        topics: ["APIs", "Open Source", "JSON"],
        url: "https://github.com/public-apis/public-apis",
        type: "Resource List",
        featured: true,
      },
      {
        id: 6,
        title: "Interactive Regex Tester & Visualizer",
        category: "tools",
        difficulty: "beginner",
        readTime: "5 mins",
        author: "StudiMI Tools",
        views: 11500,
        rating: 4.6,
        description: "Test regular expressions in real-time with visual tree breakdowns, match group highlights, and common syntax reference.",
        topics: ["Regex", "Developer Tools", "Utility"],
        url: "https://regex101.com",
        type: "Web Tool",
        featured: false,
      },
    ],
    []
  );

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      let filtered = knowledgeContent.filter((item) => {
        const matchesCategory =
          activeCategory === "all" || item.category === activeCategory;
        const matchesDifficulty =
          selectedDifficulty === "all" ||
          item.difficulty === selectedDifficulty;
        const matchesSearch =
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.topics.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesDifficulty && matchesSearch;
      });

      filtered.sort((a, b) => b.views - a.views);

      setFilteredContent(filtered);
      setIsLoading(false);
    }, 250);
  }, [activeCategory, selectedDifficulty, searchTerm, knowledgeContent]);

  const activeFiltersCount = (activeCategory !== "all" ? 1 : 0) + (selectedDifficulty !== "all" ? 1 : 0);

  const handleBookmark = (id) => {
    setBookmarkedItems((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) updated.delete(id);
      else updated.add(id);
      return updated;
    });
  };

  return (
    <div className="kzone-container py-4 position-relative pb-5">
      {/* Header Section */}
      <section className="py-4 mb-4 bg-body-tertiary border-bottom">
        <div className="container">
          <h1 className="display-6 fw-bold mb-2 text-body d-flex align-items-center gap-3">
            <div className="p-2 bg-info-subtle text-info rounded-3 d-inline-flex">
              <FiZap size={26} />
            </div>
            <span>Developer Knowledge Zone</span>
          </h1>
          <p className="lead text-muted m-0 fs-6" style={{ maxWidth: "720px" }}>
            Curated technical tutorials, system design articles, interactive cheatsheets, and essential developer learning resources.
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
                    placeholder="Search by topic, article title, technology stack..."
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
                    <span className="badge bg-info text-white rounded-pill ms-1 px-2">
                      {activeFiltersCount}
                    </span>
                  )}
                  {showFilters ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                </button>

                {activeFiltersCount > 0 && (
                  <button
                    className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1"
                    onClick={() => {
                      setActiveCategory("all");
                      setSelectedDifficulty("all");
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

            {/* Collapsible Panel for Category & Difficulty Filters */}
            {showFilters && (
              <div className="collapsible-filter-panel mt-3 pt-3 border-top">
                <div className="mb-3">
                  <label className="fw-semibold small text-muted d-block mb-2">Category:</label>
                  <div className="d-flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        className={`btn btn-sm rounded-3 px-3 py-2 border transition-all d-flex align-items-center gap-2 ${
                          activeCategory === cat.id ? "btn-info text-white shadow-sm" : "btn-outline-secondary"
                        }`}
                        onClick={() => setActiveCategory(cat.id)}
                      >
                        {cat.icon}
                        <span>{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="fw-semibold small text-muted d-block mb-2">Difficulty Level:</label>
                  <div className="d-flex flex-wrap gap-2">
                    {difficulties.map((diff) => (
                      <button
                        key={diff}
                        className={`btn btn-sm rounded-3 px-3 py-2 border text-capitalize transition-all ${
                          selectedDifficulty === diff ? "btn-primary shadow-sm" : "btn-outline-secondary"
                        }`}
                        onClick={() => setSelectedDifficulty(diff)}
                      >
                        {diff}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-2">
        <div className="container">
          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-info" role="status"></div>
              <p className="mt-2 text-muted">Loading knowledge base...</p>
            </div>
          ) : (
            <>
              <div className={viewMode === "grid" ? "row g-4" : "d-flex flex-column gap-3"}>
                {filteredContent.map((item) => {
                  const isBookmarked = bookmarkedItems.has(item.id);
                  return (
                    <div
                      key={item.id}
                      className={viewMode === "grid" ? "col-md-6 col-lg-4" : "col-12"}
                    >
                      <div className="card h-100 border shadow-sm rounded-4 p-3 hover-lift bg-body-tertiary d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="badge bg-info-subtle text-info rounded-pill px-3 py-1 small fw-semibold">
                            {item.type}
                          </span>
                          <span className="fw-semibold text-warning small d-flex align-items-center gap-1">
                            <FiStar size={14} className="fill-warning" /> {item.rating}
                          </span>
                        </div>

                        <div className="card-body p-0 py-2 flex-grow-1">
                          <h5 className="card-title fw-bold m-0 mb-2">{item.title}</h5>
                          <p className="card-text text-muted small line-clamp-3 mb-3">
                            {item.description}
                          </p>

                          <div className="d-flex flex-wrap gap-1 mb-3">
                            {item.topics.map((t, idx) => (
                              <span key={idx} className="badge bg-body border text-body-tertiary small fw-normal">
                                #{t}
                              </span>
                            ))}
                          </div>

                          <div className="text-muted small d-flex justify-content-between align-items-center pt-2 border-top">
                            <span className="d-flex align-items-center gap-1">
                              <FiUser size={13} /> {item.author}
                            </span>
                            <span className="d-flex align-items-center gap-1">
                              <FiEye size={13} /> {item.views.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        <div className="card-footer bg-transparent border-0 p-0 pt-3 d-flex gap-2">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-info btn-sm text-white flex-grow-1 rounded-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
                          >
                            <FiZap size={15} /> <span>Explore Content</span>
                          </a>
                          <button
                            className={`btn btn-sm rounded-3 ${isBookmarked ? "btn-warning" : "btn-outline-secondary"}`}
                            onClick={() => handleBookmark(item.id)}
                            title="Bookmark"
                          >
                            <FiBookmark size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredContent.length === 0 && (
                <div className="text-center py-5 my-4 bg-body-tertiary rounded-4 border">
                  <FiZap size={40} className="text-muted mb-3" />
                  <h4>No Content Matches Your Filters</h4>
                  <p className="text-muted">Try resetting search keywords or category selections.</p>
                  <button
                    className="btn btn-outline-info rounded-3 px-4"
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory("all");
                      setSelectedDifficulty("all");
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
    </div>
  );
};

export default Kzone;
