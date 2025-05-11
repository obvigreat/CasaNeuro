import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function BookACallPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-20 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-[#00FFC2] text-sm font-medium tracking-wider mb-4">
            Schedule a Consultation
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-white mb-6">
            Book a <span className="text-[#00FFC2]">Call</span> With Our Team
          </h1>

          <p className="text-xl text-[#AAAAAA] max-w-2xl mb-10 mx-auto">
            Schedule a personalized demo and consultation to see how CasaNeuro
            can transform your home service business.
          </p>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" className="fill-[#111111] w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Calendar Section */}
      <section className="bg-[#111111] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Calendar Embed */}
            <div className="md:w-2/3 bg-[#1E1E1E] rounded-xl p-8 border border-[#333333] h-[600px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#00FFC2]/20 flex items-center justify-center mb-6 mx-auto">
                  <Calendar className="h-8 w-8 text-[#00FFC2]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Booking Calendar</h3>
                <p className="text-[#AAAAAA] mb-6">
                  Select a date and time that works for you, and we'll confirm
                  your appointment.
                </p>
                <div className="bg-[#0A0A0A] p-4 rounded-lg border border-[#333333] text-sm text-[#AAAAAA]">
                  <p>Calendar embed would appear here</p>
                  <p className="mt-2">
                    (Integration with GoHighLevel calendar)
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:w-1/3 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  What to <span className="text-[#00FFC2]">Expect</span>
                </h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-[#1E1E1E] p-3 rounded-full flex-shrink-0">
                      <Clock className="h-5 w-5 text-[#00FFC2]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        30-Minute Consultation
                      </h3>
                      <p className="text-[#AAAAAA] text-sm">
                        A focused discussion about your business needs
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-[#1E1E1E] p-3 rounded-full flex-shrink-0">
                      <Calendar className="h-5 w-5 text-[#00FFC2]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Custom Demo</h3>
                      <p className="text-[#AAAAAA] text-sm">
                        See CasaNeuro in action with your specific use cases
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-[#1E1E1E] p-3 rounded-full flex-shrink-0">
                      <ArrowRight className="h-5 w-5 text-[#00FFC2]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Next Steps</h3>
                      <p className="text-[#AAAAAA] text-sm">
                        Clear implementation plan and pricing information
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333333]">
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#00FFC2]" />
                    <span className="text-[#AAAAAA]">(555) 123-4567</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#00FFC2]" />
                    <span className="text-[#AAAAAA]">sales@casaneuro.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#00FFC2]" />
                    <span className="text-[#AAAAAA]">San Francisco, CA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#0A0A0A] py-20 px-6 md:px-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Frequently Asked <span className="text-[#00FFC2]">Questions</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333333] hover:border-[#00FFC2] transition-all duration-300">
              <h3 className="font-semibold mb-2">
                How long does implementation take?
              </h3>
              <p className="text-[#AAAAAA]">
                Most clients are fully onboarded within 48 hours of signing up.
                Our implementation team works directly with you to ensure a
                smooth transition.
              </p>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333333] hover:border-[#00FFC2] transition-all duration-300">
              <h3 className="font-semibold mb-2">
                Do I need technical expertise to use CasaNeuro?
              </h3>
              <p className="text-[#AAAAAA]">
                No technical expertise is required. Our system is designed to be
                user-friendly, and our team handles all the technical setup and
                integration.
              </p>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333333] hover:border-[#00FFC2] transition-all duration-300">
              <h3 className="font-semibold mb-2">
                Can I reschedule my consultation?
              </h3>
              <p className="text-[#AAAAAA]">
                Yes, you can reschedule through the confirmation email you
                receive or by contacting our team directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] py-16 px-6 md:px-20 border-t border-[#333333]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#00FFC2] rounded-md flex items-center justify-center">
                  <span className="text-black font-bold">C</span>
                </div>
                <span className="text-xl font-bold">CasaNeuro</span>
              </div>
              <p className="text-[#AAAAAA] mb-6 max-w-xs">
                Next-generation AI infrastructure for home service businesses,
                automating every customer touchpoint.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:w-2/3">
              <div>
                <h4 className="font-semibold mb-4 text-[#00FFC2]">Products</h4>
                <ul className="space-y-3 text-[#AAAAAA]">
                  <li>
                    <a
                      href="/products/leadgen"
                      className="hover:text-white transition-colors"
                    >
                      LeadGen
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products/appointmentpro"
                      className="hover:text-white transition-colors"
                    >
                      Appointment Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products/sales"
                      className="hover:text-white transition-colors"
                    >
                      Sales
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-[#00FFC2]">Company</h4>
                <ul className="space-y-3 text-[#AAAAAA]">
                  <li>
                    <a
                      href="/about"
                      className="hover:text-white transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/book-a-call"
                      className="hover:text-white transition-colors"
                    >
                      Book a Call
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#333333] flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#AAAAAA] text-sm">
              © 2025 CasaNeuro Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
