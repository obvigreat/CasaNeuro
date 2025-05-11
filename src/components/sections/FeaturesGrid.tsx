import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneCall, Calendar, MessageSquare, RefreshCw } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon,
  title,
  description = "Feature description",
}: FeatureCardProps) => {
  return (
    <Card className="bg-[#1E1E1E] border-[#333333] hover:border-[#00FFC2] transition-all duration-300 h-full">
      <CardHeader>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#111111] mb-4">
          <div className="text-[#00FFC2]">{icon}</div>
        </div>
        <CardTitle className="text-xl font-semibold text-white">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[#AAAAAA]">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Automated Appointment Booking",
      description:
        "From lead capture to confirmation & prep—completely hands-free.",
    },
    {
      icon: <PhoneCall className="w-6 h-6" />,
      title: "Scalable Cold Calling",
      description:
        "Thousands of personalized outreach calls in parallel with natural flow.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Customer Service Management",
      description:
        "Resolve inquiries and nurture relationships with consistent quality.",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Intelligent Follow-up System",
      description:
        "Automatically nurture leads through every stage of the sales cycle.",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#111111]">
      <div className="container mx-auto px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Core Features
          </h2>
          <p className="text-[#AAAAAA] max-w-2xl mx-auto">
            Our CasaNeuro platform automates your entire home service business
            workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
