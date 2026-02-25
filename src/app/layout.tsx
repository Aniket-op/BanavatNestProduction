import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://banavatnest.com"),
  title: {
    default: "BanavatNest",
    template: "%s | BanavatNest",
  },
  description:
    "BanavatNest transforms curiosity into practical, scalable, and impactful solutions through systematic investigation in AI, Cybersecurity, Smart Systems, and Agriculture.",
  keywords: [
    "Research",
    "Innovation",
    "AI",
    "Machine Learning",
    "Cybersecurity",
    "Agriculture",
    "Smart Systems",
    "BanavatNest",
    "R&D",
    "IoT",
    "Data Science",
    "Technology Transfer",
  ],
  authors: [{ name: "BanavatNest Private Limited" }],
  creator: "BanavatNest Private Limited",
  publisher: "BanavatNest Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "BanavatNest | Research-Led Innovation Ecosystem",
    description:
      "BanavatNest transforms curiosity into practical, scalable, and impactful solutions through systematic investigation.",
    url: "https://banavatnest.com",
    siteName: "BanavatNest",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "BanavatNest — Research-Led Innovation Ecosystem",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BanavatNest | Research-Led Innovation Ecosystem",
    description:
      "BanavatNest transforms curiosity into practical, scalable, and impactful solutions through systematic investigation.",
    images: ["/logo.jpg"],
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
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  alternates: {
    canonical: "https://banavatnest.com",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BanavatNest Private Limited",
  alternateName: "BanavatNest",
  url: "https://banavatnest.com",
  logo: "https://banavatnest.com/logo.jpg",
  description:
    "BanavatNest transforms curiosity into practical, scalable, and impactful solutions through systematic investigation in AI, Cybersecurity, Smart Systems, and Agriculture.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-99340-44777",
    contactType: "General Inquiry",
    email: "info@banavatnest.com",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.linkedin.com/company/banavatnest-pvt-ltd/",
    "https://www.facebook.com/profile.php?id=61587883936129",
  ],
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Dr. Sukhdev Singh",
      jobTitle: "Director",
    },
    {
      "@type": "Person",
      name: "Dr. Sangita Roy",
      jobTitle: "Director",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: "IN",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Cybersecurity",
    "Internet of Things",
    "Precision Agriculture",
    "Smart Systems",
    "Data Science",
    "Blockchain",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Inline script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col selection:bg-[#84CC16]/20 selection:text-[#5D3A1A] dark:selection:text-zinc-100 transition-colors bg-zinc-50 dark:bg-[#09090b]`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
