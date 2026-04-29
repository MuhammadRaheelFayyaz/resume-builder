// app/about/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Resume Builder',
  description: 'Learn about our mission to help everyone create professional resumes easily.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
          <p>
            Welcome to <strong>Resume Builder</strong> – a free tool that helps you create
            professional, beautiful resumes in minutes.
          </p>
          <p>
            We offer 20+ templates, a rich editor, and the ability to save and share your
            resume with a unique link. No sign‑up required to build or download PDFs.
          </p>
          <p>
            Our mission is to make job hunting easier for everyone, regardless of technical
            background. All data is stored securely (optional user accounts) and you can
            immediately download your resume as a print‑ready PDF.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Why choose us?</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>20+ modern, ATS‑friendly templates</li>
            <li>Live preview as you type</li>
            <li>No watermarks – completely free</li>
            <li>One‑click PDF download</li>
            <li>Shareable links for recruiters</li>
          </ul>
        </div>
      </div>
    </div>
  );
}