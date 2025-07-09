'use client';

import SimpleTestBackground from '../components/SimpleTestBackground';

export default function TestVisiblePage() {
  return (
    <div className="min-h-screen relative">
      {/* 배경 */}
      <SimpleTestBackground />
      
      {/* 콘텐츠 */}
      <div className="relative z-10 p-8 bg-white/80">
        <h1 className="text-3xl font-bold mb-4">가시성 테스트</h1>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded">
            <h2 className="font-semibold mb-2">확인 사항:</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>파란색 배경이 전체 화면에 보여야 함</li>
              <li>빨간색 큰 사각형이 왼쪽 위에 보여야 함</li>
              <li>초록색 박스가 화면 중앙에서 튀어오르는 애니메이션</li>
            </ol>
          </div>
          
          <div className="p-4 bg-yellow-100 rounded">
            <p className="font-semibold">이 요소들이 보이지 않는다면:</p>
            <ul className="list-disc list-inside mt-2">
              <li>브라우저 콘솔(F12)에서 에러 확인</li>
              <li>Elements 탭에서 DOM 구조 확인</li>
              <li>z-index 문제일 수 있음</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}