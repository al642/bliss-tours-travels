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
        text="Share where you want to go, what matters most, and the kind of journey you have in mind. We will help shape the details from there."
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
              Reach out for custom itineraries, premium escapes, group travel, airport transfers, and carefully planned experiences across Africa and beyond.
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
                Thank you. The Bliss team will review your enquiry and follow up with the next planning steps.
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  );
}
