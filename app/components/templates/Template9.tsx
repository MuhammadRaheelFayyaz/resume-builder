// components/templates/Template9.tsx
import { ResumeData } from '@/app/lib/types';
import { Briefcase, Code, GraduationCap, Award, BookOpen, Heart, Globe, Link as LinkIcon, Users, User, Star } from 'lucide-react';

interface Template9Props {
  data: ResumeData;
}

export default function Template9({ data }: Template9Props) {
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
      {/* Creative Header Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-10 text-center relative">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">
            {personal.firstName} {personal.lastName}
          </h1>
          <p className="text-xl text-purple-100 mb-4">{personal.title}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-purple-100">
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
                  className="text-white hover:text-purple-200 transition"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          )}
        </div>
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mt-16 -mr-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -mb-12 -ml-12"></div>
      </div>

      {/* Main content – two columns */}
      <div className="grid md:grid-cols-2 gap-8 p-8">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {/* Profile */}
          <section className="resume-section">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-purple-200 pb-1 mb-3 flex items-center gap-2">
              <User size={18} className="text-purple-600" /> Profile
            </h2>
            <p className="text-gray-700 text-sm">{personal.summary}</p>
          </section>

          {/* Skills */}
          <section className="resume-section">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-purple-200 pb-1 mb-3 flex items-center gap-2">
              <Code size={18} className="text-purple-600" /> Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Languages */}
          {languages.length > 0 && (
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-purple-200 pb-1 mb-3 flex items-center gap-2">
                <Globe size={18} className="text-purple-600" /> Languages
              </h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {languages.map((lang) => (
                  <li key={lang.id}>
                    {lang.name} {lang.proficiency && <span className="text-gray-500">({lang.proficiency})</span>}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Certifications */}
          {certificates.length > 0 && (
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-purple-200 pb-1 mb-3 flex items-center gap-2">
                <Award size={18} className="text-purple-600" /> Certifications
              </h2>
              <div className="space-y-2">
                {certificates.map((cert) => (
                  <div key={cert.id} className="break-inside-avoid">
                    <p className="font-semibold text-sm">{cert.name}</p>
                    <p className="text-xs text-gray-600">{cert.issuer}</p>
                    {cert.date && <p className="text-xs text-gray-500">{cert.date}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Hobbies */}
          {hobbies.length > 0 && (
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-purple-200 pb-1 mb-3 flex items-center gap-2">
                <Heart size={18} className="text-purple-600" /> Hobbies
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
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-purple-200 pb-1 mb-3 flex items-center gap-2">
                <Users size={18} className="text-purple-600" /> References
              </h2>
              <div className="space-y-3">
                {references.map((ref) => (
                  <div key={ref.id} className="reference-item break-inside-avoid">
                    <p className="font-semibold text-sm">{ref.name}</p>
                    <p className="text-xs text-gray-600">{ref.title}</p>
                    {ref.company && <p className="text-xs text-gray-500">{ref.company}</p>}
                    {ref.email && <p className="text-xs text-purple-600 break-all">{ref.email}</p>}
                    {ref.phone && <p className="text-xs text-gray-500">{ref.phone}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          {/* Experience */}
          <section className="resume-section">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-purple-200 pb-1 mb-3 flex items-center gap-2">
              <Briefcase size={18} className="text-purple-600" /> Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="experience-item mb-4 break-inside-avoid">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <span className="text-sm text-gray-500">{exp.dateRange}</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">{exp.company}</p>
                <p className="text-sm mt-1 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Projects */}
          {projects.length > 0 && (
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-purple-200 pb-1 mb-3 flex items-center gap-2">
                <Code size={18} className="text-purple-600" /> Projects
              </h2>
              {projects.map((proj) => (
                <div key={proj.id} className="project-item mb-4 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="text-lg font-semibold">{proj.name}</h3>
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-sm text-purple-600">
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
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-purple-200 pb-1 mb-3 flex items-center gap-2">
                <Users size={18} className="text-purple-600" /> Volunteering
              </h2>
              {volunteering.map((vol) => (
                <div key={vol.id} className="volunteering-item mb-4 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="text-lg font-semibold">{vol.role}</h3>
                    <span className="text-sm text-gray-500">{vol.dateRange}</span>
                  </div>
                  <p className="text-gray-700 font-medium text-sm">{vol.organization}</p>
                  <p className="text-sm mt-1 whitespace-pre-line">{vol.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Education */}
          <section className="resume-section">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-purple-200 pb-1 mb-3 flex items-center gap-2">
              <GraduationCap size={18} className="text-purple-600" /> Education
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
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-purple-200 pb-1 mb-3 flex items-center gap-2">
                <Star size={18} className="text-purple-600" /> Awards
              </h2>
              {awards.map((award) => (
                <div key={award.id} className="award-item mb-3 break-inside-avoid">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="font-semibold">{award.title}</h3>
                    <span className="text-sm text-gray-500">{award.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{award.issuer}</p>
                  {award.description && <p className="text-sm mt-1">{award.description}</p>}
                </div>
              ))}
            </section>
          )}

          {/* Publications */}
          {publications.length > 0 && (
            <section className="resume-section">
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-purple-200 pb-1 mb-3 flex items-center gap-2">
                <BookOpen size={18} className="text-purple-600" /> Publications
              </h2>
              {publications.map((pub) => (
                <div key={pub.id} className="publication-item mb-3 break-inside-avoid">
                  <p className="font-semibold">{pub.title}</p>
                  <p className="text-sm text-gray-600">{pub.publisher}</p>
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <span className="text-sm text-gray-500">{pub.date}</span>
                    {pub.link && <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-sm text-purple-600">Link</a>}
                  </div>
                  {pub.description && <p className="text-sm mt-1">{pub.description}</p>}
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}