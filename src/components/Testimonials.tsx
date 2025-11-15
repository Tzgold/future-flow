import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    company: "TS",
    rating: 5,
    quote: "AI automation saved us 30 hours per week. Our team can finally focus on what matters—growing the business.",
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    company: "MC",
    rating: 5,
    quote: "The ROI was immediate. Customer response time dropped from hours to seconds. Game-changing solution.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    company: "ER",
    rating: 5,
    quote: "Lead qualification is now 100% automated. We're converting 40% more leads with half the manual effort.",
  },
  {
    name: "David Kim",
    role: "Founder, GrowthLab",
    company: "DK",
    rating: 5,
    quote: "Best investment we made this year. The automation handles everything while we sleep. Literally transformed our workflow.",
  },
  {
    name: "Jennifer Smith",
    role: "VP of Sales",
    company: "JS",
    rating: 5,
    quote: "Our CRM is always up-to-date now. No more manual data entry. The team loves it and productivity is through the roof.",
  },
  {
    name: "Alex Turner",
    role: "Product Manager",
    company: "AT",
    rating: 5,
    quote: "Integration was seamless. Support is fantastic. Results exceeded expectations. Couldn't ask for more.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Businesses <span className="bg-gradient-accent bg-clip-text text-transparent">Love Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of companies saving time and scaling faster with AI automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card"
            >
              <CardContent className="pt-6 space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.company}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
