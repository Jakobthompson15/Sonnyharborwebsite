import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/crowd-shopping-mall.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-black leading-tight max-w-4xl mx-auto">
            Sonny Harbor Media is a <br />
            <em className="font-light">digital signage</em> & innovation <br />
            consulting studio with <br />
            over <strong>150+ installations</strong> <br />
            providing:
          </h1>
          
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-black font-light leading-relaxed max-w-3xl mx-auto">
            Custom Digital Solutions & Development <br />
            Interactive Displays & Content Management <br />
            Strategic Placement & Analytics <br />
            Partnership Programs & Revenue Sharing
          </h2>
          
          <div className="pt-8">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Transform spaces and captivate audiences with intelligent digital signage solutions 
              that blend cutting-edge technology with sophisticated design.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/services">
                <Button className="bg-black text-white px-8 py-4 text-base hover:bg-gray-800 transition-colors duration-200 font-medium">
                  Explore Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-black text-black px-8 py-4 text-base hover:bg-gray-50 transition-colors duration-200 font-medium">
                  Start a Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
