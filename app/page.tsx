"use client"

import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"

const About = dynamic(() => import("@/components/about"), { loading: () => <div className="h-96" /> })
const Services = dynamic(() => import("@/components/services"), { loading: () => <div className="h-96" /> })
const Pricing = dynamic(() => import("@/components/pricing"), { loading: () => <div className="h-96" /> })
const Gallery = dynamic(() => import("@/components/gallery"), { loading: () => <div className="h-96" /> })
const BookingForm = dynamic(() => import("@/components/booking-form"), { loading: () => <div className="h-96" /> })
const Contact = dynamic(() => import("@/components/contact"), { loading: () => <div className="h-96" /> })
const Footer = dynamic(() => import("@/components/footer"), { loading: () => <div className="h-20" /> })

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Gallery />
      <BookingForm />
      <Contact />
      <Footer />
    </main>
  )
}
