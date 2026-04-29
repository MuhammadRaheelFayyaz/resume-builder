import { ResumeData, TemplateType } from './types';

const STORAGE_KEY = 'resume-builder-data';
const TEMPLATE_KEY = 'resume-builder-template';

export const defaultResumeData: ResumeData = {
  personal: {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '+1 987 654 3210',
    address: 'New York, NY',
    title: 'Product Designer',
    summary: 'Creative product designer with 6+ years of experience in user‑centered design and design systems.',
  },
  experience: [
    {
      id: 'exp1',
      title: 'Senior Product Designer',
      company: 'Design Studio',
      dateRange: '2022 – Present',
      description: 'Lead design for flagship product, increased user engagement by 35%.',
    },
    {
      id: 'exp2',
      title: 'UI/UX Designer',
      company: 'Agency Co',
      dateRange: '2019 – 2022',
      description: 'Designed responsive web apps and maintained design systems.',
    },
  ],
  education: [
    {
      id: 'edu1',
      degree: 'BFA in Graphic Design',
      institution: 'School of Visual Arts',
      dateRange: '2015 – 2019',
      description: 'Graduated with honors.',
    },
  ],
  skills: ['Figma', 'Sketch', 'Adobe XD', 'User Research', 'Prototyping', 'Tailwind CSS'],
  certificates: [
    {
      id: 'cert1',
      name: 'AWS Certified Developer – Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-DEV-12345',
    },
    {
      id: 'cert2',
      name: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      date: '2022',
      credentialId: 'PSM-I-67890',
    },
  ],
  languages: [
  { id: 'lang1', name: 'English', proficiency: 'Native' },
  { id: 'lang2', name: 'Spanish', proficiency: 'Intermediate' },
],
projects: [
  {
    id: 'proj1',
    name: 'Resume Builder App',
    description: 'Full‑stack web app with Next.js, TypeScript, and Tailwind CSS. Users can create, edit, and download resumes with multiple templates.',
    techStack: 'Next.js, TypeScript, Tailwind CSS, LocalStorage',
    link: 'https://github.com/yourusername/resume-builder',
  },
  {
    id: 'proj2',
    name: 'E‑Commerce Dashboard',
    description: 'Admin dashboard for product management, order tracking, and analytics using React and Node.js.',
    techStack: 'React, Node.js, Express, MongoDB',
    link: '',
  },
],
// Inside defaultResumeData
volunteering: [
  {
    id: 'vol1',
    role: 'Mentor',
    organization: 'Code for Good Foundation',
    dateRange: '2023 – Present',
    description: 'Guide students from underserved communities through web development basics and career advice.',
  },
  {
    id: 'vol2',
    role: 'Event Coordinator',
    organization: 'Local Food Bank',
    dateRange: '2022 – 2023',
    description: 'Organised monthly donation drives, coordinated 20+ volunteers, and increased food collection by 30%.',
  },
],
// Inside defaultResumeData
awards: [
  {
    id: 'award1',
    title: 'Outstanding Volunteer Award',
    issuer: 'Local Food Bank',
    date: '2023',
    description: 'Recognized for coordinating the largest food drive in the organization’s history.',
  },
  {
    id: 'award2',
    title: 'Best Presentation Award',
    issuer: 'Tech Conference 2024',
    date: '2024',
    description: 'Awarded for the most innovative solution presented during the hackathon.',
  },
],
// Inside defaultResumeData
hobbies: [
  { id: 'hobby1', name: 'Chess & Strategy Games' },
  { id: 'hobby2', name: 'Hiking & Outdoor Adventures' },
  { id: 'hobby3', name: 'Reading Historical Biographies' },
],
socialLinks: [
  {
    id: 'social1',
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/janesmith',
  },
  {
    id: 'social2',
    platform: 'GitHub',
    url: 'https://github.com/janesmith',
  },
  {
    id: 'social3',
    platform: 'Portfolio',
    url: 'https://janesmith.dev',
  },
],
// Inside defaultResumeData
references: [
  {
    id: 'ref1',
    name: 'Sarah Johnson',
    title: 'Engineering Director',
    company: 'Tech Solutions Inc.',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
  },
  {
    id: 'ref2',
    name: 'Michael Chen',
    title: 'Professor of Computer Science',
    company: 'University of Technology',
    email: 'm.chen@example.edu',
  },
],
// Inside defaultResumeData
publications: [
  {
    id: 'pub1',
    title: 'Modern Web Development with Next.js',
    publisher: 'Tech Journal',
    date: '2024',
    link: 'https://example.com/article',
    description: 'Co-authored with J. Doe. Discussed best practices and performance optimization.',
  },
  {
    id: 'pub2',
    title: 'Responsive Design Patterns',
    publisher: 'CSS Conference 2023',
    date: '2023',
    link: '',
    description: 'Presented a talk on modern CSS techniques.',
  },
],
};

export const loadResumeData = (): ResumeData => {
  if (typeof window === 'undefined') return defaultResumeData;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultResumeData;
    }
  }
  return defaultResumeData;
};

export const saveResumeData = (data: ResumeData): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const loadSelectedTemplate = (): TemplateType => {
  if (typeof window === 'undefined') return 'template1';
  const stored = localStorage.getItem(TEMPLATE_KEY);
  return stored === 'template1' || stored === 'template2' ? stored : 'template1';
};

export const saveSelectedTemplate = (template: TemplateType): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(TEMPLATE_KEY, template);
};