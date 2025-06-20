import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="pt-16 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-primary-900 leading-tight">
                Elevate Your{" "}
                <span className="text-transparent bg-clip-text gold-gradient">
                  Digital Presence
                </span>
              </h1>
              <p className="text-xl text-primary-600 leading-relaxed">
                Transform spaces and captivate audiences with premium digital signage solutions that blend cutting-edge technology with sophisticated design.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button className="primary-gradient text-white px-8 py-4 text-lg hover:shadow-xl transition-all duration-300">
                  Explore Solutions
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="border-2 border-primary-300 text-primary-700 px-8 py-4 text-lg hover:bg-primary-50 transition-all duration-300">
                  View Portfolio
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-800">
                    {stat.number}
                  </div>
                  <div className="text-primary-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="@assets/image_1750429488402.png"
              alt="Premium digital signage display showing luxury hotel content"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-primary-100">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-primary-600 font-medium">Live Display Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
