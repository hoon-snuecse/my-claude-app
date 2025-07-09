'use client';

export default function SimpleTestBackground() {
  return (
    <div className="fixed inset-0 z-0" style={{ backgroundColor: 'rgba(0, 0, 255, 0.1)' }}>
      {/* 큰 빨간 사각형 - 무조건 보여야 함 */}
      <div 
        className="absolute"
        style={{
          top: '100px',
          left: '100px',
          width: '200px',
          height: '200px',
          backgroundColor: 'red',
          border: '5px solid black'
        }}
      >
        <p className="text-white text-center mt-20">배경이 보입니다!</p>
      </div>
      
      {/* 애니메이션 박스 */}
      <div 
        className="absolute animate-bounce"
        style={{
          top: '50%',
          left: '50%',
          width: '100px',
          height: '100px',
          backgroundColor: 'green',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  );
}