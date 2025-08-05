import {
  Header,
  HeroSection,
  FeaturesSection,
  WorkflowSection,
  AchievementsSection,
  TeamSection,
  Footer,
} from "../components/landing";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <AchievementsSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
