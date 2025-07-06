'use client';

import { useEffect, useState } from 'react';

export default function AnalyticsPage() {
  const [fadeIn, setFadeIn] = useState({
    hero: false,
    project1: false,
    project2: false,
    project3: false,
    tools: false,
  });

  useEffect(() => {
    // Stagger the fade-in animations
    const timers = [
      setTimeout(() => setFadeIn(prev => ({ ...prev, hero: true })), 100),
      setTimeout(() => setFadeIn(prev => ({ ...prev, project1: true })), 500),
      setTimeout(() => setFadeIn(prev => ({ ...prev, project2: true })), 700),
      setTimeout(() => setFadeIn(prev => ({ ...prev, project3: true })), 900),
      setTimeout(() => setFadeIn(prev => ({ ...prev, tools: true })), 1100),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const tools = [
    { name: 'Python', desc: '데이터 처리 & ML', icon: '🐍' },
    { name: 'R', desc: '통계 분석', icon: '📊' },
    { name: 'Tableau', desc: '시각화', icon: '📈' },
    { name: 'Claude AI', desc: '인사이트 도출', icon: '🤖' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`py-24 px-4 text-center transition-all duration-1000 ${
        fadeIn.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-space-grotesk font-bold mb-6 bg-gradient-to-br from-slate-900 to-blue-600 bg-clip-text text-transparent">
            분석
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 font-medium">
            데이터가 들려주는 교육의 이야기
          </p>
          
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            데이터 분석 프로젝트와 시각화 작품, 그리고 <strong className="text-slate-700">분석 도구와 방법론</strong>을 공유합니다. 
            숫자 너머의 의미를 발견하고, 교육 현장에 실질적인 통찰을 제공합니다.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="container-custom space-y-8">
          <div className={`quote-sheet transition-all duration-1000 ${
            fadeIn.project1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              <div className="absolute inset-4 border border-dashed border-blue-200 rounded-lg opacity-30"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-space-grotesk font-bold text-slate-800 mb-2">
                  PISA 데이터 분석
                </h3>
                
                <p className="text-lg text-blue-600 mb-4 italic">
                  International Education Performance Analysis
                </p>
                
                <p className="text-base text-slate-600 mb-6 leading-relaxed">
                  OECD PISA 데이터를 활용한 국가별 교육 성취도 비교 분석과 교육 격차 요인 규명. 
                  다층모형과 머신러닝 기법을 활용하여 한국 교육의 강점과 개선점을 도출했습니다.
                </p>
                
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <span className="w-5 h-px bg-slate-300"></span>
                  <span>Python | R | Tableau</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`quote-sheet transition-all duration-1000 ${
            fadeIn.project2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              <div className="absolute inset-4 border border-dashed border-blue-200 rounded-lg opacity-30"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-space-grotesk font-bold text-slate-800 mb-2">
                  사회 네트워크 분석
                </h3>
                
                <p className="text-lg text-blue-600 mb-4 italic">
                  Educational Community Network Analysis
                </p>
                
                <p className="text-base text-slate-600 mb-6 leading-relaxed">
                  교육 커뮤니티의 상호작용 패턴을 네트워크 분석을 통해 시각화하고 인사이트 도출. 
                  교원학습공동체의 지식 공유 네트워크를 분석하여 효과적인 협업 모델을 제시했습니다.
                </p>
                
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <span className="w-5 h-px bg-slate-300"></span>
                  <span>NetworkX | Gephi | D3.js</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`quote-sheet transition-all duration-1000 ${
            fadeIn.project3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              <div className="absolute inset-4 border border-dashed border-blue-200 rounded-lg opacity-30"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-space-grotesk font-bold text-slate-800 mb-2">
                  실시간 대시보드
                </h3>
                
                <p className="text-lg text-blue-600 mb-4 italic">
                  Real-time Educational Dashboard
                </p>
                
                <p className="text-base text-slate-600 mb-6 leading-relaxed">
                  교육 데이터의 실시간 모니터링과 인터랙티브 시각화를 위한 대시보드 개발. 
                  학습 성과와 교육 활동을 실시간으로 추적하고 즉각적인 피드백을 제공합니다.
                </p>
                
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <span className="w-5 h-px bg-slate-300"></span>
                  <span>Plotly | Dash | Power BI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className={`quote-sheet max-w-4xl mx-auto mt-16 transition-all duration-1000 ${
            fadeIn.tools ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              <div className="absolute inset-4 border border-dashed border-blue-200 rounded-lg opacity-30"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-space-grotesk font-semibold text-slate-800 mb-8 text-center">
                  주요 분석 도구
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {tools.map((tool, index) => (
                    <div key={index}>
                      <div className="text-3xl mb-2">{tool.icon}</div>
                      <h4 className="font-semibold text-slate-800">{tool.name}</h4>
                      <p className="text-xs text-slate-600">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}