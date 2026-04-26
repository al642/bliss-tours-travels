import { useEffect, useState } from "react";
import { company } from "../../data/company";
import { heroSlides } from "../../data/gallery";
import Button from "../shared/button";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (heroSlides.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      {heroSlides.length > 0 ? (
        <div className="hero-slideshow" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <img
              key={slide}
              className={`hero-slide ${index === activeSlide ? "hero-slide-active" : ""}`}
              src={slide}
              alt=""
            />
          ))}
        </div>
      ) : null}

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

      {heroSlides.length > 1 ? (
        <div className="hero-slide-dots" aria-label="Hero slideshow">
          {heroSlides.map((slide, index) => (
            <button
              key={slide}
              className={index === activeSlide ? "hero-slide-dot-active" : ""}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Show hero image ${index + 1}`}
            />
          ))}
        </div>
      ) : null}

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
