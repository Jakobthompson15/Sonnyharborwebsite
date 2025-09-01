import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";

export default function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    // You can add your email submission logic here
  };

  return (
    <section className="py-32 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-background rounded-full blur-3xl"></div>
        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-background rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Headline */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>
            
            <h2 className="font-display text-5xl lg:text-6xl font-light leading-tight">
              Transform Your Business Today
            </h2>
            
            <p className="text-xl lg:text-2xl text-background/90 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of businesses already elevating their customer experience with premium digital signage. 
              <span className="font-semibold"> Get 20% off your first month</span> when you start today.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto py-8">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-background/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Increase Revenue</h3>
              <p className="text-background/80">Average 35% boost in customer engagement</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-background/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Reach More Customers</h3>
              <p className="text-background/80">50,000+ daily impressions on average</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-background/20 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Premium Support</h3>
              <p className="text-background/80">24/7 dedicated assistance included</p>
            </div>
          </div>

          {/* CTA Form */}
          <Card className="max-w-2xl mx-auto p-8 shadow-2xl border-0" style={{ backgroundColor: '#FDFBF7' }}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-display text-3xl font-light text-foreground">
                  Get Your Free Consultation
                </h3>
                <p className="text-muted-foreground">
                  No commitment required. We'll analyze your needs and provide a custom quote within 24 hours.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 text-lg border-muted"
                  />
                  <Button 
                    type="submit"
                    className="bg-foreground text-background hover:bg-foreground/90 h-12 px-8 text-lg font-medium group"
                  >
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Free consultation
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No credit card required
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Cancel anytime
                  </span>
                </div>
              </form>
            </div>
          </Card>

          {/* Social Proof */}
          <div className="pt-8 space-y-4">
            <p className="text-background/80 text-sm uppercase tracking-wider">Trusted by leading brands</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-background/20 border-2 border-background/30"></div>
                ))}
              </div>
              <p className="text-background/90">
                <span className="font-semibold">500+</span> businesses already transformed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}