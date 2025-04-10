import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-500">
            {/* Removed per-section gradient overlay for seamless fixed background */}
            <div className="relative z-10 container mx-auto max-w-4xl p-8 rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/20 ring-1 ring-white/10 shadow-2xl">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-primary dark:text-primary-light mb-8 sm:mb-12">
                        About Me
                    </h2>
                    <div className="text-base sm:text-lg text-foreground/90 dark:text-foreground-dark/90 space-y-8 leading-relaxed">
                        {/* Short Intro */}
                        <p className="text-center sm:text-left">
                            DevOps Engineer with 7+ years of experience delivering automation solutions that enhance system reliability and accelerate development cycles.
                        </p>

                        {/* Key Highlights */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-primary dark:text-primary-light">Key Highlights</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Led mTLS certificate automation for thousands of servers.</li>
                                <li>Migrated CI/CD pipelines from Jenkins to GitLab CI.</li>
                                <li>Automated server error handling with StackStorm.</li>
                                <li>Strong communicator and problem solver.</li>
                            </ul>
                        </div>

                        {/* Philosophy / Core Values */}
                        <div className="p-4 bg-white/10 dark:bg-black/10 rounded-lg border border-white/20 ring-1 ring-white/10 shadow transition-all duration-500 ease-in-out italic text-center">
                            Focused on building robust, automated solutions that scale.
                        </div>
                    </div>

                    {/* Sub-sections for Interests and Languages */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div className="p-6 bg-white/20 dark:bg-black/20 backdrop-blur-xl rounded-lg shadow-md border border-white/20 ring-1 ring-white/10 shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
                            <h3 className="text-xl sm:text-2xl font-semibold text-foreground dark:text-foreground-dark mb-4">Interests</h3>
                            <ul className="list-disc list-inside text-foreground/80 dark:text-foreground-dark/80 space-y-2">
                                <li>Managing a home server (Proxmox, VMs for media, DNS ad-blocking, game servers).</li>
                                <li>Monitoring home server with Grafana & Telegram alerts.</li>
                                <li>Exploring new technologies and home automation.</li>
                                <li>Socialising, video games, reading, cycling, and traveling.</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-white/20 dark:bg-black/20 backdrop-blur-xl rounded-lg shadow-md border border-white/20 ring-1 ring-white/10 shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
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