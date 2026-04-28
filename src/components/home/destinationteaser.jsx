import Button from "../shared/button";

export default function DestinationTeaser() {
  return (
    <section className="destination-teaser-section">
      <div className="container destination-teaser">
        <div className="destination-teaser-copy">
          <p className="eyebrow">Travel with a wider lens</p>
          <h2>Ready to see the world from a different angle?</h2>
          <p>
            Explore handpicked safari routes, island escapes, desert journeys, and cultural stays shaped around the way you want to travel.
          </p>
          <Button to="/destinations">Explore Destinations</Button>
        </div>
      </div>
    </section>
  );
}
