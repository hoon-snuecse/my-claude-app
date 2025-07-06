'use client';

import { useState } from 'react';

export default function LecturesAdvisoryPage() {
  const [activeSection, setActiveSection] = useState('lectures');

  const lectures = [
    {
      period: "2004-2013",
      institution: "서울교대",
      level: "학부",
      courses: ["사회과교육방법", "사회과교재연구", "사회과자료제작", "사회과교육특강", "사회과학방법론", "교육통계"],
      type: "정규 강의"
    },
    {
      period: "2004, 2005",
      institution: "서울교대",
      level: "대학원",
      courses: ["초등사회과 교육평가론"],
      type: "대학원 강의"
    },
    {
      period: "2011, 2012",
      institution: "서울교대",
      level: "대학원",
      courses: ["초등사회과 연구방법론"],
      type: "대학원 강의"
    },
    {
      period: "2013-2015",
      institution: "서울교대",
      level: "대학원",
      courses: ["초등영재교육 연구방법론"],
      type: "대학원 강의"
    },
    {
      period: "2015",
      institution: "서울교대",
      level: "대학원",
      courses: ["교육연구방법론"],
      type: "대학원 강의"
    },
    {
      period: "2016, 2018",
      institution: "서울교대",
      level: "대학원",
      courses: ["교육연구법"],
      type: "대학원 강의"
    },
    {
      period: "2019",
      institution: "충북대",
      level: "학부",
      courses: ["통합사회과교육론"],
      type: "외부 강의"
    },
    {
      period: "2019",
      institution: "건국대",
      level: "대학원",
      courses: ["배움중심평가", "진로진학상담교과 평가 방법 개발 및 활용"],
      type: "외부 강의"
    },
    {
      period: "2020",
      institution: "건국대",
      level: "대학원",
      courses: ["교육자료의 통계적 분석", "진로진학상담교과 평가 방법 개발 및 활용"],
      type: "외부 강의"
    },
    {
      period: "2021",
      institution: "건국대",
      level: "대학원",
      courses: ["진로진학상담교과 평가 방법 개발 및 활용"],
      type: "외부 강의"
    }
  ];

  const advisory = [
    {
      date: "2020.10.16./10.29.",
      organization: "한국교육과정평가원",
      title: "'원격수업에 따른 학생평가 제도의 현장 적합성 검토' 전문가 협의회",
      type: "평가 제도"
    },
    {
      date: "2021.3.20.",
      organization: "부산대학교",
      title: "제5차년도(2020) 부산교육종단연구(BELS) 데이터클리닝",
      type: "연구 자문"
    },
    {
      date: "2022.2.11.",
      organization: "한국교육과정평가원",
      title: "'2022년 컴퓨터 기반 학업성취도 평가 도구 개발을 위한 수업연구회 운영' 전문가 협의회",
      type: "평가 도구"
    },
    {
      date: "2022",
      organization: "한국교육과정평가원",
      title: "디지털 교육환경 및 교사의 학생평가 역량 관련 논의를 위한 워킹그룹 협의회",
      type: "디지털 교육"
    },
    {
      date: "2022",
      organization: "한국교육과정평가원",
      title: "'2022 개정 교육과정 적용을 대비한 학교생활기록부 체제 개선 방향 탐색' 성적표 개선(안) 전문가 협의회",
      type: "교육과정"
    }
  ];

  const lectureStats = {
    totalYears: 18,
    institutions: 3,
    totalCourses: 15,
    undergrad: 6,
    graduate: 9
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">대학 강의 및 자문 활동</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              서울교육대학교를 중심으로 예비교사와 현직교사 교육에 힘쓰며,
              국가 교육정책 수립을 위한 전문적인 자문을 제공하고 있습니다
            </p>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600">{lectureStats.totalYears}</div>
              <div className="text-gray-600 mt-2">년간 강의</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">{lectureStats.institutions}</div>
              <div className="text-gray-600 mt-2">대학 기관</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">{lectureStats.totalCourses}</div>
              <div className="text-gray-600 mt-2">강의 과목</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">{lectureStats.graduate}</div>
              <div className="text-gray-600 mt-2">대학원 과목</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">{advisory.length}</div>
              <div className="text-gray-600 mt-2">자문 활동</div>
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 선택 버튼 */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveSection('lectures')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeSection === 'lectures'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              대학 강의 활동
            </button>
            <button
              onClick={() => setActiveSection('advisory')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeSection === 'advisory'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              전문가 자문 활동
            </button>
          </div>
        </div>
      </section>

      {/* 컨텐츠 영역 */}
      {activeSection === 'lectures' && (
        <>
          {/* 대학 강의 활동 */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">대학별 강의 이력</h2>
              
              {/* 서울교대 강의 */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-700 mb-6 flex items-center">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4">서울교육대학교</span>
                  <span className="text-lg text-gray-500">2004-2018</span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {lectures.filter(l => l.institution === "서울교대").map((lecture, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          lecture.level === '학부' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-purple-100 text-purple-700'
                        }`}>
                          {lecture.level}
                        </span>
                        <span className="text-gray-500 text-sm">{lecture.period}</span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">담당 과목</h4>
                      <ul className="space-y-2">
                        {lecture.courses.map((course, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            <span className="text-gray-700">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 외부 대학 강의 */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-6 flex items-center">
                  <span className="bg-orange-600 text-white px-4 py-2 rounded-lg mr-4">외부 대학</span>
                  <span className="text-lg text-gray-500">2019-2021</span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {lectures.filter(l => l.institution !== "서울교대").map((lecture, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                          {lecture.institution}
                        </span>
                        <span className="text-gray-500 text-sm">{lecture.period}</span>
                      </div>
                      
                      <div className="mb-2">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          lecture.level === '학부' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-purple-100 text-purple-700'
                        }`}>
                          {lecture.level}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">담당 과목</h4>
                      <ul className="space-y-2">
                        {lecture.courses.map((course, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5"></span>
                            <span className="text-gray-700">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 강의 분야 하이라이트 */}
          <section className="py-16 bg-orange-50">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">주요 강의 분야</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-blue-600 text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">사회과 교육</h3>
                  <p className="text-gray-600">
                    사회과 교육방법론, 교재연구, 자료제작 등 사회과 교사 양성을 위한 핵심 과목 강의
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-purple-600 text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">교육 연구방법론</h3>
                  <p className="text-gray-600">
                    교육통계, 연구방법론 등 교육연구의 과학적 접근을 위한 방법론 교육
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-green-600 text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">교육 평가</h3>
                  <p className="text-gray-600">
                    배움중심평가, 교육평가론 등 현장 적용 가능한 평가 방법 개발 및 활용
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'advisory' && (
        <>
          {/* 전문가 자문 활동 */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">전문가 자문 활동 내역</h2>
              
              <div className="space-y-6">
                {advisory.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            item.type === '평가 제도' ? 'bg-blue-100 text-blue-700' :
                            item.type === '평가 도구' ? 'bg-green-100 text-green-700' :
                            item.type === '디지털 교육' ? 'bg-purple-100 text-purple-700' :
                            item.type === '교육과정' ? 'bg-orange-100 text-orange-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {item.type}
                          </span>
                          <span className="text-gray-500 text-sm">{item.date}</span>
                        </div>
                        
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h4>
                        
                        <p className="text-gray-600">
                          <span className="font-medium">주관:</span> {item.organization}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 자문 분야 통계 */}
          <section className="py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">자문 활동 주요 기여</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-blue-600 text-4xl mb-4">📋</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">평가 제도 개선</h3>
                  <p className="text-gray-600 text-sm">
                    원격수업 평가 제도 등 현장 적합성 검토
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-green-600 text-4xl mb-4">💻</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">디지털 평가 도구</h3>
                  <p className="text-gray-600 text-sm">
                    컴퓨터 기반 평가 도구 개발 자문
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-purple-600 text-4xl mb-4">📊</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">연구 데이터 검증</h3>
                  <p className="text-gray-600 text-sm">
                    교육종단연구 데이터 클리닝 및 검증
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-orange-600 text-4xl mb-4">📝</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">교육과정 혁신</h3>
                  <p className="text-gray-600 text-sm">
                    2022 개정 교육과정 대비 체제 개선
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}