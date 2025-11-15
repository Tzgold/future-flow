import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What exactly is AI automation?",
    answer: "AI automation uses artificial intelligence to handle repetitive tasks, make decisions, and streamline workflows without human intervention. It learns from patterns, understands context, and executes tasks 24/7 with precision.",
  },
  {
    question: "How long does implementation take?",
    answer: "Most basic automations can be set up within 1-2 weeks. Complex enterprise solutions may take 4-8 weeks depending on integrations and customization needs. We provide a detailed timeline during the consultation phase.",
  },
  {
    question: "Do I need technical knowledge to use your platform?",
    answer: "Not at all! We handle all the technical setup and provide an intuitive dashboard for monitoring. Our team trains you on managing your automations, and we offer ongoing support whenever you need help.",
  },
  {
    question: "What if my tools aren't listed in your integrations?",
    answer: "We can build custom integrations for virtually any platform with an API. If your tool doesn't have an API, we'll work with you to find alternative solutions like data exports or webhook connections.",
  },
  {
    question: "How secure is my data?",
    answer: "Security is our top priority. We use enterprise-grade encryption, comply with SOC 2 and GDPR standards, and never store sensitive data longer than necessary. All integrations use secure OAuth protocols and API keys are encrypted at rest.",
  },
  {
    question: "Can I cancel or change my plan anytime?",
    answer: "Yes! You can upgrade, downgrade, or cancel your plan at any time. There are no long-term contracts required. If you cancel, you'll have access until the end of your billing period.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "All plans include email and chat support. Pro and Enterprise plans get priority 24/7 support with faster response times. Enterprise clients also receive a dedicated account manager and phone support.",
  },
  {
    question: "How do you measure ROI?",
    answer: "We track time saved, tasks automated, error reduction, and cost savings. Most clients see positive ROI within 2-3 months. We provide detailed analytics dashboards showing exactly how automation impacts your bottom line.",
  },
];

export function FAQ() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button variant="outline" size="lg">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}
