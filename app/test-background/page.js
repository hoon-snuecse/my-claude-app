'use client';

import { useState } from 'react';
import TestBackground from '../components/TestBackground';
import HistoricBlueprintBackground from '../components/HistoricBlueprintBackground';

export default function TestBackgroundPage() {
  const [showWhich, setShowWhich] = useState('test');

  return (
    <div className="min-h-screen relative">
      {/* 디버그 정보 */}
      <div className="fixed top-0 right-0 bg-black text-white p-2 z-50 text-xs">
        현재 배경: {showWhich}
      </div>

      {/* 배경 선택 */}
      {showWhich === 'test' && <TestBackground />}
      {showWhich === 'historic' && <HistoricBlueprintBackground />}
      {showWhich === 'none' && null}

      {/* 메인 콘텐츠 */}
      <div className="relative z-20 p-8">
        <h1 className="text-3xl font-bold mb-8">배경 테스트 페이지</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">배경 선택</h2>
          <div className="space-x-4">
            <button
              onClick={() => setShowWhich('test')}
              className={`px-4 py-2 rounded ${
                showWhich === 'test' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              테스트 배경 (빨간 사각형)
            </button>
            <button
              onClick={() => setShowWhich('historic')}
              className={`px-4 py-2 rounded ${
                showWhich === 'historic' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              역사적 건축도면
            </button>
            <button
              onClick={() => setShowWhich('none')}
              className={`px-4 py-2 rounded ${
                showWhich === 'none' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              배경 없음
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">확인 사항</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>"테스트 배경"을 선택하면 빨간 사각형이 보여야 함</li>
            <li>"역사적 건축도면"을 선택하면 건축 도면들이 보여야 함</li>
            <li>우측 상단에 현재 선택된 배경이 표시됨</li>
          </ul>
        </div>

        {/* z-index 테스트 */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded relative z-10">
            <p>z-10</p>
          </div>
          <div className="bg-green-100 p-4 rounded relative z-20">
            <p>z-20</p>
          </div>
          <div className="bg-red-100 p-4 rounded relative z-30">
            <p>z-30</p>
          </div>
        </div>
      </div>
    </div>
  );
}