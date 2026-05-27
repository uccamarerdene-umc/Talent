import { Eyebrow } from './Eyebrow';
import { BrandButton } from './BrandButton';

export function CTABlock() {
  return (
    <section className="relative bg-[#2A1466] py-24 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -right-48 top-0 w-96 h-96 bg-[#5B3FBC] rounded-full opacity-30 blur-3xl" />
      <div className="absolute -left-48 bottom-0 w-96 h-96 bg-[#E63995] rounded-full opacity-20 blur-3xl" />

      <div className="relative max-w-[1280px] mx-auto px-6 text-center">
        <Eyebrow text="ХАМТРАН АЖИЛЛАЦГАЭЯ" className="justify-center text-[#FFD6E8]" />
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">Далд өгөгдөлөө олж нээгээрэй</h2>
        <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
          Talent AI-тай ашиглан багийн бүтээмжийг хиймэл оюун ухааны тусламжтай нэмэгдүүлж, хүний нөөцийн шийдвэрээ илүү ухаалаг болгоорой
        </p>
        <BrandButton variant="primary" href="#chat">
          Тalent AI-г турших →
        </BrandButton>
      </div>
    </section>
  );
}
