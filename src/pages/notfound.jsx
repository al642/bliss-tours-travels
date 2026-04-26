import Button from "../components/shared/button";

export default function NotFoundPage() {
  return (
    <section className="content-section">
      <div className="container centered-block">
        <p className="eyebrow">404</p>
        <h1>Off the itinerary.</h1>
        <p>Return home to continue exploring Bliss Tours & Travel.</p>
        <Button to="/">Back Home</Button>
      </div>
    </section>
  );
}
