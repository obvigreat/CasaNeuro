import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, RefreshCw, Check, ArrowRight } from "lucide-react";

export default function SalesPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-20 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-[#00FFC2] text-sm font-medium tracking-wider mb-4">
            CasaNeuro Product
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-white mb-6">
            CasaNeuro <span className="text-[#00FFC2]">Sales</span>
          </h1>

          <p className="text-xl text-[#AAAAAA] max-w-2xl mb-10 mx-auto">
            Automate customer service and follow-up processes to nurture leads
            through the entire sales cycle with our AI-powered system.
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
              Our Sales system combines customer service management and
              intelligent follow-up to convert more leads and maintain strong
              customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#1E1E1E] border-[#333333] hover:border-[#00FFC2] transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#111111] mb-4">
                  <MessageSquare className="w-6 h-6 text-[#00FFC2]" />
                </div>
                <CardTitle className="text-xl font-semibold text-white">
                  Customer Service Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#AAAAAA] mb-6">
                  Resolve inquiries and maintain relationships with consistent
                  quality across all customer interactions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-[#00FFC2]/20 rounded-full p-1">
                      <Check className="h-3 w-3 text-[#00FFC2]" />
                    </div>
                    <span className="text-sm text-[#AAAAAA]">
                      24/7 AI-powered customer support
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-[#00FFC2]/20 rounded-full p-1">
                      <Check className="h-3 w-3 text-[#00FFC2]" />
                    </div>
                    <span className="text-sm text-[#AAAAAA]">
                      Intelligent issue categorization and routing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-[#00FFC2]/20 rounded-full p-1">
                      <Check className="h-3 w-3 text-[#00FFC2]" />
                    </div>
                    <span className="text-sm text-[#AAAAAA]">
                      Seamless handoff to human agents when needed
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1E1E1E] border-[#333333] hover:border-[#00FFC2] transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#111111] mb-4">
                  <RefreshCw className="w-6 h-6 text-[#00FFC2]" />
                </div>
                <CardTitle className="text-xl font-semibold text-white">
                  Intelligent Follow-up System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#AAAAAA] mb-6">
                  Automatically nurture leads through every stage of the sales
                  cycle with personalized communication.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-[#00FFC2]/20 rounded-full p-1">
                      <Check className="h-3 w-3 text-[#00FFC2]" />
                    </div>
                    <span className="text-sm text-[#AAAAAA]">
                      Behavior-triggered follow-up sequences
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-[#00FFC2]/20 rounded-full p-1">
                      <Check className="h-3 w-3 text-[#00FFC2]" />
                    </div>
                    <span className="text-sm text-[#AAAAAA]">
                      Multi-channel communication (email, SMS, calls)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-[#00FFC2]/20 rounded-full p-1">
                      <Check className="h-3 w-3 text-[#00FFC2]" />
                    </div>
                    <span className="text-sm text-[#AAAAAA]">
                      Personalized content based on customer data
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Complete Infrastructure Solution */}
      <section className="bg-[#0A0A0A] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Complete{" "}
              <span className="text-[#00FFC2]">Infrastructure Solution</span>
            </h2>
            <p className="text-[#AAAAAA] max-w-2xl mx-auto">
              CasaNeuro exemplifies what a true AI infrastructure looks like.
              This comprehensive system doesn't just handle a single task—it
              manages the entire customer acquisition and relationship process.
            </p>
          </div>

          <div className="bg-[#1E1E1E] p-8 rounded-xl border border-[#333333]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#00FFC2]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-[#00FFC2]" />
                    </span>
                    <span>Integrated Ecosystem</span>
                  </h3>
                  <p className="text-[#AAAAAA] pl-10">
                    All CasaNeuro products work seamlessly together, creating a
                    unified workflow from lead generation to customer service.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#00FFC2]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-[#00FFC2]" />
                    </span>
                    <span>Continuous Learning</span>
                  </h3>
                  <p className="text-[#AAAAAA] pl-10">
                    Our AI systems constantly learn from interactions, becoming
                    more effective over time and creating a widening competitive
                    advantage.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#00FFC2]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-[#00FFC2]" />
                    </span>
                    <span>Seamless Integration</span>
                  </h3>
                  <p className="text-[#AAAAAA] pl-10">
                    Connects with your existing business systems, including CRM,
                    field service management, and accounting platforms.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#00FFC2]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-[#00FFC2]" />
                    </span>
                    <span>Scalable Architecture</span>
                  </h3>
                  <p className="text-[#AAAAAA] pl-10">
                    Handles thousands of simultaneous interactions without
                    degradation in quality or performance as your business
                    grows.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#00FFC2]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-[#00FFC2]" />
                    </span>
                    <span>Data-Driven Insights</span>
                  </h3>
                  <p className="text-[#AAAAAA] pl-10">
                    Comprehensive analytics and reporting provide actionable
                    insights to optimize your business operations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#00FFC2]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-[#00FFC2]" />
                    </span>
                    <span>Enterprise-Grade Security</span>
                  </h3>
                  <p className="text-[#AAAAAA] pl-10">
                    Bank-level encryption and compliance with industry standards
                    ensure your data and customer information remain secure.
                  </p>
                </div>
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
                Our clients see dramatic improvements in their customer service
                and sales metrics after implementing CasaNeuro Sales.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#1E1E1E] p-6 rounded-lg border border-[#333333]">
                  <p className="text-3xl font-bold text-[#00FFC2] mb-2">65%</p>
                  <p className="text-sm text-[#AAAAAA]">
                    Increase in conversion rate
                  </p>
                </div>
                <div className="bg-[#1E1E1E] p-6 rounded-lg border border-[#333333]">
                  <p className="text-3xl font-bold text-[#00FFC2] mb-2">90%</p>
                  <p className="text-sm text-[#AAAAAA]">
                    Customer inquiry resolution
                  </p>
                </div>
                <div className="bg-[#1E1E1E] p-6 rounded-lg border border-[#333333]">
                  <p className="text-3xl font-bold text-[#00FFC2] mb-2">45%</p>
                  <p className="text-sm text-[#AAAAAA]">
                    Increase in repeat business
                  </p>
                </div>
                <div className="bg-[#1E1E1E] p-6 rounded-lg border border-[#333333]">
                  <p className="text-3xl font-bold text-[#00FFC2] mb-2">24/7</p>
                  <p className="text-sm text-[#AAAAAA]">
                    Customer support coverage
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-[#1E1E1E] p-8 rounded-xl border border-[#333333]">
              <blockquote className="mb-6">
                <p className="text-lg italic mb-4">
                  "The follow-up system has transformed our sales process. We're
                  converting 65% more leads, and our customers consistently
                  comment on how responsive and helpful our service is—even
                  though it's mostly automated!"
                </p>
                <cite className="text-[#AAAAAA] block">
                  — David Wilson, FixIt Pro Repairs
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
            Customer Relationships?
          </h2>
          <p className="text-[#AAAAAA] mb-8 max-w-xl mx-auto">
            Join the hundreds of home service businesses already using CasaNeuro
            Sales to automate their customer service and follow-up processes.
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
