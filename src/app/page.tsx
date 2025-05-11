import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import MetricsBar from "@/components/sections/MetricsBar";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ArrowRight, Check, Calendar, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" className="fill-[#111111] w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Features Grid */}
      <FeaturesGrid />

      {/* Metrics Bar */}
      <MetricsBar />

      {/* Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" className="fill-[#0A0A0A] w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Demo Section */}
      <section className="bg-[#0A0A0A] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0">
              See It <span className="text-[#00FFC2]">In Action</span>
            </h2>
            <Button
              className="bg-transparent border border-[#00FFC2] text-[#00FFC2] hover:bg-[#00FFC2]/10 group"
              variant="outline"
            >
              <span>Watch Full Demo</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-[#1E1E1E] rounded-xl aspect-video flex items-center justify-center border border-[#333333] overflow-hidden group hover:border-[#00FFC2] transition-all duration-300 cursor-pointer relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFC2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col items-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#00FFC2]/20 flex items-center justify-center mb-4 group-hover:bg-[#00FFC2]/30 group-hover:scale-110 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00FFC2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <p className="text-[#AAAAAA] group-hover:text-white transition-colors">
                  Watch demo (2:45)
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <blockquote className="bg-[#1E1E1E] p-8 rounded-xl border-l-4 border-[#00FFC2] hover:shadow-[0_0_15px_rgba(0,255,194,0.1)] transition-all duration-300">
                <p className="text-lg mb-4">
                  "We now handle 10× more bookings without extra staff."
                </p>
                <cite className="text-[#AAAAAA] block">
                  — Alex Martinez, HomeCare Co.
                </cite>
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 bg-[#1E1E1E] p-4 rounded-lg border border-[#333333] flex-1">
                  <div className="bg-[#111111] p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-[#00FFC2]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#AAAAAA]">Average Setup Time</p>
                    <p className="font-medium">48 Hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#1E1E1E] p-4 rounded-lg border border-[#333333] flex-1">
                  <div className="bg-[#111111] p-2 rounded-full">
                    <Phone className="h-5 w-5 text-[#00FFC2]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#AAAAAA]">Support Response</p>
                    <p className="font-medium">&lt; 2 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" className="fill-[#111111] w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Client Logos */}
      <section className="bg-[#111111] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Trusted By <span className="text-[#00FFC2]">Industry Leaders</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { name: "CleanCo", industry: "Cleaning" },
              { name: "GreenScape", industry: "Landscaping" },
              { name: "FixIt Pro", industry: "Repairs" },
              { name: "HomeGuard", industry: "Security" },
              { name: "ComfortAir", industry: "HVAC" },
            ].map((company, i) => (
              <div
                key={i}
                className="w-40 h-20 bg-[#1E1E1E] rounded-md flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 hover:border hover:border-[#00FFC2]/30 hover:shadow-[0_0_15px_rgba(0,255,194,0.1)]"
              >
                <span className="font-semibold text-white">{company.name}</span>
                <span className="text-xs text-[#AAAAAA]">
                  {company.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Accordion */}
      <section className="bg-[#0A0A0A] py-20 px-6 md:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Got Questions?{" "}
              <span className="text-[#00FFC2]">We've Got Answers</span>
            </h2>
            <p className="text-[#AAAAAA] max-w-xl mx-auto">
              Everything you need to know about our AI infrastructure platform
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="border-b border-[#333333] group"
            >
              <AccordionTrigger className="py-5 text-left hover:no-underline group-hover:text-[#00FFC2] transition-colors">
                <span>How does the AI learn my business processes?</span>
              </AccordionTrigger>
              <AccordionContent className="text-[#AAAAAA] pb-5">
                <div className="bg-[#111111] p-4 rounded-lg border border-[#222222]">
                  Our system ingests your SOPs and continually refines its
                  workflow via feedback loops. The AI analyzes your business
                  patterns, customer interactions, and operational procedures to
                  create a customized automation framework specific to your
                  needs.
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border-b border-[#333333] group"
            >
              <AccordionTrigger className="py-5 text-left hover:no-underline group-hover:text-[#00FFC2] transition-colors">
                <span>
                  Can I customize call scripts and follow-up sequences?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[#AAAAAA] pb-5">
                <div className="bg-[#111111] p-4 rounded-lg border border-[#222222]">
                  Yes—every script is editable in your dashboard, and new
                  templates can be uploaded. You have complete control over the
                  AI's communication style, tone, and content to ensure it
                  represents your brand perfectly.
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border-b border-[#333333] group"
            >
              <AccordionTrigger className="py-5 text-left hover:no-underline group-hover:text-[#00FFC2] transition-colors">
                <span>How quickly can I get started?</span>
              </AccordionTrigger>
              <AccordionContent className="text-[#AAAAAA] pb-5">
                <div className="bg-[#111111] p-4 rounded-lg border border-[#222222]">
                  Most clients are fully onboarded within 48 hours of signing
                  up. Our implementation team works directly with you to ensure
                  a smooth transition and minimal disruption to your existing
                  operations.
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border-b border-[#333333] group"
            >
              <AccordionTrigger className="py-5 text-left hover:no-underline group-hover:text-[#00FFC2] transition-colors">
                <span>
                  Is there a limit to how many calls the system can make?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[#AAAAAA] pb-5">
                <div className="bg-[#111111] p-4 rounded-lg border border-[#222222]">
                  No, our system scales with your needs. You only pay for what
                  you use. Our infrastructure is built to handle thousands of
                  simultaneous interactions without degradation in quality or
                  performance.
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border-b border-[#333333] group"
            >
              <AccordionTrigger className="py-5 text-left hover:no-underline group-hover:text-[#00FFC2] transition-colors">
                <span>How does the AI handle complex customer inquiries?</span>
              </AccordionTrigger>
              <AccordionContent className="text-[#AAAAAA] pb-5">
                <div className="bg-[#111111] p-4 rounded-lg border border-[#222222]">
                  Our AI is trained to recognize when a conversation requires
                  human intervention and can seamlessly transfer to your team
                  when needed. For routine inquiries, it handles them completely
                  autonomously with natural conversation flow.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Lead Form */}
      <section className="bg-[#111111] py-20 px-6 md:px-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-block bg-[#00FFC2]/10 px-4 py-1 rounded-full mb-4">
            <span className="text-[#00FFC2] text-sm font-medium">
              Limited Time Offer
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started with{" "}
            <span className="text-[#00FFC2]">AI Infrastructure</span>
          </h2>
          <p className="text-[#AAAAAA] mb-6 max-w-xl mx-auto">
            Schedule a personalized demo and receive a custom implementation
            plan tailored to your business needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2">
              <div className="bg-[#00FFC2]/20 rounded-full p-1">
                <Check className="h-4 w-4 text-[#00FFC2]" />
              </div>
              <span className="text-sm">Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#00FFC2]/20 rounded-full p-1">
                <Check className="h-4 w-4 text-[#00FFC2]" />
              </div>
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#00FFC2]/20 rounded-full p-1">
                <Check className="h-4 w-4 text-[#00FFC2]" />
              </div>
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>

          <div className="bg-[#1E1E1E] p-8 rounded-xl border border-[#333333] shadow-[0_0_30px_rgba(0,0,0,0.3)]">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm text-left font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    className="w-full bg-[#0A0A0A] border border-[#333333] rounded-md p-3 focus:border-[#00FFC2] focus:ring-1 focus:ring-[#00FFC2] outline-none transition"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm text-left font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    className="w-full bg-[#0A0A0A] border border-[#333333] rounded-md p-3 focus:border-[#00FFC2] focus:ring-1 focus:ring-[#00FFC2] outline-none transition"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm text-left font-medium"
                >
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@company.com"
                  className="w-full bg-[#0A0A0A] border border-[#333333] rounded-md p-3 focus:border-[#00FFC2] focus:ring-1 focus:ring-[#00FFC2] outline-none transition"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm text-left font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="(123) 456-7890"
                  className="w-full bg-[#0A0A0A] border border-[#333333] rounded-md p-3 focus:border-[#00FFC2] focus:ring-1 focus:ring-[#00FFC2] outline-none transition"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="block text-sm text-left font-medium"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Acme Inc."
                  className="w-full bg-[#0A0A0A] border border-[#333333] rounded-md p-3 focus:border-[#00FFC2] focus:ring-1 focus:ring-[#00FFC2] outline-none transition"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="businessType"
                  className="block text-sm text-left font-medium"
                >
                  Business Type
                </label>
                <select
                  id="businessType"
                  className="w-full bg-[#0A0A0A] border border-[#333333] rounded-md p-3 focus:border-[#00FFC2] focus:ring-1 focus:ring-[#00FFC2] outline-none transition appearance-none"
                >
                  <option value="">Select your business type</option>
                  <option value="cleaning">Cleaning Services</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="hvac">HVAC</option>
                  <option value="other">Other Home Services</option>
                </select>
              </div>
              <Button className="w-full bg-[#00FFC2] hover:bg-[#00FFC2]/90 text-black font-semibold py-6 rounded-md uppercase tracking-wide shadow-[0_0_15px_rgba(0,255,194,0.5)] hover:shadow-[0_0_25px_rgba(0,255,194,0.6)] transition-all">
                Schedule Your Demo
              </Button>
            </form>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#AAAAAA]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#00FFC2]"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>
              Your data is secure and will never be shared with third parties
            </span>
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
                  <span className="text-black font-bold">H</span>
                </div>
                <span className="text-xl font-bold">CasaNeuro</span>
              </div>
              <p className="text-[#AAAAAA] mb-6 max-w-xs">
                Next-generation AI infrastructure for home service businesses,
                automating every customer touchpoint.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#1E1E1E] flex items-center justify-center hover:bg-[#00FFC2]/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#00FFC2]"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#1E1E1E] flex items-center justify-center hover:bg-[#00FFC2]/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#00FFC2]"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#1E1E1E] flex items-center justify-center hover:bg-[#00FFC2]/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#00FFC2]"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:w-2/3">
              <div>
                <h4 className="font-semibold mb-4 text-[#00FFC2]">Services</h4>
                <ul className="space-y-3 text-[#AAAAAA]">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Booking AI
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Cold-Call AI
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Customer Service AI
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Follow-up System
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Integration API
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-[#00FFC2]">Company</h4>
                <ul className="space-y-3 text-[#AAAAAA]">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-[#00FFC2]">Resources</h4>
                <ul className="space-y-3 text-[#AAAAAA]">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
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
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-[#AAAAAA] hover:text-[#00FFC2] transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-[#AAAAAA] hover:text-[#00FFC2] transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-[#AAAAAA] hover:text-[#00FFC2] transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
