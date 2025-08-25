import { MISSION_STATEMENT } from "@/lib/constants";

export default function Mission() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-16">
          <h2 className="font-display text-4xl lg:text-5xl font-light text-foreground leading-tight">
            Our Philosophy
          </h2>
          <blockquote className="font-display text-2xl lg:text-3xl text-foreground font-light leading-relaxed">
            {MISSION_STATEMENT}
          </blockquote>
          <div className="flex justify-center">
            <div className="w-12 h-px bg-foreground"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every screen tells a story. Our commitment to innovation, quality, and partnership 
            drives us to deliver digital signage solutions that not only meet today's needs 
            but anticipate tomorrow's possibilities.
          </p>
        </div>
      </div>
    </section>
  );
}
