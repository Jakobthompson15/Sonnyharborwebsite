import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Calendar, Check, ArrowRight, Users, Zap, Monitor } from "lucide-react";

export default function EventSolutions() {
  const features = [
    {
      icon: Monitor,
      title: "Interactive Event Displays",
      description: "Engage attendees with dynamic, touchscreen displays that provide real-time information and interactive experiences."
    },
    {
      icon: Zap,
      title: "Real-time Content Management",
      description: "Update content instantly across all displays with our cloud-based management system, perfect for live events."
    },
    {
      icon: Users,
      title: "Multi-screen Coordination",
      description: "Synchronize multiple displays to create immersive environments and coordinated messaging throughout your event space."
    }
  ];

  const benefits = [
    "Increased attendee engagement",
    "Professional brand presentation",
    "Flexible content scheduling",
    "Remote management capabilities",
    "Analytics and reporting",
    "24/7 technical support"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-black rounded flex items-center justify-center">
                    <Calendar className="text-white w-6 h-6" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-black">
                    Event Solutions
                  </h1>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your events with dynamic digital displays that captivate audiences and enhance brand experiences through interactive content and real-time updates.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-black text-white px-8 py-6 text-lg hover:bg-gray-800 transition-colors duration-200 rounded-sm">
                    Get Started
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="border-2 border-black text-black px-8 py-6 text-lg hover:bg-gray-50 transition-colors duration-200 rounded-sm">
                    View Examples
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/image_1750429500362.png"
                alt="Event digital display solution"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-black">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our event solutions provide everything you need to create memorable experiences for your attendees.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-14 h-14 bg-black rounded flex items-center justify-center">
                      <IconComponent className="text-white w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-black">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black">
                Why Choose Our Event Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Elevate your events with professional-grade digital signage that delivers results and creates lasting impressions.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="text-black w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="/image_1750429475481.png"
                alt="Event display installation"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-black">
              Ready to Transform Your Next Event?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our team to discuss your event requirements and discover how our digital signage solutions can enhance your attendee experience.
            </p>
            <Link href="/contact">
              <Button className="bg-black text-white px-8 py-6 text-lg hover:bg-gray-800 transition-colors duration-200 rounded-sm inline-flex items-center space-x-2">
                <span>Contact Our Team</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}