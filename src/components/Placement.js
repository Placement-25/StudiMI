import React, { useState, useEffect, useMemo } from "react";
import "./Placement.css";

const Placement = () => {
  const [activeTab, setActiveTab] = useState("opportunities");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [selectedRole, setSelectedRole] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const tabs = [
    { id: "opportunities", name: "Job Opportunities", icon: "💼" },
    { id: "companies", name: "Companies", icon: "🏢" },
    { id: "preparation", name: "Preparation", icon: "📚" },
    { id: "interviews", name: "Interview Tips", icon: "🎯" },
    { id: "success", name: "Success Stories", icon: "🏆" },
  ];

  const companies = useMemo(
    () => [
      { id: "all", name: "All Companies", logo: "🌟" },
      { id: "google", name: "Google", logo: "🔍", tier: "tier1" },
      { id: "microsoft", name: "Microsoft", logo: "💻", tier: "tier1" },
      { id: "amazon", name: "Amazon", logo: "📦", tier: "tier1" },
      { id: "apple", name: "Apple", logo: "🍎", tier: "tier1" },
      { id: "meta", name: "Meta", logo: "📘", tier: "tier1" },
      { id: "netflix", name: "Netflix", logo: "🎬", tier: "tier1" },
      { id: "tesla", name: "Tesla", logo: "⚡", tier: "tier2" },
      { id: "uber", name: "Uber", logo: "🚗", tier: "tier2" },
    ],
    []
  );

  const roles = useMemo(
    () => [
      { id: "all", name: "All Roles" },
      { id: "sde", name: "Software Engineer" },
      { id: "frontend", name: "Frontend Developer" },
      { id: "backend", name: "Backend Developer" },
      { id: "fullstack", name: "Full Stack Developer" },
      { id: "mobile", name: "Mobile Developer" },
      { id: "data", name: "Data Scientist" },
      { id: "ml", name: "ML Engineer" },
      { id: "devops", name: "DevOps Engineer" },
    ],
    []
  );

  const jobOpportunities = useMemo(
    () => [
      {
        id: 1,
        title: "Software Development Engineer",
        company: "google",
        location: "Bangalore, India",
        type: "Full-time",
        experience: "0-2 years",
        salary: "₹25-35 LPA",
        skills: ["Java", "Python", "System Design", "DSA"],
        description:
          "Join Google's engineering team to build products that impact billions of users worldwide.",
        requirements: [
          "Bachelor's in CS/IT",
          "Strong DSA skills",
          "System design knowledge",
        ],
        benefits: [
          "Health Insurance",
          "Stock Options",
          "Flexible WFH",
          "Learning Budget",
        ],
        postedDate: "2024-01-15",
        deadline: "2024-02-15",
        applicants: 1250,
        status: "open",
        difficulty: "High",
        rating: 4.9,
        interviewProcess: [
          "Online Test",
          "Technical Round",
          "System Design",
          "HR Round",
        ],
      },
      {
        id: 2,
        title: "Frontend Developer",
        company: "microsoft",
        location: "Hyderabad, India",
        type: "Full-time",
        experience: "1-3 years",
        salary: "₹22-30 LPA",
        skills: ["React", "TypeScript", "Azure", "JavaScript"],
        description:
          "Build amazing user experiences for Microsoft's cloud and productivity products.",
        requirements: [
          "Strong React skills",
          "TypeScript experience",
          "Cloud knowledge",
        ],
        benefits: [
          "Health Coverage",
          "Stock Purchase Plan",
          "Remote Work",
          "Training Programs",
        ],
        postedDate: "2024-01-20",
        deadline: "2024-02-20",
        applicants: 890,
        status: "open",
        difficulty: "Medium",
        rating: 4.8,
        interviewProcess: [
          "Resume Review",
          "Technical Interview",
          "Live Coding",
          "Final Round",
        ],
      },
      {
        id: 3,
        title: "Data Scientist",
        company: "amazon",
        location: "Chennai, India",
        type: "Full-time",
        experience: "2-4 years",
        salary: "₹28-40 LPA",
        skills: ["Python", "Machine Learning", "AWS", "SQL"],
        description:
          "Use data science to solve complex business problems at Amazon scale.",
        requirements: [
          "ML expertise",
          "Python proficiency",
          "Statistical knowledge",
        ],
        benefits: [
          "Comprehensive Insurance",
          "Stock Units",
          "Career Growth",
          "Innovation Time",
        ],
        postedDate: "2024-01-18",
        deadline: "2024-02-18",
        applicants: 756,
        status: "open",
        difficulty: "High",
        rating: 4.7,
        interviewProcess: [
          "Phone Screen",
          "Technical Deep Dive",
          "Case Study",
          "Bar Raiser",
        ],
      },
      {
        id: 4,
        title: "iOS Developer",
        company: "apple",
        location: "Mumbai, India",
        type: "Full-time",
        experience: "1-3 years",
        salary: "₹30-45 LPA",
        skills: ["Swift", "iOS SDK", "Xcode", "UI/UX"],
        description:
          "Create innovative iOS applications that delight millions of Apple users.",
        requirements: [
          "iOS development experience",
          "Swift proficiency",
          "App Store knowledge",
        ],
        benefits: [
          "Premium Healthcare",
          "Stock Options",
          "Product Discounts",
          "Wellness Programs",
        ],
        postedDate: "2024-01-22",
        deadline: "2024-02-22",
        applicants: 432,
        status: "open",
        difficulty: "High",
        rating: 4.9,
        interviewProcess: [
          "Portfolio Review",
          "Technical Challenge",
          "Design Review",
          "Culture Fit",
        ],
      },
      {
        id: 5,
        title: "Full Stack Developer",
        company: "meta",
        location: "Gurgaon, India",
        type: "Full-time",
        experience: "2-5 years",
        salary: "₹35-50 LPA",
        skills: ["React", "Node.js", "GraphQL", "React Native"],
        description:
          "Build the future of social technology at Meta (Facebook).",
        requirements: [
          "Full-stack experience",
          "React expertise",
          "Scalable system design",
        ],
        benefits: [
          "Health & Wellness",
          "Equity Compensation",
          "Remote Flexibility",
          "Learning Budget",
        ],
        postedDate: "2024-01-25",
        deadline: "2024-02-25",
        applicants: 623,
        status: "open",
        difficulty: "High",
        rating: 4.8,
        interviewProcess: [
          "Coding Assessment",
          "Technical Phone",
          "Onsite Rounds",
          "Peer Review",
        ],
      },
      {
        id: 6,
        title: "DevOps Engineer",
        company: "netflix",
        location: "Pune, India",
        type: "Full-time",
        experience: "3-5 years",
        salary: "₹32-45 LPA",
        skills: ["AWS", "Kubernetes", "Docker", "Python"],
        description:
          "Scale Netflix's global streaming platform to millions of users.",
        requirements: [
          "Cloud platforms",
          "Container orchestration",
          "Automation skills",
        ],
        benefits: [
          "Unlimited PTO",
          "Stock Options",
          "Top-tier Insurance",
          "Learning Stipend",
        ],
        postedDate: "2024-01-28",
        deadline: "2024-02-28",
        applicants: 345,
        status: "open",
        difficulty: "Medium",
        rating: 4.9,
        interviewProcess: [
          "Technical Screen",
          "System Design",
          "Behavioral",
          "Team Match",
        ],
      },
    ],
    []
  );

  const preparationResources = [
    {
      id: 1,
      title: "Data Structures & Algorithms Mastery",
      type: "Course",
      duration: "12 weeks",
      difficulty: "Advanced",
      rating: 4.9,
      students: 15420,
      description:
        "Complete DSA preparation covering all major topics with 500+ problems",
      topics: [
        "Arrays",
        "Linked Lists",
        "Trees",
        "Graphs",
        "Dynamic Programming",
      ],
    },
    {
      id: 2,
      title: "System Design Interview Prep",
      type: "Workshop",
      duration: "8 weeks",
      difficulty: "Expert",
      rating: 4.8,
      students: 8760,
      description:
        "Learn to design scalable systems like the ones used by tech giants",
      topics: [
        "Scalability",
        "Load Balancing",
        "Databases",
        "Caching",
        "Microservices",
      ],
    },
    {
      id: 3,
      title: "Mock Interview Sessions",
      type: "Practice",
      duration: "Ongoing",
      difficulty: "All Levels",
      rating: 4.7,
      students: 12300,
      description:
        "Practice with experienced interviewers from top tech companies",
      topics: [
        "Technical Questions",
        "Behavioral",
        "Problem Solving",
        "Communication",
      ],
    },
    {
      id: 4,
      title: "Resume Building Workshop",
      type: "Workshop",
      duration: "2 weeks",
      difficulty: "Beginner",
      rating: 4.6,
      students: 9850,
      description:
        "Create an ATS-friendly resume that gets you noticed by recruiters",
      topics: [
        "Resume Format",
        "Keywords",
        "Projects",
        "Skills",
        "ATS Optimization",
      ],
    },
  ];

  const successStories = [
    {
      id: 1,
      name: "Rahul Sharma",
      company: "Google",
      role: "SDE-2",
      package: "₹45 LPA",
      batch: "2023",
      image: "👨‍💻",
      story:
        "Started with basic programming knowledge and landed at Google through consistent practice and mentorship.",
      tips: [
        "Focus on DSA fundamentals",
        "Practice system design",
        "Build strong projects",
        "Never give up",
      ],
    },
    {
      id: 2,
      name: "Priya Patel",
      company: "Microsoft",
      role: "Frontend Engineer",
      package: "₹38 LPA",
      batch: "2023",
      image: "👩‍💻",
      story:
        "Specialized in frontend development and built impressive React projects that caught Microsoft's attention.",
      tips: [
        "Master React ecosystem",
        "Build real projects",
        "Contribute to open source",
        "Network actively",
      ],
    },
    {
      id: 3,
      name: "Arjun Kumar",
      company: "Amazon",
      role: "Data Scientist",
      package: "₹42 LPA",
      batch: "2022",
      image: "👨‍🔬",
      story:
        "Transitioned from mechanical engineering to data science through online courses and practical projects.",
      tips: [
        "Learn by doing projects",
        "Participate in competitions",
        "Stay updated with trends",
        "Practice storytelling",
      ],
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (activeTab === "opportunities") {
        const filtered = jobOpportunities.filter((job) => {
          const matchesCompany =
            selectedCompany === "all" || job.company === selectedCompany;
          const matchesRole =
            selectedRole === "all" ||
            job.title
              .toLowerCase()
              .includes(
                roles.find((r) => r.id === selectedRole)?.name.toLowerCase() ||
                  ""
              );
          const matchesSearch =
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.skills.some((skill) =>
              skill.toLowerCase().includes(searchTerm.toLowerCase())
            ) ||
            companies
              .find((c) => c.id === job.company)
              ?.name.toLowerCase()
              .includes(searchTerm.toLowerCase());
          return matchesCompany && matchesRole && matchesSearch;
        });
        setFilteredJobs(filtered);
      }
      setIsLoading(false);
    }, 500);
  }, [
    activeTab,
    selectedCompany,
    selectedRole,
    searchTerm,
    jobOpportunities,
    companies,
    roles,
  ]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Low":
      case "Beginner":
        return "#28a745";
      case "Medium":
      case "Intermediate":
        return "#ffc107";
      case "High":
      case "Advanced":
      case "Expert":
        return "#dc3545";
      default:
        return "#6c757d";
    }
  };

  const getCompanyInfo = (companyId) => {
    return companies.find((c) => c.id === companyId) || companies[0];
  };

  const openJobModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  return (
    <div className="placement-container">
      {/* Hero Section */}
      <section className="placement-hero">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="float-element">💼</div>
            <div className="float-element">🚀</div>
            <div className="float-element">🎯</div>
            <div className="float-element">🏆</div>
            <div className="float-element">💡</div>
            <div className="float-element">⭐</div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Launch Your <span className="gradient-text">Career</span>
            </h1>
            <p className="hero-description">
              Discover amazing job opportunities, prepare for interviews, and
              connect with top companies to kickstart your dream career in
              technology
            </p>
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-icon">💼</div>
                <div className="stat-info">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Job Openings</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🏢</div>
                <div className="stat-info">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Top Companies</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-info">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-wrapper">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-name">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="content-section">
        <div className="container">
          {/* Job Opportunities Tab */}
          {activeTab === "opportunities" && (
            <div className="opportunities-content">
              <div className="filters-section">
                <div className="search-box">
                  <div className="search-icon">🔍</div>
                  <input
                    type="text"
                    placeholder="Search jobs, companies, or skills..."
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

                <div className="filter-controls">
                  <div className="filter-group">
                    <label className="filter-label">Company</label>
                    <div className="company-filters">
                      {companies.slice(0, 6).map((company) => (
                        <button
                          key={company.id}
                          className={`company-btn ${
                            selectedCompany === company.id ? "active" : ""
                          }`}
                          onClick={() => setSelectedCompany(company.id)}
                        >
                          <span className="company-logo">{company.logo}</span>
                          <span className="company-name">{company.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="filter-group">
                    <label className="filter-label">Role</label>
                    <div className="role-filters">
                      {roles.slice(0, 6).map((role) => (
                        <button
                          key={role.id}
                          className={`role-btn ${
                            selectedRole === role.id ? "active" : ""
                          }`}
                          onClick={() => setSelectedRole(role.id)}
                        >
                          {role.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {isLoading ? (
                <div className="loading-container">
                  <div className="loading-spinner"></div>
                  <p>Loading job opportunities...</p>
                </div>
              ) : (
                <div className="jobs-grid">
                  {filteredJobs.map((job, index) => (
                    <div
                      key={job.id}
                      className="job-card"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => openJobModal(job)}
                    >
                      <div className="job-header">
                        <div className="job-company">
                          <span className="company-logo">
                            {getCompanyInfo(job.company).logo}
                          </span>
                          <div className="company-info">
                            <h3 className="job-title">{job.title}</h3>
                            <p className="company-name">
                              {getCompanyInfo(job.company).name}
                            </p>
                          </div>
                        </div>
                        <div className="job-meta">
                          <span className="job-type">{job.type}</span>
                          <span
                            className="difficulty-badge"
                            style={{
                              backgroundColor: getDifficultyColor(
                                job.difficulty
                              ),
                            }}
                          >
                            {job.difficulty}
                          </span>
                        </div>
                      </div>

                      <div className="job-details">
                        <div className="job-info">
                          <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>{job.location}</span>
                          </div>
                          <div className="info-item">
                            <i className="fas fa-clock"></i>
                            <span>{job.experience}</span>
                          </div>
                          <div className="info-item">
                            <i className="fas fa-money-bill"></i>
                            <span>{job.salary}</span>
                          </div>
                          <div className="info-item">
                            <i className="fas fa-users"></i>
                            <span>{job.applicants} applicants</span>
                          </div>
                        </div>

                        <p className="job-description">{job.description}</p>

                        <div className="job-skills">
                          {job.skills.map((skill, idx) => (
                            <span key={idx} className="skill-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="job-footer">
                        <div className="job-stats">
                          <span className="rating">⭐ {job.rating}</span>
                          <span className="deadline">
                            Deadline:{" "}
                            {new Date(job.deadline).toLocaleDateString()}
                          </span>
                        </div>
                        <button className="apply-btn">
                          Apply Now
                          <i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Other tabs content will be rendered here */}
          {activeTab === "preparation" && (
            <div className="preparation-content">
              <div className="section-header">
                <h2>Interview Preparation Resources</h2>
                <p>Master the skills needed to ace your technical interviews</p>
              </div>
              <div className="resources-grid">
                {preparationResources.map((resource, index) => (
                  <div
                    key={resource.id}
                    className="resource-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="resource-header">
                      <h3>{resource.title}</h3>
                      <span className="resource-type">{resource.type}</span>
                    </div>
                    <p className="resource-description">
                      {resource.description}
                    </p>
                    <div className="resource-meta">
                      <div className="meta-item">
                        <i className="fas fa-clock"></i>
                        <span>{resource.duration}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-star"></i>
                        <span>{resource.rating}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-users"></i>
                        <span>{resource.students.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="resource-topics">
                      {resource.topics.map((topic, idx) => (
                        <span key={idx} className="topic-tag">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <button className="resource-btn">Start Learning</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "success" && (
            <div className="success-content">
              <div className="section-header">
                <h2>Success Stories</h2>
                <p>Get inspired by our students who landed their dream jobs</p>
              </div>
              <div className="stories-grid">
                {successStories.map((story, index) => (
                  <div
                    key={story.id}
                    className="story-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="story-header">
                      <div className="student-avatar">{story.image}</div>
                      <div className="student-info">
                        <h3>{story.name}</h3>
                        <p>
                          {story.role} at {story.company}
                        </p>
                        <span className="package">{story.package}</span>
                      </div>
                    </div>
                    <p className="story-text">{story.story}</p>
                    <div className="story-tips">
                      <h4>Success Tips:</h4>
                      <ul>
                        {story.tips.map((tip, idx) => (
                          <li key={idx}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Job Detail Modal */}
      {showModal && selectedJob && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedJob.title}</h2>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="job-company-info">
                <span className="company-logo large">
                  {getCompanyInfo(selectedJob.company).logo}
                </span>
                <div>
                  <h3>{getCompanyInfo(selectedJob.company).name}</h3>
                  <p>
                    {selectedJob.location} • {selectedJob.type}
                  </p>
                </div>
              </div>
              <div className="job-salary">{selectedJob.salary}</div>

              <div className="modal-section">
                <h4>Job Description</h4>
                <p>{selectedJob.description}</p>
              </div>

              <div className="modal-section">
                <h4>Requirements</h4>
                <ul>
                  {selectedJob.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Interview Process</h4>
                <div className="interview-steps">
                  {selectedJob.interviewProcess.map((step, idx) => (
                    <div key={idx} className="interview-step">
                      <span className="step-number">{idx + 1}</span>
                      <span className="step-name">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <button className="apply-btn primary">Apply Now</button>
                <button className="apply-btn secondary">Save Job</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Placement;
