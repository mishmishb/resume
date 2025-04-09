import React from 'react';

const hardSkillsPrimary = [
  "Python", "CI/CD", "YAML", "StackStorm", "Linux", "Cloud Computing", "Ansible"
];

const hardSkillsSecondary = [
  "Containerisation", "Virtualisation", "Jenkins", "Bash", "Prometheus", "Grafana", "SaltStack", "Rundeck", "C++", "Go", "Atlassian Cloud"
];

const softSkills = [
  "Problem Solving", "Constructive Criticism", "Strong Communication", "Self-Motivated", "Task-Oriented", "Automation Mindset", "Agile Experience", "Team & Solo Project Experience"
];

const SkillTag = ({ skill }: { skill: string }) => (
  <span className="inline-block bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-foreground-dark/80 text-xs font-medium mr-2 mb-2 px-2.5 py-1 rounded-full transition-colors duration-500">
    {skill}
  </span>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-background dark:bg-background-dark transition-colors duration-500">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-secondary dark:text-secondary-light mb-12 sm:mb-16">
          Skills
        </h2>

        <div className="mb-12 p-6 bg-background/30 dark:bg-background-dark/30 backdrop-blur-sm rounded-lg shadow-md border border-white/10">
          <h3 className="font-display text-2xl font-semibold text-[#7F7EFF] dark:text-[#7F7EFF] mb-6 text-center sm:text-left">Technical Skills</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-[#7F7EFF] dark:text-[#7F7EFF] mb-3">Primary</h4>
            <div className="flex flex-wrap justify-center sm:justify-start">
              {hardSkillsPrimary.map((skill, index) => <SkillTag key={`primary-${index}`} skill={skill} />)}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#7F7EFF] dark:text-[#7F7EFF] mb-3">Secondary</h4>
            <div className="flex flex-wrap justify-center sm:justify-start">
              {hardSkillsSecondary.map((skill, index) => <SkillTag key={`secondary-${index}`} skill={skill} />)}
            </div>
          </div>
        </div>

        <div className="p-6 bg-background/30 dark:bg-background-dark/30 backdrop-blur-sm rounded-lg shadow-md border border-white/10">
          <h3 className="font-display text-2xl font-semibold text-[#7F7EFF] dark:text-[#7F7EFF] mb-6 text-center sm:text-left">Soft Skills</h3>
          <div className="flex flex-wrap justify-center sm:justify-start">
            {softSkills.map((skill, index) => <SkillTag key={`soft-${index}`} skill={skill} />)}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;