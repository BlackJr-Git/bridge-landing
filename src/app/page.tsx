import HeroSection from "@/components/hero-section";
import SolutionsSection from "@/components/solutions-section";
import PositioningSection from "@/components/positioning-section";
import PremiumServicesSection from "@/components/premium-services-section";
import ServiceSignatureSection from "@/components/service-signature-section";
import ClubBridgeSection from "@/components/club-bridge-section";
import InvestmentEventSection from "@/components/investment-event-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <HeroSection />
        <PositioningSection />
        <SolutionsSection />
        <PremiumServicesSection />
        <ServiceSignatureSection />
        <ClubBridgeSection />
        <InvestmentEventSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
