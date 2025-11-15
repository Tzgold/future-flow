import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const caseStudies = [
  {
    company: "TechFlow Solutions",
    industry: "SaaS",
    metric: "85% faster",
    metricLabel: "Customer onboarding",
    description: "Automated lead qualification and CRM updates reduced onboarding time from 3 days to 4 hours, allowing the team to scale without hiring.",
    icon: TrendingUp,
    stats: [
      { label: "Time Saved", value: "120 hrs/month" },
      { label: "Cost Reduction", value: "$15k/month" },
    ],
  },
  {
    company: "GrowthMart E-commerce",
    industry: "Retail",
    metric: "$50k saved",
    metricLabel: "Per month",
    description: "Implemented AI-powered inventory management and customer support automation, handling 10,000+ inquiries monthly without adding support staff.",
    icon: DollarSign,
    stats: [
      { label: "Tickets Automated", value: "10k+/month" },
      { label: "Response Time", value: "<2 minutes" },
    ],
  },
  {
    company: "HealthBridge Clinic",
    industry: "Healthcare",
    metric: "90% reduction",
    metricLabel: "In no-shows",
    description: "Automated appointment scheduling and smart reminders cut no-show rates dramatically while improving patient satisfaction scores.",
    icon: Clock,
    stats: [
      { label: "Appointments", value: "2k+/month" },
      { label: "Satisfaction", value: "4.9/5" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Real Results from{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Real Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how companies like yours are transforming operations with AI automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />

              <CardContent className="pt-6 space-y-6 relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <study.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Company Info */}
                <div>
                  <h3 className="text-xl font-bold mb-1">{study.company}</h3>
                  <p className="text-sm text-muted-foreground">{study.industry}</p>
                </div>

                {/* Main Metric */}
                <div className="py-4 px-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {study.metric}
                  </div>
                  <div className="text-sm text-muted-foreground">{study.metricLabel}</div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {study.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                  {study.stats.map((stat, statIndex) => (
                    <div key={statIndex}>
                      <div className="text-lg font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
