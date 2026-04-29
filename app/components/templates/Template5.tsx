// components/templates/Template5.tsx
import { ResumeData } from '@/app/lib/types';

interface Template5Props {
  data: ResumeData;
}

export default function Template5({ data }: Template5Props) {
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
      {/* Compact header (unchanged) */}
      <div className="bg-gray-800 text-white px-6 py-4 print:bg-gray-700">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div>
            <h1 className="text-2xl font-bold">
              {personal.firstName} {personal.lastName}
            </h1>
            <p className="text-gray-300 text-sm">{personal.title}</p>
          </div>
          <div className="text-right text-sm">
            {personal.email && <div>{personal.email}</div>}
            {personal.phone && <div>{personal.phone}</div>}
            {personal.address && <div>{personal.address}</div>}
          </div>
        </div>
      </div>

      {/* Single column layout – all sections full width */}
      <div className="p-6 space-y-6">
        {/* Profile */}
        <section className="resume-section">
          <h2 className="text-md font-bold text-gray-700 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">
            Profile
          </h2>
          <p className="text-sm text-gray-700">{personal.summary}</p>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2 className="text-md font-bold text-gray-700 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">
            Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="experience-item mb-3 break-inside-avoid">
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <h3 className="font-semibold text-sm">{exp.title}</h3>
                <span className="text-xs text-gray-500">{exp.dateRange}</span>
              </div>
              <p className="text-xs text-gray-600">{exp.company}</p>
              <p className="text-xs mt-1">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        {projects.length > 0 && (
          <section className="resume-section">
            <h2 className="text-md font-bold text-gray-700 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">
              Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="project-item mb-3 break-inside-avoid">
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
            <h2 className="text-md font-bold text-gray-700 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">
              Volunteering
            </h2>
            {volunteering.map((vol) => (
              <div key={vol.id} className="volunteering-item mb-3 break-inside-avoid">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <h3 className="font-semibold text-sm">{vol.role}</h3>
                  <span className="text-xs text-gray-500">{vol.dateRange}</span>
                </div>
                <p className="text-xs text-gray-600">{vol.organization}</p>
                <p className="text-xs mt-1">{vol.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        <section className="resume-section">
          <h2 className="text-md font-bold text-gray-700 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="education-item mb-3 break-inside-avoid">
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <h3 className="font-semibold text-sm">{edu.degree}</h3>
                <span className="text-xs text-gray-500">{edu.dateRange}</span>
              </div>
              <p className="text-xs text-gray-600">{edu.institution}</p>
              <p className="text-xs mt-1">{edu.description}</p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2 className="text-md font-bold text-gray-700 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">
            Skills
          </h2>
          <div className="flex flex-wrap gap-1">
            {skills.map((skill, i) => (
              <span key={i} className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded text-xs">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Certifications */}
        {certificates.length > 0 && (
          <section className="resume-section">
            <h2 className="text-md font-bold text-gray-700 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">
              Certifications
            </h2>
            <div className="space-y-2">
              {certificates.map((cert) => (
                <div key={cert.id} className="break-inside-avoid">
                  <p className="text-sm font-medium">{cert.name}</p>
                  <p className="text-xs text-gray-600">{cert.issuer}</p>
                  {cert.date && <p className="text-xs text-gray-500">{cert.date}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <section className="resume-section">
            <h2 className="text-md font-bold text-gray-700 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">
              Languages
            </h2>
            <ul className="list-disc list-inside text-xs">
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
          <section className="resume-section">
            <h2 className="text-md font-bold text-gray-700 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">
              Awards
            </h2>
            {awards.map((award) => (
              <div key={award.id} className="mb-2 break-inside-avoid">
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
            <h2 className="text-md font-bold text-gray-700 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">
              Publications
            </h2>
            {publications.map((pub) => (
              <div key={pub.id} className="mb-2 break-inside-avoid">
                <p className="text-sm font-semibold">{pub.title}</p>
                <p className="text-xs text-gray-600">{pub.publisher}</p>
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <span className="text-xs text-gray-500">{pub.date}</span>
                  {pub.link && (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600">
                      Link
                    </a>
                  )}
                </div>
                {pub.description && <p className="text-xs mt-1">{pub.description}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Hobbies */}
        {hobbies.length > 0 && (
          <section className="resume-section">
            <h2 className="text-md font-bold text-gray-700 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">
              Hobbies
            </h2>
            <div className="flex flex-wrap gap-1">
              {hobbies.map((hobby) => (
                <span key={hobby.id} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">
                  {hobby.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Social Links */}
        {socialLinks.length > 0 && (
          <section className="resume-section">
            <h2 className="text-md font-bold text-gray-700 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">
              Connect
            </h2>
            <div className="space-y-1">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-blue-600 hover:underline"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </section>
        )}

        {/* References */}
        {references.length > 0 && (
          <section className="resume-section">
            <h2 className="text-md font-bold text-gray-700 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">
              References
            </h2>
            <div className="space-y-2">
              {references.map((ref) => (
                <div key={ref.id} className="break-inside-avoid">
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
  );
}