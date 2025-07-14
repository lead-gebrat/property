"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-linear hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-amber-400/20 animate-pulse" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/30 rounded-full animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        />
        <div
          className="absolute top-2/3 right-1/4 w-1 h-1 bg-amber-300/30 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-8 animate-fade-in">
        <div className="flex items-center space-x-3 group">
          <div className="text-white">
            <div className="font-bold text-xl tracking-tight">ETProperty</div>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {["Portfolio", "Services", "Testimonials", "Contact"].map((item, index) => (
            <a
              key={item}
              href="#"
              className="text-white/90 hover:text-amber-400 transition-all duration-300 font-medium relative group transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center px-8 pb-16">
        <div className="w-full max-w-7xl mx-auto">
          {/* Left side - Main headline */}
          <div className="max-w-4xl">
            <h1 className="text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-[0.9] mb-8 animate-slide-in-up">
              Luxury{" "}
              <span className="font-normal bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Property
              </span>
              <br />
              <span className="bg-amber-600 bg-clip-text text-transparent font-normal animate-pulse">
                Management
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed animate-fade-in-delayed">
              Elevating real estate through bespoke management solutions. Experience seamless property care with our white-glove service.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-8 left-8 right-8 z-20 flex items-end justify-between animate-slide-in-bottom">
        <div className="flex items-center space-x-6">
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 bg-black/20 backdrop-blur-md rounded-full px-8 py-4 group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Play className="w-5 h-5 mr-3 group-hover:text-amber-400 transition-colors group-hover:scale-110" />
            View our portfolio
          </Button>

          <div className="hidden md:flex items-center space-x-4 text-white/60">
            <div className="w-12 h-px bg-white/30" />
            <span className="text-sm font-light tracking-wider">EXPLORE SERVICES</span>
          </div>
        </div>

        {/* Quote */}
        <div className="text-right max-w-md">
          <p className="text-white/90 text-xl font-light italic leading-relaxed">
            "Where exceptional properties meet impeccable service."
          </p>
          <div className="mt-2 text-amber-400/80 text-sm font-medium">— ETProperty Ethos</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center text-white/40">
          <span className="text-xs font-light tracking-widest mb-2">SCROLL</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-8 text-amber-400/20 text-xs font-light tracking-[0.3em] transform rotate-90 origin-center animate-pulse">
        ELEGANCE
      </div>
      <div className="absolute top-1/3 left-8 text-blue-400/20 text-xs font-light tracking-[0.3em] transform -rotate-90 origin-center animate-pulse">
        PRESTIGE
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-in-left {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slide-in-up {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slide-in-bottom {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fade-in-delayed {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out 0.3s both;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 1.2s ease-out 0.5s both;
        }
        
        .animate-slide-in-bottom {
          animation: slide-in-bottom 1s ease-out 0.8s both;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out 0.7s both;
        }
      `}</style>
    </div>
  )
}