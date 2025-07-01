import { writeFile, readFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request) {
  try {
    const { content, metadata, category, subcategory } = await request.json();

    if (!content || !metadata) {
      return Response.json({ error: '콘텐츠와 메타데이터가 필요합니다.' }, { status: 400 });
    }

    // 파일명 생성 (날짜 + 제목)
    const date = new Date().toISOString().split('T')[0];
    const title = metadata.title.replace(/[^a-zA-Z0-9가-힣]/g, '-').substring(0, 50);
    const filename = `${date}-${title}.md`;

    // 마크다운 콘텐츠 생성
    const markdownContent = `---
title: "${metadata.title}"
date: "${new Date().toISOString()}"
category: "${category}"
subcategory: "${subcategory || ''}"
tags: [${metadata.tags.map(tag => `"${tag}"`).join(', ')}]
readingTime: "${metadata.readingTime}"
difficulty: "${metadata.difficulty}"
summary: "${metadata.summary}"
---

${content}
`;

    // posts 폴더 생성 (없으면)
    const postsDir = join(process.cwd(), 'posts');
    try {
      await mkdir(postsDir, { recursive: true });
    } catch (error) {
      // 폴더가 이미 있으면 무시
    }

    // 파일 저장
    const filePath = join(postsDir, filename);
    await writeFile(filePath, markdownContent, 'utf8');

    // posts 목록 업데이트
    await updatePostsList(filename, metadata, category, subcategory);

    return Response.json({ 
      success: true, 
      filename,
      path: `/posts/${filename}`,
      message: '콘텐츠가 성공적으로 저장되었습니다!'
    });

  } catch (error) {
    console.error('콘텐츠 저장 오류:', error);
    return Response.json({ 
      error: `저장 중 오류가 발생했습니다: ${error.message}` 
    }, { status: 500 });
  }
}

// 게시글 목록 파일 업데이트
async function updatePostsList(filename, metadata, category, subcategory) {
  try {
    const listPath = join(process.cwd(), 'posts', 'posts-list.json');
    
    let postsList = [];
    try {
      const existingData = await readFile(listPath, 'utf8');
      postsList = JSON.parse(existingData);
    } catch (error) {
      // 파일이 없으면 빈 배열로 시작
    }

    // 새 포스트 추가
    const newPost = {
      id: filename.replace('.md', ''),
      filename,
      title: metadata.title,
      summary: metadata.summary,
      category,
      subcategory,
      tags: metadata.tags,
      readingTime: metadata.readingTime,
      difficulty: metadata.difficulty,
      createdAt: new Date().toISOString(),
      slug: filename.replace('.md', '')
    };

    postsList.unshift(newPost); // 맨 앞에 추가 (최신순)

    // 목록 파일 업데이트
    await writeFile(listPath, JSON.stringify(postsList, null, 2), 'utf8');

  } catch (error) {
    console.error('포스트 목록 업데이트 오류:', error);
  }
}

// GET 요청: 저장된 게시글 목록 조회
export async function GET() {
  try {
    const listPath = join(process.cwd(), 'posts', 'posts-list.json');
    const data = await readFile(listPath, 'utf8');
    const postsList = JSON.parse(data);
    
    return Response.json({ posts: postsList });
  } catch (error) {
    return Response.json({ posts: [] });
  }
}