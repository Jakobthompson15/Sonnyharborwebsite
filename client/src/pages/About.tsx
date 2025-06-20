import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Mission from "@/components/sections/Mission";
import Founders from "@/components/sections/Founders";
import { COMPANY_INFO, STATS } from "@/lib/constants";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-primary-900">
                About {COMPANY_INFO.name}
              </h1>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
                We're pioneering the future of digital communication through innovative signage solutions that transform how businesses connect with their audiences.
              </p>
              <div className="flex justify-center items-center space-x-8 pt-8">
                {STATS.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary-800">
                      {stat.number}
                    </div>
                    <div className="text-primary-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Mission />

        {/* Our Story Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-4xl font-bold text-primary-900">Our Story</h2>
                <div className="space-y-4 text-lg text-primary-600 leading-relaxed">
                  <p>
                    Founded with a vision to revolutionize digital communication, Sonny Harbor Media emerged from the recognition that traditional advertising methods were no longer sufficient in our rapidly evolving digital landscape.
                  </p>
                  <p>
                    Our founders, Ryan Kesler and Chris, combined their expertise in digital marketing and technology to create solutions that don't just display content—they create experiences that resonate with audiences and drive meaningful engagement.
                  </p>
                  <p>
                    Today, we're proud to serve businesses of all sizes, from local retailers to enterprise corporations, helping them harness the power of digital signage to transform their spaces and amplify their messages.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Modern office with digital displays"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <Founders />

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-display text-4xl font-bold text-primary-900">Our Values</h2>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto">
                The principles that guide everything we do and every solution we create.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 gold-gradient rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">I</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary-900">Innovation</h3>
                <p className="text-primary-600">
                  We constantly push the boundaries of what's possible, embracing new technologies and creative approaches to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 gold-gradient rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">Q</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary-900">Quality</h3>
                <p className="text-primary-600">
                  Every installation, every piece of content, and every interaction reflects our commitment to excellence and attention to detail.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 gold-gradient rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">P</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary-900">Partnership</h3>
                <p className="text-primary-600">
                  We believe in building lasting relationships with our clients, working collaboratively to achieve shared success and growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
