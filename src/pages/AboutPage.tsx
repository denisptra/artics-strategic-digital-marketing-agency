import { Target, Lightbulb, TrendingUp, Users, Award, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const milestones = [
    { year: '2015', event: 'Artics Founded', description: 'Started with a vision to transform digital marketing' },
    { year: '2017', event: 'First Major Client', description: 'Partnered with Telkomsel for nationwide campaign' },
    { year: '2019', event: '50+ Brands', description: 'Expanded portfolio across diverse industries' },
    { year: '2021', event: 'Award Recognition', description: 'Won Best Digital Agency Award Indonesia' },
    { year: '2023', event: '100+ Team Members', description: 'Built a world-class creative and strategic team' },
    { year: '2024', event: 'Regional Expansion', description: 'Extended services across Southeast Asia' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Creativity',
      description: 'We push boundaries and think beyond conventional solutions',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Success is built on strong partnerships and teamwork',
    },
    {
      icon: TrendingUp,
      title: 'Impact',
      description: 'Every strategy is designed to deliver measurable results',
    },
    {
      icon: Rocket,
      title: 'Growth',
      description: 'We continuously evolve to stay ahead of the curve',
    },
  ];

  const team = [
    { name: 'Alexander Wijaya', role: 'Founder & CEO' },
    { name: 'Diana Kusuma', role: 'Creative Director' },
    { name: 'Michael Santoso', role: 'Strategy Lead' },
    { name: 'Priscilla Tan', role: 'Head of Digital' },
    { name: 'Ryan Firmansyah', role: 'Tech Director' },
    { name: 'Sarah Lim', role: 'Client Success Lead' },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-[#003366] to-[#00AEEF] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        <div
          className={`max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            We Create Impactful
            <br />
            <span className="text-[#FF6B35]">Digital Experiences</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Artics is a strategic digital marketing agency that blends creativity,
            technology, and data-driven insights to help brands thrive in the digital age.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#003366] mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To be the leading digital partner that empowers brands to achieve
                extraordinary growth through innovative strategies and creative excellence.
              </p>
              <div className="flex items-start space-x-4 p-6 bg-[#F7F9FC] rounded-2xl">
                <Target className="text-[#00AEEF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="font-bold text-[#003366] text-lg mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    Transform digital landscapes by delivering measurable results that
                    exceed expectations, building lasting partnerships, and continuously
                    innovating to stay ahead of industry trends.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#003366] to-[#00AEEF] p-1">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <Award size={120} className="text-[#00AEEF]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#003366] mb-16 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#003366] via-[#00AEEF] to-[#FF6B35]"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-3xl font-bold text-[#00AEEF] mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-[#003366] mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-[#FF6B35] rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#003366] mb-6 text-center">Our Values</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Core principles that guide everything we do
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-[#F7F9FC] rounded-2xl hover:bg-gradient-to-br hover:from-[#003366] hover:to-[#00AEEF] transition-all duration-300 text-center"
              >
                <div className="inline-flex p-4 bg-white rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <value.icon size={32} className="text-[#00AEEF] group-hover:text-[#003366]" />
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-3 group-hover:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#003366] mb-6 text-center">Meet Our Team</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Talented individuals passionate about digital excellence
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl bg-gradient-to-br from-[#003366] to-[#00AEEF] aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users size={48} className="text-white opacity-50" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
                </div>
                <h3 className="font-bold text-[#003366] mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
