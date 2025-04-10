'use client'; // Needed for framer-motion hooks

import React from 'react';

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
            "Resolved OS issues, enhancing system reliability.",
            "**Automated mTLS certificate lifecycle** for thousands of servers daily.",
            "**Secured IT-Grundschutz certification** from the German government.",
            "**Migrated CI/CD pipelines** from Jenkins to GitLab CI, improving performance and visibility.",
            "**Automated server error response** with StackStorm, reducing support load.",
            "Primary contact for GitLab CI, improving pipeline efficiency across teams."
        ]
    },
    {
        role: "Software Engineer",
        company: "Hewlett Packard Enterprise",
        duration: "March 2020 – July 2021",
        points: [
            "Developed a testing automation framework (Jenkins, MySQL, Grafana), streamlining performance testing.",
            "Orchestrated complex configurations and collected key performance metrics.",
            "Delivered test-driven features and bug fixes for HPE Nimble.",
            "Mentored interns, served as STEM Ambassador, and presented new technologies."
        ]
    },
    {
        role: "Systems Engineer",
        company: "Hewlett Packard Enterprise",
        duration: "Jul 2017 – March 2020",
        points: [
            "Managed and maintained HPE servers and storage.",
            "Developed Bash scripting and Unix system administration skills.",
            "Fostered collaborative work relationships.",
            "Automated log synchronization and routine tasks.",
            "**Created Python tool for root cause analysis**, earning Intern of the Year award.",
            "Recognized for reliability and helpfulness."
        ]
    }
];

const ExperienceSection = () => {

    return (
        <section id="experience" className="relative py-16 sm:py-20 md:py-24 overflow-hidden transition-colors duration-500">
            {/* Removed per-section gradient overlay for seamless fixed background */}
            <div className="relative z-10 container mx-auto max-w-4xl p-8 rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/20 ring-1 ring-white/10 shadow-2xl">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-primary dark:text-primary-light mb-12 sm:mb-16">
                    Work Experience
                </h2>
                <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
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
                                <ul className="space-y-3 text-base text-foreground/90 dark:text-foreground-dark/90 leading-relaxed">
                                    {item.points.map((point, pIndex) => (
                                        <li key={pIndex} className="flex items-start gap-2">
                                            <span className="inline-flex items-center text-primary">✓</span>
                                            <span>
                                                {point.includes("mTLS") ? (
                                                    <>
                                                        Automated mTLS Certificate Lifecycle for thousands of servers daily.
                                                    </>
                                                ) : point.includes("IT-Grundschutz") ? (
                                                    <>
                                                        Secured IT-Grundschutz Certification from the German government.
                                                    </>
                                                ) : point.includes("CI/CD") ? (
                                                    <>
                                                        Migrated CI/CD Pipelines from Jenkins to GitLab CI, improving performance and visibility.
                                                    </>
                                                ) : point.includes("server error response") ? (
                                                    <>
                                                        Automated Server Error Response with StackStorm, reducing support load.
                                                    </>
                                                ) : point.includes("Python tool") ? (
                                                    <>
                                                        Created Python Tool for root cause analysis, earning Intern of the Year award.
                                                    </>
                                                ) : (
                                                    point
                                                )}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div> {/* Close inner glassmorphic container */}
        </section>
    );
};

export default ExperienceSection;