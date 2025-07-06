'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  FlaskConical, 
  BookOpen, 
  BarChart3,
  Hammer,
  Menu,
  X,
  LogIn,
  LogOut,
  MessageCircle
} from 'lucide-react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { 
      href: '/', 
      label: '홈', 
      icon: Home,
    },
    { 
      href: '/research', 
      label: '연구', 
      icon: FlaskConical,
    },
    { 
      href: '/teaching', 
      label: '교육', 
      icon: BookOpen,
    },
    { 
      href: '/analytics', 
      label: '분석', 
      icon: BarChart3,
    },
    { 
      href: '/shed', 
      label: '일상', 
      icon: Hammer,
    },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm'
    } border-b border-slate-200`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* 로고/브랜드 */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:shadow-lg transition-shadow">
              ♭
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-space-grotesk font-semibold text-slate-900">
                BlueNote Atelier
              </h1>
            </div>
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden lg:flex items-center gap-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            
            {/* Claude AI 채팅 버튼 (로그인한 경우만) */}
            {session && (
              <Link
                href="/ai/chat"
                className="ml-2 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Claude 채팅</span>
              </Link>
            )}
            
            {/* 로그인/로그아웃 버튼 */}
            <div className="ml-4">
              {status === 'loading' ? (
                <div className="px-4 py-2 text-sm text-slate-500">로딩중...</div>
              ) : session ? (
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>로그아웃</span>
                </button>
              ) : (
                <button
                  onClick={() => signIn('google')}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span>로그인</span>
                </button>
              )}
            </div>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center px-3 py-2 border border-slate-300 rounded-md text-slate-600 hover:text-slate-800 hover:border-slate-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm">
          <div className="container-custom py-4">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            
            {/* 모바일 Claude 채팅 버튼 */}
            {session && (
              <Link
                href="/ai/chat"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 mt-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-base font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Claude와 대화하기</span>
              </Link>
            )}
            
            {/* 모바일 로그인/로그아웃 */}
            <div className="mt-4 pt-4 border-t border-slate-200">
              {session ? (
                <button
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 text-left text-slate-600 hover:bg-slate-50 rounded-lg"
                >
                  <LogOut className="w-5 h-5" />
                  <span>로그아웃</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    signIn('google');
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50"
                >
                  <LogIn className="w-5 h-5" />
                  <span>Google로 로그인</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}