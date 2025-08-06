import type { Metadata } from "next";
import { Aleo, Afacad } from "next/font/google";
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
  icons: {
    icon: "../assets/MDS-White.png",
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
