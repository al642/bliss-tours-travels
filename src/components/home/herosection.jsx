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
          <span className="hero-card-label">Inspiration taken from premium safari brands</span>
          <h3>What this design direction emphasizes</h3>
          <ul>
            <li>Cinematic first impression with bold copy</li>
            <li>Credibility through process, stats, and testimonials</li>
            <li>Destination-led exploration instead of generic text blocks</li>
            <li>Easy enquiry paths for both leisure and corporate clients</li>
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
