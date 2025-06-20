import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-primary-900">
                Get in <span className="text-transparent bg-clip-text gold-gradient">Touch</span>
              </h1>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your space with premium digital signage? Let's discuss your project and create a custom solution that exceeds your expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="font-display text-4xl font-bold">Ready to Transform Your Space?</h2>
                  <p className="text-xl text-primary-200 leading-relaxed">
                    Let's discuss how Sonny Harbor Media can elevate your brand presence with premium digital signage solutions tailored to your unique needs.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center">
                      <Phone className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div className="text-primary-300">{COMPANY_INFO.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center">
                      <Mail className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-primary-300">{COMPANY_INFO.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center">
                      <MapPin className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Visit Us</div>
                      <div className="text-primary-300">
                        {COMPANY_INFO.address.street}<br />
                        {COMPANY_INFO.address.city}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center">
                      <Clock className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Business Hours</div>
                      <div className="text-primary-300">
                        Mon - Fri: 8:00 AM - 6:00 PM<br />
                        Sat: 9:00 AM - 4:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-display text-4xl font-bold text-primary-900">Why Choose Us?</h2>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto">
                Experience the difference that professional service and cutting-edge technology can make.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-primary-50 border border-primary-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 gold-gradient rounded-xl flex items-center justify-center mx-auto">
                    <span className="text-white text-2xl font-bold">24</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary-900">24-Hour Response</h3>
                  <p className="text-primary-600">
                    We respond to all inquiries within 24 hours and provide detailed consultation within 48 hours.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary-50 border border-primary-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 gold-gradient rounded-xl flex items-center justify-center mx-auto">
                    <span className="text-white text-2xl font-bold">F</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary-900">Free Consultation</h3>
                  <p className="text-primary-600">
                    Get a comprehensive consultation and custom quote at no cost, with no obligation to purchase.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary-50 border border-primary-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 gold-gradient rounded-xl flex items-center justify-center mx-auto">
                    <span className="text-white text-2xl font-bold">L</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary-900">Lifetime Support</h3>
                  <p className="text-primary-600">
                    Ongoing technical support and maintenance to ensure your displays perform at their best.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-display text-4xl font-bold text-primary-900">Common Questions</h2>
              <p className="text-xl text-primary-600">
                Get quick answers to frequently asked questions about our services.
              </p>
            </div>
            <div className="space-y-8">
              <Card className="bg-white border border-primary-100">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-primary-900">How quickly can you install displays?</h3>
                  <p className="text-primary-600 leading-relaxed">
                    Most installations can be completed within 1-2 weeks of order confirmation. Complex multi-location projects may take 3-4 weeks. We'll provide a detailed timeline during consultation.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border border-primary-100">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-primary-900">Do you provide content creation services?</h3>
                  <p className="text-primary-600 leading-relaxed">
                    Yes, we offer professional content creation services including graphic design, video production, and animated content. Our team can create compelling visuals that align with your brand.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border border-primary-100">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-primary-900">What happens if a display stops working?</h3>
                  <p className="text-primary-600 leading-relaxed">
                    All our displays come with comprehensive warranties and 24/7 monitoring. If an issue occurs, we'll troubleshoot remotely first, then dispatch a technician if needed—usually within 4 hours for critical locations.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border border-primary-100">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-primary-900">Can I update content myself?</h3>
                  <p className="text-primary-600 leading-relaxed">
                    Absolutely! Our user-friendly content management system allows you to update displays remotely. We provide comprehensive training and ongoing support to ensure you're comfortable managing your content.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
