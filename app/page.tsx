import Image from "next/image";
import Navbar from "./components/sections/layout/Navbar";
import Hero from "./components/sections/Hero";
import AboutSection from "./components/sections/About";
import FeatureSections from "./components/sections/FeatureSections";
import ServicesCarousel from "./components/sections/SpiritualServicesCarousel";
import TestimonialSection from "./components/sections/TestimonialSection";
import FoundationSection from "./components/sections/FoundationSection";
import ReconnectSection from "./components/sections/ReconnectSection";
import Footer from "./components/sections/layout/Footer";
export default function Home() {
  return (
    <main >
      <Navbar />
      <Hero />
      <AboutSection />
      <FeatureSections />
      <ServicesCarousel />
      <FoundationSection />
      <TestimonialSection />
      <ReconnectSection />
      <Footer />

    </main>
  );
}
