import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: {
    default: "Hokage Creative Labs | Digital Experiences & Branding",
    template: "%s | Hokage Creative Labs"
  },
  description: "Hokage Creative Labs is a collective of technologists, designers, and strategists dedicated to building digital legacies. We create world-class brands, websites, and digital products that stand out.",
  keywords: [
    "Hokage Creative Labs",
    "branding",
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
    title: "Hokage Creative Labs | Digital Experiences & Branding",
    description: "We build digital legacies for ambitious brands. Branding, web, UI/UX, and more.",
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
    title: "Hokage Creative Labs | Digital Experiences & Branding",
    description: "We build digital legacies for ambitious brands. Branding, web, UI/UX, and more.",
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
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
  