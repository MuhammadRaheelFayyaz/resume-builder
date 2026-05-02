// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ResumeData, TemplateType } from '@/app/lib/types';
import { loadResumeData, saveResumeData, loadSelectedTemplate, saveSelectedTemplate } from '@/app/lib/storage';
import { supabase } from '@/app/lib/supabase';
import { useAuth } from '@/app/contexts/AuthContext';
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
import PublicationsForm from '@/app/components/editor/PublicationsForm';
import ReferencesForm from '@/app/components/editor/ReferencesForm';
import LoginModal from '@/app/components/LoginModal';
import ShareModal from '@/app/components/ShareModal';
import Template1 from '@/app/components/templates/Template1';
import Template2 from '@/app/components/templates/Template2';
import Template3 from '@/app/components/templates/Template3';
import Template4 from '@/app/components/templates/Template4';
import Template5 from '@/app/components/templates/Template5';
import Template6 from '@/app/components/templates/Template6';
import Template7 from '@/app/components/templates/Template7';
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
import Spinner from '@/app/components/Spinner';
import JsonLd from '@/app/components/JsonLd';
import { resume } from 'react-dom/server.node';

const templateComponents: Record<TemplateType, React.ComponentType<{ data: ResumeData }>> = {
  template1: Template1,
  template2: Template2,
  template3: Template3,
  template4: Template4,
  template5: Template5,
  template6: Template6,
  template7: Template7,
  template8: Template8,
  template9: Template9,
  template10: Template10,
  template11: Template11,
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

export default function Home() {
  const { user } = useAuth();
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('template1');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    setResumeData(loadResumeData());
    setSelectedTemplate(loadSelectedTemplate());
  }, []);

  // Save data whenever it changes
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

  const saveAndShare = async () => {
    // if (!user) {
    //   setIsLoginModalOpen(true);
    //   return;
    // }
    if (!resumeData) return;
    setIsSaving(true);
    try {
      const { data, error } = await supabase
        .from('resumes')
        .insert({
          resume_data: resumeData,
          template: selectedTemplate,
          // user_id: user.id,
        })
        .select('id')
        .single();

      if (error) throw error;

      const url = `${window.location.origin}/resume/${data.id}`;
      setShareUrl(url);
      setIsShareModalOpen(true);
    } catch (err) {
      console.error(err);
      alert('Failed to save resume. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (!resumeData) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className='flex justify-center mb-4'>
          <Spinner />
        </div>
        <h2 className="text-2xl font-bold mb-4">Loading...</h2>
        <p className="text-gray-600">Preparing your resume builder. Please wait a moment.</p>
      </div>
    </div>;
  }

  const SelectedTemplate = templateComponents[selectedTemplate];

  return (
    <>
     <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": resumeData.personal.firstName + ' ' + resumeData.personal.lastName,
          "jobTitle": resumeData.personal.title,
          "email": resumeData.personal.email,
          "telephone": resumeData.personal.phone,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": resumeData.personal.address
          },
          "hasOccupation": {
            "@type": "Occupation",
            "name": resumeData.personal.title,
            "skills": resumeData.skills.join(", ")
          }
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": `Resume of ${resumeData.personal.firstName} ${resumeData.personal.lastName}`,
          "author": {
            "@type": "Person",
            "name": `${resumeData.personal.firstName} ${resumeData.personal.lastName}`
          },
          "about": resumeData.personal.summary,
          "dateCreated": new Date().toISOString().split('T')[0],
          "creativeWorkStatus": "Completed",
          "url": `https://mycvbuilder.info/resume/builder`
        }}
      />
      <div className="min-h-screen bg-gray-100 print:bg-white">
        <div className="container mx-auto px-4 py-8 print:p-0">
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-6 print:hidden">
            <h1 className="text-3xl font-bold text-gray-800">Resume Builder</h1>
            <div className="flex gap-3 mt-4 md:mt-0">
              <button onClick={() => window.print()} className="bg-green-600 text-white px-4 py-2 rounded-md">
                Download PDF
              </button>
              <button
                onClick={saveAndShare}
                disabled={isSaving}
                className="bg-purple-600 text-white px-4 py-2 rounded-md disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Save & Share'}
              </button>
            </div>
          </div>

          <div className="print:hidden mb-6">
            <TemplateSelector selected={selectedTemplate} onChange={setSelectedTemplate} />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 print:block">
            {/* Editor panel */}
            <div className="print:hidden bg-white rounded-lg shadow p-6 space-y-8">
              <section>
                <h2 className="text-xl font-bold mb-4">Personal Details</h2>
                <PersonalForm data={resumeData.personal} onChange={updatePersonal} />
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">Experience</h2>
                <ExperienceForm items={resumeData.experience} onChange={(items) => setResumeData({ ...resumeData, experience: items })} />
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">Education</h2>
                <EducationForm items={resumeData.education} onChange={(items) => setResumeData({ ...resumeData, education: items })} />
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">Skills</h2>
                <SkillsForm skills={resumeData.skills} onChange={(skills) => setResumeData({ ...resumeData, skills })} />
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">Certifications</h2>
                <CertificatesForm items={resumeData.certificates} onChange={(items) => setResumeData({ ...resumeData, certificates: items })} />
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">Languages</h2>
                <LanguagesForm items={resumeData.languages} onChange={(items) => setResumeData({ ...resumeData, languages: items })} />
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">Projects</h2>
                <ProjectsForm items={resumeData.projects} onChange={(items) => setResumeData({ ...resumeData, projects: items })} />
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">Volunteering</h2>
                <VolunteeringForm items={resumeData.volunteering} onChange={(items) => setResumeData({ ...resumeData, volunteering: items })} />
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">Awards & Honors</h2>
                <AwardsForm items={resumeData.awards} onChange={(items) => setResumeData({ ...resumeData, awards: items })} />
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">Publications</h2>
                <PublicationsForm items={resumeData.publications} onChange={(items) => setResumeData({ ...resumeData, publications: items })} />
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">Hobbies & Interests</h2>
                <HobbiesForm items={resumeData.hobbies} onChange={(items) => setResumeData({ ...resumeData, hobbies: items })} />
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">Social Links</h2>
                <SocialLinksForm items={resumeData.socialLinks} onChange={(items) => setResumeData({ ...resumeData, socialLinks: items })} />
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">References</h2>
                <ReferencesForm items={resumeData.references} onChange={(items) => setResumeData({ ...resumeData, references: items })} />
              </section>
            </div>

            {/* Live preview */}
            <div className="print:mt-0">
              <SelectedTemplate data={resumeData} />
            </div>
          </div>
        </div>

        <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
        <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} shareUrl={shareUrl} />
      </div>
    </>
  );
}