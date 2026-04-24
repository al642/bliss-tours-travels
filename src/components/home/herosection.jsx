import { company } from "../../data/company";
import Button from "../shared/button";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{company.heroEyebrow}</p>
          <h1>{company.heroTitle}</h1>
          <p>{company.heroDescription}</p>
          <div className="hero-actions">
            <Button to="/packages">Explore Packages</Button>
            <Button to="/about" variant="ghost">
              Our Story
            </Button>
          </div>
        </div>

        <div className="hero-card">
          <span className="hero-card-label">What Bliss Tours stands for</span>
          <h3>Experience-led travel with detail and intention.</h3>
          <ul>
            <li>Personalized travel planning instead of fixed packages</li>
            <li>Premium leisure journeys across Africa and beyond</li>
            <li>Comfort, flow, and memorable moments designed in</li>
            <li>Trusted execution from enquiry to return</li>
          </ul>
        </div>
      </div>

      <div className="hero-stats container">
        {company.stats.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
