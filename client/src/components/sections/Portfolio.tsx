import { Card, CardContent } from "@/components/ui/card";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

export default function Portfolio() {
  return (
    <section className="py-12 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display text-3xl font-bold text-primary-900">Our Work</h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Discover how we've transformed spaces and elevated brands through innovative digital signage solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <Card key={index} className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl text-primary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-600 mb-4">
                  {item.description}
                </p>
                <div className="text-gold-600 font-medium">
                  {item.metric}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
