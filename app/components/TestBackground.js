'use client';

export default function TestBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* 간단한 테스트 SVG */}
      <svg 
        className="absolute"
        style={{ 
          top: '10%', 
          left: '10%', 
          opacity: 0.5,
          stroke: 'red',
          fill: 'none'
        }}
        width="200" 
        height="200" 
        viewBox="0 0 200 200"
      >
        <rect x="50" y="50" width="100" height="100" strokeWidth="2"/>
        <text x="100" y="100" textAnchor="middle" fill="red" fontSize="20">
          TEST
        </text>
      </svg>
      
      {/* 고정된 텍스트 */}
      <div 
        className="absolute"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'blue',
          fontSize: '24px',
          fontWeight: 'bold'
        }}
      >
        배경 테스트
      </div>
    </div>
  );
}