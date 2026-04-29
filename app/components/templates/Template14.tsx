// components/templates/Template14.tsx
import { ResumeData } from '@/app/lib/types';

export default function Template14({ data }: { data: ResumeData }) {
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
    <div className="bg-white shadow-lg rounded-md overflow-hidden print:shadow-none max-w-4xl mx-auto p-6">
      {/* Header – clean and compact */}
      <div className="text-center border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {personal.firstName} {personal.lastName}
        </h1>
        <p className="text-gray-600 text-lg mt-1">{personal.title}</p>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500 mt-2">
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
                className="text-blue-600 text-sm hover:underline"
              >
                {link.platform}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* All sections – single column, full width */}
      <div className="space-y-6">
        {/* Profile */}
        <section className="resume-section">
          <h2 className="text-lg font-semibold text-gray-800 border-l-3 border-blue-500 pl-2 mb-2">
            Profile
          </h2>
          <p className="text-gray-700 text-sm">{personal.summary}</p>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2 className="text-lg font-semibold text-gray-800 border-l-3 border-blue-500 pl-2 mb-2">
            Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-3 break-inside-avoid">
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="font-bold text-gray-800">{exp.title}</h3>
                <span className="text-xs text-gray-500">{exp.dateRange}</span>
              </div>
              <p className="text-sm text-gray-600">{exp.company}</p>
              <p className="text-sm mt-1 whitespace-pre-line">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        {projects.length > 0 && (
          <section className="resume-section">
            <h2 className="text-lg font-semibold text-gray-800 border-l-3 border-blue-500 pl-2 mb-2">
              Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="mb-3 break-inside-avoid">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-bold text-gray-800">{proj.name}</h3>
                  {proj.link && (
                    <a href={proj.link} className="text-xs text-blue-500" target="_blank" rel="noopener noreferrer">
                      Link
                    </a>
                  )}
                </div>
                {proj.techStack && <p className="text-sm text-gray-600">{proj.techStack}</p>}
                <p className="text-sm whitespace-pre-line">{proj.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Volunteering */}
        {volunteering.length > 0 && (
          <section className="resume-section">
            <h2 className="text-lg font-semibold text-gray-800 border-l-3 border-blue-500 pl-2 mb-2">
              Volunteering
            </h2>
            {volunteering.map((vol) => (
              <div key={vol.id} className="mb-3 break-inside-avoid">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-bold text-gray-800">{vol.role}</h3>
                  <span className="text-xs text-gray-500">{vol.dateRange}</span>
                </div>
                <p className="text-sm text-gray-600">{vol.organization}</p>
                <p className="text-sm whitespace-pre-line">{vol.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        <section className="resume-section">
          <h2 className="text-lg font-semibold text-gray-800 border-l-3 border-blue-500 pl-2 mb-2">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3 break-inside-avoid">
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                <span className="text-xs text-gray-500">{edu.dateRange}</span>
              </div>
              <p className="text-sm text-gray-600">{edu.institution}</p>
              <p className="text-sm whitespace-pre-line">{edu.description}</p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2 className="text-lg font-semibold text-gray-800 border-l-3 border-blue-500 pl-2 mb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-1">
            {skills.map((skill, i) => (
              <span key={i} className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Languages */}
        {languages.length > 0 && (
          <section className="resume-section">
            <h2 className="text-lg font-semibold text-gray-800 border-l-3 border-blue-500 pl-2 mb-2">
              Languages
            </h2>
            <ul className="list-disc list-inside text-sm">
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
            <h2 className="text-lg font-semibold text-gray-800 border-l-3 border-blue-500 pl-2 mb-2">
              Certifications
            </h2>
            {certificates.map((cert) => (
              <div key={cert.id} className="mb-1">
                <p className="font-medium text-sm">{cert.name}</p>
                <p className="text-xs text-gray-600">{cert.issuer} {cert.date && `(${cert.date})`}</p>
              </div>
            ))}
          </section>
        )}

        {/* Awards */}
        {awards.length > 0 && (
          <section className="resume-section">
            <h2 className="text-lg font-semibold text-gray-800 border-l-3 border-blue-500 pl-2 mb-2">
              Awards & Honors
            </h2>
            {awards.map((award) => (
              <div key={award.id} className="mb-2">
                <p className="font-medium text-sm">{award.title}</p>
                <p className="text-xs text-gray-600">{award.issuer} | {award.date}</p>
                {award.description && <p className="text-xs mt-1">{award.description}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Publications */}
        {publications.length > 0 && (
          <section className="resume-section">
            <h2 className="text-lg font-semibold text-gray-800 border-l-3 border-blue-500 pl-2 mb-2">
              Publications
            </h2>
            {publications.map((pub) => (
              <div key={pub.id} className="mb-2">
                <p className="font-medium text-sm">{pub.title}</p>
                <p className="text-xs text-gray-600">{pub.publisher} | {pub.date}</p>
                {pub.link && <a href={pub.link} className="text-xs text-blue-500">Link</a>}
                {pub.description && <p className="text-xs mt-1">{pub.description}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Hobbies */}
        {hobbies.length > 0 && (
          <section className="resume-section">
            <h2 className="text-lg font-semibold text-gray-800 border-l-3 border-blue-500 pl-2 mb-2">
              Hobbies & Interests
            </h2>
            <div className="flex flex-wrap gap-1">
              {hobbies.map((hobby) => (
                <span key={hobby.id} className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                  {hobby.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* References */}
        {references.length > 0 && (
          <section className="resume-section">
            <h2 className="text-lg font-semibold text-gray-800 border-l-3 border-blue-500 pl-2 mb-2">
              References
            </h2>
            {references.map((ref) => (
              <div key={ref.id} className="mb-2">
                <p className="font-medium text-sm">{ref.name}</p>
                <p className="text-xs text-gray-700">{ref.title}</p>
                {ref.company && <p className="text-xs text-gray-600">{ref.company}</p>}
                {ref.email && <p className="text-xs text-blue-600 break-all">{ref.email}</p>}
                {ref.phone && <p className="text-xs text-gray-500">{ref.phone}</p>}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}