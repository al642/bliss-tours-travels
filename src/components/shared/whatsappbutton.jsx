import { company } from "../../data/company";

export default function WhatsappButton() {
  return (
    <a
      className="whatsapp-button"
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  );
}
