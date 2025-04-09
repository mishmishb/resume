import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/30 via-pink-400/20 to-blue-400/30 dark:from-purple-800/30 dark:via-pink-700/20 dark:to-blue-700/30 backdrop-blur-xl rounded-none border border-white/20 ring-1 ring-white/10"></div>
      <div className="relative z-10 container mx-auto max-w-4xl p-8 rounded-none bg-gradient-to-br from-white/20 via-white/10 to-white/20 dark:from-black/20 dark:via-black/10 dark:to-black/20 backdrop-blur-xl border border-white/20 ring-1 ring-white/10 shadow-2xl">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-secondary dark:text-secondary-light mb-8 sm:mb-12">
          About Me
        </h2>
        <div className="text-base sm:text-lg text-foreground/90 dark:text-foreground-dark/90 space-y-6 leading-relaxed">
          <p>
            I am a DevOps Engineer with over 7 years of experience focused on delivering robust automation solutions and enhancing system reliability. I have been a key figure in complex projects, including introducing mTLS certification across server infrastructure using self-developed Python software and transitioning package building pipelines from Jenkins to GitLab CI for improved performance and visibility.
          </p>
          <p>
            My background includes automating server error handling with StackStorm, significantly reducing support staff alerts, and leading the development of performance testing frameworks. I thrive on solving problems, automating processes ("automate everything" perspective), and contributing effectively within both solo and large team projects using Agile methodologies.
          </p>
          <p>
            I possess strong communication skills, am self-motivated, task-oriented, and always open to constructive criticism. My goal is to leverage my extensive experience to enhance system efficiency, accelerate development cycles, or contribute to scaling backend services.
          </p>
        </div>

        {/* Sub-sections for Interests and Languages */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="p-6 bg-background/30 dark:bg-background-dark/30 backdrop-blur-sm rounded-lg shadow-md border border-white/10">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground dark:text-foreground-dark mb-4">Interests</h3>
            <ul className="list-disc list-inside text-foreground/80 dark:text-foreground-dark/80 space-y-2">
              <li>Managing a home server (Proxmox, VMs for media, DNS ad-blocking, game servers).</li>
              <li>Monitoring home server with Grafana & Telegram alerts.</li>
              <li>Exploring new technologies and home automation.</li>
              <li>Socialising, video games, reading, cycling, and traveling.</li>
            </ul>
          </div>
          <div className="p-6 bg-background/30 dark:bg-background-dark/30 backdrop-blur-sm rounded-lg shadow-md border border-white/10">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground dark:text-foreground-dark mb-4">Languages</h3>
            <ul className="list-disc list-inside text-foreground/80 dark:text-foreground-dark/80 space-y-2">
              <li>English (Native proficiency)</li>
              <li>German (Working proficiency)</li> {/* Adjusted based on resume */}
            </ul>
          </div>
        </div>

      </div>
      </div> {/* Close inner glassmorphic container */}
    </section>
  );
};

export default AboutSection;