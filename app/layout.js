import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Hokage Creative Labs | Digital Experiences & Brand Identity Design",
    template: "%s | Hokage Creative Labs"
  },
  description: "Hokage Creative Labs is a collective of technologists, designers, and strategists dedicated to building digital legacies. We create world-class brand identity design, websites, and digital products that stand out.",
  keywords: [
    "Hokage Creative Labs",
    "brand identity design",
    "web development",
    "UI/UX",
    "digital agency",
    "creative studio",
    "Nigeria",
    "design",
    "software",
    "SEO",
    "eCommerce"
  ],
  openGraph: {
    title: "Hokage Creative Labs | Digital Experiences & Brand Identity Design",
    description: "We build digital legacies for ambitious partners. Brand identity design, web, UI/UX, and more.",
    url: "https://hokagecreativelabs.com/",
    siteName: "Hokage Creative Labs",
    images: [
      {
        url: "/Logo-Blue.jpg",
        width: 1200,
        height: 630,
        alt: "Hokage Creative Labs Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hokage Creative Labs | Digital Experiences & Brand Identity Design",
    description: "We build digital legacies for ambitious partners. Brand identity design, web, UI/UX, and more.",
    site: "@hokagecreativelabs",
    images: [
      "/Logo-Blue.jpg"
    ]
  },
  icons: {
    icon: "/nobg-logo.png",
    shortcut: "/nobg-logo.png",
    apple: "/nobg-logo.png"
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} min-h-screen flex flex-col bg-white font-sans antialiased`}
      >
        <Navbar />
        <main className="flex-grow pt-24 sm:pt-28 lg:pt-[7.5rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
  