import { useState, useEffect } from "react";
import DeveloperSection from "@/components/landing/DeveloperSection";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import HowWorkSection from "@/components/landing/HowWorkSection";
import EnterpriseSection from "@/components/landing/EnterpriseSection";
import FinalCTASection from "@/components/landing/FinalCTASection";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.01 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-zinc-950 to-slate-950 text-white overflow-hidden">
      {/* Hero Section */}
      <HeroSection isVisible={isVisible.hero} />
      {/* Problem Section */}
      <ProblemSection isVisible={isVisible.problem} />
      {/* How It Works Section */}
      <HowWorkSection isVisible={isVisible["how-it-works"]} />
      {/* For Developers Section */}
      <DeveloperSection isVisible={isVisible.developers} />
      {/* Enterprise Section */}
      <EnterpriseSection isVisible={isVisible.enterprise} />
      {/* Final CTA Section */}
      <FinalCTASection isVisible={isVisible.cta} />
    </div>
  );
};

export default HomePage;
