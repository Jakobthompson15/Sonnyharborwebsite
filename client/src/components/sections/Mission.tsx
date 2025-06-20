import { MISSION_STATEMENT } from "@/lib/constants";

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="font-display text-4xl font-bold text-primary-900">Our Mission</h2>
          <blockquote className="text-2xl text-primary-700 font-light leading-relaxed italic">
            "{MISSION_STATEMENT}"
          </blockquote>
          <div className="flex justify-center">
            <div className="w-24 h-1 gold-gradient rounded-full"></div>
          </div>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            At Sonny Harbor Media, we believe that every screen tells a story. Our commitment to innovation, quality, and partnership drives us to deliver digital signage solutions that not only meet today's needs but anticipate tomorrow's possibilities.
          </p>
        </div>
      </div>
    </section>
  );
}
