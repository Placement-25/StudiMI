import { Link } from "react-router-dom";
import "./Labs.css";

const Labs = () => {
  const labCategories = [
    {
      id: 1,
      title: "Computer Science Labs",
      description:
        "Programming, Data Structures, Algorithms, and Software Engineering laboratory exercises",
      icon: "💻",
      subjects: [
        "Programming Lab",
        "Data Structures",
        "Database Lab",
        "Web Development",
      ],
      link: "/labs/computer-science",
    },
    {
      id: 2,
      title: "Electronics Labs",
      description:
        "Circuit analysis, digital electronics, and embedded systems practical sessions",
      icon: "⚡",
      subjects: [
        "Digital Electronics",
        "Microprocessors",
        "VLSI Design",
        "Communication Systems",
      ],
      link: "/labs/electronics",
    },
    {
      id: 3,
      title: "Mechanical Labs",
      description:
        "Manufacturing processes, fluid mechanics, and thermal engineering experiments",
      icon: "⚙️",
      subjects: [
        "Manufacturing Lab",
        "Fluid Mechanics",
        "Heat Transfer",
        "Machine Design",
      ],
      link: "/labs/mechanical",
    },
    {
      id: 4,
      title: "Civil Labs",
      description:
        "Materials testing, surveying, and structural analysis laboratory work",
      icon: "🏗️",
      subjects: [
        "Materials Testing",
        "Surveying",
        "Concrete Technology",
        "Soil Mechanics",
      ],
      link: "/labs/civil",
    },
    {
      id: 5,
      title: "Physics Labs",
      description:
        "Fundamental physics experiments and advanced instrumentation techniques",
      icon: "🔬",
      subjects: [
        "Optics Lab",
        "Modern Physics",
        "Instrumentation",
        "Applied Physics",
      ],
      link: "/labs/physics",
    },
    {
      id: 6,
      title: "Chemistry Labs",
      description:
        "Analytical chemistry, organic synthesis, and material characterization",
      icon: "🧪",
      subjects: [
        "Analytical Chemistry",
        "Organic Chemistry",
        "Physical Chemistry",
        "Environmental Chemistry",
      ],
      link: "/labs/chemistry",
    },
  ];

  return (
    <div className="labs-container">
      {/* Hero Section */}
      <section className="labs-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Laboratory Resources</h1>
            <p className="hero-description">
              Comprehensive laboratory manuals, procedures, and resources for
              hands-on learning across all engineering disciplines
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Lab Experiments</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Departments</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Lab Manuals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="search-section">
        <div className="container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search for lab experiments, procedures, or equipment..."
              className="search-input"
            />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="filter-tags">
            <span className="filter-tag active">All Labs</span>
            <span className="filter-tag">Engineering</span>
            <span className="filter-tag">Science</span>
            <span className="filter-tag">Computer Science</span>
            <span className="filter-tag">Electronics</span>
          </div>
        </div>
      </section>

      {/* Lab Categories Grid */}
      <section className="labs-grid-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Laboratory Departments</h2>
            <p className="section-description">
              Explore our comprehensive collection of laboratory resources
              organized by department
            </p>
          </div>

          <div className="labs-grid">
            {labCategories.map((category) => (
              <div key={category.id} className="lab-card">
                <div className="lab-card-header">
                  <div className="lab-icon">{category.icon}</div>
                  <h3 className="lab-title">{category.title}</h3>
                </div>
                <div className="lab-card-body">
                  <p className="lab-description">{category.description}</p>
                  <div className="lab-subjects">
                    {category.subjects.map((subject, index) => (
                      <span key={index} className="subject-tag">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lab-card-footer">
                  <Link to={category.link} className="lab-btn">
                    Explore Lab
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="quick-access-section">
        <div className="container">
          <h2 className="section-title">Quick Access</h2>
          <div className="quick-access-grid">
            <div className="access-card">
              <div className="access-icon">📋</div>
              <h3>Lab Manuals</h3>
              <p>Download comprehensive lab manuals and procedure guides</p>
              <Link to="/lab-manuals" className="access-link">
                Access Manuals
              </Link>
            </div>
            <div className="access-card">
              <div className="access-icon">📊</div>
              <h3>Lab Reports</h3>
              <p>Templates and samples for writing professional lab reports</p>
              <Link to="/lab-reports" className="access-link">
                View Templates
              </Link>
            </div>
            <div className="access-card">
              <div className="access-icon">🛠️</div>
              <h3>Equipment Guide</h3>
              <p>
                Operating procedures and safety guidelines for lab equipment
              </p>
              <Link to="/equipment-guide" className="access-link">
                View Guide
              </Link>
            </div>
            <div className="access-card">
              <div className="access-icon">📅</div>
              <h3>Lab Schedule</h3>
              <p>Check availability and book lab sessions online</p>
              <Link to="/lab-schedule" className="access-link">
                Check Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="featured-section">
        <div className="container">
          <div className="featured-content">
            <div className="featured-text">
              <h2>Featured Laboratory Resources</h2>
              <p>
                Access our most popular and recently updated laboratory
                materials, including video demonstrations, interactive
                simulations, and step-by-step guides.
              </p>
              <ul className="featured-list">
                <li>HD video demonstrations of complex experiments</li>
                <li>Interactive virtual lab simulations</li>
                <li>Safety protocols and best practices</li>
                <li>Equipment troubleshooting guides</li>
              </ul>
              <Link to="/featured-resources" className="featured-btn">
                Explore Featured Content
              </Link>
            </div>
            <div className="featured-image">
              <div className="image-placeholder">
                <i className="fas fa-flask fa-5x"></i>
                <p>Laboratory Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Labs;
