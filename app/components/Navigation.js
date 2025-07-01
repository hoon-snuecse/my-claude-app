'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  FlaskConical, 
  BookOpen, 
  Bot, 
  Coffee,
  Menu,
  X,
  ChevronDown,
  Search,
  Settings
} from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const menuItems = [
    { 
      href: '/', 
      label: '홈', 
      icon: Home,
      description: '프로필 & 소개'
    },
    { 
      href: '/research', 
      label: '연구분야', 
      icon: FlaskConical,
      description: 'PISA, 증거기반평가, SNA',
      submenu: [
        { 
          href: '/research/pisa', 
          label: 'PISA 분석',
          description: '국제학업성취도평가 데이터 분석',
          icon: '🌍'
        },
        { 
          href: '/research/evidence-based', 
          label: '증거기반평가',
          description: '데이터 기반 객관적 교육평가',
          icon: '📊'
        },
        { 
          href: '/research/sna', 
          label: '사회네트워크분석',
          description: '교육 커뮤니티 관계 패턴 분석',
          icon: '🕸️'
        }
      ]
    },
    { 
      href: '/teaching', 
      label: '수업', 
      icon: BookOpen,
      description: 'AI와 함께하는 교육'
    },
    { 
      href: '/ai', 
      label: 'AI', 
      icon: Bot,
      description: 'Claude AI 협업연구',
      submenu: [
        {
          href: '/ai/chat',
          label: 'Claude 채팅',
          description: '실시간 AI 대화',
          icon: '💬'
        },
        {
          href: '/ai/insights',
          label: 'AI 인사이트',
          description: 'AI와 함께 발견한 통찰',
          icon: '💡'
        },
        {
          href: '/admin',
          label: '콘텐츠 생성',
          description: 'AI 자동 콘텐츠 생성',
          icon: '✨'
        }
      ]
    },
    { 
      href: '/coffee', 
      label: 'COFFEE', 
      icon: Coffee,
      description: '연구와 함께하는 커피 이야기'
    },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const toggleDropdown = (e, index) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white shadow-sm border-b border-gray-100'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            {/* 로고/브랜드 */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-200 shadow-md">
                  P
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-xs animate-float">
                  ☕
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  박교수의 연구실
                </h1>
                <p className="text-xs text-gray-500 -mt-1">AI와 함께하는 교육연구</p>
              </div>
            </Link>

            {/* 데스크톱 메뉴 */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.href} className="relative">
                    <div
                      className="flex items-center"
                      onClick={(e) => item.submenu && toggleDropdown(e, index)}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive(item.href)
                            ? 'bg-blue-100 text-blue-700 shadow-sm'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                        }`}
                        title={item.description}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{item.label}</span>
                      </Link>
                      
                      {item.submenu && (
                        <button
                          className={`ml-1 p-1 rounded transition-transform duration-200 ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`}
                          onClick={(e) => toggleDropdown(e, index)}
                        >
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        </button>
                      )}
                    </div>
                    
                    {/* 드롭다운 메뉴 */}
                    {item.submenu && activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 opacity-100 visible transition-all duration-200 z-50">
                        <div className="p-4">
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                            {item.label}
                          </div>
                          <div className="space-y-1">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.href}
                                href={subitem.href}
                                className={`flex items-start gap-3 p-3 rounded-lg transition-colors group ${
                                  pathname === subitem.href
                                    ? 'bg-blue-50 text-blue-700'
                                    : 'hover:bg-gray-50'
                                }`}
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-2xl mt-1">{subitem.icon}</span>
                                <div className="flex-1">
                                  <div className={`font-medium ${
                                    pathname === subitem.href 
                                      ? 'text-blue-700' 
                                      : 'text-gray-800 group-hover:text-gray-900'
                                  }`}>
                                    {subitem.label}
                                  </div>
                                  <div className="text-sm text-gray-500 mt-1">
                                    {subitem.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* Claude AI 특별 버튼 */}
              <div className="ml-4 flex items-center gap-2">
                <Link
                  href="/ai/chat"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center gap-2"
                >
                  <Bot className="w-4 h-4" />
                  <span>Claude 채팅</span>
                </Link>
                
                {/* 관리자 버튼 (개발 중에만 표시) */}
                <Link
                  href="/admin"
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  title="콘텐츠 관리"
                >
                  <Settings className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:text-gray-800 hover:border-gray-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* 모바일 메뉴 오버레이 */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed top-16 left-0 right-0 bg-white shadow-xl border-t border-gray-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="py-4">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => !item.submenu && setIsMenuOpen(false)}
                      className={`flex items-center justify-between px-6 py-4 text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? 'bg-blue-100 text-blue-700 border-r-4 border-blue-500'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-5 h-5" />
                        <div>
                          <div>{item.label}</div>
                          <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                        </div>
                      </div>
                      {item.submenu && (
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} />
                      )}
                    </Link>
                    
                    {/* 모바일 서브메뉴 */}
                    {item.submenu && (
                      <div className={`bg-gray-50 border-t border-gray-200 ${
                        isActive(item.href) ? 'block' : 'hidden'
                      }`}>
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-4 px-12 py-3 text-sm transition-colors ${
                              pathname === subitem.href
                                ? 'bg-blue-50 text-blue-700 font-medium'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            <span className="text-lg">{subitem.icon}</span>
                            <div>
                              <div className="font-medium">{subitem.label}</div>
                              <div className="text-xs text-gray-500">{subitem.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* 모바일 Claude 채팅 버튼 */}
              <div className="px-6 py-4 border-t border-gray-200">
                <Link
                  href="/ai/chat"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg text-base font-medium"
                >
                  <Bot className="w-5 h-5" />
                  Claude와 채팅하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}