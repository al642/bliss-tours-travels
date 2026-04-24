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
            text="The company profile makes the distinction clear: the planning starts with the client, then builds the right experience around them."
          />
        </div>
        <div className="feature-stack">
          {company.highlights.map((item) => (
            <article key={item} className="feature-card">
              <h3>{item}</h3>
              <p>
                Designed to show visitors that Bliss combines premium experiences with reliable planning and execution.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
