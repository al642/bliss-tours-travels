import PageBanner from "../components/layout/pagebanner";
import { company } from "../data/company";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Bliss"
        title="A cleaner story for the company behind the trips."
        text="This page is structured to help customers and partners quickly understand the brand promise, values, and operating style."
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
            <h2>Built to present the company professionally on the web.</h2>
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
    </>
  );
}
