import PageBanner from "../components/layout/pagebanner";
import { packages } from "../data/packages";

export default function PackagesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Packages"
        title="Curated journeys with room for personal touches."
        text="Start with a thoughtfully paced route, then let Bliss refine the stays, experiences, and special details around your travel style."
      />
      <section className="content-section">
        <div className="container card-grid compact-grid">
          {packages.map((trip) => (
            <article
              key={trip.title}
              className="info-card package-card image-card"
              style={{ "--card-image": `url(${trip.image})` }}
            >
              <p className="destination-meta">
                {trip.duration} • {trip.pace}
              </p>
              <h2>{trip.title}</h2>
              <p>{trip.summary}</p>
              <strong>{trip.price}</strong>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
