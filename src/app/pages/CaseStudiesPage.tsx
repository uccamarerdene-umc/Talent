import { useState } from 'react';
import { CTABlock } from '../components/brand/CTABlock';
import { Building2, Code, Factory, GraduationCap, TrendingUp } from 'lucide-react';

export function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('Идэвхтэй кейс');
  const [industryFilter, setIndustryFilter] = useState('Бүгд');

  const caseStudies = [
    {
      industry: 'Банк',
      status: 'ИДЭВХТЭЙ КЕЙС',
      title: "Монгол менежер гэж хэн бэ?",
      description: "Монгол менежер бол өвөрмөц. Олон зууны нүүдэлчдийн соёлоос уламжилсан уян хатан байдал, тэвчээр, хамтын зорилгод чиглэх чадвар нь өнөөгийн дэлхийн бизнесийн орчинд маш үнэ цэнтэй давуу тал болж байна. ",
      metric: "85% илүү оновчтой хөлслөлт",
      icon: Building2
    },
    {
      industry: 'Дижитал',
      status: 'ДУУССАН КЕЙС',
      title: "«EXECUTIVE SUMMIT 2026 – STEPPE MANAGER» ",
      description: "Багийн динамик шинжилгээгээр хамтын ажиллагааг сайжруулж, turnover 40%-иар бууруулсан.",
      metric: "40% бага turnover",
      icon: Code
    },
    {
      industry: 'Үйлдвэрлэл',
      status: 'ИДЭВХТЭЙ КЕЙС',
      title: "Тал нутгийн менежер танд ямар чадвар дутаж байна вэ?",
      description: "Монгол менежерүүдийн ур чадварын ерөнхий дундаж оноо 100-аас 55 оноо буюу хөгжих боломжтой түвшинд үнэлэгдсэн байна. Нийт оролцогчдын дийлэнх буюу 69 хувь нь дунд түвшинд, 28.6 хувь нь өндөр түвшинд, харин ердөө 2.4 хувь нь ур чадвараа нэн даруй хөгжүүлэх шаардлагатай сул түвшинд багтжээ. Энэхүү үзүүлэлт нь менежерүүдэд өсөж дэвжих нөөц бололцоо хангалттай байгаа ч тогтвортой өндөр гүйцэтгэл үзүүлэхэд хараахан бэлэн биш байгааг харуулж байна.яасын менежментээр ажилчдын skill gap илрүүлж, зорилтот сургалт өгснөөр бүтээмж 30% нэмэгдсэн.",
      metric: "30% өссөн бүтээмж",
      icon: Factory
    },
    {
      industry: 'Боловсрол',
      status: 'ИДЭВХТЭЙ КЕЙС',
      title: "EXECUTIVE SUMMIT 2026 – STEPPE MANAGER»",
      description: "EXECUTIVE SUMMIT 2026 — STEPPE MANAGER» Удирдлагуудын нэгдсэн уулзалт «STEPPE SOUL, SUSTAINABLE GOAL» уриан доор амжилттай зохион байгуулагдлаа. Монгол Улсын Ерөнхий сайд Н. Учралын дэмжлэгээр, Эдийн засаг, хөгжлийн яам болон Монголын Үндэсний Худалдаа Аж Үйлдвэрийн Танхим (МҮХАҮТ)-тай хамтран зохион байгуулсан тус арга хэмжээнд Монгол Улсын тэргүүлэх компаниудын 200 гаруй захирал, удирдах ажилтан нэгдэн оролцлоо.",
      metric: "6 сар хэмнэсэн",
      icon: GraduationCap
    },
    {
      industry: 'Банк',
      status: 'ДУУССАН КЕЙС',
      title: "Зээлийн салбар",
      description: "Борлуулалтын багийн найрлагыг оновчлож, багийн бүтээмжийг 2 дахин нэмэгдүүлсэн.",
      metric: "2x багийн бүтээмж",
      icon: TrendingUp
    }
  ];

  const industries = ['Бүгд', 'Банк', 'Дижитал', 'Үйлдвэрлэл', 'Боловсрол'];

  const filteredCases = caseStudies.filter(
    (cs) =>
      (activeFilter === 'Идэвхтэй кейс' ? cs.status === 'ИДЭВХТЭЙ КЕЙС' : cs.status === 'ДУУССАН КЕЙС') &&
      (industryFilter === 'Бүгд' || cs.industry === industryFilter)
  );

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-4 text-[#E63995]">
            
            <span className="font-semibold text-xs tracking-[0.15em] uppercase">СУДАЛГАА</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#1A0F3E] mb-6 max-w-4xl">
            Монгол менежерийн дүр төрх-2026
          </h1>
          <p className="text-xl text-[#6B6485] max-w-3xl leading-relaxed">
            МОНГОЛ МЕНЕЖЕРИЙН ДҮР ТӨРХ” судалгааг 5 жилийн хугацаанд 1,033 менежерийн онцлог шинж чанар, сэтгэлгээний болон ажиллах хэв маяг, 9 бүлгийн 59 зөөлөн ур чадварыг олон улсын "Central Test - CTPI" аргачлалаар тодорхойлсон бодит датад тулгуурлан  боловсруулсан юм.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-[#FAFAFC] py-6 sticky top-20 z-40 border-b border-[#EBE7F4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap items-center gap-4">
            {/* Status Tabs */}
            <div className="flex gap-2">
              {['Идэвхтэй кейс', 'Дууссан кейс'].map((tab) => (
                null
              ))}
            </div>

            {/* Industry Filter */}
            
          </div>
        </div>
      </section>

      {/* CASE GRID */}
      <section className="bg-[#FAFAFC] py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((caseStudy, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EBE7F4] rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFD6E8] flex items-center justify-center">
                    <caseStudy.icon className="w-6 h-6 text-[#E63995]" />
                  </div>
                  <span className="bg-[#E9E2FA] text-[#5B3FBC] text-xs font-semibold px-3 py-1 rounded-full">
                    {caseStudy.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1A0F3E] mb-3 group-hover:text-[#E63995] transition-colors">
                  {caseStudy.title}
                </h3>
                <p className="text-[#6B6485] text-sm mb-4 leading-relaxed">{caseStudy.description}</p>

                <div className="border-t border-[#EBE7F4] pt-4 mb-4">
                  <div className="text-2xl font-bold text-[#E63995]">{caseStudy.metric}</div>
                </div>

                <a href="#" className="text-[#E63995] font-semibold text-sm hover:underline">
                  Read more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE */}
      <section className="bg-[#E9E2FA] py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-8 text-[#5B3FBC]">
            
            <span className="font-semibold text-xs tracking-[0.15em] uppercase">Судалгаа</span>
          </div>

          <div className="bg-white rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-12">
              <div className="w-32 h-12 bg-[#E9E2FA] rounded mb-6 flex items-center justify-center text-[#5B3FBC] font-bold text-center">
                Steppe Manager
              </div>

              <h2 className="text-3xl font-bold text-[#1A0F3E] mb-6">
                Монгол Менежерийн дүр төрх
              </h2>

              <p className="text-[#6B6485] mb-6 leading-relaxed">
                Тус судалгаа нь 5 жилийн хугацаанд (2020–2025), нийт 1,033 менежерийг хамруулан олон улсад хүлээн зөвшөөрөгдсөн «Central Test — CTPI» аргачлалаар: Менежерийн бие хүний онцлог шинж чанар (4 бүлэг, 19 үзүүлэлт) Сэтгэлгээний болон ажиллах хэв маяг 9 бүлгийн 59 зөөлөн ур чадвар 7 төрлийн менежерийн хэв маяг— зэргийг шинжлэх ухааны үндэслэлтэйгээр тодорхойлсон.
              </p>

              

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E63995]">88%</div>
                  <div className="text-sm text-[#6B6485]">Төслийн менежер хэв шинж</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E63995]">74%</div>
                  <div className="text-sm text-[#6B6485]">Идэвхжүүлэгч менежер хэв шинж</div>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#E63995] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2A1466] transition-colors"
              >
                Судалгааны тайлантай танилцах →
              </a>
            </div>

            <div className="lg:col-span-2 bg-[#2A1466] flex items-center justify-center p-12">
              <div className="text-center text-white">
                <div className="text-7xl font-bold mb-4">1033</div>
                <div className="text-xl">МОНГОЛ МЕНЕЖЕР</div>
                <div className="text-sm opacity-70 mt-2">5 жил</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock />
    </div>
  );
}
