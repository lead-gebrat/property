import ServicesSection from "@/components/services-section";
import HeroSection from "../components/hero-section";
import CustomerBenefitsSection from "@/components/why-us-section";
import PropertiesCarousel from "@/components/properties-section";
import AboutPage from "@/components/about-section";
import ContactPage from "@/components/contact-section";

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutPage />
      <PropertiesCarousel />
      <CustomerBenefitsSection />
      <ContactPage />
    </main>
  );
}
