"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  accentText?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export default function HeroSection({
  title = "Next-Gen AI Infrastructure",
  subtitle = "A fully integrated suite that automates booking, outreach, service, and nurturing—end-to-end.",
  accentText = "for Home Services",
  primaryButtonText = "Get Started",
  secondaryButtonText = "View Demo",
}: HeroSectionProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isAutoPopupOpen, setIsAutoPopupOpen] = useState(true);

  useEffect(() => {
    // Load the form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative py-24 px-6 md:px-20 bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="text-[#00FFC2] text-sm font-medium tracking-wider mb-4">
          CasaNeuro | AI Infrastructure
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-white mb-6">
          {title} <span className="text-[#00FFC2]">{accentText}</span>
        </h1>

        <p className="text-xl text-[#AAAAAA] max-w-2xl mb-6 mx-auto">
          {subtitle}
        </p>

        {/* VSL Placeholder */}
        <div
          className="relative max-w-3xl mx-auto mb-10 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,255,194,0.2)] cursor-pointer"
          onClick={() => setIsDemoOpen(true)}
        >
          <div className="aspect-video bg-[#111111] relative">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
              alt="AI Home Services Dashboard"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-20 h-20 rounded-full bg-[#00FFC2]/20 flex items-center justify-center backdrop-blur-sm border border-[#00FFC2]/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white text-left">
              <p className="text-sm font-medium bg-black/50 inline-block px-3 py-1 rounded-full text-[#00FFC2] backdrop-blur-sm">
                Watch Video Demo
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => setIsFormOpen(true)}
            className="bg-[#00FFC2] text-black hover:bg-[#00FFC2]/90 shadow-[0_0_15px_rgba(0,255,194,0.5)] transition-all hover:shadow-[0_0_25px_rgba(0,255,194,0.7)] text-base font-semibold uppercase px-8 py-6"
          >
            {primaryButtonText}
          </Button>

          <Button
            onClick={() => setIsDemoOpen(true)}
            variant="outline"
            className="border-[#00FFC2] text-[#00FFC2] hover:bg-[#00FFC2]/10 text-base font-semibold uppercase px-8 py-6"
          >
            {secondaryButtonText}
          </Button>
        </div>
      </div>

      {/* Decorative wave SVG at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[50px] md:h-[80px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#111111"
          />
        </svg>
      </div>

      {/* Auto Lead Capture Form Popup */}
      <Dialog open={isAutoPopupOpen} onOpenChange={setIsAutoPopupOpen}>
        <DialogContent className="bg-[#1E1E1E] border-[#333333] text-white max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              
            </DialogTitle>
          </DialogHeader>
          <div className="w-full h-[875px] overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/MNMFfY5cuKirdAM9FHlZ"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "3px",
              }}
              id="auto-popup-MNMFfY5cuKirdAM9FHlZ"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Opt In Form - CasaNeuro"
              data-height="875"
              data-layout-iframe-id="auto-popup-MNMFfY5cuKirdAM9FHlZ"
              data-form-id="MNMFfY5cuKirdAM9FHlZ"
              title="Opt In Form - CasaNeuro"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="bg-[#1E1E1E] border-[#333333] text-white max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              
            </DialogTitle>
          </DialogHeader>
          <div className="w-full h-[875px] overflow-hidden">
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
        </DialogContent>
      </Dialog>

      {/* Demo Video Dialog */}
      <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
        <DialogContent className="bg-[#1E1E1E] border-[#333333] text-white max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              Product Demo
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-[#111111] rounded-md overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#00FFC2]/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
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
                <p className="text-[#AAAAAA]">Demo video would play here</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
