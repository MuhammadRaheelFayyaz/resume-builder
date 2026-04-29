// app/builder/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume Builder – Create & Download Professional Resumes',
  description: 'Use our free online resume builder with 20+ templates. Edit, preview, and download PDF. No sign-up required.',
  openGraph: {
    title: 'Resume Builder – Create Professional Resumes',
    description: 'Free resume builder with live preview and PDF download.',
  },
};

export default function BuilderLayout({ children }: { children: React.ReactNode }) {
  return children;
}