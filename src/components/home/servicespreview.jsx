import SectionTitle from "../shared/sectiontitle";
import { services } from "../../data/services";

export default function ServicesPreview() {
  return (
    <section className="content-section">
      <div className="container">
        <SectionTitle
          eyebrow="What Bliss can sell online"
          title="Built for customers, families, groups, and corporate planners."
          text="The service mix gives the site commercial breadth while still feeling curated."
        />
        <div className="card-grid compact-grid">
          {services.map((service) => (
            <article key={service.title} className="info-card">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
