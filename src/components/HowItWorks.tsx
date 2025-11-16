import { ArrowRight, Plug, Cog, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Plug,
    title: "Integrate",
    description: "Connect your existing tools and platforms in minutes. No technical expertise required.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Cog,
    title: "Automate",
    description: "We build custom AI workflows tailored to your business processes and goals.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Launch your automation and watch it handle tasks 24/7 with precision.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "Expand automation as you grow. Our AI adapts and improves over time.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How It <span className="underline decoration-2 underline-offset-8">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From setup to scale, we make AI automation simple and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}

              {/* Step Card */}
              <div className="relative group">
                {/* Electric Border Animation */}
                <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-foreground via-muted-foreground to-foreground animate-border-beam bg-[length:200%_100%]" 
                       style={{ 
                         maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                         WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                       }} />
                </div>
                
                <div className="relative bg-card backdrop-blur-sm border border-border rounded-2xl p-6 space-y-4 hover:shadow-soft transition-all duration-300">
                  {/* Number Badge */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-foreground rounded-full flex items-center justify-center font-bold text-background text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-foreground" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-2 text-foreground font-semibold hover:gap-4 transition-all duration-300">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
