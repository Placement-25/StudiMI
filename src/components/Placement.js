import React, { useState, useEffect, useMemo } from "react";
import "./Placement.css";
import PdfViewerModal from "./PdfViewerModal";
import { FaBuilding } from "react-icons/fa6";
import {
  FiBriefcase,
  FiBookOpen,
  FiTarget,
  FiAward,
  FiSearch,
  FiMapPin,
  FiDollarSign,
  FiStar,
  FiCheck,
  FiFileText,
  FiDownload,
  FiUserCheck,
  FiArrowRight,
  FiClock,
  FiUsers,
  FiX,
  FiSliders,
  FiChevronDown,
  FiChevronUp,
  FiRotateCcw,
} from "react-icons/fi";

const Placement = () => {
  const [activeTab, setActiveTab] = useState("opportunities");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [selectedRole, setSelectedRole] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const tabs = [
    { id: "opportunities", name: "Job Opportunities", icon: <FiBriefcase size={16} /> },
    { id: "companies", name: "Companies", icon: <FaBuilding size={16} /> },
    { id: "preparation", name: "Preparation", icon: <FiBookOpen size={16} /> },
    { id: "interviews", name: "Interview Tips", icon: <FiTarget size={16} /> },
    { id: "success", name: "Success Stories", icon: <FiAward size={16} /> },
  ];

  const companies = useMemo(
    () => [
      { id: "all", name: "All Companies", tier: "All", description: "Filter across all technology hiring partners." },
      { id: "google", name: "Google", tier: "Tier 1", openRoles: 14, techStack: ["Java", "Python", "Go", "Distributed Systems"], description: "Global technology leader in search, cloud computing, and AI research." },
      { id: "microsoft", name: "Microsoft", tier: "Tier 1", openRoles: 18, techStack: ["C#", "Azure", "React", "TypeScript"], description: "Pioneer in cloud infrastructure, operating systems, and enterprise software." },
      { id: "amazon", name: "Amazon", tier: "Tier 1", openRoles: 25, techStack: ["Java", "AWS", "DynamoDB", "Microservices"], description: "World's largest e-commerce platform and cloud service provider." },
      { id: "apple", name: "Apple", tier: "Tier 1", openRoles: 9, techStack: ["Swift", "Objective-C", "iOS", "C++"], description: "Consumer electronics, hardware, and mobile operating system innovator." },
      { id: "meta", name: "Meta", tier: "Tier 1", openRoles: 12, techStack: ["React", "GraphQL", "Python", "PyTorch"], description: "Connecting billions through social media networks and metaverse technology." },
      { id: "netflix", name: "Netflix", tier: "Tier 1", openRoles: 7, techStack: ["Java", "Node.js", "Spring Boot", "Cassandra"], description: "Streaming giant delivering entertainment content globally at hyper-scale." },
      { id: "tesla", name: "Tesla", tier: "Tier 2", openRoles: 11, techStack: ["Python", "C++", "PyTorch", "Embedded C"], description: "Electric vehicle and renewable energy automation pioneer." },
      { id: "uber", name: "Uber", tier: "Tier 2", openRoles: 15, techStack: ["Go", "Java", "React Native", "Kafka"], description: "Ridesharing, logistics, and real-time geospatial computing platform." },
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
      {
        id: 7,
        title: "Autonomous Systems Software Engineer",
        company: "tesla",
        location: "Bangalore, India",
        type: "Full-time",
        experience: "1-4 years",
        salary: "₹30-48 LPA",
        skills: ["C++", "Python", "Computer Vision", "ROS"],
        description: "Develop cutting-edge real-time control software for autonomous vehicle systems.",
        requirements: ["Strong C++", "Robotics/CV experience", "Embedded Linux"],
        benefits: ["Tesla Equity", "Relocation Support", "Health Plan"],
        postedDate: "2024-02-01",
        deadline: "2024-03-01",
        applicants: 512,
        status: "open",
        difficulty: "High",
        rating: 4.9,
        interviewProcess: ["Algo Challenge", "C++ Deep Dive", "Architecture", "VP Round"],
      },
      {
        id: 8,
        title: "Backend Distributed Systems Engineer",
        company: "uber",
        location: "Hyderabad, India",
        type: "Full-time",
        experience: "2-4 years",
        salary: "₹28-42 LPA",
        skills: ["Go", "Java", "Microservices", "Kafka"],
        description: "Architect high-throughput real-time matching engines powering Uber global dispatch.",
        requirements: ["Distributed Systems", "Concurrency in Go/Java", "High Availability"],
        benefits: ["Uber Credits", "Comprehensive Healthcare", "Stock Grants"],
        postedDate: "2024-02-03",
        deadline: "2024-03-05",
        applicants: 780,
        status: "open",
        difficulty: "High",
        rating: 4.8,
        interviewProcess: ["Screening", "System Design", "Coding Round 1", "Coding Round 2"],
      }
    ],
    []
  );

  const preparationResources = [
    {
      id: 1,
      title: "Data Structures & Algorithms Mastery Handbook",
      type: "PDF Guide",
      duration: "12 weeks",
      difficulty: "Advanced",
      rating: 4.9,
      students: 15420,
      pdfUrl: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
      downloadSize: "4.8 MB",
      description:
        "Complete DSA preparation covering arrays, trees, dynamic programming, and top 500 interview problems with solutions.",
      topics: [
        "Arrays & Strings",
        "Linked Lists",
        "Trees & Graphs",
        "Dynamic Programming",
        "Bit Manipulation",
      ],
    },
    {
      id: 2,
      title: "System Design Interview Cheat Sheet",
      type: "PDF Blueprint",
      duration: "8 weeks",
      difficulty: "Expert",
      rating: 4.8,
      students: 8760,
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      downloadSize: "3.2 MB",
      description:
        "Architectural patterns, load balancing, sharding, caching strategies, and real-world system design interview blueprints.",
      topics: [
        "Scalability",
        "Load Balancing",
        "NoSQL vs SQL",
        "Caching & Redis",
        "Microservices",
      ],
    },
    {
      id: 3,
      title: "Tech Resume & Portfolio Template Kit",
      type: "Template Guide",
      duration: "2 weeks",
      difficulty: "Beginner",
      rating: 4.7,
      students: 12300,
      pdfUrl: "https://raw.githubusercontent.com/pdfobject/pdfobject.github.io/master/sample-3d.pdf",
      downloadSize: "2.1 MB",
      description:
        "ATS-friendly resume templates, high-impact bullet point formulas, and GitHub portfolio optimization guides.",
      topics: [
        "ATS Resume Format",
        "Action Verbs",
        "Project Spotlights",
        "Skills Matrix",
        "GitHub Layout",
      ],
    },
    {
      id: 4,
      title: "Top 100 Technical Coding Interview Questions",
      type: "Question Bank",
      duration: "4 weeks",
      difficulty: "Intermediate",
      rating: 4.9,
      students: 18900,
      pdfUrl: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
      downloadSize: "5.5 MB",
      description:
        "Curated collection of the most frequently asked coding problems across FAANG and top tech startups.",
      topics: [
        "Two Pointers",
        "Sliding Window",
        "Binary Search",
        "Backtracking",
        "Greedy Algorithms",
      ],
    },
  ];

  const interviewTips = [
    {
      id: 1,
      category: "Coding & Problem Solving",
      title: "How to Approach Live Coding Assessments",
      summary: "Master the 5-step problem solving framework used by top software engineers.",
      pdfUrl: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
      tips: [
        "Always clarify input constraints and edge cases before writing code.",
        "Talk through your thought process out loud to show problem-solving logic.",
        "Propose a naive brute force solution first, then optimize time/space complexity.",
        "Dry run your code with sample inputs and edge cases before running tests.",
      ]
    },
    {
      id: 2,
      category: "System Design",
      title: "System Design Interview Strategy",
      summary: "Framework for designing scalable distributed systems in 45 minutes.",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      tips: [
        "Spend the first 5-10 minutes gathering functional and non-functional requirements.",
        "Calculate estimated Traffic (QPS), Storage, and Bandwidth capacity requirements.",
        "Draw high-level components: Client, API Gateway, Services, DB, and Cache.",
        "Deep dive into bottlenecks: Single points of failure, replication, and data partitioning.",
      ]
    },
    {
      id: 3,
      category: "Behavioral & HR",
      title: "Mastering the STAR Behavioral Framework",
      summary: "Structure your project and leadership stories effectively.",
      pdfUrl: "https://raw.githubusercontent.com/pdfobject/pdfobject.github.io/master/sample-3d.pdf",
      tips: [
        "Situation: Set the context and background of your project or challenge.",
        "Task: Clearly state your specific responsibility and goal.",
        "Action: Detail the exact technical or strategic steps YOU took.",
        "Result: Highlight measurable outcomes (e.g. 'Reduced latency by 40%').",
      ]
    },
    {
      id: 4,
      category: "Offer Negotiation",
      title: "Salary Negotiation & Offer Evaluation",
      summary: "How to negotiate base salary, stock options, and signing bonuses professionally.",
      pdfUrl: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
      tips: [
        "Never reveal exact salary expectations in early HR calls; ask for the pay range.",
        "Benchmark compensation data using industry tools like Levels.fyi.",
        "Highlight competing offers and specialized skills to justify higher tiers.",
        "Negotiate signing bonuses and equity grants if base salary is capped.",
      ]
    }
  ];

  const successStories = [
    {
      id: 1,
      name: "Rahul Sharma",
      company: "Google",
      role: "SDE-2",
      package: "₹45 LPA",
      batch: "2023",
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
    }, 300);
  }, [
    activeTab,
    selectedCompany,
    selectedRole,
    searchTerm,
    jobOpportunities,
    companies,
    roles,
  ]);



  const getCompanyInfo = (companyId) => {
    return companies.find((c) => c.id === companyId) || companies[0];
  };

  const openJobModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  return (
    <div className="placement-container pb-5">
      {/* Header Section */}
      <section className="py-4 mb-4 bg-body-tertiary border-bottom">
        <div className="container">
          <h1 className="display-6 fw-bold mb-2 text-body d-flex align-items-center gap-3">
            <div className="p-2 bg-danger-subtle text-danger rounded-3 d-inline-flex">
              <FiTarget size={28} />
            </div>
            <span>Career & Placement Preparation</span>
          </h1>
          <p className="lead text-muted m-0 fs-6" style={{ maxWidth: "720px" }}>
            Discover top tier engineering opportunities, master technical interviews with free PDF cheat sheets, and prepare for software roles.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="mb-4">
        <div className="container">
          <div className="d-flex flex-wrap gap-2 justify-content-start bg-body-tertiary p-2 rounded-4 shadow-sm border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`btn rounded-3 px-3 py-2 fw-medium d-flex align-items-center gap-2 transition-all ${
                  activeTab === tab.id
                    ? "btn-primary shadow-sm fw-semibold"
                    : "btn-outline-secondary border-0"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
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
              <div className="bg-body-tertiary p-3 p-md-4 rounded-4 shadow-sm border mb-4">
                <div className="row g-3 align-items-center">
                  <div className="col-md-6">
                    <div className="input-group shadow-sm rounded-3 overflow-hidden border">
                      <span className="input-group-text bg-body border-end-0 text-muted">
                        <FiSearch size={18} />
                      </span>
                      <input
                        type="text"
                        placeholder="Search jobs, companies, or required tech skills..."
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
                        showFilters || (selectedCompany !== "all" || selectedRole !== "all") ? "active" : ""
                      }`}
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      <FiSliders size={16} />
                      <span>Filter Options</span>
                      {((selectedCompany !== "all" ? 1 : 0) + (selectedRole !== "all" ? 1 : 0)) > 0 && (
                        <span className="badge bg-primary text-white rounded-pill ms-1 px-2">
                          {(selectedCompany !== "all" ? 1 : 0) + (selectedRole !== "all" ? 1 : 0)}
                        </span>
                      )}
                      {showFilters ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                    </button>

                    {(selectedCompany !== "all" || selectedRole !== "all") && (
                      <button
                        className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1"
                        onClick={() => {
                          setSelectedCompany("all");
                          setSelectedRole("all");
                        }}
                        title="Reset Filters"
                      >
                        <FiRotateCcw size={14} />
                        <span>Reset</span>
                      </button>
                    )}
                  </div>
                </div>

                {showFilters && (
                  <div className="collapsible-filter-panel mt-3 pt-3 border-top">
                    <div className="mb-3">
                      <label className="fw-semibold small text-muted d-block mb-2">Company Filters:</label>
                      <div className="d-flex flex-wrap gap-2">
                        {companies.map((company) => (
                          <button
                            key={company.id}
                            className={`btn btn-sm rounded-3 px-3 py-2 border transition-all ${
                              selectedCompany === company.id ? "btn-primary shadow-sm" : "btn-outline-secondary"
                            }`}
                            onClick={() => setSelectedCompany(company.id)}
                          >
                            <span>{company.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="fw-semibold small text-muted d-block mb-2">Role Filters:</label>
                      <div className="d-flex flex-wrap gap-2">
                        {roles.map((role) => (
                          <button
                            key={role.id}
                            className={`btn btn-sm rounded-3 px-3 py-2 border transition-all ${
                              selectedRole === role.id ? "btn-primary shadow-sm" : "btn-outline-secondary"
                            }`}
                            onClick={() => setSelectedRole(role.id)}
                          >
                            {role.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {isLoading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status"></div>
                  <p className="mt-2 text-muted">Loading job opportunities...</p>
                </div>
              ) : (
                <div className="row g-4">
                  {filteredJobs.map((job) => (
                    <div key={job.id} className="col-md-6 col-lg-4">
                      <div
                        className="card h-100 border shadow-sm rounded-4 p-3 hover-lift bg-body-tertiary cursor-pointer d-flex flex-column"
                        onClick={() => openJobModal(job)}
                      >
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center gap-2">
                            <div className="p-2 bg-body border rounded-3 d-flex align-items-center justify-content-center">
                              <FaBuilding size={20} className="text-primary" />
                            </div>
                            <div>
                              <h5 className="card-title fw-bold m-0 text-truncate">{job.title}</h5>
                              <span className="text-muted small">{getCompanyInfo(job.company).name}</span>
                            </div>
                          </div>
                          <span
                            className={`badge small px-2 py-1 rounded-pill ${
                              job.difficulty === "Low" || job.difficulty === "Beginner"
                                ? "bg-success-subtle text-success"
                                : job.difficulty === "Medium" || job.difficulty === "Intermediate"
                                ? "bg-warning-subtle text-warning-emphasis"
                                : "bg-danger-subtle text-danger"
                            }`}
                          >
                            {job.difficulty}
                          </span>
                        </div>

                        <p className="card-text text-muted small line-clamp-2 mb-3 flex-grow-1">
                          {job.description}
                        </p>

                        <div className="d-flex flex-wrap gap-1 mb-3">
                          {job.skills.map((skill, idx) => (
                            <span key={idx} className="badge bg-body border text-body-tertiary small fw-normal">
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="d-flex justify-content-between align-items-center text-muted small pt-2 border-top mb-3">
                          <span className="d-flex align-items-center gap-1">
                            <FiMapPin size={13} /> {job.location}
                          </span>
                          <span className="fw-bold text-success d-flex align-items-center gap-1">
                            <FiDollarSign size={13} /> {job.salary}
                          </span>
                        </div>

                        <button className="btn btn-primary w-100 rounded-3 fw-semibold d-flex align-items-center justify-content-center gap-2">
                          <span>View Details & Apply</span> <FiArrowRight size={15} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Companies Tab Screen */}
          {activeTab === "companies" && (
            <div className="companies-content">
              <div className="mb-4">
                <h3 className="fw-bold m-0">Participating Hiring Partners</h3>
                <p className="text-muted small m-0">Top engineering companies hiring directly through StudiMI</p>
              </div>

              <div className="row g-4">
                {companies.filter(c => c.id !== 'all').map((company) => (
                  <div key={company.id} className="col-md-6 col-lg-4">
                    <div className="card h-100 border shadow-sm rounded-4 p-4 hover-lift bg-body-tertiary d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="p-3 bg-primary-subtle text-primary rounded-3 d-inline-flex">
                          <FaBuilding size={24} />
                        </div>
                        <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-1 small fw-semibold">
                          {company.tier}
                        </span>
                      </div>
                      <h4 className="fw-bold mb-2">{company.name}</h4>
                      <p className="text-muted small flex-grow-1">{company.description}</p>

                      <div className="mb-3">
                        <span className="fw-semibold small text-secondary d-block mb-1">Core Tech Stack:</span>
                        <div className="d-flex flex-wrap gap-1">
                          {company.techStack?.map((tech, i) => (
                            <span key={i} className="badge bg-body border text-body-secondary small fw-normal">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
                        <span className="badge bg-success-subtle text-success">{company.openRoles} Open Positions</span>
                        <button
                          className="btn btn-outline-primary btn-sm rounded-3 fw-semibold d-flex align-items-center gap-1"
                          onClick={() => {
                            setSelectedCompany(company.id);
                            setActiveTab("opportunities");
                          }}
                        >
                          <span>View Jobs</span> <FiArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preparation Tab */}
          {activeTab === "preparation" && (
            <div className="preparation-content">
              <div className="mb-4">
                <h3 className="fw-bold m-0">Interview Preparation Resources & PDFs</h3>
                <p className="text-muted small m-0">Master DSA, System Design, and ATS resume standards with free online PDF guides</p>
              </div>

              <div className="row g-4">
                {preparationResources.map((resource) => (
                  <div key={resource.id} className="col-md-6 col-lg-4">
                    <div className="card h-100 border shadow-sm rounded-4 p-4 hover-lift bg-body-tertiary d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="badge bg-info-subtle text-info px-3 py-1 rounded-pill small fw-semibold">
                          {resource.type}
                        </span>
                        <span className="fw-semibold text-warning small d-flex align-items-center gap-1">
                          <FiStar size={14} className="fill-warning" /> {resource.rating}
                        </span>
                      </div>

                      <h4 className="fw-bold mb-2">{resource.title}</h4>
                      <p className="text-muted small flex-grow-1">{resource.description}</p>

                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {resource.topics.map((t, idx) => (
                          <span key={idx} className="badge bg-body border text-body-tertiary small fw-normal">
                            #{t}
                          </span>
                        ))}
                      </div>

                      <div className="d-flex justify-content-between align-items-center text-muted small pt-3 border-top mb-3">
                        <span className="d-flex align-items-center gap-1">
                          <FiClock size={13} /> {resource.duration}
                        </span>
                        <span className="d-flex align-items-center gap-1">
                          <FiUsers size={13} /> {resource.students.toLocaleString()} enrolled
                        </span>
                      </div>

                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-primary btn-sm flex-grow-1 rounded-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
                          onClick={() => setSelectedPdf({ title: resource.title, url: resource.pdfUrl, downloadSize: resource.downloadSize })}
                        >
                          <FiFileText size={15} /> <span>Read PDF</span>
                        </button>
                        <a
                          href={resource.pdfUrl}
                          download
                          className="btn btn-outline-secondary btn-sm rounded-3 d-flex align-items-center"
                          title="Download PDF"
                        >
                          <FiDownload size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interview Tips Tab Screen */}
          {activeTab === "interviews" && (
            <div className="interviews-content">
              <div className="mb-4">
                <h3 className="fw-bold m-0">Technical Interview Survival Tips & PDF Frameworks</h3>
                <p className="text-muted small m-0">Proven strategies from senior software engineers to crack technical rounds</p>
              </div>

              <div className="row g-4">
                {interviewTips.map((tip) => (
                  <div key={tip.id} className="col-md-6">
                    <div className="card h-100 border shadow-sm rounded-4 p-4 bg-body-tertiary hover-lift">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div className="p-3 bg-warning-subtle text-warning-emphasis rounded-3 d-inline-flex">
                          <FiTarget size={24} />
                        </div>
                        <div>
                          <span className="badge bg-secondary-subtle text-secondary px-3 py-1 rounded-pill small fw-semibold">
                            {tip.category}
                          </span>
                          <h4 className="fw-bold m-0 mt-1">{tip.title}</h4>
                        </div>
                      </div>
                      <p className="text-muted small mb-3">{tip.summary}</p>

                      <div className="bg-body p-3 rounded-3 border mb-4">
                        <h6 className="fw-bold mb-2 text-primary small">Key Action Steps:</h6>
                        <ul className="m-0 ps-3 small text-muted">
                          {tip.tips.map((t, idx) => (
                            <li key={idx} className="mb-1">{t}</li>
                          ))}
                        </ul>
                      </div>

                      <button
                        className="btn btn-outline-primary rounded-3 w-100 fw-semibold d-flex align-items-center justify-content-center gap-2"
                        onClick={() => setSelectedPdf({ title: tip.title, url: tip.pdfUrl, downloadSize: "3.5 MB" })}
                      >
                        <FiFileText size={15} /> <span>Open Full Guide PDF</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Success Stories Tab */}
          {activeTab === "success" && (
            <div className="success-content">
              <div className="mb-4">
                <h3 className="fw-bold m-0">Placement Success Stories</h3>
                <p className="text-muted small m-0">Get inspired by StudiMI alumni who landed top engineering roles</p>
              </div>

              <div className="row g-4">
                {successStories.map((story) => (
                  <div key={story.id} className="col-md-4">
                    <div className="card h-100 border shadow-sm rounded-4 p-4 hover-lift bg-body-tertiary text-center">
                      <div className="p-3 bg-success-subtle text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: "64px", height: "64px" }}>
                        <FiUserCheck size={32} />
                      </div>
                      <h4 className="fw-bold m-0">{story.name}</h4>
                      <p className="text-primary fw-semibold small mb-2">{story.role} at {story.company}</p>
                      <span className="badge bg-success-subtle text-success fs-6 rounded-pill mb-3">{story.package}</span>
                      <p className="text-muted small mb-4">"{story.story}"</p>

                      <div className="text-start bg-body p-3 rounded-3 border">
                        <h6 className="fw-semibold small text-secondary mb-2">Key Tips for Juniors:</h6>
                        <ul className="ps-3 m-0 small text-muted">
                          {story.tips.map((t, idx) => (
                            <li key={idx}>{t}</li>
                          ))}
                        </ul>
                      </div>
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
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4 shadow-lg border-0">
              <div className="modal-header border-bottom">
                <div className="d-flex align-items-center gap-3">
                  <div className="p-2 bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center">
                    <FaBuilding size={24} />
                  </div>
                  <div>
                    <h5 className="modal-title fw-bold">{selectedJob.title}</h5>
                    <p className="m-0 text-muted small">{getCompanyInfo(selectedJob.company).name} • {selectedJob.location}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-light btn-sm p-2"
                  onClick={() => setShowModal(false)}
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="modal-body p-4">
                <div className="d-flex justify-content-between align-items-center bg-body-tertiary p-3 border rounded-3 mb-4">
                  <div>
                    <span className="text-muted small fw-semibold">Offered Package:</span>
                    <h4 className="fw-bold text-success m-0">{selectedJob.salary}</h4>
                  </div>
                  <span className="badge bg-primary text-white fs-6 rounded-pill px-3 py-2">
                    {selectedJob.type}
                  </span>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold mb-2">Job Overview</h6>
                  <p className="text-muted small m-0">{selectedJob.description}</p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold mb-2">Key Requirements</h6>
                  <ul className="list-group list-group-flush border rounded-3">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="list-group-item bg-transparent d-flex align-items-center gap-2 small">
                        <FiCheck className="text-success" /> <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h6 className="fw-bold mb-2">Interview Process Stages</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {selectedJob.interviewProcess.map((step, idx) => (
                      <span key={idx} className="badge bg-secondary-subtle text-secondary p-2 rounded-pill small">
                        {idx + 1}. {step}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer border-top">
                <button
                  className="btn btn-secondary rounded-3"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="btn btn-primary rounded-3 fw-semibold px-4 d-flex align-items-center gap-2"
                  onClick={() => {
                    alert(`Application submitted successfully for ${selectedJob.title} at ${getCompanyInfo(selectedJob.company).name}!`);
                    setShowModal(false);
                  }}
                >
                  <span>Apply Now</span> <FiArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Online Free PDF Viewer Modal */}
      {selectedPdf && (
        <PdfViewerModal
          title={selectedPdf.title}
          pdfUrl={selectedPdf.url}
          downloadSize={selectedPdf.downloadSize}
          onClose={() => setSelectedPdf(null)}
        />
      )}
    </div>
  );
};

export default Placement;
