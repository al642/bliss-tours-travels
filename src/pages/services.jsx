import Button from "../components/shared/button";
import { company } from "../data/company";
import { services } from "../data/services";

const servicePhrases = services.map((service) => service.title);

function ServiceRevealList() {
  return (
    <section className="services-reveal-section">
      <div className="container services-reveal-grid">
        <div className="services-reveal-intro">
          <p className="eyebrow">What we handle</p>
          <h2>Every moving part, shaped into one effortless journey.</h2>
          <p>
            From flights and stays to excursions, transfers, and romantic escapes,
            Bliss brings the planning together so the trip feels smooth before it begins.
          </p>
        </div>
        <div className="services-phrase-stack" aria-label="Bliss services">
          {servicePhrases.map((phrase) => (
            <p key={phrase} className="services-phrase">
              {phrase}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="services-hero">
        <div className="container services-hero-copy">
          <p className="eyebrow">Services</p>
          <h1>Travel planning that feels calm, polished, and deeply personal.</h1>
          <p>
            Whether you need a complete itinerary or selected support, Bliss brings
            structure, taste, and careful coordination to every stage of the journey.
          </p>
        </div>
      </section>

      <ServiceRevealList />

      <section className="services-split-section">
        <div className="container services-split">
          <div className="services-large-copy">
            <p className="eyebrow">Experience first</p>
            <h2>We design the flow, not just the booking.</h2>
            <p>
              A beautiful trip depends on timing, comfort, movement, mood, and the
              small decisions that make everything feel easy. That is where Bliss
              spends the time.
            </p>
          </div>
          <div className="services-image-panel" aria-hidden="true" />
        </div>
      </section>

      <section className="services-process-section">
        <div className="container services-process">
          <p className="eyebrow">How we work</p>
          <h2>Start with the traveller. Shape the destination around them.</h2>
          <div className="services-process-lines">
            {company.process.map((step, index) => (
              <p key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step}
              </p>
            ))}
          </div>
          <Button to="/contact">Plan With Bliss</Button>
        </div>
      </section>
    </>
  );
}
