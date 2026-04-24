import SectionTitle from "../shared/sectiontitle";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsPreview() {
  return (
    <section className="content-section alt-section">
      <div className="container">
        <SectionTitle
          eyebrow="Social proof"
          title="Travel sites convert better when the reassurance feels specific."
          text="Until live client reviews are added, this section supports the premium, client-focused positioning established in the company profile."
        />

        <div className="card-grid compact-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="quote-card">
              <p className="quote-mark">“</p>
              <p>{item.quote}</p>
              <h3>{item.name}</h3>
              <span>{item.trip}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
