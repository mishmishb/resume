'use client'; // Needed for framer-motion

import React, { useRef } from 'react'; // Import useRef
import { motion, useScroll, useTransform } from 'framer-motion'; // Import motion hooks

interface ProjectItem {
  title: string;
  description: string;
  tags?: string[];
}

interface AchievementItem {
    title: string;
    description: string;
}

const projectData: ProjectItem[] = [
  {
    title: "mTLS Certificate Lifecycle Management",
    description: "Developed Python-based software to automate mTLS certificate management across thousands of production servers daily, enhancing security and reliability as part of the IT-Grundschutz certification effort.",
    tags: ["Python", "Automation", "Security", "mTLS"]
  },
  {
    title: "CI/CD Pipeline Migration (Jenkins to GitLab CI)",
    description: "Overhauled package building pipelines by transitioning from Jenkins to GitLab CI, rewriting steps to improve performance, visibility, and maintainability.",
    tags: ["GitLab CI", "Jenkins", "CI/CD", "Automation", "Pipeline Optimization"]
  },
  {
    title: "Automated Server Error Response System",
    description: "Led the implementation of StackStorm to automate server error responses, handling dozens of alerts daily, reducing support staff load, and enabling platform growth.",
    tags: ["StackStorm", "Automation", "Error Handling", "System Reliability"]
  },
  {
    title: "Performance Testing Automation Framework",
    description: "Developed a comprehensive testing framework integrating Jenkins, MySQL, and Grafana with in-house tools to streamline performance testing, data collection, and analysis.",
    tags: ["Jenkins", "MySQL", "Grafana", "Automation", "Performance Testing", "Framework Development"]
  },
  {
    title: "OS Issue Root Cause Analysis Tool",
    description: "Created a Python program for data mining and pattern analysis, successfully identifying root causes for several long-standing OS issues, significantly improving system stability.",
    tags: ["Python", "Data Mining", "Problem Solving", "System Stability"]
  }
];

const achievementData: AchievementItem[] = [
    {
        title: "HPE’s Top Talent Intern Programme Winner",
        description: "Recognized as one of the top 22 interns (only Computing Intern awarded) for outstanding contributions, including the OS issue analysis tool."
    },
    {
        title: "ITIL® Foundation Certificate (v4)",
        description: "Completed ITIL Foundation Certificate in IT Service Management (April 2022)."
    }
];


const ProjectsAchievementsSection = () => {
  const sectionRef = useRef<HTMLElement>(null); // Create ref for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']); // Parallax effect

  return (
    // Add ref and overflow-hidden
    <section ref={sectionRef} id="projects" className="relative py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-500 overflow-hidden">
      {/* Wrap inner content in motion.div and apply transform */}
      <motion.div style={{ y }} className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-secondary dark:text-secondary-light mb-12 sm:mb-16">
          Key Projects & Achievements
        </h2>

        {/* Projects */}
        <div className="mb-16">
          {/* Use primary color for Projects subheading */}
          <h3 className="font-display text-2xl font-semibold text-primary dark:text-primary-light mb-8 text-center sm:text-left">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectData.map((project, index) => (
              // Use background colors
              <motion.div
                key={`project-${index}`}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 transition-colors duration-500" // Keep color transition, remove hover bg/shadow from here
                whileHover={{ scale: 1.03, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }} // Add scale and shadow via motion
                transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Spring physics for hover
              >
                {/* Use primary color for project titles */}
                <h4 className="font-display text-xl font-semibold text-primary dark:text-primary-light mb-3">{project.title}</h4>
                <p className="text-foreground/80 dark:text-foreground-dark/80 mb-4 leading-relaxed">{project.description}</p>
                {project.tags && (
                  <div className="flex flex-wrap mt-auto pt-4"> {/* Push tags to bottom */}
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="inline-block bg-gray-100 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 text-gray-700 dark:text-foreground-dark/80 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded transition-colors duration-500"> {/* Match skill tags */}
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          {/* Use secondary color for Achievements subheading */}
          <h3 className="font-display text-2xl font-semibold text-secondary dark:text-secondary-light mb-8 text-center sm:text-left">Achievements</h3>
          <div className="space-y-6">
            {achievementData.map((achievement, index) => (
               // Use background colors
               <div key={`achievement-${index}`} className="bg-white dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 p-6 rounded-lg shadow-sm transition-colors duration-500"> {/* Use white bg */}
                 {/* Use secondary color for achievement titles */}
                 <h4 className="font-display text-xl font-semibold text-secondary dark:text-secondary-light mb-2">{achievement.title}</h4>
                 <p className="text-foreground/80 dark:text-foreground-dark/80 leading-relaxed">{achievement.description}</p>
               </div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default ProjectsAchievementsSection;