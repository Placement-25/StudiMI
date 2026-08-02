import React, { useState } from "react";
import "./Projects.css";
import {
  FiCode,
  FiSearch,
  FiStar,
  FiExternalLink,
  FiGithub,
  FiCheck,
  FiInfo,
  FiX,
  FiSliders,
  FiChevronDown,
  FiChevronUp,
  FiRotateCcw,
} from "react-icons/fi";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectCategories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ai", name: "AI & Machine Learning" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "cloud", name: "Cloud & DevOps" },
    { id: "blockchain", name: "Blockchain & Web3" },
  ];

  const projectsList = [
    {
      id: 1,
      title: "AI Academic Resource Summarizer",
      category: "ai",
      description: "Natural language processing model that generates concise executive summaries from lengthy engineering PDF research papers.",
      techStack: ["Python", "PyTorch", "FastAPI", "React", "TailwindCSS"],
      stars: 142,
      level: "Major Project",
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      features: ["PDF Text Extraction", "Abstractive Summarization", "REST API Integration", "Responsive Dashboard"],
    },
    {
      id: 2,
      title: "Real-time Collaborative Code Editor",
      category: "web",
      description: "Web-based multi-user IDE with syntax highlighting, live cursor tracking, and instant code execution in sandboxed Docker containers.",
      techStack: ["Node.js", "Socket.io", "React", "Docker", "Monaco Editor"],
      stars: 289,
      level: "Major Project",
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      features: ["WebSocket Communication", "Docker Sandbox Security", "Multi-language Syntax Highlight", "Live Room Sharing"],
    },
    {
      id: 3,
      title: "Campus Smart Placement Portal",
      category: "web",
      description: "Enterprise placement management dashboard for student resume verification, company scheduling, and automated interview alerts.",
      techStack: ["React", "Express.js", "MongoDB", "Bootstrap 5", "JWT"],
      stars: 95,
      level: "Mini Project",
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      features: ["Role-Based Access Control", "Resume PDF Parser", "Interview Scheduling", "Analytics Dashboard"],
    },
    {
      id: 4,
      title: "Smart Attendance Tracker Mobile App",
      category: "mobile",
      description: "Cross-platform mobile application utilizing Bluetooth Low Energy beacons and geofencing for automated classroom attendance.",
      techStack: ["React Native", "Firebase", "BLE Beacon", "TypeScript"],
      stars: 178,
      level: "Major Project",
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      features: ["BLE Proximity Detection", "Real-time Firestore Sync", "Student Attendance Report Export", "Push Notifications"],
    },
    {
      id: 5,
      title: "Kubernetes Cluster Health Monitor",
      category: "cloud",
      description: "DevOps observability tool monitoring pod CPU/memory utilization, traffic spikes, and automated alert dispatching to Slack.",
      techStack: ["Go", "Kubernetes", "Prometheus", "Grafana", "Docker"],
      stars: 310,
      level: "Major Project",
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      features: ["Prometheus Metrics Scraper", "Custom Grafana Dashboard", "Slack Webhook Notifications", "Low Footprint Go Binary"],
    },
    {
      id: 6,
      title: "Decentralized Credential Verification System",
      category: "blockchain",
      description: "Web3 application issuing tamper-proof academic degree certificates on the Ethereum blockchain for instant employer verification.",
      techStack: ["Solidity", "Ethers.js", "Next.js", "IPFS", "Hardhat"],
      stars: 215,
      level: "Major Project",
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      features: ["Smart Contract Minting", "IPFS Metadata Storage", "QR Code Verification", "MetaMask Wallet Auth"],
    },
  ];

  const filteredProjects = projectsList.filter((proj) => {
    const matchesCat = activeCategory === "all" || proj.category === activeCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.techStack.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const activeFiltersCount = activeCategory !== "all" ? 1 : 0;

  return (
    <div className="projects-container py-4 position-relative pb-5">
      {/* Header Section */}
      <section className="py-4 mb-4 bg-body-tertiary border-bottom">
        <div className="container">
          <h1 className="display-6 fw-bold mb-2 text-body d-flex align-items-center gap-3">
            <div className="p-2 bg-warning-subtle text-warning-emphasis rounded-3 d-inline-flex">
              <FiCode size={26} />
            </div>
            <span>Engineering Projects Hub</span>
          </h1>
          <p className="lead text-muted m-0 fs-6" style={{ maxWidth: "720px" }}>
            Explore verified mini and major project repositories, full stack source code, architectural blueprints, and live demonstration links.
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
                    placeholder="Search by project title, tech stack (e.g. React, Python, Docker)..."
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
                    <span className="badge bg-warning text-dark rounded-pill ms-1 px-2">
                      {activeFiltersCount}
                    </span>
                  )}
                  {showFilters ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                </button>

                {activeFiltersCount > 0 && (
                  <button
                    className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1"
                    onClick={() => setActiveCategory("all")}
                    title="Reset Filters"
                  >
                    <FiRotateCcw size={14} />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            {/* Collapsible Panel for Project Categories */}
            {showFilters && (
              <div className="collapsible-filter-panel mt-3 pt-3 border-top">
                <label className="fw-semibold small text-muted d-block mb-2">Project Domain:</label>
                <div className="d-flex flex-wrap gap-2">
                  {projectCategories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`btn btn-sm rounded-3 px-3 py-2 border transition-all ${
                        activeCategory === cat.id ? "btn-warning text-dark shadow-sm" : "btn-outline-secondary"
                      }`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects Cards Grid */}
      <section className="py-2">
        <div className="container">
          <div className="row g-4">
            {filteredProjects.map((proj) => (
              <div key={proj.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border shadow-sm rounded-4 p-3 hover-lift bg-body-tertiary d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-warning-subtle text-warning-emphasis rounded-pill px-3 py-1 small fw-semibold">
                      {proj.level}
                    </span>
                    <span className="fw-semibold text-muted small d-flex align-items-center gap-1">
                      <FiStar size={14} className="text-warning fill-warning" /> {proj.stars}
                    </span>
                  </div>

                  <div className="card-body p-0 py-2 flex-grow-1">
                    <h5 className="card-title fw-bold m-0 mb-2">{proj.title}</h5>
                    <p className="card-text text-muted small line-clamp-3 mb-3">
                      {proj.description}
                    </p>

                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {proj.techStack.map((tech, idx) => (
                        <span key={idx} className="badge bg-body border text-body-tertiary small fw-normal">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="card-footer bg-transparent border-0 p-0 pt-3 d-flex gap-2">
                    <button
                      className="btn btn-outline-secondary btn-sm flex-grow-1 rounded-3 d-flex align-items-center justify-content-center gap-2"
                      onClick={() => setSelectedProject(proj)}
                    >
                      <FiInfo size={15} /> <span>View Details</span>
                    </button>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark btn-sm rounded-3 d-flex align-items-center justify-content-center"
                      title="GitHub Repository"
                    >
                      <FiGithub size={15} />
                    </a>
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm rounded-3 d-flex align-items-center justify-content-center"
                      title="Live Demo"
                    >
                      <FiExternalLink size={15} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-5 my-4 bg-body-tertiary rounded-4 border">
              <FiCode size={40} className="text-muted mb-3" />
              <h4>No Projects Found</h4>
              <p className="text-muted">Try adjusting your search terms or project domain filters.</p>
              <button
                className="btn btn-outline-warning text-dark rounded-3 px-4"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4 border shadow-lg">
              <div className="modal-header border-bottom">
                <div>
                  <h5 className="modal-title fw-bold">{selectedProject.title}</h5>
                  <span className="badge bg-warning-subtle text-warning-emphasis small">
                    {selectedProject.level}
                  </span>
                </div>
                <button
                  type="button"
                  className="btn-close shadow-none"
                  onClick={() => setSelectedProject(null)}
                ></button>
              </div>
              <div className="modal-body p-4">
                <p className="text-body mb-4">{selectedProject.description}</p>

                <h6 className="fw-bold mb-2">Technologies Used:</h6>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="badge bg-body border text-body-secondary px-3 py-2">
                      {tech}
                    </span>
                  ))}
                </div>

                <h6 className="fw-bold mb-3">Key Features & Architecture:</h6>
                <div className="row g-2 mb-4">
                  {selectedProject.features.map((feat, i) => (
                    <div key={i} className="col-md-6">
                      <div className="p-3 bg-body border rounded-3 d-flex align-items-center gap-2">
                        <FiCheck size={16} className="text-warning" />
                        <span className="small text-body fw-medium">{feat}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer border-top d-flex justify-content-between">
                <button
                  className="btn btn-outline-secondary rounded-3 px-4"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
                <div className="d-flex gap-2">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark rounded-3 px-3 d-flex align-items-center gap-2"
                  >
                    <FiGithub size={16} /> <span>GitHub Repo</span>
                  </a>
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary rounded-3 px-3 d-flex align-items-center gap-2"
                  >
                    <FiExternalLink size={16} /> <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
