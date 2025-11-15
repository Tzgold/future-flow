const partners = [
  { name: "Zapier", width: "w-24" },
  { name: "Slack", width: "w-20" },
  { name: "Notion", width: "w-24" },
  { name: "Stripe", width: "w-20" },
  { name: "WhatsApp", width: "w-28" },
  { name: "Google", width: "w-24" },
  { name: "HubSpot", width: "w-24" },
  { name: "Shopify", width: "w-24" },
];

export function Partners() {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Seamlessly Integrates With
          </h3>
          <p className="text-lg text-foreground">
            Connect with the tools you already use
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="flex items-center gap-12 animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-16 px-8 opacity-60 hover:opacity-100 transition-opacity duration-300 group cursor-pointer"
              >
                <div className={`${partner.width} h-12 bg-muted rounded-lg flex items-center justify-center font-bold text-foreground group-hover:text-primary transition-colors`}>
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            + 100s more integrations available
          </p>
        </div>
      </div>
    </section>
  );
}
