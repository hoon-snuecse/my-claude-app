'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  Globe, 
  BarChart3, 
  Network, 
  Bot, 
  Coffee, 
  BookOpen,
  ArrowRight,
  Calendar,
  TrendingUp,
  Users,
  Brain
} from 'lucide-react';

export default function HomePage() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [statsCount, setStatsCount] = useState({
    projects: 0,
    papers: 0,
    students: 0,
    coffees: 0
  });
  
  const quotes = [
    "데이터는 말한다, 우리는 듣고 해석한다.",
    "교육의 미래는 증거에 기반한 혁신에서 시작된다.",
    "네트워크는 연결을 보여주고, 분석은 의미를 찾아낸다.",
    "AI와 함께라면 불가능한 연구는 없다.",
    "좋은 커피 한 잔이면 더 좋은 아이디어가 떠오른다."
  ];

  const finalStats = {
    projects: 25,
    papers: 42,
    students: 180,
    coffees: 1337
  };

  // 명언 로테이션
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // 숫자 카운트 애니메이션
  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setStatsCount({
        projects: Math.floor(finalStats.projects * progress),
        papers: Math.floor(finalStats.papers * progress),
        students: Math.floor(finalStats.students * progress),
        coffees: Math.floor(finalStats.coffees * progress)
      });
      
      if (step >= steps) {
        clearInterval(timer);
        setStatsCount(finalStats);
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, []);

  const researchAreas = [
    {
      title: "PISA 분석",
      subtitle: "Programme for International Student Assessment",
      icon: Globe,
      emoji: "🌍",
      description: "국제학업성취도평가 데이터를 통한 교육 격차 분석 및 정책 제언",
      color: "from-blue-500 to-cyan-500",
      href: "/research/pisa",
      highlights: ["50개국 데이터 분석", "교육격차 요인 규명", "정책 제언 도출"],
      recent: "PISA 2022 한국 수학 성취도 심층 분석"
    },
    {
      title: "증거기반평가",
      subtitle: "Evidence-Based Assessment", 
      icon: BarChart3,
      emoji: "📊",
      description: "데이터 기반의 객관적이고 신뢰할 수 있는 교육 평가 방법론 연구",
      color: "from-green-500 to-emerald-500",
      href: "/research/evidence-based",
      highlights: ["AI 자동채점", "실시간 피드백", "개별화 평가"],
      recent: "블록체인 기반 평가 무결성 보장 시스템"
    },
    {
      title: "사회네트워크분석",
      subtitle: "Social Network Analysis",
      icon: Network,
      emoji: "🕸️", 
      description: "교육 커뮤니티의 관계와 영향력 패턴을 통한 학습 효과 최적화",
      color: "from-purple-500 to-pink-500",
      href: "/research/sna",
      highlights: ["학습자 네트워크", "영향력 분석", "커뮤니티 역학"],
      recent: "온라인 학습 커뮤니티의 지식 확산 패턴"
    }
  ];

  const recentActivities = [
    {
      type: "research",
      icon: "🔬",
      title: "PISA 2022 결과 분석: Claude AI와 함께 찾은 새로운 인사이트",
      date: "2025-06-30",
      summary: "Claude AI를 활용하여 PISA 2022 데이터에서 기존 연구에서 놓친 패턴을 발견했습니다.",
      tags: ["PISA", "AI분석", "교육격차"],
      readTime: "5분"
    },
    {
      type: "teaching",
      icon: "📚",
      title: "AI 시대의 교육평가 방법론 강의 개발",
      date: "2025-06-28", 
      summary: "학생들과 함께 Claude AI를 활용한 새로운 평가 방법을 탐구하는 혁신적 강의를 설계했습니다.",
      tags: ["교육평가", "AI교육", "혁신수업"],
      readTime: "3분"
    },
    {
      type: "ai",
      icon: "🤖",
      title: "Claude와의 대화: 연구 방법론의 혁신적 변화",
      date: "2025-06-25",
      summary: "AI가 어떻게 연구 과정을 변화시키고 있는지 Claude와 심도있게 토론한 결과를 정리했습니다.",
      tags: ["Claude AI", "연구방법론", "AI협업"],
      readTime: "7분"
    },
    {
      type: "coffee",
      icon: "☕",
      title: "커피와 함께하는 SNA: 네트워크 사고의 확장",
      date: "2025-06-22",
      summary: "오늘 아침 커피를 마시며 떠오른 사회네트워크분석의 새로운 관점에 대한 단상을 기록했습니다.",
      tags: ["SNA", "창의적사고", "커피철학"],
      readTime: "4분"
    }
  ];

  const stats = [
    {
      icon: Brain,
      label: "진행 중인 연구 프로젝트",
      value: statsCount.projects,
      suffix: "개",
      description: "PISA, 증거기반평가, SNA 분야"
    },
    {
      icon: BookOpen,
      label: "발표 논문 및 연구",
      value: statsCount.papers,
      suffix: "편",
      description: "국내외 학술지 및 학회 발표"
    },
    {
      icon: Users,
      label: "지도한 학생 수",
      value: statsCount.students,
      suffix: "명",
      description: "학부생, 대학원생, 연구원"
    },
    {
      icon: Coffee,
      label: "연구와 함께한 커피",
      value: statsCount.coffees,
      suffix: "잔",
      description: "아이디어의 원동력 ☕"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="gradient-bg text-white section-padding relative overflow-hidden">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 border border-white/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <div className="mb-6">
                <h1 className="text-6xl font-bold mb-4 leading-tight">
                  안녕하세요, <br />
                  <span className="gradient-text bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                    박교수
                  </span>입니다
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  PISA 분석, 증거기반평가, 사회네트워크분석을 통해 교육의 미래를 탐구하며, 
                  <span className="text-purple-300 font-semibold"> Claude AI</span>와 함께 새로운 연구 방법론을 개척하고 있습니다.
                </p>
              </div>
              
              {/* 동적 명언 */}
              <div className="ai-glow rounded-xl p-6 mb-8 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                    💭
                  </div>
                  <span className="text-sm font-medium text-purple-200">오늘의 연구 철학</span>
                </div>
                <blockquote className="text-lg italic text-blue-200 transition-all duration-1000 animate-typing">
                  "{quotes[currentQuote]}"
                </blockquote>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/research" className="btn-primary">
                  <span>연구 둘러보기</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/ai/chat" className="border-2 border-white/30 hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  <span>Claude와 대화하기</span>
                </Link>
              </div>
            </div>

            {/* 프로필 영역 */}
            <div className="relative animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="relative w-96 h-96 mx-auto">
                {/* 메인 프로필 */}
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center text-8xl backdrop-blur-sm border border-white/20 animate-pulse-glow">
                  👨‍🎓
                </div>
                
                {/* 플로팅 아이콘들 */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl animate-float shadow-lg">
                  ☕
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-xl animate-float shadow-lg" style={{animationDelay: '1s'}}>
                  🤖
                </div>
                <div className="absolute top-8 -left-8 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-lg animate-float shadow-lg" style={{animationDelay: '2s'}}>
                  📊
                </div>
                <div className="absolute bottom-12 -right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-xl animate-float shadow-lg" style={{animationDelay: '1.5s'}}>
                  🌍
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-16 bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">연구 현황</h2>
            <p className="text-xl text-gray-600">숫자로 보는 연구실 활동</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center card card-hover animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.value.toLocaleString()}<span className="text-blue-600">{stat.suffix}</span>
                  </div>
                  <div className="font-semibold text-gray-700 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 연구 분야 섹션 */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">주요 연구분야</h2>
            <p className="text-xl text-gray-600">데이터 기반의 교육연구와 AI의 만남</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Link
                  key={index}
                  href={area.href}
                  className="group research-card card-hover animate-fadeInUp"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className={`h-24 bg-gradient-to-r ${area.color} rounded-lg flex items-center justify-center text-4xl mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    <span className="mr-2">{area.emoji}</span>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium mb-3">{area.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {area.description}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">주요 성과</h4>
                    <ul className="space-y-1">
                      {area.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="text-sm text-gray-500 mb-3">최근 연구:</div>
                    <div className="text-sm font-medium text-gray-700 mb-4">{area.recent}</div>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      <span>자세히 보기</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 최근 활동 섹션 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">최근 활동</h2>
            <p className="text-xl text-gray-600">Claude AI와 함께한 최신 연구 및 인사이트</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {recentActivities.map((activity, index) => (
              <article
                key={index}
                className="card card-hover animate-fadeInUp"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        activity.type === 'research' ? 'bg-blue-100 text-blue-700' :
                        activity.type === 'teaching' ? 'bg-green-100 text-green-700' :
                        activity.type === 'ai' ? 'bg-purple-100 text-purple-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {activity.type === 'research' ? '연구' :
                         activity.type === 'teaching' ? '수업' :
                         activity.type === 'ai' ? 'AI' : '커피'}
                      </span>
                      <span className="text-sm text-gray-500">{activity.date}</span>
                      <span className="text-sm text-gray-500">• {activity.readTime} 읽기</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {activity.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {activity.summary}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {activity.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/ai" className="btn-primary">
              <Bot className="w-5 h-5 mr-2" />
              AI 활동 더보기
            </Link>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">함께 연구하고 싶으신가요?</h2>
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            PISA 데이터 분석, 증거기반평가, SNA 연구에 관심이 있으시거나, 
            Claude AI를 활용한 연구 방법론에 대해 궁금한 점이 있으시면 언제든 연락주세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ai/chat" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Bot className="w-5 h-5" />
              Claude와 먼저 대화해보기
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              직접 연락하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}