// components/templates/Template4.tsx
import { ResumeData } from '@/app/lib/types';

interface Template4Props {
  data: ResumeData;
}

export default function Template4({ data }: Template4Props) {
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
    publications=[],
    references=[],
  } = data;

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden print:shadow-xl max-w-4xl mx-auto">
      {/* Top banner */}
      <div className="bg-indigo-700 text-white px-6 py-4 print:bg-indigo-700">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold">
              {personal.firstName} {personal.lastName}
            </h1>
            <p className="text-indigo-200">{personal.title}</p>
          </div>
          <div className="text-right text-sm">
            {personal.email && <div>{personal.email}</div>}
            {personal.phone && <div>{personal.phone}</div>}
            {personal.address && <div>{personal.address}</div>}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3">
        {/* Sidebar (left) – 1/3 width */}
        <div className="bg-gray-50 p-6 print:bg-gray-50">
          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Connect</h3>
              <div className="space-y-1">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-indigo-600 hover:underline break-all"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Skills</h3>
            <div className="flex flex-wrap gap-1">
              {skills.map((skill, i) => (
                <span key={i} className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          {languages.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Languages</h3>
              <ul className="space-y-1">
                {languages.map((lang) => (
                  <li key={lang.id} className="text-sm">
                    {lang.name} {lang.proficiency && <span className="text-gray-500">({lang.proficiency})</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Certifications */}
          {certificates.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Certifications</h3>
              <div className="space-y-2">
                {certificates.map((cert) => (
                  <div key={cert.id} className="break-inside-avoid">
                    <p className="text-sm font-medium">{cert.name}</p>
                    <p className="text-xs text-gray-600">{cert.issuer}</p>
                    {cert.date && <p className="text-xs text-gray-500">{cert.date}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hobbies */}
          {hobbies.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Interests</h3>
              <div className="flex flex-wrap gap-1">
                {hobbies.map((hobby) => (
                  <span key={hobby.id} className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">
                    {hobby.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main content (right) – 2/3 width */}
        <div className="md:col-span-2 p-6">
          {/* Profile */}
          <section className="resume-section mb-6">
            <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mb-2">
              Profile
            </h2>
            <p className="text-sm text-gray-700">{personal.summary}</p>
          </section>

          {/* Experience */}
          <section className="resume-section mb-6">
            <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mb-2">
              Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="experience-item mb-4 break-inside-avoid">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="text-md font-semibold">{exp.title}</h3>
                  <span className="text-xs text-gray-500">{exp.dateRange}</span>
                </div>
                <p className="text-sm text-indigo-600">{exp.company}</p>
                <p className="text-sm mt-1">{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Projects */}
          {projects.length > 0 && (
            <section className="resume-section mb-6">
              <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mb-2">
                Projects
              </h2>
              {projects.map((proj) => (
                <div key={proj.id} className="project-item mb-4 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="text-md font-semibold">{proj.name}</h3>
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600">
                        Link
                      </a>
                    )}
                  </div>
                  {proj.techStack && <p className="text-xs text-gray-600">{proj.techStack}</p>}
                  <p className="text-sm mt-1">{proj.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Volunteering */}
          {volunteering.length > 0 && (
            <section className="resume-section mb-6">
              <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mb-2">
                Volunteering
              </h2>
              {volunteering.map((vol) => (
                <div key={vol.id} className="volunteering-item mb-4 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="text-md font-semibold">{vol.role}</h3>
                    <span className="text-xs text-gray-500">{vol.dateRange}</span>
                  </div>
                  <p className="text-sm text-indigo-600">{vol.organization}</p>
                  <p className="text-sm mt-1">{vol.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Education */}
          <section className="resume-section mb-6">
            <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mb-2">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="education-item mb-4 break-inside-avoid">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="text-md font-semibold">{edu.degree}</h3>
                  <span className="text-xs text-gray-500">{edu.dateRange}</span>
                </div>
                <p className="text-sm text-indigo-600">{edu.institution}</p>
                <p className="text-sm mt-1">{edu.description}</p>
              </div>
            ))}
          </section>

          {/* Awards */}
          {awards.length > 0 && (
            <section className="resume-section mb-6">
              <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mb-2">
                Awards & Honors
              </h2>
              {awards.map((award) => (
                <div key={award.id} className="award-item mb-2 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <span className="font-semibold text-sm">{award.title}</span>
                    <span className="text-xs text-gray-500">{award.date}</span>
                  </div>
                  <p className="text-sm">{award.issuer}</p>
                  {award.description && <p className="text-xs mt-1">{award.description}</p>}
                </div>
              ))}
            </section>
          )}

          {/* Publications */}
          {publications.length > 0 && (
            <section className="resume-section mb-6">
              <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mb-2">
                Publications
              </h2>
              {publications.map((pub) => (
                <div key={pub.id} className="publication-item mb-2 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <span className="font-semibold text-sm">{pub.title}</span>
                    <span className="text-xs text-gray-500">{pub.date}</span>
                  </div>
                  <p className="text-sm">{pub.publisher}</p>
                  {pub.link && <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600">Link</a>}
                  {pub.description && <p className="text-xs mt-1">{pub.description}</p>}
                </div>
              ))}
            </section>
          )}

          {/* References */}
          {references.length > 0 && (
            <section className="resume-section mb-6">
              <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mb-2">
                References
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {references.map((ref) => (
                  <div key={ref.id} className="reference-item break-inside-avoid">
                    <p className="font-semibold text-sm">{ref.name}</p>
                    <p className="text-xs text-gray-700">{ref.title}</p>
                    {ref.company && <p className="text-xs text-gray-600">{ref.company}</p>}
                    {ref.email && <p className="text-xs text-blue-600 break-all">{ref.email}</p>}
                    {ref.phone && <p className="text-xs text-gray-500">{ref.phone}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}