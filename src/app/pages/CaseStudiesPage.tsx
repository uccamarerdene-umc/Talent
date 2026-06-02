import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll } from 'motion/react';
import { CTABlock } from '../components/brand/CTABlock';
import { Building2, Code, Factory, GraduationCap, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

// Тоо ургах анимаци
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

// Скролл индикатор
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E63995] via-[#5B3FBC] to-[#E63995] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export function CaseStudiesPage() {
  // Нийтлэл болон Судалгааны дата (Шүүлтүүрийн логик ашиглахгүй тул статик массив болгов)
  const articles = [
    {
      id: "mongol-manager-identity",
      category: 'МЕНЕЖМЕНТ СУДАЛГАА',
      title: 'Монгол менежер гэж хэн бэ?',
      description: 'Монгол менежер бол өвөрмөц. Олон зууны нүүдэлчдийн соёлоос уламжилсан уян хатан байдал, тэвчээр, хамтын зорилгод чиглэх чадвар нь өнөөгийн дэлхийн бизнесийн орчинд маш үнэ цэнтэй давуу тал болж байна.',
      date: '2026.05.20',
      icon: Building2,
    },
    {
      id: "executive-summary-2026",
      category: 'ҮЙЛ АЖИЛЛАГАА',
      title: '«EXECUTIVE SUMMIT 2026 – STEPPE MANAGER»',
      description: 'Багийн динамик шинжилгээгээр хамтын ажиллагааг сайжруулж, ажилчдын тогтвор суурьшилгүй байдлыг (turnover) 40%-иар бууруулсан кэйс судалгаа.',
      date: '2026.05.15',
      icon: Code,
    },
    {
      id: "manager-skills-gap",
      category: 'УР ЧАДВАРЫН ШИНЖИЛГЭЭ',
      title: 'Тал нутгийн менежер танд ямар чадвар дутаж байна вэ?',
      description: 'Монгол менежерүүдийн ур чадварын ерөнхий дундаж оноо 100-аас 55 оноо буюу хөгжих боломжтой түвшинд үнэлэгдсэн байна. Авьяасын менежментээр ажилчдын skill gap илрүүлж, зорилтот сургалт өгснөөр бүтээмж нэмэгдсэн үр дүн.',
      date: '2026.05.10',
      icon: Factory,
    },
    {
      id: "steppe-soul-summit",
      category: 'АРГА ХЭМЖЭЭ',
      title: '«STEPPE SOUL, SUSTAINABLE GOAL» удирдлагуудын нэгдсэн уулзалт',
      description: 'Удирдлагуудын нэгдсэн уулзалт амжилттай зохион байгуулагдлаа. Тус арга хэмжээнд Монгол Улсын тэргүүлэх компаниудын 200 гаруй захирал, удирдах ажилтан нэгдэн оролцож, цаашдын чиг хандлагыг хэлэлцэв.',
      date: '2026.05.02',
      icon: GraduationCap,
    },
    {
      id: "sales-team-optimization",
      category: 'БАТАЛГААЖСАН КЕЙС',
      title: 'Борлуулалт болон зээлийн салбарын бүтээмжийг оновчлох нь',
      description: 'Борлуулалтын багийн найрлагыг Central Test оношлогооны тусламжтайгаар зөв зохион байгуулж, багийн ажлын гүйцэтгэл болон бүтээмжийг 2 дахин нэмэгдүүлсэн туршлага.',
      date: '2026.04.28',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFC]">
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
                <span>СУДАЛГАА БОЛОН НИЙТЛЭЛ</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]"
              >
                Монгол менежерийн{' '}
                <span className="bg-gradient-to-r from-[#FFD6E8] to-[#E63995] bg-clip-text text-transparent italic">
                  дүр төрх — 2026
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-white/70 max-w-2xl leading-relaxed"
              >
                "Монгол менежерийн дүр төрх" судалгааг 5 жилийн хугацаанд 1,033 менежерийн онцлог шинж чанар, сэтгэлгээний болон ажиллах хэв маяг, 9 бүлгийн 59 зөөлөн ур чадварыг олон улсын Central Test — CTPI аргачлалаар тодорхойлсон бодит датад тулгуурлан боловсруулсан.
              </motion.p>
            </div>

            {/* Баруун талын статистик карт */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="text-sm text-[#FFD6E8] uppercase tracking-widest mb-4">
                  Судалгааны хүрээ
                </div>
                <div className="space-y-6">
                  {[
                    { num: '1,033', label: 'Менежер хамруулсан' },
                    { num: '5 жил', label: 'Үргэлжилсэн хугацаа' },
                    { num: '59', label: 'Зөөлөн ур чадвар' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="flex items-baseline justify-between border-b border-white/10 pb-4 last:border-0"
                    >
                      <div className="text-4xl font-bold text-white">{item.num}</div>
                      <div className="text-sm text-white/60 text-right max-w-[55%]">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FILTER BAR ХЭСГИЙГ ХАСАВ (Таны хүсэлтээр Screenshot дээрх хэсгийг бүрэн устгалаа) */}

      {/* ============ ARTICLES GRID ============ */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#1A0F3E]">Нийтлэгдсэн судалгаа, нийтлэлүүд</h2>
            <div className="text-sm text-[#6B6485]">
              Нийт <span className="font-bold text-[#1A0F3E]">{articles.length}</span> материал байна
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-white border border-[#EBE7F4] rounded-3xl p-6 hover:border-[#E63995] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Дээд талын айкон болон огноо */}
                  <div className="flex justify-between items-center mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#E63995]/10 flex items-center justify-center group-hover:rotate-6 transition-transform">
                      <article.icon className="w-6 h-6 text-[#E63995]" />
                    </div>
                    <span className="text-xs font-medium text-[#6B6485] bg-[#FAFAFC] px-3 py-1 rounded-full">
                      {article.date}
                    </span>
                  </div>

                  {/* Ангилал */}
                  <div className="text-xs font-bold uppercase tracking-widest text-[#E63995] mb-2">
                    {article.category}
                  </div>

                  {/* Гарчиг */}
                  <h3 className="text-xl font-bold text-[#1A0F3E] mb-3 group-hover:text-[#E63995] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  {/* Товч агуулга */}
                  <p className="text-[#6B6485] text-sm mb-6 leading-relaxed line-clamp-4">
                    {article.description}
                  </p>
                </div>

                {/* Дэлгэрэнгүй унших холбоос */}
                <div className="border-t border-[#EBE7F4] pt-4 mt-auto">
                  <a
                    href={`/blog/${article.id}`} 
                    className="inline-flex items-center gap-2 text-[#1A0F3E] group-hover:text-[#E63995] font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Дэлгэрэнгүй унших <ArrowRight className="w-4 h-4 text-[#E63995]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED CASE — STEPPE MANAGER ============ */}
      <section className="bg-white py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4 text-[#E63995]">
              <span className="font-semibold text-xs tracking-[0.15em] uppercase">ОНЦЛОХ СУДАЛГАА</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A0F3E] tracking-tight">
              Үндсэн{' '}
              <span className="bg-gradient-to-r from-[#E63995] to-[#5B3FBC] bg-clip-text text-transparent">
                Тайлан
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-[#1A0F3E] via-[#2A1466] to-[#5B3FBC] rounded-3xl overflow-hidden p-12 lg:p-16"
          >
            <motion.div
              animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 right-0 w-96 h-96 bg-[#E63995] rounded-full opacity-25 blur-3xl"
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-semibold mb-6 uppercase tracking-widest">
                  Steppe Manager
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                  Монгол Менежерийн{' '}
                  <span className="bg-gradient-to-r from-[#FFD6E8] to-[#E63995] bg-clip-text text-transparent italic">
                    дүр төрх
                  </span>
                </h2>

                <p className="text-white/70 mb-8 leading-relaxed text-lg">
                  Тус судалгаа нь 5 жилийн хугацаанд, нийт 1,033 менежерийг хамруулан олон улсад хүлээн зөвшөөрөгдсөн «Central Test — CTPI» аргачлалаар Менежерийн бие хүний онцлог шинж чанар, сэтгэлгээний болон ажиллах хэв маяг, 9 бүлгийн 59 зөөлөн ур чадварыг шинжлэх ухааны үндэслэлтэйгээр тодорхойлсон.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                    <div className="text-4xl font-bold bg-gradient-to-br from-white to-[#FFD6E8] bg-clip-text text-transparent mb-1">
                      <CountUp end={88} suffix="%" />
                    </div>
                    <div className="text-sm text-white/70">Төслийн менежер хэв шинж</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                    <div className="text-4xl font-bold bg-gradient-to-br from-white to-[#FFD6E8] bg-clip-text text-transparent mb-1">
                      <CountUp end={74} suffix="%" />
                    </div>
                    <div className="text-sm text-white/70">Идэвхжүүлэгч менежер хэв шинж</div>
                  </div>
                </div>

                <a
                  href="/blog/mongol-manager-identity"
                  className="group inline-flex items-center gap-2 bg-[#E63995] text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#1A0F3E] transition-all duration-300 shadow-lg shadow-pink-500/30"
                >
                  Судалгааны тайлантай танилцах
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center">
                  <div className="text-7xl lg:text-8xl font-bold bg-gradient-to-br from-white to-[#FFD6E8] bg-clip-text text-transparent mb-3">
                    <CountUp end={1033} />
                  </div>
                  <div className="text-lg text-white font-semibold uppercase tracking-widest">
                    Монгол менежер
                  </div>
                  <div className="text-sm text-white/60 mt-2">5 жилийн судалгаа</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock />
    </div>
  );
}
