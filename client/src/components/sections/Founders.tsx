import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Github } from "lucide-react";
import { FOUNDERS } from "@/lib/constants";

export default function Founders() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-4xl font-bold text-primary-900">Meet Our Founders</h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Visionary leaders with decades of combined experience in digital technology and business development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {FOUNDERS.map((founder, index) => (
            <Card key={index} className="text-center border-0 shadow-none bg-transparent">
              <CardContent className="p-0 space-y-6">
                <img
                  src={founder.image}
                  alt={`${founder.name}, ${founder.title}`}
                  className="w-64 h-64 rounded-2xl mx-auto object-cover shadow-lg"
                />
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-semibold text-primary-900">
                    {founder.name}
                  </h3>
                  <p className="text-gold-600 font-medium">{founder.title}</p>
                  <p className="text-primary-600 leading-relaxed">
                    {founder.bio}
                  </p>
                  <div className="flex justify-center space-x-4">
                    {founder.social.linkedin && (
                      <a
                        href={founder.social.linkedin}
                        className="text-primary-400 hover:text-gold-500 transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {founder.social.twitter && (
                      <a
                        href={founder.social.twitter}
                        className="text-primary-400 hover:text-gold-500 transition-colors duration-200"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {founder.social.github && (
                      <a
                        href={founder.social.github}
                        className="text-primary-400 hover:text-gold-500 transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
