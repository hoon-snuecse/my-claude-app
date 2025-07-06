'use client';

import { useEffect, useState } from 'react';

export default function TeachingPage() {
  const [fadeIn, setFadeIn] = useState({
    hero: false,
    philosophy: false,
    activity1: false,
    activity2: false,
    activity3: false,
  });

  useEffect(() => {
    // Stagger the fade-in animations
    const timers = [
      setTimeout(() => setFadeIn(prev => ({ ...prev, hero: true })), 100),
      setTimeout(() => setFadeIn(prev => ({ ...prev, philosophy: true })), 500),
      setTimeout(() => setFadeIn(prev => ({ ...prev, activity1: true })), 700),
      setTimeout(() => setFadeIn(prev => ({ ...prev, activity2: true })), 900),
      setTimeout(() => setFadeIn(prev => ({ ...prev, activity3: true })), 1100),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`py-24 px-4 text-center transition-all duration-1000 ${
        fadeIn.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-space-grotesk font-bold mb-6 bg-gradient-to-br from-slate-900 to-blue-600 bg-clip-text text-transparent">
            교육
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 font-medium">
            사고의 도구를 제공하는 교육
          </p>
          
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            개인적 교육 철학과 수업 경험, 그리고 <strong className="text-slate-700">교육 현장에서의 인사이트</strong>를 공유합니다. 
            답을 주는 것이 아닌 올바른 질문을 할 수 있는 능력을 기르는 교육을 추구합니다.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4">
        <div className="container-custom">
          <div className={`quote-sheet max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
            fadeIn.philosophy ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              <div className="absolute inset-4 border border-dashed border-blue-200 rounded-lg opacity-30"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-space-grotesk font-semibold text-slate-800 mb-6">
                  교육 철학
                </h2>
                
                <p className="text-lg text-slate-700 italic mb-6">
                  "교육은 지식의 전달이 아닌, 사고의 도구를 제공하는 것이다."
                </p>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  20년 이상의 교육 경험을 통해 깨달은 것은, 진정한 교육은 답을 주는 것이 아니라 
                  올바른 질문을 할 수 있는 능력을 기르는 것입니다. 
                </p>
                
                <p className="text-base text-slate-600 leading-relaxed">
                  데이터와 증거에 기반한 교육 방법론을 연구하며, 
                  AI 시대에 필요한 비판적 사고력과 창의성을 기르는 교육을 추구합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Activities */}
          <div className="space-y-8">
            <div className={`quote-sheet transition-all duration-1000 ${
              fadeIn.activity1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="relative">
                <div className="absolute inset-4 border border-dashed border-blue-200 rounded-lg opacity-30"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-space-grotesk font-bold text-slate-800 mb-2">
                    대학 강의
                  </h3>
                  
                  <p className="text-lg text-blue-600 mb-4 italic">
                    University Lectures
                  </p>
                  
                  <p className="text-base text-slate-600 mb-6 leading-relaxed">
                    서울교육대학교를 비롯한 여러 대학에서 교육연구방법론, 교육평가론 등을 강의하며, 
                    예비 교사들과 현직 교사들에게 데이터 기반 교육의 중요성을 전파하고 있습니다.
                  </p>
                  
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <span className="w-5 h-px bg-slate-300"></span>
                    <span>2004-현재 | 11개 강좌 | 5개 대학</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`quote-sheet transition-all duration-1000 ${
              fadeIn.activity2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="relative">
                <div className="absolute inset-4 border border-dashed border-blue-200 rounded-lg opacity-30"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-space-grotesk font-bold text-slate-800 mb-2">
                    교사 연수
                  </h3>
                  
                  <p className="text-lg text-blue-600 mb-4 italic">
                    Teacher Training
                  </p>
                  
                  <p className="text-base text-slate-600 mb-6 leading-relaxed">
                    현직 교사들을 위한 평가 방법론과 교원학습공동체 운영 연수를 진행하며, 
                    교실 현장에서 바로 적용할 수 있는 실질적인 교육 방법을 공유합니다.
                  </p>
                  
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <span className="w-5 h-px bg-slate-300"></span>
                    <span>2016-2022 | 7개 프로그램 | 100+ 교사</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`quote-sheet transition-all duration-1000 ${
              fadeIn.activity3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="relative">
                <div className="absolute inset-4 border border-dashed border-blue-200 rounded-lg opacity-30"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-space-grotesk font-bold text-slate-800 mb-2">
                    교육 컨설팅
                  </h3>
                  
                  <p className="text-lg text-blue-600 mb-4 italic">
                    Educational Consulting
                  </p>
                  
                  <p className="text-base text-slate-600 mb-6 leading-relaxed">
                    학교 현장의 교육과정 개선과 평가 시스템 구축을 위한 전문 컨설팅을 제공하며, 
                    각 학교의 특성에 맞는 맞춤형 교육 솔루션을 설계합니다.
                  </p>
                  
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <span className="w-5 h-px bg-slate-300"></span>
                    <span>2019-2023 | 8개 학교 | 3개 교육청</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}