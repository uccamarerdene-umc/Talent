import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { BrandButton } from '../components/brand/BrandButton';
import { Eyebrow } from '../components/brand/Eyebrow';
import { SectionHeader } from '../components/brand/SectionHeader';
import { TestimonialCarousel } from '../components/brand/TestimonialCarousel';
import { CTABlock } from '../components/brand/CTABlock';
import { Search, TrendingUp, Users, Briefcase, ArrowRight, Sparkles } from 'lucide-react';

// Tоо автоматаар ургадаг компонент
function CountUp({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Floating talent card компонент — talent.ai-ийн стилээр
function FloatingTalentCard({ 
  image, score, name, delay, className = '' 
}: { 
  image: string; score: number; name: string; delay: number; className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <div className="w-32 h-40 lg:w-40 lg:h-52 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/20 backdrop-blur-sm">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        {/* Score badge */}
        <div className="absolute -bottom-3 -right-3 bg-white rounded-full px-4 py-2 shadow-xl flex items-center gap-1">
          <span className="text-2xl font-bold text-[#E63995]">{score}</span>
          <span className="text-xs text-[#6B6485]">match</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div className="min-h-screen">
      {/* ============ HERO — Animated gradient mesh + floating cards ============ */}
      <motion.section 
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative bg-[#2A1466] min-h-screen flex items-center overflow-hidden"
      >
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-[#5B3FBC] rounded-full opacity-40 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-20 top-1/3 w-[500px] h-[500px] bg-[#E63995] rounded-full opacity-30 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -80, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/3 bottom-1/4 w-[400px] h-[400px] bg-[#FFD6E8] rounded-full opacity-10 blur-3xl"
          />
        </div>

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#FFD6E8] px-4 py-2 rounded-full text-sm font-medium mb-8"
              >
                <Sparkles className="w-4 h-4" />
                <span>GRAPHRAG ·  Байгууллагын хүний нөөцийн туслагч</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-6xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
              >
                Talent <span className="bg-gradient-to-r from-[#FFD6E8] to-[#E63995] bg-clip-text text-transparent">AI</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl lg:text-4xl italic text-[#FFD6E8] mb-6 font-light"
              >
                Хиймэл оюун ухаант зөвлөх систем
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg text-white/70 mb-10 max-w-2xl leading-relaxed"
              >
                Central Test-ийн бүх мэдлэгийн сан, дата, тест тус бүрийн Technical Manual зэрэгт тулгуурлан GraphRAG технологиор баяжуулан бүтээсэн "Хиймэл оюун ухаант зөвлөх" юм.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                {/* Modern CTA — arrow animates on hover */}
                <a
                  href="#chat"
                  className="group bg-[#E63995] text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2A1466] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-pink-500/30"
                >
                  Таlent AI турших
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#video"
                  className="group bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  ▶ Talent AI ашиглах гарын авлага татаж авах
                </a>
              </motion.div>
            </div>

            {/* Right: floating talent cards — Шинэ зургуудаар солигдсон хэсэг */}
            <div className="lg:col-span-5 relative h-[500px] hidden lg:block">
              <FloatingTalentCard
                image="/16.png"
                score={94}
                name="Candidate 1"
                delay={0.6}
                className="top-0 left-8"
              />
              <FloatingTalentCard
                image="/17.png"
                score={86}
                name="Candidate 2"
                delay={0.8}
                className="top-32 right-0"
              />
              <FloatingTalentCard
                image="/18.png"
                score={89}
                name="Candidate 3"
                delay={1}
                className="bottom-0 left-20"
              />
            </div>
          </div>

          {/* Stats — анимэйшнтэй тоог нэмсэн */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10"
          >
            <div className="max-w-[1280px] mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-white/10">
                <div className="py-8 px-8">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-1">
                    <CountUp end={100} suffix="%" />
                  </div>
                  <div className="text-sm text-white/60">Баталгаажсан Central Test-ийн эх сурвалж</div>
                </div>
                <div className="py-8 px-8">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#FFD6E8] to-[#E63995] bg-clip-text text-transparent mb-1">
                    AI
                  </div>
                  <div className="text-sm text-white/60">Мэдлэгийн сан</div>
                </div>
                <div className="py-8 px-8">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-1">∞</div>
                  <div className="text-sm text-white/60">Мэдлэгийн graph</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ============ SERVICES — Bento grid (өөр өөр хэмжээтэй карт) ============ */}
      <section id="services" className="bg-white py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrowNumber="01"
            eyebrowText="ҮЙЛЧИЛГЭЭ"
            title="Talent AI давуу тал"
            subtitle="Сэтгэл зүйн тест үнэлгээний үр дүн таны хүний нөөцийн туслах"
          />

          {/* Bento grid — нэг том карт + 3 жижиг */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* Том featured карт */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 md:row-span-2 group relative bg-gradient-to-br from-[#2A1466] to-[#5B3FBC] rounded-3xl p-10 overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E63995] rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity" />
              <div className="relative h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-7xl italic text-white/20 font-bold mb-4">A</div>
                  <h3 className="text-3xl font-bold text-white mb-3">Сонгон шалгаруулалт</h3>
                  <p className="text-white/70 leading-relaxed max-w-md">
                    AI дээр суурилсан ажил горилогчийн сэтгэл зүйн тест үнэлгээний үр дүнгээр ажлын байрны нийцлийг урьдчилсан таамаглал.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#FFD6E8] font-semibold group-hover:gap-3 transition-all">
                  Дэлгэрэнгүй <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

            {/* Жижиг карт 1 */}
            {[
              { letter: 'B', title: 'Talent Management', icon: TrendingUp, desc: 'Байгууллагын стратегийн зорилгод нийцүүлэн talent-ийг олж илрүүлэх, хөгжүүлэх, тогтоон барих цогц үйл ажиллагааг AI-ын тусламжтай ухаалгаар удирдах боломж.' },
              { letter: 'C', title: 'Багийн динамик', icon: Users, desc: 'Багийн гишүүдийн хоорондын харилцаа, зан төлөв, ажлын уялдаа холбоог өгөгдөлд тулгуурлан шинжилж, хамтын ажиллагааны үр бүтээмжийг нэмэгдүүлэх арга' },
              { letter: 'D', title: 'Хөгжлийн замнал', icon: Briefcase, desc: 'Ажилтны ур чадварын түвшин болон карьерын зорилгод тулгуурлан, түүнийг дараагийн шатанд гаргах сургалт, хөгжлийн алхмуудыг AI-ын тусламжтай, санал болгож буй хувийн төлөвлөгөө' },
            ].map(({ letter, title, icon: Icon, desc }, idx) => (
              <motion.div
                key={letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-white border border-[#EBE7F4] rounded-3xl p-8 hover:border-[#E63995] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD6E8]/0 to-[#FFD6E8]/0 group-hover:from-[#FFD6E8]/20 group-hover:to-transparent transition-all duration-500" />
                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-5xl italic text-[#5B3FBC] font-bold">{letter}</div>
                      <div className="w-10 h-10 rounded-xl bg-[#FFD6E8] flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <Icon className="w-5 h-5 text-[#E63995]" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#1A0F3E] mb-2">{title}</h3>
                    <p className="text-[#6B6485] text-sm leading-relaxed">{desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#E63995] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS — Connected steps with animated line ============ */}
      <section className="bg-gradient-to-b from-[#E9E2FA] to-white py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrowNumber="02"
            eyebrowText="ХЭРХЭН АЖИЛЛАДАГ"
            title="TALENT AI ажиллах гурван алхам"
            centered
          />

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Холбогч шугам */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#E63995] via-[#5B3FBC] to-[#E63995]" />

            {[
              { num: '01', title: 'Асуултаа бичих', desc: 'Өөрийн мэдэхийг хүссэн асуултаа бичнэ' },
              { num: '02', title: 'Мэдлэгийн сангаас хайлт хийх', desc: 'Систем холбоотой мэдлэгийг graph-аас хайна' },
              { num: '03', title: 'Логик дэс дараатай хариулт', desc: 'Central test-дата өгөгдөлөөс хариулт өгнө' },
            ].map(({ num, title, desc }, idx) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFD6E8] to-[#E63995] rounded-full opacity-20 blur-xl" />
                  <div className="relative text-5xl italic text-[#E63995] font-bold">{num}</div>
                </div>
                <h3 className="text-xl font-bold text-[#1A0F3E] mb-3">{title}</h3>
                <p className="text-[#6B6485]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED CASE STUDY — Modern asymmetric layout ============ */}
      <section className="bg-white py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <Eyebrow number="03" text="КЕЙС СУДАЛГАА" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-[#1A0F3E] via-[#2A1466] to-[#5B3FBC] rounded-3xl overflow-hidden p-12 lg:p-16"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E63995] rounded-full opacity-20 blur-3xl" />
            
            <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  CENTRAL TEST
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Сэтгэл зүйн шинжлэх ухаанаар баталгаажсан{' '}
                  <span className="bg-gradient-to-r from-[#FFD6E8] to-[#E63995] bg-clip-text text-transparent">
                    Central Test
                  </span>{' '}
                  Сэтгэл зүйн тест, үнэлгээ
                </h2>
                <p className="text-white/70 mb-8 leading-relaxed text-lg">
                  Америкийн сэтгэл судлалын холбоо (APA), Британийн сэтгэл зүйн нийгэмлэг (BPS) болон Олон улсын шалгалтын комисс (ITC)-с тогтоосон сэтгэл зүйн үнэлгээний баталгаажуулалтын стандартуудыг баримталдаг.Хувь хүний зан төлөв, хандлага, ур чадвар, чадамж,  мэргэжлийн чиг баримжаа, сэдэлжүүлэгч хүчин зүйл гэх мэтийг тодорхойлдог сэтгэл зүйн тест үнэлгээний олон улсын систем юм.
                </p>
                <a href="/case-studies" className="group inline-flex items-center gap-2 text-[#FFD6E8] font-semibold hover:gap-3 transition-all">
                  Дэлгэрэнгүй унших <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 text-center">
                  <div className="text-7xl lg:text-8xl font-bold bg-gradient-to-br from-white to-[#FFD6E8] bg-clip-text text-transparent mb-2">
                    <CountUp end={40000} suffix="дата" />
                  </div>
                  <div className="text-white/70">2015 оноос хойш Central Test сэтгэл зүйн тест үнэлгээнд хамрагдсан бодит дата өгөгдөлд суурилсан</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialCarousel />

      {/* CTA BLOCK */}
      <CTABlock />
    </div>
  );
}
