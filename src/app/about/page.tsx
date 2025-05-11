import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-20 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-[#00FFC2] text-sm font-medium tracking-wider mb-4">
            About CasaNeuro
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-white mb-6">
            Our <span className="text-[#00FFC2]">Mission</span>
          </h1>

          <p className="text-xl text-[#AAAAAA] max-w-2xl mb-10 mx-auto">
            We're building the future of home service business automation
            through advanced AI infrastructure.
          </p>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" className="fill-[#111111] w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Our Story Section */}
      <section className="bg-[#111111] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-[#00FFC2]">Story</span>
              </h2>
              <div className="space-y-6 text-[#AAAAAA]">
                <p>
                  CasaNeuro was founded in 2023 by a team of AI engineers and
                  home service business owners who recognized a critical gap in
                  the market: while AI was transforming many industries, home
                  service businesses were being left behind.
                </p>
                <p>
                  Our founders experienced firsthand the challenges of managing
                  customer communications, appointment scheduling, and
                  follow-ups at scale. They knew there had to be a better way
                  than hiring more staff or cobbling together multiple
                  disconnected software solutions.
                </p>
                <p>
                  After two years of development and testing with select
                  partners, CasaNeuro emerged as the first comprehensive AI
                  infrastructure specifically designed for home service
                  businesses. Today, we're proud to serve hundreds of companies
                  across the country, helping them scale operations without
                  scaling overhead.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 bg-[#1E1E1E] rounded-xl p-8 border border-[#333333]">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#00FFC2]">
                    Our Vision
                  </h3>
                  <p className="text-[#AAAAAA]">
                    We envision a future where home service businesses of all
                    sizes can compete effectively by leveraging AI
                    infrastructure that handles routine communications and
                    operations, freeing human talent to focus on exceptional
                    service delivery and business growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#00FFC2]">
                    Our Values
                  </h3>
                  <ul className="space-y-3 text-[#AAAAAA]">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-[#00FFC2]/20 rounded-full p-1 flex-shrink-0">
                        <Check className="h-4 w-4 text-[#00FFC2]" />
                      </div>
                      <span>
                        <strong className="text-white">Innovation:</strong> We
                        constantly push the boundaries of what AI can do for
                        service businesses
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-[#00FFC2]/20 rounded-full p-1 flex-shrink-0">
                        <Check className="h-4 w-4 text-[#00FFC2]" />
                      </div>
                      <span>
                        <strong className="text-white">Reliability:</strong> Our
                        systems are built to be dependable, consistent, and
                        always available
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-[#00FFC2]/20 rounded-full p-1 flex-shrink-0">
                        <Check className="h-4 w-4 text-[#00FFC2]" />
                      </div>
                      <span>
                        <strong className="text-white">Partnership:</strong> We
                        succeed when our customers succeed
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" className="fill-[#0A0A0A] w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Team Section */}
      <section className="bg-[#0A0A0A] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our <span className="text-[#00FFC2]">Team</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "CEO & Co-Founder",
                bio: "Former AI research lead with 10+ years in machine learning and home service business operations.",
              },
              {
                name: "Sarah Johnson",
                role: "CTO & Co-Founder",
                bio: "AI systems architect with expertise in natural language processing and conversational design.",
              },
              {
                name: "Marcus Williams",
                role: "Head of Customer Success",
                bio: "15+ years in the home service industry, specializing in operational efficiency and customer experience.",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-[#1E1E1E] rounded-xl p-6 border border-[#333333] hover:border-[#00FFC2] transition-all duration-300"
              >
                <div className="w-24 h-24 bg-[#111111] rounded-full mb-4 mx-auto overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#00FFC2]/30 to-transparent"></div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-[#00FFC2] text-sm text-center mb-4">
                  {member.role}
                </p>
                <p className="text-[#AAAAAA] text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#111111] py-20 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-[#00FFC2]">Transform</span> Your
            Business?
          </h2>
          <p className="text-[#AAAAAA] mb-8 max-w-xl mx-auto">
            Join the hundreds of home service businesses already using CasaNeuro
            to automate their operations and grow their customer base.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#00FFC2] text-black hover:bg-[#00FFC2]/90 shadow-[0_0_15px_rgba(0,255,194,0.5)] transition-all hover:shadow-[0_0_25px_rgba(0,255,194,0.7)] text-base font-semibold px-8 py-6">
              Schedule a Demo
            </Button>

            <Button
              variant="outline"
              className="border-[#00FFC2] text-[#00FFC2] hover:bg-[#00FFC2]/10 text-base font-semibold px-8 py-6 group"
            >
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
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
