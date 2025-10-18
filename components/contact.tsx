"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "(949) 630-7117",
      href: "tel:(949)630-7117",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@eduardodetailing.com",
      href: "mailto:info@eduardodetailing.com",
    },
    {
      icon: MapPin,
      label: "Service Area",
      value: "Orange County, CA",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Get In Touch</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions? We're here to help. Contact us today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.a
                key={index}
                ref={ref}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 bg-background border border-border rounded-lg hover:border-accent transition-all duration-300 text-center group"
              >
                <div className="mb-4 p-4 bg-primary/20 rounded-lg w-fit mx-auto group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{info.label}</h3>
                <p className="text-foreground/70 hover:text-accent transition-colors">{info.value}</p>
              </motion.a>
            )
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto bg-background border border-border rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:glow-red transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
