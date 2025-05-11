import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  FileText,
  Video,
  Headphones,
} from "lucide-react";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <section className="relative py-24 px-6 md:px-20 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-[#00FFC2] text-sm font-medium tracking-wider mb-4">
            CasaNeuro | Resources Hub
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-white mb-6">
            Knowledge <span className="text-[#00FFC2]">& Insights</span>
          </h1>

          <p className="text-xl text-[#AAAAAA] max-w-2xl mb-10 mx-auto">
            Explore our collection of guides, webinars, and tools to help you
            maximize your AI infrastructure.
          </p>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="bg-[#111111] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center bg-[#1E1E1E] rounded-xl p-8 border border-[#333333]">
            <div>
              <div className="inline-block bg-[#00FFC2]/10 px-4 py-1 rounded-full mb-4">
                <span className="text-[#00FFC2] text-sm font-medium">
                  Featured Guide
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The Complete Guide to AI Implementation in Home Services
              </h2>
              <p className="text-[#AAAAAA] mb-6">
                Learn how to seamlessly integrate AI into your home service
                business operations, from initial setup to advanced optimization
                techniques.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-[#0A0A0A] px-3 py-1 rounded-full">
                  <FileText className="h-4 w-4 text-[#00FFC2]" />
                  <span className="text-xs">45-page PDF</span>
                </div>
                <div className="flex items-center gap-2 bg-[#0A0A0A] px-3 py-1 rounded-full">
                  <Download className="h-4 w-4 text-[#00FFC2]" />
                  <span className="text-xs">3,500+ Downloads</span>
                </div>
              </div>
              <Button className="bg-[#00FFC2] text-black hover:bg-[#00FFC2]/90 group">
                <span>Download Free Guide</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="bg-[#0A0A0A] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80"
                alt="AI Implementation Guide"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="bg-[#0A0A0A] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
              Browse <span className="text-[#00FFC2]">Resources</span>
            </h2>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-[#333333] hover:border-[#00FFC2] hover:text-[#00FFC2]"
              >
                All Resources
              </Button>
              <Button
                variant="outline"
                className="border-[#333333] hover:border-[#00FFC2] hover:text-[#00FFC2]"
              >
                Guides
              </Button>
              <Button
                variant="outline"
                className="border-[#333333] hover:border-[#00FFC2] hover:text-[#00FFC2]"
              >
                Webinars
              </Button>
              <Button
                variant="outline"
                className="border-[#333333] hover:border-[#00FFC2] hover:text-[#00FFC2]"
              >
                Tools
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "10 AI Scripts That Convert Leads into Bookings",
                type: "Guide",
                icon: <FileText className="h-5 w-5" />,
                image:
                  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
              },
              {
                title: "Mastering AI Follow-up Sequences",
                type: "Webinar",
                icon: <Video className="h-5 w-5" />,
                image:
                  "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
              },
              {
                title: "AI Response Time Calculator",
                type: "Tool",
                icon: <Download className="h-5 w-5" />,
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
              },
              {
                title: "The Future of AI in Home Services",
                type: "Podcast",
                icon: <Headphones className="h-5 w-5" />,
                image:
                  "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&q=80",
              },
              {
                title: "Optimizing Your AI for Local Markets",
                type: "Guide",
                icon: <FileText className="h-5 w-5" />,
                image:
                  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
              },
              {
                title: "AI Integration with CRM Systems",
                type: "Webinar",
                icon: <Video className="h-5 w-5" />,
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
              },
            ].map((resource, i) => (
              <div
                key={i}
                className="bg-[#1E1E1E] rounded-xl overflow-hidden border border-[#333333] hover:border-[#00FFC2] transition-all duration-300 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-[#00FFC2]/10 p-1 rounded-full">
                      {React.cloneElement(resource.icon, {
                        className: "h-4 w-4 text-[#00FFC2]",
                      })}
                    </div>
                    <span className="text-xs font-medium text-[#00FFC2]">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#00FFC2] transition-colors">
                    {resource.title}
                  </h3>
                  <Button
                    variant="outline"
                    className="w-full border-[#333333] hover:border-[#00FFC2] hover:text-[#00FFC2] group-hover:border-[#00FFC2] transition-colors"
                  >
                    Access Resource
                  </Button>
                </div>
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
            Get <span className="text-[#00FFC2]">Personalized Guidance</span>
          </h2>
          <p className="text-[#AAAAAA] mb-10 max-w-xl mx-auto">
            Schedule a consultation with our AI specialists to receive tailored
            recommendations for your business.
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
