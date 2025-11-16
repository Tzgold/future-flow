import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Lightning Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Lightning Bolt 1 */}
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-foreground to-transparent animate-lightning-strike opacity-0" 
             style={{ animationDelay: '0s' }} />
        {/* Lightning Bolt 2 */}
        <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-foreground to-transparent animate-lightning-strike opacity-0" 
             style={{ animationDelay: '2s' }} />
        {/* Lightning Bolt 3 */}
        <div className="absolute top-0 left-2/3 w-0.5 h-full bg-gradient-to-b from-transparent via-foreground to-transparent animate-lightning-strike opacity-0" 
             style={{ animationDelay: '5s' }} />
        
        {/* Lightning Glow Effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-lightning" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-1/3 w-80 h-80 bg-foreground/5 rounded-full blur-3xl animate-lightning" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute top-32 left-2/3 w-72 h-72 bg-foreground/5 rounded-full blur-3xl animate-lightning" 
             style={{ animationDelay: '5s' }} />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

      <div className="container relative z-10 px-4 py-32 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-foreground animate-glow" />
            <span className="text-sm font-medium text-foreground">AI-Powered Automation Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl text-foreground">
            Transform Your Business with{" "}
            <span className="text-foreground underline decoration-2 underline-offset-8">
              AI Automation
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Save time, cut costs, and scale effortlessly. We build custom AI workflows that handle repetitive tasks, 
            qualify leads, manage support, and integrate with your favorite tools—all while you focus on growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-base font-semibold px-8"
            >
              Automate My Business
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-2 border-border text-base font-semibold px-8 backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              See Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl w-full">
            {[
              { value: "10k+", label: "Tasks Automated" },
              { value: "95%", label: "Time Saved" },
              { value: "500+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
