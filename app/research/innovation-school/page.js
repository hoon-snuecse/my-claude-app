export default function InnovationSchoolPage() {
  const activities = [
    {
      id: 1,
      date: "2019.2.19",
      organization: "서울특별시교육청 교육연수원",
      program: "2019 초등 손에 잡히는 교원학습공동체 직무연수",
      type: "강의",
      title: "사례로 만나는 교원학습공동체1: 교실평가",
      year: 2019
    },
    {
      id: 2,
      date: "2020.12.23",
      organization: "서울특별시교육청 교육혁신과 학교혁신지원센터",
      type: "활동",
      title: "2021 학교 안 교원학습공동체 지원단",
      year: 2020
    },
    {
      id: 3,
      date: "2021.3.4",
      organization: "서울특별시교육청 교육혁신과 학교혁신지원센터",
      program: "2021 학교안교원학습공동체 업무담당자 워크숍",
      type: "강의",
      title: "교원학습공동체 연수 관리 시스템 개발- 기획 및 전망",
      year: 2021
    },
    {
      id: 4,
      date: "2021.10.20",
      organization: "서울특별시교육청 교육혁신과 학교혁신기획운영팀 학교혁신지원센터",
      type: "활동",
      title: "2022 학교 안 교원학습공동체 리더십 지원단",
      year: 2021
    },
    {
      id: 5,
      date: "2022.6.29",
      organization: "서울특별시 서부교육지원청",
      program: "공감하고 소통하는 2022 서부학부모회 네트워크 연수",
      type: "강의",
      title: "학부모회 공감 소통",
      year: 2022
    },
    {
      id: 6,
      date: "2022.11.23",
      organization: "2022 서부 초등 학교혁신 한마당",
      type: "강의",
      title: "학생자치, 회의부터 활동까지 - 학생들이 만들어가는 이야기",
      year: 2022
    },
    {
      id: 7,
      date: "2023.4.17",
      organization: "서울특별시교육청 교육혁신과",
      type: "자문회의",
      title: "서울형혁신학교 예산 성과분석 자료개발 자문회의",
      year: 2023
    },
    {
      id: 8,
      date: "2023.5.24",
      organization: "서울특별시 서부교육지원청",
      program: "'누구나 할 수 있는 학생자치 활동' 교사연수",
      type: "강의",
      title: "학생자치, 수업에서 참여까지",
      year: 2023
    }
  ];

  const yearGroups = activities.reduce((groups, activity) => {
    const year = activity.year;
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(activity);
    return groups;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">혁신학교 관련 활동</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              서울시교육청과 함께 학교 혁신을 위한 교원학습공동체 활성화와 
              학생자치 강화를 위한 다양한 활동을 수행하였습니다
            </p>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">8</div>
              <div className="text-gray-600 mt-2">총 활동 건수</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">5</div>
              <div className="text-gray-600 mt-2">강의 활동</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">2</div>
              <div className="text-gray-600 mt-2">지원단 활동</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">2019-2023</div>
              <div className="text-gray-600 mt-2">활동 기간</div>
            </div>
          </div>
        </div>
      </section>

      {/* 활동 목록 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">연도별 활동 내역</h2>
          
          {Object.keys(yearGroups).sort((a, b) => b - a).map(year => (
            <div key={year} className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-700 mb-6 flex items-center">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4">{year}년</span>
                <span className="text-lg text-gray-500">{yearGroups[year].length}건의 활동</span>
              </h3>
              
              <div className="space-y-4">
                {yearGroups[year].map((activity) => (
                  <div key={activity.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            activity.type === '강의' ? 'bg-blue-100 text-blue-700' :
                            activity.type === '활동' ? 'bg-green-100 text-green-700' :
                            'bg-purple-100 text-purple-700'
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 주요 성과 섹션 */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">주요 성과 및 기여</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-blue-600 text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">교원학습공동체 활성화</h3>
              <p className="text-gray-600">
                학교 현장의 교원학습공동체 운영을 지원하고, 효과적인 운영 시스템 개발에 기여했습니다.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-green-600 text-4xl mb-4">🏫</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">학생자치 강화</h3>
              <p className="text-gray-600">
                학생들이 주체적으로 참여하는 학생자치 활동의 확산과 발전에 기여했습니다.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-purple-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">혁신학교 성과분석</h3>
              <p className="text-gray-600">
                서울형혁신학교의 예산 성과분석을 통해 효과적인 학교 운영 방안을 제시했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}