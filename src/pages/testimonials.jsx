import PageBanner from "../components/layout/pagebanner";
import { testimonials } from "../data/testimonials";

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Testimonials"
        title="Confidence begins before the journey does."
        text="Travellers come to Bliss for clear communication, refined planning, and the reassurance that every detail has been considered."
      />
      <section className="content-section">
        <div className="container card-grid compact-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="quote-card">
              <p>{item.quote}</p>
              <h3>{item.name}</h3>
              <span>{item.trip}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
