import { Button } from "@/components/ui/button"
import { Play, Search } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Main Container - matches the design's card-like appearance */}
      <div className="relative w-full max-w-7xl h-[600px] rounded-2xl overflow-hidden shadow-2xl">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-xl">SW</span>
            </div>
            <div className="text-white">
              <div className="font-semibold text-lg">Sanderson</div>
              <div className="text-sm text-gray-300">Westhall</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-yellow-400 transition-colors font-medium">
              What we do
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Why SW
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Who we are
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Properties
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Auctions
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Get in touch
            </a>
          </div>

          <Button
            size="sm"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full w-10 h-10 p-0"
          >
            <Search className="w-4 h-4" />
          </Button>
        </nav>

        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center px-8 pb-16">
          <div className="w-full">
            {/* Left side - Main headline */}
            <div className="max-w-2xl">
              <div className="w-16 h-1 bg-yellow-500 mb-8" />
              <h1 className="text-6xl lg:text-7xl font-light text-white leading-tight mb-8">
                The <span className="font-normal">approachable</span>
                <br />
                <span className="text-yellow-400 font-normal">alternative</span>
              </h1>
            </div>

            {/* Bottom section with quote and video button */}
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              {/* Video Button */}
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 group"
              >
                <Play className="w-4 h-4 mr-2 group-hover:text-yellow-400 transition-colors" />
                Watch our video
              </Button>

              {/* Quote */}
              <div className="text-right max-w-md">
                <p className="text-white text-lg font-light italic">"Putting people first in everything we do."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-8 text-yellow-400/20 text-xs font-light tracking-widest transform rotate-90 origin-center">
          SCROLL
        </div>
        <div className="absolute top-1/3 left-8 text-yellow-400/20 text-xs font-light tracking-widest transform -rotate-90 origin-center">
          DISCOVER
        </div>
      </div>
    </div>
  )
}
