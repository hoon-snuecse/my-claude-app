import Link from 'next/link';

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "PISA 분석",
      subtitle: "Programme for International Student Assessment",
      icon: "🌍",
      description: "OECD PISA 데이터를 활용한 국제 교육 성취도 비교 분석 및 교육 격차 연구",
      href: "/research/pisa",
      color: "from-blue-500 to-cyan-500",
      features: [
        "50개국 이상 PISA 데이터 분석",
        "교육 격차 요인 규명",
        "정책 제언 및 개선 방안 도출",
        "Claude AI를 활용한 패턴 발견"
      ]
    },
    {
      title: "증거기반평가",
      subtitle: "Evidence-Based Assessment", 
      description: "데이터 기반의 객관적이고 신뢰할 수 있는 교육 평가 방법론 개발",
      icon: "📊",
      href: "/research/evidence-based",
      color: "from-green-500 to-emerald-500",
      features: [
        "AI 기반 자동 채점 시스템",
        "실시간 학습 분석 및 피드백",
        "블록체인 기반 평가 무결성",
        "개별화 평가 모델 개발"
      ]
    },
    {
      title: "사회네트워크분석",
      subtitle: "Social Network Analysis",
      description: "교육 커뮤니티 내 관계 패턴과 영향력 구조를 통한 학습 효과 최적화 연구",
      icon: "🕸️",
      href: "/research/sna", 
      color: "from-purple-500 to-pink-500",
      features: [
        "학습자간 상호작용 네트워크 분석",
        "교사-학생 관계망 효과 측정",
        "온라인 학습 커뮤니티 역학",
        "네트워크 중심성과 성과 상관관계"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">연구분야</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              데이터 기반의 교육연구와 Claude AI를 활용한 혁신적 분석 방법론을 통해 
              교육의 미래를 탐구합니다
            </p>
          </div>
        </div>
      </section>

      {/* 연구분야 목록 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                {/* 콘텐츠 */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-full flex items-center justify-center text-3xl`}>
                      {area.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800">{area.title}</h2>
                      <p className="text-lg text-gray-600">{area.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">주요 연구 영역</h3>
                    <ul className="space-y-2">
                      {area.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={area.href}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${area.color} text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                  >
                    자세히 보기
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* 이미지/차트 영역 */}
                <div className="flex-1">
                  <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                    <div className={`h-64 bg-gradient-to-br ${area.color} rounded-lg flex items-center justify-center text-white text-6xl mb-4`}>
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">최근 연구 성과</h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>논문 발표</span>
                        <span className="font-medium">15편</span>
                      </div>
                      <div className="flex justify-between">
                        <span>학회 발표</span>
                        <span className="font-medium">8회</span>
                      </div>
                      <div className="flex justify-between">
                        <span>협력 연구</span>
                        <span className="font-medium">5개 기관</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">연구 협력 제안</h2>
          <p className="text-xl mb-8 text-blue-100">
            관심 있는 연구 분야가 있으시거나 공동 연구를 원하신다면 언제든 연락주세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ai/chat"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Claude와 연구 아이디어 논의하기
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              연구 제안서 보내기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}