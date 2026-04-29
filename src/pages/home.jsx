import HeroSection from "../components/home/herosection";
import WhyChooseUs from "../components/home/whychooseus";
import ServicesPreview from "../components/home/servicespreview";
import TestimonialsPreview from "../components/home/testimonials";
import CallToAction from "../components/home/calltoaction";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServicesPreview />
      <TestimonialsPreview />
      <CallToAction />
    </>
  );
}
