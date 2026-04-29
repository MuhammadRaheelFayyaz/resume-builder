// components/templates/Template16.tsx
import { ResumeData } from '@/app/lib/types';

export default function Template16({ data }: { data: ResumeData }) {
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
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          {personal.firstName} {personal.lastName}
        </h1>
        <p className="text-xl text-gray-600 mt-1">{personal.title}</p>
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
                className="text-blue-500 text-sm hover:underline"
              >
                {link.platform}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Profile – simple block */}
      <div className="mb-8">
        <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-1 mb-3">Profile</h2>
        <p className="text-gray-700">{personal.summary}</p>
      </div>

      {/* Timeline sections */}
      <div className="space-y-10">
        {/* Experience Timeline */}
        {experience.length > 0 && (
          <div>
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-1 mb-5">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="flex flex-col md:flex-row md:gap-4 break-inside-avoid">
                  <div className="md:w-1/3 mb-2 md:mb-0">
                    <div className="font-semibold text-blue-600">{exp.dateRange}</div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-lg font-bold">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm mt-1 whitespace-pre-line">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Timeline */}
        {projects.length > 0 && (
          <div>
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-1 mb-5">Projects</h2>
            <div className="space-y-6">
              {projects.map((proj) => (
                <div key={proj.id} className="flex flex-col md:flex-row md:gap-4 break-inside-avoid">
                  <div className="md:w-1/3 mb-2 md:mb-0">
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500">
                        View Project
                      </a>
                    )}
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-lg font-bold">{proj.name}</h3>
                    {proj.techStack && <p className="text-sm text-gray-600">{proj.techStack}</p>}
                    <p className="text-sm mt-1 whitespace-pre-line">{proj.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Volunteering Timeline */}
        {volunteering.length > 0 && (
          <div>
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-1 mb-5">Volunteering</h2>
            <div className="space-y-6">
              {volunteering.map((vol) => (
                <div key={vol.id} className="flex flex-col md:flex-row md:gap-4 break-inside-avoid">
                  <div className="md:w-1/3 mb-2 md:mb-0">
                    <div className="font-semibold text-blue-600">{vol.dateRange}</div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-lg font-bold">{vol.role}</h3>
                    <p className="text-gray-600">{vol.organization}</p>
                    <p className="text-sm mt-1 whitespace-pre-line">{vol.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Timeline */}
        {education.length > 0 && (
          <div>
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-1 mb-5">Education</h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="flex flex-col md:flex-row md:gap-4 break-inside-avoid">
                  <div className="md:w-1/3 mb-2 md:mb-0">
                    <div className="font-semibold text-blue-600">{edu.dateRange}</div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-lg font-bold">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm mt-1 whitespace-pre-line">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills (simple list) */}
        <div>
          <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-1 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="bg-gray-100 px-2 py-1 rounded text-sm">{skill}</span>
            ))}
          </div>
        </div>

        {/* Languages */}
        {languages.length > 0 && (
          <div>
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-1 mb-3">Languages</h2>
            <ul className="list-disc list-inside space-y-1">
              {languages.map((lang) => (
                <li key={lang.id}>{lang.name} {lang.proficiency && `(${lang.proficiency})`}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Certifications */}
        {certificates.length > 0 && (
          <div>
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-1 mb-3">Certifications</h2>
            <div className="space-y-2">
              {certificates.map((cert) => (
                <div key={cert.id}>
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-sm text-gray-600">{cert.issuer} {cert.date && `(${cert.date})`}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Awards */}
        {awards.length > 0 && (
          <div>
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-1 mb-3">Awards & Honors</h2>
            {awards.map((award) => (
              <div key={award.id} className="mb-2">
                <p className="font-medium">{award.title}</p>
                <p className="text-sm text-gray-600">{award.issuer} | {award.date}</p>
                {award.description && <p className="text-sm mt-1">{award.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Publications */}
        {publications.length > 0 && (
          <div>
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-1 mb-3">Publications</h2>
            {publications.map((pub) => (
              <div key={pub.id} className="mb-2">
                <p className="font-medium">{pub.title}</p>
                <p className="text-sm text-gray-600">{pub.publisher} | {pub.date}</p>
                {pub.link && <a href={pub.link} className="text-sm text-blue-500">Link</a>}
                {pub.description && <p className="text-sm mt-1">{pub.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Hobbies */}
        {hobbies.length > 0 && (
          <div>
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-1 mb-3">Hobbies & Interests</h2>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <span key={hobby.id} className="bg-gray-100 px-2 py-1 rounded text-sm">{hobby.name}</span>
              ))}
            </div>
          </div>
        )}

        {/* References */}
        {references.length > 0 && (
          <div>
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-1 mb-3">References</h2>
            <div className="space-y-3">
              {references.map((ref) => (
                <div key={ref.id}>
                  <p className="font-medium">{ref.name}</p>
                  <p className="text-sm text-gray-700">{ref.title}</p>
                  {ref.company && <p className="text-sm text-gray-600">{ref.company}</p>}
                  {ref.email && <p className="text-xs text-blue-600">{ref.email}</p>}
                  {ref.phone && <p className="text-xs text-gray-500">{ref.phone}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}