import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <section className="relative py-24 px-6 md:px-20 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-[#00FFC2] text-sm font-medium tracking-wider mb-4">
            CasaNeuro | Integrations
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-white mb-6">
            Seamless <span className="text-[#00FFC2]">Integrations</span>
          </h1>

          <p className="text-xl text-[#AAAAAA] max-w-2xl mb-10 mx-auto">
            Connect CasaNeuro with your existing tools and platforms for a
            unified workflow.
          </p>
        </div>
      </section>

      {/* Featured Integration */}
      <section className="bg-[#111111] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center bg-[#1E1E1E] rounded-xl p-8 border border-[#333333]">
            <div>
              <div className="inline-block bg-[#00FFC2]/10 px-4 py-1 rounded-full mb-4">
                <span className="text-[#00FFC2] text-sm font-medium">
                  Featured Integration
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                GoHighLevel + CasaNeuro
              </h2>
              <p className="text-[#AAAAAA] mb-6">
                Supercharge your GoHighLevel CRM with CasaNeuro's AI
                capabilities. Automate lead nurturing, appointment booking, and
                follow-ups while keeping all your customer data in sync.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-[#0A0A0A] px-3 py-1 rounded-full">
                  <span className="text-xs">Bi-directional Sync</span>
                </div>
                <div className="flex items-center gap-2 bg-[#0A0A0A] px-3 py-1 rounded-full">
                  <span className="text-xs">Real-time Updates</span>
                </div>
                <div className="flex items-center gap-2 bg-[#0A0A0A] px-3 py-1 rounded-full">
                  <span className="text-xs">No-code Setup</span>
                </div>
              </div>
              <Button className="bg-[#00FFC2] text-black hover:bg-[#00FFC2]/90 group">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="bg-[#0A0A0A] rounded-lg p-8 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-2xl">GHL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="bg-[#0A0A0A] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
              All <span className="text-[#00FFC2]">Integrations</span>
            </h2>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-[#333333] hover:border-[#00FFC2] hover:text-[#00FFC2]"
              >
                All
              </Button>
              <Button
                variant="outline"
                className="border-[#333333] hover:border-[#00FFC2] hover:text-[#00FFC2]"
              >
                CRM
              </Button>
              <Button
                variant="outline"
                className="border-[#333333] hover:border-[#00FFC2] hover:text-[#00FFC2]"
              >
                Scheduling
              </Button>
              <Button
                variant="outline"
                className="border-[#333333] hover:border-[#00FFC2] hover:text-[#00FFC2]"
              >
                Payments
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "GoHighLevel", category: "CRM" },
              { name: "Salesforce", category: "CRM" },
              { name: "HubSpot", category: "CRM" },
              { name: "Calendly", category: "Scheduling" },
              { name: "Acuity", category: "Scheduling" },
              { name: "ServiceTitan", category: "Field Service" },
              { name: "Housecall Pro", category: "Field Service" },
              { name: "Jobber", category: "Field Service" },
              { name: "Stripe", category: "Payments" },
              { name: "QuickBooks", category: "Accounting" },
              { name: "Zapier", category: "Automation" },
              { name: "Twilio", category: "Communications" },
              { name: "Google Calendar", category: "Scheduling" },
              { name: "Outlook", category: "Email" },
              { name: "Zoom", category: "Meetings" },
              { name: "Square", category: "Payments" },
            ].map((integration, i) => (
              <div
                key={i}
                className="bg-[#1E1E1E] rounded-xl p-6 border border-[#333333] hover:border-[#00FFC2] transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                  <span className="text-black font-bold">
                    {integration.name.substring(0, 2)}
                  </span>
                </div>
                <h3 className="font-medium mb-2 group-hover:text-[#00FFC2] transition-colors">
                  {integration.name}
                </h3>
                <span className="text-xs text-[#AAAAAA] mb-4">
                  {integration.category}
                </span>
                <Button
                  variant="outline"
                  className="mt-auto w-full border-[#333333] hover:border-[#00FFC2] hover:text-[#00FFC2] group-hover:border-[#00FFC2] transition-colors text-sm"
                >
                  Connect
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="bg-[#111111] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Integration <span className="text-[#00FFC2]">Process</span>
            </h2>
            <p className="text-[#AAAAAA] max-w-2xl mx-auto">
              Getting connected is simple with our streamlined setup process
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Select Integration",
                description:
                  "Choose from our library of pre-built integrations",
              },
              {
                step: "2",
                title: "Authorize Connection",
                description: "Securely connect your accounts with OAuth",
              },
              {
                step: "3",
                title: "Configure Settings",
                description: "Customize data flow and automation rules",
              },
              {
                step: "4",
                title: "Go Live",
                description: "Activate your integration and start automating",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-[#1E1E1E] rounded-xl p-6 border border-[#333333] relative group hover:border-[#00FFC2] transition-all duration-300"
              >
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-[#00FFC2] flex items-center justify-center text-black font-bold">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg mb-3 mt-2 group-hover:text-[#00FFC2] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#AAAAAA] text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="bg-[#0A0A0A] py-20 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a <span className="text-[#00FFC2]">Custom Integration?</span>
          </h2>
          <p className="text-[#AAAAAA] mb-10 max-w-xl mx-auto">
            Our team can build custom integrations for your specific tech stack.
            Contact us to discuss your requirements.
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
