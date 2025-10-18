import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Eduardo Auto Detailing | Premium Mobile Detailing in Orange County",
  description:
    "Premium auto detailing services in Orange County, CA. Professional mobile detailing, ceramic coatings, paint correction, and more. Book your appointment today!",
  keywords: [
    "auto detailing",
    "car detailing",
    "mobile detailing",
    "Orange County",
    "ceramic coating",
    "paint correction",
    "car wash",
  ],
  generator: "v0.app",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Eduardo Auto Detailing | Premium Mobile Detailing",
    description:
      "Premium auto detailing services in Orange County, CA. Professional mobile detailing and ceramic coatings.",
    type: "website",
    url: "https://eduardodetailing.com",
    siteName: "Eduardo Auto Detailing",
    images: [
      {
        url: "/luxury-car-detailing.jpg",
        width: 1200,
        height: 1200,
        alt: "Eduardo Auto Detailing - Premium Car Detailing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Auto Detailing | Premium Mobile Detailing",
    description: "Premium auto detailing services in Orange County, CA",
    images: ["/luxury-car-detailing.jpg"],
  },
  alternates: {
    canonical: "https://eduardodetailing.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Eduardo Auto Detailing",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edlogo-removebg-preview-jZ3t1uSjiqVfRjRLISrhmiBKw7fgy6.png",
              description: "Premium mobile auto detailing services in Orange County, CA",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Orange County",
                addressRegion: "CA",
                addressCountry: "US",
              },
              telephone: "(949) 630-7117",
              email: "info@eduardodetailing.com",
              priceRange: "$$",
              areaServed: "Orange County, CA",
              serviceType: ["Auto Detailing", "Paint Correction", "Ceramic Coating", "Interior Cleaning"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
