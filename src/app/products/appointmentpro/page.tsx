import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Check, ArrowRight } from "lucide-react";

export default function AppointmentProPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-20 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-[#00FFC2] text-sm font-medium tracking-wider mb-4">
            CasaNeuro Product
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-white mb-6">
            CasaNeuro <span className="text-[#00FFC2]">Appointment Pro</span>
          </h1>

          <p className="text-xl text-[#AAAAAA] max-w-2xl mb-10 mx-auto">
            Automate your entire booking process from initial contact to
            confirmation and preparation with our AI-powered scheduling system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#00FFC2] text-black hover:bg-[#00FFC2]/90 shadow-[0_0_15px_rgba(0,255,194,0.5)] transition-all hover:shadow-[0_0_25px_rgba(0,255,194,0.7)] text-base font-semibold uppercase px-8 py-6">
              Get Started
            </Button>

            <Button
              variant="outline"
              className="border-[#00FFC2] text-[#00FFC2] hover:bg-[#00FFC2]/10 text-base font-semibold uppercase px-8 py-6"
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" className="fill-[#111111] w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Features Section */}
      <section className="bg-[#111111] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Key <span className="text-[#00FFC2]">Features</span>
            </h2>
            <p className="text-[#AAAAAA] max-w-2xl mx-auto">
              Our Appointment Pro system streamlines your booking process with
              intelligent automation and seamless customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#1E1E1E] border-[#333333] hover:border-[#00FFC2] transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#111111] mb-4">
                  <Calendar className="w-6 h-6 text-[#00FFC2]" />
                </div>
                <CardTitle className="text-xl font-semibold text-white">
                  Automated Appointment Booking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#AAAAAA] mb-6">
                  Handle the entire booking process from initial contact to
                  confirmation and preparation completely hands-free.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-[#00FFC2]/20 rounded-full p-1">
                      <Check className="h-3 w-3 text-[#00FFC2]" />
                    </div>
                    <span className="text-sm text-[#AAAAAA]">
                      Smart scheduling that optimizes your team's time
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-[#00FFC2]/20 rounded-full p-1">
                      <Check className="h-3 w-3 text-[#00FFC2]" />
                    </div>
                    <span className="text-sm text-[#AAAAAA]">
                      Automated confirmation and reminder sequences
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-[#00FFC2]/20 rounded-full p-1">
                      <Check className="h-3 w-3 text-[#00FFC2]" />
                    </div>
                    <span className="text-sm text-[#AAAAAA]">
                      Pre-appointment information gathering
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1E1E1E] border-[#333333] hover:border-[#00FFC2] transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#111111] mb-4">
                  <Clock className="w-6 h-6 text-[#00FFC2]" />
                </div>
                <CardTitle className="text-xl font-semibold text-white">
                  Intelligent Scheduling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#AAAAAA] mb-6">
                  Optimize your team's schedule with AI that considers travel
                  time, job complexity, and technician specialization.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-[#00FFC2]/20 rounded-full p-1">
                      <Check className="h-3 w-3 text-[#00FFC2]" />
                    </div>
                    <span className="text-sm text-[#AAAAAA]">
                      Route optimization to minimize travel time
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-[#00FFC2]/20 rounded-full p-1">
                      <Check className="h-3 w-3 text-[#00FFC2]" />
                    </div>
                    <span className="text-sm text-[#AAAAAA]">
                      Skill-based assignment for specialized jobs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-[#00FFC2]/20 rounded-full p-1">
                      <Check className="h-3 w-3 text-[#00FFC2]" />
                    </div>
                    <span className="text-sm text-[#AAAAAA]">
                      Dynamic rescheduling for cancellations and emergencies
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#0A0A0A] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It <span className="text-[#00FFC2]">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                step: "1",
                title: "Customer Request",
                description:
                  "Customer requests service via phone, website, or other channels.",
              },
              {
                step: "2",
                title: "AI Conversation",
                description:
                  "AI engages in natural conversation to gather details and preferences.",
              },
              {
                step: "3",
                title: "Smart Scheduling",
                description:
                  "System finds optimal time slots based on availability and efficiency.",
              },
              {
                step: "4",
                title: "Confirmation & Prep",
                description:
                  "Automated reminders and preparation instructions are sent to both customer and team.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333333] relative"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#00FFC2] flex items-center justify-center text-black font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-3 mt-2">
                  {item.title}
                </h3>
                <p className="text-[#AAAAAA] text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#1E1E1E] p-8 rounded-xl border border-[#333333]">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="w-20 h-20 bg-[#111111] rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <Calendar className="w-10 h-10 text-[#00FFC2]" />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-4">
                  Seamless Integration
                </h3>
                <p className="text-[#AAAAAA] mb-4">
                  Appointment Pro integrates with your existing systems,
                  including CRM, field service management software, and
                  accounting platforms for a unified workflow.
                </p>
                <Button
                  variant="outline"
                  className="border-[#00FFC2] text-[#00FFC2] hover:bg-[#00FFC2]/10 group"
                >
                  <span>View Integration Partners</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-[#111111] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Proven <span className="text-[#00FFC2]">Results</span>
              </h2>
              <p className="text-[#AAAAAA] mb-8">
                Our clients see dramatic improvements in their scheduling
                efficiency and customer satisfaction after implementing
                CasaNeuro Appointment Pro.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#1E1E1E] p-6 rounded-lg border border-[#333333]">
                  <p className="text-3xl font-bold text-[#00FFC2] mb-2">85%</p>
                  <p className="text-sm text-[#AAAAAA]">
                    Reduction in scheduling time
                  </p>
                </div>
                <div className="bg-[#1E1E1E] p-6 rounded-lg border border-[#333333]">
                  <p className="text-3xl font-bold text-[#00FFC2] mb-2">40%</p>
                  <p className="text-sm text-[#AAAAAA]">
                    Increase in daily appointments
                  </p>
                </div>
                <div className="bg-[#1E1E1E] p-6 rounded-lg border border-[#333333]">
                  <p className="text-3xl font-bold text-[#00FFC2] mb-2">95%</p>
                  <p className="text-sm text-[#AAAAAA]">
                    Customer satisfaction rate
                  </p>
                </div>
                <div className="bg-[#1E1E1E] p-6 rounded-lg border border-[#333333]">
                  <p className="text-3xl font-bold text-[#00FFC2] mb-2">30%</p>
                  <p className="text-sm text-[#AAAAAA]">
                    Reduction in no-shows
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-[#1E1E1E] p-8 rounded-xl border border-[#333333]">
              <blockquote className="mb-6">
                <p className="text-lg italic mb-4">
                  "Appointment Pro has transformed our scheduling process. We've
                  been able to handle 40% more appointments with the same staff,
                  and our customers love the seamless booking experience."
                </p>
                <cite className="text-[#AAAAAA] block">
                  — Jennifer Lee, ComfortAir HVAC
                </cite>
              </blockquote>

              <Button
                variant="outline"
                className="w-full border-[#00FFC2] text-[#00FFC2] hover:bg-[#00FFC2]/10 group"
              >
                <span>Read More Success Stories</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A0A0A] py-20 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-[#00FFC2]">Transform</span> Your
            Booking Process?
          </h2>
          <p className="text-[#AAAAAA] mb-8 max-w-xl mx-auto">
            Join the hundreds of home service businesses already using CasaNeuro
            Appointment Pro to automate their scheduling and improve customer
            satisfaction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#00FFC2] text-black hover:bg-[#00FFC2]/90 shadow-[0_0_15px_rgba(0,255,194,0.5)] transition-all hover:shadow-[0_0_25px_rgba(0,255,194,0.7)] text-base font-semibold px-8 py-6">
              Schedule a Demo
            </Button>

            <Button
              variant="outline"
              className="border-[#00FFC2] text-[#00FFC2] hover:bg-[#00FFC2]/10 text-base font-semibold px-8 py-6"
            >
              View Pricing
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
