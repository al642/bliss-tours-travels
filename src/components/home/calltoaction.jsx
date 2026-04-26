import Button from "../shared/button";

export default function CallToAction() {
  return (
    <section className="content-section">
      <div className="container cta-panel">
        <div>
          <p className="eyebrow">Ready for a custom journey?</p>
          <h2>Design travel that feels effortless and unforgettable from the first click.</h2>
          <p>
            Tell us what you want from the trip, and we will shape the route, stays, experiences, and details around your pace and preferences.
          </p>
        </div>
        <Button to="/contact">Request a Custom Trip</Button>
      </div>
    </section>
  );
}
