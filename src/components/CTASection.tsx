import { ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onContact: () => void;
}

export default function CTASection({ onContact }: CTASectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-[#003366] via-[#004080] to-[#00AEEF] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF6B35] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
          <Sparkles size={16} className="text-[#FF6B35]" />
          <span className="text-white/90 text-sm font-medium">
            Ready to Start?
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Let's Build Something
          <br />
          <span className="text-[#FF6B35]">Amazing Together</span>
        </h2>

        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transform your digital presence with strategies that deliver real,
          measurable results. Get in touch today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onContact}
            className="group px-8 py-4 bg-[#FF6B35] text-white rounded-full text-lg font-medium hover:bg-[#FF6B35]/90 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl"
          >
            <span>Contact Us</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={onContact}
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full text-lg font-medium hover:bg-white/20 transition-all border border-white/30"
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
}
