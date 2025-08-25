import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { MapPin, Check, ArrowRight, Target, BarChart3, Settings } from "lucide-react";

export default function PublicAdSpace() {
  const features = [
    {
      icon: Target,
      title: "Prime Location Placement",
      description: "Strategically positioned displays in high-traffic areas to maximize visibility and audience reach."
    },
    {
      icon: BarChart3,
      title: "Audience Analytics",
      description: "Detailed insights into viewer demographics, engagement rates, and campaign performance metrics."
    },
    {
      icon: Settings,
      title: "Campaign Optimization",
      description: "Real-time campaign adjustments and A/B testing to maximize your advertising ROI."
    }
  ];

  const benefits = [
    "Premium high-traffic locations",
    "Targeted demographic reach",
    "Real-time campaign updates",
    "Comprehensive analytics reporting",
    "Flexible scheduling options",
    "Dedicated account management"
  ];

  const locations = [
    "Shopping centers and malls",
    "Transportation hubs",
    "Business districts",
    "Educational institutions",
    "Healthcare facilities",
    "Entertainment venues"
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
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-black">
                    Public Ad Space
                  </h1>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Maximize your advertising impact with strategically placed digital displays in high-traffic public locations, delivering targeted messaging to your ideal audience.
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
                    View Locations
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/image_1750429488402.png"
                alt="Public advertising display"
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
            <h2 className="text-4xl font-bold text-black">Advertising That Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our public ad space solutions combine prime locations with advanced targeting to deliver maximum impact for your campaigns.
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

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black">
                Premium Locations
              </h2>
              <p className="text-xl text-gray-600">
                Our extensive network covers high-traffic locations across multiple sectors, ensuring your message reaches the right audience at the right time.
              </p>
              <ul className="space-y-4">
                {locations.map((location, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="text-black w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700">{location}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black">Campaign Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="text-black w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-16">Our Network Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-5xl font-bold text-black">500K+</div>
              <div className="text-gray-600">Daily Impressions</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-black">150+</div>
              <div className="text-gray-600">Prime Locations</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-black">95%</div>
              <div className="text-gray-600">Campaign Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-black">
              Ready to Amplify Your Message?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contact our advertising specialists to discuss your campaign goals and discover the perfect locations for your brand.
            </p>
            <Link href="/contact">
              <Button className="bg-black text-white px-8 py-6 text-lg hover:bg-gray-800 transition-colors duration-200 rounded-sm inline-flex items-center space-x-2">
                <span>Start Your Campaign</span>
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