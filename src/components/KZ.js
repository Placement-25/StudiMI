import React, { useState, useEffect, useMemo } from "react";
import "./KZ.css";

const Kzone = () => {
  // Enhanced state management
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContent, setFilteredContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set());
  const [selectedContent, setSelectedContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCategoriesContent, setShowCategoriesContent] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);

  // Enhanced categories with more detailed information and responsive features
  const categories = useMemo(
    () => [
      {
        id: "all",
        name: "All Content",
        shortName: "All",
        icon: "🌟",
        color: "#667eea",
        count: 45,
        description: "Browse all available content",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        isPopular: true,
      },
      {
        id: "tutorials",
        name: "Video Tutorials",
        shortName: "Videos",
        icon: "🎥",
        color: "#e74c3c",
        count: 12,
        description: "Step-by-step video guides",
        gradient: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
        isNew: false,
      },
      {
        id: "articles",
        name: "Articles",
        shortName: "Articles",
        icon: "📖",
        color: "#3498db",
        count: 8,
        description: "In-depth written content",
        gradient: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
        isNew: false,
      },
      {
        id: "quizzes",
        name: "Interactive Quizzes",
        shortName: "Quizzes",
        icon: "🧩",
        color: "#f39c12",
        count: 15,
        description: "Test your knowledge",
        gradient: "linear-gradient(135deg, #f39c12 0%, #e67e22 100%)",
        isPopular: true,
      },
      {
        id: "code",
        name: "Code Examples",
        shortName: "Code",
        icon: "💻",
        color: "#2ecc71",
        count: 6,
        description: "Practical code snippets",
        gradient: "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",
        isNew: false,
      },
      {
        id: "projects",
        name: "Mini Projects",
        shortName: "Projects",
        icon: "🚀",
        color: "#9b59b6",
        count: 3,
        description: "Hands-on project tutorials",
        gradient: "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",
        isNew: true,
      },
      {
        id: "tools",
        name: "Study Tools",
        shortName: "Tools",
        icon: "🛠️",
        color: "#e67e22",
        count: 4,
        description: "Interactive learning tools",
        gradient: "linear-gradient(135deg, #e67e22 0%, #d35400 100%)",
        isNew: false,
      },
      {
        id: "live",
        name: "Live Sessions",
        shortName: "Live",
        icon: "📺",
        color: "#ff6b6b",
        count: 2,
        description: "Real-time learning sessions",
        gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
        isLive: true,
      },
    ],
    []
  );

  const difficulties = ["all", "beginner", "intermediate", "advanced"];
  const sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "newest", label: "Newest First" },
    { value: "rating", label: "Highest Rated" },
    { value: "duration", label: "Shortest Duration" },
  ];

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobileView(mobile);
      if (!mobile) {
        setShowCategoriesContent(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle categories content visibility
  const toggleCategoriesContent = () => {
    setShowCategoriesContent(!showCategoriesContent);
  };

  // Enhanced knowledge content with more realistic data
  const knowledgeContent = useMemo(
    () => [
      {
        id: 1,
        title: "Complete React.js Masterclass 2024",
        category: "tutorials",
        type: "Video Series",
        difficulty: "intermediate",
        duration: "12 hours",
        views: 45600,
        rating: 4.9,
        instructor: "Sarah Chen",
        instructorAvatar: "👩‍💻",
        description:
          "Master React.js from basics to advanced concepts with hands-on projects, hooks, context, and real-world applications. Build 5 complete projects.",
        topics: [
          "Components",
          "Hooks",
          "State Management",
          "Routing",
          "API Integration",
          "Testing",
        ],
        thumbnail: "🎬",
        isPremium: false,
        completionRate: 87,
        students: 12400,
        lastUpdated: "2024-01-15",
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        estimatedTime: "2 weeks",
        certificates: true,
        downloadable: true,
        level: "Intermediate to Advanced",
      },
      {
        id: 2,
        title: "Interactive Data Structures Visualizer",
        category: "tools",
        type: "Interactive Tool",
        difficulty: "beginner",
        duration: "Self-paced",
        views: 28900,
        rating: 4.8,
        instructor: "Tech Academy",
        instructorAvatar: "🏫",
        description:
          "Interactive visualization tool to understand data structures with step-by-step animations, algorithm complexity analysis, and hands-on practice.",
        topics: [
          "Arrays",
          "Linked Lists",
          "Trees",
          "Graphs",
          "Hash Tables",
          "Sorting Algorithms",
        ],
        thumbnail: "🔧",
        isPremium: false,
        completionRate: 92,
        students: 8700,
        lastUpdated: "2024-02-01",
        language: "Multiple",
        subtitles: ["English"],
        estimatedTime: "1 week",
        certificates: false,
        downloadable: false,
        level: "Beginner Friendly",
      },
      {
        id: 3,
        title: "Machine Learning Fundamentals & Neural Networks",
        category: "articles",
        type: "Article Series",
        difficulty: "advanced",
        duration: "8 hours read",
        views: 67800,
        rating: 4.7,
        instructor: "Dr. Michael Kumar",
        instructorAvatar: "👨‍🔬",
        description:
          "Comprehensive guide to machine learning concepts, algorithms, and practical implementations. Covers supervised learning, deep learning, and real-world applications.",
        topics: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Neural Networks",
          "Deep Learning",
          "TensorFlow",
          "PyTorch",
        ],
        thumbnail: "📚",
        isPremium: true,
        completionRate: 78,
        students: 15600,
        lastUpdated: "2024-01-28",
        language: "English",
        subtitles: ["English", "Hindi"],
        estimatedTime: "3 weeks",
        certificates: true,
        downloadable: true,
        level: "Advanced",
      },
      {
        id: 4,
        title: "JavaScript ES6+ Master Quiz Challenge",
        category: "quizzes",
        type: "Interactive Quiz",
        difficulty: "intermediate",
        duration: "45 minutes",
        views: 34200,
        rating: 4.6,
        instructor: "Code Masters",
        instructorAvatar: "⚡",
        description:
          "Test your JavaScript ES6+ knowledge with 100+ interactive quizzes, instant feedback, detailed explanations, and performance analytics.",
        topics: [
          "Arrow Functions",
          "Destructuring",
          "Promises",
          "Async/Await",
          "Modules",
          "Classes",
        ],
        thumbnail: "🎯",
        isPremium: false,
        completionRate: 94,
        students: 9800,
        lastUpdated: "2024-02-10",
        language: "English",
        subtitles: ["English"],
        estimatedTime: "2 days",
        certificates: true,
        downloadable: false,
        level: "Intermediate",
      },
      {
        id: 5,
        title: "Python Web Scraping Bootcamp",
        category: "code",
        type: "Code Repository",
        difficulty: "intermediate",
        duration: "6 hours",
        views: 23400,
        rating: 4.8,
        instructor: "Python Guild",
        instructorAvatar: "🐍",
        description:
          "Real-world Python web scraping examples with Beautiful Soup, Scrapy, and Selenium. Includes data cleaning, storage, and ethical scraping practices.",
        topics: [
          "Beautiful Soup",
          "Scrapy",
          "Selenium",
          "Data Parsing",
          "API Integration",
          "Database Storage",
        ],
        thumbnail: "🐍",
        isPremium: false,
        completionRate: 85,
        students: 6700,
        lastUpdated: "2024-02-05",
        language: "English",
        subtitles: ["English", "Spanish"],
        estimatedTime: "1 week",
        certificates: false,
        downloadable: true,
        level: "Intermediate",
      },
      {
        id: 6,
        title: "Full-Stack E-commerce App with MERN",
        category: "projects",
        type: "Project Tutorial",
        difficulty: "advanced",
        duration: "20 hours",
        views: 56700,
        rating: 4.9,
        instructor: "Full Stack Academy",
        instructorAvatar: "🏆",
        description:
          "Build a complete e-commerce application from scratch using MERN stack with payment integration, user authentication, admin panel, and deployment.",
        topics: [
          "React",
          "Node.js",
          "MongoDB",
          "Express",
          "Payment Gateway",
          "Authentication",
          "AWS Deployment",
        ],
        thumbnail: "🛒",
        isPremium: true,
        completionRate: 73,
        students: 4200,
        lastUpdated: "2024-01-20",
        language: "English",
        subtitles: ["English", "Hindi", "Spanish"],
        estimatedTime: "4 weeks",
        certificates: true,
        downloadable: true,
        level: "Advanced",
      },
      {
        id: 7,
        title: "CSS Grid & Flexbox Modern Layouts",
        category: "tutorials",
        type: "Video Tutorial",
        difficulty: "beginner",
        duration: "6 hours",
        views: 41200,
        rating: 4.7,
        instructor: "Design Pro",
        instructorAvatar: "🎨",
        description:
          "Master modern CSS layout techniques with practical examples, responsive design patterns, and real-world projects. Perfect for beginners and intermediates.",
        topics: [
          "CSS Grid",
          "Flexbox",
          "Responsive Design",
          "Media Queries",
          "Layout Patterns",
          "Mobile First",
        ],
        thumbnail: "🎨",
        isPremium: false,
        completionRate: 89,
        students: 11200,
        lastUpdated: "2024-02-08",
        language: "English",
        subtitles: ["English", "French"],
        estimatedTime: "1 week",
        certificates: true,
        downloadable: false,
        level: "Beginner to Intermediate",
      },
      {
        id: 8,
        title: "Algorithm Complexity & Big O Notation",
        category: "quizzes",
        type: "Assessment",
        difficulty: "advanced",
        duration: "60 minutes",
        views: 19800,
        rating: 4.5,
        instructor: "Algo Expert",
        instructorAvatar: "⚡",
        description:
          "Test your understanding of Big O notation, time complexity, space complexity, and algorithm analysis with detailed explanations and visual examples.",
        topics: [
          "Big O Notation",
          "Time Complexity",
          "Space Complexity",
          "Algorithm Analysis",
          "Optimization",
          "Performance",
        ],
        thumbnail: "⚡",
        isPremium: false,
        completionRate: 76,
        students: 5400,
        lastUpdated: "2024-02-12",
        language: "English",
        subtitles: ["English"],
        estimatedTime: "3 days",
        certificates: true,
        downloadable: false,
        level: "Advanced",
      },
      {
        id: 9,
        title: "Live Coding Session: Building REST APIs",
        category: "live",
        type: "Live Workshop",
        difficulty: "intermediate",
        duration: "3 hours",
        views: 15600,
        rating: 4.8,
        instructor: "API Master",
        instructorAvatar: "🔴",
        description:
          "Join our live coding session where we build a complete REST API from scratch with authentication, validation, testing, and documentation.",
        topics: [
          "REST API",
          "Node.js",
          "Express",
          "Authentication",
          "Validation",
          "Testing",
          "Documentation",
        ],
        thumbnail: "📺",
        isPremium: true,
        completionRate: 95,
        students: 2100,
        lastUpdated: "2024-02-15",
        language: "English",
        subtitles: ["English"],
        estimatedTime: "3 hours",
        certificates: true,
        downloadable: false,
        level: "Intermediate",
        isLive: true,
        nextSession: "2024-02-20T15:00:00Z",
      },
      {
        id: 10,
        title: "Code Review Checklist & Best Practices",
        category: "tools",
        type: "Interactive Checklist",
        difficulty: "intermediate",
        duration: "2 hours",
        views: 31200,
        rating: 4.6,
        instructor: "Code Quality Team",
        instructorAvatar: "✅",
        description:
          "Interactive checklist and guide for conducting effective code reviews, with examples, templates, and best practices for teams.",
        topics: [
          "Code Review",
          "Best Practices",
          "Quality Assurance",
          "Team Collaboration",
          "Documentation",
          "Testing",
        ],
        thumbnail: "✅",
        isPremium: false,
        completionRate: 88,
        students: 7300,
        lastUpdated: "2024-02-07",
        language: "English",
        subtitles: ["English", "Spanish"],
        estimatedTime: "2 days",
        certificates: false,
        downloadable: true,
        level: "Intermediate",
      },
    ],
    []
  );

  // Enhanced trending topics with more data
  const trendingTopics = [
    { name: "React Hooks", count: 234, trend: "up", color: "#61dafb" },
    { name: "Machine Learning", count: 189, trend: "up", color: "#ff6b6b" },
    { name: "JavaScript ES6", count: 156, trend: "stable", color: "#f7df1e" },
    { name: "Python Data Science", count: 143, trend: "up", color: "#3776ab" },
    { name: "CSS Grid", count: 128, trend: "down", color: "#1572b6" },
    { name: "Node.js", count: 112, trend: "up", color: "#339933" },
    { name: "TypeScript", count: 98, trend: "up", color: "#3178c6" },
    { name: "Vue.js", count: 87, trend: "stable", color: "#4fc08d" },
  ];

  const weeklyStats = {
    totalViews: 234567,
    newContent: 45,
    activeUsers: 12890,
    completionRate: 84,
  };

  // Enhanced filtering and sorting logic
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
          item.topics.some((topic) =>
            topic.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          item.instructor.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesDifficulty && matchesSearch;
      });

      // Sort the filtered content
      filtered.sort((a, b) => {
        switch (sortBy) {
          case "newest":
            return new Date(b.lastUpdated) - new Date(a.lastUpdated);
          case "rating":
            return b.rating - a.rating;
          case "duration":
            const getDurationMinutes = (duration) => {
              const hours = duration.match(/(\d+)\s*hours?/i);
              const minutes = duration.match(/(\d+)\s*minutes?/i);
              return (
                (hours ? parseInt(hours[1]) * 60 : 0) +
                (minutes ? parseInt(minutes[1]) : 0)
              );
            };
            return (
              getDurationMinutes(a.duration) - getDurationMinutes(b.duration)
            );
          default: // popular
            return b.views - a.views;
        }
      });

      setFilteredContent(filtered);
      setIsLoading(false);
    }, 400);
  }, [
    activeCategory,
    selectedDifficulty,
    searchTerm,
    sortBy,
    knowledgeContent,
  ]);

  // Utility functions
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "beginner":
        return "#28a745";
      case "intermediate":
        return "#ffc107";
      case "advanced":
        return "#dc3545";
      default:
        return "#6c757d";
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "up":
        return "📈";
      case "down":
        return "📉";
      case "stable":
        return "➡️";
      default:
        return "➡️";
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  const handleBookmark = (itemId) => {
    setBookmarkedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const openContentModal = (content) => {
    setSelectedContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedContent(null);
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  return (
    <div className="kzone-container">
      {/* Hero Section */}
      <section className="kzone-hero">
        <div className="hero-background">
          <div className="floating-knowledge">
            <div className="knowledge-particle">💡</div>
            <div className="knowledge-particle">📚</div>
            <div className="knowledge-particle">🎓</div>
            <div className="knowledge-particle">🧠</div>
            <div className="knowledge-particle">⚡</div>
            <div className="knowledge-particle">🚀</div>
            <div className="knowledge-particle">🔬</div>
            <div className="knowledge-particle">💻</div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Knowledge <span className="gradient-text">Zone</span>
            </h1>
            <p className="hero-description">
              Explore our comprehensive learning hub with interactive tutorials,
              code examples, quizzes, and tools to accelerate your learning
              journey
            </p>
            <div className="weekly-stats">
              <div className="stat-card">
                <div className="stat-icon">👁️</div>
                <div className="stat-info">
                  <span className="stat-number">
                    {formatNumber(weeklyStats.totalViews)}
                  </span>
                  <span className="stat-label">Total Views</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✨</div>
                <div className="stat-info">
                  <span className="stat-number">{weeklyStats.newContent}</span>
                  <span className="stat-label">New This Week</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-info">
                  <span className="stat-number">
                    {formatNumber(weeklyStats.activeUsers)}
                  </span>
                  <span className="stat-label">Active Learners</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-info">
                  <span className="stat-number">
                    {weeklyStats.completionRate}%
                  </span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Topics Bar */}
      <section className="trending-section">
        <div className="container">
          <div className="trending-header">
            <h3>🔥 Trending Topics</h3>
            <div className="trending-scroll">
              {trendingTopics.map((topic, index) => (
                <div
                  key={index}
                  className="trending-item"
                  style={{ "--trend-color": topic.color }}
                >
                  <span className="trend-icon">
                    {getTrendIcon(topic.trend)}
                  </span>
                  <span className="trend-name">{topic.name}</span>
                  <span className="trend-count">{topic.count}</span>
                  <div
                    className="trend-indicator"
                    style={{ backgroundColor: topic.color }}
                  ></div>
                </div>
              ))}
            </div>
            <button className="view-all-trends">View All</button>
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
                placeholder="Search tutorials, articles, tools, or topics..."
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

            <div className="control-group">
              <div className="sort-controls">
                <label className="control-label">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
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

              <button
                className="mobile-filter-btn"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
              >
                <i className="fas fa-filter"></i>
                Filters
              </button>
            </div>
          </div>

          <div
            className={`filter-controls ${
              showMobileFilters ? "mobile-open" : ""
            }`}
          >
            {/* Enhanced Categories Section */}
            <div className="categories-section">
              <div className="categories-header">
                <div>
                  <h3 className="categories-title">
                    <span>📚</span>
                    Browse Categories
                  </h3>
                  <p className="categories-subtitle">
                    Choose from {categories.length} content categories
                  </p>
                </div>
                <button
                  className={`categories-toggle ${
                    !showCategoriesContent ? "collapsed" : ""
                  }`}
                  onClick={toggleCategoriesContent}
                  aria-expanded={showCategoriesContent}
                  aria-controls="categories-content"
                >
                  <span>
                    {showCategoriesContent ? "Hide" : "Show"} Categories
                  </span>
                  <span className="toggle-icon">
                    {showCategoriesContent ? "▲" : "▼"}
                  </span>
                </button>
              </div>

              <div
                id="categories-content"
                className={`categories-content ${
                  !showCategoriesContent ? "hidden" : ""
                }`}
                aria-hidden={!showCategoriesContent}
              >
                <div className="enhanced-category-filters" role="tablist">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`enhanced-category-btn ${
                        activeCategory === category.id ? "active" : ""
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                      style={{
                        "--category-color": category.color,
                        "--category-gradient": category.gradient,
                      }}
                      title={category.description}
                      aria-selected={activeCategory === category.id}
                      role="tab"
                    >
                      <div className="category-icon-wrapper">
                        <span>{category.icon}</span>
                      </div>
                      <div className="category-info">
                        <div className="category-main-name">
                          {isMobileView ? category.shortName : category.name}
                        </div>
                        <div className="category-description">
                          {category.description}
                        </div>
                        <div className="category-meta">
                          <span className="enhanced-category-count">
                            <span className="count-icon">📄</span>
                            {category.count}
                          </span>
                          {category.isPopular && (
                            <span className="category-badge badge-popular">
                              Popular
                            </span>
                          )}
                          {category.isNew && (
                            <span className="category-badge badge-new">
                              New
                            </span>
                          )}
                          {category.isLive && (
                            <span className="category-badge badge-live">
                              Live
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Difficulty Level</label>
              <div className="difficulty-filters">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    className={`difficulty-btn ${
                      selectedDifficulty === difficulty ? "active" : ""
                    }`}
                    onClick={() => setSelectedDifficulty(difficulty)}
                  >
                    {difficulty === "all"
                      ? "All Levels"
                      : difficulty.charAt(0).toUpperCase() +
                        difficulty.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid/List */}
      <section className="content-section">
        <div className="container">
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading knowledge content...</p>
            </div>
          ) : (
            <>
              <div className="content-header">
                <h2>
                  {activeCategory === "all"
                    ? "All Content"
                    : categories.find((c) => c.id === activeCategory)?.name}
                  {selectedDifficulty !== "all" &&
                    ` - ${
                      selectedDifficulty.charAt(0).toUpperCase() +
                      selectedDifficulty.slice(1)
                    }`}
                </h2>
                <p className="content-count">
                  {filteredContent.length} item
                  {filteredContent.length !== 1 ? "s" : ""} found
                </p>
              </div>

              <div className={`content-grid ${viewMode}`}>
                {filteredContent.map((item, index) => (
                  <div
                    key={item.id}
                    className={`content-card ${viewMode} ${
                      item.isLive ? "live-content" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="content-thumbnail">
                      <div className="thumbnail-icon">{item.thumbnail}</div>
                      {item.isPremium && (
                        <div className="premium-badge">✨ Premium</div>
                      )}
                      {item.isLive && <div className="live-badge">🔴 Live</div>}
                      {item.certificates && (
                        <div className="certificate-badge">🏆 Certificate</div>
                      )}
                      <div className="content-overlay">
                        <button
                          className="play-btn"
                          onClick={() => openContentModal(item)}
                        >
                          {item.isLive ? "🔴" : "▶️"}
                        </button>
                      </div>
                      <div className="quick-actions">
                        <button
                          className={`bookmark-btn ${
                            bookmarkedItems.has(item.id) ? "bookmarked" : ""
                          }`}
                          onClick={() => handleBookmark(item.id)}
                        >
                          {bookmarkedItems.has(item.id) ? "❤️" : "🤍"}
                        </button>
                      </div>
                    </div>

                    <div className="content-info">
                      <div className="content-meta">
                        <span className="content-type">{item.type}</span>
                        <span
                          className="difficulty-badge"
                          style={{
                            backgroundColor: getDifficultyColor(
                              item.difficulty
                            ),
                          }}
                        >
                          {item.difficulty}
                        </span>
                        {item.downloadable && (
                          <span className="feature-badge">📥 Downloadable</span>
                        )}
                      </div>

                      <h3
                        className="content-title"
                        onClick={() => openContentModal(item)}
                      >
                        {item.title}
                      </h3>
                      <p className="content-description">{item.description}</p>

                      <div className="instructor-info">
                        <div className="instructor-avatar">
                          {item.instructorAvatar}
                        </div>
                        <div className="instructor-details">
                          <span className="instructor-name">
                            {item.instructor}
                          </span>
                          <span className="content-level">{item.level}</span>
                        </div>
                      </div>

                      <div className="content-details">
                        <div className="detail-item">
                          <i className="fas fa-clock"></i>
                          <span>{item.duration}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-eye"></i>
                          <span>{formatNumber(item.views)} views</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-star"></i>
                          <span>
                            {item.rating} ({formatNumber(item.students)})
                          </span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-calendar"></i>
                          <span>{getTimeAgo(item.lastUpdated)}</span>
                        </div>
                      </div>

                      <div className="content-topics">
                        {item.topics.slice(0, 4).map((topic, idx) => (
                          <span key={idx} className="topic-tag">
                            {topic}
                          </span>
                        ))}
                        {item.topics.length > 4 && (
                          <span className="topic-more">
                            +{item.topics.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="progress-section">
                        <div className="progress-info">
                          <span>Success Rate</span>
                          <span>{item.completionRate}%</span>
                        </div>
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: `${item.completionRate}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.isLive && item.nextSession && (
                        <div className="next-session">
                          <i className="fas fa-calendar-alt"></i>
                          <span>
                            Next session:{" "}
                            {new Date(item.nextSession).toLocaleDateString()}
                          </span>
                        </div>
                      )}

                      <div className="language-info">
                        <div className="language-item">
                          <i className="fas fa-globe"></i>
                          <span>{item.language}</span>
                        </div>
                        {item.subtitles && item.subtitles.length > 0 && (
                          <div className="subtitles-info">
                            <i className="fas fa-closed-captioning"></i>
                            <span>{item.subtitles.join(", ")}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="content-actions">
                      <button
                        className="action-btn primary"
                        onClick={() => openContentModal(item)}
                      >
                        <i className="fas fa-play"></i>
                        {item.isLive ? "Join Live" : "Start Learning"}
                      </button>
                      <button
                        className={`action-btn secondary ${
                          bookmarkedItems.has(item.id) ? "bookmarked" : ""
                        }`}
                        onClick={() => handleBookmark(item.id)}
                      >
                        <i className="fas fa-bookmark"></i>
                        {bookmarkedItems.has(item.id) ? "Saved" : "Save"}
                      </button>
                      <button className="action-btn icon">
                        <i className="fas fa-share"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredContent.length === 0 && (
                <div className="no-results">
                  <div className="no-results-icon">🔍</div>
                  <h3>No content found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                  <button
                    className="reset-btn"
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

      {/* Featured Content Showcase */}
      <section className="featured-section">
        <div className="container">
          <div className="featured-content">
            <div className="featured-text">
              <h2>🌟 Featured Learning Experience</h2>
              <p>
                Discover our most popular and highly-rated content, carefully
                curated by expert instructors and loved by thousands of learners
                worldwide.
              </p>
              <ul className="featured-highlights">
                <li>🎥 HD video tutorials with crystal clear explanations</li>
                <li>💻 Interactive code examples you can run and modify</li>
                <li>🧩 Gamified quizzes with instant feedback</li>
                <li>🏆 Certificates upon successful completion</li>
                <li>📱 Access across all devices - learn anywhere, anytime</li>
              </ul>
              <button className="featured-btn">
                Explore Featured Content
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <div className="featured-visual">
              <div className="visual-placeholder">
                <div className="floating-icons">
                  <div className="float-icon">🎓</div>
                  <div className="float-icon">💡</div>
                  <div className="float-icon">🚀</div>
                  <div className="float-icon">⭐</div>
                </div>
                <h3>Interactive Learning Hub</h3>
                <p>Experience next-level education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Modal */}
      {showModal && selectedContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="content-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>

            <div className="modal-header">
              <div className="modal-thumbnail">
                <div className="modal-icon">{selectedContent.thumbnail}</div>
                {selectedContent.isPremium && (
                  <div className="premium-badge">✨ Premium</div>
                )}
                {selectedContent.isLive && (
                  <div className="live-badge">🔴 Live</div>
                )}
              </div>
              <div className="modal-info">
                <h2>{selectedContent.title}</h2>
                <div className="modal-meta">
                  <span className="content-type">{selectedContent.type}</span>
                  <span
                    className="difficulty-badge"
                    style={{
                      backgroundColor: getDifficultyColor(
                        selectedContent.difficulty
                      ),
                    }}
                  >
                    {selectedContent.difficulty}
                  </span>
                  <span className="duration">{selectedContent.duration}</span>
                  <span className="rating">⭐ {selectedContent.rating}</span>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-description">
                <h3>About this content</h3>
                <p>{selectedContent.description}</p>
              </div>

              <div className="modal-instructor">
                <div className="instructor-avatar">
                  {selectedContent.instructorAvatar}
                </div>
                <div className="instructor-details">
                  <h4>{selectedContent.instructor}</h4>
                  <p>{selectedContent.level}</p>
                </div>
              </div>

              <div className="modal-topics">
                <h3>What you'll learn</h3>
                <div className="topics-grid">
                  {selectedContent.topics.map((topic, idx) => (
                    <div key={idx} className="topic-item">
                      <i className="fas fa-check"></i>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-details">
                <div className="detail-grid">
                  <div className="detail-card">
                    <i className="fas fa-users"></i>
                    <div>
                      <strong>{formatNumber(selectedContent.students)}</strong>
                      <span>Students</span>
                    </div>
                  </div>
                  <div className="detail-card">
                    <i className="fas fa-eye"></i>
                    <div>
                      <strong>{formatNumber(selectedContent.views)}</strong>
                      <span>Views</span>
                    </div>
                  </div>
                  <div className="detail-card">
                    <i className="fas fa-chart-line"></i>
                    <div>
                      <strong>{selectedContent.completionRate}%</strong>
                      <span>Success Rate</span>
                    </div>
                  </div>
                  <div className="detail-card">
                    <i className="fas fa-globe"></i>
                    <div>
                      <strong>{selectedContent.language}</strong>
                      <span>Language</span>
                    </div>
                  </div>
                </div>
              </div>

              {selectedContent.isLive && selectedContent.nextSession && (
                <div className="live-session-info">
                  <h3>🔴 Next Live Session</h3>
                  <p>
                    {new Date(selectedContent.nextSession).toLocaleString()}
                  </p>
                  <p>
                    Join thousands of learners in our interactive live coding
                    session!
                  </p>
                </div>
              )}
            </div>

            <div className="modal-actions">
              <button className="action-btn primary large">
                <i className="fas fa-play"></i>
                {selectedContent.isLive
                  ? "Join Live Session"
                  : "Start Learning Now"}
              </button>
              <button
                className={`action-btn secondary ${
                  bookmarkedItems.has(selectedContent.id) ? "bookmarked" : ""
                }`}
                onClick={() => handleBookmark(selectedContent.id)}
              >
                <i className="fas fa-bookmark"></i>
                {bookmarkedItems.has(selectedContent.id)
                  ? "Saved"
                  : "Save for Later"}
              </button>
              <button className="action-btn icon">
                <i className="fas fa-share"></i>
                Share
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kzone;
