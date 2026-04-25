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
