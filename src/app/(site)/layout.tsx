"use client";

// Import necessary components and dependencies
import Footer from "@/components/Footer"; // Footer component for the page
import Navbar from "@/components/Navbar"; // Navbar component for navigation
import { ThemeProvider } from "next-themes"; // Theme provider for dark/light mode
import { Inter } from "next/font/google"; // Google font Inter
import NextTopLoader from "nextjs-toploader"; // Top loader for page transitions
import "../../styles/globals.css"; // Global CSS styles
import AuthProvider from "../context/AuthContext"; // Authentication context provider
import ToasterContext from "../context/ToastContext"; // Toast notification context provider

// Load the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// RootLayout component to wrap the entire application
export default function RootLayout({
  children, // Children passed to the layout (pages and components)
}: Readonly<{
  children: React.ReactNode; // Type for children prop
}>) {
  return (
    // The HTML structure with explicit lang and className for consistency
    <html lang="en" className="h-full w-full">
      {/* Body element with styles and Google font applied */}
      <body
        className={`${inter.className} h-full w-full bg-gray-50 dark:bg-black`}
      >
        {/* NextTopLoader for visual indication of page loading */}
        <NextTopLoader
          color="#006BFF" // Color of the loader
          crawlSpeed={300} // Speed of the loading animation
          showSpinner={false} // Disable the spinner
          shadow="none" // No shadow under the loader
        />
        {/* ThemeProvider to handle dark/light theme switching */}
        <ThemeProvider
          enableSystem={false} // Disable system theme detection
          attribute="class" // Applies a class to body for themes
          defaultTheme="dark" // Default theme is dark
        >
          {/* Context providers for authentication and toast notifications */}
          <AuthProvider>
            <ToasterContext />
            {/* Navbar at the top */}
            <Navbar />
            {/* Main content of the application */}
            {children}
            {/* Footer at the bottom */}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
