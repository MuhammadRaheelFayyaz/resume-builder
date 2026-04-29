// components/templates/Template18.tsx
import { ResumeData } from '@/app/lib/types';
import {
  Briefcase,
  User,
  Code,
  Heart,
  GraduationCap,
  Award,
  BookOpen,
  Link as LinkIcon,
  Users,
  Languages,
} from 'lucide-react';

export default function Template18({ data }: { data: ResumeData }) {
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
    <div className="bg-white shadow-xl rounded-xl overflow-hidden print:shadow-none max-w-4xl mx-auto">
      {/* Header with clean centering */}
      <div className="text-center py-8 px-6 bg-gradient-to-r from-indigo-50 to-white print:bg-white">
        <h1 className="text-4xl font-bold text-gray-800">
          {personal.firstName} {personal.lastName}
        </h1>
        <p className="text-lg text-indigo-600 mt-1">{personal.title}</p>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500 mt-3">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.address && <span>{personal.address}</span>}
        </div>
        {socialLinks.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 text-sm flex items-center gap-1 hover:underline"
              >
                <LinkIcon size={14} /> {link.platform}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8 p-8">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {/* Profile */}
          <section className="resume-section">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3 border-b border-indigo-200 pb-1">
              <User size={20} className="text-indigo-500" /> Profile
            </h2>
            <p className="text-gray-700">{personal.summary}</p>
          </section>

          {/* Experience */}
          <section className="resume-section">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3 border-b border-indigo-200 pb-1">
              <Briefcase size={20} className="text-indigo-500" /> Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-4 break-inside-avoid">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-semibold">{exp.title}</h3>
                  <span className="text-sm text-gray-500">{exp.dateRange}</span>
                </div>
                <p className="text-sm text-indigo-600">{exp.company}</p>
                <p className="text-sm mt-1">{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Projects */}
          {projects.length > 0 && (
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3 border-b border-indigo-200 pb-1">
                <Code size={20} className="text-indigo-500" /> Projects
              </h2>
              {projects.map((proj) => (
                <div key={proj.id} className="mb-3 break-inside-avoid">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="font-semibold">{proj.name}</h3>
                    {proj.link && (
                      <a href={proj.link} className="text-xs text-indigo-500">Link</a>
                    )}
                  </div>
                  {proj.techStack && <p className="text-xs text-gray-500">{proj.techStack}</p>}
                  <p className="text-sm mt-1">{proj.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Volunteering */}
          {volunteering.length > 0 && (
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3 border-b border-indigo-200 pb-1">
                <Heart size={20} className="text-indigo-500" /> Volunteering
              </h2>
              {volunteering.map((vol) => (
                <div key={vol.id} className="mb-3 break-inside-avoid">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="font-semibold">{vol.role}</h3>
                    <span className="text-sm text-gray-500">{vol.dateRange}</span>
                  </div>
                  <p className="text-sm text-indigo-600">{vol.organization}</p>
                  <p className="text-sm mt-1">{vol.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Education */}
          <section className="resume-section">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3 border-b border-indigo-200 pb-1">
              <GraduationCap size={20} className="text-indigo-500" /> Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-3 break-inside-avoid">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <span className="text-sm text-gray-500">{edu.dateRange}</span>
                </div>
                <p className="text-sm text-indigo-600">{edu.institution}</p>
                <p className="text-sm mt-1">{edu.description}</p>
              </div>
            ))}
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          {/* Skills */}
          <section className="resume-section">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3 border-b border-indigo-200 pb-1">
              <Code size={20} className="text-indigo-500" /> Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Languages */}
          {languages.length > 0 && (
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3 border-b border-indigo-200 pb-1">
                <Languages size={20} className="text-indigo-500" /> Languages
              </h2>
              <ul className="list-disc list-inside space-y-1">
                {languages.map((lang) => (
                  <li key={lang.id}>
                    {lang.name} {lang.proficiency && `(${lang.proficiency})`}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Certifications */}
          {certificates.length > 0 && (
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3 border-b border-indigo-200 pb-1">
                <Award size={20} className="text-indigo-500" /> Certifications
              </h2>
              {certificates.map((cert) => (
                <div key={cert.id} className="mb-2">
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-xs text-gray-600">{cert.issuer} {cert.date && `(${cert.date})`}</p>
                </div>
              ))}
            </section>
          )}

          {/* Awards */}
          {awards.length > 0 && (
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3 border-b border-indigo-200 pb-1">
                <Award size={20} className="text-indigo-500" /> Awards
              </h2>
              {awards.map((award) => (
                <div key={award.id} className="mb-2">
                  <p className="font-medium">{award.title}</p>
                  <p className="text-xs text-gray-600">{award.issuer} | {award.date}</p>
                </div>
              ))}
            </section>
          )}

          {/* Publications */}
          {publications.length > 0 && (
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3 border-b border-indigo-200 pb-1">
                <BookOpen size={20} className="text-indigo-500" /> Publications
              </h2>
              {publications.map((pub) => (
                <div key={pub.id} className="mb-2">
                  <p className="font-medium">{pub.title}</p>
                  <p className="text-xs text-gray-600">{pub.publisher} | {pub.date}</p>
                  {pub.link && <a href={pub.link} className="text-xs text-indigo-500">Link</a>}
                </div>
              ))}
            </section>
          )}

          {/* Hobbies */}
          {hobbies.length > 0 && (
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3 border-b border-indigo-200 pb-1">
                <Heart size={20} className="text-indigo-500" /> Hobbies
              </h2>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby) => (
                  <span key={hobby.id} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {hobby.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* References */}
          {references.length > 0 && (
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-3 border-b border-indigo-200 pb-1">
                <Users size={20} className="text-indigo-500" /> References
              </h2>
              {references.map((ref) => (
                <div key={ref.id} className="mb-2">
                  <p className="font-medium">{ref.name}</p>
                  <p className="text-xs text-gray-700">{ref.title}, {ref.company}</p>
                  {ref.email && <p className="text-xs text-indigo-500">{ref.email}</p>}
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}