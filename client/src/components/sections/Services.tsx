import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Store, Check } from "lucide-react";
import { Link } from "wouter";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  "calendar-alt": Calendar,
  "map-marker-alt": MapPin,
  "store": Store
};

const serviceRoutes = {
  "events": "/services/event-solutions",
  "public-ads": "/services/public-ad-space", 
  "screen-hosting": "/services/screen-hosting"
};

export default function Services() {
  return (
    <section className="py-32 bg-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-20">
          <h2 className="font-display text-4xl lg:text-5xl font-light text-foreground leading-tight">
            What We're Offering
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital signage solutions designed with precision and built for impact.
          </p>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const serviceRoute = serviceRoutes[service.id as keyof typeof serviceRoutes];
            
            // Different positioning and sizes for each card
            const cardStyles = [
              "absolute top-0 left-0 w-80 transform -translate-y-8", // Event Solutions - top left, offset up
              "absolute top-16 right-0 w-96", // Public Ad Space - top right, larger
              "absolute bottom-0 left-1/2 w-80 transform -translate-x-1/2 translate-y-8" // Screen Hosting - bottom center, offset down
            ];
            
            return (
              <Link key={service.id} href={serviceRoute}>
                <Card className={`bg-card border-0 hover:shadow-lg hover:-translate-y-2 transition-all duration-500 cursor-pointer ${cardStyles[index]}`}>
                  <CardContent className="p-10 space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-foreground to-foreground/80 rounded-lg flex items-center justify-center shadow-lg">
                      <IconComponent className="text-background w-8 h-8" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-display text-2xl font-light text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Check className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
          {/* Spacer to maintain section height */}
          <div className="h-96"></div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const serviceRoute = serviceRoutes[service.id as keyof typeof serviceRoutes];
            
            return (
              <Link key={service.id} href={serviceRoute}>
                <Card className="bg-card border-0 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-foreground to-foreground/80 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-background w-7 h-7" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-display text-2xl font-light text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {service.description}
                      </p>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
