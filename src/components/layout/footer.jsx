import { Link } from "react-router-dom";
import { company } from "../../data/company";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">Bliss Tours & Travel</p>
          <h3>Designed to inspire confidence before the booking starts.</h3>
          <p>{company.story}</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/about">About</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/services">Services</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={`tel:${company.phone}`}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <span>{company.office}</span>
        </div>
      </div>
    </footer>
  );
}
