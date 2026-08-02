import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";
import {
  FiBookOpen,
  FiActivity,
  FiCode,
  FiZap,
  FiTarget,
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
} from "react-icons/fi";

const navItems = [
  { path: "/materials", label: "Study Materials", icon: <FiBookOpen size={16} /> },
  { path: "/labs", label: "Practical Labs", icon: <FiActivity size={16} /> },
  { path: "/projects", label: "Projects Hub", icon: <FiCode size={16} /> },
  { path: "/knowledge-zone", label: "Knowledge Zone", icon: <FiZap size={16} /> },
  { path: "/placement", label: "Placement Prep", icon: <FiTarget size={16} /> },
];

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("studimi_theme") || "dark";
  });
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
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
      className="navbar navbar-expand-lg sticky-top border-bottom px-3 py-2 bg-body-tertiary shadow-sm"
      style={{ backdropFilter: "blur(12px)", zIndex: 1050 }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2 me-4" to="/">
          <div className="p-2 bg-primary text-white rounded-3 d-flex align-items-center justify-content-center">
            <FaGraduationCap size={18} />
          </div>
          <span
            className="fw-bold fs-4 text-body"
            style={{
              letterSpacing: "-0.03em",
            }}
          >
            StudiMI
          </span>
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none p-2 text-body"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          {isNavCollapsed ? <FiMenu size={22} /> : <FiX size={22} />}
        </button>

        <div
          className={`collapse navbar-collapse ${!isNavCollapsed ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-1">
            {navItems.map(({ path, label, icon }) => {
              const isActive = location.pathname === path;
              return (
                <li key={path} className="nav-item">
                  <Link
                    className={`nav-link d-flex align-items-center gap-2 px-3 py-2 rounded-3 fw-medium transition-all ${
                      isActive
                        ? "active text-primary bg-primary-subtle shadow-sm fw-semibold"
                        : "text-secondary hover-lift"
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
              className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2 rounded-3 px-3 py-2 shadow-sm"
              title="Toggle Light/Dark Theme"
            >
              {theme === "dark" ? <FiSun size={15} /> : <FiMoon size={15} />}
              <span className="small fw-semibold">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
