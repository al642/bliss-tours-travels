import Button from "../shared/button";

export default function CallToAction() {
  return (
    <section className="content-section">
      <div className="container cta-panel">
        <div>
          <p className="eyebrow">Ready to shape the live brand?</p>
          <h2>Turn web visitors into enquiries with a sharper first impression.</h2>
          <p>
            This concept positions Bliss as a trustworthy East African travel company with room to add your real packages, media, and company profile.
          </p>
        </div>
        <Button to="/contact">Request a Custom Trip</Button>
      </div>
    </section>
  );
}
