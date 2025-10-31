import { ArrowRight, Target, Users, Zap } from 'lucide-react';

interface AboutSnapshotProps {
  onLearnMore: () => void;
}

export default function AboutSnapshot({ onLearnMore }: AboutSnapshotProps) {
  return (
    <section className="py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6 leading-tight">
              We Create Digital
              <br />
              Experiences That
              <br />
              <span className="text-[#00AEEF]">Drive Growth</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              PT Artics Digital Creative Agency is a strategic digital marketing
              partner that blends creativity, technology, and data-driven insights
              to help brands achieve measurable success in the digital landscape.
            </p>
            <button
              onClick={onLearnMore}
              className="group inline-flex items-center space-x-2 text-[#00AEEF] font-medium hover:text-[#003366] transition-colors"
            >
              <span>Learn More About Us</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: Target,
                title: 'Strategic Focus',
                description:
                  'Every campaign is built on deep market insights and clear objectives',
              },
              {
                icon: Zap,
                title: 'Innovation Driven',
                description:
                  'We leverage cutting-edge technology and creative solutions',
              },
              {
                icon: Users,
                title: 'Client-Centric',
                description:
                  'Your success is our success. We build long-term partnerships',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#00AEEF]/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-[#003366] to-[#00AEEF] rounded-xl group-hover:scale-110 transition-transform">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#003366] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
