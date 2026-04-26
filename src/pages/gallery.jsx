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
        title="A glimpse into the moments Bliss can shape."
        text="From safari mornings to coastal escapes and thoughtful welcome details, every journey is designed to feel beautiful in the moment and memorable long after."
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
