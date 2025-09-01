import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Store, Check } from "lucide-react";
import { Link } from "wouter";
import { SERVICES } from "@/lib/constants";
import ContactForm from "./ContactForm";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-20">
          <h2 className="font-display text-4xl lg:text-5xl font-light text-foreground leading-tight">
            What We're Offering
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital signage solutions designed with precision and built for impact.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Left Side - Services (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              const serviceRoute = serviceRoutes[service.id as keyof typeof serviceRoutes];
              
              return (
                <Link key={service.id} href={serviceRoute}>
                  <Card className="border-0 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer" style={{ backgroundColor: '#FDFBF7' }}>
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-foreground to-foreground/80 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                          <IconComponent className="text-background w-7 h-7" />
                        </div>
                        <div className="flex-1 space-y-4">
                          <div className="space-y-2">
                            <h3 className="font-display text-2xl font-light text-foreground">
                              {service.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-base">
                              {service.description}
                            </p>
                          </div>
                          <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Check className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                                <span className="text-sm leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Right Side - Contact Form (1/3 width) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="text-center lg:text-left space-y-4">
              <h3 className="font-display text-2xl font-light text-foreground">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tell us about your project and get a personalized quote within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
