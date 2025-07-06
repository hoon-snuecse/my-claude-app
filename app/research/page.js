import Link from 'next/link';

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "혁신학교 관련 활동",
      subtitle: "Innovation School Activities",
      icon: "🏫",
      description: "서울시교육청 혁신학교 운영 지원 및 교원학습공동체 활성화를 위한 다양한 활동",
      href: "/research/innovation-school",
      color: "from-blue-500 to-cyan-500",
      stats: {
        activities: 8,
        period: "2019-2023",
        organizations: 3
      }
    },
    {
      title: "연수 및 컨설팅",
      subtitle: "Training and Consulting", 
      description: "교육 현장의 평가 방법 개선과 교육과정 운영을 위한 전문적인 연수 및 컨설팅 활동",
      icon: "📚",
      href: "/research/training-consulting",
      color: "from-green-500 to-emerald-500",
      stats: {
        activities: 7,
        period: "2016-2022",
        organizations: 5
      }
    },
    {
      title: "연구 활동",
      subtitle: "Research Activities",
      description: "학위논문, 교과서 집필, 학술논문 발표 및 국가기관 연구과제 수행",
      icon: "📖",
      href: "/research/academic-research", 
      color: "from-purple-500 to-pink-500",
      stats: {
        papers: 13,
        reports: 23,
        textbooks: 2
      }
    },
    {
      title: "대학 강의 및 자문",
      subtitle: "University Lectures & Advisory",
      description: "서울교대를 비롯한 여러 대학에서의 강의 활동과 한국교육과정평가원 등 전문기관 자문",
      icon: "🎓",
      href: "/research/lectures-advisory",
      color: "from-orange-500 to-red-500",
      stats: {
        lectures: 11,
        advisory: 5,
        period: "2004-2022"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">연구 실적</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              20년 이상의 교육 연구 경험과 혁신적인 교육 방법론 개발을 통해
              한국 교육 발전에 기여하고 있습니다
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">활동 현황</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {area.stats.activities && (
                        <div className="bg-gray-100 rounded-lg p-3">
                          <div className="text-2xl font-bold text-gray-800">{area.stats.activities}</div>
                          <div className="text-sm text-gray-600">활동 건수</div>
                        </div>
                      )}
                      {area.stats.papers && (
                        <div className="bg-gray-100 rounded-lg p-3">
                          <div className="text-2xl font-bold text-gray-800">{area.stats.papers}</div>
                          <div className="text-sm text-gray-600">논문 발표</div>
                        </div>
                      )}
                      {area.stats.reports && (
                        <div className="bg-gray-100 rounded-lg p-3">
                          <div className="text-2xl font-bold text-gray-800">{area.stats.reports}</div>
                          <div className="text-sm text-gray-600">연구 보고서</div>
                        </div>
                      )}
                      {area.stats.textbooks && (
                        <div className="bg-gray-100 rounded-lg p-3">
                          <div className="text-2xl font-bold text-gray-800">{area.stats.textbooks}</div>
                          <div className="text-sm text-gray-600">교과서 집필</div>
                        </div>
                      )}
                      {area.stats.lectures && (
                        <div className="bg-gray-100 rounded-lg p-3">
                          <div className="text-2xl font-bold text-gray-800">{area.stats.lectures}</div>
                          <div className="text-sm text-gray-600">대학 강의</div>
                        </div>
                      )}
                      {area.stats.advisory && (
                        <div className="bg-gray-100 rounded-lg p-3">
                          <div className="text-2xl font-bold text-gray-800">{area.stats.advisory}</div>
                          <div className="text-sm text-gray-600">자문 활동</div>
                        </div>
                      )}
                      {area.stats.period && (
                        <div className="bg-gray-100 rounded-lg p-3 col-span-2">
                          <div className="text-lg font-bold text-gray-800">{area.stats.period}</div>
                          <div className="text-sm text-gray-600">활동 기간</div>
                        </div>
                      )}
                    </div>
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
                    <div className="text-center">
                      <p className="text-gray-600 text-sm">클릭하여 상세 실적을 확인하세요</p>
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