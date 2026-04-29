// components/templates/Template12.tsx
import { ResumeData } from '@/app/lib/types';

export default function Template12({ data }: { data: ResumeData }) {
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
      <div className="flex flex-col md:flex-row">
        {/* LEFT COLUMN (Main) */}
        <div className="md:w-2/3 p-6 space-y-6">
          <div className="border-b pb-3">
            <h1 className="text-3xl font-bold">{personal.firstName} {personal.lastName}</h1>
            <p className="text-gray-600 text-lg">{personal.title}</p>
            <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-2">
              {personal.email && <span>{personal.email}</span>}
              {personal.phone && <span>{personal.phone}</span>}
              {personal.address && <span>{personal.address}</span>}
            </div>
            {socialLinks.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {socialLinks.map(link => (
                  <a key={link.id} href={link.url} className="text-blue-600 text-sm">{link.platform}</a>
                ))}
              </div>
            )}
          </div>

          {/* Profile */}
          <section className="resume-section">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Profile</h2>
            <p className="text-gray-700">{personal.summary}</p>
          </section>

          {/* Experience */}
          <section className="resume-section">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Experience</h2>
            {experience.map(exp => (
              <div key={exp.id} className="mb-4 break-inside-avoid">
                <h3 className="font-bold">{exp.title}</h3>
                <p className="text-sm text-gray-600">{exp.company} | {exp.dateRange}</p>
                <p className="text-sm whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Projects */}
          {projects.length > 0 && (
            <section className="resume-section">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Projects</h2>
              {projects.map(proj => (
                <div key={proj.id} className="mb-3 break-inside-avoid">
                  <h3 className="font-bold">{proj.name}</h3>
                  {proj.techStack && <p className="text-sm text-gray-600">{proj.techStack}</p>}
                  <p className="text-sm whitespace-pre-line">{proj.description}</p>
                  {proj.link && <a href={proj.link} className="text-sm text-blue-500">Link</a>}
                </div>
              ))}
            </section>
          )}

          {/* Education */}
          <section className="resume-section">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Education</h2>
            {education.map(edu => (
              <div key={edu.id} className="mb-3 break-inside-avoid">
                <h3 className="font-bold">{edu.degree}</h3>
                <p className="text-sm text-gray-600">{edu.institution} | {edu.dateRange}</p>
                <p className="text-sm whitespace-pre-line">{edu.description}</p>
              </div>
            ))}
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="md:w-1/3 bg-gray-50 p-6 space-y-5">
          {/* Skills */}
          <section>
            <h2 className="text-lg font-semibold border-b-2 border-gray-300 pb-1 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {skills.map((s,i) => <span key={i} className="bg-white px-2 py-0.5 rounded text-sm shadow-sm">{s}</span>)}
            </div>
          </section>

          {/* Languages */}
          {languages.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold border-b-2 border-gray-300 pb-1 mb-2">Languages</h2>
              <ul className="list-disc list-inside text-sm">
                {languages.map(l => <li key={l.id}>{l.name} {l.proficiency && `(${l.proficiency})`}</li>)}
              </ul>
            </section>
          )}

          {/* Certifications */}
          {certificates.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold border-b-2 border-gray-300 pb-1 mb-2">Certifications</h2>
              {certificates.map(c => (
                <div key={c.id} className="mb-2">
                  <p className="font-medium text-sm">{c.name}</p>
                  <p className="text-xs text-gray-600">{c.issuer} {c.date && `(${c.date})`}</p>
                </div>
              ))}
            </section>
          )}

          {/* Volunteering */}
          {volunteering.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold border-b-2 border-gray-300 pb-1 mb-2">Volunteering</h2>
              {volunteering.map(v => (
                <div key={v.id} className="mb-2">
                  <p className="font-medium text-sm">{v.role}</p>
                  <p className="text-xs text-gray-600">{v.organization} | {v.dateRange}</p>
                </div>
              ))}
            </section>
          )}

          {/* Awards */}
          {awards.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold border-b-2 border-gray-300 pb-1 mb-2">Awards</h2>
              {awards.map(a => (
                <div key={a.id} className="mb-1 text-sm">
                  <p className="font-medium">{a.title}</p>
                  <p className="text-xs text-gray-600">{a.issuer} | {a.date}</p>
                </div>
              ))}
            </section>
          )}

          {/* Publications */}
          {publications.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold border-b-2 border-gray-300 pb-1 mb-2">Publications</h2>
              {publications.map(p => (
                <div key={p.id} className="mb-2 text-sm">
                  <p className="font-medium">{p.title}</p>
                  <p className="text-xs">{p.publisher} ({p.date})</p>
                </div>
              ))}
            </section>
          )}

          {/* Hobbies */}
          {hobbies.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold border-b-2 border-gray-300 pb-1 mb-2">Hobbies</h2>
              <div className="flex flex-wrap gap-1">
                {hobbies.map(h => <span key={h.id} className="bg-white px-2 py-0.5 rounded text-sm shadow-sm">{h.name}</span>)}
              </div>
            </section>
          )}

          {/* References */}
          {references.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold border-b-2 border-gray-300 pb-1 mb-2">References</h2>
              {references.map(r => (
                <div key={r.id} className="mb-2 text-sm">
                  <p className="font-medium">{r.name}</p>
                  <p className="text-xs">{r.title}, {r.company}</p>
                  {r.email && <p className="text-xs text-blue-600">{r.email}</p>}
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}