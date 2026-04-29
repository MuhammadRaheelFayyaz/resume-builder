// components/templates/Template13.tsx
import { ResumeData } from '@/app/lib/types';

export default function Template13({ data }: { data: ResumeData }) {
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
    <div className="bg-white shadow-xl rounded-lg overflow-hidden  max-w-4xl mx-auto flex">
      {/* Left accent bar */}
      <div className="w-1 bg-indigo-600 " />

      {/* Main content – full width with padding */}
      <div className="flex-1 p-8 space-y-6">
        {/* Header */}
        <div className="border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {personal.firstName} {personal.lastName}
          </h1>
          <p className="text-indigo-600 text-lg mt-1">{personal.title}</p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-2">
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && <span>{personal.phone}</span>}
            {personal.address && <span>{personal.address}</span>}
          </div>
          {socialLinks.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  className="text-indigo-600 text-sm hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Profile */}
        <section className="resume-section">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Profile</h2>
          <p className="text-gray-700">{personal.summary}</p>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4 break-inside-avoid">
              <h3 className="font-bold">{exp.title}</h3>
              <p className="text-sm text-gray-600">{exp.company} | {exp.dateRange}</p>
              <p className="text-sm mt-1 whitespace-pre-line">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        {projects.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Projects</h2>
            {projects.map((proj) => (
              <div key={proj.id} className="mb-3 break-inside-avoid">
                <h3 className="font-bold">{proj.name}</h3>
                {proj.techStack && <p className="text-sm text-gray-600">{proj.techStack}</p>}
                <p className="text-sm whitespace-pre-line">{proj.description}</p>
                {proj.link && (
                  <a href={proj.link} className="text-sm text-indigo-600" target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Volunteering */}
        {volunteering.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Volunteering</h2>
            {volunteering.map((vol) => (
              <div key={vol.id} className="mb-3 break-inside-avoid">
                <h3 className="font-bold">{vol.role}</h3>
                <p className="text-sm text-gray-600">{vol.organization} | {vol.dateRange}</p>
                <p className="text-sm whitespace-pre-line">{vol.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        <section className="resume-section">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3 break-inside-avoid">
              <h3 className="font-bold">{edu.degree}</h3>
              <p className="text-sm text-gray-600">{edu.institution} | {edu.dateRange}</p>
              <p className="text-sm whitespace-pre-line">{edu.description}</p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="bg-gray-100 px-2 py-1 rounded text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Languages */}
        {languages.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Languages</h2>
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
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Certifications</h2>
            {certificates.map((cert) => (
              <div key={cert.id} className="mb-2 break-inside-avoid">
                <p className="font-medium">{cert.name}</p>
                <p className="text-sm text-gray-600">
                  {cert.issuer} {cert.date && `· ${cert.date}`}
                </p>
                {cert.credentialId && <p className="text-xs text-gray-500">ID: {cert.credentialId}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Awards */}
        {awards.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Awards & Honors</h2>
            {awards.map((award) => (
              <div key={award.id} className="mb-2 break-inside-avoid">
                <p className="font-medium">{award.title}</p>
                <p className="text-sm text-gray-600">{award.issuer} | {award.date}</p>
                {award.description && <p className="text-sm mt-1">{award.description}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Publications */}
        {publications.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Publications</h2>
            {publications.map((pub) => (
              <div key={pub.id} className="mb-2 break-inside-avoid">
                <p className="font-medium">{pub.title}</p>
                <p className="text-sm text-gray-600">{pub.publisher}</p>
                <p className="text-sm text-gray-500">{pub.date}</p>
                {pub.link && (
                  <a href={pub.link} className="text-sm text-indigo-600" target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                )}
                {pub.description && <p className="text-sm mt-1">{pub.description}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Hobbies */}
        {hobbies.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Hobbies & Interests</h2>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <span key={hobby.id} className="bg-gray-100 px-2 py-1 rounded text-sm">
                  {hobby.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* References */}
        {references.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">References</h2>
            {references.map((ref) => (
              <div key={ref.id} className="mb-2 break-inside-avoid">
                <p className="font-medium">{ref.name}</p>
                <p className="text-sm text-gray-700">{ref.title}</p>
                {ref.company && <p className="text-sm text-gray-600">{ref.company}</p>}
                {ref.email && <p className="text-xs text-indigo-600 break-all">{ref.email}</p>}
                {ref.phone && <p className="text-xs text-gray-500">{ref.phone}</p>}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}