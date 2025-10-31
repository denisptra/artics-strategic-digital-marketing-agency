import {
  LineChart,
  Palette,
  Share2,
  Code,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

interface ServicesPreviewProps {
  onExplore: () => void;
}

export default function ServicesPreview({ onExplore }: ServicesPreviewProps) {
  const services = [
    {
      icon: LineChart,
      title: 'Digital Strategy',
      description:
        'Data-driven strategies that align with your business goals and market opportunities.',
      color: 'from-[#003366] to-[#00AEEF]',
    },
    {
      icon: Palette,
      title: 'Branding & Design',
      description:
        'Compelling visual identities and creative production that resonate with your audience.',
      color: 'from-[#00AEEF] to-[#FF6B35]',
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description:
        'Engaging content strategies and community management across all platforms.',
      color: 'from-[#FF6B35] to-[#003366]',
    },
    {
      icon: Code,
      title: 'Web Development',
      description:
        'High-performance websites and applications built with modern technologies.',
      color: 'from-[#003366] to-[#00AEEF]',
    },
    {
      icon: TrendingUp,
      title: 'Performance Marketing',
      description:
        'ROI-focused campaigns with continuous optimization for maximum impact.',
      color: 'from-[#00AEEF] to-[#FF6B35]',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand and
            drive measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-[#F7F9FC] rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#00AEEF]/20"
            >
              <div
                className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button
                onClick={onExplore}
                className="group/btn inline-flex items-center space-x-2 text-[#00AEEF] font-medium hover:text-[#003366] transition-colors"
              >
                <span>Explore</span>
                <ArrowRight
                  size={18}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onExplore}
            className="px-8 py-4 bg-[#003366] text-white rounded-full text-lg font-medium hover:bg-[#00AEEF] transition-all transform hover:scale-105"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
