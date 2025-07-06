// API configuration for Shed posts
// Vercel's read-only filesystem requires memory-based storage

export function getShedApiEndpoint() {
  // Check if we're on Vercel by looking for Vercel-specific headers or domain
  const isVercel = typeof window !== 'undefined' && 
    (window.location.hostname.includes('vercel.app') || 
     window.location.hostname.includes('vercel.com'));
  
  return isVercel ? '/api/shed/posts/local' : '/api/shed/posts';
}