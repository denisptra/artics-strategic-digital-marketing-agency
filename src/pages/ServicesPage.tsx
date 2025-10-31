import {
  LineChart,
  Palette,
  Share2,
  Code,
  TrendingUp,
  Video,
  Check,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = [
    {
      icon: LineChart,
      title: 'Digital Strategy & Consulting',
      description:
        'Transform your business with data-driven strategies tailored to your unique goals and market position.',
      features: [
        'Market Research & Analysis',
        'Competitor Intelligence',
        'Digital Transformation Roadmap',
        'KPI Development & Tracking',
        'Customer Journey Mapping',
      ],
      color: 'from-[#003366] to-[#00AEEF]',
    },
    {
      icon: Palette,
      title: 'Creative Production',
      description:
        'Compelling visual storytelling that captures attention and resonates with your target audience.',
      features: [
        'Brand Identity Design',
        'Campaign Creative Development',
        'Photography & Videography',
        'Motion Graphics & Animation',
        'Content Creation',
      ],
      color: 'from-[#00AEEF] to-[#FF6B35]',
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description:
        'Build meaningful connections with your audience through strategic social media engagement.',
      features: [
        'Content Strategy & Planning',
        'Community Management',
        'Social Media Advertising',
        'Influencer Partnerships',
        'Analytics & Reporting',
      ],
      color: 'from-[#FF6B35] to-[#003366]',
    },
    {
      icon: Code,
      title: 'Web & App Development',
      description:
        'Custom digital solutions built with modern technologies for optimal performance and user experience.',
      features: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'Mobile App Development',
        'CMS Integration',
        'API Development',
      ],
      color: 'from-[#003366] to-[#00AEEF]',
    },
    {
      icon: TrendingUp,
      title: 'Performance Marketing',
      description:
        'ROI-focused campaigns optimized for conversions and measurable business growth.',
      features: [
        'Google Ads Management',
        'Social Media Advertising',
        'Programmatic Advertising',
        'Conversion Rate Optimization',
        'Marketing Analytics',
      ],
      color: 'from-[#00AEEF] to-[#FF6B35]',
    },
    {
      icon: Video,
      title: 'Video Production',
      description:
        'Professional video content that tells your brand story and engages viewers across platforms.',
      features: [
        'Commercial Production',
        'Brand Documentaries',
        'Product Videos',
        'Social Media Content',
        'Post-Production & Editing',
      ],
      color: 'from-[#FF6B35] to-[#003366]',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-[#003366] to-[#00AEEF] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#FF6B35] rounded-full filter blur-3xl"></div>
        </div>
        <div
          className={`max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions combining creativity with strategic thinking
            to deliver exceptional results for your brand
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
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
                        <Check size={20} className="text-[#00AEEF] mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#003366]/5 to-[#00AEEF]/5 p-12 flex items-center justify-center">
                    <service.icon size={200} className="text-[#00AEEF] opacity-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#003366] to-[#00AEEF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Let's discuss how we can help achieve your digital marketing goals
          </p>
          <button className="px-8 py-4 bg-[#FF6B35] text-white rounded-full text-lg font-medium hover:bg-[#FF6B35]/90 transition-all transform hover:scale-105 shadow-xl">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
