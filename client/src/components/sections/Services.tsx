import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Store, Check } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  "calendar-alt": Calendar,
  "map-marker-alt": MapPin,
  "store": Store
};

const gradientMap = {
  "calendar-alt": "from-blue-500 to-blue-600",
  "map-marker-alt": "from-amber-500 to-orange-500",
  "store": "from-green-500 to-green-600"
};

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-4xl font-bold text-primary-900">Our Services</h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Comprehensive digital signage solutions tailored to elevate your business presence and engage your audience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const gradientClass = gradientMap[service.icon as keyof typeof gradientMap];
            
            return (
              <Card key={service.id} className="bg-white border border-primary-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${gradientClass} rounded-xl flex items-center justify-center`}>
                    <IconComponent className="text-white text-2xl w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-primary-900">
                    {service.title}
                  </h3>
                  <p className="text-primary-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-primary-600">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check className="text-green-500 w-4 h-4" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
