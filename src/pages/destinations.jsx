import PageBanner from "../components/layout/pagebanner";
import { destinations } from "../data/destinations";

export default function DestinationsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Destinations"
        title="The experiences should feel tangible, not abstract."
        text="Each destination card is written to quickly communicate place, season, and the kind of traveller it suits."
      />
      <section className="content-section">
        <div className="container card-grid">
          {destinations.map((destination) => (
            <article key={destination.slug} className="destination-card">
              <p className="destination-meta">{destination.country}</p>
              <h2>{destination.name}</h2>
              <p>{destination.blurb}</p>
              <p>
                <strong>Best time:</strong> {destination.season}
              </p>
              <ul>
                {destination.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
