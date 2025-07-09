'use client';

export default function HistoricBlueprintBackgroundSimple({ opacity = 0.08 }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* 브루클린 다리 */}
      <svg 
        className="absolute"
        style={{ 
          top: '10%', 
          left: '5%', 
          opacity: opacity
        }}
        width="300" 
        height="200" 
        viewBox="0 0 300 200"
      >
        <g stroke="rgba(30, 58, 138, 0.4)" fill="none" strokeWidth="1.5">
          {/* 타워 */}
          <rect x="50" y="60" width="20" height="100" />
          <rect x="230" y="60" width="20" height="100" />
          
          {/* 케이블 */}
          <path d="M20 100 Q60 40 150 30 Q240 40 280 100" />
          
          {/* 데크 */}
          <line x1="20" y1="140" x2="280" y2="140" />
        </g>
        
        <text x="150" y="180" textAnchor="middle" fill="rgba(30, 58, 138, 0.3)" fontSize="10">
          BROOKLYN BRIDGE
        </text>
      </svg>

      {/* 보스턴 도서관 */}
      <svg 
        className="absolute"
        style={{ 
          bottom: '20%', 
          right: '10%', 
          opacity: opacity
        }}
        width="250" 
        height="180" 
        viewBox="0 0 250 180"
      >
        <g stroke="rgba(30, 58, 138, 0.4)" fill="none" strokeWidth="1.5">
          {/* 건물 외곽 */}
          <rect x="30" y="30" width="190" height="120" />
          
          {/* 중앙 홀 */}
          <rect x="80" y="60" width="90" height="60" />
          
          {/* 기둥들 */}
          <circle cx="100" cy="90" r="3" />
          <circle cx="130" cy="90" r="3" />
          <circle cx="160" cy="90" r="3" />
          <circle cx="190" cy="90" r="3" />
        </g>
        
        <text x="125" y="165" textAnchor="middle" fill="rgba(30, 58, 138, 0.3)" fontSize="10">
          BOSTON LIBRARY
        </text>
      </svg>

      {/* 간단한 애니메이션 테스트 */}
      <div 
        className="absolute w-4 h-4 bg-blue-500 rounded-full animate-ping"
        style={{ top: '50%', left: '50%', opacity: 0.3 }}
      />
    </div>
  );
}