// components/templates/Template7.tsx
import { ResumeData } from '@/app/lib/types';

interface Template7Props {
  data: ResumeData;
}

export default function Template7({ data }: Template7Props) {
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
    <div className="bg-white shadow-xl rounded-lg overflow-hidden print:shadow-xl max-w-4xl mx-auto flex">
      {/* Left accent bar */}
      <div className="w-2 bg-indigo-600 print:bg-indigo-600" />

      {/* Main content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            {personal.firstName} {personal.lastName}
          </h1>
          <p className="text-lg text-indigo-600 mt-1">{personal.title}</p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-3">
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && <span>{personal.phone}</span>}
            {personal.address && <span>{personal.address}</span>}
          </div>
          {socialLinks.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-2 text-xs">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Profile */}
        <section className="resume-section mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-1 mb-3">
            Profile
          </h2>
          <p className="text-gray-700">{personal.summary}</p>
        </section>

        {/* Experience */}
        <section className="resume-section mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-1 mb-3">
            Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="experience-item mb-4 break-inside-avoid">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <span className="text-sm text-gray-500">{exp.dateRange}</span>
              </div>
              <p className="text-gray-700 font-medium">{exp.company}</p>
              <p className="text-sm mt-1 whitespace-pre-line">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        {projects.length > 0 && (
          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-1 mb-3">
              Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="project-item mb-4 break-inside-avoid">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="text-lg font-semibold">{proj.name}</h3>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600">
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
          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-1 mb-3">
              Volunteering
            </h2>
            {volunteering.map((vol) => (
              <div key={vol.id} className="volunteering-item mb-4 break-inside-avoid">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="text-lg font-semibold">{vol.role}</h3>
                  <span className="text-sm text-gray-500">{vol.dateRange}</span>
                </div>
                <p className="text-gray-700 font-medium">{vol.organization}</p>
                <p className="text-sm mt-1 whitespace-pre-line">{vol.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        <section className="resume-section mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-1 mb-3">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="education-item mb-4 break-inside-avoid">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <span className="text-sm text-gray-500">{edu.dateRange}</span>
              </div>
              <p className="text-gray-700">{edu.institution}</p>
              <p className="text-sm mt-1 whitespace-pre-line">{edu.description}</p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="resume-section mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-1 mb-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-indigo-50 text-indigo-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Certifications */}
        {certificates.length > 0 && (
          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-1 mb-3">
              Certifications
            </h2>
            <div className="space-y-2">
              {certificates.map((cert) => (
                <div key={cert.id} className="break-inside-avoid">
                  <p className="font-semibold">{cert.name}</p>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  {cert.date && <p className="text-sm text-gray-500">{cert.date}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-1 mb-3">
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

        {/* Awards */}
        {awards.length > 0 && (
          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-1 mb-3">
              Awards & Honors
            </h2>
            {awards.map((award) => (
              <div key={award.id} className="award-item mb-3 break-inside-avoid">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
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
          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-1 mb-3">
              Publications
            </h2>
            {publications.map((pub) => (
              <div key={pub.id} className="publication-item mb-3 break-inside-avoid">
                <p className="font-semibold">{pub.title}</p>
                <p className="text-sm text-gray-600">{pub.publisher}</p>
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <span className="text-sm text-gray-500">{pub.date}</span>
                  {pub.link && <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600">Link</a>}
                </div>
                {pub.description && <p className="text-sm mt-1">{pub.description}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Hobbies */}
        {hobbies.length > 0 && (
          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-1 mb-3">
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
          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-1 mb-3">
              References
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {references.map((ref) => (
                <div key={ref.id} className="reference-item break-inside-avoid">
                  <p className="font-semibold">{ref.name}</p>
                  <p className="text-sm text-gray-700">{ref.title}</p>
                  {ref.company && <p className="text-sm text-gray-600">{ref.company}</p>}
                  {ref.email && <p className="text-xs text-indigo-600 break-all">{ref.email}</p>}
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