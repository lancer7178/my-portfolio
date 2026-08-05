import { Outfit, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-code",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Abdulatif | Front-End Developer Portfolio",
    template: "%s | Abdulatif",
  },
  description:
    "Front-End Developer specializing in React, Next.js, and modern web technologies. Building beautiful, high-performance web experiences.",
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  themeColor: "#06060A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
        <Footer year={new Date().getFullYear()} name="Abdulatef selem" />
        <Navbar />
      </body>
    </html>
  );
}
