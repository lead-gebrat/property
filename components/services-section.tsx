"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const images = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    alt: "Modern property interior",
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Property management service",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
    alt: "Property maintenance",
  },
  {
    src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2096&q=80",
    alt: "Luxury property exterior",
  },
]

const services = [
  {
    number: "01",
    title: "Property Management Excellence",
    description:
      "Comprehensive property management solutions that maximize your investment returns through expert tenant screening, maintenance coordination, and strategic oversight.",
  },
  {
    number: "02",
    title: "Tenant Relations & Leasing",
    description:
      "Transform tenant relationships through personalized service and efficient communication while minimizing vacancy periods with our specialized leasing team.",
  },
  {
    number: "03",
    title: "Maintenance & Renovations",
    description:
      "Maintain and enhance your properties with our network of trusted contractors and in-house maintenance team, from routine upkeep to strategic renovations.",
  },
 
]

export default function ServicesSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight leading-tight">
              Our Services
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 flex-1">
          {/* Left Side - Animated Image */}
          <div className="lg:col-span-5">
            <div className="relative h-200 lg:h-[98%] rounded-xl overflow-hidden shadow-lg group">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              ))}

              {/* Image indicators */}
              <div className="absolute bottom-6 left-6 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Show image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Circular Images */}
            <div className="flex justify-end space-x-4 mb-8">
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md ring-2 ring-white hover:ring-slate-300 transition-all duration-300 hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Property management service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-md ring-2 ring-white hover:ring-slate-300 transition-all duration-300 hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
                  alt="Property maintenance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Services Content */}
            <div className="rounded-xl p-6 md:p-8 bg-slate-50 flex-1">
              <div className="space-y-6">
                {services.map((service) => (
                  <div
                    key={service.number}
                    className="group hover:bg-white rounded-xl p-5 transition-all duration-300 hover:shadow-sm border border-transparent hover:border-slate-200"
                  >
                    <div className="flex items-start space-x-5">
                      <div className="flex-shrink-0 pt-1">
                        <span className="text-slate-400 font-light text-sm tracking-wide">
                          {service.number}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-normal text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-slate-500 leading-relaxed text-sm group-hover:text-slate-600 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}