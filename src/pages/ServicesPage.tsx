import {
  LineChart,
  Palette,
  Share2,
  Code,
  TrendingUp,
  Video,
  Check,
  FileSearch,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      icon: LineChart,
      title: "Digital Strategy & Consulting",
      description:
        "We build data-driven strategies designed to strengthen your brand position, optimize resources, and unlock growth opportunities in the digital ecosystem.",
      features: [
        "Comprehensive Market & Competitor Analysis",
        "Brand Positioning & Communication Strategy",
        "Digital Transformation Planning",
        "KPI & Performance Framework Setup",
        "Customer Journey & Funnel Optimization",
      ],
      color: "from-[#003366] to-[#00AEEF]",
    },
    {
      icon: Palette,
      title: "Branding & Creative Production",
      description:
        "We craft brand stories that connect emotionally with audiences — turning ideas into powerful visuals and impactful narratives.",
      features: [
        "Brand Identity & Visual System",
        "Logo & Corporate Guideline Design",
        "Campaign Creative Direction",
        "Photography, Videography & Art Direction",
        "Motion Graphic & Visual Storytelling",
      ],
      color: "from-[#00AEEF] to-[#FF6B35]",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description:
        "We help you create a consistent, engaging, and meaningful social media presence — designed to grow your community and drive conversions.",
      features: [
        "Social Content Strategy & Calendar Planning",
        "Community Engagement & Response Management",
        "Social Media Ads & Campaign Execution",
        "Influencer & KOL Collaboration",
        "Performance Analysis & Insight Reporting",
      ],
      color: "from-[#FF6B35] to-[#003366]",
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "We design and develop high-performance digital platforms that elevate your brand experience and accelerate your business goals.",
      features: [
        "Responsive Website & UI/UX Design",
        "Corporate & Product Landing Page",
        "E-Commerce & CMS Development",
        "API Integration & Backend Optimization",
        "SEO-Ready and Secure Architecture",
      ],
      color: "from-[#003366] to-[#00AEEF]",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description:
        "Maximize your campaign impact with precision targeting, optimization, and real-time analytics to ensure every investment delivers measurable growth.",
      features: [
        "Google Ads & Meta Ads Campaigns",
        "Performance Funnel Optimization",
        "A/B Testing & Conversion Tracking",
        "Programmatic & Remarketing Strategies",
        "Comprehensive Marketing Analytics Dashboard",
      ],
      color: "from-[#00AEEF] to-[#FF6B35]",
    },
    {
      icon: Video,
      title: "Video Production",
      description:
        "We produce cinematic, story-driven videos that elevate brand identity and captivate audiences across digital channels.",
      features: [
        "Commercial & Corporate Video Production",
        "Product Showcase & Explainer Videos",
        "Brand Documentary & Storytelling",
        "Social Media Short-Form Video",
        "Post-Production & Motion Editing",
      ],
      color: "from-[#FF6B35] to-[#003366]",
    },
    {
      icon: FileSearch,
      title: "Content & SEO Optimization",
      description:
        "We help your brand stay visible and relevant by combining creative content with powerful search optimization strategies.",
      features: [
        "Content Strategy & Editorial Planning",
        "Keyword Research & SEO Copywriting",
        "On-Page & Off-Page Optimization",
        "Technical SEO & Site Health Audit",
        "Performance Tracking & Reporting",
      ],
      color: "from-[#003366] to-[#00AEEF]",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#003366] to-[#00AEEF] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#FF6B35] rounded-full filter blur-3xl"></div>
        </div>
        <div
          className={`max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Empowering brands through data, design, and digital innovation.
            Every solution we craft blends creativity with measurable impact.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`inline-flex p-5 bg-gradient-to-br ${service.color} rounded-2xl mb-6`}
                  >
                    <service.icon size={40} className="text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check
                          size={20}
                          className="text-[#00AEEF] mt-1 flex-shrink-0"
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#003366]/5 to-[#00AEEF]/5 p-12 flex items-center justify-center">
                    <service.icon
                      size={200}
                      className="text-[#00AEEF] opacity-20"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#003366] to-[#00AEEF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Let’s collaborate to craft a digital strategy that moves your brand
            forward.
          </p>
          <button className="px-8 py-4 bg-[#FF6B35] text-white rounded-full text-lg font-medium hover:bg-[#FF6B35]/90 transition-all transform hover:scale-105 shadow-xl">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
