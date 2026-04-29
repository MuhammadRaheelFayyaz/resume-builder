'use client';

import { useState, useEffect } from 'react';
import { ResumeData, TemplateType } from '@/app/lib/types';
import { loadResumeData, saveResumeData, loadSelectedTemplate, saveSelectedTemplate } from '@/app/lib/storage';
import TemplateSelector from '@/app/components/TemplateSelector';
import PersonalForm from '@/app/components/editor/PersonalForm';
import ExperienceForm from '@/app/components/editor/ExperienceForm';
import EducationForm from '@/app/components/editor/EducationForm';
import SkillsForm from '@/app/components/editor/SkillsForm';
import CertificatesForm from '@/app/components/editor/CertificatesForm';
import LanguagesForm from '@/app/components/editor/LanguagesForm';
import ProjectsForm from '@/app/components/editor/ProjectsForm';
import VolunteeringForm from '@/app/components/editor/VolunteeringForm';
import AwardsForm from '@/app/components/editor/AwardsForm';
import HobbiesForm from '@/app/components/editor/HobbiesForm';
import SocialLinksForm from '@/app/components/editor/SocialLinksForm';
import ReferencesForm from '@/app/components/editor/ReferencesForm';
import PublicationsForm from '@/app/components/editor/PublicationsForm';

import Template1 from '@/app/components/templates/Template1';
import Template2 from '@/app/components/templates/Template2';
import Template3 from '@/app/components/templates/Template3';
import Template4 from '@/app/components/templates/Template4';
import Template5 from '@/app/components/templates/Template5';
import Template6 from '@/app/components/templates/Template6';
import Template7 from '@/app/components/templates/Template7';
// Placeholder imports for templates 8-10, replace with actual components
import Template8 from '@/app/components/templates/Template8';
import Template9 from '@/app/components/templates/Template9'; 
import Template10 from '@/app/components/templates/Template10';
import Template11 from '@/app/components/templates/Template11';
import Template12 from '@/app/components/templates/Template12';
import Template13 from '@/app/components/templates/Template13';
import Template14 from '@/app/components/templates/Template14';
import Template15 from '@/app/components/templates/Template15';
import Template16 from '@/app/components/templates/Template16';
import Template17 from '@/app/components/templates/Template17';
import Template18 from '@/app/components/templates/Template18';
import Template19 from '@/app/components/templates/Template19';
import Template20 from '@/app/components/templates/Template20';
export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('template1');

  useEffect(() => {
    setResumeData(loadResumeData());
    setSelectedTemplate(loadSelectedTemplate());
  }, []);

  useEffect(() => {
    if (resumeData) saveResumeData(resumeData);
  }, [resumeData]);

  useEffect(() => {
    saveSelectedTemplate(selectedTemplate);
  }, [selectedTemplate]);

  const updatePersonal = (field: keyof ResumeData['personal'], value: string) => {
    if (!resumeData) return;
    setResumeData({ ...resumeData, personal: { ...resumeData.personal, [field]: value } });
  };

  const handlePrint = () => window.print();

  if (!resumeData) return <div className="p-8 text-center">Loading...</div>;

  const templateComponents: Record<TemplateType, React.ComponentType<{ data: ResumeData }>> = {
    template1: Template1,
    template2: Template2,
    template3: Template3,
    template4: Template4,
    template5: Template5,
    template6: Template6,
    template7: Template7, // Placeholder, replace with actual components
    template8: Template8,
    template9: Template9,
    template10: Template10,
    template11: Template11, // Placeholder, replace with actual components
    template12: Template12,
    template13: Template13,
    template14: Template14,
    template15: Template15,
    template16: Template16,
    template17: Template17,
    template18: Template18,
    template19: Template19,
    template20: Template20,
  };




  return (
    <div className="min-h-screen bg-gray-100 print:bg-white">
      <div className="container mx-auto px-4 py-8 print:p-0">
        <div className="flex justify-between items-center mb-6 print:hidden">
          <h1 className="text-3xl font-bold text-gray-800">Resume Builder</h1>
          <button
            onClick={handlePrint}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Download as PDF
          </button>
        </div>

        <div className="print:hidden mb-8">
          <TemplateSelector selected={selectedTemplate} onChange={setSelectedTemplate} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 print:block">
          {/* Editor Panel */}
          <div className="print:hidden bg-white rounded-lg shadow p-6 space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4">Personal Details</h2>
              <PersonalForm data={resumeData.personal} onChange={updatePersonal} />
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Work Experience</h2>
              <ExperienceForm
                items={resumeData.experience}
                onChange={(items) => setResumeData({ ...resumeData, experience: items })}
              />
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Education</h2>
              <EducationForm
                items={resumeData.education}
                onChange={(items) => setResumeData({ ...resumeData, education: items })}
              />
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Skills</h2>
              <SkillsForm
                skills={resumeData.skills}
                onChange={(skills) => setResumeData({ ...resumeData, skills })}
              />
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Certifications</h2>
              <CertificatesForm
                items={resumeData.certificates}
                onChange={(certificates) => setResumeData({ ...resumeData, certificates })}
              />
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Languages</h2>
              <LanguagesForm
                items={resumeData.languages}
                onChange={(languages) => setResumeData({ ...resumeData, languages })}
              />
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Projects</h2>
              <ProjectsForm
                items={resumeData.projects}
                onChange={(projects) => setResumeData({ ...resumeData, projects })}
              />
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Volunteering</h2>
              <VolunteeringForm
                items={resumeData.volunteering}
                onChange={(volunteering) => setResumeData({ ...resumeData, volunteering })}
              />
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Awards & Honors</h2>
              <AwardsForm
                items={resumeData.awards}
                onChange={(awards) => setResumeData({ ...resumeData, awards })}
              />
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Hobbies & Interests</h2>
              <HobbiesForm
                items={resumeData.hobbies}
                onChange={(hobbies) => setResumeData({ ...resumeData, hobbies })}
              />
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Social Links</h2>
              <SocialLinksForm
                items={resumeData.socialLinks}
                onChange={(socialLinks) => setResumeData({ ...resumeData, socialLinks })}
              />
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">References</h2>
              <ReferencesForm
                items={resumeData.references}
                onChange={(references) => setResumeData({ ...resumeData, references })}
              />
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Publications</h2>
              <PublicationsForm
                items={resumeData.publications}
                onChange={(publications) => setResumeData({ ...resumeData, publications })}
              />
            </section>
          </div>

          {/* Preview Panel */}
          <div className="print:mt-0">
            {(() => {
              const Component = templateComponents[selectedTemplate];
              return <Component data={resumeData} />;
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}