// app/blog/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume Tips & Career Blog',
  description: 'Expert advice on writing resumes, cover letters, and job searching. Learn how to stand out.',
  openGraph: {
    title: 'Career Blog – Resume Advice',
    description: 'Practical tips to improve your resume and land interviews.',
  },
};

const posts = [
  {
    slug: 'top-10-resume-tips-2025',
    title: 'Top 10 Resume Tips for 2025',
    excerpt: 'Stand out to recruiters with these modern resume strategies.',
    date: '2025-03-15',
  },
  {
    slug: 'how-to-write-cover-letter',
    title: 'How to Write a Cover Letter That Gets Noticed',
    excerpt: 'A step‑by‑guide to crafting a compelling cover letter.',
    date: '2025-03-10',
  },
  {
    slug: 'ats-friendly-resume-format',
    title: 'ATS‑Friendly Resume Formats',
    excerpt: 'Make sure your resume passes automated screening.',
    date: '2025-03-05',
  },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-2">Career Blog</h1>
        <p className="text-center text-gray-600 mb-8">Tips, guides, and insights for job seekers</p>
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="inline-block mt-3 text-indigo-600 hover:underline">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}