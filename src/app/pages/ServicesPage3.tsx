import { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { TestimonialCarousel } from "../components/brand/TestimonialCarousel";
import { CTABlock } from "../components/brand/CTABlock";
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
} from "lucide-react";

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

export function ServicesPage() {
  const centralTestPortfolio = [
    {
      code: "CTPI-R",
      title: "Менежерийн тест",
      description: "Менежерийн тест нь 19 үзүүлэлтээр бие хүний онцлог шинж, зан төлөв, хандлага, 9 бүлгийн 59 ур чадвар, удирдлагын чадамж, сэтгэлгээний ба ажиллах хэв маяг зэргийг өргөн хүрээнд үнэлж тодорхойлно.",
      tag: "УДИРДЛАГА",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=1000&fit=crop",
    },
    {
      code: "BIG FIVE",
      title: "Зан төлвйийн тест",
      description: "Хувь хүний 5 үндсэн зан төлвийг (нээлттэй сэтгэлгээ уран сэтгэмж, нягт нямбай байдал, нийтэч эрч хүчтэй байдал, бусдыг ойлгох байдал, сэтгэл хөдлөлийн тэнцвэртэй байдал) тодорхойлно.",
      tag: "ЗАН ТӨЛӨВ",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=1000&fit=crop",
    },
    {
      code: "EMOTION 2.1",
      title: "Сэтгэл хөдлөлөө удирдах оюуны чадамжийн тест",
      description: "Daniel Goleman-ы онол дээр суурилан сэтгэл хөдлөл болон нийгмийн чадварын 15 хүчин зүйлийг хэмжиж, EQ-ийн нарийн зураглал өгнө.",
      tag: "EQ",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=1000&fit=crop",
    },
    {
      code: "MOTIVATION+",
      title: "Сэдэлжүүлэгч хүчин зүйлийг тодорхойлох тест",
      description: "Ажлын байранд гүйцэтгэл, оролцоонд чухал сэдэл өгөх 15 хүчин зүйлийг үнэлдэг. Тестийг хоёр хувилбараар авах боломжтой: 15 хүчин зүйлийг үнэлэх-Сэдэл, мөн үнэлэгдсэн хүчин зүйл тус бүрийн сэтгэл ханамжийн түвшинг илэрхийлдэг.",
      tag: "УРАМ ЗОРИГ",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop",
    },
    {
      code: "VOCATION",
      title: "Ажил мэргэжлийн сонирхол карьерын чиг баримжаа",
      description: "Ажил мэргэжлийн сонирхол, карьерын чиг баримжааг тодорхойлох тест нь ажил мэргэжлийн сонирхол, карьерын чиг баримжаа, өөрт тохирох мэргэжлийн нийцлийг олоход тусална.",
      tag: "ХУВИЙН СОНИРХОЛ",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=1000&fit=crop",
    },
    {
      code: "PROFESSIONAL PROFILE",
      title: "Ажилтны хандлага ур чадварын тест",
      description: "Ажилтны хандлага ур чадварын тест нь Central Test-ээс боловсруулсан сэтгэл зүйн тест бөгөөд ажлын орчинд зан төлөв болон сэдэлжүүлэлтэд нөлөөлдөг хувь хүний онцлогийг 14 эсрэгцсэн хэмжээсээр шинжилдэг хэрэгсэл юм.",
      tag: "АЖИЛТАН",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=1000&fit=crop",
    },
    {
      code: "ETIX",
      title: "Ёс зүй ба дагаж мөрдөх байдлын үнэлгээ",
      description: "Ажлын байран дээрх ёс зүйн эрсдэл, сөрөг зан үйл (хээл хахууль, мэдээлэл алдагдуулах, ялгаварлан гадуурхалт г.м)-ийг урьдчилан үнэлж, байгууллагын соёлд нийцэх шударга байдлын түвшинг тогтооно.",
      tag: "ЁС ЗҮЙ",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&h=1000&fit=crop",
    },
    {
      code: "SALES PROFILE",
      title: "Борлуулалтын ур чадвар, зан төлөвийн тест",
      description: "Борлуулалт, харилцааны салбарын ажилтнуудын амжилт гаргах нөөц бололцоог үнэлнэ. Хэрэглэгчийг татах, хэлэлцээр хийх, харилцаа тогтоох зэрэг борлуулалтын стратегийн 12 гол чадамжийг тодорхойлдог.",
      tag: "БОРЛУУЛАЛТ",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop",
    },
    {
      code: "REASONING SPECIAL",
      title: "Сэтгэн бодох ба танин мэдэхүйн тусгай сорил",
      description: "Орон зайн төсөөлөл, техникийн сэтгэлгээ, логик дараалал болон нарийн өгөгдөлтэй ажиллах чадварыг хэмждэг. Инженер, IT, болон нарийн мэргэжлийн техникийн үүрэг гүйцэтгэх чадамжийг үнэлэхэд тохиромжтой.",
      tag: "ЛОГИК & ТЕХНИК",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=1000&fit=crop",
    },
    {
      code: "REASONING R",
      title: "Оюуны ерөнхий чадамж, аналитик тест",
      description: "Ажлын байран дээр хурдтай шийдвэр гаргах, шинэ мэдээллийг хүлээн авч боловсруулах, вербал болон тоон өгөгдөлд дүн шинжилгээ хийх ерөнхий оюуны чадамж (GMA)-ийг цогцоор нь үнэлнэ.",
      tag: "ОЮУНЫ ЧАДАМЖ",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&h=1000&fit=crop",
    },
    {
      code: "ENTREPRENEUR",
      title: "Бизнес эрхлэх, санаачлах ур чадварын тест",
      description: "Бизнес сэтгэлгээ, эрсдэл даах чадвар, шинийг санаачлах инновацилаг байдал болон стратегийн алсын харааг үнэлнэ. Байгууллагын дотоод стартап удирдагчид болон төслийн удирдагчдыг тодорхойлоход ашиглана.",
      tag: "БИЗНЕС СЭТГЭЛГЭЭ",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop",
    },
  ];

  const centralValues = [
    {
      icon: Microscope,
      title: "Шинжлэх ухаанаар баталгаажсан сэтгэл зүйн тест",
      description: "Олон жилийн судалгааны үр дүнд бий болсон Америкийн сэтгэл судлалын холбоо APA, Британийн сэтгэл зүйн нийгэмлэг BPS болон Олон улсын сэтгэл зүйн тестийн комисс ITC-ээс тогтоосон сэтгэл зүйн тестийн баталгаажуулалтын стандартыг мөрддөг.",
    },
    {
      icon: Sparkles,
      title: "Технологи болон инноваци",
      description: "Central Test-ийн сэтгэл зүйн тестүүд нь сэтгэл зүйн үнэлгээний стандарт, өгөгдлийн аюулгүй байдлыг хатуу мөрдөж, шинэлэг орчин, орчин үеийн аргуудыг ашиглан бүтээгдсэн.",
    },
    {
      icon: Users,
      title: "Чанартай дэмжлэг",
      description: "Орчин үеийн шийдлүүдтэй хослуулан дэлхий дахинд хүлээн зөвшөөрөгдсөн чанартай үйлчилгээ үзүүлдэг. Мөн хүний нөөцийн сорилтуудад тохирсон, үйлчлүүлэгчдийн хэрэгцээнд нийцсэн сургалт зөвлөгөөг санал болгодог.",
    },
    {
      icon: Heart,
      title: "Ёс зүйн үүрэг",
      description: "EcoVadis 2025-аар баталгаажсан найдвартай, хэвшмэл ойлголтоос (Bias) ангид, бодит өгөгдөлд суурилсан шийдвэр гаргахад тусалдаг.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Сонгон шалгаруулалт",
      description: "Central Test-ийн олон улсын сэтгэл зүйн тест үнэлгээний үр дүн, дата өгөгдлийг GraphRAG AI-аар тайлбарлаж, ажил горилогчийн ажлын байранд нийцэх эсэхийг богино хугацаанд мэдэх боломжтой.",
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
      description: "Ажилчдын сэтгэл зүйн тест үнэлгээний үр дүнд үндэслэн цаашдын хөгжлийн төлөвлөгөө, хүний нөөцийн бодлого төлөвлөлт хийх боломжтой.",
      bullets: [
        "Зан төлөв, хандлага, ур чадварын үзүүлэлт",
        "Байгууллагын хөгжлийн төлөвлөгөө",
        "Ажилтнуудын хөгжүүлэх шаардлагатай ур чадвар, чадамжийг тодорхойлж, байгууллагын зорилготой уялдсан хөгжлийн төлөвлөгөө боловсруулахад дэмжлэг үзүүлнэ.",
      ],
      icon: TrendingUp,
      image: "/2.jpg", 
    },
    {
      number: "03",
      title: "Багийн уур амьсгал",
      description: "Багийн гишүүдийн сэтгэл зүйн тест үнэлгээний үр дүнд хамтын ажиллагааны асуудлыг урьдчилан таамаглаж сайжруулна.",
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
      description: "Сэтгэл зүйн тест үнэлгээний үр дүн, хувь хүний онцлогт тохирсон карьер хөгжлийн төлөвлөгөө, зөвлөмж өгнө.",
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
      description: "Зөвхөн баталгаажсан Central Test-ийн дата, баримт бичгийг эх сурвалж болгон ашигладаг. Зохиомол хариултыг бүрэн арилгана.",
      icon: Database,
      image: "/13.png",
    },
    {
      number: "02",
      tag: "МЭДЛЭГИЙН СҮЛЖЭЭ",
      title: "Knowledge Graph",
      description: "Тест үнэлгээ, ажлын байр, зан үйлийн хоорондын харилцааг graph бүтцээр илэрхийлж, хариулт өгдөг.",
      icon: Network,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=1000&fit=crop",
    },
    {
      number: "03",
      tag: "КОНТЕКСТ ОЙЛГОЛТ",
      title: "Context-aware retrieval",
      description: "Хайлтын цаад утга санаа, нөхцөл байдлыг харгалзан хамгийн оновчтой үр дүнг гаргаж ирэх технологи.",
      icon: Brain,
      image: "/15.png",
    },
    {
      number: "04",
      tag: "ТАСРАЛТГҮЙ СУРАЛЦАХ",
      title: "Continuous learning",
      description: "Дата өөрчлөлт автоматаар мэдлэгийн санд нэмэгдэж, систем үргэлж шинэчлэгдэнэ.",
      icon: RefreshCw,
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=1000&fit=crop",
    },
  ];

  const comparisonTraditional = [
    "Текстэд суурилсан хайлт (keyword matching)",
    "Контекстгүй, тусгаарлагдмал хариу",
    "Хуурамж мэдээлэл үүсгэх магадлал өндөр",
    "Shallow insight - бэлэн текстэд тулгуурласан хариулт",
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
            CENTRAL TEST {" "}
            <span className="text-[#FFD6E8] block mt-2">Тохирох ажилд нь зөв хүнийг</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl lg:text-2xl text-white/70 max-w-3xl leading-relaxed font-light mb-12">
            "Central Test" нь ажилтны зан төлөв, хандлага, чадамж, ур чадвар, сэдэлжүүлэлт, сэтгэлгээ ба ажлын хэв маягийг шинжлэх ухаанд суурилсан сэтгэл зүйн тестээр хэмжих замаар тодорхойлж, байгууллагын хүний нөөцийн сонгон шалгаруулалт, хөгжүүлэлт болон стратегийн шийдвэр гаргалтыг бодит өгөгдөлд тулгуурлан дэмжих цогц шийдэл юм.
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

      {/* CENTRAL TEST STATS */}
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

      {/* ABOUT CENTRAL TEST */}
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
                Америкийн сэтгэл судлалын холбоо (APA), Британийн сэтгэл зүйн нийгэмлэг (BPS) болон Олон улсын шалгалтын комисс (ITC)-оос тогтоосон сэтгэл зүйн үнэлгээний баталгаажуулалтын стандартуудыг баримталдаг, хувь хүний зан төлөв, хандлага, ур чадвар, чадамж, мэргэжлийн чиг баримжаа, сэдэлжүүлэгч хүчин зүйлсийг тодорхойлдог сэтгэл зүйн тест үнэлгээний олон улсын систем юм.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-[#FAFAFC] border border-[#EBE7F4] rounded-xl p-4">
                  <Shield className="w-6 h-6 text-[#E63995] flex-shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-[#1A0F3E]">ISO 27001</div>
                    <div className="text-xs text-[#6B6485]">Мэдээллийн аюулгүй байдал</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#FAFAFC] border border-[#EBE7F4] rounded-xl p-4">
                  <Globe className="w-6 h-6 text-[#E63995] flex-shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-[#1A0F3E]">GDPR</div>
                    <div className="text-xs text-[#6B6485]">Хувь хүний мэдээллийн хамгаалалт</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#FAFAFC] border border-[#EBE7F4] rounded-xl p-4">
                  <Award className="w-6 h-6 text-[#E63995] flex-shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-[#1A0F3E]">EcoVadis 2025</div>
                    <div className="text-xs text-[#6B6485]">Ёс зүйн үнэлгээ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEST PORTFOLIO */}
      <section id="tests" className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16">
            <SectionLabel>Тестүүд</SectionLabel>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="text-4xl lg:text-6xl font-bold text-[#1A0F3E] tracking-tight leading-tight max-w-3xl">
                Сэтгэл зүйн тест үнэлгээ
              </h2>
              <p className="text-[#6B6485] text-lg max-w-md leading-relaxed">
                Олон улсад баталгаажсан сэтгэл зүйн тестийн үр дүн, өгөгдөлд суурилсан шийдвэрээр тохирох ажилд нь зөв хүнийг зөв сонгож, зөв хөгжүүлээрэй.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centralTestPortfolio.map((test, idx) => (
              <motion.div key={test.code} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: idx * 0.08 }} className="group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5">
                  <img src={test.image} alt={test.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F3E] via-[#1A0F3E]/30 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <div className="text-2xl font-bold text-white tracking-tight">{test.code}</div>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-[#FFD6E8] text-[10px] font-semibold tracking-[0.15em] uppercase">
                      {test.tag}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A0F3E] mb-3 group-hover:text-[#E63995] transition-colors leading-snug">
                  {test.title}
                </h3>
                <p className="text-[#6B6485] text-sm leading-relaxed">
                  {test.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CENTRAL TEST VALUES */}
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
                    <h3 className="text-2xl font-bold text-[#1A0F3E] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-[#6B6485] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPOTLIGHT — Talent AI x Central Test */}
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
              2015 оноос хойш Монгол хүмүүсийг Central Test-ийн сэтгэл зүйн тест үнэлгээнд хамруулсан, 40,000 дата, тест бүрийн Technical Manual-ыг GraphRAG технологияор баяжуулан, монгол хэлээр асуухад баталгаажсан хариулт өгдөг сисмем юм.
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
                  <span className="text-6xl lg:text-7xl font-bold text-[#E63995] tracking-tight">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#FFD6E8] flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#E63995]" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-[#1A0F3E] mb-6 tracking-tight">
                  {service.title}
                </h2>
                <p className="text-lg text-[#6B6485] mb-8 leading-relaxed">
                  {service.description}
                </p>
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
                <p className="text-[#6B6485] text-sm leading-relaxed">
                  {pillar.description}
                </p>
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
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6B6485] mb-6">
                Уламжлалт LLM
              </div>
              <h3 className="text-2xl font-bold text-[#1A0F3E] mb-8">
                Хягзаарлагдмал арга
              </h3>
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
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FFD6E8] mb-6">
                  Talent AI · GraphRAG
                </div>
                <h3 className="text-2xl font-bold text-white mb-8">
                  Орчин үеийн систем
                </h3>
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
