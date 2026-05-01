// app/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';
import Template1 from '@/app/components/templates/Template1';
import Template2 from '@/app/components/templates/Template2';
import Template3 from '@/app/components/templates/Template3';
import JsonLd from '@/app/components/JsonLd';

import { ResumeData } from '@/app/lib/types';

export const metadata: Metadata = {
  title: 'Free Resume Builder – Create Professional Resumes Online',
  description: 'Build, customize, and download your perfect resume with 20+ professional templates. No sign-up required. Free PDF download.',
  keywords: 'resume builder, free resume templates, online resume maker, CV builder, professional resume',
  openGraph: {
    title: 'Free Resume Builder – Create Professional Resumes Online',
    description: 'Build, customize, and download your perfect resume with 20+ professional templates.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://yourdomain.com',
  },
};

// Sample data for preview (simplified but realistic)
const sampleResume: ResumeData = {
  personal: {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '+1 234 567 8900',
    address: 'New York, NY',
    title: 'Senior Product Designer',
    summary: 'Creative product designer with 8+ years of experience in user-centered design and design systems.',
  },
  experience: [
    {
      id: '1',
      title: 'Senior Product Designer',
      company: 'Design Studio',
      dateRange: '2022 – Present',
      description: 'Lead design for flagship product, increased user engagement by 35%.',
    },
    {
      id: '2',
      title: 'UI/UX Designer',
      company: 'Agency Co',
      dateRange: '2019 – 2022',
      description: 'Designed responsive web apps and maintained design systems.',
    },
  ],
  education: [
    {
      id: '1',
      degree: 'BFA in Graphic Design',
      institution: 'School of Visual Arts',
      dateRange: '2015 – 2019',
      description: 'Graduated with honors.',
    },
  ],
  skills: ['Figma', 'Sketch', 'User Research', 'Prototyping', 'Tailwind CSS'],
  certificates: [],
  languages: [],
  projects: [],
  volunteering: [],
  awards: [],
  publications: [],
  hobbies: [],
  socialLinks: [],
  references: [],
};

export default function HomePage() {
  return (
    <>
    <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Resume Builder",
          "description": "Free resume builder with 20+ professional templates. Create, edit, and download your resume as PDF instantly. No credit card needed.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "offer": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "url": "https://mycvbuilder.info",
          "image": "https://mycvbuilder.info/og-image.jpg",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Resume Builder",
          "url": "https://mycvbuilder.info",
          "logo": "https://mycvbuilder.info/logo.png",
          "sameAs": [
            "https://github.com/MuhammadRaheelFayyaz",
            "https://www.linkedin.com/in/muhammad-raheel-841819174/"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "raheelfayyazi@gmail.com",
            "contactType": "customer support"
          }
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do I need to sign up to use the resume builder?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No! You can build and download your resume completely free without creating an account."
              }
            },
            {
              "@type": "Question",
              "name": "Are the templates ATS‑friendly?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all our templates use standard formatting that is readable by Applicant Tracking Systems."
              }
            },
            {
              "@type": "Question",
              "name": "Can I save and share my resume?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes – create a free account to save your resume and get a shareable link."
              }
            }
          ]
        }}
      />
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Free Resume Builder – Create Your Professional Resume in Minutes
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Our free resume builder helps you create a professional resume in minutes. Choose from 20+ ATS‑friendly templates, add your details, and download as PDF – no sign‑up required.          </p>
          <Link
            href="/builder"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
          >
            Create My Resume Now
          </Link>
          <p className="text-sm mt-4 opacity-80">20+ templates, ATS‑friendly, one‑click PDF, no sign‑up.</p>
        </div>
      </section>

      {/* Templates Showcase – with real live previews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Professional Templates</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from Classic, Modern, Minimal, Creative, and more – all ATS‑friendly.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Template 1 - Classic */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="transform scale-90 origin-top transition-all duration-300 hover:scale-95">
                <Template1 data={sampleResume} />
              </div>
              <div className="p-4 text-center border-t">
                <h3 className="font-bold text-lg mb-1">Classic</h3>
                <p className="text-gray-500 text-sm mb-2">Traditional two-column layout</p>
                <Link href="/builder" className="text-indigo-600 text-sm font-medium hover:underline">
                  Use this template →
                </Link>
              </div>
            </div>

            {/* Template 2 - Modern */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="transform scale-90 origin-top transition-all duration-300 hover:scale-95">
                <Template2 data={sampleResume} />
              </div>
              <div className="p-4 text-center border-t">
                <h3 className="font-bold text-lg mb-1">Modern</h3>
                <p className="text-gray-500 text-sm mb-2">Bold header with gradient</p>
                <Link href="/builder" className="text-indigo-600 text-sm font-medium hover:underline">
                  Use this template →
                </Link>
              </div>
            </div>

            {/* Template 3 - Minimal */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="transform scale-90 origin-top transition-all duration-300 hover:scale-95">
                <Template3 data={sampleResume} />
              </div>
              <div className="p-4 text-center border-t">
                <h3 className="font-bold text-lg mb-1">Minimal</h3>
                <p className="text-gray-500 text-sm mb-2">Clean single column</p>
                <Link href="/builder" className="text-indigo-600 text-sm font-medium hover:underline">
                  Use this template →
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/builder" className="text-indigo-600 font-semibold hover:underline">
              View all 20+ templates →
            </Link>
          </div>
        </div>
      </section>

      {/* Features (unchanged) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Use Our Resume Builder?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">ATS‑Friendly</h3>
              <p className="text-gray-600">All templates are optimised to pass automated screening.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Live Preview</h3>
              <p className="text-gray-600">See changes instantly as you type.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">One‑Click PDF</h3>
              <p className="text-gray-600">Download your resume as a print‑ready PDF.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Land Your Dream Job?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Create your professional resume in minutes – no credit card required.
          </p>
          <Link
            href="/builder"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition"
          >
            Start Building
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl">Do I need to sign up to use the resume builder?</h3>
              <p className="text-gray-600 mt-1">No! You can build and download your resume completely free without creating an account.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">Are the templates ATS‑friendly?</h3>
              <p className="text-gray-600 mt-1">Yes, all our templates use standard formatting that is readable by Applicant Tracking Systems.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">Can I save and share my resume?</h3>
              {/* <p className="text-gray-600 mt-1">Yes – create a free account to save your resume and get a shareable link.</p> */}
              <p className="text-gray-600 mt-1">Yes – create a free account to save your resume and can share it with others.</p>
            </div>
          </div>
        </div>
      </section>

      {/* JSON‑LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Resume Builder",
            "description": "Create professional resumes with 20+ templates. Free PDF download.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "offer": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
          }),
        }}
      />
    </div>
    </>
  );
}