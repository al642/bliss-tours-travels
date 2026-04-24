import Button from "../shared/button";

export default function CallToAction() {
  return (
    <section className="content-section">
      <div className="container cta-panel">
        <div>
          <p className="eyebrow">Ready to shape the live brand?</p>
          <h2>Design travel that feels effortless and unforgettable from the first click.</h2>
          <p>
            Bliss Tours is positioned as a premium, experience-led brand for travellers who want thoughtful planning, quality execution, and journeys built around them.
          </p>
        </div>
        <Button to="/contact">Request a Custom Trip</Button>
      </div>
    </section>
  );
}
