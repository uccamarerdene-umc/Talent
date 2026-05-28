import { useRef } from "react";
import { motion, useInView, useScroll } from "motion/react";
import { CTABlock } from "../components/brand/CTABlock";
import {
  Database,
  Network,
  Brain,
  RefreshCw,
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
} from "lucide-react";

// Animated stat — BCG-style big confident number
function AnimatedStat({
  value,
  suffix = "",
  label,
}: {
  value: string;
  suffix?: string;
  label: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="text-6xl lg:text-7xl font-bold text-[#2A1466] tracking-tight mb-3">
        {value}
        {suffix}
      </div>
      <div className="h-px w-12 bg-[#E63995] mb-3" />
      <div className="text-sm text-[#6B6485] leading-snug">{label}</div>
    </motion.div>
  );
}

// Sticky scroll progress
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#E63995] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export function HowItWorksPage() {
  const pillars = [
    {
      number: "01",
      tag: "ӨГӨГДЛИЙН СУУРЬ",
      title: "Central Test өгөгдлийн суурь",
      description:
        "Talent AI нь зөвхөн баталгаажсан Central Test-ийн дата, баримт бичгийг эх сурвалж болгон ашигладаг. Зохиомол хариултыг бүрэн арилгаж, сэтгэл зүйн шинжлэх ухаанаар баталгаажсан үндэслэлтэй хариулт өгнө.",
      icon: Database,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop",
    },
    {
      number: "02",
      tag: "МЭДЛЭГИЙН СҮЛЖЭЭ",
      title: "Knowledge Graph",
      description:
        "GraphRAG нь энгийн текст хайлт биш, тест үнэлгээний үр дүн, ажлын байр, зан үйлийн хоорондын харилцааг graph бүтцээр илэрхийлж, ойлголт өгдөг.",
      icon: Network,
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=1000&fit=crop",
    },
    {
      number: "03",
      tag: "КОНТЕКСТ ОЙЛГОЛТ",
      title: "Context-aware retrieval",
      description:
        "Ганц хоёр түлхүүр үгэнд баригдалгүй, хайлтын цаад утга санаа, нөхцөл байдлыг харгалзан хамгийн оновчтой үр дүнг гаргаж ирэх технологи.",
      icon: Brain,
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=1000&fit=crop",
    },
    {
      number: "04",
      tag: "ТАСРАЛТГҮЙ СУРАЛЦАХ",
      title: "Continuous learning",
      description:
        "Central Test-ийн өгөгдлийн өөрчлөлт автоматаар мэдлэгийн санд нэмэгдэж, систем үргэлж шинэчлэгддэг. Зөвлөхийг хамгийн сүүлийн үеийн байлгана.",
      icon: RefreshCw,
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=1000&fit=crop",
    },
  ];

  const comparisonTraditional = [
    "Текст хайлт (keyword matching)",
    "Контекстгүй хариу",
    "Hallucination өндөр",
    "Гүехэн insight",
  ];

  const comparisonTalentAI = [
    "Мэдлэгийн сүлжээ (knowledge graph)",
    "Холболттой зөвлөмж",
    "Эх сурвалжтай хариулт",
    "Гүн шинжилгээ",
  ];

  const dataSources = [
    "Central Test",
    "Big Five",
    "CTPI – Менежерийн тест",
    "PP – Ажилтны хандлага",
    "EQ – Сэтгэлийн хөдлөл",
    "VOCATION – Карьерийн чиг баримжаа",
  ];

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />

      {/* ============ HERO — BCG-style bold editorial ============ */}
      <section className="relative bg-[#1A0F3E] pt-40 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#5B3FBC] rounded-full opacity-25 blur-3xl" />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-[#E63995]" />
            <span className="text-[#FFD6E8] text-xs font-semibold tracking-[0.2em] uppercase">
              Хэрхэн ажилладаг
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.02] max-w-5xl mb-10"
          >
            Зохиомол хариулт биш.{" "}
            <span className="text-[#FFD6E8]">Баталгаажсан өгөгдлийн хүч.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-white/70 max-w-3xl leading-relaxed font-light mb-12"
          >
            GraphRAG-ийн дөрвөн багана хэрхэн нэгдэж, уламжлалт хиймэл оюунаас
            хэд дахин найдвартай зөвлөгөө өгдгийг танилцуулъя.
          </motion.p>

          <motion.a
            href="#pillars"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group inline-flex items-center gap-3 text-white border-b-2 border-[#E63995] pb-2 font-semibold text-lg hover:gap-5 transition-all"
          >
            Дөрвөн баганыг үзэх
            <ArrowRight className="w-5 h-5 text-[#E63995] group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </section>

      {/* ============ LEAD STATEMENT — BCG editorial intro ============ */}
      <section className="bg-white py-24 border-b border-[#EBE7F4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[#E63995] text-xs font-semibold tracking-[0.2em] uppercase">
                Тойм
              </span>
            </div>
            <div className="lg:col-span-8">
              <p className="text-2xl lg:text-3xl text-[#1A0F3E] leading-snug font-light tracking-tight">
                Ихэнх AI систем интернэт дэх бүхий л эх сурвалжаас суралцдаг тул
                найдваргүй хариулт өгөх эрсдэлтэй.{" "}
                <span className="font-semibold">
                  Talent AI зөвхөн баталгаажсан Central Test-ийн дата дээр
                  тулгуурлан ажилладаг
                </span>{" "}
                — ингэснээр HR-ын шийдвэр бүр шинжлэх ухааны баримтад үндэслэнэ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4 PILLARS — BCG insight card grid ============ */}
      <section id="pillars" className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#E63995]" />
              <span className="text-[#E63995] text-xs font-semibold tracking-[0.2em] uppercase">
                Архитектур
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#1A0F3E] tracking-tight leading-tight max-w-2xl">
              GraphRAG-ийн дөрвөн багана
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.a
                href="#"
                key={pillar.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group block"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F3E] via-[#1A0F3E]/40 to-transparent" />
                  <div className="absolute top-5 left-5 text-5xl font-bold text-white/90">
                    {pillar.number}
                  </div>
                  <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <pillar.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-[#FFD6E8] text-[10px] font-semibold tracking-[0.15em] uppercase">
                      {pillar.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#1A0F3E] mb-3 group-hover:text-[#E63995] transition-colors leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-[#6B6485] text-sm leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <div className="inline-flex items-center gap-2 text-[#E63995] font-semibold text-sm group-hover:gap-3 transition-all">
                  Дэлгэрэнгүй
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SPOTLIGHT — BCG featured block ============ */}
      <section className="bg-[#2A1466] py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E63995] rounded-full opacity-15 blur-3xl" />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-[#FFD6E8] text-xs font-semibold tracking-[0.2em] uppercase">
                Онцлох
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-tight mt-6 mb-8">
                "Энэ системийн ялгаа нь зөвхөн баталгаажсан эх сурвалжаас хариу
                өгдөг — зохиомол үг хэлдэггүйд оршино."
              </h2>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-[#E63995]" />
                <span className="text-white/60 text-sm tracking-wide">
                  UMC Talent AI · GraphRAG Architecture
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-1 gap-px bg-white/10 rounded-2xl overflow-hidden">
                {[
                  { num: "100%", label: "Баталгаажсан эх сурвалж" },
                  { num: "0%", label: "Hallucination түвшин" },
                  { num: "06+", label: "Тест мэдлэгийн эх сурвалж" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#2A1466] p-8 flex items-baseline justify-between"
                  >
                    <div className="text-5xl font-bold text-white">
                      {item.num}
                    </div>
                    <div className="text-sm text-white/60 text-right max-w-[55%]">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS — BCG confident numbers ============ */}
      <section className="bg-white py-28 border-b border-[#EBE7F4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <AnimatedStat value="4" label="Тулгуур багана" />
            <AnimatedStat value="06" suffix="+" label="Тест эх сурвалж" />
            <AnimatedStat value="∞" label="Мэдлэгийн зангилаа" />
            <AnimatedStat value="24" suffix="/7" label="Тасралтгүй шинэчлэлт" />
          </div>
        </div>
      </section>

      {/* ============ COMPARISON — clean editorial ============ */}
      <section className="bg-[#FAFAFC] py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#E63995]" />
              <span className="text-[#E63995] text-xs font-semibold tracking-[0.2em] uppercase">
                Харьцуулалт
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#1A0F3E] tracking-tight leading-tight max-w-3xl">
              Уламжлалт AI vs UMC Talent AI
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-[#EBE7F4] rounded-2xl p-10"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6B6485] mb-6">
                Уламжлалт LLM
              </div>
              <h3 className="text-2xl font-bold text-[#1A0F3E] mb-8">
                Хязгаарлагдмал арга
              </h3>
              <ul className="space-y-5">
                {comparisonTraditional.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-[#6B6485] border-b border-[#EBE7F4] pb-5 last:border-0"
                  >
                    <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#6B6485]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#2A1466] rounded-2xl p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E63995] rounded-full opacity-20 blur-3xl" />
              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FFD6E8] mb-6">
                  Talent AI · GraphRAG
                </div>
                <h3 className="text-2xl font-bold text-white mb-8">
                  Орчин үеийн систем
                </h3>
                <ul className="space-y-5">
                  {comparisonTalentAI.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 text-white border-b border-white/10 pb-5 last:border-0"
                    >
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 rounded-full bg-[#E63995] flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ DATA SOURCES — horizontal scroll carousel ============ */}
      <section className="bg-white py-28 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#E63995]" />
            <span className="text-[#E63995] text-xs font-semibold tracking-[0.2em] uppercase">
              Өгөгдлийн эх сурвалж
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#1A0F3E] tracking-tight leading-tight max-w-3xl">
            Баталгаажсан тестүүдийн нэгдсэн сан
          </h2>
        </div>

        <div className="relative">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex gap-5 whitespace-nowrap"
          >
            {[...dataSources, ...dataSources, ...dataSources].map(
              (source, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 bg-[#FAFAFC] border border-[#EBE7F4] rounded-2xl px-10 py-8 hover:bg-[#2A1466] hover:border-[#2A1466] transition-all group"
                >
                  <div className="text-xl font-bold text-[#1A0F3E] group-hover:text-white transition-colors">
                    {source}
                  </div>
                </div>
              )
            )}
          </motion.div>
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTABlock />
    </div>
  );
}
