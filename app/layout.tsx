import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider }  from '@clerk/nextjs';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: { template: `%s | Ahia`, default: "Ahia" },
  description: "The marketplace for anything. Buy and sell anything easy, save and in a speed of light.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={montserrat.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
