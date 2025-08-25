import { Link } from "wouter";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/Logos from Jakob Thompson_1750429186304.png" 
                alt="Sonny Harbor Media"
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="font-semibold text-xl">
                Sonny Harbor Media
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Transforming spaces through innovative digital signage solutions that connect brands with their audiences.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link 
                    href="/services" 
                    className="hover:text-white transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/services" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link 
                  href="/about" 
                  className="hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Follow us for the latest updates and industry insights.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
