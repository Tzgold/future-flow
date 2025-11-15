import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { HowItWorks } from "@/components/HowItWorks";
import { Partners } from "@/components/Partners";
import { CaseStudies } from "@/components/CaseStudies";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* All Sections */}
      <Hero />
      <Services />
      <Testimonials />
      <HowItWorks />
      <Partners />
      <CaseStudies />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
