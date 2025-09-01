import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Github } from "lucide-react";
import { FOUNDERS } from "@/lib/constants";

export default function Founders() {
  return (
    <section className="py-20" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black">Meet Our Founders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  className="w-56 h-56 rounded-lg mx-auto object-cover"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-black">
                    {founder.name}
                  </h3>
                  <p className="text-gray-600 font-medium text-lg">{founder.title}</p>
                  <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                    {founder.bio}
                  </p>
                  <div className="flex justify-center space-x-4">
                    {founder.social.linkedin && (
                      <a
                        href={founder.social.linkedin}
                        className="text-gray-400 hover:text-black transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {founder.social.twitter && (
                      <a
                        href={founder.social.twitter}
                        className="text-gray-400 hover:text-black transition-colors duration-200"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {founder.social.github && (
                      <a
                        href={founder.social.github}
                        className="text-gray-400 hover:text-black transition-colors duration-200"
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
