import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Portfolio from "@/components/sections/Portfolio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function PortfolioPage() {
  const caseStudies = [
    {
      title: "Metro Shopping Center Network",
      category: "Retail",
      description: "Comprehensive digital signage network across 15 shopping centers, featuring interactive directories, promotional displays, and wayfinding solutions.",
      results: [
        "45% increase in foot traffic to featured stores",
        "60% improvement in customer satisfaction scores",
        "30% boost in promotional campaign effectiveness"
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Interactive", "Wayfinding", "Retail"]
    },
    {
      title: "Tech Conference 2024",
      category: "Events",
      description: "Multi-day technology conference featuring synchronized digital displays, real-time social media integration, and interactive attendee engagement platforms.",
      results: [
        "5,000+ attendees engaged with interactive content",
        "90% positive feedback on digital experience",
        "50% increase in sponsor engagement metrics"
      ],
      image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Events", "Interactive", "Social Media"]
    },
    {
      title: "Downtown Transit Authority",
      category: "Transportation",
      description: "City-wide digital signage network providing real-time transit information, emergency alerts, and local business advertising across 25 stations.",
      results: [
        "80,000+ daily passenger interactions",
        "25% reduction in missed connections",
        "40% increase in local business visibility"
      ],
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Transportation", "Real-time", "Public Service"]
    },
    {
      title: "Luxury Hotel Chain",
      category: "Hospitality",
      description: "Premium digital experience across 8 luxury hotels featuring lobby displays, digital concierge services, and in-room entertainment systems.",
      results: [
        "95% guest satisfaction with digital services",
        "35% increase in ancillary service bookings",
        "20% improvement in check-in efficiency"
      ],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Hospitality", "Luxury", "Concierge"]
    },
    {
      title: "University Campus Network",
      category: "Education",
      description: "Campus-wide digital signage system providing academic information, event promotion, and emergency communications across 50+ buildings.",
      results: [
        "15,000+ students engaged daily",
        "60% increase in event attendance",
        "Improved emergency response times"
      ],
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Education", "Campus", "Emergency"]
    },
    {
      title: "Restaurant Chain Rollout",
      category: "Food & Beverage",
      description: "Digital menu boards and promotional displays deployed across 30 restaurant locations with centralized content management and dynamic pricing.",
      results: [
        "25% increase in average order value",
        "40% reduction in perceived wait times",
        "15% improvement in order accuracy"
      ],
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Food Service", "Menu Boards", "Dynamic Pricing"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-primary-900">
                Our <span className="text-transparent bg-clip-text gold-gradient">Portfolio</span>
              </h1>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
                Discover how we've transformed spaces and elevated brands through innovative digital signage solutions across diverse industries.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Badge variant="outline" className="text-primary-600 border-primary-300">150+ Projects</Badge>
                <Badge variant="outline" className="text-primary-600 border-primary-300">50+ Industries</Badge>
                <Badge variant="outline" className="text-primary-600 border-primary-300">99% Client Satisfaction</Badge>
              </div>
            </div>
          </div>
        </section>

        <Portfolio />

        {/* Detailed Case Studies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-display text-4xl font-bold text-primary-900">Case Studies</h2>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto">
                Detailed success stories showcasing the impact of our digital signage solutions.
              </p>
            </div>
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-primary-800 backdrop-blur-sm">
                          {study.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className={`p-8 lg:p-12 space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="space-y-4">
                        <h3 className="font-display text-2xl lg:text-3xl font-bold text-primary-900">
                          {study.title}
                        </h3>
                        <p className="text-primary-600 leading-relaxed">
                          {study.description}
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-primary-800">Key Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-primary-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-primary-600">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Experience */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-display text-4xl font-bold text-primary-900">Industry Experience</h2>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto">
                We've successfully delivered digital signage solutions across a wide range of industries.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "Retail", "Healthcare", "Education", "Hospitality", "Transportation", "Corporate",
                "Entertainment", "Government", "Sports", "Banking", "Real Estate", "Manufacturing"
              ].map((industry, index) => (
                <Card key={index} className="bg-white border border-primary-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <span className="text-primary-700 font-medium text-sm">{industry}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h2 className="font-display text-4xl font-bold">Ready to Create Your Success Story?</h2>
              <p className="text-xl text-primary-200 leading-relaxed">
                Join our growing portfolio of successful digital signage implementations. Let's discuss how we can transform your space and engage your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="gold-gradient text-white px-8 py-4 text-lg hover:shadow-lg transition-all duration-200">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-2 border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-primary-800 transition-all duration-300">
                    Explore Services
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
