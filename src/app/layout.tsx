import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";
import AmbientSpotlight from "@/components/AmbientSpotlight";
import TransitionOverlay from "@/components/TransitionOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  title: {
    default: "Agency | Future of Web Design",
    template: "%s | Agency",
  },
  description: "High-end web design & development agency building the future.",
  keywords: ["web design", "web development", "enterprise", "AI startup", "Next.js", "TypeScript", "Tailwind"],
  metadataBase: new URL(baseUrl),
  robots: { index: true, follow: true },
  openGraph: {
    title: "Agency | Future of Web Design",
    description: "High-end web design & development agency building the future.",
    type: "website",
    url: baseUrl,
    siteName: "Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agency | Future of Web Design",
    description: "High-end web design & development agency building the future.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <AmbientSpotlight />
        <TransitionOverlay />
        <main className="min-h-screen">
            <ClientLayout>{children}</ClientLayout>
        </main>
        <Footer />
      </body>
    </html>
  );
}
