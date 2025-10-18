"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Sparkles, Droplet, Zap, Shield, Wind, Wrench } from "lucide-react"

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const services = [
    {
      icon: Droplet,
      title: "Basic Wash",
      description: "Professional exterior wash with premium soaps and techniques",
    },
    {
      icon: Wind,
      title: "Interior Shampoo",
      description: "Deep cleaning of carpets, seats, and interior surfaces",
    },
    {
      icon: Sparkles,
      title: "Paint Correction",
      description: "Remove swirls, scratches, and oxidation for a flawless finish",
    },
    {
      icon: Shield,
      title: "Ceramic Coatings",
      description: "Long-lasting protective coating for ultimate shine and durability",
    },
    {
      icon: Zap,
      title: "Headlight Restoration",
      description: "Restore clarity and brightness to oxidized headlights",
    },
    {
      icon: Wrench,
      title: "Engine Cleaning",
      description: "Professional engine bay detailing and protection",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="services" className="relative py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive detailing solutions tailored to your vehicle's needs
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 bg-background border border-border rounded-lg hover:border-accent transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <motion.div
                    className="mb-4 p-3 bg-primary/20 rounded-lg w-fit group-hover:bg-primary/30 transition-colors"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon className="w-6 h-6 text-accent" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="mt-4 px-4 py-2 bg-primary/20 text-accent rounded hover:bg-primary/30 transition-colors text-sm font-semibold"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
