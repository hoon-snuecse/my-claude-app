import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const POSTS_FILE = path.join(process.cwd(), 'data', 'shed-posts.json');

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Load posts from file
async function loadPosts() {
  await ensureDataDir();
  try {
    const data = await fs.readFile(POSTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Save posts to file
async function savePosts(posts) {
  await ensureDataDir();
  await fs.writeFile(POSTS_FILE, JSON.stringify(posts, null, 2));
}

export async function GET() {
  try {
    const posts = await loadPosts();
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load posts' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const posts = await loadPosts();
    
    // Generate unique ID - convert to ASCII-only slug
    const slug = data.title
      .toLowerCase()
      .replace(/[가-힣]/g, '') // Remove Korean characters
      .replace(/[^a-z0-9]/g, '-') // Replace non-alphanumeric with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
      .substring(0, 30);
    
    const id = `${Date.now()}${slug ? '-' + slug : ''}`;
    
    const newPost = {
      id,
      ...data,
      createdAt: data.createdAt || new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }),
      updatedAt: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }),
    };
    
    // Add to beginning of array (newest first)
    posts.unshift(newPost);
    
    await savePosts(posts);
    
    return NextResponse.json({ 
      success: true, 
      id: newPost.id,
      post: newPost 
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save post' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { id, ...updateData } = await request.json();
    const posts = await loadPosts();
    
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    
    posts[index] = {
      ...posts[index],
      ...updateData,
      updatedAt: new Date().toISOString(),
    };
    
    await savePosts(posts);
    
    return NextResponse.json({ 
      success: true, 
      post: posts[index] 
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Post ID required' }, { status: 400 });
    }
    
    const posts = await loadPosts();
    const filteredPosts = posts.filter(p => p.id !== id);
    
    if (posts.length === filteredPosts.length) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    
    await savePosts(filteredPosts);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}