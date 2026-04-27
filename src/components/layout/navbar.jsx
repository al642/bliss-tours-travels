import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { company } from "../../data/company";
import Button from "../shared/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/destinations", label: "Destinations" },
  { to: "/packages", label: "Packages" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" }
];

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((value) => (value === "dark" ? "light" : "dark"));
  }

  return (
    <header className="navbar-wrap">
      <div className="container navbar">
        <Link className="brand" to="/">
          <img
            className="brand-logo brand-logo-light-surface"
            src={isDark ? "/images/logo/light%20mode%20logo.png" : "/images/logo/biss-tours%20dark%20logo.png"}
            alt={company.name}
          />
        </Link>

        <button
          className={`nav-toggle ${open ? "nav-toggle-open" : ""}`}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${open ? "nav-links-open" : ""}`}
        >
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <button
            className={`theme-toggle ${isDark ? "theme-toggle-dark" : ""}`}
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
          >
            <span className="theme-toggle-track" aria-hidden="true">
              <span className="theme-toggle-thumb">
                <svg className="theme-icon theme-icon-sun" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2.4M12 19.6V22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2 12h2.4M19.6 12H22M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
                </svg>
                <svg className="theme-icon theme-icon-moon" viewBox="0 0 24 24">
                  <path d="M20.2 14.4A7.7 7.7 0 0 1 9.6 3.8a8.7 8.7 0 1 0 10.6 10.6Z" />
                </svg>
              </span>
            </span>
          </button>
          <Button to="/contact">Start Planning</Button>
        </nav>
      </div>
    </header>
  );
}
