// components/templates/Template20.tsx
import { ResumeData } from '@/app/lib/types';

export default function Template20({ data }: { data: ResumeData }) {
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
      {/* Header with subtle accent */}
      <div className="bg-gray-50 px-6 py-8 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-gray-800">
          {personal.firstName} {personal.lastName}
        </h1>
        <p className="text-lg text-gray-600 mt-1">{personal.title}</p>
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
                className="text-gray-500 text-sm hover:text-gray-700"
              >
                {link.platform}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="p-6 space-y-8">
        {/* Profile */}
        <section className="resume-section">
          <h2 className="text-xl font-semibold text-gray-800 border-l-3 border-gray-400 pl-3 mb-2">Profile</h2>
          <p className="text-gray-700">{personal.summary}</p>
        </section>

        {/* Two‑column grid for Skills and selected Projects preview */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Skills section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 border-l-3 border-gray-400 pl-3 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages (if any) */}
          {languages.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 border-l-3 border-gray-400 pl-3 mb-2">Languages</h2>
              <ul className="list-disc list-inside text-sm">
                {languages.map((lang) => (
                  <li key={lang.id}>{lang.name} {lang.proficiency && `(${lang.proficiency})`}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Experience – full width */}
        <section className="resume-section">
          <h2 className="text-xl font-semibold text-gray-800 border-l-3 border-gray-400 pl-3 mb-3">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4 break-inside-avoid">
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="font-bold">{exp.title}</h3>
                <span className="text-sm text-gray-500">{exp.dateRange}</span>
              </div>
              <p className="text-sm text-gray-600">{exp.company}</p>
              <p className="text-sm mt-1 ">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Projects – can be displayed in a grid for creative feel */}
        {projects.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-semibold text-gray-800 border-l-3 border-gray-400 pl-3 mb-3">Projects</h2>
            <div className="grid gap-4">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-gray-50 p-3 rounded break-inside-avoid">
                  <h3 className="font-bold">{proj.name}</h3>
                  {proj.techStack && <p className="text-xs text-gray-500">{proj.techStack}</p>}
                  <p className="text-sm mt-1">{proj.description}</p>
                  {proj.link && <a href={proj.link} className="text-xs text-blue-500">Project link →</a>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Volunteering */}
        {volunteering.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-semibold text-gray-800 border-l-3 border-gray-400 pl-3 mb-2">Volunteering</h2>
            {volunteering.map((vol) => (
              <div key={vol.id} className="mb-3 break-inside-avoid">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-bold">{vol.role}</h3>
                  <span className="text-sm text-gray-500">{vol.dateRange}</span>
                </div>
                <p className="text-sm text-gray-600">{vol.organization}</p>
                <p className="text-sm whitespace-pre-line">{vol.description}</p>
              </div>
            ))}
          </section>
        )}
        {awards.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-semibold text-gray-800 border-l-3 border-gray-400 pl-3 mb-2">Awards & Honors</h2>
            <div className="grid  gap-3">
              {awards.map((award) => (
                <div key={award.id} className="break-inside-avoid">
                  <p className="font-medium">{award.title}</p>
                  <p className="text-xs text-gray-500">{award.issuer} | {award.date}</p>
                  {award.description && <p className="text-xs mt-1">{award.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        <section className="resume-section">
          <h2 className="text-xl font-semibold text-gray-800 border-l-3 border-gray-400 pl-3 mb-2">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3 break-inside-avoid">
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="font-bold">{edu.degree}</h3>
                <span className="text-sm text-gray-500">{edu.dateRange}</span>
              </div>
              <p className="text-sm text-gray-600">{edu.institution}</p>
              <p className="text-sm whitespace-pre-line">{edu.description}</p>
            </div>
          ))}
        </section>
            {/* Awards */}
        

        {/* Certifications */}
        {certificates.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-semibold text-gray-800 border-l-3 border-gray-400 pl-3 mb-2">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-2">
              {certificates.map((cert) => (
                <div key={cert.id} className="text-sm">
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-xs text-gray-500">{cert.issuer} {cert.date && `· ${cert.date}`}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Publications */}
        {publications.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-semibold text-gray-800 border-l-3 border-gray-400 pl-3 mb-2">Publications</h2>
            <div className="space-y-2">
              {publications.map((pub) => (
                <div key={pub.id} className="break-inside-avoid">
                  <p className="font-medium">{pub.title}</p>
                  <p className="text-sm text-gray-600">{pub.publisher}</p>
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <span className="text-xs text-gray-500">{pub.date}</span>
                    {pub.link && <a href={pub.link} className="text-xs text-blue-500">Link</a>}
                  </div>
                  {pub.description && <p className="text-xs mt-1">{pub.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Hobbies */}
        {hobbies.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-semibold text-gray-800 border-l-3 border-gray-400 pl-3 mb-2">Hobbies</h2>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <span key={hobby.id} className="bg-gray-100 px-2 py-1 rounded text-sm">{hobby.name}</span>
              ))}
            </div>
          </section>
        )}

        {/* References */}
        {references.length > 0 && (
          <section className="resume-section">
            <h2 className="text-xl font-semibold text-gray-800 border-l-3 border-gray-400 pl-3 mb-2">References</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {references.map((ref) => (
                <div key={ref.id} className="break-inside-avoid">
                  <p className="font-medium">{ref.name}</p>
                  <p className="text-sm text-gray-700">{ref.title}</p>
                  {ref.company && <p className="text-xs text-gray-500">{ref.company}</p>}
                  {ref.email && <p className="text-xs text-blue-600 break-all">{ref.email}</p>}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}