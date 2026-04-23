import SectionTitle from "../shared/sectiontitle";
import { company } from "../../data/company";

export default function WhyChooseUs() {
  return (
    <section className="content-section">
      <div className="container two-column">
        <div>
          <SectionTitle
            eyebrow="Why travellers enquire"
            title="A modern operator needs more than pretty photos."
            text="Inspired by the strongest travel sites we reviewed, this section balances emotion with proof."
          />
        </div>
        <div className="feature-stack">
          {company.highlights.map((item) => (
            <article key={item} className="feature-card">
              <h3>{item}</h3>
              <p>
                Designed to reassure first-time visitors that Bliss can handle both experience and logistics.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
