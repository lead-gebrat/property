import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left Content - Contact Form */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
                Get in <span className="italic">touch</span>
                <br />
                with <span className="italic">our</span>
                <br />
                <span className="italic">Expert team</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Ready to transform your property management experience? Contact
                our team of experts today.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-md">
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Full Name"
                      className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-yellow-500 focus:ring-yellow-500 bg-white">
                      <option value="">Select Service</option>
                      <option value="property-management">
                        Property Management
                      </option>
                      <option value="tenant-screening">Tenant Screening</option>
                      <option value="maintenance">Maintenance Services</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell us about your property management needs..."
                      rows={4}
                      className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                </div>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Center Image */}
          <div className="col-span-12 lg:col-span-4">
            <div className="w-full h-96 lg:h-[500px]">
              <Image
                src="/build4.jpg"
                alt="Modern office building exterior"
                width={400}
                height={500}
                className="w-full h-full object-cover rounded-lg"
                style={{ backgroundColor: "#1f2937" }}
              />
            </div>
          </div>

          {/* Right Content - Contact Info */}
          <div className="col-span-12 lg:col-span-3 space-y-8">
            {/* Contact Stats */}
            <div className="space-y-6">
              <div className="text-right">
                <div className="text-4xl font-light text-gray-800 mb-1">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Customer Support</div>
              </div>

              <div className="text-right">
                <div className="text-4xl font-light text-gray-800 mb-1">
                  {"<"}2hrs
                </div>
                <div className="text-sm text-gray-600">
                  Average Response Time
                </div>
              </div>
            </div>

            {/* Office Image */}
            <div className="w-full h-48">
              <Image
                src="/build5.jpg"
                alt="Modern office interior"
                width={300}
                height={192}
                className="w-full h-full object-cover rounded-lg"
                style={{ backgroundColor: "#f59e0b" }}
              />
            </div>

            {/* Additional Offices */}
            <div className="space-y-4">
              <h3 className="text-lg font-light text-gray-800">
                Other Locations
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <div className="font-medium text-gray-800">Los Angeles</div>
                  <div>456 Sunset Blvd, LA 90028</div>
                  <div>+1 (555) 987-6543</div>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Chicago</div>
                  <div>789 Michigan Ave, Chicago 60611</div>
                  <div>+1 (555) 456-7890</div>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Miami</div>
                  <div>321 Ocean Drive, Miami 33139</div>
                  <div>+1 (555) 321-0987</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Contact Options */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Call Us
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Speak directly with our property management experts
              </p>
              <Button
                variant="outline"
                className="bg-white font-semibold hover:text-white border-2 border-yellow-600 hover:bg-yellow-700 text-yellow-600"
              >
                +1 (555) 123-4567
              </Button>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 border-1 border-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Email Us
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get detailed information about our services
              </p>
              <Button
                variant="outline"
                className="bg-white font-semibold hover:text-white border-2 border-yellow-600 hover:bg-yellow-700 text-yellow-600"
              >
                Send Email
              </Button>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Schedule Meeting
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Book a consultation with our team
              </p>
              <Button className="bg-white font-semibold hover:text-white border-2 border-yellow-600 hover:bg-yellow-700 text-yellow-600">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
