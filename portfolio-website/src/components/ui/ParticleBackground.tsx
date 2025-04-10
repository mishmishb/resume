'use client';

import React, { useMemo, useEffect, useState } from 'react';
import type { Engine } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Corrected import path
import { loadSlim } from "@tsparticles/slim"; // Corrected import path
import { useTheme } from 'next-themes';
import { primaryColor, foregroundDark, foregroundLight } from '@/theme';

// Resolve the full Tailwind config to get actual color values

const ParticleBackground = () => {
    const [init, setInit] = useState(false);
    const { resolvedTheme } = useTheme(); // Use resolvedTheme for reliable light/dark check

    // Initialize tsparticles engine (done once on mount)
    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particleOptions = useMemo(() => {
        // Get color values directly from imported config, provide fallbacks
        // Use 'as any' to bypass stricter type checking on nested theme object

        // Determine colors based on the current theme
        const particleColor = resolvedTheme === 'dark' ? foregroundDark : foregroundLight;
        // Use primary color for links, maybe slightly less opaque
        const linkColor = primaryColor;

        // Remove explicit type, rely on inference
        const options = {
            background: {
                color: {
                    value: 'transparent', // Background is handled by the parent section/layout
                },
            },
            fpsLimit: 60, // Lower fpsLimit if performance is an issue
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: 'repulse', // Subtle repulsion effect on hover
                    },
                    // onClick: { enable: true, mode: 'push' }, // Optional: push particles on click
                },
                modes: {
                    repulse: {
                        distance: 80,
                        duration: 0.4,
                    },
                    // push: { quantity: 4 },
                },
            },
            particles: {
                color: {
                    value: particleColor, // Use theme-dependent color
                },
                links: {
                    color: linkColor, // Use theme-dependent color
                    distance: 150,
                    enable: true,
                    opacity: 0.2, // Make links subtle
                    width: 1,
                },
                collisions: {
                    enable: false, // Disable collisions for smoother movement
                },
                move: {
                    direction: 'none' as const, // Use 'as const' for literal type inference
                    enable: true,
                    outModes: {
                        default: 'bounce' as const, // Use 'as const' for literal type inference
                    },
                    random: true, // Random movement direction
                    speed: 0.5, // Slow speed
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 1000, // Adjust density area
                    },
                    value: 50, // Start with a moderate number of particles
                },
                opacity: {
                    value: 0.3, // Make particles subtle
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: { min: 1, max: 3 }, // Small particle size
                },
            },
            detectRetina: true,
        };
        return options; // Return inferred options type
    }, [resolvedTheme]); // Re-calculate options when theme changes

    if (!init) {
        return null; // Don't render anything until engine is initialized
    }

    return (
        <Particles
            id="tsparticles"
            options={particleOptions}
            className="absolute inset-0 -z-10" // Position behind content
        />
    );
};

export default ParticleBackground;