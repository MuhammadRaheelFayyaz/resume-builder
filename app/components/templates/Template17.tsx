// components/templates/Template17.tsx
import { ResumeData } from '@/app/lib/types';

export default function Template17({ data }: { data: ResumeData }) {
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
    <div className="bg-white shadow-lg rounded-sm overflow-hidden print:shadow-none max-w-4xl mx-auto p-8 font-serif text-gray-800">
      {/* Header */}
      <div className="text-center border-b border-gray-300 pb-6 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          {personal.firstName} {personal.lastName}
        </h1>
        <p className="text-xl text-gray-600 mt-2">{personal.title}</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mt-4">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.address && <span>{personal.address}</span>}
        </div>
        {socialLinks.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mt-3 text-sm">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                {link.platform}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-8">
        {/* Profile */}
        <section className="resume-section">
          <h2 className="text-2xl font-semibold italic border-l-4 border-gray-400 pl-3 mb-3">Profile</h2>
          <p className="leading-relaxed">{personal.summary}</p>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2 className="text-2xl font-semibold italic border-l-4 border-gray-400 pl-3 mb-3">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-5 break-inside-avoid">
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <span className="text-sm text-gray-500">{exp.dateRange}</span>
              </div>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-sm mt-1 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        {projects.length > 0 && (
          <section className="resume-section">
            <h2 className="text-2xl font-semibold italic border-l-4 border-gray-400 pl-3 mb-3">Projects</h2>
            {projects.map((proj) => (
              <div key={proj.id} className="mb-4 break-inside-avoid">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="text-xl font-bold">{proj.name}</h3>
                  {proj.link && <a href={proj.link} className="text-sm text-blue-600">Link</a>}
                </div>
                {proj.techStack && <p className="text-sm text-gray-600">{proj.techStack}</p>}
                <p className="text-sm mt-1 leading-relaxed">{proj.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Volunteering */}
        {volunteering.length > 0 && (
          <section className="resume-section">
            <h2 className="text-2xl font-semibold italic border-l-4 border-gray-400 pl-3 mb-3">Volunteering</h2>
            {volunteering.map((vol) => (
              <div key={vol.id} className="mb-4 break-inside-avoid">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="text-xl font-bold">{vol.role}</h3>
                  <span className="text-sm text-gray-500">{vol.dateRange}</span>
                </div>
                <p className="text-gray-600">{vol.organization}</p>
                <p className="text-sm mt-1 leading-relaxed">{vol.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        <section className="resume-section">
          <h2 className="text-2xl font-semibold italic border-l-4 border-gray-400 pl-3 mb-3">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4 break-inside-avoid">
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <span className="text-sm text-gray-500">{edu.dateRange}</span>
              </div>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm mt-1 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2 className="text-2xl font-semibold italic border-l-4 border-gray-400 pl-3 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </section>

        {/* Languages */}
        {languages.length > 0 && (
          <section className="resume-section">
            <h2 className="text-2xl font-semibold italic border-l-4 border-gray-400 pl-3 mb-3">Languages</h2>
            <ul className="list-disc list-inside space-y-1">
              {languages.map((lang) => (
                <li key={lang.id}>{lang.name} {lang.proficiency && `(${lang.proficiency})`}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Certifications */}
        {certificates.length > 0 && (
          <section className="resume-section">
            <h2 className="text-2xl font-semibold italic border-l-4 border-gray-400 pl-3 mb-3">Certifications</h2>
            {certificates.map((cert) => (
              <div key={cert.id} className="mb-2">
                <p className="font-medium">{cert.name}</p>
                <p className="text-sm text-gray-600">{cert.issuer} {cert.date && `· ${cert.date}`}</p>
              </div>
            ))}
          </section>
        )}

        {/* Awards */}
        {awards.length > 0 && (
          <section className="resume-section">
            <h2 className="text-2xl font-semibold italic border-l-4 border-gray-400 pl-3 mb-3">Awards</h2>
            {awards.map((award) => (
              <div key={award.id} className="mb-3">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-bold">{award.title}</h3>
                  <span className="text-sm text-gray-500">{award.date}</span>
                </div>
                <p className="text-gray-600">{award.issuer}</p>
                {award.description && <p className="text-sm mt-1">{award.description}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Publications */}
        {publications.length > 0 && (
          <section className="resume-section">
            <h2 className="text-2xl font-semibold italic border-l-4 border-gray-400 pl-3 mb-3">Publications</h2>
            {publications.map((pub) => (
              <div key={pub.id} className="mb-3">
                <p className="font-bold">{pub.title}</p>
                <p className="text-sm text-gray-600">{pub.publisher}</p>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <span className="text-sm text-gray-500">{pub.date}</span>
                  {pub.link && <a href={pub.link} className="text-sm text-blue-600">Link</a>}
                </div>
                {pub.description && <p className="text-sm mt-1">{pub.description}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Hobbies */}
        {hobbies.length > 0 && (
          <section className="resume-section">
            <h2 className="text-2xl font-semibold italic border-l-4 border-gray-400 pl-3 mb-3">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <span key={hobby.id} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{hobby.name}</span>
              ))}
            </div>
          </section>
        )}

        {/* References */}
        {references.length > 0 && (
          <section className="resume-section">
            <h2 className="text-2xl font-semibold italic border-l-4 border-gray-400 pl-3 mb-3">References</h2>
            <div className="space-y-3">
              {references.map((ref) => (
                <div key={ref.id}>
                  <p className="font-bold">{ref.name}</p>
                  <p className="text-sm">{ref.title}</p>
                  {ref.company && <p className="text-sm text-gray-600">{ref.company}</p>}
                  {ref.email && <p className="text-xs text-blue-600">{ref.email}</p>}
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