import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Konfigurasi Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

// METADATA CONFIGURATION
export const metadata: Metadata = {
  metadataBase: new URL("https://www.polimeritas.com/"),

  title: {
    default: "Polimeritas | Komunitas Polimer Sains & Teknologi",
    template: "%s | Polimeritas Indonesia",
  },
  description: "Komunitas yang bergerak di bidang polymer sains dan teknologi dari hulu hingga produk jadi. Memajukan masyarakat yang ahli, produktif, dan inovatif.",

  keywords: ["Polimeritas", "Polimer", "Sains", "Teknologi", "Komunitas", "Volunteer", "Plastik", "Lingkungan", "Daur Ulang", "Indonesia"],

  authors: [{ name: "Technology's Team Polimeritas" }],
  creator: "Polimeritas",
  publisher: "Polimeritas",

  // Open Graph
  openGraph: {
    title: "Polimeritas | Boost Your Brand Value",
    description: "Bergabunglah bersama komunitas polimer terbesar di Indonesia. Ahli, Produktif, Inovatif.",
    url: "https://www.polimeritas.com",
    siteName: "Polimeritas",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/img/kegiatan/festival relawan.jpg",
        width: 1200,
        height: 630,
        alt: "Polimeritas Community Activity",
      },
    ],
  },

  // Twitter Card 
  twitter: {
    card: "summary_large_image",
    title: "Polimeritas Indonesia",
    description: "Komunitas Sains & Teknologi Polimer Indonesia.",
    images: ["/img/kegiatan/festival relawan.jpg"],
  },

  // Icon di Tab Browser
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}