import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "Perfect for small businesses getting started with automation",
    features: [
      "Up to 5 automated workflows",
      "1,000 tasks per month",
      "Email & chat support",
      "Basic integrations",
      "Dashboard analytics",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$1,299",
    period: "/month",
    description: "Ideal for growing companies scaling their operations",
    features: [
      "Up to 25 automated workflows",
      "10,000 tasks per month",
      "Priority support (24/7)",
      "Advanced integrations",
      "Custom AI training",
      "API access",
      "Dedicated account manager",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex automation needs",
    features: [
      "Unlimited workflows",
      "Unlimited tasks",
      "White-glove support",
      "All integrations",
      "Custom AI models",
      "SLA guarantees",
      "Team training",
      "Security & compliance",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple, Transparent{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include setup assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                plan.popular
                  ? "border-primary shadow-glow scale-105"
                  : "border-border/50 bg-card/50 backdrop-blur-sm"
              } transition-all duration-300 hover:shadow-soft`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <CardDescription className="mt-4">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-primary hover:shadow-glow"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
