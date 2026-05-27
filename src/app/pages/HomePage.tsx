import { BrandButton } from '../components/brand/BrandButton';
import { Eyebrow } from '../components/brand/Eyebrow';
import { SectionHeader } from '../components/brand/SectionHeader';
import { TestimonialCarousel } from '../components/brand/TestimonialCarousel';
import { CTABlock } from '../components/brand/CTABlock';
import { Search, TrendingUp, Users, Briefcase } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative bg-[#2A1466] min-h-screen flex items-center overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute right-0 top-0 w-[60%] h-full">
          <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#5B3FBC] rounded-full opacity-40 blur-3xl" />
          <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-[#E63995] rounded-full opacity-25 blur-3xl" />
          
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 py-32 w-full">
          <div className="max-w-[60%]">
            {/* Pill chip */}
            <div className="inline-flex items-center gap-2 bg-[#FFD6E8] text-[#E63995] px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <span>★</span>
              <span>GRAPHRAG · HR INTELLIGENCE</span>
            </div>

            <h1 className="text-7xl lg:text-8xl font-bold text-white mb-4">Talent AI</h1>
            <h2 className="text-4xl italic text-[#FFD6E8] mb-6">
              Хиймэл оюун ухаант зөвлөх систем
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl leading-relaxed">
              Central Test-ийн бүх мэдлэгийн сан, дата, тест тус бүрийн Technical Manual (Техник зааварчилгаа) зэрэгт тулгуурлан GraphRAG технологиор баяжуулан бүтээсэн систем бөгөөд хэрэглэгчид хамгийн чанартай мэдээллийг олгох "Хиймэл оюун ухаант зөвлөх" юм.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <BrandButton variant="primary" href="#chat">
                Чат руу орох →
              </BrandButton>
              <BrandButton variant="secondary" href="#video">
                ▶ 60-секундийн видео
              </BrandButton>
            </div>
          </div>

          {/* Stats strip */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20">
            <div className="max-w-[1280px] mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-white/20">
                <div className="py-6 px-8">
                  <div className="text-4xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-white/70">Баталгаажсан Central Test эх сурвалж</div>
                </div>
                <div className="py-6 px-8">
                  <div className="text-4xl font-bold text-white mb-1">AI</div>
                  <div className="text-sm text-white/70">GraphRAG контекст ойлгогч</div>
                </div>
                <div className="py-6 px-8">
                  <div className="text-4xl font-bold text-white mb-1">∞</div>
                  <div className="text-sm text-white/70">Ур чадварын мэдлэгийн зангилаа</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#services" className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors text-sm">
          explore ↓
        </a>
      </section>

      {/* SERVICES PREVIEW */}
      <section id="services" className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrowNumber="01"
            eyebrowText="ҮЙЛЧИЛГЭЭ"
            title="Дөрвөн чиглэлээр ажилладаг"
            subtitle="Сэтгэл зүйн дата танай HR-ын стратегийн суурь болж чадна"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { letter: 'A', title: 'Сонгон шалгаруулалт', icon: Search },
              { letter: 'B', title: 'Talent Management', icon: TrendingUp },
              { letter: 'C', title: 'Багийн динамик', icon: Users },
              { letter: 'D', title: 'Хөгжлийн замнал', icon: Briefcase },
            ].map(({ letter, title, icon: Icon }) => (
              <div key={letter} className="bg-white border border-[#EBE7F4] rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-6xl italic text-[#5B3FBC] font-bold">{letter}</div>
                  <div className="w-12 h-12 rounded-full bg-[#FFD6E8] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#E63995]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A0F3E] mb-3">{title}</h3>
                <p className="text-[#6B6485] text-sm leading-relaxed">
                  AI дэмжлэгтэй {title.toLowerCase()} үйл явц
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS PREVIEW */}
      <section className="bg-[#E9E2FA] py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrowNumber="02"
            eyebrowText="ХЭРХЭН АЖИЛЛАДАГ"
            title="GraphRAG ажиллах гурван алхам"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Асуултаа бичих', desc: 'Өөрийн мэдэхийг хүссэн асуултаа бичнэ' },
              { num: '02', title: 'Мэдлэгийн сангаас хайлт хийх', desc: 'Систем холбоотой мэдлэгийг graph-аас хайна' },
              { num: '03', title: 'Логик дэс дараатай хариулт', desc: 'Central test-дата өгөгдөлөөс хариулт өгнө' },
            ].map(({ num, title, desc }) => (
              <div key={num} className="bg-white rounded-xl p-8 text-center">
                <div className="text-5xl italic text-[#E63995] font-bold mb-4">{num}</div>
                <h3 className="text-xl font-bold text-[#1A0F3E] mb-3">{title}</h3>
                <p className="text-[#6B6485]">{desc}</p>
              </div>
            ))}
          </div>

          {/* Arrow indicators */}
          <div className="flex justify-center gap-4 mt-8 text-[#E63995] text-2xl">
            → → →
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <Eyebrow number="03" text="КЕЙС СУДАЛГАА" />

          <div className="bg-white border border-[#EBE7F4] rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 gap-0">
            <div className="lg:col-span-3 p-12">
              <div className="inline-block bg-[#E9E2FA] text-[#5B3FBC] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                БАНК
              </div>
              <h2 className="text-3xl font-bold text-[#1A0F3E] mb-6">
                Монголын томоохон банк 85% илүү оновчтой хөлслөлт хийсэн
              </h2>
              <p className="text-[#6B6485] mb-8 leading-relaxed">
                Talent AI ашиглаж нэр дэвшигчдийн psychological profile-тай үндэслэн ажлын байранд таарах
                эсэхийг урьдчилан таамаглаж, сургалтын хөрөнгө оруулалтыг оновчтой болгосон.
              </p>
              <a href="/case-studies" className="text-[#E63995] font-semibold hover:underline">
                Дэлгэрэнгүй унших →
              </a>
            </div>
            <div className="lg:col-span-2 bg-[#E9E2FA] flex items-center justify-center p-12 relative">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#5B3FBC] mb-2">85%</div>
                <div className="text-[#6B6485]">илүү оновчтой хөлслөлт</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialCarousel />

      {/* CTA BLOCK */}
      <CTABlock />
    </div>
  );
}
