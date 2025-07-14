"use client"

const benefits = [
  {
    number: "01",
    title: "PREMIUM MARKETING",
    description: "Your property receives professional photography, virtual tours, and premium listing placement across all major platforms.",
    variant: "default",
  },
  {
    number: "02",
    title: "VALUATION EXPERTISE",
    description: "Accurate pricing strategies based on comprehensive market analysis and comparable property evaluations.",
    variant: "accent",
  },
  {
    number: "03",
    title: "DEDICATED AGENT",
    description: "A single point of contact handles all viewings, negotiations, and paperwork throughout your sale.",
    variant: "default",
  },
  {
    number: "04",
    title: "SEAMLESS TRANSACTION",
    description: "Streamlined digital process with full transparency at every stage from offer to closing.",
    variant: "accent",
  },
]

export default function CustomerBenefitsSection() {
  return (
    <section className=" bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header - Kept original tracking style */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-[0.2em] leading-tight">
            CUSTOMER BENEFITS
          </h1>
        </div>

        {/* Benefits Grid - Maintained original structure with refined details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className={`
                relative h-80 lg:h-96 rounded-none border transition-all duration-300 hover:shadow-lg
                ${
                  benefit.variant === "accent"
                    ? "bg-slate-100 border-slate-200 hover:bg-slate-50"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }
              `}
            >
              {/* Content with refined typography */}
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 tracking-wider mb-6 leading-tight uppercase">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>

                {/* Number - Kept original styling */}
                <div className="flex justify-end">
                  <span className="text-2xl font-extralight text-gray-400 group-hover:text-gray-500 transition-colors duration-300">
                    {benefit.number}
                  </span>
                </div>
              </div>

              {/* Subtle hover effect - Enhanced gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/0 group-hover:from-white/30 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}