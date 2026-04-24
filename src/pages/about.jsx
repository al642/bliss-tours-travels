import PageBanner from "../components/layout/pagebanner";
import { company } from "../data/company";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Bliss"
        title="A premium travel brand built around personalization, precision, and experience."
        text="This page uses the company profile to explain what Bliss Tours does, who it serves, and why its approach is different from fixed-package travel sellers."
      />
      <section className="content-section">
        <div className="container two-column">
          <article className="info-card">
            <h2>Mission</h2>
            <p>{company.mission}</p>
          </article>
          <article className="info-card">
            <h2>Vision</h2>
            <p>{company.vision}</p>
          </article>
        </div>
      </section>
      <section className="content-section alt-section">
        <div className="container two-column">
          <div>
            <p className="eyebrow">Brand story</p>
            <h2>We don't sell trips. We design experiences.</h2>
            <p>{company.story}</p>
          </div>
          <div className="feature-stack">
            {company.values.map((value) => (
              <article key={value.title} className="feature-card">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="container two-column">
          <article className="info-card">
            <p className="eyebrow">Target clients</p>
            <h2>Who Bliss Tours serves</h2>
            <ul>
              {company.targetClients.map((client) => (
                <li key={client}>{client}</li>
              ))}
            </ul>
          </article>
          <article className="info-card">
            <p className="eyebrow">Objectives</p>
            <h2>Where the brand is heading</h2>
            <ul>
              {company.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
