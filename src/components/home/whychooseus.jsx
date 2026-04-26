import SectionTitle from "../shared/sectiontitle";
import { company } from "../../data/company";

export default function WhyChooseUs() {
  return (
    <section className="content-section">
      <div className="container two-column">
        <div>
          <SectionTitle
            eyebrow="Why travellers enquire"
            title="Most travel companies sell fixed packages. Bliss Tours takes a different approach."
            text="Your journey starts with how you want to feel, travel, rest, celebrate, and explore. From there, every detail is shaped around you."
          />
        </div>
        <div className="feature-stack">
          {company.highlights.map((item) => (
            <article key={item} className="feature-card">
              <h3>{item}</h3>
              <p>
                Premium experiences, reliable coordination, and thoughtful planning come together so the journey feels effortless from enquiry to return.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
