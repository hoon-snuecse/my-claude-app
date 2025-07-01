'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/claude', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setResponse(data.response);
      } else {
        setResponse('오류: ' + data.error);
      }
    } catch (error) {
      setResponse('네트워크 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Claude AI 채팅봇
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Claude에게 질문하기:
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="궁금한 것을 물어보세요..."
                className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <button 
              type="submit" 
              disabled={loading || !message.trim()}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? '답변 생성 중...' : '질문하기'}
            </button>
          </form>
          
          {response && (
            <div className="mt-6 p-4 bg-gray-50 rounded-md border">
              <h3 className="font-semibold text-gray-800 mb-2">Claude의 답변:</h3>
              <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}