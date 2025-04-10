import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar"; // Import Navbar
import Footer from "@/components/layout/Footer"; // Import Footer
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"; // Import SpeedInsights
import { Analytics } from "@vercel/analytics/react"; // Import Analytics

// Configure Manrope font for body text
const manrope = Manrope({
  subsets: ["latin"],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-body',
});

// Configure Outfit font for display headings
const outfit = Outfit({
  subsets: ["latin"],
  weight: ['700', '800'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: "Michael Bennett - DevOps Engineer Portfolio", // Updated Title
  description: "Portfolio website for Michael Bennett, showcasing DevOps skills and experience.", // Updated Description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${outfit.variable} font-sans antialiased bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Flex column layout to push footer down */}
          <div className="flex flex-col min-h-screen">
            <Navbar />
            {/* Main content area grows to fill space, pt-16 for fixed navbar height */}
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
