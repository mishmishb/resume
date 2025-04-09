'use client'; // Needed for framer-motion hooks

import React, { useRef } from 'react'; // Import useRef
import { motion, useScroll, useTransform } from 'framer-motion'; // Import motion hooks

interface ExperienceItem {
  role: string;
  company: string;
  duration?: string;
  points: string[];
}

const experienceData: ExperienceItem[] = [
  {
    role: "DevOps Engineer",
    company: "IONOS SE",
    duration: "September 2021 – Present",
    points: [
      "Analysed OS issues to resolve server instability, enhancing system reliability.",
      "Led introduction of mTLS certification using self-developed Python-based certificate lifecycle management software for 1000s of production servers daily.",
      "Contributed to securing IT-Grundschutz certificate from the German government.",
      "Overhauled package building pipelines, transitioning from Jenkins to GitLab CI, improving performance and visibility.",
      "Implemented StackStorm to automate server error response, handling dozens of alerts daily and reducing support staff load.",
      "Acted as primary contact for GitLab CI inquiries, improving pipeline efficiency for multiple teams."
    ]
  },
  {
    role: "Software Engineer",
    company: "Hewlett Packard Enterprise",
    duration: "March 2020 – July 2021",
    points: [
      "Led 6-month project developing a testing automation framework (Jenkins, MySQL, Grafana), streamlining performance testing.",
      "Framework orchestrated complex configurations, collected key metrics (performance, bottlenecks).",
      "Transitioned to full software engineering team (HPE Nimble), delivering test-driven features and bug fixes.",
      "Mentored interns, served as STEM Ambassador, presented new technologies."
    ]
  },
  {
    role: "Systems Engineer",
    company: "Hewlett Packard Enterprise",
    duration: "Jul 2017 – March 2020",
    points: [
      "Managed and maintained HPE servers and storage.",
      "Developed proficiency in Bash scripting and Unix system administration.",
      "Fostered collaborative work relationships.",
      "Automated log synchronization and other tasks via scripting.",
      "Created Python program for data mining/pattern analysis, discovering root causes of OS issues (earned Intern of the Year award).",
      "Established reputation for reliability and helpfulness."
    ]
  }
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null); // Create ref for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"] // Track scroll progress from when section starts entering to when it fully leaves
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']); // Adjust '-10%' for more/less effect

  return (
    <section ref={sectionRef} id="experience" className="relative py-16 sm:py-20 md:py-24 overflow-hidden transition-colors duration-500">
      {/* Removed per-section gradient overlay for seamless fixed background */}
      <div className="relative z-10 container mx-auto max-w-4xl p-8 rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/20 ring-1 ring-white/10 shadow-2xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-primary dark:text-primary-light mb-12 sm:mb-16">
          Work Experience
        </h2>
      <motion.div style={{ y }} className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-10">
          {experienceData.map((item, index) => (
            <div key={index} className="relative p-6 bg-background/30 dark:bg-background-dark/30 backdrop-blur-sm rounded-lg shadow-md border border-white/10 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
              {/* Apply glassmorphism to each experience item card */}
              {/* Keep the timeline dot, adjust position due to padding and border color for contrast */}
              <div className="absolute -left-[7px] top-8 w-3 h-3 bg-primary dark:bg-primary-light rounded-full border-2 border-white dark:border-gray-900 transition-colors duration-500"></div>
              {item.duration && (
                <p className="text-sm font-medium text-primary dark:text-primary-light mb-1">{item.duration}</p>
              )}
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground dark:text-foreground-dark mb-1">{item.role}</h3>
              <p className="text-lg font-medium text-foreground/80 dark:text-foreground-dark/80 mb-3">{item.company}</p>
              <ul className="list-disc list-outside pl-5 space-y-2 text-base text-foreground/90 dark:text-foreground-dark/90 leading-relaxed">
                {item.points.map((point, pIndex) => (
                  <li key={pIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
      </div> {/* Close inner glassmorphic container */}
    </section>
  );
};

export default ExperienceSection;