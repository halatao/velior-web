import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://velior.cz";

const OG_IMAGE = `${SITE_URL}/og.jpg`;
const CONTACT_EMAIL = "info@velior.cz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "VELIOR – Digitální řešení pro růst podnikání",
  description:
    "VELIOR navrhuje weby a aplikace, které přivádí klienty, šetří čas a pomáhají firmám růst.",

  alternates: {
    canonical: SITE_URL,
  },

  keywords: [
    "webové studio",
    "tvorba webů",
    "webové aplikace",
    "mobilní aplikace",
    "digitální řešení",
    "vývoj aplikací",
  ],

  authors: [{ name: "Ondřej Halata", url: SITE_URL }],

  openGraph: {
    title: "VELIOR – Digitální řešení pro růst podnikání",
    description:
      "VELIOR navrhuje weby a aplikace, které přivádí klienty, šetří čas a pomáhají firmám růst.",
    url: SITE_URL,
    siteName: "VELIOR",
    type: "website",
    locale: "cs_CZ",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "VELIOR – Digitální řešení pro růst podnikání",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VELIOR – Digitální řešení pro růst podnikání",
    description:
      "VELIOR navrhuje weby a aplikace, které přivádí klienty, šetří čas a pomáhají firmám růst.",
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "VELIOR",
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              image: OG_IMAGE,
              areaServed: "CZ",
              serviceType: [
                "Tvorba webových stránek",
                "Webové aplikace",
                "Mobilní aplikace",
                "Digitální řešení",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: CONTACT_EMAIL,
                availableLanguage: ["Czech"],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
