"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export default function ROICalculatorPage() {
  const [formData, setFormData] = useState({
    businessType: "",
    employees: 5,
    monthlyLeads: 100,
    conversionRate: 20,
    averageJobValue: 500,
  });

  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "businessType" ? value : Number(value),
    });
  };

  const calculateROI = () => {
    // Simple ROI calculation
    const currentMonthlyRevenue =
      ((formData.monthlyLeads * formData.conversionRate) / 100) *
      formData.averageJobValue;

    // Assuming CasaNeuro improves conversion by 30% and increases average job value by 10%
    const improvedConversionRate = formData.conversionRate * 1.3;
    const improvedJobValue = formData.averageJobValue * 1.1;

    const newMonthlyRevenue =
      ((formData.monthlyLeads * improvedConversionRate) / 100) *
      improvedJobValue;

    const monthlyIncrease = newMonthlyRevenue - currentMonthlyRevenue;
    const annualIncrease = monthlyIncrease * 12;

    // Assuming CasaNeuro costs based on business size
    let monthlyCost;
    if (formData.employees <= 5) monthlyCost = 499;
    else if (formData.employees <= 15) monthlyCost = 999;
    else monthlyCost = 1999;

    const annualCost = monthlyCost * 12;
    const annualROI = ((annualIncrease - annualCost) / annualCost) * 100;

    return {
      currentMonthlyRevenue: Math.round(currentMonthlyRevenue),
      newMonthlyRevenue: Math.round(newMonthlyRevenue),
      monthlyIncrease: Math.round(monthlyIncrease),
      annualIncrease: Math.round(annualIncrease),
      monthlyCost,
      annualCost,
      annualROI: Math.round(annualROI),
      paybackPeriod: Math.round((monthlyCost / monthlyIncrease) * 10) / 10,
    };
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const results = calculateROI();

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <section className="relative py-24 px-6 md:px-20 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-[#00FFC2] text-sm font-medium tracking-wider mb-4">
            CasaNeuro | ROI Calculator
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-white mb-6">
            Calculate Your <span className="text-[#00FFC2]">ROI</span>
          </h1>

          <p className="text-xl text-[#AAAAAA] max-w-2xl mb-10 mx-auto">
            See how much revenue and time you can gain with CasaNeuro's AI
            infrastructure.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="bg-[#111111] py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Calculator Form */}
            <div className="bg-[#1E1E1E] rounded-xl p-8 border border-[#333333]">
              <h2 className="text-2xl font-bold mb-6">
                Enter Your Business Details
              </h2>

              <form onSubmit={handleCalculate} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="businessType"
                    className="block text-sm font-medium"
                  >
                    Business Type
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0A] border border-[#333333] rounded-md p-3 focus:border-[#00FFC2] focus:ring-1 focus:ring-[#00FFC2] outline-none transition"
                    required
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

                <div className="space-y-2">
                  <label
                    htmlFor="employees"
                    className="block text-sm font-medium"
                  >
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    id="employees"
                    name="employees"
                    min="1"
                    max="100"
                    value={formData.employees}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0A] border border-[#333333] rounded-md p-3 focus:border-[#00FFC2] focus:ring-1 focus:ring-[#00FFC2] outline-none transition"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="monthlyLeads"
                    className="block text-sm font-medium"
                  >
                    Monthly Leads
                  </label>
                  <input
                    type="number"
                    id="monthlyLeads"
                    name="monthlyLeads"
                    min="1"
                    value={formData.monthlyLeads}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0A] border border-[#333333] rounded-md p-3 focus:border-[#00FFC2] focus:ring-1 focus:ring-[#00FFC2] outline-none transition"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="conversionRate"
                    className="block text-sm font-medium"
                  >
                    Current Conversion Rate (%)
                  </label>
                  <input
                    type="number"
                    id="conversionRate"
                    name="conversionRate"
                    min="1"
                    max="100"
                    value={formData.conversionRate}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0A] border border-[#333333] rounded-md p-3 focus:border-[#00FFC2] focus:ring-1 focus:ring-[#00FFC2] outline-none transition"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="averageJobValue"
                    className="block text-sm font-medium"
                  >
                    Average Job Value ($)
                  </label>
                  <input
                    type="number"
                    id="averageJobValue"
                    name="averageJobValue"
                    min="1"
                    value={formData.averageJobValue}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0A0A] border border-[#333333] rounded-md p-3 focus:border-[#00FFC2] focus:ring-1 focus:ring-[#00FFC2] outline-none transition"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#00FFC2] text-black hover:bg-[#00FFC2]/90 py-6 font-semibold"
                >
                  Calculate ROI
                </Button>
              </form>
            </div>

            {/* Results Display */}
            <div className="bg-[#1E1E1E] rounded-xl p-8 border border-[#333333] flex flex-col">
              <h2 className="text-2xl font-bold mb-6">
                {showResults ? "Your ROI Results" : "What You'll Learn"}
              </h2>

              {!showResults ? (
                <div className="space-y-4 flex-grow">
                  {[
                    "Projected revenue increase",
                    "Expected conversion rate improvement",
                    "Monthly and annual ROI",
                    "Payback period",
                    "Time saved on administrative tasks",
                    "Recommended CasaNeuro plan",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-[#00FFC2]/20 rounded-full p-1">
                        <Check className="h-4 w-4 text-[#00FFC2]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}

                  <div className="mt-8 p-4 bg-[#0A0A0A] rounded-lg border border-[#333333]">
                    <p className="text-[#AAAAAA] text-sm italic">
                      "This calculator helped us realize we were leaving over
                      $250,000 on the table annually. After implementing
                      CasaNeuro, we've already recouped our investment in the
                      first month."
                    </p>
                    <p className="mt-2 font-medium">
                      — Michael Rodriguez, FixIt Pro
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 flex-grow">
                  <div className="bg-[#0A0A0A] p-6 rounded-lg border border-[#333333]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#AAAAAA]">
                        Current Monthly Revenue
                      </span>
                      <span className="font-bold">
                        ${results.currentMonthlyRevenue.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#AAAAAA]">
                        Projected Monthly Revenue
                      </span>
                      <span className="font-bold text-[#00FFC2]">
                        ${results.newMonthlyRevenue.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-[#333333]">
                      <span>Monthly Increase</span>
                      <span className="font-bold text-[#00FFC2]">
                        +${results.monthlyIncrease.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0A0A0A] p-4 rounded-lg border border-[#333333] text-center">
                      <div className="text-3xl font-bold text-[#00FFC2] mb-1">
                        {results.annualROI}%
                      </div>
                      <div className="text-sm text-[#AAAAAA]">Annual ROI</div>
                    </div>
                    <div className="bg-[#0A0A0A] p-4 rounded-lg border border-[#333333] text-center">
                      <div className="text-3xl font-bold text-[#00FFC2] mb-1">
                        {results.paybackPeriod}
                      </div>
                      <div className="text-sm text-[#AAAAAA]">
                        Month Payback
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0A0A0A] p-6 rounded-lg border border-[#333333]">
                    <h3 className="font-medium mb-3">Annual Impact</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#AAAAAA]">Revenue Increase</span>
                      <span className="font-bold text-[#00FFC2]">
                        +${results.annualIncrease.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#AAAAAA]">
                        CasaNeuro Investment
                      </span>
                      <span className="font-bold">
                        ${results.annualCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-[#333333]">
                      <span>Net Profit</span>
                      <span className="font-bold text-[#00FFC2]">
                        +$
                        {(
                          results.annualIncrease - results.annualCost
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button className="w-full bg-[#00FFC2] text-black hover:bg-[#00FFC2]/90 group">
                      <span>Get Your Custom Implementation Plan</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="bg-[#0A0A0A] py-20 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Your <span className="text-[#00FFC2]">Custom ROI Analysis</span>
          </h2>
          <p className="text-[#AAAAAA] mb-10 max-w-xl mx-auto">
            Schedule a call with our team for a detailed ROI analysis specific
            to your business operations.
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
