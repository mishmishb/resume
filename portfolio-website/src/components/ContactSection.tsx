import React from 'react';

// Basic SVG Icons
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor"> {/* Fill inherits text color */}
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor"> {/* Fill inherits text color */}
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" fill="currentColor" viewBox="0 0 24 24"> {/* Fill inherits text color */}
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);


const ContactSection = () => {
  const email = "mbennett156@gmail.com";
  const linkedInUrl = "https://linkedin.com/in/michael-a-bennett";

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-background dark:bg-background-dark transition-colors duration-500">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary dark:text-secondary-light mb-6">
          Get In Touch
        </h2>
        <p className="text-lg text-foreground/80 dark:text-foreground-dark/80 mb-10 leading-relaxed">
          Feel free to reach out if you'd like to discuss opportunities, projects, or just connect!
        </p>

        {/* Apply glassmorphism to the links container */}
        <div className="inline-block p-6 bg-background/30 dark:bg-background-dark/30 backdrop-blur-sm rounded-lg shadow-md border border-white/10">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center text-lg text-primary hover:underline hover:underline-offset-4 transition-all"
          >
            <MailIcon />
            {email}
          </a>

          {/* LinkedIn */}
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg text-primary hover:underline hover:underline-offset-4 transition-all"
          >
            <LinkedInIcon />
            LinkedIn Profile
          </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;