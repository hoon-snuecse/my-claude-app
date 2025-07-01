'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [formData, setFormData] = useState({
    topic: '',
    category: 'research',
    subcategory: '',
    type: 'research-post'
  });
  const [generatedContent, setGeneratedContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const categories = {
    research: {
      label: '연구분야',
      subcategories: [
        { value: 'pisa', label: 'PISA 분석' },
        { value: 'evidence-based', label: '증거기반평가' },
        { value: 'sna', label: '사회네트워크분석' }
      ]
    },
    teaching: {
      label: '수업',
      subcategories: [
        { value: 'methodology', label: '연구방법론' },
        { value: 'statistics', label: '교육통계' },
        { value: 'assessment', label: '교육평가' }
      ]
    },
    ai: {
      label: 'AI',
      subcategories: [
        { value: 'claude', label: 'Claude AI' },
        { value: 'research-tools', label: '연구도구' },
        { value: 'education-ai', label: '교육AI' }
      ]
    },
    coffee: {
      label: 'COFFEE',
      subcategories: [
        { value: 'philosophy', label: '커피철학' },
        { value: 'reviews', label: '카페리뷰' },
        { value: 'research-coffee', label: '연구와 커피' }
      ]
    }
  };

  const contentTypes = {
    'research-post': '연구 블로그 포스트',
    'teaching-reflection': '수업 후기 및 성찰',
    'ai-insight': 'AI 인사이트',
    'coffee-essay': '커피 에세이'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'category' && { subcategory: '' })
    }));
  };

  const generateContent = async () => {
    if (!formData.topic.trim()) {
      alert('주제를 입력해주세요.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/generate-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setGeneratedContent(data);
        setEditMode(false);
      } else {
        alert(`오류: ${data.error}`);
      }
    } catch (error) {
      alert('콘텐츠 생성 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

// app/admin/page.js에서 saveContent 함수를 다음으로 교체:

const saveContent = async () => {
  if (!generatedContent) {
    alert('저장할 콘텐츠가 없습니다.');
    return;
  }

  try {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: generatedContent.content,
        metadata: generatedContent.metadata,
        category: formData.category,
        subcategory: formData.subcategory
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(`✅ 저장 완료!

📁 파일명: ${data.filename}
📂 저장 위치: posts/${data.filename}

이제 다음 위치에서 확인할 수 있습니다:
• 프로젝트 폴더의 /posts/ 디렉토리
• GitHub 푸시 후 웹사이트에서도 확인 가능`);
      
      // 폼 초기화
      setFormData({
        topic: '',
        category: 'research',
        subcategory: '',
        type: 'research-post'
      });
      setGeneratedContent(null);
    } else {
      alert(`❌ 저장 오류: ${data.error}`);
    }
  } catch (error) {
    alert('💥 저장 중 네트워크 오류가 발생했습니다.');
    console.error('Save error:', error);
  }
};

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* 헤더 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">콘텐츠 관리자</h1>
          <p className="text-gray-600">Claude AI와 함께 새로운 콘텐츠를 생성하고 관리하세요</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 콘텐츠 생성 폼 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">새 콘텐츠 생성</h2>
            
            <div className="space-y-6">
              {/* 주제 입력 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  주제 *
                </label>
                <input
                  type="text"
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  placeholder="예: AI 기반 자동 채점 시스템의 신뢰성과 공정성"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 카테고리 선택 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  카테고리 *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {Object.entries(categories).map(([key, cat]) => (
                    <option key={key} value={key}>{cat.label}</option>
                  ))}
                </select>
              </div>

              {/* 서브카테고리 선택 */}
              {categories[formData.category]?.subcategories && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    세부 분야
                  </label>
                  <select
                    name="subcategory"
                    value={formData.subcategory}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">선택하세요</option>
                    {categories[formData.category].subcategories.map((sub) => (
                      <option key={sub.value} value={sub.value}>{sub.label}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* 콘텐츠 타입 선택 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  콘텐츠 타입 *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {Object.entries(contentTypes).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>

              {/* 생성 버튼 */}
              <button
                onClick={generateContent}
                disabled={loading || !formData.topic.trim()}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-md font-medium hover:from-blue-700 hover:to-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Claude와 함께 생성 중...
                  </div>
                ) : (
                  '🤖 Claude AI와 함께 생성하기'
                )}
              </button>
            </div>

            {/* 생성 팁 */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-medium text-blue-800 mb-2">💡 생성 팁</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 구체적이고 명확한 주제를 입력하세요</li>
                <li>• 연구 데이터나 특정 사례를 언급하면 더 풍부한 내용이 생성됩니다</li>
                <li>• 생성된 콘텐츠는 편집 가능하니 자유롭게 수정하세요</li>
              </ul>
            </div>
          </div>

          {/* 생성된 콘텐츠 미리보기 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">생성된 콘텐츠</h2>
              {generatedContent && (
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditMode(!editMode)}
                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                  >
                    {editMode ? '미리보기' : '편집'}
                  </button>
                  <button
                    onClick={saveContent}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    저장하기
                  </button>
                </div>
              )}
            </div>

            {!generatedContent ? (
              <div className="text-center py-12 text-gray-500">
                <div className="text-6xl mb-4">🤖</div>
                <p>Claude AI와 함께 새로운 콘텐츠를 생성해보세요!</p>
                <p className="text-sm mt-2">주제를 입력하고 생성 버튼을 클릭하세요.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* 메타데이터 */}
                <div className="bg-gray-50 rounded-lg p-4 border">
                  <h3 className="font-semibold text-gray-800 mb-3">📋 메타데이터</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-600">제목:</span>
                      <p className="text-gray-800">{generatedContent.metadata.title}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">예상 읽기 시간:</span>
                      <p className="text-gray-800">{generatedContent.metadata.readingTime}분</p>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-medium text-gray-600">요약:</span>
                      <p className="text-gray-800">{generatedContent.metadata.summary}</p>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-medium text-gray-600">태그:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {generatedContent.metadata.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 콘텐츠 */}
                <div className="border border-gray-200 rounded-lg">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 rounded-t-lg">
                    <h3 className="font-semibold text-gray-800">📝 콘텐츠</h3>
                  </div>
                  <div className="p-4">
                    {editMode ? (
                      <textarea
                        value={generatedContent.content}
                        onChange={(e) => setGeneratedContent(prev => ({
                          ...prev,
                          content: e.target.value
                        }))}
                        className="w-full h-96 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                        placeholder="생성된 콘텐츠를 편집하세요..."
                      />
                    ) : (
                      <div className="prose max-w-none">
                        <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                          {generatedContent.content}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 생성 정보 */}
                <div className="text-xs text-gray-500 border-t pt-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span>
                      생성 시간: {new Date(generatedContent.generatedAt).toLocaleString('ko-KR')}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Claude AI로 생성됨
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}