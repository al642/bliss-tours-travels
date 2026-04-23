import PageBanner from "../components/layout/pagebanner";
import { testimonials } from "../data/testimonials";

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Testimonials"
        title="Trust is one of the main products a travel company sells."
        text="These testimonials are placeholders for your real client voice and should later be replaced with actual reviews and ratings."
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
