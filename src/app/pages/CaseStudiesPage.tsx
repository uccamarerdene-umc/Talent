import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView, useScroll } from 'motion/react';
import { CTABlock } from '../components/brand/CTABlock';
import { Building2, Code, Factory, GraduationCap, TrendingUp, ArrowRight, Sparkles, X, Calendar, User, BookOpen } from 'lucide-react';

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
  // Дэлгэрэнгүй харах нийтлэлийг хадгалах state
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  // ========================================================
  // 📝 ЭНДЭХ ТЕКСТҮҮДИЙГ ТА ЧӨЛӨӨТЭЙ EDIT ХИЙЖ БОЛНО
  // ========================================================
  const articles = [
    {
      id: "mongol-manager-identity",
      category: 'МЕНЕЖМЕНТ СУДАЛГАА',
      title: 'Монгол менежер гэж хэн бэ?',
      description: 'Монгол менежер бол өвөрмөц. Олон зууны нүүдэлчдийн соёлоос уламжилсан уян хатан байдал, тэвчээр, хамтын зорилгод чиглэх чадвар нь өнөөгийн дэлхийн бизнесийн орчинд маш үнэ цэнтэй давуу тал болж байна.',
      date: '2026.05.20',
      author: 'Talent AI Судалгааны Баг',
      icon: Building2,
      // Бүтэн дэлгэрэнгүй агуулга (Энд хүссэн хэмжээгээрээ урт текст бичиж болно)
      content: `
        Монгол менежерийн дүр төрх, зан үйлийн онцлогийг тодорхойлох нь өнөөгийн бизнесийн хөгжилд маш чухал нөлөөтэй. 
        Олон зууны турш уламжлагдаж ирсэн нүүдэлчин соёл нь орчин үеийн корпорацийн соёлтой хэрхэн уусэж байгааг энэхүү судалгаа харуулж байна.
        
        Үндсэн олдворуудаас дурдвал:
        1. Уян хатан чанар: Өөрчлөгдөж буй зах зээлийн орчинд маш хурдан дасан зохицож, шийдвэр гаргах чадвар өндөр.
        2. Стресс менежмент: Хүнд нөхцөл байдалд тэвчээртэй хандаж, гарцыг олж харахдаа гаргууд.
        3. Хамтын ажиллагаа: Багийн гишүүдийг нэгдсэн зорилго дор зангидах чадвар нь олон улсын дунджаас өвөрмөц онцлогтой байна.
        
        Цаашид бид менежерүүдийнхээ энэхүү давуу талыг хөгжүүлж, сул талыг нь системтэйгээр нөхөх шаардлагатай байна.
      `
    },
    {
      id: "executive-summary-2026",
      category: 'ҮЙЛ АЖИЛЛАГАА',
      title: '«EXECUTIVE SUMMIT 2026 – STEPPE MANAGER»',
      description: 'Багийн динамик шинжилгээгээр хамтын ажиллагааг сайжруулж, ажилчдын тогтвор суурьшилгүй байдлыг (turnover) 40%-иар бууруулсан кэйс судалгаа.',
      date: '2026.05.15',
      author: 'Бизнес Хөгжлийн Хэлтэс',
      icon: Code,
      content: `
        Executive Summit 2026 арга хэмжээний үеэр танилцуулсан "Steppe Manager" кэйс нь практик дээр хэрхэн хүний нөөцийн оновчлол хийснийг харуулсан.
        
        Компаниудын дунд тулгардаг хамгийн том асуудал болох ажилчдын тогтвор суурьшилгүй байдлыг (turnover) бууруулахын тулд багийн динамик шинжилгээг ашигласан юм. 
        Гишүүдийн зан төлөв, сэдэлжүүлэгч хүчин зүйлсийг Central Test-ийн аргачлалаар оношилсны үр дүнд удирдлагын хэв маягийг өөрчилж, үр дүнд нь turnover 40%-иар буурсан байна.
      `
    },
    {
      id: "manager-skills-gap",
      category: 'УР ЧАДВАРЫН ШИНЖИЛГЭЭ',
      title: 'Тал нутгийн менежер танд ямар чадвар дутаж байна вэ?',
      description: 'Монгол менежерүүдийн ур чадварын ерөнхий дундаж оноо 100-аас 55 оноо буюу хөгжих боломжтой түвшинд үнэлэгдсэн байна. Авьяасын менежментээр ажилчдын skill gap илрүүлж, зорилтот сургалт өгснөөр бүтээмж нэмэгдсэн үр дүн.',
      date: '2026.05.10',
      author: 'Сургалт Хөгжлийн Баг',
      icon: Factory,
      content: `
        Нийт хамрагдсан менежерүүдийн дунд хийсэн skill gap (ур чадварын зөрүү) шинжилгээгээр ерөнхий дундаж оноо 55 оноотой гарсан. Энэ нь цаашид хөгжих маш том орон зай байгааг илтгэж байна.
        
        Менежерүүдэд хамгийн их дутагдаж буй чадамжууд:
        - Стратеги төлөвлөлт болон урт хугацааны алсын хараа
        - Сэтгэл хөдлөлийн оюун ухаан (EQ) болон багийн харилцаа
        - Датанд суурилсан гүйцэтгэлийн үнэлгээ
        
        Эдгээр чиглэлээр тусгайлан боловсруулсан зорилтот сургалтуудыг зохион байгуулснаар байгууллагын дундаж бүтээмжийг богино хугацаанд өсгөх боломжтой байна.
      `
    }
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
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#FFD6E8] px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                <span>СУДАЛГАА БОЛОН НИЙТЛЭЛ</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
                Монгол менежерийн <span className="bg-gradient-to-r from-[#FFD6E8] to-[#E63995] bg-clip-text text-transparent italic">дүр төрх — 2026</span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                "Монгол менежерийн дүр төрх" судалгааны бодит датад тулгуурлан боловсруулсан мэргэжлийн нийтлэлүүд.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ARTICLES GRID ============ */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)} // Дарж нээх логик
                className="group relative bg-white border border-[#EBE7F4] rounded-3xl p-6 hover:border-[#E63995] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#E63995]/10 flex items-center justify-center group-hover:rotate-6 transition-transform">
                      <article.icon className="w-6 h-6 text-[#E63995]" />
                    </div>
                    <span className="text-xs font-medium text-[#6B6485] bg-[#FAFAFC] px-3 py-1 rounded-full">
                      {article.date}
                    </span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#E63995] mb-2">{article.category}</div>
                  <h3 className="text-xl font-bold text-[#1A0F3E] mb-3 group-hover:text-[#E63995] transition-colors leading-snug">{article.title}</h3>
                  <p className="text-[#6B6485] text-sm mb-6 leading-relaxed line-clamp-4">{article.description}</p>
                </div>
                <div className="border-t border-[#EBE7F4] pt-4 mt-auto">
                  <span className="inline-flex items-center gap-2 text-[#1A0F3E] group-hover:text-[#E63995] font-semibold text-sm group-hover:gap-3 transition-all">
                    Дэлгэрэнгүй унших <ArrowRight className="w-4 h-4 text-[#E63995]" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 🌟 ДЭЛГЭРЭНГҮЙ НИЙТЛЭЛ ХАРАХ ЦОНХ (MODAL) ============ */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Арын бүдгэрүүлсэн дэвсгэр */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-[#1A0F3E]/60 backdrop-blur-md"
            />

            {/* Нийтлэлийн үндсэн цонх */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
            >
              {/* Цонхны толгой хэсэг */}
              <div className="relative bg-[#1A0F3E] p-6 text-white">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="text-xs font-bold text-[#FFD6E8] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full inline-block mb-3">
                  {selectedArticle.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold pr-10 text-white leading-snug">
                  {selectedArticle.title}
                </h2>
                
                {/* Мета дата */}
                <div className="flex flex-wrap gap-4 text-xs text-white/60 mt-4 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {selectedArticle.date}</div>
                  <div className="flex items-center gap-1.5"><User className="w-4 h-4" /> {selectedArticle.author}</div>
                  <div className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> 3 мин унших</div>
                </div>
              </div>

              {/* Нийтлэлийн их бие (Скролл хийгддэг хэсэг) */}
              <div className="p-8 overflow-y-auto bg-white flex-1 text-base text-[#332F43] leading-relaxed whitespace-pre-line">
                <p className="font-medium text-lg text-[#1A0F3E] mb-4 italic">
                  "{selectedArticle.description}"
                </p>
                <hr className="border-[#EBE7F4] my-4" />
                {selectedArticle.content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CTABlock />
    </div>
  );
}
