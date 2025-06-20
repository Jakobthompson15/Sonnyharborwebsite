import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Star } from "lucide-react";
import { PRICING_TIERS } from "@/lib/constants";

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-primary-900">
                Flexible <span className="text-transparent bg-clip-text gold-gradient">Pricing</span>
              </h1>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect solution for your needs with transparent pricing and comprehensive support. No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {PRICING_TIERS.map((tier, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    tier.highlighted
                      ? "bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-gold-300"
                      : "bg-primary-50 border border-primary-200"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="gold-gradient text-white px-4 py-1 text-sm font-semibold">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-primary-900">
                        {tier.name}
                      </h3>
                      <p className="text-primary-600 mt-2">{tier.description}</p>
                    </div>
                    <div className="space-y-2">
                      {tier.price ? (
                        <>
                          <div className="text-4xl font-bold text-primary-900">
                            ${tier.price}
                            <span className="text-lg font-normal text-primary-600">
                              /{tier.period}
                            </span>
                          </div>
                          <p className="text-primary-600">
                            {tier.name === "Starter" ? "Per display unit" : "Up to 10 display units"}
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="text-4xl font-bold text-primary-900">Custom</div>
                          <p className="text-primary-600">Tailored to your needs</p>
                        </>
                      )}
                    </div>
                    <ul className="space-y-3 text-primary-700">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="text-green-500 w-5 h-5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        className={`w-full py-3 font-semibold transition-all duration-200 ${
                          tier.highlighted
                            ? "gold-gradient text-white hover:shadow-lg"
                            : "primary-gradient text-white hover:bg-primary-800"
                        }`}
                      >
                        {tier.name === "Professional" ? "Start Free Trial" : 
                         tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-display text-4xl font-bold text-primary-900">Additional Services</h2>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto">
                Enhance your digital signage experience with our professional services and support options.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white border border-primary-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-white text-xl font-bold">C</span>
                  </div>
                  <h3 className="font-semibold text-lg text-primary-900">Content Creation</h3>
                  <p className="text-primary-600 text-sm">Professional design and video production services</p>
                  <div className="text-2xl font-bold text-primary-800">$500+</div>
                </CardContent>
              </Card>
              <Card className="bg-white border border-primary-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-white text-xl font-bold">I</span>
                  </div>
                  <h3 className="font-semibold text-lg text-primary-900">Installation</h3>
                  <p className="text-primary-600 text-sm">Professional on-site installation and setup</p>
                  <div className="text-2xl font-bold text-primary-800">$200+</div>
                </CardContent>
              </Card>
              <Card className="bg-white border border-primary-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-white text-xl font-bold">T</span>
                  </div>
                  <h3 className="font-semibold text-lg text-primary-900">Training</h3>
                  <p className="text-primary-600 text-sm">Comprehensive training for your team</p>
                  <div className="text-2xl font-bold text-primary-800">$300+</div>
                </CardContent>
              </Card>
              <Card className="bg-white border border-primary-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-white text-xl font-bold">M</span>
                  </div>
                  <h3 className="font-semibold text-lg text-primary-900">Maintenance</h3>
                  <p className="text-primary-600 text-sm">Extended warranty and maintenance plans</p>
                  <div className="text-2xl font-bold text-primary-800">$100+</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-display text-4xl font-bold text-primary-900">Frequently Asked Questions</h2>
              <p className="text-xl text-primary-600">
                Get answers to common questions about our pricing and services.
              </p>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-900">What's included in the monthly pricing?</h3>
                <p className="text-primary-600 leading-relaxed">
                  Our monthly pricing includes hardware rental, content management software, cloud hosting, technical support, and regular maintenance. You only pay for additional services like custom content creation or premium support.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-900">Can I upgrade or downgrade my plan?</h3>
                <p className="text-primary-600 leading-relaxed">
                  Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will be applied at your next billing cycle. Our team will help you transition smoothly between plans.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-900">Is there a setup fee?</h3>
                <p className="text-primary-600 leading-relaxed">
                  Setup fees vary depending on your location and installation requirements. We provide a detailed quote during our consultation that includes all one-time costs. Most installations range from $200-$500 per display.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-900">What happens if I want to cancel?</h3>
                <p className="text-primary-600 leading-relaxed">
                  We offer flexible month-to-month contracts with 30-day notice for cancellation. We'll schedule equipment pickup at no additional cost. Annual contracts may have different terms with better pricing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h2 className="font-display text-4xl font-bold">Ready to Transform Your Space?</h2>
              <p className="text-xl text-primary-200 leading-relaxed">
                Start your digital signage journey today with a free consultation and custom quote tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="gold-gradient text-white px-8 py-4 text-lg hover:shadow-lg transition-all duration-200">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="border-2 border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-primary-800 transition-all duration-300">
                    View Our Work
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
