import Button from "../components/shared/button";

export default function NotFoundPage() {
  return (
    <section className="content-section">
      <div className="container centered-block">
        <p className="eyebrow">404</p>
        <h1>This route has not been planned yet.</h1>
        <p>The rest of the site is ready to explore from the homepage.</p>
        <Button to="/">Back Home</Button>
      </div>
    </section>
  );
}
