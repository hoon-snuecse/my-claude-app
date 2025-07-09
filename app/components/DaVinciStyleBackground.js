'use client';

export default function DaVinciStyleBackground({ opacity = 0.2, animationSpeed = 'normal' }) {
  const speedMap = {
    slow: '120s',
    normal: '80s', 
    fast: '40s',
    none: '0s'
  };

  const duration = speedMap[animationSpeed];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 비트루비우스적 인체 도면 스타일 */}
      <svg 
        className="absolute"
        style={{ 
          top: '5%', 
          left: '8%', 
          opacity: opacity,
          animation: animationSpeed !== 'none' ? `float-historic ${duration} ease-in-out infinite` : 'none',
          animationDelay: '0s'
        }}
        width="400" 
        height="400" 
        viewBox="0 0 400 400"
      >
        <g stroke="rgba(92, 64, 51, 0.6)" fill="none" strokeWidth="0.8">
          {/* 외부 원 */}
          <circle cx="200" cy="200" r="180" strokeWidth="1.2"/>
          <circle cx="200" cy="200" r="160" strokeWidth="0.6" strokeDasharray="2,2"/>
          
          {/* 내부 사각형 */}
          <rect x="60" y="60" width="280" height="280" strokeWidth="1"/>
          
          {/* 황금비 분할선 */}
          <line x1="60" y1="200" x2="340" y2="200" strokeWidth="0.5"/>
          <line x1="200" y1="60" x2="200" y2="340" strokeWidth="0.5"/>
          <line x1="60" y1="140" x2="340" y2="140" strokeWidth="0.3" strokeDasharray="3,3"/>
          <line x1="60" y1="260" x2="340" y2="260" strokeWidth="0.3" strokeDasharray="3,3"/>
          <line x1="140" y1="60" x2="140" y2="340" strokeWidth="0.3" strokeDasharray="3,3"/>
          <line x1="260" y1="60" x2="260" y2="340" strokeWidth="0.3" strokeDasharray="3,3"/>
          
          {/* 대각선 */}
          <line x1="60" y1="60" x2="340" y2="340" strokeWidth="0.4" opacity="0.5"/>
          <line x1="340" y1="60" x2="60" y2="340" strokeWidth="0.4" opacity="0.5"/>
          
          {/* 복잡한 기하학적 구조 */}
          <polygon points="200,80 280,160 250,270 150,270 120,160" strokeWidth="0.8"/>
          <polygon points="200,120 240,180 220,240 180,240 160,180" strokeWidth="0.6"/>
          
          {/* 원형 분할 */}
          {[...Array(12)].map((_, i) => (
            <line 
              key={i}
              x1="200" 
              y1="200" 
              x2={200 + 180 * Math.cos((i * 30) * Math.PI / 180)}
              y2={200 + 180 * Math.sin((i * 30) * Math.PI / 180)}
              strokeWidth="0.3"
              opacity="0.4"
            />
          ))}
          
          {/* 중심 메커니즘 */}
          <circle cx="200" cy="200" r="40" strokeWidth="0.8"/>
          <circle cx="200" cy="200" r="30" strokeWidth="0.6"/>
          <circle cx="200" cy="200" r="20" strokeWidth="0.6"/>
          
          {/* 작은 기어 톱니 */}
          {[...Array(8)].map((_, i) => (
            <circle 
              key={i}
              cx={200 + 35 * Math.cos((i * 45) * Math.PI / 180)}
              cy={200 + 35 * Math.sin((i * 45) * Math.PI / 180)}
              r="5"
              strokeWidth="0.6"
            />
          ))}
        </g>
        
        {/* 주석 텍스트 */}
        <g fill="rgba(92, 64, 51, 0.5)" fontSize="8" fontFamily="serif">
          <text x="50" y="30" transform="rotate(-5 50 30)">Proportio Divina</text>
          <text x="300" y="380" fontSize="6">MDXIX</text>
          <text x="200" y="395" textAnchor="middle" fontSize="7">Homo ad Circulum</text>
        </g>
      </svg>

      {/* 비행 기계 설계도 */}
      <svg 
        className="absolute"
        style={{ 
          top: '15%', 
          right: '5%', 
          opacity: opacity * 0.9,
          animation: animationSpeed !== 'none' ? `float-historic ${duration} ease-in-out infinite` : 'none',
          animationDelay: '10s'
        }}
        width="450" 
        height="350" 
        viewBox="0 0 450 350"
      >
        <g stroke="rgba(92, 64, 51, 0.6)" fill="none" strokeWidth="0.8">
          {/* 날개 구조 */}
          <path d="M225 100 L100 150 L50 200 L100 180 L225 140" strokeWidth="1"/>
          <path d="M225 100 L350 150 L400 200 L350 180 L225 140" strokeWidth="1"/>
          
          {/* 날개 세부 구조 */}
          {[...Array(10)].map((_, i) => (
            <g key={i}>
              <line x1={100 + i * 12} y1={150 - i * 3} x2={90 + i * 13} y2={180 - i * 2} strokeWidth="0.5"/>
              <line x1={350 - i * 12} y1={150 - i * 3} x2={360 - i * 13} y2={180 - i * 2} strokeWidth="0.5"/>
            </g>
          ))}
          
          {/* 중앙 몸체 */}
          <ellipse cx="225" cy="120" rx="30" ry="60" strokeWidth="1"/>
          <rect x="210" y="100" width="30" height="80" strokeWidth="0.8"/>
          
          {/* 기계 장치 */}
          <circle cx="225" cy="140" r="15" strokeWidth="0.8"/>
          <circle cx="225" cy="140" r="10" strokeWidth="0.6"/>
          <circle cx="225" cy="140" r="5" strokeWidth="0.6"/>
          
          {/* 연결 구조 */}
          <line x1="210" y1="140" x2="100" y2="160" strokeWidth="0.6"/>
          <line x1="240" y1="140" x2="350" y2="160" strokeWidth="0.6"/>
          
          {/* 꼬리 구조 */}
          <path d="M225 180 L200 250 L225 240 L250 250 Z" strokeWidth="0.8"/>
          
          {/* 측정선 */}
          <line x1="50" y1="280" x2="400" y2="280" strokeWidth="0.4" strokeDasharray="2,2"/>
          <line x1="50" y1="270" x2="50" y2="290" strokeWidth="0.6"/>
          <line x1="400" y1="270" x2="400" y2="290" strokeWidth="0.6"/>
          
          {/* 각도 표시 */}
          <path d="M225 140 L270 140 A45 45 0 0 1 260 175" fill="none" strokeWidth="0.5"/>
          <path d="M225 140 L180 140 A45 45 0 0 0 190 175" fill="none" strokeWidth="0.5"/>
        </g>
        
        {/* 주석 */}
        <g fill="rgba(92, 64, 51, 0.5)" fontSize="9" fontFamily="serif" fontStyle="italic">
          <text x="60" y="40" transform="rotate(-10 60 40)">Machina Volans</text>
          <text x="225" y="300" textAnchor="middle" fontSize="7">ala extensio CCCL</text>
          <text x="380" y="330" fontSize="6">Leonardo f.</text>
        </g>
      </svg>

      {/* 수력 기계 설계도 */}
      <svg 
        className="absolute"
        style={{ 
          bottom: '10%', 
          left: '15%', 
          opacity: opacity * 0.85,
          animation: animationSpeed !== 'none' ? `float-historic ${duration} ease-in-out infinite` : 'none',
          animationDelay: '20s'
        }}
        width="380" 
        height="320" 
        viewBox="0 0 380 320"
      >
        <g stroke="rgba(92, 64, 51, 0.6)" fill="none" strokeWidth="0.8">
          {/* 물레방아 */}
          <circle cx="190" cy="160" r="80" strokeWidth="1.2"/>
          <circle cx="190" cy="160" r="70" strokeWidth="0.6"/>
          
          {/* 물레방아 살 */}
          {[...Array(16)].map((_, i) => (
            <g key={i}>
              <line 
                x1="190" 
                y1="160" 
                x2={190 + 80 * Math.cos((i * 22.5) * Math.PI / 180)}
                y2={160 + 80 * Math.sin((i * 22.5) * Math.PI / 180)}
                strokeWidth="0.8"
              />
              <rect 
                x={190 + 60 * Math.cos((i * 22.5) * Math.PI / 180) - 10}
                y={160 + 60 * Math.sin((i * 22.5) * Math.PI / 180) - 5}
                width="20"
                height="10"
                transform={`rotate(${i * 22.5} ${190 + 60 * Math.cos((i * 22.5) * Math.PI / 180)} ${160 + 60 * Math.sin((i * 22.5) * Math.PI / 180)})`}
                strokeWidth="0.6"
              />
            </g>
          ))}
          
          {/* 중심축 */}
          <circle cx="190" cy="160" r="15" strokeWidth="1"/>
          <circle cx="190" cy="160" r="8" strokeWidth="0.8"/>
          
          {/* 기어 시스템 */}
          <circle cx="280" cy="160" r="40" strokeWidth="0.8"/>
          <circle cx="280" cy="160" r="35" strokeWidth="0.6"/>
          {[...Array(12)].map((_, i) => (
            <circle 
              key={i}
              cx={280 + 37.5 * Math.cos((i * 30) * Math.PI / 180)}
              cy={160 + 37.5 * Math.sin((i * 30) * Math.PI / 180)}
              r="3"
              strokeWidth="0.6"
            />
          ))}
          
          {/* 연결 샤프트 */}
          <rect x="205" y="155" width="60" height="10" strokeWidth="0.8"/>
          
          {/* 수로 */}
          <path d="M50 80 Q100 90 150 100 L190 120" strokeWidth="1"/>
          <path d="M190 200 L230 220 Q280 230 330 240" strokeWidth="1"/>
          
          {/* 물 흐름 표시 */}
          {[...Array(5)].map((_, i) => (
            <path 
              key={i}
              d={`M${60 + i * 25} ${85 + i * 3} Q${70 + i * 25} ${90 + i * 3} ${80 + i * 25} ${85 + i * 3}`}
              strokeWidth="0.4"
            />
          ))}
          
          {/* 지지 구조 */}
          <rect x="170" y="240" width="40" height="60" strokeWidth="0.8"/>
          <line x1="150" y1="300" x2="230" y2="300" strokeWidth="1"/>
        </g>
        
        {/* 주석 */}
        <g fill="rgba(92, 64, 51, 0.5)" fontSize="8" fontFamily="serif">
          <text x="50" y="30">Rota Aquaria</text>
          <text x="190" y="310" textAnchor="middle" fontSize="7">vis aquae motrix</text>
          <text x="320" y="300" fontSize="6">fol. 234v</text>
        </g>
      </svg>

      {/* 해부학적 기계 설계 */}
      <svg 
        className="absolute"
        style={{ 
          bottom: '25%', 
          right: '12%', 
          opacity: opacity * 0.75,
          animation: animationSpeed !== 'none' ? `float-historic ${duration} ease-in-out infinite` : 'none',
          animationDelay: '30s'
        }}
        width="320" 
        height="280" 
        viewBox="0 0 320 280"
      >
        <g stroke="rgba(92, 64, 51, 0.6)" fill="none" strokeWidth="0.7">
          {/* 복잡한 기계 관절 */}
          <ellipse cx="160" cy="60" rx="40" ry="30" strokeWidth="0.8"/>
          <circle cx="160" cy="120" r="25" strokeWidth="0.8"/>
          <circle cx="120" cy="180" r="20" strokeWidth="0.8"/>
          <circle cx="200" cy="180" r="20" strokeWidth="0.8"/>
          
          {/* 연결 구조 */}
          <line x1="160" y1="90" x2="160" y2="95" strokeWidth="1"/>
          <line x1="145" y1="140" x2="130" y2="160" strokeWidth="0.8"/>
          <line x1="175" y1="140" x2="190" y2="160" strokeWidth="0.8"/>
          
          {/* 복잡한 내부 메커니즘 */}
          {[...Array(8)].map((_, i) => (
            <g key={i}>
              <circle 
                cx={160 + 15 * Math.cos((i * 45) * Math.PI / 180)}
                cy={120 + 15 * Math.sin((i * 45) * Math.PI / 180)}
                r="3"
                strokeWidth="0.5"
              />
            </g>
          ))}
          
          {/* 케이블과 도르래 */}
          <path d="M140 60 Q100 80 100 120 T120 180" strokeWidth="0.6" strokeDasharray="2,2"/>
          <path d="M180 60 Q220 80 220 120 T200 180" strokeWidth="0.6" strokeDasharray="2,2"/>
          
          {/* 측정 표시 */}
          <line x1="40" y1="60" x2="40" y2="180" strokeWidth="0.4"/>
          <line x1="35" y1="60" x2="45" y2="60" strokeWidth="0.6"/>
          <line x1="35" y1="180" x2="45" y2="180" strokeWidth="0.6"/>
          
          {/* 각도 측정 */}
          <path d="M160 120 L190 120 A30 30 0 0 1 180 145" fill="none" strokeWidth="0.5"/>
        </g>
        
        <g fill="rgba(92, 64, 51, 0.5)" fontSize="7" fontFamily="serif">
          <text x="50" y="250">Articulatio Mechanica</text>
          <text x="250" y="270" fontSize="6">Studio III</text>
        </g>
      </svg>
    </div>
  );
}