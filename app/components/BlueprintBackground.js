'use client';

export default function BlueprintBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 건물 평면도 */}
      <svg 
        className="absolute opacity-[0.08] stroke-blue-900/30 fill-blue-900/5 animate-float-blueprint"
        style={{ 
          top: '10%', 
          left: '5%', 
          animationDelay: '0s',
          '--scale': '0.8'
        }}
        width="250" 
        height="180" 
        viewBox="0 0 250 180"
      >
        <rect x="30" y="30" width="190" height="120" strokeWidth="1.2"/>
        <rect x="50" y="50" width="60" height="35" />
        <rect x="130" y="50" width="60" height="35" />
        <rect x="50" y="100" width="60" height="35" />
        <rect x="130" y="100" width="60" height="35" />
        <line x1="30" y1="87" x2="220" y2="87" strokeDasharray="2,2"/>
        <line x1="125" y1="30" x2="125" y2="150" strokeDasharray="2,2"/>
        <circle cx="80" cy="67" r="2" fill="rgba(30, 58, 138, 0.3)"/>
        <circle cx="160" cy="67" r="2" fill="rgba(30, 58, 138, 0.3)"/>
        <text x="35" y="25" fontSize="8" fill="rgba(30, 58, 138, 0.4)">A</text>
        <text x="215" y="25" fontSize="8" fill="rgba(30, 58, 138, 0.4)">B</text>
        <text x="15" y="95" fontSize="8" fill="rgba(30, 58, 138, 0.4)">1</text>
        <text x="15" y="155" fontSize="8" fill="rgba(30, 58, 138, 0.4)">2</text>
      </svg>

      {/* 건축 입면도 */}
      <svg 
        className="absolute opacity-[0.08] stroke-blue-900/30 fill-blue-900/5 animate-float-blueprint"
        style={{ 
          top: '20%', 
          right: '10%', 
          animationDelay: '8s',
          '--scale': '1.2'
        }}
        width="220" 
        height="140" 
        viewBox="0 0 220 140"
      >
        <rect x="20" y="50" width="180" height="70" />
        <rect x="40" y="60" width="25" height="30" />
        <rect x="85" y="60" width="25" height="30" />
        <rect x="130" y="60" width="25" height="30" />
        <rect x="175" y="60" width="20" height="30" />
        <polygon points="20,50 110,20 200,50" />
        <line x1="20" y1="120" x2="200" y2="120" strokeWidth="1.5"/>
        <line x1="20" y1="125" x2="200" y2="125" strokeDasharray="3,3"/>
        <text x="110" y="35" fontSize="7" textAnchor="middle" fill="rgba(30, 58, 138, 0.4)">ELEVATION</text>
        <text x="25" y="135" fontSize="6" fill="rgba(30, 58, 138, 0.4)">0.00</text>
      </svg>

      {/* 구조 다이어그램 */}
      <svg 
        className="absolute opacity-[0.08] stroke-blue-900/30 fill-blue-900/5 animate-float-blueprint"
        style={{ 
          bottom: '20%', 
          left: '15%', 
          animationDelay: '16s',
          '--scale': '0.9'
        }}
        width="170" 
        height="200" 
        viewBox="0 0 170 200"
      >
        <rect x="70" y="30" width="30" height="140" />
        <rect x="30" y="70" width="110" height="10" />
        <rect x="30" y="110" width="110" height="10" />
        <rect x="30" y="150" width="110" height="10" />
        <line x1="85" y1="30" x2="85" y2="15" strokeWidth="1.2"/>
        <line x1="80" y1="15" x2="90" y2="15" strokeWidth="1.2"/>
        <circle cx="45" cy="75" r="3" fill="none"/>
        <circle cx="125" cy="75" r="3" fill="none"/>
        <circle cx="45" cy="115" r="3" fill="none"/>
        <circle cx="125" cy="115" r="3" fill="none"/>
        <text x="45" y="190" fontSize="7" textAnchor="middle" fill="rgba(30, 58, 138, 0.4)">SECTION A-A</text>
        <line x1="30" y1="185" x2="140" y2="185" strokeDasharray="2,2"/>
      </svg>

      {/* 상세 도면 */}
      <svg 
        className="absolute opacity-[0.08] stroke-blue-900/30 fill-blue-900/5 animate-float-blueprint"
        style={{ 
          bottom: '30%', 
          right: '5%', 
          animationDelay: '12s',
          '--scale': '1.1'
        }}
        width="180" 
        height="180" 
        viewBox="0 0 180 180"
      >
        <circle cx="90" cy="90" r="70" fill="none"/>
        <circle cx="90" cy="90" r="50" fill="none"/>
        <circle cx="90" cy="90" r="30" fill="none"/>
        <line x1="20" y1="90" x2="160" y2="90" />
        <line x1="90" y1="20" x2="90" y2="160" />
        <line x1="40" y1="40" x2="140" y2="140" strokeDasharray="1,1"/>
        <line x1="140" y1="40" x2="40" y2="140" strokeDasharray="1,1"/>
        <text x="90" y="95" textAnchor="middle" fontSize="9" fill="rgba(30, 58, 138, 0.4)">⌀140</text>
        <text x="90" y="15" textAnchor="middle" fontSize="7" fill="rgba(30, 58, 138, 0.4)">DETAIL</text>
        <polygon points="25,90 30,87 30,93" fill="rgba(30, 58, 138, 0.3)"/>
        <polygon points="155,90 150,87 150,93" fill="rgba(30, 58, 138, 0.3)"/>
      </svg>

      {/* 배치도 */}
      <svg 
        className="absolute opacity-[0.08] stroke-blue-900/30 fill-blue-900/5 animate-float-blueprint"
        style={{ 
          top: '60%', 
          left: '50%', 
          transform: 'translateX(-50%)',
          animationDelay: '4s',
          '--scale': '0.7'
        }}
        width="200" 
        height="160" 
        viewBox="0 0 200 160"
      >
        <rect x="60" y="40" width="80" height="60" />
        <rect x="70" y="50" width="15" height="10" />
        <rect x="115" y="50" width="15" height="10" />
        <rect x="70" y="80" width="15" height="10" />
        <rect x="115" y="80" width="15" height="10" />
        <circle cx="40" cy="70" r="15" fill="none" strokeDasharray="2,2"/>
        <circle cx="160" cy="70" r="15" fill="none" strokeDasharray="2,2"/>
        <rect x="20" y="110" width="160" height="8" fill="rgba(30, 58, 138, 0.1)"/>
        <text x="100" y="30" fontSize="8" textAnchor="middle" fill="rgba(30, 58, 138, 0.4)">SITE PLAN</text>
        <text x="100" y="125" fontSize="6" textAnchor="middle" fill="rgba(30, 58, 138, 0.4)">ROAD</text>
      </svg>
    </div>
  );
}