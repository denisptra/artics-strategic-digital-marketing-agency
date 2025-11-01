import {
  LineChart,
  Palette,
  Share2,
  Code,
  Camera,
  Users,
  Layers,
} from 'lucide-react';

interface ServicesPreviewProps {
  onExplore: () => void;
}

export default function ServicesPreview({ onExplore }: ServicesPreviewProps) {
  const services = [
    {
      icon: LineChart,
      title: 'Enigma Pulse',
      description:
        'Comprehensive brand insight and analytics platform that helps you decode audience behavior and market pulse with precision.',
      color: 'from-[#003366] to-[#00AEEF]',
    },
    {
      icon: Palette,
      title: 'Creative Campaign',
      description:
        'Strategic storytelling combined with bold visuals to create campaigns that emotionally connect and drive engagement.',
      color: 'from-[#00AEEF] to-[#FF6B35]',
    },
    {
      icon: Users,
      title: 'KOL Management',
      description:
        'Building authentic partnerships with key opinion leaders and influencers to strengthen brand trust and awareness.',
      color: 'from-[#FF6B35] to-[#003366]',
    },
    {
      icon: Layers,
      title: 'Troops Campaign',
      description:
        'Amplify your brand presence with coordinated micro-activations led by dedicated brand ambassadors across digital spaces.',
      color: 'from-[#003366] to-[#00AEEF]',
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description:
        'End-to-end content creation, scheduling, and performance analysis for consistent brand voice across all social platforms.',
      color: 'from-[#00AEEF] to-[#FF6B35]',
    },
    {
      icon: Code,
      title: 'Brand Blueprint',
      description:
        'Define your brand’s DNA through structured visual systems, guidelines, and communication strategy built for long-term growth.',
      color: 'from-[#FF6B35] to-[#003366]',
    },
    {
      icon: Camera,
      title: 'Photo & Video Production',
      description:
        'High-impact visual storytelling through cinematic production, creative direction, and post-production excellence.',
      color: 'from-[#003366] to-[#00AEEF]',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
            Enhance Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored strategies and creative excellence to help your brand stand
            out and grow with measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="group-hover/btn:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
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
