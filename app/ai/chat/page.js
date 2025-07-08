'use client';
import { useState } from 'react';

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    
    // 사용자 메시지를 히스토리에 추가
    const userMessage = { role: 'user', content: message, timestamp: new Date() };
    setChatHistory(prev => [...prev, userMessage]);
    
    try {
      const res = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message,
          context: 'research' // 연구 컨텍스트 설정
        }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        const assistantMessage = { 
          role: 'assistant', 
          content: data.response, 
          timestamp: new Date() 
        };
        setChatHistory(prev => [...prev, assistantMessage]);
        setResponse('');
      } else {
        if (res.status === 401) {
          setResponse('로그인이 필요합니다. 로그인 후 다시 시도해주세요.');
          // 선택적: 로그인 페이지로 리다이렉트
          // window.location.href = '/auth/signin';
        } else {
          setResponse(`오류: ${data.error}`);
        }
      }
    } catch (error) {
      setResponse('네트워크 오류가 발생했습니다.');
    } finally {
      setLoading(false);
      setMessage('');
    }
  };

  const clearChat = () => {
    setChatHistory([]);
    setResponse('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* 헤더 */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Claude AI 연구 채팅</h1>
                <p className="text-purple-100">PISA, 증거기반평가, SNA 연구에 대해 Claude와 대화해보세요</p>
              </div>
              <div className="text-6xl">🤖</div>
            </div>
          </div>

          {/* 채팅 영역 */}
          <div className="h-96 overflow-y-auto p-6 bg-gray-50 border-b">
            {chatHistory.length === 0 ? (
              <div className="text-center text-gray-500 mt-16">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-lg font-semibold mb-2">Claude와 연구 대화를 시작해보세요!</h3>
                <p className="text-sm">예시 질문:</p>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>• "PISA 2022 결과에서 가장 주목할 만한 변화는?"</p>
                  <p>• "AI 기반 자동채점의 장단점을 분석해줘"</p>
                  <p>• "사회네트워크분석에서 중심성 지표의 의미는?"</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-3xl px-4 py-3 rounded-lg ${
                        msg.role === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white border border-gray-200 text-gray-800'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-lg">
                          {msg.role === 'user' ? '👨‍🎓' : '🤖'}
                        </div>
                        <div className="flex-1">
                          <p className="whitespace-pre-wrap leading-relaxed">
                            {msg.content}
                          </p>
                          <p className={`text-xs mt-2 ${
                            msg.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {msg.timestamp.toLocaleTimeString('ko-KR')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 px-4 py-3 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="text-lg">🤖</div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          <span className="ml-2 text-gray-500 text-sm">Claude가 답변을 생성하고 있습니다...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 입력 영역 */}
          <div className="p-6 bg-white">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Claude에게 연구 관련 질문을 해보세요... (예: PISA 데이터 분석 방법, AI 평가 도구의 효과성 등)"
                    className="w-full h-20 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    disabled={loading}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <button 
                    type="submit" 
                    disabled={loading || !message.trim()}
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        생성중
                      </>
                    ) : (
                      <>
                        <span>💬</span>
                        전송
                      </>
                    )}
                  </button>
                  
                  {chatHistory.length > 0 && (
                    <button
                      type="button"
                      onClick={clearChat}
                      className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors text-sm"
                    >
                      대화 초기화
                    </button>
                  )}
                </div>
              </div>
            </form>

            {/* 오류 메시지 */}
            {response && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-700">{response}</p>
              </div>
            )}

            {/* 사용 팁 */}
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
              <h4 className="font-medium text-blue-800 mb-2">💡 효과적인 질문 팁</h4>
              <div className="text-sm text-blue-700 space-y-1">
                <p>• 구체적인 연구 주제나 데이터셋을 언급하세요</p>
                <p>• "비교 분석해줘", "장단점을 설명해줘" 등 명확한 요청을 하세요</p>
                <p>• 후속 질문으로 더 깊이 있는 대화를 이어가세요</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}