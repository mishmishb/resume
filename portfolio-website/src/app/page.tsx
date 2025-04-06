import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsAchievementsSection from '@/components/ProjectsAchievementsSection';
import ContactSection from '@/components/ContactSection';
import AnimatedSection from '@/components/AnimatedSection'; // Import animation wrapper

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
