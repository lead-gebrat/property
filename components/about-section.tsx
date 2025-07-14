import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-yellow-600 leading-tight">
                Discover <span className="italic">our</span>
                <br />
                Next <span className="italic">investment</span>
                <br />
                <span className="italic">Easy lifestyle</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Welcome to our property management platform, where marketing
                your property is made simple and seamless.
              </p>
            </div>

            {/* Left Image */}
            <div className="w-80 h-64">
              <Image
                src="/build.jpg"
                alt="Modern building with orange facade"
                width={320}
                height={256}
                className="w-full h-full object-cover rounded-lg"
                style={{ backgroundColor: "#ff6b35" }}
              />
            </div>
          </div>

          {/* Center Image */}
          <div className="col-span-12 lg:col-span-4">
            <div className="w-full h-96 lg:h-[500px]">
              <Image
                src="/build2.jpg"
                alt="Tall red brick building"
                width={400}
                height={500}
                className="w-full h-full object-cover rounded-lg"
                style={{ backgroundColor: "#dc2626" }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-span-12 lg:col-span-3 space-y-8">
            {/* Stats */}
            <div className="space-y-6">
              <div className="text-right">
                <div className="text-4xl font-light text-gray-800 mb-1">
                  14.9M
                </div>
                <div className="text-sm text-gray-600">
                  Successfully Project
                </div>
              </div>

              <div className="text-right">
                <div className="text-4xl font-light text-gray-800 mb-1">
                  20.5K+
                </div>
                <div className="text-sm text-gray-600">worldwide Investors</div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full h-48">
              <Image
                src="/build3.jpg"
                alt="Colorful geometric building detail"
                width={300}
                height={192}
                className="w-full h-full object-cover rounded-lg"
                style={{ backgroundColor: "#06b6d4" }}
              />
            </div>

            {/* Recent News */}
            <div className="space-y-4">
              <h3 className="text-xl font-light text-gray-800 italic">
                Recent News
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Check out the recent news from world excellence
              </p>
            </div>

            {/* About Us Content */}
          </div>
        </div>
        <div className="flex space-x-12 pt-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-light text-gray-800">Our Story</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Founded in 2018, Dwelling has revolutionized property management
              by combining cutting-edge technology with personalized service.
              We've helped thousands of property owners maximize their
              investments while providing exceptional experiences for tenants.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light text-gray-800">Our Mission</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              To simplify property management through innovative technology,
              transparent processes, and dedicated support, enabling property
              owners to achieve their investment goals effortlessly.
            </p>
          </div>
        </div>
        <WhyChooseUs></WhyChooseUs>
        {/* Bottom Stats Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-gold-600 mb-2">25K+</div>
              <div className="text-sm text-gray-600">Active Properties</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gold-600 mb-2">150+</div>
              <div className="text-sm text-gray-600">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gold-600 mb-2">
                $2.4B
              </div>
              <div className="text-sm text-gray-600">
                Assets Under Management
              </div>
            </div>
            <div>
              <div className="text-3xl font-light text-gold-600 mb-2">
                99.8%
              </div>
              <div className="text-sm text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Customer Satisfaction",
    description: "98% of our clients are highly satisfied with our service.",
  },
  {
    title: "24/7 Support",
    description: "Our professional team is available around the clock.",
  },
  {
    title: "Property Analytics",
    description: "Access real-time insights to maximize your ROI.",
  },
  {
    title: "Tenant Management",
    description: "Easily manage lease, rent, and communication in one place.",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees. Straightforward, predictable billing.",
  },
  {
    title: "Smart Automation",
    description:
      "Automate rent collection, reminders, and maintenance requests.",
  },
];

export function WhyChooseUs() {
  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full shadow-lg flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <span className="text-xl font-bold text-gray-800">
                {index + 1}
              </span>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
