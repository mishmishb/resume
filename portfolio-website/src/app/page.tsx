import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsAchievementsSection from '@/components/sections/ProjectsAchievementsSection';
import ContactSection from '@/components/sections/ContactSection';
import AnimatedSection from '@/components/motion/AnimatedSection'; // Import animation wrapper

export default function Home() {
  return (
    <>
      <HeroSection /> {/* Hero usually doesn't need entry animation */}

      {/* Wrap subsequent sections for scroll animation */}
      <AnimatedSection id="about">
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection id="experience">
        <ExperienceSection />
      </AnimatedSection>

      <AnimatedSection id="skills">
        <SkillsSection />
      </AnimatedSection>

      <AnimatedSection id="projects">
        <ProjectsAchievementsSection />
      </AnimatedSection>

      <AnimatedSection id="contact">
        <ContactSection />
      </AnimatedSection>
    </>
  );
}
