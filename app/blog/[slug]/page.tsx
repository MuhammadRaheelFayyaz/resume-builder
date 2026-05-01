// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import JsonLd from '@/app/components/JsonLd';

// Sample posts content (could be fetched from CMS later)
const postsContent: Record<string, { title: string; date: string; content: string }> = {
  'top-10-resume-tips-2025': {
    title: 'Top 10 Resume Tips for 2025',
    date: '2025-03-15',
    content: `
      <p>1. <strong>Keep it concise</strong> – one page for junior roles, two pages max for senior.</p>
      <p>2. <strong>Use action verbs</strong> (led, built, improved, designed).</p>
      <p>3. <strong>Tailor to the job description</strong> – mirror keywords.</p>
      <p>4. <strong>Include measurable achievements</strong> (e.g., "increased sales by 20%").</p>
      <p>5. <strong>Choose a clean, ATS‑friendly template</strong> – like our Classic or Minimal.</p>
      <p>6. <strong>Proofread</strong> – typos kill your chances.</p>
      <p>7. <strong>Add a professional summary</strong> at the top.</p>
      <p>8. <strong>List skills relevant to the role</strong> (hard + soft).</p>
      <p>9. <strong>Use consistent formatting</strong> – same font, margins, spacing.</p>
      <p>10. <strong>Export as PDF</strong> – never send a Word file.</p>
    `,
  },
  'how-to-write-cover-letter': {
    title: 'How to Write a Cover Letter That Gets Noticed',
    date: '2025-03-10',
    content: `
      <p>A great cover letter should:</p>
      <ul><li>Address the hiring manager by name</li><li>Show you’ve researched the company</li><li>Highlight 1‑2 key achievements</li><li>Explain why you’re excited about the role</li><li>End with a call to action</li></ul>
    `,
  },
  'ats-friendly-resume-format': {
    title: 'ATS‑Friendly Resume Formats',
    date: '2025-03-05',
    content: `
      <p>Applicant Tracking Systems (ATS) scan for keywords. Avoid complex tables, columns, graphics, and headers/footers.</p>
      <p>Use standard section headings: Experience, Education, Skills. Our Minimal and Compact templates are ATS‑optimised.</p>
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = postsContent[slug];
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} - Resume Builder Blog`,
    description: post.content.replace(/<[^>]*>/g, '').slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postsContent[slug];
  if (!post) notFound();

  return (
    <>
        <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "datePublished": post.date,
          "dateModified": post.date,
          "author": {
            "@type": "Organization",
            "name": "Resume Builder Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Resume Builder",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mycvbuilder.info/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://mycvbuilder.info/blog/${slug}`
          },
          "description": post.content.replace(/<[^>]*>/g, '').slice(0, 200)
        }}
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <article className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-500 mb-6">{post.date}</p>
          <div className="prose prose-indigo max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />          <div className="mt-8 pt-4 border-t">
              <a href="/blog" className="text-indigo-600 hover:underline">← Back to all posts</a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}