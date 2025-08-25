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
    <section className="py-32 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-20">
          <h2 className="font-display text-4xl lg:text-5xl font-light text-foreground leading-tight">
            What We're Offering
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital signage solutions designed with precision and built for impact.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const serviceRoute = serviceRoutes[service.id as keyof typeof serviceRoutes];
            
            return (
              <Link key={service.id} href={serviceRoute}>
                <Card className="bg-card border-0 hover:shadow-sm transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-8 space-y-8">
                    <div className="w-12 h-12 bg-foreground rounded-sm flex items-center justify-center">
                      <IconComponent className="text-background w-6 h-6" />
                    </div>
                    <h3 className="font-display text-3xl font-light text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {service.description}
                    </p>
                    <ul className="space-y-4 text-muted-foreground">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 flex-shrink-0" />
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
