// app/components/Footer.js
import Link from 'next/link';
import { Mail, MapPin, Clock, Coffee, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { href: '/research/pisa', label: 'PISA 분석' },
    { href: '/research/evidence-based', label: '증거기반평가' },
    { href: '/research/sna', label: '사회네트워크분석' },
    { href: '/ai', label: 'AI 연구' }
  ];
  
  const aiLinks = [
    { href: '/ai/chat', label: 'Claude 채팅' },
    { href: '/ai/insights', label: 'AI 인사이트' },
    { href: '/admin', label: '콘텐츠 생성' },
    { href: '/teaching', label: '수업' }
  ];

  return (
    <footer className="bg-slate-800 text-white section-padding mt-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          {/* 연구실 소개 */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-2xl">
                👨‍🎓
              </div>
              <div>
                <h3 className="text-xl font-bold">박교수의 연구실</h3>
                <p className="text-gray-300 text-sm">AI와 함께하는 교육연구</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              PISA 분석, 증거기반평가, 사회네트워크분석을 통해 교육의 미래를 탐구하며, 
              Claude AI와 함께 새로운 연구 방법론을 개척하고 있습니다.
            </p>
            
            <div className="flex items-center gap-2 text-blue-300 italic mb-4">
              <Coffee className="w-4 h-4" />
              <span>&ldquo;Every cup of coffee fuels another insight&rdquo;</span>
            </div>
            
            {/* 연락처 정보 */}
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>professor.park@university.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>교육관 302호, Seoul</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>상담시간: 화/목 14:00-16:00</span>
              </div>
            </div>
          </div>
          
          {/* 연구분야 링크 */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200 flex items-center gap-2">
              🔬 연구분야
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-300 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* AI & 기타 링크 */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200 flex items-center gap-2">
              🤖 AI & 더보기
            </h4>
            <ul className="space-y-2">
              {aiLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-purple-300 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* 소셜 링크 */}
            <div className="mt-6">
              <h5 className="font-medium mb-3 text-gray-200 text-sm">학술 프로필</h5>
              <div className="flex gap-3">
                <a 
                  href="https://scholar.google.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Google Scholar"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.researchgate.net/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  title="ResearchGate"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="https://orcid.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  title="ORCID"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* 하단 구분선 및 저작권 */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} 박교수의 연구실. Claude AI와 함께 만들어가는 교육연구의 미래
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Built with Next.js & Vercel • Powered by Claude AI
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                개인정보처리방침
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">
                이용약관
              </Link>
              <span>•</span>
              <Link href="/sitemap" className="hover:text-gray-300 transition-colors">
                사이트맵
              </Link>
            </div>
          </div>
          
          {/* 기술 스택 정보 */}
          <div className="mt-4 pt-4 border-t border-gray-700 text-center">
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Next.js 15
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Claude AI API
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Vercel
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}