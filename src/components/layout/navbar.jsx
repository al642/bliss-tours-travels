import { useState } from "react";
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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-wrap">
      <div className="container navbar">
        <Link className="brand" to="/">
          <span className="brand-mark">BT</span>
          <span>
            <strong>{company.name}</strong>
            <small>{company.office}</small>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <nav className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <Button to="/contact">Start Planning</Button>
        </nav>
      </div>
    </header>
  );
}
