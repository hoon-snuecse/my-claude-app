import Anthropic from '@anthropic-ai/sdk';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return Response.json({ 
        error: '로그인이 필요합니다.',
        errorType: 'authentication' 
      }, { status: 401 });
    }

    const { message, context } = await request.json();

    // API 키 확인
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('ANTHROPIC_API_KEY가 설정되지 않았습니다.');
      return Response.json({ 
        error: 'API 키가 설정되지 않았습니다.' 
      }, { status: 500 });
    }

    if (!message) {
      return Response.json({ 
        error: '메시지를 입력해주세요.' 
      }, { status: 400 });
    }

    console.log('Claude API 호출 시작:', { messageLength: message.length, context });

    // 컨텍스트에 따른 시스템 프롬프트 설정
    let systemPrompt = `당신은 박교수의 연구실에서 활동하는 Claude AI입니다. 
교육연구, 특히 PISA 분석, 증거기반평가, 사회네트워크분석에 대해 전문적이면서도 친근하게 대화합니다.
연구자의 관점에서 데이터 기반의 통찰력 있는 답변을 제공하세요.`;

    if (context === 'research') {
      systemPrompt += `\n특히 연구 방법론, 데이터 분석, 학술적 글쓰기에 대해 전문적으로 조언해주세요.`;
    } else if (context === 'teaching') {
      systemPrompt += `\n교육학적 관점에서 수업 설계, 학습 평가, 교육 혁신에 대해 조언해주세요.`;
    } else if (context === 'coffee') {
      systemPrompt += `\n커피를 마시며 나누는 일상적이고 철학적인 대화의 톤으로 응답해주세요.`;
    }

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: systemPrompt,
      messages: [{ role: 'user', content: message }]
    });

    console.log('Claude API 응답 성공');
    
    return Response.json({ 
      response: response.content[0].text,
      timestamp: new Date().toISOString(),
      context: context || 'general'
    });

  } catch (error) {
    // 상세한 오류 로깅
    console.error('Claude API 오류 상세:', {
      name: error.name,
      message: error.message,
      status: error.status,
      type: error.type,
      headers: error.headers
    });

    // 구체적인 오류 처리
    if (error.status === 401) {
      return Response.json({ 
        error: 'API 키가 유효하지 않습니다. Anthropic Console에서 API 키를 확인해주세요.',
        errorType: 'authentication'
      }, { status: 401 });
    } else if (error.status === 429) {
      return Response.json({ 
        error: 'API 사용량 한도를 초과했습니다. 잠시 후 다시 시도해주세요.',
        errorType: 'rate_limit'
      }, { status: 429 });
    } else if (error.status === 400) {
      return Response.json({ 
        error: `요청 형식이 잘못되었습니다: ${error.message}`,
        errorType: 'bad_request'
      }, { status: 400 });
    } else if (error.status === 500) {
      return Response.json({ 
        error: 'Anthropic 서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
        errorType: 'server_error'
      }, { status: 500 });
    } else if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      return Response.json({ 
        error: '네트워크 연결에 문제가 있습니다. 인터넷 연결을 확인해주세요.',
        errorType: 'network_error'
      }, { status: 503 });
    } else {
      return Response.json({ 
        error: `Claude API 오류: ${error.message || '알 수 없는 오류가 발생했습니다.'}`,
        errorType: 'unknown_error'
      }, { status: 500 });
    }
  }
}

// GET 요청 처리 (API 상태 확인용)
export async function GET() {
  return Response.json({
    status: 'ok',
    service: 'Claude AI Chat API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    hasApiKey: !!process.env.ANTHROPIC_API_KEY
  });
}