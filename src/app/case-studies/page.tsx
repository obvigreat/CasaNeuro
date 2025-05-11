import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <section className="relative py-24 px-6 md:px-20 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-[#00FFC2] text-sm font-medium tracking-wider mb-4">
            CasaNeuro | Success Stories
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-white mb-6">
            Real Results <span className="text-[#00FFC2]">Real Businesses</span>
          </h1>

          <p className="text-xl text-[#AAAAAA] max-w-2xl mb-10 mx-auto">
            See how home service businesses are transforming their operations
            with our AI infrastructure.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-[#111111] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CleanCo Increases Bookings by 300%",
                industry: "Cleaning Services",
                challenge: "Manual booking process causing lost leads",
                solution: "AI Booking Assistant",
                result: "3x increase in conversion rate",
                image:
                  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
              },
              {
                title: "GreenScape Reduces No-Shows by 75%",
                industry: "Landscaping",
                challenge: "High rate of appointment no-shows",
                solution: "AI Follow-up System",
                result: "75% reduction in missed appointments",
                image:
                  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
              },
              {
                title: "FixIt Pro Cuts Response Time by 90%",
                industry: "Home Repairs",
                challenge: "Slow customer service response times",
                solution: "AI Customer Service",
                result: "Response time down from hours to minutes",
                image:
                  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
              },
              {
                title: "HomeGuard Scales Without Adding Staff",
                industry: "Security Systems",
                challenge: "Growth limited by staffing constraints",
                solution: "Complete AI Infrastructure",
                result: "200% growth with same team size",
                image:
                  "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
              },
              {
                title: "ComfortAir Boosts Customer Satisfaction",
                industry: "HVAC",
                challenge: "Inconsistent customer experience",
                solution: "AI Communication Suite",
                result: "Customer satisfaction up 45%",
                image:
                  "https://images.unsplash.com/photo-1631545308546-3e9c78a5a695?w=800&q=80",
              },
              {
                title: "WaterWorks Optimizes Scheduling",
                industry: "Plumbing",
                challenge: "Inefficient technician scheduling",
                solution: "AI Dispatch System",
                result: "30% more jobs completed per day",
                image:
                  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
              },
            ].map((study, i) => (
              <div
                key={i}
                className="bg-[#1E1E1E] rounded-xl overflow-hidden border border-[#333333] hover:border-[#00FFC2] transition-all duration-300 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium bg-[#00FFC2]/10 text-[#00FFC2] px-2 py-1 rounded">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#00FFC2] transition-colors">
                    {study.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div>
                      <span className="text-[#AAAAAA] text-sm">Challenge:</span>
                      <p className="text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="text-[#AAAAAA] text-sm">Solution:</span>
                      <p className="text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <span className="text-[#AAAAAA] text-sm">Result:</span>
                      <p className="text-sm font-medium text-[#00FFC2]">
                        {study.result}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-[#333333] hover:border-[#00FFC2] hover:text-[#00FFC2] group-hover:border-[#00FFC2] transition-colors"
                  >
                    Read Full Case Study
                  </Button>
                </div>
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
            Ready to See{" "}
            <span className="text-[#00FFC2]">Similar Results?</span>
          </h2>
          <p className="text-[#AAAAAA] mb-10 max-w-xl mx-auto">
            Schedule a personalized demo and receive a custom implementation
            plan tailored to your business needs.
          </p>

          <div className="w-full h-[875px] overflow-hidden bg-[#1E1E1E] p-8 rounded-xl border border-[#333333] shadow-[0_0_30px_rgba(0,0,0,0.3)]">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/MNMFfY5cuKirdAM9FHlZ"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "3px",
              }}
              id="inline-MNMFfY5cuKirdAM9FHlZ"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Opt In Form - CasaNeuro"
              data-height="875"
              data-layout-iframe-id="inline-MNMFfY5cuKirdAM9FHlZ"
              data-form-id="MNMFfY5cuKirdAM9FHlZ"
              title="Opt In Form - CasaNeuro"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
