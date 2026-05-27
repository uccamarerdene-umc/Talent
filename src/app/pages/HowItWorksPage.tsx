import { SectionHeader } from "../components/brand/SectionHeader";
import { CTABlock } from "../components/brand/CTABlock";
import {
  Database,
  Network,
  Brain,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

export function HowItWorksPage() {
  const pillars = [
    {
      number: "01",
      title: "Central Test өгөгдлийн суурь",
      description:
        "Тalent AI нь зөвхөн баталгаажсан Central Test-ийн дата өгөгдөл, баримт бичгүүдийг эх сурвалж болгон ашигладаг. Энэ нь hallucination буюу зохиомол хариултыг бүрэн арилгаж, зөвхөн шинжлэх ухааны үндэслэлтэй хариулт өгнө.",
      icon: Database,
    },
    {
      number: "02",
      title: "Knowledge Graph",
      description:
        "GraphRAG технологи нь зүгээр текст хайлт биш, харин сэтгэл зүйн тест үнэлгээний үр дүн, ажлын байр, зан үйлийн хоорондын харилцааг graph бүтцээр илэрхийлнэ. Энэ нь системд илүү гүнзгий контекст ойлголт өгдөг.",
      icon: Network,
    },
    {
      number: "03",
      title: "Context-aware retrieval",
      description:
        'Хэрэглэгчийн зөвхөн оруулсан ганц хоёр түлхүүр үгэнд баригдалгүй, тухайн хайлтын цаад утга санаа, нөхцөл байдал зэргийг харгалзан хамгийн оновчтой үр дүнг гаргаж ирэх технологи юм.',
      icon: Brain,
    },
    {
      number: "04",
      title: "Continuous learning",
      description:
        "Central Test-ийн өгөгдөл өөрчлөлтүүд автоматаар мэдлэгийн санд нэмэгдэж, систем үргэлж шинэчлэгддэг. Энэ нь хиймэл оюун ухаант зөвлөхийг үргэлж хамгийн сүүлийн үеийн байлгана.",
      icon: RefreshCw,
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

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="bg-[#2A1466] py-32 relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#5B3FBC] rounded-full opacity-30 blur-3xl" />
        <div className="absolute right-20 top-1/3 w-80 h-80 bg-[#E63995] rounded-full opacity-20 blur-3xl" />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-4 text-[#FFD6E8]">
            <span>★</span>
            <span className="font-semibold text-xs tracking-[0.15em] uppercase">
              ХЭРХЭН АЖИЛЛАДАГ
            </span>
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl">
            GraphRAG-ийн дөрвөн багана
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-2xl leading-relaxed">
            Хиймэл оюун ухаант систем хэрхэн ажиллаж, яагаад
            уламжлалт LLM-ээс илүү оновчтой хариулт өгдгийг
            тайлбарлана.
          </p>
          <a
            href="#video"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2A1466] transition-colors"
          >
            ▶ Talent AI турших
          </a>
        </div>
      </section>

      {/* TECH PILLARS */}
      {pillars.map((pillar, idx) => (
        <section
          key={pillar.number}
          className={
            idx % 2 === 0
              ? "bg-white py-24"
              : "bg-[#FAFAFC] py-24"
          }
        >
          <div className="max-w-[1280px] mx-auto px-6">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}
            >
              <div
                className={idx % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="text-6xl italic text-[#E63995] font-bold mb-4">
                  {pillar.number}
                </div>
                <h2 className="text-4xl font-bold text-[#1A0F3E] mb-6">
                  {pillar.title}
                </h2>
                <p className="text-lg text-[#6B6485] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div
                className={idx % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="bg-[#E9E2FA] rounded-xl p-12 flex items-center justify-center aspect-video">
                  <pillar.icon className="w-32 h-32 text-[#5B3FBC]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* COMPARISON */}
      <section className="bg-[#FAFAFC] py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrowText="ХАРЬЦУУЛАЛТ"
            title="Уламжлалт AI vs UMC Talent AI"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            {/* Traditional LLM */}
            <div className="bg-white border border-[#EBE7F4] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#6B6485] mb-6 text-center">
                Уламжлалт LLM
              </h3>
              <ul className="space-y-4">
                {comparisonTraditional.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-[#6B6485]"
                  >
                    <div className="w-2 h-2 bg-[#6B6485] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 justify-center">
              <ArrowRight className="w-12 h-12 text-[#E63995]" />
            </div>

            {/* Talent AI */}
            <div className="bg-[#2A1466] rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E63995] rounded-full opacity-20 blur-2xl" />
              <h3 className="text-2xl font-bold text-white mb-6 text-center relative">
                Talent AI GraphRAG
              </h3>
              <ul className="space-y-4 relative">
                {comparisonTalentAI.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-white"
                  >
                    <div className="w-2 h-2 bg-[#E63995] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-8 justify-center text-[#E63995]">
            <span>★</span>
            <span className="font-semibold text-xs tracking-[0.15em] uppercase">
              ӨГӨГДЛИЙН ЭХ СУРВАЛЖ
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            {[
              "Central Test",
              "Big Five-Зан төлөвийн тест",
              "CTPI Менежерийн тест",
              "PP-Ажилтны хандлага ур чадварын тест",
              "EQ-Сэтгэлийн хөдлөлөө удирдах оюуны чадамжийн тест",
              "VOCATIOAN-Ажил мэргэжил,карьерийн чиг баримжааг тодорхойлох тест",
            ].map((tech) => (
              <div
                key={tech}
                className="text-2xl font-bold text-[#1A0F3E]"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock />
    </div>
  );
}