import { useState } from 'react';
import { Search, Calendar, Clock, MapPin } from 'lucide-react';

export function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Бүгд');

  const categories = ['Бүгд', 'Блог пост', 'Founders', 'Hub', 'Talent Intelligence', 'Tech News'];

  const featuredArticle = {
    category: 'TALENT INTELLIGENCE',
    title: 'GraphRAG технологи ямар хэрэг вэ: HR мэргэжилтэнд зориулсан гарын авлага',
    excerpt: 'Knowledge Graph болон Retrieval-Augmented Generation хослуулж хэрхэн сэтгэл зүйн мэдлэгийг AI-д ойлгуулдаг талаар...',
    author: 'Д. Батболд',
    date: '2026-05-15',
    readTime: '8 мин унших',
    image: 'featured'
  };

  const articles = [
    {
      category: 'БЛОГ ПОСТ',
      title: 'Big Five Personality Test: Монгол хэлээр ойлгох',
      excerpt: 'Big Five нь хамгийн шинжлэх ухааны үндэслэлтэй хувь хүний онцлог үнэлгээний арга юм. Энэ нь таван үндсэн trait-г хэмждэг...',
      author: 'С. Оюунчимэг',
      date: '2026-05-12',
      readTime: '5 мин',
      location: 'Улаанбаатар'
    },
    {
      category: 'TECH NEWS',
      title: 'Central Test шинэ CliftonStrengths интеграци танилцуулав',
      excerpt: 'Central Test 2026 онд Gallup-ын CliftonStrengths-тэй албан ёсны интеграци хийлээ. Энэ нь...',
      author: 'Ж. Энхтуяа',
      date: '2026-05-10',
      readTime: '4 мин',
      location: 'Париж'
    },
    {
      category: 'FOUNDERS',
      title: 'Яагаад бид Talent AI бүтээсэн бэ?',
      excerpt: 'UMC-ийн гүйцэтгэх захирал Д. Батболдын хувьд AI болон HR-ын огтлолцлыг олж харсан түүхээ хуваалцлаа...',
      author: 'Д. Батболд',
      date: '2026-05-08',
      readTime: '10 мин',
      location: 'Улаанбаатар'
    },
    {
      category: 'HUB',
      title: 'MBTI vs Big Five: Аль нь илүү научно вэ?',
      excerpt: 'Хоёр тест хоёулаа алдартай ч шинжлэх ухааны үндэслэл өөр. Бид харьцуулж, тус бүрийг хэзээ ашиглах вэ гэдгийг...',
      author: 'С. Оюунчимэг',
      date: '2026-05-05',
      readTime: '7 мин',
      location: 'Улаанбаатар'
    },
    {
      category: 'TALENT INTELLIGENCE',
      title: 'Team composition optimization: Математик арга',
      excerpt: 'Сэтгэл зүйн профайлыг ашиглаж багийн найрлагыг яаж оновчлох вэ? Бид graph theory ашиглан...',
      author: 'Ж. Энхтуяа',
      date: '2026-05-01',
      readTime: '12 мин',
      location: 'Улаанбаатар'
    },
    {
      category: 'БЛОГ ПОСТ',
      title: 'Hallucination-аас зайлсхийх: AI HR зөвлөхийн стандарт',
      excerpt: 'AI HR зөвлөх систем хэрхэн баталгаажсан мэдлэгээр ажиллаж, hallucination-ийг арилгах вэ?',
      author: 'Д. Батболд',
      date: '2026-04-28',
      readTime: '6 мин',
      location: 'Улаанбаатар'
    }
  ];

  const filteredArticles =
    activeCategory === 'Бүгд'
      ? articles
      : articles.filter((a) => a.category === activeCategory.toUpperCase());

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-4 text-[#E63995]">
            <span>★</span>
            <span className="font-semibold text-xs tracking-[0.15em] uppercase">INSIGHTS</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#1A0F3E] mb-6 max-w-4xl">
            Сэтгэл зүйн тест, HR-ын талаарх ойлголтууд
          </h1>
          <p className="text-xl text-[#6B6485] max-w-3xl leading-relaxed">
            HR шилдэг туршлага, сэтгэл зүйн үнэлгээний шинжлэх ухаан, AI-г HR-д ашиглах талаарх ойлголтууд.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="bg-[#FAFAFC] py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-white rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 shadow-lg">
            <div className="lg:col-span-3 bg-[#E9E2FA] flex items-center justify-center p-12">
              <div className="text-center text-[#5B3FBC]">
                <div className="text-6xl font-bold mb-2">GraphRAG</div>
                <div className="text-xl">Featured Article</div>
              </div>
            </div>

            <div className="lg:col-span-2 p-8">
              <div className="inline-block bg-[#E63995] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                {featuredArticle.category}
              </div>
              <h2 className="text-2xl font-bold text-[#1A0F3E] mb-4">{featuredArticle.title}</h2>
              <p className="text-[#6B6485] mb-6 leading-relaxed">{featuredArticle.excerpt}</p>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#E9E2FA] flex items-center justify-center text-[#5B3FBC] font-bold">
                  Д
                </div>
                <div>
                  <div className="font-semibold text-[#1A0F3E]">{featuredArticle.author}</div>
                  <div className="text-sm text-[#6B6485] flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                    <span>·</span>
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </div>
                </div>
              </div>

              <a href="#" className="text-[#E63995] font-semibold hover:underline">
                Унших →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-white py-6 sticky top-20 z-40 border-b border-[#EBE7F4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B6485]" />
              <input
                type="text"
                placeholder="Хайх..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-[#EBE7F4] bg-[#FAFAFC] focus:outline-none focus:ring-2 focus:ring-[#E63995]"
              />
            </div>

            {/* Category chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    activeCategory === cat
                      ? 'bg-[#E63995] text-white'
                      : 'bg-[#FAFAFC] text-[#6B6485] hover:bg-[#E9E2FA]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE GRID */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EBE7F4] rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="bg-[#E9E2FA] aspect-video flex items-center justify-center relative">
                  <div className="text-4xl font-bold text-[#5B3FBC] opacity-20">IMG</div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#E63995] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-[#6B6485] mb-3">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                    <span>·</span>
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </div>

                  <h3 className="text-xl font-bold text-[#1A0F3E] mb-3 group-hover:text-[#E63995] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#6B6485] text-sm mb-4 leading-relaxed">{article.excerpt}</p>

                  <div className="flex items-center gap-2 text-sm text-[#6B6485]">
                    <div className="w-8 h-8 rounded-full bg-[#E9E2FA] flex items-center justify-center text-[#5B3FBC] font-bold text-xs">
                      {article.author.charAt(0)}
                    </div>
                    <span className="font-medium">{article.author}</span>
                    <span>·</span>
                    <MapPin className="w-4 h-4" />
                    <span>{article.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button className="w-10 h-10 rounded-full border border-[#EBE7F4] flex items-center justify-center hover:bg-[#E9E2FA] transition-colors">
              ‹
            </button>
            <span className="text-[#6B6485]">01 / 11</span>
            <button className="w-10 h-10 rounded-full border border-[#EBE7F4] flex items-center justify-center hover:bg-[#E9E2FA] transition-colors">
              ›
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#E9E2FA] py-24">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <div className="flex items-center gap-2 mb-4 justify-center text-[#5B3FBC]">
            <span>★</span>
            <span className="font-semibold text-xs tracking-[0.15em] uppercase">ШИНЭЭР АВЧ БАЙГААРАЙ</span>
          </div>
          <h2 className="text-4xl font-bold text-[#1A0F3E] mb-6">Шинэ нийтлэлүүдээс хэн ч хоцрохгүй</h2>

          <div className="max-w-xl mx-auto flex gap-4 mb-4">
            <input
              type="email"
              placeholder="Имэйл хаягаа оруулна уу"
              className="flex-1 px-6 py-4 rounded-full border border-[#EBE7F4] bg-white focus:outline-none focus:ring-2 focus:ring-[#E63995]"
            />
            <button className="bg-[#E63995] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2A1466] transition-colors whitespace-nowrap">
              Бүртгүүлэх →
            </button>
          </div>

          <p className="text-sm text-[#6B6485]">Долоо хоног тутамд 1 имэйл. Унсабскрайб 1 даралтаар.</p>
        </div>
      </section>
    </div>
  );
}
