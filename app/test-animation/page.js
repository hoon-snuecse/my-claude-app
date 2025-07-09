'use client';

import { useState } from 'react';

export default function TestAnimationPage() {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">애니메이션 테스트 페이지</h1>
      
      {/* CSS 애니메이션 테스트 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. CSS 애니메이션 (빨간 박스가 움직여야 함)</h2>
        <div 
          className="w-20 h-20 bg-red-500"
          style={{
            animation: isAnimating ? 'bounce 2s ease-in-out infinite' : 'none'
          }}
        />
      </div>

      {/* Transform 애니메이션 테스트 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Transform 애니메이션 (파란 박스가 회전해야 함)</h2>
        <div 
          className="w-20 h-20 bg-blue-500"
          style={{
            animation: isAnimating ? 'spin 3s linear infinite' : 'none'
          }}
        />
      </div>

      {/* 커스텀 애니메이션 테스트 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Float 애니메이션 (초록 박스가 떠다녀야 함)</h2>
        <div 
          className="w-20 h-20 bg-green-500"
          style={{
            animation: isAnimating ? 'float-test 4s ease-in-out infinite' : 'none'
          }}
        />
      </div>

      {/* SVG 애니메이션 테스트 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. SVG 애니메이션 (보라색 원이 움직여야 함)</h2>
        <svg width="200" height="100" className="border">
          <circle 
            cx="50" 
            cy="50" 
            r="20" 
            fill="purple"
            style={{
              animation: isAnimating ? 'move-svg 3s ease-in-out infinite' : 'none'
            }}
          />
        </svg>
      </div>

      {/* 애니메이션 컨트롤 */}
      <button
        onClick={() => setIsAnimating(!isAnimating)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        애니메이션 {isAnimating ? '중지' : '시작'}
      </button>

      {/* 인라인 스타일로 애니메이션 정의 */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float-test {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(20px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-15px) translateX(15px); }
        }
        
        @keyframes move-svg {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(100px); }
        }
      `}</style>

      {/* 시스템 정보 - 클라이언트 사이드에서만 렌더링 */}
      <div className="mt-8 p-4 bg-white rounded shadow">
        <h3 className="font-semibold mb-2">디버그 정보:</h3>
        <ul className="text-sm space-y-1">
          <li>애니메이션 상태: {isAnimating ? '활성' : '비활성'}</li>
        </ul>
      </div>
    </div>
  );
}