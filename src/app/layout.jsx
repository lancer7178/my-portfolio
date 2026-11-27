import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { profile } from "@/data/profile";
import { homeTitle, siteSchema } from "@/data/seo";
import "@/styles/globals.css";

const outfit = localFont({
  src: "../fonts/outfit-variable.woff2",
  weight: "100 900",
  variable: "--font-outfit-sans",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../fonts/jetbrains-mono-variable.woff2",
  weight: "100 800",
  variable: "--font-mono-code",
  display: "swap",
  preload: false,
});

export const metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: homeTitle, template: `%s | ${profile.name}` },
  description: profile.description,
  icons: { icon: "/favicon.ico" },
};

export const viewport = { themeColor: "#06060A" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`} data-scroll-behavior="smooth">
      <body className="antialiased" suppressHydrationWarning>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        {children}
        <Footer />
        <StructuredData data={siteSchema} />
      </body>
    </html>
  );
}
