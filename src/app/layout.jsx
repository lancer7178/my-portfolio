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
  "Product Designer and Frontend Engineer who designs intuitive digital experiences and turns them into scalable, production-ready products.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abdulatif — Product Designer & Frontend Engineer",
    template: "%s | Abdulatif",
  },
  description: siteDescription,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Abdulatif — Product Designer & Frontend Engineer",
    description: siteDescription,
    siteName: "Abdulatif Selem",
    images: [{ url: "/websites-cover/parallax.png", width: 1835, height: 887 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulatif — Product Designer & Frontend Engineer",
    description: siteDescription,
    images: ["/websites-cover/parallax.png"],
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
