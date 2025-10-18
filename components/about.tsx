"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const stats = [
    { label: "Cars Detailed", value: 2500 },
    { label: "Happy Clients", value: 1800 },
    { label: "Years in Service", value: 8 },
  ]

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="about" className="relative py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shine-effect">
              <img
                src="/car-detailing-buffing-professional.jpg"
                alt="Professional car detailing"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              About Eduardo Auto Detailing
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              A local, trusted mobile detailing team serving Orange County with passion and precision. We bring
              professional-grade detailing directly to your location, ensuring your vehicle receives the premium care it
              deserves.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  ref={ref}
                  custom={index}
                  variants={statVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.05, borderColor: "var(--accent)" }}
                  className="text-center p-4 bg-card rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {inView && <CountUp end={stat.value} duration={2.5} />}
                    {stat.label === "Years in Service" && "+"}
                  </div>
                  <p className="text-sm text-foreground/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-foreground/80 leading-relaxed">
              With years of experience and a commitment to excellence, we use only the finest products and techniques to
              protect and enhance your vehicle's appearance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
