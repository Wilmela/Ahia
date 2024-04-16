import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { siteConfig } from "../config/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.title,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#000" },
        elements: {
          formButtonPrimary: "bg-APP_ORANGE text-white font-semibold",
          formButtonReset: "bg-APP_ORANGE text-white font-semibold",
        },
      }}
    >
      <html lang="en">
        <body className={montserrat.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
