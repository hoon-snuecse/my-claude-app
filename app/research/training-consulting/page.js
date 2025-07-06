export default function TrainingConsultingPage() {
  const activities = [
    {
      id: 1,
      date: "2016.11.18",
      organization: "서울특별시 서부교육지원청",
      type: "강의",
      title: "수행평가 어떻게 할까? - 수행평가의 사례를 통해 의미 찾기",
      category: "평가 방법론"
    },
    {
      id: 2,
      date: "2020.7.24",
      organization: "서울성원초등학교",
      type: "전문가 협의회",
      title: "학교 방송시설 개선 사업 전문가 협의회",
      category: "시설 개선"
    },
    {
      id: 3,
      date: "2020.12.14-18",
      organization: "서울교육대학교부속초등학교",
      type: "자문위원",
      title: "배움선택활동 편성을 교육과정 탄력적 운영 모델 개발 연구과제 검증 및 분석 자문",
      category: "교육과정 연구"
    },
    {
      id: 4,
      date: "2021.4.19-12.31",
      organization: "서울교육대학교부속초등학교",
      type: "자문위원",
      title: "연구학교 연구 결과의 효과성 및 만족도 검증 및 분석 자문",
      category: "교육과정 연구"
    },
    {
      id: 5,
      date: "2022.4.25-29",
      organization: "서울수색초등학교",
      type: "컨설팅 장학",
      title: "스마트 하지 구축을 통한 맞춤형 수업방법 개선",
      category: "수업 개선"
    },
    {
      id: 6,
      date: "2022.7.21",
      organization: "한국교육과정평가원",
      program: "2022년 교실수업‧평가 현장지원단(중앙지원단) 3차 워크숍",
      type: "강의",
      title: "과정중심평가 결과의 누가 기록",
      category: "평가 방법론"
    },
    {
      id: 7,
      date: "2022.7.27-9.6",
      organization: "서울특별시교육청 초등교육과",
      type: "협의회",
      title: "2022 학생평가 장학자료 개발 협의회",
      category: "평가 방법론"
    }
  ];

  const categories = [...new Set(activities.map(a => a.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">연수 및 컨설팅</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              교육 현장의 실질적인 개선을 위한 전문적인 연수와 컨설팅을 통해
              교사와 학생의 성장을 지원합니다
            </p>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">7</div>
              <div className="text-gray-600 mt-2">총 활동 건수</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">5</div>
              <div className="text-gray-600 mt-2">협력 기관</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">4</div>
              <div className="text-gray-600 mt-2">전문 분야</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">2016-2022</div>
              <div className="text-gray-600 mt-2">활동 기간</div>
            </div>
          </div>
        </div>
      </section>

      {/* 분야별 활동 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">분야별 활동 내역</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {categories.map((category) => (
              <div key={category} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-lg mr-3">{category}</span>
                  <span className="text-sm text-gray-500">
                    {activities.filter(a => a.category === category).length}건
                  </span>
                </h3>
                
                <div className="space-y-3">
                  {activities.filter(a => a.category === category).map(activity => (
                    <div key={activity.id} className="border-l-4 border-green-400 pl-4">
                      <p className="font-medium text-gray-800">{activity.title}</p>
                      <p className="text-sm text-gray-600">{activity.organization} • {activity.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 상세 활동 목록 */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">전체 활동 상세</h2>
          
          <div className="space-y-6">
            {activities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        activity.type === '강의' ? 'bg-blue-100 text-blue-700' :
                        activity.type === '자문위원' ? 'bg-purple-100 text-purple-700' :
                        activity.type === '컨설팅 장학' ? 'bg-green-100 text-green-700' :
                        activity.type === '협의회' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {activity.type}
                      </span>
                      <span className="text-gray-500 text-sm">{activity.date}</span>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {activity.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">주관:</span> {activity.organization}
                    </p>
                    
                    {activity.program && (
                      <p className="text-gray-600">
                        <span className="font-medium">프로그램:</span> {activity.program}
                      </p>
                    )}
                    
                    <div className="mt-3">
                      <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">
                        {activity.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 전문 분야 소개 */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">전문 컨설팅 분야</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-green-600 text-4xl mb-4">📝</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">평가 방법론</h3>
              <p className="text-gray-600 text-sm">
                수행평가, 과정중심평가 등 혁신적인 평가 방법 지도
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-blue-600 text-4xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">교육과정 연구</h3>
              <p className="text-gray-600 text-sm">
                교육과정 개발 및 운영 모델 연구 자문
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-purple-600 text-4xl mb-4">💡</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">수업 개선</h3>
              <p className="text-gray-600 text-sm">
                스마트 교육 환경 구축 및 맞춤형 수업 방법 컨설팅
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-orange-600 text-4xl mb-4">🏛️</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">시설 개선</h3>
              <p className="text-gray-600 text-sm">
                교육 환경 개선을 위한 시설 구축 자문
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}