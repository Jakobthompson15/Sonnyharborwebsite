import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Store, Check, ArrowRight, DollarSign, Wrench, Handshake } from "lucide-react";

export default function ScreenHosting() {
  const features = [
    {
      icon: DollarSign,
      title: "Free Screen Installation",
      description: "We provide premium digital displays at no upfront cost to qualifying businesses and locations."
    },
    {
      icon: Handshake,
      title: "Revenue Sharing Model",
      description: "Earn passive income through our fair revenue sharing program while we handle all advertising operations."
    },
    {
      icon: Wrench,
      title: "Full Technical Support",
      description: "Complete maintenance, updates, and technical support included - you focus on your business, we handle the displays."
    }
  ];

  const benefits = [
    "No upfront investment required",
    "Professional installation included",
    "Ongoing maintenance and support",
    "Revenue sharing opportunities",
    "Enhanced customer experience",
    "Modern, professional appearance"
  ];

  const requirements = [
    "High foot traffic location",
    "Suitable wall space for display",
    "Access to power outlet",
    "Stable internet connection",
    "Business operating 6+ days per week",
    "Minimum 3-year partnership"
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
                    <Store className="text-white w-6 h-6" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-black">
                    Screen Hosting
                  </h1>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Partner with local businesses through our innovative screen hosting program, providing premium displays at no cost in exchange for advertising opportunities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-black text-white px-8 py-6 text-lg hover:bg-gray-800 transition-colors duration-200 rounded-sm">
                    Apply Now
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="border-2 border-black text-black px-8 py-6 text-lg hover:bg-gray-50 transition-colors duration-200 rounded-sm">
                    See Examples
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/image_1750429500362.png"
                alt="Screen hosting installation"
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
            <h2 className="text-4xl font-bold text-black">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our screen hosting program is designed to benefit both your business and our advertising partners through a win-win partnership model.
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

      {/* Benefits & Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black">
                Partner Benefits
              </h2>
              <p className="text-xl text-gray-600">
                Join our network of successful business partners and start earning passive income while enhancing your customer experience.
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
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black">
                Requirements
              </h2>
              <p className="text-xl text-gray-600">
                To ensure mutual success, we look for partners who meet these basic criteria for optimal display performance.
              </p>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="text-black w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-black">Partnership Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started is simple. Follow these steps to join our screen hosting network.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold text-black">Apply</h3>
              <p className="text-gray-600">Submit your application with location details and photos</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold text-black">Evaluation</h3>
              <p className="text-gray-600">Our team evaluates your location for suitability and traffic</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold text-black">Installation</h3>
              <p className="text-gray-600">Professional installation at no cost to you</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                4
              </div>
              <h3 className="text-xl font-bold text-black">Earn</h3>
              <p className="text-gray-600">Start earning revenue from advertising displayed on your screen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-black">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our growing network of successful business partners and start earning passive income with premium digital displays.
            </p>
            <Link href="/contact">
              <Button className="bg-black text-white px-8 py-6 text-lg hover:bg-gray-800 transition-colors duration-200 rounded-sm inline-flex items-center space-x-2">
                <span>Apply for Partnership</span>
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