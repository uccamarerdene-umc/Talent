import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll } from 'motion/react';
import { TestimonialCarousel } from '../components/brand/TestimonialCarousel';
import { CTABlock } from '../components/brand/CTABlock';
import { Lightbulb, Eye, Handshake, ArrowRight, Sparkles, Linkedin } from 'lucide-react';

// Тоо автоматаар ургадаг
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

// Sticky scroll progress
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E63995] via-[#5B3FBC] to-[#E63995] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export function AboutPage() {
  const leadership = [
    { name: 'Д. Ерөө', role: 'Ерөнхий захирал', image: '/6.jpg' },
    { name: 'Д. Асралт', role: 'Гүйцэтгэх захирал', image: '/8.jpg' },
    { name: 'Ц. Булган', role: 'Гүйцэтгэх захирал', image: '/5.jpg' }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Growth mindset',
      description: 'Бид сорилт бүрийг боломж гэж харж, тасралтгүй суралцаж, сурсан бүхнээ бусадтай хуваалцдаг.'
    },
    {
      icon: Eye,
      title: 'Operational excellence',
      description: 'Бид процесс бүрийг нарийвчлалтай, үр ашигтай, стандарттай зохион байгуулдаг.'
    },
    {
      icon: Handshake,
      title: 'Data-driven',
      description: 'Таамаглал бус, бодит өгөгдөл, судалгаа шинжлэх ухааны үндэслэлтэй шийдвэр гаргадаг.'
    }
  ];

  const timeline = [
    { year: '2015', title: 'Career Development Center', desc: 'Central test - албан ёсны эрхтэйгээр Монголд нэвтрүүлсэн' },
    { year: '2015', title: 'Harvard Business Review', desc: 'United Business Review' },
    { year: '2020', title: 'Business Academy', desc: 'Harvard Managementor хөтөлбөрийг хэрэгжүүлж эхэлсэн' },
    { year: '2025', title: 'TalentHub Mongolia', desc: 'TalentHub Mongolia төслийн эхлэл' },
    { year: '2026', title: 'Өнөөдөр', desc: 'Talent AI нэвтрүүлсэн' }
  ];

  return (
    <div className="min-h-screen">
      <ScrollProgress />

      {/* ============ HERO ============ */}
      <section className="relative bg-[#1A0F3E] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-0 top-0 w-[600px] h-[600px] bg-[#5B3FBC] rounded-full opacity-40 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-1/3 top-1/2 w-[500px] h-[500px] bg-[#E63995] rounded-full opacity-25 blur-3xl"
          />
        </div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#FFD6E8] px-4 py-2 rounded-full text-sm font-medium mb-8"
              >
                <Sparkles className="w-4 h-4" />
                <span>БИДНИЙ ТУХАЙ</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]"
              >
                United Consulting{' '}
                <span className="bg-gradient-to-r from-[#FFD6E8] to-[#E63995] bg-clip-text text-transparent italic">
                  Management
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-white/70 max-w-2xl leading-relaxed mb-10"
              >
                Байгууллагын засаглал, удирдлагын чадамж, өөрчлөлтийн манлайллыг хурдасгагч байх.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#leadership"
                  className="group bg-[#E63995] text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#1A0F3E] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-pink-500/30"
                >
                  Удирдлагын баг
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="group bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
                >
                  Холбоо барих
                </a>
              </motion.div>
            </div>

            {/* Right side stat card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="text-sm text-[#FFD6E8] uppercase tracking-widest mb-4">
                  Бидний амжилт
                </div>
                <div className="space-y-6">
                  {[
                    { num: '10+', label: 'Жилийн туршлага' },
                    { num: '50+', label: 'Үйлчилүүлэгч байгууллага' },
                    { num: '1000+', label: 'Гүйцэтгэх удирдлагын манлайлалын ур чадварыг хөгжүүлэх сургалт' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="flex items-baseline justify-between border-b border-white/10 pb-4 last:border-0"
                    >
                      <div className="text-5xl font-bold text-white">{item.num}</div>
                      <div className="text-sm text-white/60 text-right max-w-[60%]">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ LEADERSHIP ============ */}
      <section id="leadership" className="bg-white py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4 text-[#E63995]">
              <span className="font-semibold text-xs tracking-[0.15em] uppercase">УДИРДЛАГА</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A0F3E] tracking-tight">
              Манай{' '}
              <span className="bg-gradient-to-r from-[#E63995] to-[#5B3FBC] bg-clip-text text-transparent">
                удирдах баг
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, idx) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative"
              >
                <div className="relative bg-[#FAFAFC] border border-[#EBE7F4] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F3E]/80 via-transparent to-transparent" />
                    <a
                      href="#"
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#E63995] hover:border-[#E63995] transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1A0F3E] mb-1 group-hover:text-[#E63995] transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-[#6B6485] text-sm">{leader.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="bg-[#FAFAFC] py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4 text-[#E63995]">
              <span className="font-semibold text-xs tracking-[0.15em] uppercase">cor value</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A0F3E] tracking-tight">
              Үнэт{' '}
              <span className="bg-gradient-to-r from-[#E63995] to-[#5B3FBC] bg-clip-text text-transparent">
                Зүйл
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-white border border-[#EBE7F4] rounded-3xl p-10 hover:border-[#E63995] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD6E8]/0 to-[#FFD6E8]/0 group-hover:from-[#FFD6E8]/20 group-hover:to-transparent transition-all duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFD6E8] to-[#E63995]/30 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <value.icon className="w-8 h-8 text-[#E63995]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A0F3E] mb-4">{value.title}</h3>
                  <p className="text-[#6B6485] leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="bg-[#1A0F3E] py-32 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-0 top-0 w-96 h-96 bg-[#5B3FBC] rounded-full opacity-40 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-0 bottom-0 w-80 h-80 bg-[#E63995] rounded-full opacity-25 blur-3xl"
        />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#FFD6E8] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>ЭРХЭМ ЗОРИЛГО</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                Бид өөрчлөлтийг хурдасгах{' '}
                <span className="bg-gradient-to-r from-[#FFD6E8] to-[#E63995] bg-clip-text text-transparent italic">
                  удирдагчдыг бэлдэнэ.
                </span>
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed text-lg">
                Дэлхийн шилдэг манлайллын туршлагаар ТУЗ, гүйцэтгэх удирдлагын өсөлтийн сэтгэлгээг хөгжүүлж, өөрчлөлтийг хурдасгагч удирдагчдыг бэлтгэдэг манлайллын экосистемийг бүрдүүлнэ.
              </p>
              <a
                href="/services"
                className="group inline-flex items-center gap-2 bg-[#E63995] text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#1A0F3E] transition-all duration-300 shadow-lg shadow-pink-500/30"
              >
                Холбоо барих
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center">
              <div className="text-8xl lg:text-9xl font-bold bg-gradient-to-br from-white to-[#FFD6E8] bg-clip-text text-transparent mb-4">
                <CountUp end={50} suffix="+" />
              </div>
              <div className="text-xl text-white/80">Хамтрагч байгууллага</div>
              <div className="text-sm text-white/40 mt-2">2015 оноос хойш</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="bg-white py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4 text-[#E63995]">
              <span className="font-semibold text-xs tracking-[0.15em] uppercase">History</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A0F3E] tracking-tight">
              Бидний{' '}
              <span className="bg-gradient-to-r from-[#E63995] to-[#5B3FBC] bg-clip-text text-transparent">
                тухай
              </span>
            </h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E63995] via-[#5B3FBC] to-[#FFD6E8]" />

            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative pl-24"
                >
                  <div className="absolute left-5 top-3 w-7 h-7 rounded-full bg-gradient-to-br from-[#E63995] to-[#5B3FBC] border-4 border-white shadow-lg shadow-pink-500/30" />

                  <div className="group bg-[#FAFAFC] hover:bg-white border border-[#EBE7F4] hover:border-[#E63995] rounded-2xl p-6 transition-all hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-baseline gap-4 mb-2">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#E63995] to-[#5B3FBC] bg-clip-text text-transparent">
                        {item.year}
                      </div>
                      <div className="h-px flex-1 bg-[#EBE7F4]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A0F3E] mb-2 group-hover:text-[#E63995] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#6B6485] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
