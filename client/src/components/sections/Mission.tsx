import { MISSION_STATEMENT } from "@/lib/constants";

export default function Mission() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-12 text-left">
            <h2 className="font-display text-4xl lg:text-5xl font-light text-foreground leading-tight">
              Our Philosophy
            </h2>
            <blockquote className="font-display text-2xl lg:text-3xl text-foreground font-light leading-relaxed">
              {MISSION_STATEMENT}
            </blockquote>
            <div className="w-12 h-px bg-foreground"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every screen tells a story. Our commitment to innovation, quality, and partnership 
              drives us to deliver digital signage solutions that not only meet today's needs 
              but anticipate tomorrow's possibilities.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="/sonnyharbor.png" 
              alt="Sonny Harbor Digital Signage Displays" 
              className="w-full h-auto max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
