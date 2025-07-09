'use client';

import { useState, useEffect } from 'react';
import BlueprintBackground from '../components/BlueprintBackground';
import HistoricBlueprintBackground from '../components/HistoricBlueprintBackground';
import HistoricBlueprintBackgroundSimple from '../components/HistoricBlueprintBackgroundSimple';
import DaVinciStyleBackground from '../components/DaVinciStyleBackground';

export default function TestBlueprintPage() {
  const [backgroundType, setBackgroundType] = useState('davinci');
  const [opacity, setOpacity] = useState(0.2);
  const [animationSpeed, setAnimationSpeed] = useState('normal');
  const [colorTheme, setColorTheme] = useState('blue');
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    console.log('TestBlueprintPage mounted');
    console.log('Current state:', { backgroundType, opacity, animationSpeed, colorTheme });
  }, []);

  useEffect(() => {
    console.log('State changed:', { backgroundType, opacity, animationSpeed, colorTheme });
  }, [backgroundType, opacity, animationSpeed, colorTheme]);

  return (
    <div className="min-h-screen relative">
      {/* 디버그 정보 */}
      <div className="fixed top-0 left-0 bg-red-600 text-white p-2 z-50 text-xs">
        배경: {backgroundType} | 투명도: {opacity}
      </div>

      {/* 배경 컴포넌트 - z-index 명시 */}
      <div className="fixed inset-0 z-0">
        {backgroundType === 'davinci' && (
          <DaVinciStyleBackground 
            opacity={opacity}
            animationSpeed={animationSpeed}
          />
        )}
        {backgroundType === 'simple' && (
          <HistoricBlueprintBackgroundSimple 
            opacity={opacity}
          />
        )}
        {backgroundType === 'historic' && (
          <HistoricBlueprintBackground 
            opacity={opacity}
            animationSpeed={animationSpeed}
            colorTheme={colorTheme}
          />
        )}
        {backgroundType === 'normal' && (
          <BlueprintBackground />
        )}
      </div>

      {/* 그리드 오버레이 (참조용) */}
      {showGrid && (
        <div 
          className="fixed inset-0 pointer-events-none z-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      )}

      {/* 메인 콘텐츠 */}
      <div className="relative z-20">
        {/* 헤더 */}
        <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-30">
          <div className="container-custom py-4">
            <h1 className="text-2xl font-bold text-slate-900">역사적 건축도면 배경 테스트</h1>
            <p className="text-sm text-slate-600 mt-1">다양한 설정을 조정하여 최적의 배경을 찾아보세요</p>
          </div>
        </div>

        {/* 컨트롤 패널 */}
        <div className="container-custom py-8">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">배경 설정</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 배경 타입 선택 */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  배경 타입
                </label>
                <select
                  value={backgroundType}
                  onChange={(e) => setBackgroundType(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                >
                  <option value="davinci">다빈치 스타일 (복잡)</option>
                  <option value="simple">심플 건축도면</option>
                  <option value="historic">역사적 건축도면</option>
                  <option value="normal">기존 도면</option>
                </select>
              </div>

              {/* 투명도 조절 */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  투명도: {opacity.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0.05"
                  max="0.3"
                  step="0.01"
                  value={opacity}
                  onChange={(e) => setOpacity(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* 애니메이션 속도 */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  애니메이션 속도
                </label>
                <select
                  value={animationSpeed}
                  onChange={(e) => setAnimationSpeed(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                >
                  <option value="slow">느림</option>
                  <option value="normal">보통</option>
                  <option value="fast">빠름</option>
                  <option value="none">없음</option>
                </select>
              </div>

              {/* 색상 테마 */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  색상 테마
                </label>
                <select
                  value={colorTheme}
                  onChange={(e) => setColorTheme(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                  disabled={backgroundType === 'normal' || backgroundType === 'simple'}
                >
                  <option value="blue">블루 (기본)</option>
                  <option value="sepia">세피아</option>
                  <option value="mono">흑백</option>
                </select>
              </div>
            </div>

            {/* 추가 옵션 */}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showGrid}
                  onChange={(e) => setShowGrid(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-slate-600">참조 그리드 표시</span>
              </label>
            </div>
          </div>

          {/* 샘플 콘텐츠 */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 텍스트 콘텐츠 */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">가독성 테스트</h2>
              <p className="text-slate-600 mb-4">
                배경의 투명도와 애니메이션이 텍스트 가독성에 미치는 영향을 확인하세요.
                역사적 건축도면은 브루클린 다리, 보스턴 공공 도서관, 카네기 홀 등의
                실제 설계 도면을 참고하여 제작되었습니다.
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h3 className="font-semibold mb-2">브루클린 다리 (1883)</h3>
                  <p className="text-sm text-slate-600">
                    John A. Roebling이 설계한 현수교의 걸작. 케이블 구조와 고딕 양식의
                    타워가 특징적입니다.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold mb-2">보스턴 공공 도서관 (1895)</h3>
                  <p className="text-sm text-slate-600">
                    McKim, Mead & White가 설계한 보자르 양식의 건축물. "모든 사람에게
                    무료로"라는 모토가 새겨져 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 이미지 콘텐츠 */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">시각적 조화</h2>
              <div className="space-y-4">
                <div className="h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-slate-600">이미지 영역</span>
                </div>
                <p className="text-sm text-slate-600">
                  배경 도면이 다른 시각적 요소들과 어떻게 조화를 이루는지 확인하세요.
                </p>
              </div>
            </div>
          </div>

          {/* 모바일 뷰 시뮬레이션 */}
          <div className="mt-8 bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-bold mb-4">모바일 뷰 시뮬레이션</h2>
            <div className="mx-auto max-w-sm border-2 border-slate-300 rounded-xl overflow-hidden">
              <div className="bg-slate-800 text-white text-center py-2 text-xs">
                iPhone 14 Pro
              </div>
              <div className="bg-slate-50 h-96 relative overflow-hidden">
                <div className="p-4">
                  <h3 className="font-bold mb-2">모바일 환경</h3>
                  <p className="text-sm text-slate-600">
                    작은 화면에서도 배경이 적절히 표시되는지 확인하세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}