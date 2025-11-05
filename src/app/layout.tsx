import type { Metadata } from "next";
import { Aleo, Afacad } from "next/font/google";
import mdsExpert2 from "@/assets/mds-jpg-removebg-preview.png";
import "./globals.css";
import { KEYWORDS } from "@/constants/Info";
import Link from "next/link";

const SITE_URL = "https://mdsexpertspro.com/";
const OG_IMAGE_URL = new URL(mdsExpert2.src, SITE_URL).toString();

const albertSans = Aleo({
  variable: "--font-aleo",
  subsets: ["latin"],
});

const afacode = Afacad({
  variable: "--font-afacode",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MDS Experts Ltd | Professional Training & Consultancy in Rwanda",
    template: "%s | MDS Experts Ltd",
  },
  description:
    "MDS Experts Ltd is a leading Rwandan consultancy and training firm at the forefront of professional development in Africa. We are dedicated to empowering individuals and organizations across diverse sectors through high-quality capacity-building solutions and expert business support services.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  keywords: KEYWORDS as string[],
  authors: [{ name: "MDS Experts Ltd", url: "https://mdsexpertspro.com/" }],
  generator: "Next.js",
  applicationName: "MDS Experts Ltd",
  referrer: "origin",
  themeColor: "#000000",
  colorScheme: "light",
  creator: "MDS Experts Ltd",
  category: "Professional Training & Consultancy",
  openGraph: {
    title: "MDS Experts Ltd | Professional Training & Consultancy in Rwanda",
    description:
      "MDS Experts Ltd is a leading Rwandan consultancy and training firm at the forefront of professional development in Africa. We are dedicated to empowering individuals and organizations across diverse sectors through high-quality capacity-building solutions and expert business support services.",
    url: SITE_URL,
    siteName: "MDS Experts Ltd",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "MDS Experts Ltd",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MDS Experts Ltd | Professional Training & Consultancy in Rwanda",
    description:
      "MDS Experts Ltd is a leading Rwandan consultancy and training firm at the forefront of professional development in Africa. We are dedicated to empowering individuals and organizations across diverse sectors through high-quality capacity-building solutions and expert business support services.",
    images: [OG_IMAGE_URL],
  },
  icons: {
    icon: mdsExpert2.src,
    shortcut: mdsExpert2.src,
    apple: mdsExpert2.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // Organization structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MDS Experts Ltd",
              url: SITE_URL,
              logo: OG_IMAGE_URL,
            }),
          }}
        />
        <script
          type="application/ld+json"
          // WebSite structured data with SearchAction
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "MDS Experts Ltd",
              url: SITE_URL,
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Link rel="canonical" href={SITE_URL}>
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta name="google" content="notranslate" />
          <meta name="google" content="notranslate" />
        </Link>
      </head>
      <body
        className={`${albertSans.variable} ${afacode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
