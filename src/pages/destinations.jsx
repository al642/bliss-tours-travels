import PageBanner from "../components/layout/pagebanner";
import { destinations } from "../data/destinations";

export default function DestinationsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Destinations"
        title="Destinations chosen for beauty, comfort, and memory-making."
        text="Explore safari icons, island escapes, and mountain forests with guidance on the best seasons, signature experiences, and travel style for each place."
      />
      <section className="content-section">
        <div className="container card-grid">
          {destinations.map((destination) => (
            <article
              key={destination.slug}
              className="destination-card image-card"
              style={{ "--card-image": `url(${destination.image})` }}
            >
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
