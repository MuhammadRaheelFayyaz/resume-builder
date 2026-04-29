// components/templates/Template11.tsx
import { ResumeData } from '@/app/lib/types';

export default function Template11({ data }: { data: ResumeData }) {
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
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">
          {personal.firstName} {personal.lastName}
        </h1>
        <p className="text-xl text-blue-100 mb-4">{personal.title}</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {personal.email && <span>✉️ {personal.email}</span>}
          {personal.phone && <span>📞 {personal.phone}</span>}
          {personal.address && <span>📍 {personal.address}</span>}
        </div>
        {socialLinks.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:no-underline text-sm"
              >
                {link.platform}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Full‑width content */}
      <div className="p-8 space-y-8">
        {/* Profile */}
        <section className="resume-section">
          <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
            Profile
          </h2>
          <p className="text-gray-700">{personal.summary}</p>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
            Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-5 break-inside-avoid">
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <span className="text-sm text-gray-500">{exp.dateRange}</span>
              </div>
              <p className="text-blue-600 font-medium">{exp.company}</p>
              <p className="text-sm mt-1 whitespace-pre-line">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        {projects.length > 0 && (
          <section className="resume-section">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
              Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="mb-4 break-inside-avoid">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="text-lg font-semibold">{proj.name}</h3>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500">
                      Link
                    </a>
                  )}
                </div>
                {proj.techStack && <p className="text-sm text-gray-600 font-mono">{proj.techStack}</p>}
                <p className="text-sm mt-1 whitespace-pre-line">{proj.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Volunteering */}
        {volunteering.length > 0 && (
          <section className="resume-section">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
              Volunteering
            </h2>
            {volunteering.map((vol) => (
              <div key={vol.id} className="mb-4 break-inside-avoid">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="text-lg font-semibold">{vol.role}</h3>
                  <span className="text-sm text-gray-500">{vol.dateRange}</span>
                </div>
                <p className="text-blue-600 font-medium">{vol.organization}</p>
                <p className="text-sm mt-1 whitespace-pre-line">{vol.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        <section className="resume-section">
          <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4 break-inside-avoid">
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <span className="text-sm text-gray-500">{edu.dateRange}</span>
              </div>
              <p className="text-blue-600 font-medium">{edu.institution}</p>
              <p className="text-sm mt-1 whitespace-pre-line">{edu.description}</p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Languages */}
        {languages.length > 0 && (
          <section className="resume-section">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
              Languages
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
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
              Certifications
            </h2>
            <div className="space-y-2">
              {certificates.map((cert) => (
                <div key={cert.id} className="break-inside-avoid">
                  <p className="font-semibold">{cert.name}</p>
                  <p className="text-sm text-gray-600">
                    {cert.issuer} {cert.date && `· ${cert.date}`}
                  </p>
                  {cert.credentialId && <p className="text-xs text-gray-500">ID: {cert.credentialId}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Awards */}
        {awards.length > 0 && (
          <section className="resume-section">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
              Awards & Honors
            </h2>
            {awards.map((award) => (
              <div key={award.id} className="mb-3 break-inside-avoid">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-semibold">{award.title}</h3>
                  <span className="text-sm text-gray-500">{award.date}</span>
                </div>
                <p className="text-gray-700">{award.issuer}</p>
                {award.description && <p className="text-sm mt-1">{award.description}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Publications */}
        {publications.length > 0 && (
          <section className="resume-section">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
              Publications
            </h2>
            {publications.map((pub) => (
              <div key={pub.id} className="mb-3 break-inside-avoid">
                <p className="font-semibold">{pub.title}</p>
                <p className="text-sm text-gray-600">{pub.publisher}</p>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <span className="text-sm text-gray-500">{pub.date}</span>
                  {pub.link && (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500">
                      Link
                    </a>
                  )}
                </div>
                {pub.description && <p className="text-sm mt-1">{pub.description}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Hobbies */}
        {hobbies.length > 0 && (
          <section className="resume-section">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
              Hobbies & Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <span key={hobby.id} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {hobby.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* References */}
        {references.length > 0 && (
          <section className="resume-section">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
              References
            </h2>
            <div className="space-y-3">
              {references.map((ref) => (
                <div key={ref.id} className="break-inside-avoid">
                  <p className="font-semibold">{ref.name}</p>
                  <p className="text-sm text-gray-700">{ref.title}</p>
                  {ref.company && <p className="text-sm text-gray-600">{ref.company}</p>}
                  {ref.email && <p className="text-xs text-blue-600 break-all">{ref.email}</p>}
                  {ref.phone && <p className="text-xs text-gray-500">{ref.phone}</p>}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}