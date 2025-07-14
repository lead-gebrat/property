"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const managedProperties = [
  {
    id: 1,
    title: "The Metropolitan",
    location: "Downtown District",

    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Fully Managed",
    type: "Luxury Apartments",
  },
  {
    id: 2,
    title: "Riverside Commons",
    location: "Waterfront Area",
   

    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Fully Managed",
    type: "Modern Condos",
  },
  {
    id: 3,
    title: "Heritage Square",
    location: "Historic Quarter",
    
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Fully Managed",
    type: "Urban Lofts",
  },
  {
    id: 4,
    title: "Garden Terrace",
    location: "Suburban Heights",
    
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Fully Managed",
    type: "Garden Apartments",
  },
  {
    id: 5,
    title: "Executive Plaza",
    location: "Business District",
    
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Fully Managed",
    type: "Executive Suites",
  },
]

export default function PropertiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % managedProperties.length)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + managedProperties.length) % managedProperties.length)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const getVisibleProperties = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % managedProperties.length
      visible.push(managedProperties[index])
    }
    return visible
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide mb-4">PROPERTIES MANAGED BY US</h2>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-6"></div>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Discover our portfolio of expertly managed properties, delivering exceptional returns and tenant
            satisfaction
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {getVisibleProperties().map((property, index) => (
              <div
                key={`${property.id}-${currentIndex}`}
                className={`group cursor-pointer transition-all duration-300 ${
                  isTransitioning ? "opacity-50" : "opacity-100"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative h-64 mb-6 overflow-hidden bg-white shadow-sm">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />


              

                </div>

                {/* Property Details */}
                <div className="space-y-4 bg-white p-6 shadow-sm">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors mb-1">
                      {property.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light mb-2">{property.location}</p>
                    <p className="text-xs text-gray-400 font-light uppercase tracking-wide">{property.type}</p>
                  </div>

                 
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center space-x-8">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="group p-3 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-white transition-all duration-200 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {managedProperties.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "bg-gray-900 w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="group p-3 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-white transition-all duration-200 disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center space-x-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors border-b border-gray-300 hover:border-gray-900 pb-1">
            <span className="tracking-wide">VIEW OUR FULL PORTFOLIO</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
