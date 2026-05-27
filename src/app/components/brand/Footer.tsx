import { Star } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[#1A0F3E] text-white pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Logo + Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 fill-[#E63995] text-[#E63995]" />
              <span className="text-xl font-bold tracking-wide">TALENT AI</span>
            </div>
            <p className="text-sm text-white/70 mb-6 italic">
              Хиймэл оюун ухаант сэтгэл зүйн зөвлөх
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" className="text-white/70 hover:text-[#E63995] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://facebook.com" className="text-white/70 hover:text-[#E63995] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Үйлчилгээ */}
          <div>
            <h4 className="font-semibold mb-4">Үйлчилгээ</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/services#service-1" className="hover:text-[#E63995] transition-colors">Сонгон шалгаруулалт</Link></li>
              <li><Link to="/services#service-2" className="hover:text-[#E63995] transition-colors">Авьяасын менежмент</Link></li>
              <li><Link to="/services#service-3" className="hover:text-[#E63995] transition-colors">Багийн динамик</Link></li>
              <li><Link to="/services#service-4" className="hover:text-[#E63995] transition-colors">Хөгжлийн замнал</Link></li>
            </ul>
          </div>

          {/* Col 3: Компани */}
          <div>
            <h4 className="font-semibold mb-4">Компани</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-[#E63995] transition-colors">Бидний тухай</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#E63995] transition-colors">Кейс судалгаа</Link></li>
              <li><Link to="/insights" className="hover:text-[#E63995] transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-[#E63995] transition-colors">Холбоо барих</Link></li>
            </ul>
          </div>

          {/* Col 4: Холбоо барих */}
          <div>
            <h4 className="font-semibold mb-4">Холбоо барих</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>📞 8804-7823</li>
              <li>📧 info@umctalent.mn</li>
              <li>🌐 umctalent-ai.duckdns.org</li>
              <li>
                <a href="https://facebook.com/umc" className="hover:text-[#E63995] transition-colors">
                  Facebook: United Consulting
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>&copy; 2026 United Consulting Management</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-[#E63995] transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-[#E63995] transition-colors">Terms</Link>
              <Link to="/cookies" className="hover:text-[#E63995] transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
