import HeroSection from "../components/home/herosection";
import WhyChooseUs from "../components/home/whychooseus";
import DestinationTeaser from "../components/home/destinationteaser";
import ServicesPreview from "../components/home/servicespreview";
import TestimonialsPreview from "../components/home/testimonials";
import CallToAction from "../components/home/calltoaction";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <DestinationTeaser />
      <ServicesPreview />
      <TestimonialsPreview />
      <CallToAction />
    </>
  );
}
