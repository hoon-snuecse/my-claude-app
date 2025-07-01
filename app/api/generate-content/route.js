import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request) {
  try {
    const { topic, category, subcategory, type } = await request.json();

    if (!topic || !category) {
      return Response.json({ 
        error: '주제와 카테고리를 입력해주세요.' 
      }, { status: 400 });
    }

    // 콘텐츠 타입별 프롬프트 템플릿
    const prompts = {
      'research-post': `
교육연구자의 관점에서 "${topic}"에 대한 연구 블로그 포스트를 작성해주세요.

카테고리: ${category}
${subcategory ? `세부분야: ${subcategory}` : ''}

다음 구조로 작성해주세요:
1. 연구 배경 및 동기
2. 주요 연구 질문
3. 방법론 (데이터 분석 접근법)
4. 주요 발견사항
5. 교육정책적 시사점
6. 향후 연구 방향

글의 톤: 학술적이면서도 일반인이 이해할 수 있도록 친근하게
길이: 1500-2000자
특별 요청: Claude AI와의 협업 연구 과정을 자연스럽게 언급해주세요.
`,
      'teaching-reflection': `
교수로서 "${topic}"에 대한 수업 후기 및 성찰을 작성해주세요.

다음 내용을 포함해주세요:
1. 수업 개요 및 목표
2. 학생들의 반응과 참여도
3. 효과적이었던 교육 방법
4. 개선이 필요한 부분
5. 다음 학기 적용 계획
6. Claude AI를 활용한 교육 혁신 아이디어

글의 톤: 성찰적이고 따뜻한 교육자의 시선
길이: 1200-1500자
`,
      'ai-insight': `
"${topic}"에 대해 Claude AI와 나눈 대화를 바탕으로 인사이트 포스트를 작성해주세요.

다음 구조로 작성해주세요:
1. 대화의 시작 (어떤 질문이나 궁금증에서 시작되었는지)
2. Claude와의 주요 대화 내용 (핵심 질문과 답변)
3. 새롭게 발견한 관점이나 아이디어
4. 연구/교육에의 적용 가능성
5. 추가로 탐구하고 싶은 주제

글의 톤: 호기심 많은 연구자의 탐구 과정을 생생하게
길이: 1000-1300자
특별 요청: Claude와의 실제 대화 형식을 일부 포함해주세요.
`,
      'coffee-essay': `
커피를 마시며 "${topic}"에 대해 생각한 에세이를 작성해주세요.

다음 요소들을 자연스럽게 녹여주세요:
1. 커피 한 잔과 함께 시작하는 생각
2. 일상에서 발견한 교육/연구와의 연결점
3. 개인적인 경험이나 일화
4. 철학적 성찰
5. 미래에 대한 전망이나 희망

글의 톤: 개인적이고 철학적이며 따뜻한 에세이
길이: 800-1200자
특별 요청: 커피와 관련된 은유나 비유를 적절히 사용해주세요.
`
    };

    const prompt = prompts[type] || prompts['research-post'];

    console.log('콘텐츠 생성 시작:', { topic, category, type });

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2500,
      messages: [{ 
        role: 'user', 
        content: prompt
      }]
    });

    const generatedContent = response.content[0].text;

    // 메타데이터 생성을 위한 추가 요청
    const metadataPrompt = `
다음 글을 분석해서 JSON 형태로 메타데이터를 생성해주세요:

글 내용:
${generatedContent}

다음 형식으로 답변해주세요 (JSON만):
{
  "title": "글 제목 (50자 이내)",
  "summary": "한 줄 요약 (100자 이내)",
  "tags": ["태그1", "태그2", "태그3", "태그4", "태그5"],
  "readingTime": "예상 읽기 시간 (분)",
  "difficulty": "초급|중급|고급"
}
`;

    const metadataResponse = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      messages: [{ 
        role: 'user', 
        content: metadataPrompt
      }]
    });

    let metadata;
    try {
      metadata = JSON.parse(metadataResponse.content[0].text);
    } catch (error) {
      // 파싱 실패시 기본값 사용
      metadata = {
        title: `${topic}에 대한 연구`,
        summary: `${topic} 관련 ${category} 연구 내용`,
        tags: [category, subcategory, 'Claude AI', 'AI연구'].filter(Boolean),
        readingTime: "5",
        difficulty: "중급"
      };
    }

    console.log('콘텐츠 생성 완료');

    return Response.json({
      content: generatedContent,
      metadata: metadata,
      generatedAt: new Date().toISOString(),
      conversation: {
        prompt: prompt,
        topic: topic,
        category: category,
        subcategory: subcategory,
        type: type
      }
    });

  } catch (error) {
    console.error('콘텐츠 생성 오류:', error);
    
    if (error.status === 401) {
      return Response.json({ 
        error: 'API 키가 유효하지 않습니다.' 
      }, { status: 401 });
    } else if (error.status === 429) {
      return Response.json({ 
        error: 'API 사용량 한도를 초과했습니다. 잠시 후 다시 시도해주세요.' 
      }, { status: 429 });
    } else {
      return Response.json({ 
        error: `콘텐츠 생성 중 오류가 발생했습니다: ${error.message}` 
      }, { status: 500 });
    }
  }
}