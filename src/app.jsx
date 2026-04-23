import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import WhatsappButton from "./components/shared/whatsappbutton";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
