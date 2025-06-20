export const COMPANY_INFO = {
  name: "Sonny Harbor Media",
  tagline: "Premium Digital Signage Solutions",
  phone: "(555) 123-4567",
  email: "hello@sonnyharbormedia.com",
  address: {
    street: "123 Harbor Drive, Suite 500",
    city: "Business District, CA 90210"
  }
};

export const SERVICES = [
  {
    id: "events",
    title: "Event Solutions",
    description: "Transform your events with dynamic digital displays that captivate audiences and enhance brand experiences through interactive content and real-time updates.",
    features: [
      "Interactive event displays",
      "Real-time content management",
      "Multi-screen coordination"
    ],
    icon: "calendar-alt"
  },
  {
    id: "public-ads",
    title: "Public Ad Space",
    description: "Maximize your advertising impact with strategically placed digital displays in high-traffic public locations, delivering targeted messaging to your ideal audience.",
    features: [
      "Prime location placement",
      "Audience analytics",
      "Campaign optimization"
    ],
    icon: "map-marker-alt"
  },
  {
    id: "screen-hosting",
    title: "Screen Hosting",
    description: "Partner with local businesses through our innovative screen hosting program, providing premium displays at no cost in exchange for advertising opportunities.",
    features: [
      "Free screen installation",
      "Revenue sharing model",
      "Full technical support"
    ],
    icon: "store"
  }
];

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: 299,
    period: "month",
    description: "Perfect for small businesses and events",
    features: [
      "1-3 Display units",
      "Basic content management",
      "Standard support",
      "Monthly reporting"
    ],
    highlighted: false
  },
  {
    name: "Professional",
    price: 799,
    period: "month",
    description: "Ideal for growing businesses and campaigns",
    features: [
      "4-10 Display units",
      "Advanced content tools",
      "Priority support",
      "Real-time analytics",
      "Custom integrations"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: null,
    period: "Custom",
    description: "Comprehensive solutions for large organizations",
    features: [
      "Unlimited displays",
      "White-label solutions",
      "24/7 dedicated support",
      "Advanced security",
      "On-site installation"
    ],
    highlighted: false
  }
];

export const FOUNDERS = [
  {
    name: "Ryan Kesler",
    title: "Co-Founder & CEO",
    image: "/IMG_8271_1750431931719.JPG",
    bio: "With over 15 years in digital marketing and technology solutions, Ryan brings strategic vision and industry expertise to drive innovation in the digital signage space. His passion for connecting brands with audiences through compelling visual experiences has shaped Sonny Harbor Media's customer-centric approach.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Chris",
    title: "Co-Founder & CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    bio: "A technology innovator with deep expertise in hardware integration and software development, Chris ensures that Sonny Harbor Media delivers cutting-edge solutions that are both powerful and reliable. His technical leadership drives the company's commitment to excellence in every installation.",
    social: {
      linkedin: "#",
      github: "#"
    }
  }
];

export const PORTFOLIO_ITEMS = [
  {
    title: "Premium Retail Chain",
    description: "Enhanced customer experience with interactive product displays across 12 locations.",
    metric: "+35% Engagement Rate",
    image: "/image_1750429500362.png"
  },
  {
    title: "Corporate Event Center",
    description: "Massive video wall installation for high-impact presentations and conferences.",
    metric: "98% Client Satisfaction",
    image: "/image_1750429475481.png"
  },
  {
    title: "Transportation Hub",
    description: "Comprehensive wayfinding and advertising network serving thousands daily.",
    metric: "50K+ Daily Views",
    image: "/image_1750429488402.png"
  }
];

export const MISSION_STATEMENT = "To revolutionize how businesses connect with their audiences through intelligent, elegant digital signage solutions that transform ordinary spaces into extraordinary experiences.";

export const STATS = [
  { number: "150+", label: "Installations" },
  { number: "50+", label: "Partner Locations" },
  { number: "99%", label: "Uptime" }
];
