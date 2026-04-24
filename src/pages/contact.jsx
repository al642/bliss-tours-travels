import { useState } from "react";
import PageBanner from "../components/layout/pagebanner";
import { company } from "../data/company";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Make the next step feel easy."
        text="Bliss Tours is built around personalized planning, so the enquiry process should feel simple, warm, and tailored from the start."
      />
      <section className="content-section">
        <div className="container contact-layout">
          <article className="info-card">
            <h2>Contact details</h2>
            <p>{company.office}</p>
            <p>
              <a href={`tel:${company.phone}`}>{company.phone}</a>
            </p>
            <p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <p>
              The brand is Uganda-based. The phone, WhatsApp, email, and exact office details can now be swapped with your live contact information.
            </p>
          </article>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Email address" required />
            <input type="text" placeholder="Destination or service needed" required />
            <textarea rows="6" placeholder="Tell us about the trip you want to plan." required />
            <button className="button button-primary" type="submit">
              Send Enquiry
            </button>
            {submitted ? (
              <p className="form-note">
                Thanks. This demo form is ready to be connected to email, WhatsApp, or a CRM workflow.
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  );
}
