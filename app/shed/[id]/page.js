'use client';

import { use, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Calendar, Clock, Tag, Edit, Trash2, Coffee, Hammer, Camera, Music, Film, Plane } from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  coffee: Coffee,
  woodwork: Hammer,
  photo: Camera,
  music: Music,
  movie: Film,
  travel: Plane,
};

export default function PostPage({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const fetchPost = useCallback(async () => {
    try {
      // Use Supabase API
      const response = await fetch('/api/shed/posts/supabase');
      if (response.ok) {
        const data = await response.json();
        const foundPost = data.posts.find(p => p.id === id);
        if (foundPost) {
          console.log('Found post:', foundPost);
          console.log('Post content:', foundPost.content);
          console.log('Post images:', foundPost.images);
          setPost(foundPost);
        } else {
          router.push('/shed');
        }
      }
    } catch (error) {
      console.error('Failed to fetch post:', error);
    } finally {
      setLoading(false);
    }
  }, [id, router]);

  useEffect(() => {
    fetchPost();
    setTimeout(() => setFadeIn(true), 100);
  }, [fetchPost]);

  const handleDelete = async () => {
    if (!confirm('정말로 이 글을 삭제하시겠습니까?')) return;

    try {
      // Use Supabase API
      const response = await fetch(`/api/shed/posts/supabase?id=${post.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.push('/shed');
      }
    } catch (error) {
      console.error('Failed to delete post:', error);
      alert('글 삭제 중 오류가 발생했습니다.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  const Icon = iconMap[post.category] || Coffee;

  // Convert markdown-style formatting to HTML
  const formatContent = (content) => {
    if (!content) return '';
    
    // First, handle images
    let formatted = content.replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      (match, alt, src) => {
        // Handle all image URLs (Supabase or others)
        return `<div class="my-6 text-center"><img src="${src}" alt="${alt}" class="inline-block max-w-full rounded-lg shadow-md" style="max-height: 500px;" /></div>`;
      }
    );
    
    // Then handle other markdown
    return formatted
      .split('\n\n')
      .map(paragraph => {
        // Don't wrap images in p tags
        if (paragraph.includes('<img') || paragraph.includes('<div')) {
          return paragraph;
        }
        return `<p class="mb-4">${paragraph}</p>`;
      })
      .join('')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-700 underline">$1</a>');
  };

  return (
    <div className={`min-h-screen py-16 px-4 transition-all duration-1000 ${
      fadeIn ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="container-custom max-w-4xl">
        {/* Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/shed" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
            <ChevronLeft className="w-4 h-4" />
            일상으로 돌아가기
          </Link>
          
          <div className="flex items-center gap-2">
            <Link
              href={`/shed/write?edit=${post.id}`}
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Edit className="w-5 h-5" />
            </Link>
            <button
              onClick={handleDelete}
              className="p-2 text-slate-600 hover:text-red-600 transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Post Content */}
        <article className="quote-sheet">
          <div className="relative">
            <div className="absolute inset-4 border border-dashed border-blue-200 rounded-lg opacity-30"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-200 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.createdAt ? 
                          (typeof post.createdAt === 'string' && post.createdAt.includes('오') ? 
                            post.createdAt : 
                            new Date(post.createdAt).toLocaleDateString('ko-KR', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                              timeZone: 'Asia/Seoul'
                            })
                          ) : '날짜 없음'}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readingTime}
                      </span>
                    </span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-space-grotesk font-bold text-slate-800 mb-4">
                  {post.title}
                </h1>
                
                {post.summary && (
                  <div className="mt-4 p-4 bg-slate-50 border-l-4 border-blue-500 rounded-r-lg">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                )}
                
                {post.isAIGenerated && (
                  <div className="mt-4 px-4 py-2 bg-amber-50 text-amber-700 rounded-lg text-sm">
                    🤖 이 글은 AI와 함께 작성되었습니다.
                  </div>
                )}
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg prose-slate max-w-none [&>p]:text-lg [&>p]:leading-relaxed [&>p]:text-slate-700"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-slate-200">
                  <span className="text-sm text-slate-600 mr-2">태그:</span>
                  {post.tags.map((tag, index) => (
                    <span
                      key={`${tag}-${index}`}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm inline-flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="mt-8 pt-8 border-t border-slate-200 text-sm text-slate-500">
                  태그가 없습니다.
                </div>
              )}
            </div>
          </div>
        </article>

        {/* Navigation to other posts */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Link href="/shed" className="quote-sheet hover:shadow-lg transition-all group">
            <div className="relative">
              <div className="absolute inset-4 border border-dashed border-blue-200 rounded-lg opacity-30"></div>
              <div className="relative z-10 text-center">
                <ChevronLeft className="w-6 h-6 text-blue-600 mb-2 mx-auto group-hover:-translate-x-1 transition-transform" />
                <p className="text-slate-600">다른 글 둘러보기</p>
              </div>
            </div>
          </Link>
          
          <Link href="/shed/write" className="quote-sheet hover:shadow-lg transition-all group">
            <div className="relative">
              <div className="absolute inset-4 border border-dashed border-blue-200 rounded-lg opacity-30"></div>
              <div className="relative z-10 text-center">
                <Edit className="w-6 h-6 text-blue-600 mb-2 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-slate-600">새 글 작성하기</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}