// components/templates/Template10.tsx
import { ResumeData } from '@/app/lib/types';

export default function Template10({ data }: { data: ResumeData }) {
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
    <div className="bg-white shadow-xl rounded-lg overflow-hidden print:shadow-none max-w-4xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          {personal.firstName} {personal.lastName}
        </h1>
        <p className="text-xl text-gray-600">{personal.title}</p>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500 mt-2">
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
                className="text-sm text-blue-600"
              >
                {link.platform}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* All sections – full width, single column */}
      <div className="space-y-8">
        {/* Profile */}
        <section className="resume-section">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Profile</h2>
          <p className="text-gray-700">{personal.summary}</p>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4 break-inside-avoid">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-gray-600">{exp.company} | {exp.dateRange}</p>
              <p className="text-sm mt-1 whitespace-pre-line">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        {projects.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Projects</h2>
            {projects.map((proj) => (
              <div key={proj.id} className="mb-3 break-inside-avoid">
                <h3 className="font-semibold">{proj.name}</h3>
                {proj.techStack && <p className="text-sm text-gray-600">{proj.techStack}</p>}
                <p className="text-sm whitespace-pre-line">{proj.description}</p>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500">
                    Link
                  </a>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        <section className="resume-section">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3 break-inside-avoid">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution} | {edu.dateRange}</p>
              <p className="text-sm whitespace-pre-line">{edu.description}</p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="bg-gray-200 px-2 py-1 rounded text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Languages */}
        {languages.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Languages</h2>
            <ul className="list-disc list-inside">
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
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Certifications</h2>
            {certificates.map((cert) => (
              <div key={cert.id} className="mb-2">
                <p className="font-medium">{cert.name}</p>
                <p className="text-sm text-gray-600">
                  {cert.issuer} {cert.date && `(${cert.date})`}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Volunteering */}
        {volunteering.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Volunteering</h2>
            {volunteering.map((vol) => (
              <div key={vol.id} className="mb-2 break-inside-avoid">
                <h3 className="font-semibold">{vol.role}</h3>
                <p className="text-sm text-gray-600">
                  {vol.organization} | {vol.dateRange}
                </p>
                <p className="text-sm whitespace-pre-line">{vol.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Awards */}
        {awards.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Awards & Honors</h2>
            {awards.map((aw) => (
              <div key={aw.id} className="mb-2">
                <p className="font-medium">{aw.title}</p>
                <p className="text-sm text-gray-600">
                  {aw.issuer} | {aw.date}
                </p>
                {aw.description && <p className="text-sm mt-1">{aw.description}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Publications */}
        {publications.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Publications</h2>
            {publications.map((pub) => (
              <div key={pub.id} className="mb-2">
                <p className="font-medium">{pub.title}</p>
                <p className="text-sm text-gray-600">
                  {pub.publisher} | {pub.date}
                </p>
                {pub.description && <p className="text-sm mt-1">{pub.description}</p>}
                {pub.link && (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500">
                    Link
                  </a>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Hobbies */}
        {hobbies.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Hobbies & Interests</h2>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((h) => (
                <span key={h.id} className="bg-gray-100 px-2 py-1 rounded text-sm">
                  {h.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* References */}
        {references.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">References</h2>
            {references.map((ref) => (
              <div key={ref.id} className="mb-2 break-inside-avoid">
                <p className="font-medium">{ref.name}</p>
                <p className="text-sm">
                  {ref.title}, {ref.company}
                </p>
                {ref.email && <p className="text-xs text-blue-600">{ref.email}</p>}
                {ref.phone && <p className="text-xs text-gray-500">{ref.phone}</p>}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}