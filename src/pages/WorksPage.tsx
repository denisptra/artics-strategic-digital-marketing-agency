import { Eye, TrendingUp, Users, Award, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  objective: string;
  strategy: string;
  results: string[];
  metrics: string;
}

export default function WorksPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = ['All', 'Campaign', 'Branding', 'Social Media', 'Web', 'Video'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Telkomsel Digital Transformation',
      client: 'Telkomsel',
      category: 'Campaign',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: 'Nationwide digital campaign to promote new data packages',
      objective:
        'Increase awareness and adoption of new data packages among millennials and Gen Z',
      strategy:
        'Multi-channel approach combining social media, influencer partnerships, and targeted digital advertising with compelling visual storytelling',
      results: [
        '250% increase in social media engagement',
        '15M+ impressions across platforms',
        '180% boost in package subscriptions',
        '4.8 campaign sentiment score',
      ],
      metrics: '+250% Engagement',
    },
    {
      id: 2,
      title: 'BCA Mobile Banking Redesign',
      client: 'BCA',
      category: 'Web',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      description: 'Complete UX/UI overhaul of mobile banking application',
      objective:
        'Improve user experience and increase app engagement for digital banking services',
      strategy:
        'User-centered design approach with extensive research, prototyping, and testing phases',
      results: [
        '4.8★ app store rating',
        '65% increase in daily active users',
        '40% reduction in customer support tickets',
        'Best Banking App Award 2023',
      ],
      metrics: '4.8★ Rating',
    },
    {
      id: 3,
      title: 'Tokopedia Brand Campaign',
      client: 'Tokopedia',
      category: 'Video',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg',
      description: 'Multi-platform brand awareness campaign with video production',
      objective: 'Strengthen brand positioning and emotional connection with users',
      strategy:
        'Storytelling-focused campaign highlighting real user success stories through professional video production',
      results: [
        '10M+ total impressions',
        '500K+ video views',
        '85% positive sentiment',
        'Viral brand hashtag trending',
      ],
      metrics: '10M+ Impressions',
    },
    {
      id: 4,
      title: 'Gojek Driver App Enhancement',
      client: 'Gojek',
      category: 'Web',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      description: 'Product development to improve driver experience',
      objective: 'Increase driver satisfaction and retention through better app experience',
      strategy:
        'Iterative development with continuous driver feedback and data-driven optimizations',
      results: [
        '+40% user retention',
        '30% faster task completion',
        '92% driver satisfaction score',
        '50% fewer app crashes',
      ],
      metrics: '+40% Retention',
    },
    {
      id: 5,
      title: 'Shopee Social Media Strategy',
      client: 'Shopee',
      category: 'Social Media',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      description: 'Comprehensive social media management and content strategy',
      objective: 'Build engaged community and drive conversions through social channels',
      strategy:
        'Content calendar with mix of promotional, educational, and entertainment content plus influencer collaborations',
      results: [
        '300K+ new followers',
        '5x engagement rate increase',
        '25% boost in social commerce sales',
        'Award-winning content campaigns',
      ],
      metrics: '+300K Followers',
    },
    {
      id: 6,
      title: 'BNI Rebranding Project',
      client: 'BNI',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
      description: 'Complete brand identity refresh and guidelines development',
      objective: 'Modernize brand image while maintaining trust and heritage',
      strategy:
        'Strategic brand positioning with updated visual identity system and comprehensive brand guidelines',
      results: [
        '45% increase in brand favorability',
        'Successful rollout across 1000+ touchpoints',
        'Best Brand Transformation Award',
        '90% internal adoption rate',
      ],
      metrics: '+45% Brand Favorability',
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-[#003366] to-[#00AEEF] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FF6B35] rounded-full filter blur-3xl"></div>
        </div>
        <div
          className={`max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Works
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful campaigns and digital solutions that
            drove real business results
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#00AEEF] text-white shadow-lg scale-105'
                    : 'bg-[#F7F9FC] text-[#003366] hover:bg-[#00AEEF]/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[#00AEEF]/10 text-[#00AEEF] text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-1 text-[#FF6B35]">
                      <Eye size={16} />
                      <span className="text-xs font-medium">{project.metrics}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#003366] mb-2 group-hover:text-[#00AEEF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">
                      {project.client}
                    </span>
                    <span className="text-[#00AEEF] text-sm font-medium group-hover:translate-x-1 transition-transform">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-[#003366]">Case Study</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="p-8">
              <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <span className="px-4 py-2 bg-[#00AEEF]/10 text-[#00AEEF] font-medium rounded-full">
                  {selectedProject.category}
                </span>
                <span className="text-gray-500">|</span>
                <span className="font-medium text-gray-700">
                  {selectedProject.client}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-[#003366] mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {selectedProject.description}
              </p>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Award size={24} className="text-[#FF6B35]" />
                    <h4 className="text-xl font-bold text-[#003366]">Objective</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.objective}
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp size={24} className="text-[#00AEEF]" />
                    <h4 className="text-xl font-bold text-[#003366]">Strategy</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.strategy}
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Users size={24} className="text-[#00AEEF]" />
                    <h4 className="text-xl font-bold text-[#003366]">Results</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.results.map((result, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gradient-to-br from-[#003366]/5 to-[#00AEEF]/5 rounded-xl border border-[#00AEEF]/20"
                      >
                        <p className="text-gray-700 font-medium">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-[#003366] to-[#00AEEF] rounded-2xl text-center">
                <p className="text-white text-lg mb-4">
                  Interested in a project like this?
                </p>
                <button className="px-8 py-3 bg-[#FF6B35] text-white rounded-full font-medium hover:bg-[#FF6B35]/90 transition-all transform hover:scale-105">
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
