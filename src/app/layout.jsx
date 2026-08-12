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

const siteUrl = "https://abdullatif-selem.vercel.app";
const siteDescription =
  "Frontend Engineer and Creative Developer building thoughtful digital products, interactive interfaces, and modern web experiences.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abdulatif — Frontend Engineer & Creative Developer",
    template: "%s | Abdulatif",
  },
  description: siteDescription,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Abdulatif — Frontend Engineer & Creative Developer",
    description: siteDescription,
    siteName: "Abdulatif Selem",
    images: [{ url: "/parallax.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulatif — Frontend Engineer & Creative Developer",
    description: siteDescription,
    images: ["/parallax.png"],
  },
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
