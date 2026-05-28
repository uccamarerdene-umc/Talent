import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { CTABlock } from "../components/brand/CTABlock";
import {
  Database,
  Network,
  Brain,
  RefreshCw,
  ArrowRight,
  Check,
  X,
  Sparkles,
  Quote,
} from "lucide-react";

// Animated number that counts up when in view
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
      className="text-center"
    >
      <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-white to-[#FFD6E8] bg-clip-text text-transparent mb-2">
        {value}
        {suffix}
      </div>
      <div className="text-sm text-white/60 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

// Sticky progress indicator на хажуу талд
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E63995] via-[#5B3FBC] to-[#E63995] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export function HowItWorksPage() {
  const pillars = [
    {
      number: "01",
      title: "Central Test өгөгдлийн суурь",
      description:
        "Talent AI нь зөвхөн баталгаажсан Central Test-ийн дата өгөгдөл, баримт бичгүүдийг эх сурвалж болгон ашигладаг. Энэ нь hallucination буюу зохиомол хариултыг бүрэн арилгаж, зөвхөн шинжлэх ухааны үндэслэлтэй хариулт өгнө.",
      icon: Database,
      stat: "100%",
      statLabel: "баталгаажсан эх сурвалж",
    },
    {
      number: "02",
      title: "Knowledge Graph",
      description:
        "GraphRAG технологи нь зүгээр текст хайлт биш, харин сэтгэл зүйн тест үнэлгээний үр дүн, ажлын байр, зан үйлийн хоорондын харилцааг graph бүтцээр илэрхийлнэ. Энэ нь системд илүү гүнзгий контекст ойлголт өгдөг.",
      icon: Network,
      stat: "∞",
      statLabel: "мэдлэгийн зангилаа",
    },
    {
      number: "03",
      title: "Context-aware retrieval",
      description:
        "Хэрэглэгчийн зөвхөн оруулсан ганц хоёр түлхүүр үгэнд баригдалгүй, тухайн хайлтын цаад утга санаа, нөхцөл байдал зэргийг харгалзан хамгийн оновчтой үр дүнг гаргаж ирэх технологи юм.",
      icon: Brain,
      stat: "AI",
      statLabel: "контекст ойлгогч",
    },
    {
      number: "04",
      title: "Continuous learning",
      description:
        "Central Test-ийн өгөгдөл өөрчлөлтүүд автоматаар мэдлэгийн санд нэмэгдэж, систем үргэлж шинэчлэгддэг. Энэ нь хиймэл оюун ухаант зөвлөхийг үргэлж хамгийн сүүлийн үеийн байлгана.",
      icon: RefreshCw,
      stat: "24/7",
      statLabel: "тасралтгүй шинэчлэлт",
    },
  ];

  const comparisonTraditional = [
    "Текст, түлхүүр үгээр хайлт хийдэг (keyword matching)",
    "Контекстгүй хариу",
    "Зохиомол хариулт өгөх магадлал өндөр",
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
    "Big Five – Зан төлөвийн тест",
    "CTPI – Менежерийн тест",
    "PP – Ажилтны хандлага",
    "EQ – Сэтгэлийн хөдлөл",
    "VOCATION – Карьерийн чиг баримжаа",
  ];

  return (
    <div className="min-h-screen">
      <ScrollProgress />

      {/* ============ HERO — Editorial split layout ============ */}
      <section className="relative bg-[#1A0F3E] pt-32 pb-24 overflow-hidden">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-0 w-[600px] h-[600px] bg-[#5B3FBC] rounded-full opacity-40 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-1/3 top-1/2 w-[500px] h-[500px] bg-[#E63995] rounded-full opacity-25 blur-3xl"
          />
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
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
                <span>ХЭРХЭН АЖИЛЛАДАГ</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]"
              >
                TALENT AI{" "}
                <span className="bg-gradient-to-r from-[#FFD6E8] to-[#E63995] bg-clip-text text-transparent italic">
                  гэж юу вэ?
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-white/70 max-w-2xl leading-relaxed mb-10"
              >
                Central Test-ийн бүх мэдлэгийн сан, дата, тест тус бүрийн Technical Manual (Техник зааварчилгаа) зэрэгт тулгуурлан GraphRAG технологиор баяжуулан бүтээсэн систем юм. Энэ нь хэрэглэгчид хамгийн чанартай мэдээллийг олгох Хиймэл оюун ухаант зөвлөхийн үүрэг гүйцэтгэнэ. 
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#pillars"
                  className="group bg-[#E63995] text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#1A0F3E] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-pink-500/30"
                >
                  Central Test сэтгэл зүйн  тест үнэлгээнд хамрагдах
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#video"
                  className="group bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  ▶ Talent AI турших
                </a>
              </motion.div>
            </div>

            {/* Right side: Editorial-style stat card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="text-sm text-[#FFD6E8] uppercase tracking-widest mb-4">
                  Системийн товч үзүүлэлт
                </div>
                <div className="space-y-6">
                  {[
                    { num: "04", label: "Тулгуур багана" },
                    { num: "012+", label: "Тест мэдлэгийн эх сурвалж" },
                    { num: "0%", label: "Зохиомол хариулт өгөхгүй" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="flex items-baseline justify-between border-b border-white/10 pb-4 last:border-0"
                    >
                      <div className="text-5xl font-bold text-white">
                        {item.num}
                      </div>
                      <div className="text-sm text-white/60 text-right max-w-[60%]">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ STATS STRIP — iod-style metric bar ============ */}
      <section className="bg-[#2A1466] border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            <AnimatedStat value="100" suffix="%" label="Эх сурвалжтай" />
            <div className="py-12 px-8">
              <AnimatedStat value="12" label="Сэтгэл зүйн тест үнэлгээ" />
            </div>
            <div className="py-12 px-8">
              <AnimatedStat value="∞" label="Онлайн орчинд ашиглах боломж" />
            </div>
            <div className="py-12 px-8">
              <AnimatedStat value="24" suffix="/7" label="Шинэчлэлт" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4 PILLARS — Editorial alternating layout ============ */}
      <div id="pillars">
        {pillars.map((pillar, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section
              key={pillar.number}
              className={isEven ? "bg-white py-32" : "bg-[#FAFAFC] py-32"}
            >
              <div className="max-w-[1280px] mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  {/* Text column */}
                  <div
                    className={`lg:col-span-12 ${
                      !isEven ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-7xl lg:text-8xl italic font-bold bg-gradient-to-br from-[#E63995] to-[#5B3FBC] bg-clip-text text-transparent">
                        {pillar.number}
                      </div>
                      <div className="h-[2px] flex-1 bg-gradient-to-r from-[#E63995] to-transparent" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1A0F3E] mb-6 tracking-tight leading-tight">
                      {pillar.title}
                    </h2>
                    <p className="text-lg text-[#6B6485] leading-relaxed mb-8">
                      {pillar.description}
                    </p>

                    {/* Inline stat */}
                    <div className="inline-flex items-baseline gap-3 bg-[#FFD6E8]/40 px-6 py-4 rounded-2xl">
                      <span className="text-4xl font-bold text-[#E63995]">
                        {pillar.stat}
                      </span>
                      <span className="text-sm text-[#6B6485]">
                        {pillar.statLabel}
                      </span>
                    </div>
                  </div>

                  {/* Visual column */}
                  <div
                    className={`lg:col-span-6 ${
                      !isEven ? "lg:order-1" : ""
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#2A1466] via-[#5B3FBC] to-[#E63995] p-12 flex items-center justify-center group"
                    >
                      {/* Decorative glow */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFD6E8]/20 rounded-full blur-3xl" />

                      {/* Big icon */}
                      <motion.div
                        animate={{
                          rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative z-10"
                      >
                        <pillar.icon
                          className="w-48 h-48 lg:w-56 lg:h-56 text-white"
                          strokeWidth={1}
                        />
                      </motion.div>

                      {/* Floating tag */}
                      <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider">
                        PILLAR {pillar.number}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ============ PULL QUOTE — iod-style large statement ============ */}
      <section className="bg-[#1A0F3E] py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E63995] rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5B3FBC] rounded-full opacity-30 blur-3xl" />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Quote className="w-16 h-16 text-[#E63995] mx-auto mb-8 opacity-50" />
            <p className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-8">
              "Talent AI{" "}
              <span className="bg-gradient-to-r from-[#FFD6E8] to-[#E63995] bg-clip-text text-transparent italic">
                нь
              </span>{" "}
              зөвхөн{" "}
              <span className="bg-gradient-to-r from-[#FFD6E8] to-[#E63995] bg-clip-text text-transparent italic">
                баталгаажсан эх сурвалж Central Test-ийн дата өгөгдөл, мэдлэгийн сангаас
              </span>{" "}
              хариу өгдөг — зохиомол үг хэлдэггүйд оршино."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[2px] bg-[#E63995]" />
              <p className="text-sm text-white/60 uppercase tracking-widest">
                UMC Talent AI · 
              </p>
              <div className="w-12 h-[2px] bg-[#E63995]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ COMPARISON — Modern side-by-side cards ============ */}
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
              <span className="font-semibold text-xs tracking-[0.15em] uppercase">
                ХАРЬЦУУЛАЛТ
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A0F3E] mb-4 tracking-tight">
              Уламжлалт AI vs{" "}
              <span className="bg-gradient-to-r from-[#E63995] to-[#5B3FBC] bg-clip-text text-transparent">
                UMC Talent AI
              </span>
            </h2>
            <p className="text-lg text-[#6B6485] max-w-2xl mx-auto">
              Юу нь өөр, яагаад илүү найдвартай вэ?
            </p>
          </motion.div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Traditional */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#FAFAFC] border border-[#EBE7F4] rounded-3xl p-10 relative"
            >
              <div className="absolute -top-3 left-10 bg-white border border-[#EBE7F4] text-[#6B6485] text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded-full">
                Уламжлалт LLM
              </div>
              <h3 className="text-2xl font-bold text-[#6B6485] mb-8 mt-2">
                Хязгаарлагдмал арга
              </h3>
              <ul className="space-y-4">
                {comparisonTraditional.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-[#6B6485]"
                  >
                    <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#6B6485]" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Center arrow (desktop only) */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E63995] to-[#5B3FBC] shadow-2xl shadow-pink-500/30 flex items-center justify-center"
              >
                <ArrowRight className="w-8 h-8 text-white" />
              </motion.div>
            </div>

            {/* Talent AI */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-[#1A0F3E] via-[#2A1466] to-[#5B3FBC] rounded-3xl p-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E63995] rounded-full opacity-30 blur-3xl" />
              <div className="absolute -top-3 left-10 bg-[#E63995] text-white text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded-full">
                Talent AI · GraphRAG
              </div>
              <h3 className="relative text-2xl font-bold text-white mb-8 mt-2">
                Орчин үеийн систем
              </h3>
              <ul className="relative space-y-4">
                {comparisonTalentAI.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-white"
                  >
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5 rounded-full bg-[#E63995] flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ DATA SOURCES — Marquee scroll ============ */}
      <section className="bg-[#FAFAFC] py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 mb-12">
          <div className="flex items-center gap-2 mb-4 justify-center text-[#E63995]">
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold text-xs tracking-[0.15em] uppercase">
              ӨГӨГДЛИЙН ЭХ СУРВАЛЖ
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A0F3E] text-center tracking-tight">
            Баталгаажсан тестүүдийн{" "}
            <span className="bg-gradient-to-r from-[#E63995] to-[#5B3FBC] bg-clip-text text-transparent">
              нэгдсэн сан
            </span>
          </h2>
        </div>

        {/* Scrolling marquee */}
        <div className="relative">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[...dataSources, ...dataSources, ...dataSources].map(
              (source, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 bg-white border border-[#EBE7F4] rounded-2xl px-8 py-6 shadow-sm hover:shadow-md hover:border-[#E63995] transition-all"
                >
                  <div className="text-lg font-bold text-[#1A0F3E]">
                    {source}
                  </div>
                </div>
              )
            )}
          </motion.div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAFC] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAFC] to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTABlock />
    </div>
  );
}
