import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/materials", label: "Materials", icon: "📚" },
  { path: "/labs", label: "Labs", icon: "🔬" },
  { path: "/projects", label: "Projects", icon: "🚀" },
  { path: "/knowledge-zone", label: "Knowledge Zone", icon: "💡" },
  { path: "/placement", label: "Placement Prep", icon: "🎯" },
];

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("studimi_theme") || "dark";
  });
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    document.body.className =
      theme === "dark"
        ? "bg-dark text-white min-vh-100"
        : "bg-light text-dark min-vh-100";
    localStorage.setItem("studimi_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top shadow-sm ${
        theme === "dark" ? "navbar-dark bg-dark border-bottom border-secondary-subtle" : "navbar-light bg-white border-bottom"
      } px-3 py-2`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2 fs-4" to="/">
          <span style={{ fontSize: "1.5rem" }}>🎓</span>
          <span className="bg-gradient text-primary fw-extrabold" style={{ background: "linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            StudiMI
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse ${!isNavCollapsed ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 gap-lg-1">
            {navItems.map(({ path, label, icon }) => {
              const isActive = location.pathname === path;
              return (
                <li key={path} className="nav-item">
                  <Link
                    className={`nav-link d-flex align-items-center gap-2 px-3 rounded-3 transition-all ${
                      isActive ? "active fw-bold text-primary bg-primary-subtle" : ""
                    }`}
                    to={path}
                    onClick={() => setIsNavCollapsed(true)}
                  >
                    <span>{icon}</span>
                    <span>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <button
              onClick={toggleTheme}
              className={`btn btn-sm d-flex align-items-center gap-2 rounded-pill px-3 py-2 border ${
                theme === "dark" ? "btn-outline-light" : "btn-outline-dark"
              }`}
              title="Toggle Light/Dark Theme"
            >
              <span>{theme === "dark" ? "☀️ Light" : "🌙 Dark"}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
