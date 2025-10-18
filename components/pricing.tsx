"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check } from "lucide-react"

export default function Pricing() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const tiers = [
    {
      name: "Basic",
      price: "Starting at $99",
      description: "Perfect for regular maintenance",
      features: ["Exterior wash", "Tire shine", "Air freshener", "Basic interior vacuum"],
      highlighted: false,
    },
    {
      name: "Deluxe",
      price: "Starting at $199",
      description: "Most popular choice",
      features: [
        "Everything in Basic",
        "Interior shampoo",
        "Paint protection",
        "Wax application",
        "Engine bay cleaning",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "Starting at $349",
      description: "Ultimate protection & shine",
      features: [
        "Everything in Deluxe",
        "Ceramic coating",
        "Headlight restoration",
        "Leather conditioning",
        "Paint correction",
        "Lifetime warranty",
      ],
      highlighted: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Transparent Pricing</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Choose the perfect package for your vehicle</p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className={`relative p-8 rounded-lg border-2 transition-all duration-300 ${
                tier.highlighted
                  ? "border-accent bg-card/50 shadow-2xl scale-105"
                  : "border-border bg-card/20 hover:border-accent/50"
              }`}
            >
              {/* Glow effect */}
              {tier.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg opacity-50 blur-xl -z-10" />
              )}

              {tier.highlighted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-accent text-background text-sm font-bold rounded-full"
                >
                  Most Popular
                </motion.div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
              <p className="text-foreground/70 text-sm mb-4">{tier.description}</p>

              <div className="mb-6">
                <p className="text-3xl font-bold text-accent">{tier.price}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-bold mb-8 transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground hover:glow-orange"
                    : "bg-primary/20 text-accent hover:bg-primary/30"
                }`}
              >
                Book Now
              </motion.button>

              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {tier.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { delay: i * 0.05 },
                      },
                    }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
