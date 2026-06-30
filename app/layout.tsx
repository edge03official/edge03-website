import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://edge03.com"),
  title: {
    default: "EDGE03 | Improve. Integrate. Grow.",
    template: "%s | EDGE03",
  },
  description:
    "EDGE03 helps businesses modernize websites, connect existing tools, optimize online presence, and support long-term growth.",
  openGraph: {
    title: "EDGE03 | Improve. Integrate. Grow.",
    description:
      "Premium business modernization, website improvement, tool integration, and long-term support.",
    url: "https://edge03.com",
    siteName: "EDGE03",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
