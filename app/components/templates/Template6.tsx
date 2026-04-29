// components/templates/Template6.tsx
import { ResumeData } from '@/app/lib/types';
import {
  Briefcase,
  User,
  Code,
  Heart,
  GraduationCap,
  Award,
  BookOpen,
  Globe,
  Link as LinkIcon,
  Users,
  FileText,
  Star,
} from 'lucide-react';

interface Template6Props {
  data: ResumeData;
}

export default function Template6({ data }: Template6Props) {
  const {
    personal,
    experience,
    volunteering,
    projects,
    education,
    skills,
    certificates,
    languages,
    hobbies,
    socialLinks,
    awards,
    publications = [],
    references = [],
  } = data;

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden print:shadow-none max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 gap-0">
        {/* LEFT SIDEBAR */}
        <div className="bg-gray-50 p-6 print:bg-white border-r border-gray-200">
          {/* Profile image placeholder – optional, can be omitted */}
          <div className="text-center mb-6">
            
            <h2 className="text-xl font-bold mt-3">
              {personal.firstName} {personal.lastName}
            </h2>
            <p className="text-gray-600 text-sm">{personal.title}</p>
          </div>

          {/* Contact info */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Contact</h3>
            <div className="space-y-1 text-sm">
              {personal.email && <p>📧 {personal.email}</p>}
              {personal.phone && <p>📞 {personal.phone}</p>}
              {personal.address && <p>📍 {personal.address}</p>}
            </div>
          </div>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Connect</h3>
              <div className="space-y-1">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-indigo-600 hover:underline"
                  >
                    <LinkIcon size={14} /> {link.platform}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1">
              <Code size={14} /> Skills
            </h3>
            <div className="flex flex-wrap gap-1">
              {skills.map((skill, i) => (
                <span key={i} className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          {languages.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Globe size={14} /> Languages
              </h3>
              <ul className="space-y-1 text-sm">
                {languages.map((lang) => (
                  <li key={lang.id}>
                    {lang.name} {lang.proficiency && <span className="text-gray-500">({lang.proficiency})</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Certifications */}
          {certificates.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Award size={14} /> Certifications
              </h3>
              <div className="space-y-2">
                {certificates.map((cert) => (
                  <div key={cert.id} className="break-inside-avoid">
                    <p className="text-sm font-medium">{cert.name}</p>
                    <p className="text-xs text-gray-600">{cert.issuer}</p>
                    {cert.date && <p className="text-xs text-gray-500">{cert.date}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hobbies */}
          {hobbies.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Heart size={14} /> Interests
              </h3>
              <div className="flex flex-wrap gap-1">
                {hobbies.map((hobby) => (
                  <span key={hobby.id} className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">
                    {hobby.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT MAIN CONTENT */}
        <div className="md:col-span-2 p-6 space-y-6">
          {/* Profile summary */}
          <section className="resume-section">
            <h2 className="text-md font-bold text-gray-700 border-b border-gray-200 pb-1 mb-2 uppercase tracking-wide flex items-center gap-2">
              <User size={16} /> Profile
            </h2>
            <p className="text-sm text-gray-700">{personal.summary}</p>
          </section>

          {/* Experience */}
          <section className="resume-section">
            <h2 className="text-md font-bold text-gray-700 border-b border-gray-200 pb-1 mb-2 uppercase tracking-wide flex items-center gap-2">
              <Briefcase size={16} /> Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="experience-item mb-4 break-inside-avoid">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <h3 className="font-semibold text-sm">{exp.title}</h3>
                  <span className="text-xs text-gray-500">{exp.dateRange}</span>
                </div>
                <p className="text-xs text-indigo-600">{exp.company}</p>
                <p className="text-xs mt-1">{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Projects */}
          {projects.length > 0 && (
            <section className="resume-section">
              <h2 className="text-md font-bold text-gray-700 border-b border-gray-200 pb-1 mb-2 uppercase tracking-wide flex items-center gap-2">
                <Code size={16} /> Projects
              </h2>
              {projects.map((proj) => (
                <div key={proj.id} className="project-item mb-4 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <h3 className="font-semibold text-sm">{proj.name}</h3>
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600">
                        Link
                      </a>
                    )}
                  </div>
                  {proj.techStack && <p className="text-xs text-gray-600">{proj.techStack}</p>}
                  <p className="text-xs mt-1">{proj.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Volunteering */}
          {volunteering.length > 0 && (
            <section className="resume-section">
              <h2 className="text-md font-bold text-gray-700 border-b border-gray-200 pb-1 mb-2 uppercase tracking-wide flex items-center gap-2">
                <Users size={16} /> Volunteering
              </h2>
              {volunteering.map((vol) => (
                <div key={vol.id} className="volunteering-item mb-4 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <h3 className="font-semibold text-sm">{vol.role}</h3>
                    <span className="text-xs text-gray-500">{vol.dateRange}</span>
                  </div>
                  <p className="text-xs text-indigo-600">{vol.organization}</p>
                  <p className="text-xs mt-1">{vol.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Education */}
          <section className="resume-section">
            <h2 className="text-md font-bold text-gray-700 border-b border-gray-200 pb-1 mb-2 uppercase tracking-wide flex items-center gap-2">
              <GraduationCap size={16} /> Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="education-item mb-4 break-inside-avoid">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <h3 className="font-semibold text-sm">{edu.degree}</h3>
                  <span className="text-xs text-gray-500">{edu.dateRange}</span>
                </div>
                <p className="text-xs text-indigo-600">{edu.institution}</p>
                <p className="text-xs mt-1">{edu.description}</p>
              </div>
            ))}
          </section>

          {/* Awards */}
          {awards.length > 0 && (
            <section className="resume-section">
              <h2 className="text-md font-bold text-gray-700 border-b border-gray-200 pb-1 mb-2 uppercase tracking-wide flex items-center gap-2">
                <Star size={16} /> Awards & Honors
              </h2>
              {awards.map((award) => (
                <div key={award.id} className="award-item mb-2 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <span className="font-semibold text-sm">{award.title}</span>
                    <span className="text-xs text-gray-500">{award.date}</span>
                  </div>
                  <p className="text-xs text-gray-600">{award.issuer}</p>
                  {award.description && <p className="text-xs mt-1">{award.description}</p>}
                </div>
              ))}
            </section>
          )}

          {/* Publications */}
          {publications.length > 0 && (
            <section className="resume-section">
              <h2 className="text-md font-bold text-gray-700 border-b border-gray-200 pb-1 mb-2 uppercase tracking-wide flex items-center gap-2">
                <BookOpen size={16} /> Publications
              </h2>
              {publications.map((pub) => (
                <div key={pub.id} className="publication-item mb-2 break-inside-avoid">
                  <p className="text-sm font-semibold">{pub.title}</p>
                  <p className="text-xs text-gray-600">{pub.publisher}</p>
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <span className="text-xs text-gray-500">{pub.date}</span>
                    {pub.link && <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600">Link</a>}
                  </div>
                  {pub.description && <p className="text-xs mt-1">{pub.description}</p>}
                </div>
              ))}
            </section>
          )}

          {/* References */}
          {references.length > 0 && (
            <section className="resume-section">
              <h2 className="text-md font-bold text-gray-700 border-b border-gray-200 pb-1 mb-2 uppercase tracking-wide flex items-center gap-2">
                <Users size={16} /> References
              </h2>
              <div className="space-y-2">
                {references.map((ref) => (
                  <div key={ref.id} className="reference-item break-inside-avoid">
                    <p className="text-sm font-medium">{ref.name}</p>
                    <p className="text-xs text-gray-600">{ref.title}</p>
                    {ref.company && <p className="text-xs text-gray-500">{ref.company}</p>}
                    {ref.email && <p className="text-xs text-blue-600 break-all">{ref.email}</p>}
                    {ref.phone && <p className="text-xs text-gray-500">{ref.phone}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}