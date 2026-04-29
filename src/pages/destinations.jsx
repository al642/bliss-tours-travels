import { useMemo, useState } from "react";
import PageBanner from "../components/layout/pagebanner";
import { destinations } from "../data/destinations";

const imageExtensions = ["jpg", "jpeg", "png", "webp", "avif"];

function getDestinationImageCandidates(destination) {
  const localNames = [
    destination.slug,
    destination.name.toLowerCase().replaceAll(" ", "-"),
    destination.country.toLowerCase().replaceAll(" ", "-"),
    "cover",
    "hero",
    "image",
    "photo",
    "1"
  ];

  const localImages = localNames.flatMap((name) =>
    imageExtensions.flatMap((extension) => [
      `/images/destinations/${destination.slug}/${name}.${extension}`,
      `/images/destinations/${destination.slug}/${name.toUpperCase()}.${extension}`,
      `/images/destinations/${destination.slug}/${name}.${extension.toUpperCase()}`
    ])
  );

  return [...new Set([destination.image, ...localImages, ...(destination.fallbackImages || [])])];
}

function DestinationCardImage({ destination }) {
  const candidates = useMemo(() => getDestinationImageCandidates(destination), [destination]);
  const [imageIndex, setImageIndex] = useState(0);
  const src = candidates[imageIndex];

  if (!src) {
    return null;
  }

  return (
    <img
      className="destination-card-image"
      src={src}
      alt=""
      loading="lazy"
      onError={() => setImageIndex((index) => index + 1)}
    />
  );
}

export default function DestinationsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Destinations"
        title="Places made for unforgettable moments."
        text="Explore safari icons, island escapes, and mountain forests with guidance on the best seasons, signature experiences, and travel style for each place."
      />
      <section className="content-section">
        <div className="destinations-rail-wrap">
          <div className="container destinations-rail" aria-label="Destination cards">
            {destinations.map((destination) => (
              <article
                key={destination.slug}
                className="destination-card image-card"
                tabIndex="0"
                aria-label={`${destination.name}, ${destination.country}`}
              >
                <DestinationCardImage destination={destination} />
                <div className="destination-card-copy">
                  <p className="destination-meta">{destination.country}</p>
                  <h2>{destination.name}</h2>
                  <div className="destination-details">
                    <p>{destination.blurb}</p>
                    <p>
                      <strong>Best time:</strong> {destination.season}
                    </p>
                    <ul>
                      {destination.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
