import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ThemeProvider} from "next-themes";
import "./globals.css";

import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";
import {PopupWidget} from "@/components/PopupWidget";
import About from "@/components/About";
import {Hero} from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Heart & Home Care",
  description: "Providing compassionate care for your loved ones",
  keywords: [
    "home care",
    "elderly care",
    "companion care",
    "personal care",
    "respite care",
    "dementia care",
    "heart and home care",
    "caregiving",
    "senior care",
    "in-home care",
    "care services",
    "caregivers",
    "healthcare",
    "wellness",
    "support",
    "independent living",
    "family support",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light" attribute="class">
          <Navbar />
          {/* <div>{children}</div> */}
          <Hero />
          <About />
          <Services />
          <Contact />
          <Footer />
          {/* <PopupWidget /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
