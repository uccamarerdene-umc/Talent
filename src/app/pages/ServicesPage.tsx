import { useRef, useState } from "react";
import { motion, useInView, useScroll, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  Search,
  TrendingUp,
  Users,
  Briefcase,
  Target,
  Zap,
  Database,
  Network,
  Brain,
  RefreshCw,
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
  Shield,
  Microscope,
  Sparkles,
  Globe,
  Award,
  Heart,
  Clock,
  Languages,
  ChevronLeft,
  BarChart2,
  BookOpen,
  Building2,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface TestDetail {
  code: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  questions: string;
  duration: string;
  language: string;
  target: string;
  why: string;
  dimensions: { label: string; score: number }[];
  applications: { icon: React.ElementType; title: string; desc: string }[];
  factsheet?: string;
}

// ─── Animated stat ────────────────────────────────────────────────────────────
function AnimatedStat({
  value,
  suffix = "",
  label,
  prefix = "",
}: {
  value: string;
  suffix?: string;
  label: string;
  prefix?: string;
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
      <div className="text-5xl lg:text-6xl font-bold text-[#2A1466] tracking-tight mb-3">
        {prefix}{value}{suffix}
      </div>
      <div className="h-px w-12 bg-[#E63995] mb-3" />
      <div className="text-sm text-[#6B6485] leading-snug">{label}</div>
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px w-12 bg-[#E63995]" />
      <span className="text-[#E63995] text-xs font-semibold tracking-[0.2em] uppercase">
        {children}
      </span>
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#E63995] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

// ─── Dimension bar (measures chart) ───────────────────────────────────────────
function DimensionBar({ label, score }: { label: string; score: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const pct = (score / 10) * 100;
  const colors = [
    "#E63995",
    "#F97316",
    "#EAB308",
    "#22C55E",
    "#06B6D4",
  ];
  const colorIdx = Math.min(Math.floor(score / 2.5), 3);
  return (
    <div ref={ref} className="flex items-center gap-4">
      <span className="text-sm text-[#6B6485] w-48 text-right shrink-0">{label}</span>
      <div className="flex-1 h-3 rounded-full bg-[#EBE7F4] overflow-hidden relative">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, #E63995 0%, #7C3AED ${pct * 0.6}%, #06B6D4 100%)`,
            width: `${pct}%`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#7C3AED] shadow-sm"
          style={{ left: `calc(${pct}% - 8px)` }}
          initial={{ left: "-8px", opacity: 0 }}
          animate={isInView ? { left: `calc(${pct}% - 8px)`, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
      <span className="text-sm font-bold text-[#1A0F3E] w-6 shrink-0">{score}</span>
    </div>
  );
}

// ─── Test Detail Inline Section ───────────────────────────────────────────────
function TestDetailSection({
  test,
  onClose,
}: {
  test: TestDetail;
  onClose: () => void;
}) {
  return (
    <motion.div
      key={test.code}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="mt-8 rounded-3xl overflow-hidden border border-[#EBE7F4] bg-white"
    >
      {/* ── Hero ── */}
      <div className="relative bg-gradient-to-br from-[#2A1466] via-[#5B21B6] to-[#7C3AED] pt-20 pb-16 px-8 lg:px-16 overflow-hidden">
        {/* decorative circles */}
        <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 right-24 w-72 h-72 rounded-full bg-white/5 translate-y-1/2 pointer-events-none" />

        {/* Back button */}
        <button
          onClick={onClose}
          className="mb-8 flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          Буцах
        </button>

        <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/20 text-white/80 text-xs font-semibold tracking-[0.15em] uppercase backdrop-blur-sm bg-white/10">
          {test.tag}
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight mb-4">
          {test.code}
        </h1>
        <p className="text-xl text-white/70 max-w-xl font-light leading-relaxed mb-12">
          {test.description}
        </p>

        {/* stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { Icon: BarChart2, value: test.questions, label: "Асуулт" },
            { Icon: Clock, value: test.duration, label: "Минут" },
            { Icon: Languages, value: test.language, label: "" },
            { Icon: Users, value: test.target, label: "" },
          ].map(({ Icon, value, label }, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-5"
            >
              <Icon className="w-6 h-6 text-white/50 mb-4" />
              <div className="text-2xl font-bold text-white leading-tight mb-1">
                {value}
              </div>
              {label && (
                <div className="text-white/50 text-xs font-medium">{label}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Why choose ── */}
      <div className="px-8 lg:px-16 py-16 border-b border-[#EBE7F4]">
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A0F3E] mb-6 leading-tight">
            Яагаад{" "}
            <span className="text-[#7C3AED]">{test.code}</span>-г
            <span className="text-[#22C55E]"> сонгох</span>
            вэ?
          </h2>
          <p className="text-lg text-[#6B6485] leading-relaxed mb-8">
            {test.why}
          </p>
          {test.factsheet && (
            <a
              href={test.factsheet}
              className="inline-flex items-center gap-2 border-2 border-[#7C3AED] text-[#7C3AED] px-6 py-3 rounded-full font-semibold hover:bg-[#7C3AED] hover:text-white transition-all text-sm"
            >
              <BookOpen className="w-4 h-4" />
              Дэлгэрэнгүй материал татах
            </a>
          )}
        </div>
      </div>

      {/* ── Applications ── */}
      <div className="px-8 lg:px-16 py-16 bg-[#FAFAFC] border-b border-[#EBE7F4]">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1A0F3E] mb-4 leading-tight">
          <span className="text-[#7C3AED]">Хэрэглэх</span> чиглэлүүд
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {test.applications.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-[#EBE7F4] rounded-2xl p-8 hover:border-[#E63995] hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#EDE9FE] flex items-center justify-center mb-5 group-hover:bg-[#E63995]/10 transition-colors">
                <Icon className="w-7 h-7 text-[#7C3AED] group-hover:text-[#E63995] transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-[#1A0F3E] mb-2">{title}</h3>
              <p className="text-sm text-[#6B6485] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── What it measures ── */}
      <div className="px-8 lg:px-16 py-16">
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A0F3E] mb-3 leading-tight">
            <span className="text-[#7C3AED]">{test.code}</span> юу
            <span className="text-[#22C55E]"> хэмждэг</span> вэ?
          </h2>
          <p className="text-[#6B6485] text-lg">
            Дараах хэмжүүрүүдийг шинжилж, бодит тоо баримтаар дүрслэнэ.
          </p>
        </div>

        <div className="bg-[#FAFAFC] border border-[#EBE7F4] rounded-2xl p-8 max-w-3xl">
          <div className="flex items-center justify-between text-xs text-[#6B6485] font-medium mb-6 px-0">
            <span className="w-48 text-right">Хэмжүүр</span>
            <div className="flex-1 flex justify-between px-4">
              <span>0</span>
              <span>5</span>
              <span>10</span>
            </div>
          </div>
          <div className="space-y-5">
            {test.dimensions.map((dim, i) => (
              <DimensionBar key={i} label={dim.label} score={dim.score} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#chat"
            className="inline-flex items-center gap-2 bg-[#E63995] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2A1466] transition-all shadow-lg shadow-pink-500/20"
          >
            Talent AI-аар шинжлүүлэх
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#tests"
            className="inline-flex items-center gap-2 border border-[#EBE7F4] text-[#1A0F3E] px-8 py-4 rounded-full font-semibold hover:border-[#E63995] hover:text-[#E63995] transition-all"
          >
            Бусад тестүүд харах
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export function ServicesPage() {
  const [selectedTest, setSelectedTest] = useState<TestDetail | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  function handleSelectTest(test: TestDetail) {
    setSelectedTest(test);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function handleCloseTest() {
    setSelectedTest(null);
    document.getElementById("tests")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const centralTestPortfolio: TestDetail[] = [
    {
      code: "CTPI-R",
      title: "Менежерийн тест",
      description:
        "Менежерийн тест нь 19 үзүүлэлтээр бие хүний онцлог шинж, зан төлөв, хандлага, 9 бүлгийн 59 ур чадвар, удирдлагын чадамж, сэтгэлгээний ба ажлын хэв маягийг өргөн хүрээнд үнэлж тодорхойлно.",
      tag: "УДИРДЛАГА",
      image: "/23.png",
      questions: "160",
      duration: "35–45",
      language: "Олон хэлт",
      target: "Менежер, удирдах ажилтан",
      why: "CTPI-R нь удирдах ажилтны чадамжийг нарийвчлан тодорхойлж, менежментийн хэв маяг, өөрчлөлтийн удирдлага, шийдвэр гаргалтыг урьдчилан таамаглах боломж олгодог. Байгууллагын дотоод шилжилт хөдөлгөөн болон сонгон шалгаруулалтад тохиромжтой.",
      dimensions: [
        { label: "Удирдлагын эрч хүч", score: 8 },
        { label: "Шийдвэр гаргалт", score: 7 },
        { label: "Стратегийн сэтгэлгээ", score: 9 },
        { label: "Хүмүүсийг хөгжүүлэх", score: 6 },
        { label: "Өөрчлөлтийг удирдах", score: 8 },
        { label: "Үр дүнд чиглэсэн байдал", score: 7 },
      ],
      applications: [
        {
          icon: Search,
          title: "Сонгон шалгаруулалт",
          desc: "Удирдах ажилтанд тавигдах чадамжийн шаардлагад нийцэх эсэхийг урьдчилан тодорхойлно.",
        },
        {
          icon: TrendingUp,
          title: "Дотоод шилжилт",
          desc: "Байгууллагын дотор удирдах албан тушаалд дэвшүүлэх боломжтой ажилтныг илрүүлнэ.",
        },
        {
          icon: Users,
          title: "Хөгжлийн төлөвлөгөө",
          desc: "Удирдах чадамжийн цоорхойг тодорхойлж, зорилтот сургалт төлөвлөнө.",
        },
      ],
    },
    {
      code: "BIG FIVE",
      title: "Зан төлвийн тест",
      description:
        "Хувь хүний 5 үндсэн зан төлвийг (нээлттэй сэтгэлгээ, нягт нямбай байдал, нийтэч байдал, бусдыг ойлгох байдал, сэтгэл хөдлөлийн тэнцвэр) тодорхойлно.",
      tag: "ЗАН ТӨЛӨВ",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=1000&fit=crop",
      questions: "80",
      duration: "15–20",
      language: "Олон хэлт",
      target: "Бүх түвшний ажилтан",
      why: "Big Five нь дэлхий даяар хүлээн зөвшөөрөгдсөн зан чанарын тодорхойлолтын загвар дээр суурилдаг. Ажилтны харилцааны хэв маяг, ажлын орчинд дасан зохицох байдлыг урьдчилан таамаглах хамгийн найдвартай аргуудын нэг.",
      dimensions: [
        { label: "Нээлттэй сэтгэлгээ", score: 8 },
        { label: "Нягт нямбай байдал", score: 7 },
        { label: "Нийтэч байдал", score: 6 },
        { label: "Бусдыг ойлгох байдал", score: 9 },
        { label: "Сэтгэл хөдлөлийн тэнцвэр", score: 5 },
      ],
      applications: [
        {
          icon: Search,
          title: "Сонгон шалгаруулалт",
          desc: "Ажлын байрны шаардлагад нийцэх зан чанарын профайлыг тодорхойлно.",
        },
        {
          icon: Users,
          title: "Багийн уур амьсгал",
          desc: "Багийн гишүүдийн зан чанарын ялгааг ойлгож, хамтын ажиллагааг сайжруулна.",
        },
        {
          icon: Briefcase,
          title: "Карьер хөгжил",
          desc: "Хувь хүний зан чанарт тохирох карьерын чиглэлийг зөвлөнө.",
        },
      ],
    },
    {
      code: "EMOTION 2.1",
      title: "Сэтгэл хөдлөлийн оюун чадамжийн тест",
      description:
        "Daniel Goleman-ы онол дээр суурилан сэтгэл хөдлөл болон нийгмийн чадварын 15 хүчин зүйлийг хэмжиж, EQ-ийн нарийн зураглал өгнө.",
      tag: "EQ",
      image: "/20.png",
      questions: "100",
      duration: "20–25",
      language: "Олон хэлт",
      target: "Манлайлагч, HR мэргэжилтэн",
      why: "Сэтгэл хөдлөлийн оюун чадамж нь ажлын амжилт, удирдлагын үр нөлөөнд IQ-аас илүү нөлөөлдөг гэдгийг судалгаа баталсан. EMOTION 2.1 нь 15 бүрэлдэхүүн хэсгийг нарийвчлан хэмжиж, хөгжүүлэлтийн тодорхой чиглэл заана.",
      dimensions: [
        { label: "Өөрийгөө таних", score: 8 },
        { label: "Сэтгэл хөдлөлийг удирдах", score: 7 },
        { label: "Урам зориг", score: 9 },
        { label: "Эмпати", score: 8 },
        { label: "Нийгмийн ур чадвар", score: 6 },
        { label: "Стресс тэсвэрлэлт", score: 7 },
      ],
      applications: [
        {
          icon: Brain,
          title: "Удирдлагын хөгжил",
          desc: "Удирдагчдын сэтгэл хөдлөлийн чадамжийг нэмэгдүүлэх сургалтын суурь болно.",
        },
        {
          icon: Users,
          title: "Багийн харилцаа",
          desc: "Эмпати болон харилцааны ур чадварыг бэхжүүлж, хамтын ажиллагааг дэмжинэ.",
        },
        {
          icon: Zap,
          title: "Гүйцэтгэлийн удирдлага",
          desc: "Стрессийг удирдах, даралтан дор гүйцэтгэл хадгалах чадварыг хэмжинэ.",
        },
      ],
    },
    {
      code: "MOTIVATION+",
      title: "Сэдэлжүүлэгч хүчин зүйлийн тест",
      description:
        "Ажлын байранд гүйцэтгэл, оролцоонд чухал сэдэл өгөх 15 хүчин зүйлийг үнэлдэг. Сэдэл болон сэтгэл ханамжийн хоёр хувилбараар авна.",
      tag: "УРАМ ЗОРИГ",
      image: "/14.png",
      questions: "75",
      duration: "15–20",
      language: "Олон хэлт",
      target: "Бүх ажилтан",
      why: "Ажилтны сэдлийн хүчин зүйлсийг ойлгох нь тэднийг хадгалж, оролцоо, гүйцэтгэлийг нэмэгдүүлэх хамгийн чухал хэрэгсэл. MOTIVATION+ нь 15 ялгаатай сэдэлжүүлэгчийг тодорхойлж, тухайн хүнд тохирсон арга хэмжээ авах боломж олгодог.",
      dimensions: [
        { label: "Бие даасан байдал", score: 9 },
        { label: "Хөгжил дэвшил", score: 8 },
        { label: "Хамт олны харилцаа", score: 7 },
        { label: "Цалин урамшуулал", score: 6 },
        { label: "Утга учиртай байдал", score: 9 },
        { label: "Хүлээн зөвшөөрөгдөх", score: 7 },
      ],
      applications: [
        {
          icon: TrendingUp,
          title: "Ажилтны оролцоо",
          desc: "Хувь хүний сэдлийг ойлгож, тохирсон урамшууллын бодлого боловсруулна.",
        },
        {
          icon: Building2,
          title: "Байгууллагын соёл",
          desc: "Байгууллагын нийт сэдлийн зураглал хийж, ажлын орчинг сайжруулна.",
        },
        {
          icon: Briefcase,
          title: "Ажилтан хадгалалт",
          desc: "Ажлаасаа гарах эрсдэлтэй ажилтнуудыг эрт илрүүлж, арга хэмжээ авна.",
        },
      ],
    },
    {
      code: "VOCATION",
      title: "Карьерын чиг баримжааны тест",
      description:
        "Ажил мэргэжлийн сонирхол, карьерын чиг баримжаа, өөрт тохирох мэргэжлийн нийцлийг олоход тусалдаг тест.",
      tag: "ХУВИЙН СОНИРХОЛ",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=1000&fit=crop",
      questions: "90",
      duration: "20–25",
      language: "Олон хэлт",
      target: "Карьер эхлүүлэгчид, шилжигчид",
      why: "VOCATION нь Holland загварт суурилж, хувь хүний сонирхол болон ажил мэргэжлийн таарцыг хэмждэг. Карьерын зөвлөгөө, дотоод шилжилт болон дахин давтан сургалтад хамгийн тохиромжтой.",
      dimensions: [
        { label: "Реалист чиг баримжаа", score: 6 },
        { label: "Судалгааны чиг баримжаа", score: 8 },
        { label: "Бүтээлч чиг баримжаа", score: 9 },
        { label: "Нийгмийн чиг баримжаа", score: 7 },
        { label: "Аж ахуйн чиг баримжаа", score: 5 },
        { label: "Байгалийн чиг баримжаа", score: 6 },
      ],
      applications: [
        {
          icon: Target,
          title: "Карьер зөвлөгөө",
          desc: "Хувь хүнд тохирох мэргэжил, карьерын замыг тодорхойлно.",
        },
        {
          icon: RefreshCw,
          title: "Дотоод шилжилт",
          desc: "Байгууллагын дотор тохирох ажлын байр руу шилжүүлэхэд тусална.",
        },
        {
          icon: BookOpen,
          title: "Дахин сургалт",
          desc: "Шинэ мэргэжил эзэмшүүлэх сургалтын чиглэлийг зөвлөнө.",
        },
      ],
    },
    {
      code: "PROFESSIONAL PROFILE",
      title: "Ажилтны хандлага ур чадварын тест",
      description:
        "Ажлын орчинд зан төлөв болон сэдэлжүүлэлтэд нөлөөлдөг хувь хүний онцлогийг 14 эсрэгцсэн хэмжээсээр шинжилдэг хэрэгсэл.",
      tag: "АЖИЛТАН",
      image: "/21.png"
      questions: "112",
      duration: "12–15",
      language: "Олон хэлт",
      target: "Ажилчид болон боловсон хүчин",
      why: "Professional Profile нь хувь хүний ажлын орчинд илрэх зан үйл, сэдэлжүүлэлтийн хэв маягийг 14 биполяр хэмжүүрээр нарийн шинждэг. Сонгон шалгаруулалт болон хөгжлийн хоёуланд нь тохиромжтой.",
      dimensions: [
        { label: "Бие даасан байдал", score: 7 },
        { label: "Бүтэц, дэг журам", score: 8 },
        { label: "Гадагш чиглэсэн байдал", score: 6 },
        { label: "Хүлцэнгүй байдал", score: 9 },
        { label: "Инновацилаг байдал", score: 7 },
        { label: "Харилцааны хэв маяг", score: 8 },
      ],
      applications: [
        {
          icon: Search,
          title: "Сонгон шалгаруулалт",
          desc: "Ажлын байрны онцлогт нийцэх хандлага, ур чадварыг тодорхойлно.",
        },
        {
          icon: TrendingUp,
          title: "Хөгжлийн ярилцлага",
          desc: "Ажилтны хандлага, хөгжлийн хэрэгцээг тодорхойлсон бодит суурь өгнө.",
        },
        {
          icon: Users,
          title: "Багийн уялдаа",
          desc: "Багийн гишүүдийн ажлын хэв маяг болон харилцааны ялгааг ойлгоно.",
        },
      ],
    },
    {
      code: "ETIX",
      title: "Ажлын байрны ёс зүйн тест",
      description:
        "Ажлын байран дээрх ёс зүйн эрсдэл, сөрөг зан үйлийг урьдчилан үнэлж, байгууллагын соёлд нийцэх шударга байдлын түвшинг тогтооно.",
      tag: "ЁС ЗҮЙ",
      image:
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&h=1000&fit=crop",
      questions: "85",
      duration: "18–22",
      language: "Олон хэлт",
      target: "Дарга, мэргэжилтэн",
      why: "ETIX нь ёс зүйн асуудлыг урьдчилан таамаглах боломжийг олгодог цорын ганц тест. Байгууллагын ёс зүйн соёл, хариуцлагын механизм бэхжүүлэхэд чиглэсэн шийдвэрт бодит суурь болдог.",
      dimensions: [
        { label: "Ялгаварлан гадуурхалт", score: 3 },
        { label: "Мэдээлэл задруулах", score: 2 },
        { label: "Хэвийн бус зан үйл", score: 4 },
        { label: "Хамтран ажиллагсдтай харилцаа", score: 8 },
        { label: "Байгууллагын үнэт зүйлтэй нийцэл", score: 7 },
        { label: "Хариуцлага хүлээх хандлага", score: 9 },
      ],
      applications: [
        {
          icon: Shield,
          title: "Эрсдэлийн удирдлага",
          desc: "Ёс зүйн эрсдэлтэй ажилтнуудыг эрт илрүүлж, урьдчилан сэргийлнэ.",
        },
        {
          icon: Building2,
          title: "Байгууллагын соёл",
          desc: "Ёс зүйн соёлын одоогийн түвшинг хэмжиж, сайжруулах чиглэл тодорхойлно.",
        },
        {
          icon: Search,
          title: "Хариуцлагатай сонгон шалгаруулалт",
          desc: "Нийтийн итгэлийн ажил болон мэдрэмжтэй үүрэгт тохирох хүнийг сонгоно.",
        },
      ],
    },
    {
      code: "SALES PROFILE",
      title: "Борлуулалтын ур чадварын тест",
      description:
        "Борлуулалт, харилцааны салбарын ажилтнуудын амжилт гаргах нөөц бололцоог үнэлнэ. 12 гол борлуулалтын чадамжийг тодорхойлдог.",
      tag: "БОРЛУУЛАЛТ",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop",
      questions: "95",
      duration: "20–25",
      language: "Олон хэлт",
      target: "Борлуулалтын баг",
      why: "SALES PROFILE нь борлуулалтын амжилтанд нөлөөлдөг зан чанарын хүчин зүйлсийг нарийвчлан хэмждэг. Хэрэглэгчийг татах, хэлэлцээр хийх, харилцаа тогтоох чадвар бүрийг тусад нь үнэлж, хөгжлийн зорилтот чиглэлийг тогтооно.",
      dimensions: [
        { label: "Харилцааны ур чадвар", score: 9 },
        { label: "Хэлэлцээрийн чадвар", score: 8 },
        { label: "Хэрэглэгч чиглэсэн байдал", score: 9 },
        { label: "Урам зориг", score: 8 },
        { label: "Дасан зохицох байдал", score: 7 },
        { label: "Тэвчээр", score: 6 },
      ],
      applications: [
        {
          icon: Target,
          title: "Борлуулалтын сонгон шалгаруулалт",
          desc: "Борлуулалтын үр дүнтэй ажилтнуудыг илрүүлэх найдвартай хэрэгсэл.",
        },
        {
          icon: TrendingUp,
          title: "Гүйцэтгэлийн удирдлага",
          desc: "Борлуулалтын багийн чадамжийн цоорхойг тодорхойлж сургалт чиглүүлнэ.",
        },
        {
          icon: Zap,
          title: "Борлуулалтын стратеги",
          desc: "Борлуулалтын хэв маягийг ойлгож, аргачлалыг оновчтой болгоно.",
        },
      ],
    },
    {
      code: "REASONING SPECIAL",
      title: "Орон зай, шалтгаант холбоо хамаарлын тест",
      description:
        "Орон зайн төсөөлөл, техникийн сэтгэлгээ, логик дараалал болон нарийн өгөгдөлтэй ажиллах чадварыг хэмждэг.",
      tag: "ЛОГИК & ТЕХНИК",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=1000&fit=crop",
      questions: "60",
      duration: "30–35",
      language: "Олон хэлт",
      target: "Инженер, IT мэргэжилтэн",
      why: "Техникийн мэргэжлийн чиглэлд ажиллагчдын оюуны чадамжийг нарийн хэмжих зайлшгүй хэрэгсэл. Орон зайн сэтгэлгээ болон техникийн логик шинжилгээний ур чадварыг нэгэн зэрэг үнэлдэг.",
      dimensions: [
        { label: "Орон зайн дүрслэл", score: 9 },
        { label: "Техникийн логик", score: 8 },
        { label: "Дарааллын сэтгэлгээ", score: 8 },
        { label: "Нарийн мэдээлэл боловсруулах", score: 7 },
        { label: "Тооны хэв маяг таних", score: 9 },
      ],
      applications: [
        {
          icon: Search,
          title: "Техникийн сонгон шалгаруулалт",
          desc: "Инженер, IT, техникийн мэргэжлийн ур чадварыг урьдчилан хэмжинэ.",
        },
        {
          icon: Brain,
          title: "Оюуны чадамж хэмжих",
          desc: "Техникийн сэтгэлгээ болон шинжилгээний чадварыг нарийн тодорхойлно.",
        },
        {
          icon: TrendingUp,
          title: "Хөгжлийн боломж",
          desc: "Техникийн чиглэлд хөгжих боломжтой ажилтнуудыг илрүүлнэ.",
        },
      ],
    },
    {
      code: "REASONING R",
      title: "Шалтгаант холбоо хамаарлын тест",
      description:
        "Ажлын байран дээр хурдтай шийдвэр гаргах, шинэ мэдээллийг хүлээн авч боловсруулах, вербал болон тоон өгөгдөлд дүн шинжилгээ хийх ерөнхий оюуны чадамжийг цогцоор үнэлнэ.",
      tag: "ОЮУНЫ ЧАДАМЖ",
      image:
        "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&h=1000&fit=crop",
      questions: "55",
      duration: "25–30",
      language: "Олон хэлт",
      target: "Бүх үүргийн ажилтан",
      why: "Ерөнхий оюуны чадамж (GMA) нь ажлын гүйцэтгэлтэй хамгийн хүчтэй хамааралтай нэг хүчин зүйл. REASONING R нь вербал, тоон болон логик сэтгэлгээний гурвалсан хэмжилт хийж, нэгдсэн GMA оноо гаргана.",
      dimensions: [
        { label: "Вербал сэтгэлгээ", score: 7 },
        { label: "Тооны сэтгэлгээ", score: 8 },
        { label: "Хийсвэр логик", score: 9 },
        { label: "Мэдээлэл боловсруулах хурд", score: 7 },
        { label: "Ерөнхий оюун ухаан", score: 8 },
      ],
      applications: [
        {
          icon: Search,
          title: "Сонгон шалгаруулалт",
          desc: "Ямар ч үүрэгт шаардагдах оюуны суурь чадамжийг хэмжинэ.",
        },
        {
          icon: TrendingUp,
          title: "Удирдлагын потенциал",
          desc: "Ирээдүйн удирдагчдын оюуны нөөцийг урьдчилан тодорхойлно.",
        },
        {
          icon: Zap,
          title: "Хурдан шийдвэр гаргалт",
          desc: "Даралтан дор хурдан, оновчтой шийдвэр гаргах чадварыг хэмжинэ.",
        },
      ],
    },
    {
      code: "ENTREPRENEUR",
      title: "Бизнес эрхлэх ур чадварын тест",
      description:
        "Бизнес сэтгэлгээ, эрсдэл даах чадвар, инновацилаг байдал болон стратегийн алсын харааг үнэлнэ.",
      tag: "БИЗНЕС СЭТГЭЛГЭЭ",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop",
      questions: "70",
      duration: "15–20",
      language: "Олон хэлт",
      target: "Удирдагч, инноватор",
      why: "ENTREPRENEUR нь байгууллагын дотоод стартап сэтгэлгээтэй, санаачлагатай хүмүүсийг илрүүлэхэд тусалдаг. Шинэ бизнес нэгж байгуулах болон инновацийн соёлыг хөгжүүлэх стратегид ашиглагдана.",
      dimensions: [
        { label: "Бизнес нөөц тодорхойлох", score: 9 },
        { label: "Эрсдэл дааж хүлцэх", score: 8 },
        { label: "Инновацилаг сэтгэлгээ", score: 9 },
        { label: "Стратегийн алсын харааа", score: 8 },
        { label: "Хурдан шийдвэр гаргалт", score: 7 },
        { label: "Тэвчээр, тууштай байдал", score: 7 },
      ],
      applications: [
        {
          icon: Sparkles,
          title: "Инновацийн удирдлага",
          desc: "Байгууллагын дотроос шинийг санаачлагчдыг илрүүлж хөгжүүлнэ.",
        },
        {
          icon: Target,
          title: "Бизнес хөгжил",
          desc: "Шинэ бизнес нэгж байгуулах болон хөрөнгө оруулалтын шийдвэрт суурь болно.",
        },
        {
          icon: TrendingUp,
          title: "Карьер хөгжил",
          desc: "Бизнес сэтгэлгээтэй ажилтнуудад тохирох хөгжлийн замыг тодорхойлно.",
        },
      ],
    },
  ];

  const centralValues = [
    {
      icon: Microscope,
      title: "Шинжлэх ухаанаар баталгаажсан сэтгэл зүйн тест",
      description:
        "Олон жилийн судалгааны үр дүнд бий болсон APA, BPS болон ITC-ийн сэтгэл зүйн тестийн баталгаажуулалтын стандартыг мөрддөг.",
    },
    {
      icon: Sparkles,
      title: "Технологи болон инноваци",
      description:
        "Central Test-ийн тестүүд нь сэтгэл зүйн үнэлгээний стандарт, өгөгдлийн аюулгүй байдлыг хатуу мөрдөж, шинэлэг аргуудыг ашиглан бүтээгдсэн.",
    },
    {
      icon: Users,
      title: "Чанартай дэмжлэг",
      description:
        "Дэлхий дахинд хүлээн зөвшөөрөгдсөн чанартай үйлчилгээ үзүүлдэг. Хүний нөөцийн сорилтуудад тохирсон сургалт зөвлөгөөг санал болгодог.",
    },
    {
      icon: Heart,
      title: "Ёс зүйн үүрэг",
      description:
        "EcoVadis 2025-аар баталгаажсан найдвартай, хэвшмэл ойлголтоос ангид, бодит өгөгдөлд суурилсан шийдвэр гаргахад тусалдаг.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Сонгон шалгаруулалт",
      description:
        "Central Test-ийн олон улсын сэтгэл зүйн тест үнэлгээний үр дүн, дата өгөгдлийг GraphRAG AI-аар тайлбарлаж, ажил горилогчийн ажлын байранд нийцэх эсэхийг богино хугацаанд мэдэх боломжтой.",
      bullets: [
        "Ажил горилогчийн тест үнэлгээний үр дүн, тайлбар",
        "Ажлын байрны ур чадварын шаардлагатай харьцуулалт",
        "Дата үндэслэлтэй сонголт хийх боломжийг нэмэгдүүлнэ",
      ],
      icon: Search,
      image: "/10.png",
    },
    {
      number: "02",
      title: "Talent Management",
      description:
        "Ажилчдын сэтгэл зүйн тест үнэлгээний үр дүнд үндэслэн цаашдын хөгжлийн төлөвлөгөө, хүний нөөцийн бодлого төлөвлөлт хийх боломжтой.",
      bullets: [
        "Зан төлөв, хандлага, ур чадварын үзүүлэлт",
        "Байгууллагын хөгжлийн төлөвлөгөө",
        "Хөгжүүлэх шаардлагатай ур чадвар, чадамжийг тодорхойлж, байгууллагын зорилготой уялдсан хөгжлийн төлөвлөгөө боловсруулахад дэмжлэг үзүүлнэ.",
      ],
      icon: TrendingUp,
      image: "/2.jpg",
    },
    {
      number: "03",
      title: "Багийн уур амьсгал",
      description:
        "Багийн гишүүдийн сэтгэл зүйн тест үнэлгээний үр дүнд хамтын ажиллагааны асуудлыг урьдчилан таамаглаж сайжруулна.",
      bullets: [
        "Багийн гишүүдийн ур чадварын ялгаатай байдал, хөгжлийн хэрэгцээг тодорхойлон, хамтын гүйцэтгэлийг сайжруулах стратегийг төлөвлөх зөвлөмж өгнө.",
        "Зөрчилдөөний урьдчилсан таамаглал",
        "Харилцааны шинжилгээ хийх боломжийг нэмэгдүүлнэ",
      ],
      icon: Users,
      image: "/14.png",
    },
    {
      number: "04",
      title: "Сургалт хөгжил",
      description:
        "Сэтгэл зүйн тест үнэлгээний үр дүн, хувь хүний онцлогт тохирсон карьер хөгжлийн төлөвлөгөө, зөвлөмж өгнө.",
      bullets: [
        "Ажилтнуудын ур чадварыг хөгжүүлэх урт хугацааны хөгжлийн шийдлийг тодорхойлно.",
        "Ажилтнуудын хэрэгцээ, ур чадварын түвшинд тохирсон сургалт, хөгжлийн хөтөлбөрийг оновчтой төлөвлөх боломжийг нэмэгдүүлнэ.",
        "Хувь хүний карьер хөгжлийн төлөвлөгөө гаргахад дэмжлэг үзүүлнэ.",
      ],
      icon: Briefcase,
      image: "/7.jpg",
    },
  ];

  const pillars = [
    {
      number: "01",
      tag: "ӨГӨГДЛИЙН СУУРЬ",
      title: "Central Test өгөгдлийн суурь",
      description:
        "Зөвхөн баталгаажсан Central Test-ийн дата, баримт бичгийг эх сурвалж болгон ашигладаг.",
      icon: Database,
      image: "/13.png",
    },
    {
      number: "02",
      tag: "МЭДЛЭГИЙН СҮЛЖЭЭ",
      title: "Knowledge Graph",
      description:
        "Тест үнэлгээ, ажлын байр, зан үйлийн хоорондын харилцааг graph бүтцээр илэрхийлж, хариулт өгдөг.",
      icon: Network,
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=1000&fit=crop",
    },
    {
      number: "03",
      tag: "КОНТЕКСТ ОЙЛГОЛТ",
      title: "Context-aware retrieval",
      description:
        "Хайлтын цаад утга санаа, нөхцөл байдлыг харгалзан хамгийн оновчтой үр дүнг гаргаж ирэх технологи.",
      icon: Brain,
      image: "/15.png",
    },
    {
      number: "04",
      tag: "ТАСРАЛТГҮЙ СУРАЛЦАХ",
      title: "Continuous learning",
      description:
        "Дата өөрчлөлт автоматаар мэдлэгийн санд нэмэгдэж, систем үргэлж шинэчлэгдэнэ.",
      icon: RefreshCw,
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=1000&fit=crop",
    },
  ];

  const comparisonTraditional = [
    "Текстэд суурилсан хайлт (keyword matching)",
    "Контекстгүй, тусгаарлагдмал хариу",
    "Хуурамж мэдээлэл үүсгэх магадлал өндөр",
    "Shallow insight — бэлэн текстэд тулгуурласан хариулт",
  ];
  const comparisonTalentAI = [
    "Мэдлэгийн сүлжээ (knowledge graph)",
    "Уялдаа холбоо бүхий зөвлөмж",
    "Баталгаатай эх сурвалжтай, баримтжуулсан хариулт",
    "Гүнзгий аналитик",
  ];
  const advantages = [
    { letter: "A", title: "Баталгаажсан мэдлэг", desc: "Central Test-ийн дата өгөгдөл дээр суурилсан", icon: CheckCircle2 },
    { letter: "B", title: "Контекст ойлголт", desc: "GraphRAG технологи", icon: Target },
    { letter: "C", title: "Шийдвэр хурдасгах", desc: "Түргэн шуурхай хариулт", icon: Zap },
    { letter: "D", title: "Skill Mapping", desc: "Ур чадварын зураглал", icon: TrendingUp },
    { letter: "E", title: "Цаг хэмнэх", desc: "Хүний нөөцийн багийн ажлын цагийг 70% хэмнэнэ", icon: CheckCircle2 },
    { letter: "F", title: "24/7 боломжтой", desc: "Онлайн орчинд, хэзээ ч хаанаас ч хэрэглэх боломжтой", icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1A0F3E]">
      <ScrollProgress />

      {/* HERO */}
      <section className="relative bg-[#1A0F3E] pt-40 pb-32 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[50%] h-full bg-contain bg-right-top bg-no-repeat opacity-20 pointer-events-none mix-blend-lighten hidden lg:block"
          style={{ backgroundImage: `url('/RIGHT PEOPLE IN THE RIGHT GOALS AT THE RIGHT ROALS (1).png')` }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#E63995]" />
            <span className="text-[#FFD6E8] text-xs font-semibold tracking-[0.2em] uppercase">
              Central Test · Talent AI-ийн шинжлэх ухааны суурь
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl lg:text-[5rem] font-bold text-white tracking-tight leading-[1.04] max-w-5xl mb-10">
            CENTRAL TEST{" "}
            <span className="text-[#FFD6E8] block mt-2">Тохирох ажилд нь зөв хүнийг</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl lg:text-2xl text-white/70 max-w-3xl leading-relaxed font-light mb-12">
            "Central Test" нь ажилтны зан төлөв, хандлага, чадамж, ур чадвар, сэдэлжүүлэлт, сэтгэлгээ ба ажлын хэв маягийг шинжлэх ухаанд суурилсан сэтгэл зүйн тестээр хэмжих замаар тодорхойлж, байгууллагын хүний нөөцийн шийдвэр гаргалтыг бодит өгөгдөлд тулгуурлан дэмжих цогц шийдэл юм.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-wrap items-center gap-8">
            <a href="#chat" className="group inline-flex items-center gap-2 bg-[#E63995] text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#1A0F3E] transition-all duration-300 shadow-lg shadow-pink-500/30">
              Talent AI турших
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#tests" className="group inline-flex items-center gap-3 text-white border-b-2 border-[#E63995] pb-2 font-semibold hover:gap-5 transition-all">
              Тест өгөх
              <ArrowRight className="w-5 h-5 text-[#E63995] group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-24 border-b border-[#EBE7F4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16">
            <SectionLabel>Central Test тоогоор</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A0F3E] tracking-tight leading-tight max-w-3xl">
              Хүний нөөцийн удирдлагыг шинжлэх ухааны үндэслэлтэй, дата өгөгдөлд тулгуурлан явуулахад тусална.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <AnimatedStat value="11" label="Жилийн туршлага" />
            <AnimatedStat value="40" suffix="К+" label="Тест үнэлгээнд хамрагдагсад" />
            <AnimatedStat value="50" label="Харилцагч байгууллага" />
            <AnimatedStat value="96" suffix="%" label="Сэтгэл ханамж" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-24 border-b border-[#EBE7F4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <SectionLabel>Central Test тухай</SectionLabel>
            </div>
            <div className="lg:col-span-8">
              <p className="text-2xl lg:text-3xl text-[#1A0F3E] leading-snug font-light tracking-tight mb-10">
                Central Test бол{" "}
                <span className="font-semibold">хүний нөөцийн удирдлагыг шинжлэх ухааны үндэслэлтэй, датад тулгуурлан явуулахад тусалдаг</span>{" "}
                APA, BPS болон ITC-оос тогтоосон сэтгэл зүйн үнэлгээний баталгаажуулалтын стандартуудыг баримталдаг олон улсын систем юм.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: Shield, title: "ISO 27001", sub: "Мэдээллийн аюулгүй байдал" },
                  { icon: Globe, title: "GDPR", sub: "Хувь хүний мэдээллийн хамгаалалт" },
                  { icon: Award, title: "EcoVadis 2025", sub: "Ёс зүйн үнэлгээ" },
                ].map(({ icon: Icon, title, sub }) => (
                  <div key={title} className="flex items-center gap-3 bg-[#FAFAFC] border border-[#EBE7F4] rounded-xl p-4">
                    <Icon className="w-6 h-6 text-[#E63995] flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-[#1A0F3E]">{title}</div>
                      <div className="text-xs text-[#6B6485]">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEST PORTFOLIO ── */}
      <section id="tests" className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16">
            <SectionLabel>Тестүүд</SectionLabel>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="text-4xl lg:text-6xl font-bold text-[#1A0F3E] tracking-tight leading-tight max-w-3xl">
                Сэтгэл зүйн тест үнэлгээ
              </h2>
              <p className="text-[#6B6485] text-lg max-w-md leading-relaxed">
                Олон улсад баталгаажсан сэтгэл зүйн тестийн үр дүнд суурилсан шийдвэрээр тохирох ажилд нь зөв хүнийг сонгож, зөв хөгжүүлээрэй.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centralTestPortfolio.map((test, idx) => (
              <motion.div
                key={test.code}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.07 }}
                className="group cursor-pointer"
                onClick={() => handleSelectTest(test)}
              >
                <div className={`relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 ring-2 transition-all duration-300 ${selectedTest?.code === test.code ? "ring-[#E63995]" : "ring-transparent"}`}>
                  <img
                    src={test.image}
                    alt={test.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F3E] via-[#1A0F3E]/30 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <div className="text-2xl font-bold text-white tracking-tight">{test.code}</div>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-[#FFD6E8] text-[10px] font-semibold tracking-[0.15em] uppercase">
                      {test.tag}
                    </span>
                  </div>
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-[#E63995]/0 group-hover:bg-[#E63995]/10 transition-all flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#1A0F3E] text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2">
                      Дэлгэрэнгүй <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A0F3E] mb-3 group-hover:text-[#E63995] transition-colors leading-snug">
                  {test.title}
                </h3>
                <p className="text-[#6B6485] text-sm leading-relaxed line-clamp-3">
                  {test.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ── Inline Detail Section ── */}
          <div ref={detailRef}>
            <AnimatePresence mode="wait">
              {selectedTest && (
                <TestDetailSection
                  key={selectedTest.code}
                  test={selectedTest}
                  onClose={handleCloseTest}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#FAFAFC] py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16">
            <SectionLabel>Үндсэн зарчмууд</SectionLabel>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#1A0F3E] tracking-tight leading-tight max-w-3xl">
              Үнэт зүйл
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {centralValues.map((value, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="bg-white border border-[#EBE7F4] rounded-2xl p-10 hover:border-[#E63995] hover:shadow-xl transition-all group">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFD6E8] to-[#E63995]/30 flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                    <value.icon className="w-7 h-7 text-[#E63995]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold tracking-[0.15em] uppercase text-[#E63995] mb-2">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A0F3E] mb-3">{value.title}</h3>
                    <p className="text-[#6B6485] leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPOTLIGHT */}
      <section className="bg-[#2A1466] py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E63995] rounded-full opacity-15 blur-3xl" />
        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#E63995]" />
              <span className="text-[#FFD6E8] text-xs font-semibold tracking-[0.2em] uppercase">
                Talent AI x Central Test
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
              Central Test-ийн өгөгдөл дээр GraphRAG AI-ийг нэмж бид{" "}
              <span className="text-[#FFD6E8] italic">Монголын анхны хиймэл оюун ухаант TALENT AI зөвлөхийг</span>{" "}
              бүтээсэн.
            </h2>
            <p className="text-xl text-white/70 leading-relaxed font-light max-w-3xl">
              2015 оноос хойш Монгол хүмүүсийг Central Test-ийн сэтгэл зүйн тест үнэлгээнд хамруулсан, 40,000 дата, тест бүрийн Technical Manual-ыг GraphRAG технологияор баяжуулан, монгол хэлээр асуухад баталгаажсан хариулт өгдөг систем юм.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white pt-24">
        <div className="max-w-[1280px] mx-auto px-6 mb-16">
          <SectionLabel>Үйлчилгээ</SectionLabel>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#1A0F3E] tracking-tight leading-tight max-w-3xl">
            Talent AI үйлчилгээнүүд
          </h2>
        </div>
      </section>

      {services.map((service, idx) => (
        <section key={service.number} id={`service-${idx + 1}`} className={idx % 2 === 0 ? "bg-white py-20" : "bg-[#FAFAFC] py-20"}>
          <div className="max-w-[1280px] mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl lg:text-7xl font-bold text-[#E63995] tracking-tight">{service.number}</span>
                  <div className="w-12 h-12 rounded-full bg-[#FFD6E8] flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#E63995]" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-[#1A0F3E] mb-6 tracking-tight">{service.title}</h2>
                <p className="text-lg text-[#6B6485] mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-4 mb-8">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 border-b border-[#EBE7F4] pb-4 last:border-0">
                      <CheckCircle2 className="w-6 h-6 text-[#E63995] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1A0F3E]">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <a href="#chat" className="group inline-flex items-center gap-2 text-[#E63995] font-semibold hover:text-[#2A1466] transition-all">
                  <span>Анализ хийлгэх</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-2xl overflow-hidden aspect-square bg-[#E9E2FA]">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* GRAPHRAG PILLARS */}
      <section id="how" className="bg-white py-24 border-t border-[#EBE7F4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16">
            <SectionLabel>Технологи</SectionLabel>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#1A0F3E] tracking-tight leading-tight max-w-3xl">
              Talent AI-ийн дөрвөн багана
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div key={pillar.number} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5">
                  <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F3E] via-[#1A0F3E]/40 to-transparent" />
                  <div className="absolute top-5 left-5 text-5xl font-bold text-white/90">{pillar.number}</div>
                  <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <pillar.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-[#FFD6E8] text-[10px] font-semibold tracking-[0.15em] uppercase">{pillar.tag}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A0F3E] mb-3 group-hover:text-[#E63995] transition-colors leading-snug">{pillar.title}</h3>
                <p className="text-[#6B6485] text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-[#FAFAFC] py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16">
            <SectionLabel>Харьцуулалт</SectionLabel>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#1A0F3E] tracking-tight leading-tight max-w-3xl">
              Уламжлалт LLM vs Talent AI
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white border border-[#EBE7F4] rounded-2xl p-10">
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6B6485] mb-6">Уламжлалт LLM</div>
              <h3 className="text-2xl font-bold text-[#1A0F3E] mb-8">Хязгаарлагдмал арга</h3>
              <ul className="space-y-5">
                {comparisonTraditional.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-[#6B6485] border-b border-[#EBE7F4] pb-5 last:border-0">
                    <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#6B6485]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-[#2A1466] rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E63995] rounded-full opacity-20 blur-3xl" />
              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FFD6E8] mb-6">Talent AI · GraphRAG</div>
                <h3 className="text-2xl font-bold text-white mb-8">Орчин үеийн систем</h3>
                <ul className="space-y-5">
                  {comparisonTalentAI.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-white border-b border-white/10 pb-5 last:border-0">
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

      {/* ADVANTAGES */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16">
            <SectionLabel>Үндсэн давуу талууд</SectionLabel>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#1A0F3E] tracking-tight leading-tight max-w-2xl">
              Яагаад Talent AI-г сонгох вэ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map(({ letter, title, desc, icon: Icon }, idx) => (
              <motion.div key={letter} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="group bg-[#FAFAFC] border border-[#EBE7F4] rounded-2xl p-8 hover:border-[#E63995] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-5xl font-bold text-[#5B3FBC]">{letter}</div>
                  <div className="w-12 h-12 rounded-full bg-[#FFD6E8] flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <Icon className="w-6 h-6 text-[#E63995]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A0F3E] mb-2">{title}</h3>
                <p className="text-[#6B6485] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
