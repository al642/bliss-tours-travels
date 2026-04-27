import PageBanner from "../components/layout/pagebanner";
import { galleryItems } from "../data/gallery";

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
            <article
              key={item.src}
              className="gallery-tile"
              style={{ "--gallery-image": `url("${item.src}")` }}
            >
              <span>{item.title}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
