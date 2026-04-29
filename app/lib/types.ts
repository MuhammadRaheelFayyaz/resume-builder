
// lib/types.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  dateRange: string;
  description: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface Language {
  id: string;
  name: string;        // e.g., "English", "Spanish"
  proficiency: string; // e.g., "Native", "Fluent", "Intermediate", "Basic"
}
export interface Project {
  id: string;
  name: string;           // Project title
  description: string;    // Short description
  techStack: string;      // Technologies used (can be comma-separated)
  link?: string;          // Optional link (GitHub, live demo)
}
export interface Volunteering {
  id: string;
  role: string;           // e.g., "Volunteer Teacher", "Event Organizer"
  organization: string;   // e.g., "Red Cross", "Local School"
  dateRange: string;      // e.g., "Jan 2022 – Present"
  description: string;    // What you did, achievements
}
export interface Award {
  id: string;
  title: string;        // e.g., "Employee of the Month", "Best Research Paper"
  issuer: string;       // e.g., "Company Name", "University", "National Organization"
  date: string;         // e.g., "March 2024", "2023"
  description?: string; // optional details
}
export interface Hobby {
  id: string;
  name: string;   // e.g., "Photography", "Chess", "Marathon Running"
}
export interface SocialLink {
  id: string;
  platform: string;  // e.g., "LinkedIn", "GitHub", "Twitter", "Portfolio"
  url: string;       // full URL
}
export interface Reference {
  id: string;
  name: string;         // e.g., "John Smith"
  title: string;        // e.g., "Senior Manager, Tech Corp"
  company?: string;     // optional, e.g., "Google"
  email?: string;       // optional
  phone?: string;       // optional
}
export interface Publication {
  id: string;
  title: string;        // Title of the publication
  publisher: string;    // Journal, conference, website, book publisher
  date: string;         // Publication date (year/month)
  link?: string;        // Optional URL (DOI, article link)
  description?: string; // Optional summary or authors
}
export interface ResumeData {
  personal: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    title: string;
    summary: string;
  };
  experience: Experience[];
  education: Education[];
  skills: string[];
  certificates: Certificate[];
  languages: Language[];
  projects: Project[];
  volunteering: Volunteering[];
  awards: Award[];
  hobbies: Hobby[];
  socialLinks: SocialLink[];
  references: Reference[];
  publications: Publication[];
}

export type TemplateType = 'template1' | 'template2' | 'template3' | 'template4' | 'template5'| 'template6' | 'template7' | 'template8' | 'template9' | 'template10' | 'template11' | 'template12' | 'template13' | 'template14' | 'template15' | 'template16' | 'template17' | 'template18' | 'template19' | 'template20';