import SectionTitle from "../shared/sectiontitle";
import { services } from "../../data/services";

export default function ServicesPreview() {
  return (
    <section className="content-section">
      <div className="container">
        <SectionTitle
          eyebrow="Bliss services"
          title="A service mix built for premium, stress-free travel."
          text="From custom itineraries to airport transfers, each service is designed to make travel feel polished, personal, and easy to enjoy."
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
