import ServicesSection from "@/components/services-section";
import HeroSection from "../components/hero-section";
import CustomerBenefitsSection from "@/components/why-us-section";
import PropertiesCarousel from "@/components/properties-section";

export default function Page() {
  return  <main className="min-h-screen">
    <HeroSection />
      <ServicesSection />
           <PropertiesCarousel />
      <CustomerBenefitsSection />
 
    </main>
  
}
