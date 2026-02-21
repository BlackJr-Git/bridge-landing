import HeroSection from "@/components/hero-section";
import SolutionsSection from "@/components/solutions-section";
import PositioningSection from "@/components/positioning-section";
import PremiumServicesSection from "@/components/premium-services-section";
import ServiceSignatureSection from "@/components/service-signature-section";
import ClubBridgeSection from "@/components/club-bridge-section";
import InvestmentEventSection from "@/components/investment-event-section";
import Testimonials from "@/components/testimonials";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PositioningSection />
      <SolutionsSection />
      <PremiumServicesSection />
      <ServiceSignatureSection />
      <ClubBridgeSection />
      <InvestmentEventSection />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
