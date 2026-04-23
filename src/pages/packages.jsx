import PageBanner from "../components/layout/pagebanner";
import { packages } from "../data/packages";

export default function PackagesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Packages"
        title="Sample journeys that feel ready to book."
        text="Inspired by the strongest safari sites, these packages are structured as sales-ready summaries instead of generic descriptions."
      />
      <section className="content-section">
        <div className="container card-grid compact-grid">
          {packages.map((trip) => (
            <article key={trip.title} className="info-card">
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
