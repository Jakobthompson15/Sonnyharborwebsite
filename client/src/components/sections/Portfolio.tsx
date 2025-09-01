import { Card, CardContent } from "@/components/ui/card";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

export default function Portfolio() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've transformed spaces and elevated brands through innovative digital signage solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-200" style={{ backgroundColor: '#FDFBF7' }}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="text-black font-semibold">
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
