import type { Metadata } from "next";
import { AuthProvider } from '@/app/contexts/AuthContext';
import NavBar from '@/app/components/NavBar';
import Footer from "@/app/components/Footer";
import JsonLd from '@/app/components/JsonLd';

import "./globals.css";



export const metadata: Metadata = {
  title: "Free Resume Builder – Create Professional Resumes Online",
  description: "Free resume builder with 20+ professional templates. Create, edit, and download your resume as PDF instantly. No credit card needed.",
   openGraph: {
    title: 'Resume Builder – Create Professional Resumes',
    description: 'Free resume builder with 20+ templates',
    images: '/og-image',   // <-- this will call your API route
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <head>
         <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='15' y='10' width='70' height='80' rx='10' fill='%234f46e5'/><path fill='white' d='M35 30h30M35 45h30M35 60h20' stroke='white' stroke-width='6' stroke-linecap='round'/><circle cx='70' cy='70' r='12' fill='%23f59e0b'/><path d='M70 65v10M65 70h10' stroke='white' stroke-width='3'/></svg>"
          />
      </head>
      <body className="min-h-full flex flex-col">
         <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Interactive Resume Builder",
          "description": "Live preview resume editor with 20+ professional templates.",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0"
          },
          "featureList": "20+ templates, live preview, PDF download, shareable links",
          "url": "https://mycvbuilder.info/builder"
        }}
      />
        <AuthProvider>
          <NavBar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
