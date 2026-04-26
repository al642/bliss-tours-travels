import PageBanner from "../components/layout/pagebanner";
import { services } from "../data/services";
import { company } from "../data/company";

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="Services built around seamless, customized travel experiences."
        text="Whether you need a full itinerary or support with selected details, Bliss brings structure, polish, and care to every stage of the journey."
      />
      <section className="content-section">
        <div className="container card-grid compact-grid">
          {services.map((service) => (
            <article key={service.title} className="info-card">
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section alt-section">
        <div className="container">
          <p className="eyebrow">How we work</p>
          <h2>What makes the Bliss approach different.</h2>
          <div className="timeline-grid">
            {company.process.map((step) => (
              <article key={step} className="timeline-card">
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
