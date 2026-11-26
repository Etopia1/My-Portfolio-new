import fs from "node:fs";
import path from "node:path";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsBandSection } from "@/components/sections/StatsBandSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

function findProfileImage(): string | null {
  const candidates = ["profile.jpg", "profile.jpeg", "profile.png", "profile.webp"];
  for (const filename of candidates) {
    if (fs.existsSync(path.join(process.cwd(), "public", filename))) {
      return `/${filename}`;
    }
  }
  return null;
}

export default function HomePage() {
  const profileImageSrc = findProfileImage();

  return (
    <>
      <HeroSection profileImageSrc={profileImageSrc} />
      <ProjectsSection />
      <ServicesSection />
      <StatsBandSection />
      <TestimonialsSection />
      <ProcessSection />
      <AboutSection />
      <SkillsSection />
      <GitHubSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
