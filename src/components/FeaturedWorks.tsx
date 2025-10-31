import { ArrowRight, Eye } from 'lucide-react';

interface FeaturedWorksProps {
  onViewAll: () => void;
}

export default function FeaturedWorks({ onViewAll }: FeaturedWorksProps) {
  const works = [
    {
      title: 'Telkomsel Digital Campaign',
      category: 'Social Media & Performance Marketing',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      metrics: '+250% Engagement',
    },
    {
      title: 'BCA Mobile Banking Redesign',
      category: 'UX/UI Design & Development',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      metrics: '4.8★ App Rating',
    },
    {
      title: 'Tokopedia Brand Campaign',
      category: 'Creative Production & Strategy',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg',
      metrics: '10M+ Impressions',
    },
    {
      title: 'Gojek Driver App Enhancement',
      category: 'Product Development',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      metrics: '+40% User Retention',
    },
  ];

  return (
    <section className="py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
              Featured Works
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from our portfolio
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="hidden md:inline-flex items-center space-x-2 text-[#00AEEF] font-medium hover:text-[#003366] transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={onViewAll}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-[#003366]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center space-x-2 mb-3">
                    <Eye size={18} className="text-[#FF6B35]" />
                    <span className="text-sm font-medium text-[#FF6B35]">
                      {work.metrics}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {work.title}
                  </h3>
                  <p className="text-white/80">{work.category}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                <span className="text-sm font-medium text-[#003366]">
                  {work.category.split(' & ')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <button
            onClick={onViewAll}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#003366] text-white rounded-full font-medium"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
