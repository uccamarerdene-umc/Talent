import { SectionHeader } from '../components/brand/SectionHeader';
import { TestimonialCarousel } from '../components/brand/TestimonialCarousel';
import { CTABlock } from '../components/brand/CTABlock';
import { CheckCircle2, Search, TrendingUp, Users, Briefcase, Target, Zap } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      number: '01',
      title: 'Сонгон шалгаруулалт',
      description: 'Central Test-олон улсын сэтгэл тест үнэлгээни үр дүнг AI-аар тайлбарлаж, ажил горилогчийн ажлын байранд нийцэх эсэхийг богино хугацаанд мэдэх боломжтой.',
      bullets: [
        'Ажил горилогчийн тест үнэлгээний үр дүн,тайлбар',
        'Ажлын байрны дахь ур чадварын  шаардлагатай харьцуулалт',
        'Өрөөсгөл биш үндэслэлтэй сонголт хийх боломж'
      ],
      icon: Search
    },
    {
      number: '02',
      title: 'Talent Management',
      description: 'Ажилчдын сэтгэл зүйн тест үнэлгээний үр дүнд үндэслэн цаашдын хөгжлийн төлөвлөгөө, хүний нөөцийн бодлого төлөвлөлт хийх боломжтой.',
      bullets: [
        'Зан төлөв, хандлага ур чадварын үзүүлэлт',
        'Байгууллагын хөгжлийн төлөвлөгөө',
        'Big Five-д үндэслэсэн learning style таних'
      ],
      icon: TrendingUp
    },
    {
      number: '03',
      title: 'Багийн динамик шинжилгээ',
      description: 'Багийн гишүүдийн сэтгэл зүйн тест үнэлгээний үр дүнд, хамтын ажиллагааны асуудлыг урьдчилан таамаглах сайжруулах.',
      bullets: [
        'Багийн гишүүдийг оновчтой сонгох',
        'Зөрчилдөөний урьдчилсан таамаглал',
        'Харилцааны шинжилгээ хийх боломжтой'
      ],
      icon: Users
    },
    {
      number: '04',
      title: 'Хөгжлийн боломж',
      description: 'Сэтгэл зүйн тест үнэлгээний үр дүн, хувь хүний  онцлогт тохирсон, карьер хөгжлийн төлөвлөгөө  зөвлөмж өгнө.',
      bullets: [
        'Career path mapping',
        'Амжилтын төлөвлөгөө',
        'Нөөц боломжийг тодорхойлох'
      ],
      icon: Briefcase
    }
  ];

  const advantages = [
    { letter: 'A', title: 'Баталгаажсан мэдлэг', desc: 'Central Test-ийн дата өгөгдөл дээр суурилсан', icon: CheckCircle2 },
    { letter: 'B', title: 'Контекст ойлголт', desc: 'GraphRAG технологи', icon: Target },
    { letter: 'C', title: 'Шийдвэр хурдасгах', desc: 'Түргэн шуурхай хариулт', icon: Zap },
    { letter: 'D', title: 'Skill Mapping', desc: 'Ур чадварын зураглал', icon: TrendingUp },
    { letter: 'E', title: 'Цаг хэмнэх', desc: 'Хүний нөөцийн багийн ажлын цагийг 70% хэмнэнэ', icon: CheckCircle2 },
    { letter: 'F', title: '24/7 боломжтой', desc: 'Хаанаас ч асууж болно', icon: CheckCircle2 }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-4 text-[#E63995]">
            <span>★</span>
            <span className="font-semibold text-xs tracking-[0.15em] uppercase">ҮЙЛЧИЛГЭЭ</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#1A0F3E] mb-6 max-w-4xl">
            Сэтгэл зүйн тест, үнэлгээний үр дүн таны туслах, болно.
          </h1>
          <p className="text-xl text-[#6B6485] mb-8 max-w-2xl leading-relaxed">
            Central Test-ийн бүх мэдлэгийн сан, дата, тест тус бүрийн Technical Manual (Техник зааварчилгаа) зэрэгт тулгуурлан GraphRAG технологиор баяжуулан бүтээсэн систем бөгөөд хэрэглэгчид хамгийн чанартай мэдээллийг олгох "Хиймэл оюун ухаант зөвлөх" юм. 
          </p>
          <a
            href="#chat"
            className="inline-flex items-center gap-2 bg-[#E63995] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2A1466] transition-colors"
          >
            Чат туршиж үзэх →
          </a>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      {services.map((service, idx) => (
        <section
          key={service.number}
          id={`service-${idx + 1}`}
          className={idx % 2 === 0 ? 'bg-white py-24' : 'bg-[#FAFAFC] py-24'}
        >
          <div className="max-w-[1280px] mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-6xl italic text-[#E63995] font-bold mb-4">{service.number}</div>
                <h2 className="text-4xl font-bold text-[#1A0F3E] mb-6">{service.title}</h2>
                <p className="text-lg text-[#6B6485] mb-8 leading-relaxed">{service.description}</p>

                <ul className="space-y-4 mb-8">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#E63995] flex-shrink-0 mt-1" />
                      <span className="text-[#1A0F3E]">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a href="#learn-more" className="text-[#E63995] font-semibold hover:underline">
                  Дэлгэрэнгүй унших →
                </a>
              </div>

              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-[#E9E2FA] rounded-xl p-12 flex items-center justify-center aspect-square">
                  <service.icon className="w-48 h-48 text-[#5B3FBC] opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ADVANTAGES */}
      <section className="bg-[#FAFAFC] py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrowText="ҮНДСЭН ДАВУУ ТАЛУУД"
            title="Яагаад Talent AI-г сонгох вэ?"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map(({ letter, title, desc, icon: Icon }) => (
              <div key={letter} className="bg-white border border-[#EBE7F4] rounded-xl p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-5xl italic text-[#5B3FBC] font-bold">{letter}</div>
                  <div className="w-12 h-12 rounded-full bg-[#FFD6E8] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#E63995]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A0F3E] mb-2">{title}</h3>
                <p className="text-[#6B6485] text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialCarousel />

      {/* CTA */}
      <CTABlock />
    </div>
  );
}
