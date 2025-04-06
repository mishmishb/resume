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
    <section ref={sectionRef} id="experience" className="relative py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-500 overflow-hidden">
      <motion.div style={{ y }} className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-secondary dark:text-secondary-light mb-12 sm:mb-16">
          Work Experience
        </h2>
        <div className="space-y-10">
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 border-l border-secondary/30 dark:border-secondary-light/30">
              <div className="absolute -left-[7px] top-1 w-3 h-3 bg-secondary dark:bg-secondary-light rounded-full border-2 border-gray-50 dark:border-gray-800 transition-colors duration-500"></div>
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
    </section>
  );
};

export default ExperienceSection;