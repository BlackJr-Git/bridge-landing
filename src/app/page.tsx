import HeroSection from "@/components/hero-section";
import SolutionsSection from "@/components/solutions-section";
import PremiumServicesSection from "@/components/premium-services-section";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <HeroSection />
        <SolutionsSection />
        <PremiumServicesSection />
      </main>
    </div>
  );
}
