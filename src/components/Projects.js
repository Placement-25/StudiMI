import React, { useState, useMemo } from "react";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const projectCategories = [
    { id: "all", name: "All Projects", icon: "🎯" },
    { id: "web", name: "Web Development", icon: "🌐" },
    { id: "mobile", name: "Mobile Apps", icon: "📱" },
    { id: "ai", name: "AI & Machine Learning", icon: "🤖" },
    { id: "iot", name: "IoT & Embedded", icon: "🔌" },
    { id: "blockchain", name: "Blockchain & Web3", icon: "🔗" },
  ];

  const initialProjects = useMemo(
    () => [
      {
        id: 1,
        title: "E-Learning Management System",
        description:
          "A full-stack online learning platform featuring video streaming, student progress analytics, interactive quizzes, and certificate generation.",
        category: "web",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
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
        githubUrl: "https://github.com/example/e-learning-app",
        liveUrl: "https://elearning-demo.vercel.app",
      },
      {
        id: 2,
        title: "Smart Home Automation System",
        description:
          "IoT-based home automation with mobile application control, voice integration (Alexa/Google Assistant), and energy consumption tracking.",
        category: "iot",
        technologies: ["Arduino", "ESP8266", "React Native", "Firebase"],
        difficulty: "Intermediate",
        duration: "4-6 weeks",
        rating: 4.6,
        students: 189,
        image: "🏠",
        features: [
          "Voice Control",
          "Mobile App Integration",
          "Real-time Power Analytics",
          "Automated Sensor Triggers",
        ],
        githubUrl: "https://github.com/example/smart-home-iot",
        liveUrl: "https://smarthome-demo.vercel.app",
      },
      {
        id: 3,
        title: "AI Customer Support Chatbot",
        description:
          "Conversational AI bot utilizing NLP models, sentiment classification, and context awareness to automate customer service workflows.",
        category: "ai",
        technologies: ["Python", "TensorFlow", "Flask", "OpenAI API"],
        difficulty: "Advanced",
        duration: "5-7 weeks",
        rating: 4.9,
        students: 312,
        image: "🤖",
        features: [
          "NLP Entity Recognition",
          "Sentiment Classification",
          "Multi-language Translation",
          "Admin Analytics Dashboard",
        ],
        githubUrl: "https://github.com/example/ai-chatbot",
        liveUrl: "https://aichatbot-demo.vercel.app",
      },
      {
        id: 4,
        title: "DeFi Crypto Portfolio Tracker",
        description:
          "Real-time cryptocurrency and NFT wallet tracker with price alerts, profit/loss charts, and gas fee optimization tools.",
        category: "blockchain",
        technologies: ["React", "Web3.js", "Ethers.js", "TailwindCSS"],
        difficulty: "Intermediate",
        duration: "3-5 weeks",
        rating: 4.7,
        students: 167,
        image: "💰",
        features: [
          "Real-time Price Feeds",
          "Wallet Balance Syncing",
          "Profit/Loss Charts",
          "Custom Price Alerts",
        ],
        githubUrl: "https://github.com/example/crypto-tracker",
        liveUrl: "https://cryptotracker-demo.vercel.app",
      },
      {
        id: 5,
        title: "Cross-Platform Fitness & Nutrition App",
        description:
          "Mobile fitness app enabling step tracking, workout routines, calorie calculation, and social leaderboard challenges.",
        category: "mobile",
        technologies: ["Flutter", "Dart", "Firebase", "Google Fit API"],
        difficulty: "Intermediate",
        duration: "4-6 weeks",
        rating: 4.8,
        students: 204,
        image: "🏋️",
        features: [
          "Pedometer Step Tracker",
          "Diet Macro Calculator",
          "Social Leaderboards",
          "Offline Sync Support",
        ],
        githubUrl: "https://github.com/example/fitness-app",
        liveUrl: "https://fitness-demo.vercel.app",
      },
      {
        id: 6,
        title: "AI-Based Disease Prediction System",
        description:
          "Healthcare ML application analyzing patient symptoms and medical images to predict health risks with high accuracy.",
        category: "ai",
        technologies: ["Python", "Scikit-Learn", "FastAPI", "React"],
        difficulty: "Advanced",
        duration: "6-8 weeks",
        rating: 4.9,
        students: 290,
        image: "🩺",
        features: [
          "Medical Image Classification",
          "Risk Score Generation",
          "Doctor Appointment Booking",
          "HIPAA Compliant Data Flow",
        ],
        githubUrl: "https://github.com/example/health-ai-predictor",
        liveUrl: "https://healthai-demo.vercel.app",
      },
    ],
    []
  );

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((p) => {
      const matchesCategory = activeFilter === "all" || p.category === activeFilter;
      const matchesSearch =
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchTerm, initialProjects]);

  return (
    <div className="projects-container py-4 position-relative">
      {toastMessage && (
        <div className="position-fixed bottom-0 end-0 m-4 px-4 py-3 bg-warning text-dark fw-bold rounded-3 shadow-lg z-3">
          ✨ {toastMessage}
        </div>
      )}

      {/* Hero Section */}
      <section className="projects-hero text-center py-5 rounded-4 mb-4 bg-body-tertiary">
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">
            🚀 Capstone & <span className="text-warning">Mini Projects</span> Repository
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "720px" }}>
            Explore industry-standard project ideas complete with architecture diagrams, step-by-step implementation guides, and GitHub source code.
          </p>
        </div>
      </section>

      {/* Search & Category Filters */}
      <section className="mb-4">
        <div className="container">
          <div className="row g-3 align-items-center mb-4">
            <div className="col-lg-8">
              <div className="input-group input-group-lg shadow-sm rounded-4 overflow-hidden">
                <span className="input-group-text bg-body border-end-0">🔍</span>
                <input
                  type="text"
                  placeholder="Search projects by title, stack (React, Python, Node), or domain..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control border-start-0 bg-body shadow-none"
                />
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <span className="badge bg-warning-subtle text-warning-emphasis px-3 py-2 fs-6 rounded-pill">
                {filteredProjects.length} Projects Available
              </span>
            </div>
          </div>

          <div className="d-flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                className={`btn btn-sm rounded-pill px-3 py-2 border transition-all ${
                  activeFilter === cat.id ? "btn-warning text-dark fw-bold shadow" : "btn-outline-secondary"
                }`}
                onClick={() => setActiveFilter(cat.id)}
              >
                <span className="me-1">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-4">
        <div className="container">
          <div className="row g-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 hover-lift bg-body-tertiary d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="fs-1">{project.image}</span>
                    <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
                      ⭐ {project.rating} ({project.students} saved)
                    </span>
                  </div>

                  <h4 className="card-title fw-bold mb-2">{project.title}</h4>
                  <p className="card-text text-muted small mb-3 flex-grow-1 line-clamp-3">{project.description}</p>

                  <div className="mb-3">
                    <span className="fw-semibold small text-secondary d-block mb-1">Tech Stack:</span>
                    <div className="d-flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="badge bg-body border text-body-secondary small fw-normal">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center text-muted small pt-3 border-top mb-3">
                    <span>⏱️ {project.duration}</span>
                    <span className="badge bg-secondary-subtle text-secondary">{project.difficulty}</span>
                  </div>

                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-warning text-dark btn-sm flex-grow-1 rounded-3 fw-bold"
                      onClick={() => setSelectedProject(project)}
                    >
                      📖 View Details
                    </button>
                    <button
                      className="btn btn-outline-dark btn-sm rounded-3"
                      onClick={() => showToast(`Opening source code for ${project.title}...`)}
                    >
                      💻 Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-5 bg-body-tertiary rounded-4">
              <div className="fs-1 mb-3">🚀</div>
              <h4>No Projects Match Criteria</h4>
              <p className="text-muted">Try resetting search parameters or selecting another tech category.</p>
              <button
                className="btn btn-outline-warning text-dark rounded-pill px-4"
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("all");
                }}
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4 shadow-lg border-0">
              <div className="modal-header border-bottom">
                <h5 className="modal-title fw-bold">
                  {selectedProject.image} {selectedProject.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedProject(null)}
                ></button>
              </div>
              <div className="modal-body p-4">
                <p className="lead">{selectedProject.description}</p>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <p className="m-0 text-muted small">Estimated Duration</p>
                    <p className="fw-semibold">{selectedProject.duration}</p>
                  </div>
                  <div className="col-md-6">
                    <p className="m-0 text-muted small">Difficulty Level</p>
                    <p className="fw-semibold">{selectedProject.difficulty}</p>
                  </div>
                </div>

                <h6 className="fw-bold mb-2">Key Features Included</h6>
                <ul className="list-group list-group-flush mb-4">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="list-group-item bg-transparent">
                      ✅ {feat}
                    </li>
                  ))}
                </ul>

                <h6 className="fw-bold mb-2">Technologies Used</h6>
                <div className="d-flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="badge bg-body-secondary text-body px-3 py-2 rounded-pill fs-6">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="modal-footer border-top">
                <button
                  className="btn btn-secondary rounded-3"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
                <button
                  className="btn btn-warning text-dark rounded-3 fw-bold"
                  onClick={() => {
                    showToast(`Downloading Complete Zip Bundle & Docs for ${selectedProject.title}...`);
                    setSelectedProject(null);
                  }}
                >
                  Download Source Code & Documentation 📦
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
