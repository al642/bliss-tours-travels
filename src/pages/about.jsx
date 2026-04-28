import Button from "../components/shared/button";
import { company } from "../data/company";

const beliefPhrases = [
  "Designed around the traveller.",
  "Planned with precision.",
  "Shaped for comfort.",
  "Remembered for how it felt."
];

const valuePhrases = company.values.map((value) => value.title);

const clientPhrases = [
  "Couples chasing quieter romance.",
  "Friends wanting something beautifully handled.",
  "Professionals who need the details managed.",
  "Travellers ready for Africa and beyond."
];

function ScrollPhraseSet({ label, title, phrases }) {
  return (
    <section className="about-scroll-section">
      <div className="container about-scroll-grid">
        <div className="about-scroll-intro">
          <p className="eyebrow">{label}</p>
          <h2>{title}</h2>
        </div>
        <div className="about-phrase-stack" aria-label={title}>
          {phrases.map((phrase, index) => (
            <p key={phrase} className="about-phrase" style={{ "--phrase-index": index }}>
              {phrase}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-media" aria-hidden="true" />
        <div className="container about-hero-copy">
          <p className="eyebrow">About Bliss</p>
          <h1>A travel brand for people who want the journey to feel considered.</h1>
          <p>
            Bliss Tours & Travel designs premium journeys around lifestyle, pace,
            occasion, and expectation, so every trip feels personal from the first
            conversation to the return home.
          </p>
        </div>
      </section>

      <ScrollPhraseSet
        label="Our belief"
        title="Travel should not feel assembled. It should feel understood."
        phrases={beliefPhrases}
      />

      <section className="about-split-section">
        <div className="container about-split">
          <div className="about-image-frame about-image-frame-tall" aria-hidden="true" />
          <div className="about-large-copy">
            <p className="eyebrow">Mission</p>
            <h2>Seamless travel, planned with care before you ever pack.</h2>
            <p>{company.mission}</p>
          </div>
        </div>
      </section>

      <ScrollPhraseSet
        label="How we work"
        title="The details become invisible. The experience becomes everything."
        phrases={valuePhrases}
      />

      <section className="about-immersive-section">
        <div className="container about-immersive">
          <p className="eyebrow">Brand story</p>
          <h2>{company.tagline}</h2>
          <p>{company.story}</p>
        </div>
      </section>

      <ScrollPhraseSet
        label="Who we serve"
        title="For travellers who want more than a booking confirmation."
        phrases={clientPhrases}
      />

      <section className="about-closing-section">
        <div className="container about-closing">
          <div>
            <p className="eyebrow">Vision</p>
            <h2>{company.vision}</h2>
            <p>{company.closing}</p>
          </div>
          <Button to="/contact">Start Planning</Button>
        </div>
      </section>
    </>
  );
}
