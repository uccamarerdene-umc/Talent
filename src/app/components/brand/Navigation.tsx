import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { ChevronDown } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Central Test', path: '/services', hasMegaMenu: true },
    { label: 'Бидний тухай', path: '/about' },
    { label: 'Судалгаа', path: '/case-studies' },
    { label: 'Холбоо барих', path: '/contact' },
  ];

  // Mega menu: Central Test + Talent AI хоёр баганаар
  const megaCentralTest = [
    { title: 'Central Test тухай', desc: '11 жилийн сэтгэл зүйн тест үнэлгээний туршлага', anchor: '' },
    { title: 'Тестүүд', desc: 'CTPI-R, Big Five, EMOTION, MOTIVATION+', anchor: '#tests' },
    { title: 'Үндсэн зарчмууд', desc: 'Шинжлэх ухаан, технологи, ёс зүй', anchor: '#tests' },
  ];

  const megaTalentAI = [
    { title: 'Үйлчилгээ', desc: 'Хүний нөөцийн шийдэл', anchor: '#services' },
    { title: 'GraphRAG технологи', desc: 'Ажиллах зарчим', anchor: '#how' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span
              className={`text-xl font-bold tracking-wide transition-colors ${
                isScrolled || !isHomePage ? 'text-[#1A0F3E]' : 'text-white'
              }`}
            >
              TALENT AI
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.hasMegaMenu && setShowMegaMenu(true)}
                onMouseLeave={() => item.hasMegaMenu && setShowMegaMenu(false)}
              >
                <Link
                  to={item.path}
                  className={`text-base font-medium transition-colors flex items-center gap-1 ${
                    isActive(item.path)
                      ? 'text-[#E63995] border-b-2 border-[#E63995]'
                      : isScrolled || !isHomePage
                      ? 'text-[#1A0F3E] hover:text-[#E63995]'
                      : 'text-white hover:text-[#FFD6E8]'
                  }`}
                >
                  {item.label}
                  {item.hasMegaMenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Mega Menu — Central Test + Talent AI 2 баганаар */}
                {item.hasMegaMenu && showMegaMenu && (
                  <div className="absolute top-full left-0 mt-2 w-[820px] bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 gap-8">
                    {/* Central Test багана */}
                    <div>
                      <div className="text-xs font-semibold tracking-[0.15em] uppercase text-[#E63995] mb-4 pb-2 border-b border-[#EBE7F4]">
                        Central Test
                      </div>
                      <div className="space-y-1">
                        {megaCentralTest.map((s, idx) => (
                          <Link
                            key={idx}
                            to={`/services${s.anchor}`}
                            className="block p-3 rounded-lg hover:bg-[#FAFAFC] transition-colors group"
                          >
                            <h4 className="font-semibold text-[#1A0F3E] mb-0.5 group-hover:text-[#E63995]">
                              {s.title}
                            </h4>
                            <p className="text-sm text-[#6B6485]">{s.desc}</p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Talent AI багана */}
                    <div>
                      <div className="text-xs font-semibold tracking-[0.15em] uppercase text-[#E63995] mb-4 pb-2 border-b border-[#EBE7F4]">
                        Talent AI
                      </div>
                      <div className="space-y-1">
                        {megaTalentAI.map((s, idx) => (
                          <Link
                            key={idx}
                            to={`/services${s.anchor}`}
                            className="block p-3 rounded-lg hover:bg-[#FAFAFC] transition-colors group"
                          >
                            <h4 className="font-semibold text-[#1A0F3E] mb-0.5 group-hover:text-[#E63995]">
                              {s.title}
                            </h4>
                            <p className="text-sm text-[#6B6485]">{s.desc}</p>
                          </Link>
                        ))}
                      </div>
                      <Link
                        to="/services#chat"
                        className="mt-4 inline-flex items-center gap-2 text-[#E63995] font-semibold text-sm hover:gap-3 transition-all"
                      >
                        ТALENT AI ашиглах →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <a
              href="#chat"
              className="bg-[#E63995] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2A1466] transition-colors flex items-center gap-2"
            >
              ТALENT AI ашиглах
              <span>→</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${isScrolled || !isHomePage ? 'text-[#1A0F3E]' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#EBE7F4] py-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-3 text-[#1A0F3E] hover:bg-[#FAFAFC]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#chat"
              className="block mx-4 mt-4 bg-[#E63995] text-white text-center px-8 py-3 rounded-full font-semibold"
            >
              TALENT AI ашиглах →
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
