'use client'; // Required for Framer Motion hooks/components

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string; // Allow passing additional classes
    id?: string; // Allow passing id for navigation
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', id }) => {
    return (
        <motion.section
            id={id}
            className={className} // Pass through className
            initial={{ opacity: 0, y: 30, scale: 0.98 }} // Start invisible, slightly down, and slightly smaller
            whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animate to visible, original position, and original scale
            viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% is visible
            transition={{ duration: 0.6, ease: "easeOut" }} // Slightly longer duration
        >
            {children}
        </motion.section>
    );
};

export default AnimatedSection;