import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView, useScroll } from 'motion/react';
import { CTABlock } from '../components/brand/CTABlock';
import { 
  Building2, Code, Factory, GraduationCap, TrendingUp, 
  ArrowRight, Sparkles, X, FileText, CheckCircle2, 
  ShoppingBag, Send 
} from 'lucide-react';

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
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#560591] via-[#2563EB] to-[#560591] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

interface Article {
  id: string;
  category: string;
  title: string;
  description: string;
  content: string;
  date: string;
  metric: string;
  metricLabel: string;
  icon: any;
}

export function CaseStudiesPage() {
  // --- Төлөвүүд (States) ---
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [purchaseSubmitted, setPurchaseSubmitted] = useState(false);

  // Хүсэлт авах формын дата
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  // Нийтлэлүүдийн дата (Кэйс судалгааг нийтлэл болгон зассан)
  const articles: Article[] = [
    {
      id: "mongol-manager-identity",
      category: 'СУДАЛГАА',
      title: 'Монгол менежер гэж хэн бэ?',
      description: 'Монгол менежер бол өвөрмөц. Олон зууны нүүдэлчдийн соёлоос уламжилсан уян хатан байдал, тэвчээр, хамтын зорилгод чиглэх чадвар нь өнөөгийн дэлхийн бизнесийн орчинд маш үнэ цэнтэй давуу тал болж байна.',
      content: 'Энэхүү судалгаагаар Монгол менежерүүдийн дасан зохицох болон шийдвэр гаргах үйл явцыг олон улсын Central Test — CTPI аргачлалаар нарийвчлан судалсан бөгөөд уян хатан байдал нь дэлхийн дунджаас 15%-иар илүү байгааг тогтоосон. Мөн хамт олныг удирдах, хямралын үед оновчтой шийдвэр гаргах тал дээр өндөр ур чадвартай болох нь харагдсан.',
      date: '2026.05.22',
      metric: '59',
      metricLabel: 'Ур чадвар',
      icon: Building2,
    },
    {
      id: "executive-summary-2026",
      category: 'ҮЙЛ АЖИЛЛАГАА',
      title: '«EXECUTIVE SUMMIT 2026 – STEPPE MANAGER»',
      description: 'Удирдлагуудын нэгдсэн уулзалт «Steppe Soul, Sustainable Goal» уриан дор амжилттай зохион байгуулагдлаа.',
      content: 'Эдийн засаг, хөгжлийн яам болон Монголын Үндэсний Худалдаа Аж Үйлдвэрийн Танхим (МҮХАҮТ)-тай хамтран зохион байгуулсан уг арга хэмжээнд Монгол Улсын тэргүүлэх 200 гаруй компанийн захирал, удирдах ажилтнууд нэгдэн оролцлоо.  «Юнайтед Менежмент Консалтинг» ХХК, «Сэтгэл Судлалын Үндэсний Төв» болон «Карьер Хөгжлийн Төв» байгууллагууд хамтран хэрэгжүүлсэн «Монгол Менежерийн Дүр Төрх» судалгааны үр дүнг олон нийтэд анх удаа танилцууллаа.',
      date: '2026.05.22',
      metric: '100%',
      metricLabel: 'Сэтгэл ханамж',
      icon: Code,
    },
    {
      id: "manager-skills-gap",
      category: 'УР ЧАДВАРЫН ШИНЖИЛГЭЭ',
      title: 'Тал нутгийн менежер танд ямар чадвар дутаж байна вэ?',
      description: 'Монгол менежерүүдийн ур чадварын ерөнхий дундаж оноо 100-аас 55 оноо буюу хөгжих боломжтой түвшинд үнэлэгдсэн байна. Авьяасын менежментээр ажилчдын skill gap илрүүлж, зорилтот сургалт өгснөөр бүтээмж нэмэгдсэн үр дүн.',
      content: 'Судалгааны үр дүнгээс харахад менежерүүдэд Стратеги төлөвлөлт болон Сэтгэл хөдлөлийн оюун ухаан (EQ) буюу стресс менежментийн ур чадварууд системтэйгээр хөгжүүлэх шаардлагатай байгаа нь ажиглагдсан. Энэхүү Skill Gap-ийг нөхөх зорилтот хөтөлбөрүүд хэрэгжиж эхэлсэн.',
      date: '2026.05.10',
      metric: '55',
      metricLabel: 'Дундаж Үнэлгээ',
      icon: Factory,
    },
    {
      id: "steppe-soul-summit",
      category: 'МОНГОЛ МЕНЕЖЕРИЙН ДҮР ТӨРХ СУДАЛГААНЫ ТАЙЛАН',
      title: '«STEPPE SOUL, SUSTAINABLE GOAL» STEPPE MANAGER',
      description: '«Монгол Менежерийн Дүр Төрх» судалгааны үр дүнг олон нийтэд анх удаа танилцуулагдлаа.',
      content: 'Тус судалгаа нь 5 жилийн хугацаанд (2020–2025), нийт 1,033 менежерийг хамруулан олон улсад хүлээн зөвшөөрөгдсөн «Central Test — CTPI» аргачлалаар: Менежерийн бие хүний онцлог шинж чанар (4 бүлэг, 19 үзүүлэлт) Сэтгэлгээний болон ажиллах хэв маяг 9 бүлгийн 59 зөөлөн ур чадвар 7 төрлийн менежерийн хэв маяг— зэргийг шинжлэх ухааны үндэслэлтэйгээр тодорхойлсон.Судалгааны үр дүнгээс хархад Монгол менежерүүдийн хувьд : Харилцаа сайтай ч хариуцлага сул (Бусдыг хөгжүүлэх хандлага 48% өндөр, гэвч хяналт тавих чадвар 58% сул) Хурдан шийдвэр гаргадаг ч систем сул (Шинийг турших 56% өндөр, гэвч дасан зохицох 62% сул) Үнэ цэн ярьдаг ч хэрэгжилт сул (Алсын хараа 40% өндөр, гэвч үйлдэлд чиглэсэн байдал 76% сул) байв. Энэ нь зөвхөн хувь хүний асуудал бус харин байгууллагын соёл, удирдлагын систем, хариуцлагын тогтолцоотой шууд холбогдох цогц асуудал болохыг харууллаа.',
      date: '2026.05.22',
      metric: '1033',
      metricLabel: 'Менежер',
      icon: GraduationCap,
    },
    {
      id: "sales-team-optimization",
      category: 'БАТАЛГААЖСАН ТОЙМ',
      title: 'Real Experience, Data Reflection',
      description: 'Дэлхийн түвшний удирдлагын чиг хандлага, шаардлагатай ур чадвар, менежерийн чадамжийн моделийг Монгол менежерийн бодит үзүүлэлттэй харьцуулан шинжиллээ.',
      content: 'Байгууллагуудад тулгарч буй менежментийн сорилтуудыг даван туулахад ямар хандлага, сэтгэлгээ, ур чадвар шаардлагатайг тодорхойлж, цаашид байгууллагын хөгжлийн бодлогыг зөв чиглүүлэхэд дэмжлэг үзүүлэх зорилгоор «Real Experience, Data Reflection» сэдэвт панелийн хэлэлцүүлэг өрнөлөө.Тус хэлэлцүүлэгт Монгол Улсын тэргүүлэх байгууллагуудын C-түвшний удирдлагууд оролцож, бодит туршлагаа судалгааны датанд тулгуурлан хэлэлцсэн: Эрдэнэт Үйлдвэр» ХХК-ийн Хүний нөөц, захиргааны хэлтсийн дарга О. Отгонбаяр  «ТЭСО Групп»-ийн Хүний нөөц, удирдлагын газрын захирал Б. Болормаа «Оюу Толгой» ХХК-ийн Бүрдүүлэлтийн мэргэжилтэн Ш. Амартүвшин «АПУ» ХК-ийн Agile өөрчлөлт, шинэчлэл эрхэлсэн захирал Ш. Дөлгөөн нар оролцсон.  Хэлэлцүүлгийн оролцогчид дэлхийн эдийн засгийн тодорхойгүй байдал, хиймэл оюун ухааны хувьсгал, талент ур чадварын хомсдол зэрэг хавсарсан сорилтуудыг Монгол менежерүүд бодит датанд тулгуурлан, хамтын манлайллаар даван туулах боломжтойг онцолж, орчин үеийн адармаатай нөхцөлд удирдагчид зөвхөн «мэдрэмж»-ээрээ бус, шинжлэх ухааны үндэслэлтэй мэдээлэлд тулгуурлан шийдвэр гаргах нь цаг үеийн зайлшгүй шаардлага болоод байгааг хамтран тэмдэглэв.',
      date: '2026.05.22',
      metric: '2x',
      metricLabel: 'Бүтээмжийн Өсөлт',
      icon: TrendingUp,
    },
  ];

  // Форм илгээх функц
  const handlePurchaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPurchaseSubmitted(true);
    setTimeout(() => {
      setIsPurchaseModalOpen(false);
      setPurchaseSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '' });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7]"> {/* Илүү цайвар Cream/Ivory арын дэвсгэр */}
      <ScrollProgress />

      {/* ============ HERO ============ */}
      <section className="relative bg-[#110A26] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-0 top-0 w-[600px] h-[600px] bg-[#560591] rounded-full opacity-30 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-1/3 top-1/2 w-[500px] h-[500px] bg-[#2563EB] rounded-full opacity-20 blur-3xl"
          />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#E9E2FA] px-4 py-2 rounded-full text-sm font-medium mb-8"
              >
                <Sparkles className="w-4 h-4 text-[#2563EB]" />
                <span>СУДАЛГАА БОЛОН НИЙТЛЭЛҮҮД</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]"
              >
                Монгол менежерийн{' '}
                <span className="bg-gradient-to-r from-[#E9E2FA] to-[#2563EB] bg-clip-text text-transparent italic">
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

            {/* Статистик карт */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="text-sm text-[#E9E2FA] uppercase tracking-widest mb-4">
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

      {/* ============ ARTICLE GRID (Жагсаалтыг шууд харуулна, Шүүлтүүрийг устгасан) ============ */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-10 flex items-center justify-between border-b border-[#EBE7F4] pb-5">
            <h2 className="text-2xl font-bold text-[#110A26]">Нийтлэгдсэн судалгаа, нийтлэлүүд</h2>
            <div className="text-sm text-[#6B6485]">
              Нийт <span className="font-bold text-[#560591]">{articles.length}</span> нийтлэл олдлоо
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-white border border-[#EBE7F4] rounded-3xl p-6 hover:border-[#560591] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#560591]/0 to-[#560591]/0 group-hover:from-[#560591]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <div className="relative flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E9E2FA] to-[#2563EB]/20 flex items-center justify-center group-hover:rotate-6 transition-transform">
                      <article.icon className="w-6 h-6 text-[#560591]" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#E9E2FA] text-[#560591]">
                      {article.date}
                    </span>
                  </div>

                  <div className="text-xs uppercase tracking-widest text-[#2563EB] font-bold mb-2">{article.category}</div>
                  <h3 className="text-lg font-bold text-[#110A26] mb-3 group-hover:text-[#560591] transition-colors leading-tight line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-[#6B6485] text-sm mb-6 leading-relaxed line-clamp-3 flex-1">
                    {article.description}
                  </p>

                  <div className="border-t border-[#EBE7F4] pt-4 mb-4 flex items-baseline gap-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#560591] to-[#2563EB] bg-clip-text text-transparent">
                      {article.metric}
                    </div>
                    <div className="text-xs text-[#6B6485]">{article.metricLabel}</div>
                  </div>

                  {/* Сонгосон нийтлэлийг унших модал нээх товчлуур */}
                  <button 
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-2 text-[#560591] font-semibold text-sm group-hover:gap-3 transition-all text-left"
                  >
                    Дэлгэрэнгүй унших <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED CASE — STEPPE MANAGER ============ */}
      <section className="bg-white py-32 border-t border-[#EBE7F4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4 text-[#560591]">
              <span className="font-semibold text-xs tracking-[0.15em] uppercase">ОНЦЛОХ СУДАЛГАА</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#110A26] tracking-tight">
              Үндсэн{' '}
              <span className="bg-gradient-to-r from-[#560591] to-[#2563EB] bg-clip-text text-transparent">
                тайлан
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-[#110A26] via-[#1E0F42] to-[#560591] rounded-3xl overflow-hidden p-12 lg:p-16"
          >
            <motion.div
              animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB] rounded-full opacity-20 blur-3xl"
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-semibold mb-6 uppercase tracking-widest">
                  Steppe Manager
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                  Монгол Менежерийн{' '}
                  <span className="bg-gradient-to-r from-[#E9E2FA] to-[#2563EB] bg-clip-text text-transparent italic">
                    дүр төрх
                  </span>
                </h2>

                <p className="text-white/70 mb-8 leading-relaxed text-lg">
                  Тус судалгаа нь 5 жилийн хугацаанд, нийт 1,033 менежерийг хамруулан олон улсад хүлээн зөвшөөрөгдсөн «Central Test — CTPI» аргачлалаар Менежерийн бие хүний онцлог шинж чанар, сэтгэлгээний болон ажиллах хэв маяг, 9 бүлгийн 59 зөөлөн ур чадварыг шинжлэх ухааны үндэслэлтэйгээр тодорхойлсон.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                    <div className="text-4xl font-bold bg-gradient-to-br from-white to-[#E9E2FA] bg-clip-text text-transparent mb-1">
                      <CountUp end={88} suffix="%" />
                    </div>
                    <div className="text-sm text-white/70">Төслийн менежер хэв шинж</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                    <div className="text-4xl font-bold bg-gradient-to-br from-white to-[#E9E2FA] bg-clip-text text-transparent mb-1">
                      <CountUp end={74} suffix="%" />
                    </div>
                    <div className="text-sm text-white/70">Идэвхжүүлэгч менежер хэв шинж</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      // Анхны нийтлэлийг модал дээр шууд нээх
                      setSelectedArticle(articles[0]);
                    }}
                    className="group inline-flex items-center gap-2 bg-white text-[#110A26] px-6 py-3.5 rounded-full font-semibold hover:bg-[#560591] hover:text-white transition-all duration-300 shadow-md"
                  >
                    <FileText className="w-5 h-5" />
                    Судалгаатай танилцах
                  </button>
                  
                  <button
                    onClick={() => setIsPurchaseModalOpen(true)}
                    className="group inline-flex items-center gap-2 bg-[#560591] text-white px-6 py-3.5 rounded-full font-semibold hover:bg-white hover:text-[#110A26] transition-all duration-300 shadow-lg shadow-purple-500/25"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Бүрэн тайлан худалдаж авах
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center">
                  <div className="text-7xl lg:text-8xl font-bold bg-gradient-to-br from-white to-[#E9E2FA] bg-clip-text text-transparent mb-3">
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

      {/* ============ 📑 МОДАЛ 1: НИЙТЛЭЛИЙН ДЭЛГЭРЭНГҮЙ ЦОНХ ============ */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-[#110A26]/60 backdrop-blur-md" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white w-full max-w-2xl rounded-3xl p-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto"
            >
              <button onClick={() => setSelectedArticle(null)} className="absolute top-6 right-6 text-[#6B6485] hover:text-[#110A26]">
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-2 text-[#2563EB] font-bold text-xs uppercase mb-3">
                <Sparkles className="w-4 h-4" /> {selectedArticle.category}
              </div>
              <h3 className="text-2xl font-bold text-[#110A26] mb-2">{selectedArticle.title}</h3>
              <div className="text-xs text-[#6B6485] mb-6">Нийтлэгдсэн огноо: {selectedArticle.date}</div>
              
              <div className="space-y-4 text-sm text-[#6B6485] leading-relaxed">
                <p className="text-base text-[#110A26] font-medium bg-[#FAFAFC] p-4 rounded-2xl border border-[#EBE7F4]">
                  {selectedArticle.description}
                </p>
                <div className="pt-2">
                  <h4 className="font-bold text-[#110A26] text-base mb-2">Дэлгэрэнгүй агуулга:</h4>
                  <p>{selectedArticle.content}</p>
                </div>

                <div className="mt-6 p-4 bg-[#E9E2FA]/30 rounded-2xl flex items-center gap-4">
                  <div className="text-3xl font-bold text-[#560591]">{selectedArticle.metric}</div>
                  <div className="text-xs text-[#110A26] font-semibold uppercase tracking-wider">{selectedArticle.metricLabel}</div>
                </div>
              </div>

              <div className="mt-8 border-t border-[#EBE7F4] pt-6 flex justify-between items-center">
                <span className="text-xs text-[#6B6485]">Central Test аргачлал дээр суурилсан</span>
                <button 
                  onClick={() => { setSelectedArticle(null); setIsPurchaseModalOpen(true); }} 
                  className="bg-[#560591] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#2563EB] transition-colors"
                >
                  Бүрэн тайланг захиалах
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ============ 🛍️ МОДАЛ 2: ХУДАНДАН АВАХ ХҮСЭЛТ ГАРГАХ ФОРМ ============ */}
      <AnimatePresence>
        {isPurchaseModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsPurchaseModalOpen(false)}
              className="fixed inset-0 bg-[#110A26]/60 backdrop-blur-md" 
            />
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }}
              className="relative bg-white w-full max-w-2xl rounded-3xl p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <button onClick={() => setIsPurchaseModalOpen(false)} className="absolute top-6 right-6 text-[#6B6485] hover:text-[#110A26] z-10">
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-12 h-12 bg-[#E9E2FA] rounded-2xl flex items-center justify-center mb-4 text-[#560591]">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#110A26] mb-2">Бүрэн тайлан захиалах</h3>
              <p className="text-sm text-[#6B6485] mb-6">Хүсэлтээ илгээснээр манай борлуулалтын менежер тантай эргэж холбогдон, үнийн санал болон дэлгэрэнгүй мэдээллийг хүргэх болно.</p>
              
              {/* Microsoft Forms iframe */}
              <iframe 
                src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=qAjvAQ5TyEqu0vCtaSs7uzGKxoA4v5BMgV3H_U8bi-tUNU1ZVVlBODgyRVdWOUROUFkwVTY5MFFaNi4u&embed=true"
                width="100%" 
                height="600"
                frameBorder="0"
                marginWidth={0}
                marginHeight={0}
                allowFullScreen
                className="border-0 rounded-xl w-full"
                title="Бүрэн тайлан захиалах"
              ></iframe>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA Block */}
      <CTABlock />
    </div>
  );
}
