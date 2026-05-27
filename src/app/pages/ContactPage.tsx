import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    interest: '',
    message: '',
    agreement: false
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Talent AI Зөвлөх төлбөртэй юу?',
      answer: 'Тийм, Talent AI нь subscription-ийн загвар ашигладаг. Үнэ нь хэрэглэгчийн тоо, ашиглах үйлчилгээнээс хамаарна. Үнэгүй demo хүсвэл бидэнтэй холбогдоно уу.'
    },
    {
      question: 'Хэдэн хүн зэрэг ашиглах боломжтой вэ?',
      answer: 'Бидний платформ unlimited хэрэглэгч дэмждэг. HR баг бүхэлдээ нэг зэрэг ашиглаж болно. Үнэ нь active хэрэглэгчдийн тооноос хамаарна.'
    },
    {
      question: 'Бидний өгөгдөл нууцлагдах уу?',
      answer: 'Тийм. Бүх өгөгдөл encrypt хийгдсэн, GDPR болон Монголын хувийн мэдээллийн хуульд нийцнэ. Таны өгөгдөл зөвхөн танд харагдана, бид хэзээ ч гуравдагч талд дамжуулахгүй.'
    },
    {
      question: 'Central Test-ийн ямар тестүүдийг таниулдаг вэ?',
      answer: 'Бид Big Five, MBTI, DISC, 16PF, CliftonStrengths зэрэг Central Test-ийн бүх validated assessments-ийг AI-аар тайлбарладаг.'
    },
    {
      question: 'Дотроо суулгаж болох уу (on-premise)?',
      answer: 'Одоогоор бид cloud-only үйлчилгээ санал болгож байна. On-premise deployment хүсвэл бидэнтэй холбогдож, ярилцацгаая.'
    },
    {
      question: 'Англи хэлээр ажилладаг уу?',
      answer: 'Одоогоор Talent AI зөвхөн монгол хэлээр ажилладаг. 2026 оны 3-р улиралд англи хувилбар гарна.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="bg-[#2A1466] py-32 relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#5B3FBC] rounded-full opacity-30 blur-3xl" />
        <div className="absolute right-20 top-1/3 w-80 h-80 bg-[#E63995] rounded-full opacity-20 blur-3xl" />
        <div className="absolute right-32 top-20 w-3 h-3 bg-[#FFD23F] rounded-full" />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-4 text-[#FFD6E8]">
            <span>★</span>
            <span className="font-semibold text-xs tracking-[0.15em] uppercase">ХОЛБОО БАРИХ</span>
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl">
            Ярилцацгаая
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            Танай байгууллагад UMC Talent AI хэрхэн ашиглах талаар мэргэжилтнүүдтэй маань шууд холбогдоорой.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3 bg-[#FAFAFC] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#1A0F3E] mb-6">Бидэнтэй холбогдох</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1A0F3E] mb-2">Овог нэр</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#EBE7F4] bg-white focus:outline-none focus:ring-2 focus:ring-[#E63995]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A0F3E] mb-2">Имэйл хаяг</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#EBE7F4] bg-white focus:outline-none focus:ring-2 focus:ring-[#E63995]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A0F3E] mb-2">Утасны дугаар</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#EBE7F4] bg-white focus:outline-none focus:ring-2 focus:ring-[#E63995]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A0F3E] mb-2">Байгууллага</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#EBE7F4] bg-white focus:outline-none focus:ring-2 focus:ring-[#E63995]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1A0F3E] mb-2">Ажлын байр</label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#EBE7F4] bg-white focus:outline-none focus:ring-2 focus:ring-[#E63995]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A0F3E] mb-2">Сонирхож буй чиглэл</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#EBE7F4] bg-white focus:outline-none focus:ring-2 focus:ring-[#E63995]"
                    required
                  >
                    <option value="">Сонгох...</option>
                    <option value="recruitment">Сонгон шалгаруулалт</option>
                    <option value="team">Багийн шинжилгээ</option>
                    <option value="development">Хөгжлийн төлөвлөгөө</option>
                    <option value="other">Бусад</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A0F3E] mb-2">Дэлгэрэнгүй мессеж</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#EBE7F4] bg-white focus:outline-none focus:ring-2 focus:ring-[#E63995] resize-none"
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreement"
                    checked={formData.agreement}
                    onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-[#EBE7F4] text-[#E63995] focus:ring-[#E63995]"
                    required
                  />
                  <label htmlFor="agreement" className="text-sm text-[#6B6485]">
                    Нөхцөл болон нууцлалын бодлоготой танилцсан
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E63995] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2A1466] transition-colors"
                >
                  Илгээх →
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#EBE7F4] rounded-xl p-8 sticky top-24">
                <div className="flex items-center gap-2 mb-6 text-[#E63995]">
                  <span>★</span>
                  <span className="font-semibold text-xs tracking-[0.15em] uppercase">ШУУД ХОЛБОГДОХ</span>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#E63995] flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#1A0F3E] mb-1">Утас</div>
                      <a href="tel:88047823" className="text-[#6B6485] hover:text-[#E63995]">
                        8804-7823
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#E63995] flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#1A0F3E] mb-1">Имэйл</div>
                      <a href="mailto:info@umctalent.mn" className="text-[#6B6485] hover:text-[#E63995]">
                        info@umctalent.mn
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#E63995] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-[#1A0F3E] mb-1">Facebook</div>
                      <a href="#" className="text-[#6B6485] hover:text-[#E63995]">
                        United Consulting Management
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#E63995] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" opacity="0.2" />
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-[#1A0F3E] mb-1">Веб</div>
                      <a href="https://umctalent-ai.duckdns.org" className="text-[#6B6485] hover:text-[#E63995]">
                        umctalent-ai.duckdns.org
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#EBE7F4] pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="w-6 h-6 text-[#E63995] flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#1A0F3E] mb-1">Оффис</div>
                      <p className="text-[#6B6485]">
                        Улаанбаатар хот, СБД, 1-р хороо
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#E63995] flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#1A0F3E] mb-1">Ажиллах цаг</div>
                      <p className="text-[#6B6485]">Даваа–Баасан 09:00–18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-[#FAFAFC] py-0">
        <div className="bg-[#E9E2FA] h-96 flex items-center justify-center">
          <div className="text-center text-[#5B3FBC]">
            <MapPin className="w-16 h-16 mx-auto mb-4" />
            <div className="text-xl font-semibold">Google Maps Embed</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-4 text-[#E63995]">
            <span>★</span>
            <span className="font-semibold text-xs tracking-[0.15em] uppercase">ТҮГЭЭМЭЛ АСУУЛТУУД</span>
          </div>
          <h2 className="text-4xl font-bold text-[#1A0F3E] mb-12 text-center">Хариулт нь энд байгаа байх</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[#EBE7F4] rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#FAFAFC] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#1A0F3E]">{faq.question}</h3>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-6 h-6 text-[#E63995] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#E63995] flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-4">
                    <p className="text-[#6B6485] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINI CTA */}
      <section className="bg-[#E9E2FA] py-16">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-[#1A0F3E] mb-6">Шууд ярилцмаар байна уу?</h3>
          <a
            href="#chat"
            className="inline-flex items-center gap-2 bg-[#E63995] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2A1466] transition-colors"
          >
            Шинэ чат руу орох →
          </a>
        </div>
      </section>
    </div>
  );
}
