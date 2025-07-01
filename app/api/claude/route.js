import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return Response.json({ error: '메시지를 입력해주세요.' }, { status: 400 });
    }

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [{ role: 'user', content: message }]
    });

    return Response.json({ 
      response: response.content[0].text 
    });

  } catch (error) {
    console.error('API 오류:', error);
    return Response.json({ error: 'Claude API 오류가 발생했습니다.' }, { status: 500 });
  }
}
