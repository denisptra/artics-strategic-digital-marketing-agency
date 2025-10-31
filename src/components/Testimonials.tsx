import { Quote, Star } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Artics transformed our digital presence completely. Their strategic approach and creative execution delivered results beyond our expectations.",
      author: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'Telkomsel',
      rating: 5,
    },
    {
      quote:
        "Working with Artics has been a game-changer for our brand. Their team's expertise in digital marketing is unmatched.",
      author: 'Michael Chen',
      position: 'Head of Digital',
      company: 'BCA',
      rating: 5,
    },
    {
      quote:
        "The ROI from our campaigns with Artics has been exceptional. They truly understand how to connect brands with audiences.",
      author: 'Diana Putri',
      position: 'VP Marketing',
      company: 'Tokopedia',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-[#003366] to-[#00AEEF] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-8 left-8 opacity-20">
              <Quote size={80} />
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#FF6B35] text-[#FF6B35]"
                  />
                ))}
              </div>

              <p className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed text-center">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="text-center">
                <p className="font-bold text-xl mb-1">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-white/80">
                  {testimonials[currentIndex].position} at{' '}
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white transition-all"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-[#00AEEF]'
                      : 'w-2 bg-gray-300'
                  }`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white transition-all"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
