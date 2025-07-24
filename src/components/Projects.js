import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const projectCategories = [
    { id: "all", name: "All Projects", icon: "🎯" },
    { id: "web", name: "Web Development", icon: "🌐" },
    { id: "mobile", name: "Mobile Apps", icon: "📱" },
    { id: "ai", name: "AI/ML", icon: "🤖" },
    { id: "iot", name: "IoT", icon: "🔌" },
    { id: "blockchain", name: "Blockchain", icon: "🔗" },
    { id: "game", name: "Game Development", icon: "🎮" },
  ];

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "E-Learning Management System",
        description:
          "A comprehensive platform for online education with interactive features, progress tracking, and real-time collaboration tools.",
        category: "web",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
        difficulty: "Advanced",
        duration: "6-8 weeks",
        rating: 4.8,
        students: 245,
        image: "🎓",
        features: [
          "Video Streaming",
          "Real-time Chat",
          "Progress Analytics",
          "Certificate Generation",
        ],
        githubUrl: "#",
        liveUrl: "#",
      },
      {
        id: 2,
        title: "Smart Home Automation",
        description:
          "IoT-based home automation system with mobile app control, voice commands, and energy monitoring capabilities.",
        category: "iot",
        technologies: ["Arduino", "React Native", "Firebase", "Alexa SDK"],
        difficulty: "Intermediate",
        duration: "4-6 weeks",
        rating: 4.6,
        students: 189,
        image: "🏠",
        features: [
          "Voice Control",
          "Mobile App",
          "Energy Monitoring",
          "Security System",
        ],
        githubUrl: "#",
        liveUrl: "#",
      },
      {
        id: 3,
        title: "AI-Powered Chatbot",
        description:
          "Intelligent conversational AI with natural language processing, sentiment analysis, and multi-language support.",
        category: "ai",
        technologies: ["Python", "TensorFlow", "Flask", "NLTK"],
        difficulty: "Advanced",
        duration: "5-7 weeks",
        rating: 4.9,
        students: 312,
        image: "🤖",
        features: [
          "NLP Processing",
          "Sentiment Analysis",
          "Multi-language",
          "Context Awareness",
        ],
        githubUrl: "#",
        liveUrl: "#",
      },
      {
        id: 4,
        title: "Cryptocurrency Tracker",
        description:
          "Real-time crypto portfolio tracker with price alerts, market analysis, and trading insights powered by blockchain data.",
        category: "blockchain",
        technologies: ["React", "Web3.js", "Chart.js", "CoinGecko API"],
        difficulty: "Intermediate",
        duration: "3-5 weeks",
        rating: 4.7,
        students: 167,
        image: "💰",
        features: [
          "Real-time Prices",
          "Portfolio Tracking",
          "Price Alerts",
          "Market Analysis",
        ],
        githubUrl: "#",
        liveUrl: "#",
      },
      {
        id: 5,
        title: "Fitness Tracking Mobile App",
        description:
          "Cross-platform fitness app with workout plans, progress tracking, social features, and health integration.",
        category: "mobile",
        technologies: ["React Native", "Redux", "Health Kit", "Firebase"],
        difficulty: "Intermediate",
        duration: "4-6 weeks",
        rating: 4.5,
        students: 198,
        image: "💪",
        features: [
          "Workout Plans",
          "Progress Tracking",
          "Social Features",
          "Health Integration",
        ],
        githubUrl: "#",
        liveUrl: "#",
      },
      {
        id: 6,
        title: "2D Platformer Game",
        description:
          "Engaging 2D platformer game with physics engine, multiple levels, power-ups, and leaderboard system.",
        category: "game",
        technologies: ["Unity", "C#", "Photon", "Google Play Services"],
        difficulty: "Advanced",
        duration: "8-10 weeks",
        rating: 4.8,
        students: 134,
        image: "🎮",
        features: [
          "Physics Engine",
          "Multiple Levels",
          "Power-ups",
          "Leaderboards",
        ],
        githubUrl: "#",
        liveUrl: "#",
      },
    ],
    []
  );

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const filtered = projects.filter((project) => {
        const matchesFilter =
          activeFilter === "all" || project.category === activeFilter;
        const matchesSearch =
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          );
        return matchesFilter && matchesSearch;
      });
      setFilteredProjects(filtered);
      setIsLoading(false);
    }, 500);
  }, [activeFilter, searchTerm, projects]);

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

  return (
    <div className="projects-container">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="float-element">💻</div>
            <div className="float-element">🚀</div>
            <div className="float-element">⚡</div>
            <div className="float-element">🎯</div>
            <div className="float-element">💡</div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Amazing <span className="gradient-text">Projects</span> Await
            </h1>
            <p className="hero-description">
              Discover cutting-edge projects, build your portfolio, and master
              the latest technologies with our comprehensive collection of
              hands-on projects.
            </p>
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-info">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-info">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Students</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-info">
                  <span className="stat-number">4.8/5</span>
                  <span className="stat-label">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="search-filter-wrapper">
            <div className="search-box">
              <div className="search-icon">🔍</div>
              <input
                type="text"
                placeholder="Search projects, technologies, or categories..."
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

            <div className="filter-categories">
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${
                    activeFilter === category.id ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  <span className="filter-icon">{category.icon}</span>
                  <span className="filter-name">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading amazing projects...</p>
            </div>
          ) : (
            <>
              <div className="projects-header">
                <h2>
                  {activeFilter === "all"
                    ? "All Projects"
                    : projectCategories.find((cat) => cat.id === activeFilter)
                        ?.name}
                </h2>
                <p className="projects-count">
                  {filteredProjects.length} project
                  {filteredProjects.length !== 1 ? "s" : ""} found
                </p>
              </div>

              <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="project-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="project-header">
                      <div className="project-image">
                        <div className="project-emoji">{project.image}</div>
                        <div className="project-overlay">
                          <div className="overlay-buttons">
                            <a
                              href={project.githubUrl}
                              className="overlay-btn github-btn"
                            >
                              <i className="fab fa-github"></i>
                            </a>
                            <a
                              href={project.liveUrl}
                              className="overlay-btn live-btn"
                            >
                              <i className="fas fa-external-link-alt"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="project-meta">
                        <span
                          className="difficulty-badge"
                          style={{
                            backgroundColor: getDifficultyColor(
                              project.difficulty
                            ),
                          }}
                        >
                          {project.difficulty}
                        </span>
                        <div className="project-rating">
                          <span className="rating-stars">⭐</span>
                          <span className="rating-value">{project.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">
                        {project.description}
                      </p>

                      <div className="project-features">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="feature-tag">
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 3 && (
                          <span className="feature-more">
                            +{project.features.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="project-tech">
                        <div className="tech-stack">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="project-stats">
                        <div className="stat">
                          <i className="fas fa-clock"></i>
                          <span>{project.duration}</span>
                        </div>
                        <div className="stat">
                          <i className="fas fa-users"></i>
                          <span>{project.students} students</span>
                        </div>
                      </div>
                    </div>

                    <div className="project-footer">
                      <Link
                        to={`/projects/${project.id}`}
                        className="project-btn primary-btn"
                      >
                        Start Project
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                      <button className="project-btn secondary-btn">
                        <i className="fas fa-bookmark"></i>
                        Save
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="no-results">
                  <div className="no-results-icon">🔍</div>
                  <h3>No projects found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                  <button
                    className="reset-btn"
                    onClick={() => {
                      setSearchTerm("");
                      setActiveFilter("all");
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

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Something Amazing?</h2>
            <p>
              Join thousands of students who have already started their journey
            </p>
            <div className="cta-buttons">
              <Link to="/signup" className="cta-btn primary">
                Get Started Now
                <i className="fas fa-rocket"></i>
              </Link>
              <Link to="/contact" className="cta-btn secondary">
                Contact Us
                <i className="fas fa-envelope"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
