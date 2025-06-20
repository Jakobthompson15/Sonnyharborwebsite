import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-primary-900">
                Digital Signage <span className="text-transparent bg-clip-text gold-gradient">Solutions</span>
              </h1>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive services designed to maximize your brand's impact through strategic digital signage placement and innovative content delivery.
              </p>
            </div>
          </div>
        </section>

        <Services />

        {/* Detailed Service Breakdown */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {/* Event Solutions Detail */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="font-display text-4xl font-bold text-primary-900">Event Solutions</h2>
                  <p className="text-lg text-primary-600 leading-relaxed">
                    Transform your events into unforgettable experiences with our comprehensive digital signage solutions. From corporate conferences to trade shows, our technology creates immersive environments that engage attendees and amplify your message.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Check className="text-green-500 w-5 h-5 mt-0.5" />
                      <div>
                        <strong className="text-primary-800">Interactive Displays:</strong>
                        <span className="text-primary-600"> Touch-enabled screens for attendee engagement</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="text-green-500 w-5 h-5 mt-0.5" />
                      <div>
                        <strong className="text-primary-800">Real-time Updates:</strong>
                        <span className="text-primary-600"> Dynamic content management during live events</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="text-green-500 w-5 h-5 mt-0.5" />
                      <div>
                        <strong className="text-primary-800">Multi-Screen Networks:</strong>
                        <span className="text-primary-600"> Coordinated displays throughout your venue</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                    alt="Event space with digital displays"
                    className="rounded-2xl shadow-xl w-full h-auto"
                  />
                </div>
              </div>

              {/* Public Ad Space Detail */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                    alt="Public digital advertising displays"
                    className="rounded-2xl shadow-xl w-full h-auto"
                  />
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <h2 className="font-display text-4xl font-bold text-primary-900">Public Ad Space</h2>
                  <p className="text-lg text-primary-600 leading-relaxed">
                    Reach your target audience where they live, work, and play with strategically placed digital displays in high-traffic public locations. Our network of premium advertising spaces delivers maximum visibility and engagement.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Check className="text-green-500 w-5 h-5 mt-0.5" />
                      <div>
                        <strong className="text-primary-800">Prime Locations:</strong>
                        <span className="text-primary-600"> Shopping centers, transit hubs, and business districts</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="text-green-500 w-5 h-5 mt-0.5" />
                      <div>
                        <strong className="text-primary-800">Audience Analytics:</strong>
                        <span className="text-primary-600"> Detailed demographics and engagement metrics</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="text-green-500 w-5 h-5 mt-0.5" />
                      <div>
                        <strong className="text-primary-800">Campaign Management:</strong>
                        <span className="text-primary-600"> Professional content creation and optimization</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Screen Hosting Detail */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="font-display text-4xl font-bold text-primary-900">Screen Hosting Program</h2>
                  <p className="text-lg text-primary-600 leading-relaxed">
                    Our innovative partnership program provides businesses with premium digital displays at no upfront cost. We handle installation, maintenance, and content management while sharing advertising revenue with our host partners.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Check className="text-green-500 w-5 h-5 mt-0.5" />
                      <div>
                        <strong className="text-primary-800">Zero Cost Installation:</strong>
                        <span className="text-primary-600"> Premium displays with no upfront investment</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="text-green-500 w-5 h-5 mt-0.5" />
                      <div>
                        <strong className="text-primary-800">Revenue Sharing:</strong>
                        <span className="text-primary-600"> Earn income from advertising space in your location</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="text-green-500 w-5 h-5 mt-0.5" />
                      <div>
                        <strong className="text-primary-800">Full Support:</strong>
                        <span className="text-primary-600"> Complete technical support and maintenance included</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                    alt="Retail space with hosted digital display"
                    className="rounded-2xl shadow-xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h2 className="font-display text-4xl font-bold">Ready to Get Started?</h2>
              <p className="text-xl text-primary-200 leading-relaxed">
                Let's discuss how our digital signage solutions can transform your business presence and drive meaningful engagement with your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="gold-gradient text-white px-8 py-4 text-lg hover:shadow-lg transition-all duration-200">
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" className="border-2 border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-primary-800 transition-all duration-300">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
