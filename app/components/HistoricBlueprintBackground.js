'use client';

import { useEffect } from 'react';

export default function HistoricBlueprintBackground({ 
  opacity = 0.08, 
  animationSpeed = 'normal',
  colorTheme = 'blue' 
}) {
  // 디버깅용 로그
  useEffect(() => {
    console.log('HistoricBlueprintBackground props:', { opacity, animationSpeed, colorTheme });
  }, [opacity, animationSpeed, colorTheme]);

  // 애니메이션 속도 매핑
  const speedMap = {
    slow: '80s',
    normal: '40s',
    fast: '20s',
    none: '0s'
  };

  // 색상 테마 매핑 - 인라인 스타일로 변경
  const colorMap = {
    blue: {
      stroke: 'rgba(30, 58, 138, 0.3)', // blue-900
      fill: 'rgba(30, 58, 138, 0.05)',
      text: 'rgba(30, 58, 138, 0.4)'
    },
    sepia: {
      stroke: 'rgba(120, 53, 15, 0.3)', // amber-900
      fill: 'rgba(120, 53, 15, 0.05)',
      text: 'rgba(120, 53, 15, 0.4)'
    },
    mono: {
      stroke: 'rgba(51, 65, 85, 0.3)', // slate-700
      fill: 'rgba(51, 65, 85, 0.05)',
      text: 'rgba(51, 65, 85, 0.4)'
    }
  };

  const colors = colorMap[colorTheme];
  const duration = speedMap[animationSpeed];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* 브루클린 다리 - 케이블 구조도 (1883) */}
      <svg 
        className="absolute"
        style={{ 
          top: '5%', 
          left: '10%', 
          opacity: opacity,
          animation: animationSpeed !== 'none' ? `float-historic ${duration} ease-in-out infinite` : 'none',
          animationDelay: '0s'
        }}
        width="320" 
        height="220" 
        viewBox="0 0 320 220"
      >
        <g stroke={colors.stroke} fill={colors.fill}>
          {/* 타워 */}
          <rect x="60" y="80" width="20" height="120" strokeWidth="1.5"/>
          <rect x="240" y="80" width="20" height="120" strokeWidth="1.5"/>
        
        {/* 고딕 아치 */}
        <path d="M60 100 Q70 90 80 100" fill="none" strokeWidth="1.2"/>
        <path d="M240 100 Q250 90 260 100" fill="none" strokeWidth="1.2"/>
        
        {/* 메인 케이블 */}
        <path d="M30 120 Q70 60 160 50 Q250 60 290 120" fill="none" strokeWidth="2"/>
        
        {/* 서스펜더 케이블 */}
        {[...Array(15)].map((_, i) => (
          <line 
            key={i}
            x1={40 + i * 17} 
            y1={120 - Math.sin((i / 14) * Math.PI) * 60}
            x2={40 + i * 17} 
            y2="180"
            strokeWidth="0.5"
          />
        ))}
        
        {/* 도로 데크 */}
        <rect x="30" y="180" width="260" height="8" strokeWidth="1.2"/>
        
        {/* 타이틀과 날짜 */}
        <text x="160" y="25" fontSize="9" textAnchor="middle" fill={colors.text}>
          BROOKLYN BRIDGE
        </text>
        <text x="160" y="38" fontSize="7" textAnchor="middle" fill={colors.text}>
          John A. Roebling, 1883
        </text>
        
        {/* 치수선 */}
        <line x1="30" y1="210" x2="290" y2="210" strokeWidth="0.5" strokeDasharray="2,2"/>
        <text x="160" y="208" fontSize="6" textAnchor="middle" fill={colors.text}>
          1,825 m
        </text>
        </g>
      </svg>

      {/* 보스턴 공공 도서관 - 평면도 (1895) */}
      <svg 
        className="absolute"
        style={{ 
          bottom: '15%', 
          right: '8%', 
          opacity: opacity,
          animation: animationSpeed !== 'none' ? `float-historic ${duration} ease-in-out infinite` : 'none',
          animationDelay: '10s',
          stroke: colors.stroke,
          fill: colors.fill
        }}
        width="280" 
        height="200" 
        viewBox="0 0 280 200"
      >
        {/* 외벽 */}
        <rect x="30" y="40" width="220" height="140" strokeWidth="2"/>
        
        {/* 중앙 홀 */}
        <rect x="90" y="70" width="100" height="80" strokeWidth="1.2"/>
        
        {/* 열람실들 */}
        <rect x="40" y="50" width="40" height="30" strokeWidth="1"/>
        <rect x="200" y="50" width="40" height="30" strokeWidth="1"/>
        <rect x="40" y="140" width="40" height="30" strokeWidth="1"/>
        <rect x="200" y="140" width="40" height="30" strokeWidth="1"/>
        
        {/* 기둥들 */}
        {[...Array(6)].map((_, i) => (
          <circle key={i} cx={100 + i * 16} cy="90" r="3" strokeWidth="1"/>
        ))}
        {[...Array(6)].map((_, i) => (
          <circle key={i} cx={100 + i * 16} cy="130" r="3" strokeWidth="1"/>
        ))}
        
        {/* 입구 */}
        <rect x="130" y="175" width="20" height="10" fill="none" strokeWidth="1.5"/>
        
        {/* 타이틀 */}
        <text x="140" y="20" fontSize="9" textAnchor="middle" fill={colors.text}>
          BOSTON PUBLIC LIBRARY
        </text>
        <text x="140" y="32" fontSize="7" textAnchor="middle" fill={colors.text}>
          McKim, Mead & White, 1895
        </text>
        
        {/* 방향 표시 */}
        <text x="15" y="110" fontSize="8" fill={colors.text}>N</text>
        <path d="M12 115 L18 125 L24 115" fill="none" strokeWidth="1"/>
      </svg>

      {/* 카네기 홀 - 단면도 (1891) */}
      <svg 
        className="absolute"
        style={{ 
          top: '40%', 
          left: '45%', 
          opacity: opacity,
          animation: animationSpeed !== 'none' ? `float-historic ${duration} ease-in-out infinite` : 'none',
          animationDelay: '20s',
          stroke: colors.stroke,
          fill: colors.fill
        }}
        width="240" 
        height="260" 
        viewBox="0 0 240 260"
      >
        {/* 건물 외곽 */}
        <rect x="40" y="80" width="160" height="160" strokeWidth="1.5"/>
        
        {/* 메인 홀 - 타원형 천장 */}
        <ellipse cx="120" cy="140" rx="60" ry="40" fill="none" strokeWidth="1.2"/>
        
        {/* 무대 */}
        <rect x="90" y="180" width="60" height="20" strokeWidth="1"/>
        
        {/* 발코니 층들 */}
        <line x1="50" y1="120" x2="80" y2="120" strokeWidth="1"/>
        <line x1="160" y1="120" x2="190" y2="120" strokeWidth="1"/>
        <line x1="50" y1="100" x2="70" y2="100" strokeWidth="1"/>
        <line x1="170" y1="100" x2="190" y2="100" strokeWidth="1"/>
        
        {/* 음향 반사판 */}
        <path d="M80 90 Q120 70 160 90" fill="none" strokeWidth="1" strokeDasharray="2,2"/>
        
        {/* 지붕 */}
        <path d="M40 80 L120 40 L200 80" fill="none" strokeWidth="1.5"/>
        
        {/* 타이틀 */}
        <text x="120" y="20" fontSize="9" textAnchor="middle" fill={colors.text}>
          CARNEGIE HALL
        </text>
        <text x="120" y="32" fontSize="7" textAnchor="middle" fill={colors.text}>
          William Burnet Tuthill, 1891
        </text>
        
        {/* 단면 표시 */}
        <text x="210" y="160" fontSize="7" fill={colors.text}>
          SEC A-A
        </text>
      </svg>

      {/* 크리스탈 팰리스 - 구조 상세 (1851) */}
      <svg 
        className="absolute"
        style={{ 
          top: '20%', 
          right: '35%', 
          opacity: opacity * 0.8,
          animation: animationSpeed !== 'none' ? `float-historic ${duration} ease-in-out infinite` : 'none',
          animationDelay: '30s',
          stroke: colors.stroke,
          fill: colors.fill
        }}
        width="200" 
        height="150" 
        viewBox="0 0 200 150"
      >
        {/* 모듈식 철골 구조 */}
        {[...Array(5)].map((_, i) => (
          <g key={i}>
            <rect x={30 + i * 28} y="40" width="24" height="80" fill="none" strokeWidth="1"/>
            <line x1={30 + i * 28} y1="40" x2={54 + i * 28} y2="40" strokeWidth="0.5"/>
            <line x1={30 + i * 28} y1="80" x2={54 + i * 28} y2="80" strokeWidth="0.5"/>
            <line x1={42 + i * 28} y1="40" x2={42 + i * 28} y2="120" strokeWidth="0.8"/>
          </g>
        ))}
        
        {/* 아치형 지붕 */}
        <path d="M30 40 Q100 20 170 40" fill="none" strokeWidth="1.5"/>
        
        {/* 타이틀 */}
        <text x="100" y="135" fontSize="8" textAnchor="middle" fill={colors.text}>
          CRYSTAL PALACE - Joseph Paxton, 1851
        </text>
      </svg>

      {/* 판테온 - 돔 단면 (126 AD) */}
      <svg 
        className="absolute"
        style={{ 
          bottom: '35%', 
          left: '20%', 
          opacity: opacity * 0.9,
          animation: animationSpeed !== 'none' ? `float-historic ${duration} ease-in-out infinite` : 'none',
          animationDelay: '15s',
          stroke: colors.stroke,
          fill: colors.fill
        }}
        width="180" 
        height="180" 
        viewBox="0 0 180 180"
      >
        {/* 돔 외곽 */}
        <path d="M30 120 A60 60 0 0 1 150 120" fill="none" strokeWidth="1.5"/>
        
        {/* 내부 돔 */}
        <path d="M40 120 A50 50 0 0 1 140 120" fill="none" strokeWidth="1"/>
        
        {/* 오쿨루스 (천창) */}
        <circle cx="90" cy="60" r="8" fill="none" strokeWidth="1.2"/>
        
        {/* 코퍼 (격자 천장) */}
        {[...Array(5)].map((_, i) => (
          <rect key={i} x={50 + i * 16} y={75 + i * 3} width="12" height="12" fill="none" strokeWidth="0.5"/>
        ))}
        
        {/* 기둥 */}
        <rect x="30" y="120" width="8" height="40" strokeWidth="1"/>
        <rect x="142" y="120" width="8" height="40" strokeWidth="1"/>
        
        {/* 타이틀 */}
        <text x="90" y="170" fontSize="7" textAnchor="middle" fill={colors.text}>
          PANTHEON - Rome, 126 AD
        </text>
      </svg>
    </div>
  );
}