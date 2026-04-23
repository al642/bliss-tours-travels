import HeroSection from "../components/home/herosection";
import WhyChooseUs from "../components/home/whychooseus";
import FeaturedDestinations from "../components/home/featuredestinations";
import ServicesPreview from "../components/home/servicespreview";
import TestimonialsPreview from "../components/home/testimonials";
import CallToAction from "../components/home/calltoaction";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <FeaturedDestinations />
      <ServicesPreview />
      <TestimonialsPreview />
      <CallToAction />
    </>
  );
}
