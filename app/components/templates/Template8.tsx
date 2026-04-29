// components/templates/Template8.tsx
import { ResumeData } from '@/app/lib/types';

interface Template8Props {
  data: ResumeData;
}

export default function Template8({ data }: Template8Props) {
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
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden print:shadow-none max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 gap-0">
        {/* MAIN CONTENT (LEFT) */}
        <div className="md:col-span-2 p-6 space-y-6">
          {/* Header */}
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-800">
              {personal.firstName} {personal.lastName}
            </h1>
            <p className="text-md text-pink-600 mt-1">{personal.title}</p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-500 mt-2">
              {personal.email && <span>{personal.email}</span>}
              {personal.phone && <span>{personal.phone}</span>}
              {personal.address && <span>{personal.address}</span>}
            </div>
          </div>

          {/* Profile */}
          <section className="resume-section">
            <h2 className="text-xl font-bold text-gray-800 border-l-4 border-pink-500 pl-3 mb-3">
              Profile
            </h2>
            <p className="text-gray-700">{personal.summary}</p>
          </section>

          {/* Experience */}
          <section className="resume-section">
            <h2 className="text-xl font-bold text-gray-800 border-l-4 border-pink-500 pl-3 mb-3">
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
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 border-l-4 border-pink-500 pl-3 mb-3">
                Projects
              </h2>
              {projects.map((proj) => (
                <div key={proj.id} className="project-item mb-4 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="text-lg font-semibold">{proj.name}</h3>
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-sm text-pink-600">
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
              <h2 className="text-xl font-bold text-gray-800 border-l-4 border-pink-500 pl-3 mb-3">
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
          <section className="resume-section">
            <h2 className="text-xl font-bold text-gray-800 border-l-4 border-pink-500 pl-3 mb-3">
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

          {/* Awards */}
          {awards.length > 0 && (
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 border-l-4 border-pink-500 pl-3 mb-3">
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
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 border-l-4 border-pink-500 pl-3 mb-3">
                Publications
              </h2>
              {publications.map((pub) => (
                <div key={pub.id} className="publication-item mb-3 break-inside-avoid">
                  <p className="font-semibold">{pub.title}</p>
                  <p className="text-sm text-gray-600">{pub.publisher}</p>
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <span className="text-sm text-gray-500">{pub.date}</span>
                    {pub.link && <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-sm text-pink-600">Link</a>}
                  </div>
                  {pub.description && <p className="text-sm mt-1">{pub.description}</p>}
                </div>
              ))}
            </section>
          )}

          {/* References */}
          {references.length > 0 && (
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 border-l-4 border-pink-500 pl-3 mb-3">
                References
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {references.map((ref) => (
                  <div key={ref.id} className="reference-item break-inside-avoid">
                    <p className="font-semibold">{ref.name}</p>
                    <p className="text-sm text-gray-700">{ref.title}</p>
                    {ref.company && <p className="text-sm text-gray-600">{ref.company}</p>}
                    {ref.email && <p className="text-xs text-pink-600 break-all">{ref.email}</p>}
                    {ref.phone && <p className="text-xs text-gray-500">{ref.phone}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-gradient-to-b from-pink-50 to-white p-6 rounded-r-2xl">
          <div className="text-center mb-6">
            
            <h3 className="font-semibold mt-2">{personal.firstName} {personal.lastName}</h3>
            <p className="text-sm text-gray-600">{personal.title}</p>
          </div>

          {/* Contact */}
          <div className="mb-5">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Contact</h4>
            <div className="space-y-1 text-sm">
              {personal.email && <p>✉️ {personal.email}</p>}
              {personal.phone && <p>📞 {personal.phone}</p>}
              {personal.address && <p>📍 {personal.address}</p>}
            </div>
          </div>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="mb-5">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Social</h4>
              <div className="space-y-1">
                {socialLinks.map((link) => (
                  <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="block text-sm text-pink-600 hover:underline">
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          <div className="mb-5">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Skills</h4>
            <div className="flex flex-wrap gap-1">
              {skills.map((skill, i) => (
                <span key={i} className="bg-pink-100 text-pink-800 px-2 py-0.5 rounded text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          {languages.length > 0 && (
            <div className="mb-5">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Languages</h4>
              <ul className="list-disc list-inside text-sm space-y-0">
                {languages.map((lang) => (
                  <li key={lang.id}>
                    {lang.name} {lang.proficiency && <span className="text-gray-500 text-xs">({lang.proficiency})</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Certifications */}
          {certificates.length > 0 && (
            <div className="mb-5">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Certifications</h4>
              <div className="space-y-1">
                {certificates.map((cert) => (
                  <div key={cert.id} className="text-sm">
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-xs text-gray-600">{cert.issuer} {cert.date && `(${cert.date})`}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hobbies */}
          {hobbies.length > 0 && (
            <div className="mb-5">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Interests</h4>
              <div className="flex flex-wrap gap-1">
                {hobbies.map((hobby) => (
                  <span key={hobby.id} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">
                    {hobby.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}