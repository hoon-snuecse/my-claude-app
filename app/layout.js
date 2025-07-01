import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata = {
  title: {
    default: '박교수의 연구실 | PISA, 증거기반평가, AI 교육연구',
    template: '%s | 박교수의 연구실'
  },
  description: 'PISA 분석, 증거기반평가, 사회네트워크분석을 통한 교육연구와 Claude AI를 활용한 혁신적 연구 방법론을 탐구합니다.',
  keywords: [
    'PISA', 
    '증거기반평가', 
    'SNA', 
    '사회네트워크분석',
    '교육연구', 
    'Claude AI', 
    '교육통계',
    '연구방법론',
    '교육평가',
    '데이터분석'
  ],
  authors: [{ name: '박교수' }],
  creator: '박교수',
  publisher: '박교수의 연구실',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://your-domain.vercel.app',
    title: '박교수의 연구실 | AI와 함께하는 교육연구',
    description: 'PISA, 증거기반평가, SNA 연구와 Claude AI 협업 연구실',
    siteName: '박교수의 연구실',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '박교수의 연구실',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '박교수의 연구실 | AI와 함께하는 교육연구',
    description: 'PISA, 증거기반평가, SNA 연구와 Claude AI 협업',
    images: ['/images/twitter-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className="font-inter antialiased bg-gray-50 min-h-screen">
        <div className="flex flex-col min-h-screen">
          {/* 네비게이션 */}
          <Navigation />
          
          {/* 메인 콘텐츠 */}
          <main className="flex-grow">
            {children}
          </main>
          
          {/* 푸터 */}
          <Footer />
          
          {/* Claude AI 플로팅 버튼 */}
          <FloatingChatButton />
        </div>
        
        {/* 스크립트 (Google Analytics 등) */}
        <GoogleAnalytics />
      </body>
    </html>
  )
}

// Claude AI 플로팅 채팅 버튼 컴포넌트
function FloatingChatButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 no-print">
      <a
        href="/ai/chat"
        className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3 animate-pulse-glow"
        title="Claude AI와 채팅하기"
      >
        <span className="text-2xl">🤖</span>
        <span className="hidden group-hover:block font-medium text-sm whitespace-nowrap pr-2">
          Claude와 채팅
        </span>
      </a>
    </div>
  )
}

// Google Analytics (향후 추가용)
function GoogleAnalytics() {
  // 실제 구현에서는 GA 태그 추가
  return null
}