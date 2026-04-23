import PageBanner from "../components/layout/pagebanner";

const galleryItems = [
  "Safari departure mornings",
  "Luxury lodge sunsets",
  "Beach extensions on the coast",
  "Corporate incentive moments",
  "Wildlife close-ups",
  "Custom welcome details"
];

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        eyebrow="Gallery"
        title="A visual page ready for real photography."
        text="Travel websites live or die by photography. These placeholders show how the gallery can support the brand once image assets are added."
      />
      <section className="content-section">
        <div className="container gallery-grid">
          {galleryItems.map((item) => (
            <article key={item} className="gallery-tile">
              <span>{item}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
