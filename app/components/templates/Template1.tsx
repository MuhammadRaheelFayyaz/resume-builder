// components/templates/Template1.tsx
import { ResumeData } from '@/app/lib/types';

interface Template1Props {
  data: ResumeData;
}

export default function Template1({ data }: Template1Props) {
  const {
    personal,
    experience,
    volunteering=[],
    projects=[],
    education=[],
    skills=[],
    certificates=[],
    languages=[],
    awards=[],
    hobbies=[],
    socialLinks=[],
    references=[],
    publications=[],
  } = data;

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden print:shadow-none max-w-4xl mx-auto template1">
      <div className="grid md:grid-cols-3">
        {/* Sidebar (unchanged, includes skills, certs, languages) */}
        <div className="bg-gray-800 text-white p-6 print:bg-gray-700">
          <h1 className="text-2xl font-bold mb-1">
            {personal.firstName} {personal.lastName}
          </h1>
          <p className="text-gray-300 mb-4">{personal.title}</p>
          <div className="space-y-3 text-sm">
            {personal.email && <p>📧 {personal.email}</p>}
            {personal.phone && <p>📞 {personal.phone}</p>}
            {personal.address && <p>📍 {personal.address}</p>}
          </div>
          {/* Add social links here */}
          {socialLinks.length > 0 && (
            <div className="space-y-2 text-sm mt-4">
              {socialLinks.map((link) => (
                <p key={link.id}>
                  🔗 {link.platform}:{' '}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:underline break-all"
                  >
                    {link.url.replace(/^https?:\/\//, '').split('/')[0]}
                  </a>
                </p>
              ))}
            </div>
          )}
          <hr className="my-4 border-gray-600" />
          <h2 className="text-lg font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>

          {certificates.length > 0 && (
            <>
              <hr className="my-4 border-gray-600" />
              <h2 className="text-lg font-semibold mb-2">Certifications</h2>
              <div className="space-y-3">
                {certificates.map((cert) => (
                  <div key={cert.id} className="certificate-item break-inside-avoid">
                    <p className="font-medium text-sm">{cert.name}</p>
                    <p className="text-xs text-gray-300">
                      {cert.issuer} {cert.date && `· ${cert.date}`}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs text-gray-400">ID: {cert.credentialId}</p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {languages.length > 0 && (
            <>
              <hr className="my-4 border-gray-600" />
              <h2 className="text-lg font-semibold mb-2">Languages</h2>
              <ul className="space-y-1">
                {languages.map((lang) => (
                  <li key={lang.id} className="language-item text-sm break-inside-avoid">
                    <span className="font-medium">{lang.name}</span>
                    {lang.proficiency && (
                      <span className="text-gray-300 text-xs ml-1">({lang.proficiency})</span>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
          {hobbies.length > 0 && (
            <>
              <hr className="my-4 border-gray-600" />
              <h2 className="text-lg font-semibold mb-2">Hobbies & Interests</h2>
              <ul className="list-disc list-inside space-y-1">
                {hobbies.map((hobby) => (
                  <li key={hobby.id} className="text-sm break-inside-avoid">
                    {hobby.name}
                  </li>
                ))}
              </ul>
            </>
          )}
          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-2">Awards & Honors</h2>
            {awards.length === 0 ? (
              <p className="text-gray-500 italic">No awards added yet.</p>
            ) : (
              awards.map((award) => (
                <div key={award.id} className="award-item mb-4 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="text-lg font-semibold">{award.title}</h3>
                    <span className="text-sm text-gray-600">{award.date}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{award.issuer}</p>
                  {award.description && (
                    <p className="text-sm mt-1 whitespace-pre-line">{award.description}</p>
                  )}
                </div>
              ))
            )}
          </section>
          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-2">References</h2>
            {references.length === 0 ? (
              <p className="text-gray-500 italic">No references added yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {references.map((ref) => (
                  <div key={ref.id} className="reference-item break-inside-avoid border-l-4 border-gray-300 pl-3">
                    <p className="font-semibold">{ref.name}</p>
                    <p className="text-sm text-gray-700">{ref.title}</p>
                    {ref.company && <p className="text-sm text-gray-600">{ref.company}</p>}
                    {ref.email && <p className="text-xs text-blue-600 break-all">{ref.email}</p>}
                    {ref.phone && <p className="text-xs text-gray-500">{ref.phone}</p>}
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Main content */}
        <div className="md:col-span-2 p-6">
          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-2">Profile</h2>
            <p className="text-gray-700">{personal.summary}</p>
          </section>

          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-2">Experience</h2>
            {experience.length === 0 ? (
              <p className="text-gray-500 italic">No work experience added yet.</p>
            ) : (
              experience.map((exp) => (
                <div key={exp.id} className="experience-item mb-4 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <span className="text-sm text-gray-600">{exp.dateRange}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{exp.company}</p>
                  <p className="text-sm mt-1 whitespace-pre-line">{exp.description}</p>
                </div>
              ))
            )}
          </section>

          {/* Volunteering section */}
          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-2">Volunteering</h2>
            {volunteering.length === 0 ? (
              <p className="text-gray-500 italic">No volunteering entries yet.</p>
            ) : (
              volunteering.map((vol) => (
                <div key={vol.id} className="volunteering-item mb-4 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="text-lg font-semibold">{vol.role}</h3>
                    <span className="text-sm text-gray-600">{vol.dateRange}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{vol.organization}</p>
                  <p className="text-sm mt-1 whitespace-pre-line">{vol.description}</p>
                </div>
              ))
            )}
          </section>

          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-2">Projects</h2>
            {projects.length === 0 ? (
              <p className="text-gray-500 italic">No projects added yet.</p>
            ) : (
              projects.map((proj) => (
                <div key={proj.id} className="project-item mb-4 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="text-lg font-semibold">{proj.name}</h3>
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline print:text-blue-800"
                      >
                        Link →
                      </a>
                    )}
                  </div>
                  {proj.techStack && (
                    <p className="text-sm text-gray-600 font-mono">{proj.techStack}</p>
                  )}
                  <p className="text-sm mt-1 whitespace-pre-line">{proj.description}</p>
                </div>
              ))
            )}
          </section>

          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-2">Education</h2>
            {education.length === 0 ? (
              <p className="text-gray-500 italic">No education added yet.</p>
            ) : (
              education.map((edu) => (
                <div key={edu.id} className="education-item mb-4 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-gray-600">{edu.dateRange}</span>
                  </div>
                  <p className="text-gray-700">{edu.institution}</p>
                  <p className="text-sm mt-1 whitespace-pre-line">{edu.description}</p>
                </div>
              ))
            )}
          </section>

          <section className="resume-section mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-2">Publications</h2>
            {publications.length === 0 ? (
              <p className="text-gray-500 italic">No publications added yet.</p>
            ) : (
              publications.map((pub) => (
                <div key={pub.id} className="publication-item mb-4 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="text-lg font-semibold">{pub.title}</h3>
                    <span className="text-sm text-gray-600">{pub.date}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{pub.publisher}</p>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline print:text-blue-800"
                    >
                      Link →
                    </a>
                  )}
                  {pub.description && (
                    <p className="text-sm mt-1 whitespace-pre-line">{pub.description}</p>
                  )}
                </div>
              ))
            )}
          </section>
        </div>
      </div>
    </div>
  );
}