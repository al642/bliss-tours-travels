export default function PageBanner({ eyebrow, title, text }) {
  return (
    <section className="page-banner">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
