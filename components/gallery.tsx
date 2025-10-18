"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [sliderPosition, setSliderPosition] = useState(50)

  const beforeAfterPairs = [
    {
      before: "/car-before-detailing-dirty.jpg",
      after: "/car-after-detailing-shiny.jpg",
      title: "Paint Correction",
    },
    {
      before: "/car-interior-dirty-before.jpg",
      after: "/car-interior-clean-after.jpg",
      title: "Interior Detailing",
    },
    {
      before: "/headlights-oxidized-before.jpg",
      after: "/headlights-restored-after.jpg",
      title: "Headlight Restoration",
    },
  ]

  const galleryImages = [
    "/luxury-car-detailing-shine.jpg",
    "/ceramic-coating-application.png",
    "/car-wash-professional.jpg",
    "/polished-car-reflection.jpg",
    "/car-interior-clean.jpg",
    "/wax-application-car.jpg",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="gallery" className="relative py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Before & After Gallery</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            See the transformation our detailing services bring to vehicles
          </p>
        </motion.div>

        {/* Before/After Sliders */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {beforeAfterPairs.map((pair, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg h-64 bg-card border border-border">
                {/* After Image */}
                <img
                  src={pair.after || "/placeholder.svg"}
                  alt={`${pair.title} after`}
                  className="w-full h-full object-cover"
                />

                {/* Before Image with Slider */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.parentElement?.getBoundingClientRect()
                    if (rect) {
                      const newPosition = ((e.clientX - rect.left) / rect.width) * 100
                      setSliderPosition(Math.max(0, Math.min(100, newPosition)))
                    }
                  }}
                >
                  <img
                    src={pair.before || "/placeholder.svg"}
                    alt={`${pair.title} before`}
                    className="w-full h-full object-cover"
                    style={{ width: `${(100 / sliderPosition) * 100}%` }}
                  />
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-accent cursor-col-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent rounded-full p-2">
                    <ChevronLeft className="w-4 h-4 text-background" />
                    <ChevronRight className="w-4 h-4 text-background" />
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 rounded text-sm font-semibold text-foreground">
                  Before
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 rounded text-sm font-semibold text-foreground">
                  After
                </div>
              </div>

              <h3 className="mt-4 text-lg font-bold text-foreground text-center">{pair.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(index)}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-48"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="w-12 h-12 bg-accent rounded-full flex items-center justify-center"
                >
                  <ChevronRight className="w-6 h-6 text-background" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img
                src={galleryImages[selectedImage] || "/placeholder.svg"}
                alt="Gallery preview"
                className="w-full h-auto rounded-lg"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-background rounded-full hover:bg-card transition-colors"
              >
                <X className="w-6 h-6 text-foreground" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
