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

        {/* Guarded FullStory loader: attempts to fetch and evaluate the script safely and temporarily wraps window.fetch to suppress thrown rejections during initialization. */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){
          try {
            if (typeof window === 'undefined') return;
            const url = 'https://edge.fullstory.com/s/fs.js';

            var origFetch = window.fetch;
            var __fs_fetch_wrapped = false;
            function wrapFetch(){
              if (!origFetch || __fs_fetch_wrapped) return;
              __fs_fetch_wrapped = true;
              try {
                window.fetch = function(){
                  try {
                    return origFetch.apply(this, arguments).catch(function(err){
                      console.warn('FullStory suppressed fetch rejection:', err);
                      try { return Promise.resolve(new Response(null,{status:0})); } catch(e){ return Promise.resolve(null); }
                    });
                  } catch(e){
                    console.warn('FullStory fetch wrapper sync error:', e);
                    try { return Promise.resolve(new Response(null,{status:0})); } catch(er){ return Promise.resolve(null); }
                  }
                };
              } catch(e){ console.warn('Unable to wrap fetch:', e); }
            }

            function restoreFetch(){
              try {
                if (origFetch) window.fetch = origFetch;
                __fs_fetch_wrapped = false;
                console.info('Restored original fetch');
              } catch(e){ console.warn('Failed to restore fetch:', e); }
            }

            wrapFetch();

            fetch(url, { cache: 'no-store' })
              .then(function(res){
                if (!res || !res.ok) { console.warn('FullStory fetch failed or blocked:', res); restoreFetch(); return null; }
                return res.text();
              })
              .then(function(text){
                if (!text) { return; }
                try {
                  (0,eval)(text);
                  console.info('FullStory loaded via guarded loader');
                } catch (e) {
                  console.warn('FullStory eval error:', e);
                }

                // Attempt to detect FS initialization and restore fetch afterwards
                var checks = 0;
                var poll = setInterval(function(){
                  checks++;
                  try {
                    if (window.FS || window._fs || window._fs_initialized || window.FS && window.FS.getCurrentSession){
                      clearInterval(poll);
                      restoreFetch();
                    } else if (checks > 20){ // ~10s timeout
                      clearInterval(poll);
                      restoreFetch();
                    }
                  } catch(e){
                    clearInterval(poll);
                    restoreFetch();
                  }
                }, 500);
              })
              .catch(function(err){
                console.warn('FullStory fetch error:', err);
                restoreFetch();
              });

            // Safety fallback: restore after 12s just in case
            setTimeout(function(){ try{ restoreFetch(); } catch(e){} }, 12000);

          } catch (e) {
            console.warn('FullStory loader unexpected error:', e);
            try{ if(window && window.fetch) {} } catch(err){}
          }
        })();` }} />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
