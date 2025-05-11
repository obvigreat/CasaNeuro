import React from "react";
import { Card, CardContent } from "../ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  rating: number;
}

const Testimonial = ({
  quote,
  author,
  company,
  rating = 5,
}: TestimonialProps) => {
  return (
    <Card className="bg-[#1E1E1E] border-[#333333] hover:shadow-lg transition-all duration-300 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="text-[#00FFC2] mb-4 h-8 w-8" />
        <p className="text-white mb-4 flex-grow">"{quote}"</p>
        <div className="mt-auto">
          <div className="text-white font-medium">{author}</div>
          <div className="text-[#AAAAAA] text-sm mb-2">{company}</div>
          <div className="text-[#00FFC2]">
            {Array(rating).fill("★").join(" ")}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface TestimonialsSectionProps {
  testimonials?: TestimonialProps[];
  title?: string;
  subtitle?: string;
}

const TestimonialsSection = ({
  testimonials = [
    {
      quote:
        "Our call volume doubled overnight, and follow-ups are 100% automated.",
      author: "Jamie Lee",
      company: "SparkCleaning",
      rating: 5,
    },
    {
      quote:
        "Incredible ROI—our first week's booking revenue paid for the platform.",
      author: "Priya Singh",
      company: "GreenLandscaping",
      rating: 5,
    },
    {
      quote: "We now handle 10× more bookings without extra staff.",
      author: "Alex Martinez",
      company: "HomeCare Co.",
      rating: 5,
    },
    {
      quote:
        "The AI follow-up system has increased our conversion rate by 35%.",
      author: "Michael Johnson",
      company: "Elite Plumbing",
      rating: 5,
    },
  ],
  title = "What Our Clients Say",
  subtitle = "Hear from businesses that have transformed their operations with our CasaNeuro platform",
}: TestimonialsSectionProps) => {
  return (
    <section className="bg-[#111111] py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {title}
          </h2>
          <p className="text-[#AAAAAA] max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
