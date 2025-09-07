import HeroSection from "@/components/HeroSection";
import RealTimeDashboard from "@/components/RealTimeDashboard";
import UniversityLeaderboard from "@/components/UniversityLeaderboard";
import TransparencyWall from "@/components/TransparencyWall";
import SocialViralSection from "@/components/SocialViralSection";
import FloatingDonationButton from "@/components/FloatingDonationButton";

const Index = () => {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <RealTimeDashboard />
        <UniversityLeaderboard />
        <TransparencyWall />
        <SocialViralSection />
      </main>
      <FloatingDonationButton />
    </>
  );
};

export default Index;