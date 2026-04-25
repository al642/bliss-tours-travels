import SectionTitle from "../shared/sectiontitle";
import { destinations } from "../../data/destinations";

export default function FeaturedDestinations() {
  return (
    <section className="content-section alt-section">
      <div className="container">
        <SectionTitle
          eyebrow="Featured destinations"
          title="Lead with places people already dream about."
          text="Twiga Tours and Safari.com both make destinations immediately visible. That pattern works because visitors can picture themselves in the trip early."
        />

        <div className="card-grid">
          {destinations.map((destination) => (
            <article
              key={destination.slug}
              className="destination-card image-card"
              style={{ "--card-image": `url(${destination.image})` }}
            >
              <p className="destination-meta">
                {destination.country} • Best in {destination.season}
              </p>
              <h3>{destination.name}</h3>
              <p>{destination.blurb}</p>
              <ul>
                {destination.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
