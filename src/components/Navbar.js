import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const navItems = [
  { path: "/materials", label: "Materials" },
  { path: "/labs", label: "Labs" },
  { path: "/projects", label: "Projects" },
  { path: "/knowledge-zone", label: "Knowledge Zone" },
  { path: "/placement", label: "Placement" },
];

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    document.body.className =
      theme === "dark" ? "bg-dark text-white" : "bg-light text-dark";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } px-3 shadow`}
    >
      <Link className="navbar-brand fw-bold" to="/">
        Studimi
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
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {navItems.map(({ path, label }) => (
            <li key={path} className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === path ? "active fw-semibold" : ""
                }`}
                to={path}
                onClick={() => setIsNavCollapsed(true)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className={`btn btn-sm ${
            theme === "dark" ? "btn-light" : "btn-dark"
          } ms-lg-3`}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
