import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <section className="relative py-24 px-6 md:px-20 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-[#00FFC2] text-sm font-medium tracking-wider mb-4">
            CasaNeuro | Pricing
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-white mb-6">
            Simple, Transparent <span className="text-[#00FFC2]">Pricing</span>
          </h1>

          <p className="text-xl text-[#AAAAAA] max-w-2xl mb-10 mx-auto">
            Choose the plan that fits your business needs with no hidden fees or
            long-term contracts.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="bg-[#111111] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-[#1E1E1E] p-1 rounded-full flex">
              <Button className="rounded-full px-6 bg-[#00FFC2] text-black hover:bg-[#00FFC2]">
                Monthly
              </Button>
              <Button className="rounded-full px-6 bg-transparent text-white hover:bg-[#333333]">
                Annual (Save 20%)
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-[#1E1E1E] rounded-xl p-8 border border-[#333333] hover:border-[#00FFC2] transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <p className="text-[#AAAAAA] text-sm mb-4">
                  Perfect for small businesses just getting started with AI
                </p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl font-bold">$499</span>
                  <span className="text-[#AAAAAA] mb-1">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {[
                  "AI Booking Assistant",
                  "Basic Call Scripts",
                  "Email Follow-up",
                  "5 Concurrent Calls",
                  "Standard Support",
                  "Basic Analytics",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-[#00FFC2]/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-[#00FFC2]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-transparent border border-[#00FFC2] text-[#00FFC2] hover:bg-[#00FFC2]/10">
                Get Started
              </Button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-b from-[#1E1E1E] to-[#1E1E1E] rounded-xl p-8 border border-[#00FFC2] relative flex flex-col shadow-[0_0_30px_rgba(0,255,194,0.2)]">
              <div className="absolute top-0 right-0 bg-[#00FFC2] text-black font-medium py-1 px-4 rounded-bl-lg rounded-tr-lg text-sm">
                Most Popular
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <p className="text-[#AAAAAA] text-sm mb-4">
                  Ideal for growing businesses with established customer base
                </p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl font-bold">$999</span>
                  <span className="text-[#AAAAAA] mb-1">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {[
                  "Everything in Starter",
                  "AI Cold-Calling",
                  "SMS & Voice Follow-up",
                  "15 Concurrent Calls",
                  "Priority Support",
                  "Advanced Analytics",
                  "Custom Call Scripts",
                  "CRM Integration",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-[#00FFC2]/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-[#00FFC2]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-[#00FFC2] text-black hover:bg-[#00FFC2]/90 shadow-[0_0_15px_rgba(0,255,194,0.5)]">
                Get Started
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#1E1E1E] rounded-xl p-8 border border-[#333333] hover:border-[#00FFC2] transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-[#AAAAAA] text-sm mb-4">
                  For large operations requiring maximum automation & scale
                </p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {[
                  "Everything in Professional",
                  "Unlimited Concurrent Calls",
                  "White-labeled Solution",
                  "Custom AI Training",
                  "Dedicated Account Manager",
                  "24/7 Premium Support",
                  "API Access",
                  "Custom Integrations",
                  "Multi-location Support",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-[#00FFC2]/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-[#00FFC2]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-transparent border border-[#00FFC2] text-[#00FFC2] hover:bg-[#00FFC2]/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#0A0A0A] py-20 px-6 md:px-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Frequently Asked <span className="text-[#00FFC2]">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "Are there any setup fees?",
                answer:
                  "No, there are no setup fees or hidden costs. The price you see is the price you pay, and our team will handle the entire implementation process.",
              },
              {
                question: "Can I change plans later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "We offer a 14-day money-back guarantee if you're not satisfied with our service. After that period, we do not provide refunds for the current billing cycle.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, ACH transfers, and wire transfers for Enterprise plans.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333333]"
              >
                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-[#AAAAAA]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="bg-[#111111] py-20 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a <span className="text-[#00FFC2]">Custom Solution?</span>
          </h2>
          <p className="text-[#AAAAAA] mb-10 max-w-xl mx-auto">
            Contact our sales team for a personalized quote tailored to your
            specific business requirements.
          </p>

          <div className="w-full h-[875px] overflow-hidden bg-[#1E1E1E] p-8 rounded-xl border border-[#333333] shadow-[0_0_30px_rgba(0,0,0,0.3)]">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/P2JncbvHJb0xROqjr3WE"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "6px"
              }}
              id="inline-P2JncbvHJb0xROqjr3WE" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Opt In Form - CasaNeuro - Inline"
              data-height="736"
              data-layout-iframe-id="inline-P2JncbvHJb0xROqjr3WE"
              data-form-id="P2JncbvHJb0xROqjr3WE"
              title="Opt In Form - CasaNeuro - Inline"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
