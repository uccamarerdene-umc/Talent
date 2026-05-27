import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Talent AI нь манай сонгон шалгаруулалтын үйл явцыг бүрэн өөрчилсөн.",
    name: "Б. Болормаа",
    role: "HR Захирал",
    company: "Монголын томоохон банк"
  },
  {
    quote: "Тalent AI нь зүгээр нэг хайлт биш, бодит ойлголттой зөвлөгөө өгдөг. Багийн динамикийг урьдчилан таамаглаж, асуудал гарахаас өмнө шийддэг.",
    name: "Ч. Энхбаяр",
    role: "Хүний нөөцийн менежер",
    company: "Tech Scale-up"
  },
  {
    quote: "Central Test өгөгдөл дээр суурилсан учир бид AI хариултанд бүрэн итгэдэг. Hallucination гэж байхгүй, зөвхөн шинжлэх ухааны үндэслэлтэй хариулт өгдөг.",
    name: "Д. Оюунэрдэнэ",
    role: "Суралцахуй хөгжлийн ахлах мэргэжилтэн",
    company: "Олон улсын корпораци"
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((currentIndex + 1) % testimonials.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-[#FAFAFC] py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <span className="text-[#E63995]">★</span>
          <span className="text-[#E63995] font-semibold text-xs tracking-[0.15em] uppercase">ХЭРЭГЛЭГЧДИЙН СЭТГЭГДЭЛ</span>
        </div>
        <h2 className="text-4xl font-bold text-center mb-16 text-[#1A0F3E]">
          Хэрэглэгчидийн сэтгэгдэл?
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#E63995] hover:bg-[#E63995] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#E63995] hover:bg-[#E63995] hover:text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Card */}
          <div className="bg-white rounded-xl p-12 border border-[#EBE7F4] shadow-sm">
            <div className="text-[#E63995] text-6xl mb-6">"</div>
            <p className="text-xl italic text-[#1A0F3E] mb-8 leading-relaxed">
              {testimonials[currentIndex].quote}
            </p>
            <div className="border-t border-[#EBE7F4] pt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9E2FA] flex items-center justify-center text-[#5B3FBC] font-bold">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-[#1A0F3E]">{testimonials[currentIndex].name}</div>
                
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-[#E63995] w-8' : 'bg-[#EBE7F4]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
