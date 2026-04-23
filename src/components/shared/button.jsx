import { Link } from "react-router-dom";

export default function Button({ to, href, children, variant = "primary" }) {
  const className = `button button-${variant}`;

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
