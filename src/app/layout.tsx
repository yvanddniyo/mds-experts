import type { Metadata } from "next";
import { Aleo, Afacad } from "next/font/google";
import mdsExpert from "@/assets/MDS-White.png";
import "./globals.css";

const albertSans = Aleo({
  variable: "--font-aleo",
  subsets: ["latin"],
});

const afacode = Afacad({
  variable: "--font-afacode",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MDS Experts Ltd",
  description: "MDS Experts Ltd is a leading Rwandan consultancy and training firm at the forefront of professional development in Africa.",
  metadataBase: new URL('https://mdsexperts.rw'),
  openGraph: {
    title: "MDS Experts Ltd",
    description: "MDS Experts Ltd is a leading Rwandan consultancy and training firm at the forefront of professional development in Africa.",
    url: 'https://mdsexperts.rw',
    siteName: 'MDS Experts Ltd',
    images: [
      {
        url: '../assets/MDS-White.png',
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MDS Experts Ltd",
    description: "MDS Experts Ltd is a leading Rwandan consultancy and training firm at the forefront of professional development in Africa.",
    images: ['../assets/MDS-White.png'],
  },
  icons: {
    icon: "../assets/MDS-White.png",
    shortcut: "../assets/MDS-White.png",
    apple: "../assets/MDS-White.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.variable} ${afacode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
