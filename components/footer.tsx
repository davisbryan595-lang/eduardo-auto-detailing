"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edlogo-removebg-preview-jZ3t1uSjiqVfRjRLISrhmiBKw7fgy6.png"
              alt="Eduardo Auto Detailing"
              className="h-12 w-auto mb-4"
            />
            <p className="text-foreground/70 text-sm leading-relaxed">
              Premium mobile auto detailing serving Orange County with passion and precision.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 className="text-foreground font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="text-foreground font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Paint Correction</li>
              <li>Ceramic Coatings</li>
              <li>Interior Detailing</li>
              <li>Headlight Restoration</li>
              <li>Engine Cleaning</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h4 className="text-foreground font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="tel:(949)630-7117" className="hover:text-accent transition-colors">
                  (949) 630-7117
                </a>
              </li>
              <li>
                <a href="mailto:info@eduardodetailing.com" className="hover:text-accent transition-colors">
                  info@eduardodetailing.com
                </a>
              </li>
              <li>Orange County, CA</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/70 text-sm">© {currentYear} Eduardo Auto Detailing. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-2 bg-card border border-border rounded-lg hover:border-accent transition-colors"
                >
                  <Icon className="w-5 h-5 text-foreground/70 hover:text-accent transition-colors" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    </footer>
  )
}
