import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google"; // Import Poppins
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar"; // Import Navbar
import Footer from "@/components/Footer"; // Import Footer
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"; // Import SpeedInsights
import { Analytics } from "@vercel/analytics/react"; // Import Analytics

// Configure Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Configure Poppins font for display headings
const poppins = Poppins({
  subsets: ["latin"],
  display: 'swap', // Ensure text remains visible during font load
  weight: ['700', '800'], // Load bold and extrabold weights
  variable: "--font-display", // Define CSS variable for display font
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
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark`}
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
