import { 
  Workflow, 
  MessageSquare, 
  UserCheck, 
  Database, 
  Calendar, 
  FileText, 
  Mail, 
  Zap 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline complex processes and eliminate manual tasks with intelligent automation.",
  },
  {
    icon: MessageSquare,
    title: "AI Customer Support",
    description: "24/7 intelligent chatbots that understand context and resolve issues instantly.",
  },
  {
    icon: UserCheck,
    title: "Lead Qualification",
    description: "Automatically score, prioritize, and route leads to the right team members.",
  },
  {
    icon: Database,
    title: "CRM Automation",
    description: "Keep your CRM updated automatically with smart data enrichment and sync.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered appointment booking that handles availability and reminders.",
  },
  {
    icon: FileText,
    title: "Data Extraction",
    description: "Extract and process information from documents, emails, and forms instantly.",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Personalized email sequences that engage and convert automatically.",
  },
  {
    icon: Zap,
    title: "Custom Integrations",
    description: "Connect any tool or platform with custom AI-powered workflows.",
  },
];

export function Services() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            What We <span className="bg-gradient-primary bg-clip-text text-transparent">Automate</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From customer support to complex workflows, we automate the tasks that slow you down.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
              
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
