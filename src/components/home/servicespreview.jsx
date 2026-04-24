import SectionTitle from "../shared/sectiontitle";
import { services } from "../../data/services";

export default function ServicesPreview() {
  return (
    <section className="content-section">
      <div className="container">
        <SectionTitle
          eyebrow="What Bliss can sell online"
          title="A service mix built for premium, stress-free travel."
          text="These offerings come directly from the company profile and give the site a more accurate commercial shape."
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
