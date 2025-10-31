import type { Metadata } from "next";
import { Aleo, Afacad } from "next/font/google";
import mdsExpert2 from "@/assets/mds-jpg-removebg-preview.png";
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
  description:
    "MDS Experts Ltd is a leading Rwandan consultancy and training firm at the forefront of professional development in Africa. We are dedicated to empowering individuals and organizations across diverse sectors through high-quality capacity-building solutions and expert business support services.",
  metadataBase: new URL("https://mdsexpertspro.com/"),
  openGraph: {
    title: "MDS Experts Ltd",
    description:
      "MDS Experts Ltd is a leading Rwandan consultancy and training firm at the forefront of professional development in Africa. We are dedicated to empowering individuals and organizations across diverse sectors through high-quality capacity-building solutions and expert business support services.",
    url: "https://mdsexpertspro.com/",
    siteName: "MDS Experts Ltd",
    images: [
      {
        url: mdsExpert2.src,
        width: 800,
        height: 600,
      },
      {
        url: mdsExpert2.src,
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MDS Experts Ltd",
    description:
      "MDS Experts Ltd is a leading Rwandan consultancy and training firm at the forefront of professional development in Africa. We are dedicated to empowering individuals and organizations across diverse sectors through high-quality capacity-building solutions and expert business support services.",
    images: ["../assets/mds-jpg-removebg-preview.png"],
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
      <body
        className={`${albertSans.variable} ${afacode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
