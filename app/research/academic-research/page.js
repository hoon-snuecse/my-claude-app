'use client';

import { useState } from 'react';

export default function AcademicResearchPage() {
  const [activeTab, setActiveTab] = useState('thesis');

  const thesis = [
    {
      year: 1998,
      type: "석사학위논문",
      title: "초등학교 사회과 敎科書 評價要素 개발에 관한 연구",
      institution: "서울교육대학교 교육대학원"
    },
    {
      year: 2008,
      type: "박사학위논문",
      title: "사회과 학업성취도 평가의 인지적 특성 분석",
      institution: "한국교원대학교 대학원"
    }
  ];

  const textbooks = [
    {
      period: "2001 - 2002",
      title: "7차 교육과정 초등학교 사회교과서, 지도서 집필"
    },
    {
      period: "2009 - 2011",
      title: "2007 교육과정 초등학교 사회교과서, 지도서 집필"
    }
  ];

  const papers = [
    {
      year: 1997,
      title: "사회과 교수.학습 활동에서의 인터넷 활용 방안",
      journal: "사회과교육",
      volume: "-(30)",
      pages: "179-200",
      type: "단독"
    },
    {
      year: 1998,
      title: "사회과교육에서 웹기반 교수",
      journal: "사회과교육",
      volume: "-(31)",
      pages: "289-307",
      type: "단독"
    },
    {
      year: 2004,
      title: "사회과 학업성취도 평가문항의 타당성 검토",
      journal: "사회과교육",
      volume: "43(2)",
      pages: "85-108",
      type: "단독"
    },
    {
      year: 2005,
      title: "사회과 선호 척도의 구인 타당도 분석",
      journal: "사회과교육",
      volume: "44(4)",
      pages: "93-110",
      type: "단독"
    },
    {
      year: 2005,
      title: "초등학교 사회과 수업 풍토에 대한 연구- Newmann의 교실사려도(Classroom thoughtfulness)를 중심으로 -",
      journal: "사회과교육연구",
      volume: "12(2)",
      pages: "355-371",
      type: "공동"
    },
    {
      year: 2009,
      title: "초등 역사학습 평가의 실태와 새로운 방향 모색 -학교 수준의 성취도 평가를 중심으로-",
      journal: "역사교육연구",
      volume: "-(9)",
      pages: "7-39",
      type: "공동"
    },
    {
      year: 2011,
      title: "우리나라 초, 중학생의 ICT 리터러시 수준 평가",
      journal: "한국초등교육",
      volume: "22(3)",
      pages: "195-211",
      type: "공동"
    },
    {
      year: 2012,
      title: "공공쟁점 수업 참여 학습자의 토론에 대한 인식 변화",
      journal: "시민교육연구",
      volume: "44(2)",
      pages: "101-127",
      type: "공동"
    },
    {
      year: 2013,
      title: "국가수준 학업성취도 평가에 나타난 고등학교 학업성취 격차",
      journal: "교육평가연구",
      volume: "26(2)",
      pages: "297-317",
      type: "공동"
    },
    {
      year: 2013,
      title: "교육연구에 있어서 분산분석의 일반적 적용에 관한 연구",
      journal: "한국초등교육",
      volume: "24(2)",
      pages: "1-18",
      type: "공동"
    }
  ];

  const reports = [
    {
      year: 2006,
      organization: "한국교육학술정보원",
      title: "사이버가정학습 학습주제별 콘텐츠 유형 적용 방안 연구 – 사회과",
      type: "공동"
    },
    {
      year: 2007,
      organization: "서울특별시교육청",
      title: "초4-초6 교과학습 부진학생 진단도구 개발",
      type: "공동"
    },
    {
      year: 2008,
      organization: "서울교대 교육심리측정연구소, 교학사",
      title: "한국형 초등 적성검사",
      type: "공동"
    },
    {
      year: 2009,
      organization: "한국교육과정평가원",
      title: "학교교육 내실화를 위한 초 중학교 수행평가 적용 프로그램 개발",
      code: "RRE 2009-4",
      type: "공동"
    },
    {
      year: 2009,
      organization: "한국교육학술정보원",
      title: "국가수준 초·중등학생 ICT 리터러시 수준 평가 연구",
      type: "공동"
    },
    {
      year: 2009,
      organization: "한국직업능력연구원",
      title: "종합적 사고력 주관식 진단도구 채점기준 및 매뉴얼 개발",
      type: "공동"
    },
    {
      year: 2010,
      organization: "한국교육학술정보원",
      title: "국가수준 초·중등학생 ICT리터러시 수준 평가 연구",
      type: "공동"
    },
    {
      year: 2011,
      organization: "교육과학기술부",
      title: "2012년 국가수준 학업성취도 평가 채점 표준화 방안 연구",
      code: "수탁과제 2011-1",
      type: "공동"
    },
    {
      year: 2011,
      organization: "한국교과서연구재단",
      title: "사회통합 관련 내용 반영을 위한 교과서 분석 연구",
      code: "연구보고서 2011-03",
      type: "공동"
    },
    {
      year: 2011,
      organization: "한국직업능력연구원",
      title: "종합적 사고력 진단도구 동형검사 개발",
      type: "공동"
    },
    {
      year: 2012,
      organization: "한국교육개발원",
      title: "학업성취도에 대한 방과후학교 프로그램 효과 분석",
      code: "CR2012-26",
      type: "공동"
    },
    {
      year: 2012,
      organization: "한국교육과정평가원",
      title: "2011년 국가수준 학업성취도 평가 결과: 초등학교 학업성취도 변화 추이 분석",
      code: "RRE 2012-1-1",
      type: "공동"
    },
    {
      year: 2012,
      organization: "한국교육과정평가원",
      title: "2011년 국가수준 학업성취도 평가 결과: 학력의 상향평준화 현상과 교육정책 효과 분석",
      code: "RRE 2012-1-4",
      type: "공동"
    },
    {
      year: 2012,
      organization: "한국교육과정평가원",
      title: "2011년 국가수준 학업성취도 평가 결과: 학업성취 및 향상 특성 분석",
      code: "RRE 2012-1-5",
      type: "공동"
    },
    {
      year: 2012,
      organization: "한국교육과정평가원",
      title: "국가수준 학업성취도 평가 개선 연구",
      code: "교육과학기술부 수탁과제 2012-1",
      type: "공동"
    },
    {
      year: 2012,
      organization: "한국교육과정평가원",
      title: "2012 KICE 정책 제안서II : 교육평가, 대학수학능력시험, 교과서검정, 국가영어능력평가시험 분야",
      code: "ORM 2012-123-2",
      type: "공동"
    },
    {
      year: 2013,
      organization: "국립국제교육원",
      title: "제4차년도 국가영어능력평가시험(1급) 동등화 연구",
      type: "공동"
    },
    {
      year: 2013,
      organization: "한국교육과정평가원",
      title: "컴퓨터 기반 국가수준 학업성취도 평가 도입 방안",
      code: "CRE 2013-5",
      type: "공동"
    },
    {
      year: 2016,
      organization: "부산광역시교육청 교육정책연구소",
      title: "제1차년도(2016) 부산교육종단연구(BELS) 기초 분석 보고서",
      type: "공동"
    },
    {
      year: 2016,
      organization: "서울특별시교육청교육연구정보원 교육정책연구소",
      title: "서울교육종단연구 7차년도기초분석 보고서",
      code: "서교연 2016-50",
      type: "공동"
    },
    {
      year: 2017,
      organization: "부산광역시교육청 교육정책연구소",
      title: "제2차년도(2017) 부산교육종단연구(BELS) 기초 분석 보고서",
      type: "공동"
    },
    {
      year: 2019,
      organization: "부산광역시교육청 교육정책연구소",
      title: "제4차년도(2019) 부산교육종단연구(BELS) 기초 분석 보고서",
      type: "공동"
    },
    {
      year: 2019,
      organization: "한국교육과정평가원",
      title: "국가단위 평가의 수요자 중심 정보 활용 서비스 시스템 구축 및 운영(Ⅶ) : 웹기반 평가의 교실 적용 및 시스템 최적화",
      code: "RRE 2019-1",
      type: "공동"
    }
  ];

  const tabContent = {
    thesis: {
      title: "학위논문",
      icon: "🎓",
      count: thesis.length
    },
    textbooks: {
      title: "교과서 집필",
      icon: "📚",
      count: textbooks.length
    },
    papers: {
      title: "연구 논문",
      icon: "📄",
      count: papers.length
    },
    reports: {
      title: "연구 보고서",
      icon: "📊",
      count: reports.length
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">연구 활동</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              20년 이상의 연구 경험을 바탕으로 교육 평가, 교육과정, ICT 교육 등
              다양한 분야에서 학술적 기여를 하고 있습니다
            </p>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600">2</div>
              <div className="text-gray-600 mt-2">학위 논문</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">2</div>
              <div className="text-gray-600 mt-2">교과서 집필</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">10</div>
              <div className="text-gray-600 mt-2">학술 논문</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">23</div>
              <div className="text-gray-600 mt-2">연구 보고서</div>
            </div>
          </div>
        </div>
      </section>

      {/* 탭 네비게이션 */}
      <section className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {Object.entries(tabContent).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                  activeTab === key
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <span className="text-2xl">{value.icon}</span>
                <span>{value.title}</span>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                  {value.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 컨텐츠 영역 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* 학위논문 */}
          {activeTab === 'thesis' && (
            <div className="space-y-6">
              {thesis.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg font-medium">
                      {item.type}
                    </span>
                    <span className="text-gray-500">{item.year}년</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.institution}</p>
                </div>
              ))}
            </div>
          )}

          {/* 교과서 집필 */}
          {activeTab === 'textbooks' && (
            <div className="space-y-6">
              {textbooks.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-medium">
                      교과서 집필
                    </span>
                    <span className="text-gray-500">{item.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>
              ))}
            </div>
          )}

          {/* 연구 논문 */}
          {activeTab === 'papers' && (
            <div className="space-y-6">
              {papers.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className={`px-3 py-1 rounded-lg font-medium ${
                      item.type === '단독' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {item.type}
                    </span>
                    <span className="text-gray-500">{item.year}년</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">
                    {item.journal}, {item.volume}, {item.pages}.
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* 연구 보고서 */}
          {activeTab === 'reports' && (
            <div className="space-y-6">
              {reports.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-lg font-medium">
                      {item.type}연구
                    </span>
                    <span className="text-gray-500">{item.year}년</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">발주처:</span> {item.organization}
                  </p>
                  {item.code && (
                    <p className="text-gray-500 text-sm">
                      <span className="font-medium">보고서 번호:</span> {item.code}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 연구 분야 하이라이트 */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">주요 연구 분야</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-purple-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">교육 평가</h3>
              <p className="text-gray-600">
                국가수준 학업성취도 평가, 수행평가, ICT 리터러시 평가 등 다양한 평가 도구 개발 및 연구
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-blue-600 text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">교육과정 개발</h3>
              <p className="text-gray-600">
                초등학교 사회과 교과서 집필 및 교육과정 개발 연구를 통한 교육 내용 혁신
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-green-600 text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">ICT 교육</h3>
              <p className="text-gray-600">
                웹기반 교수법, 사이버가정학습, ICT 리터러시 평가 등 디지털 교육 혁신 연구
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}