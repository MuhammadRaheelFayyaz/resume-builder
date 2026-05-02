// app/resume/[id]/page.tsx
import { notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { ResumeData, TemplateType } from '@/app/lib/types';
import PrintButton from '@/app/components/PrintButton';

// Import all templates (adjust paths if needed)
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

// Map template id to component
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

// Create Supabase client inside the function to avoid caching issues
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Fetch resume by ID
async function getResume(id: string) {
  const { data, error } = await supabase
    .from('resumes')
    .select('resume_data, template')
    .eq('id', id)
    .maybeSingle(); // use maybeSingle to avoid throwing

  if (error) {
    console.error('Supabase fetch error:', error);
    return null;
  }
  if (!data) return null;

  // Optionally increment view count (fire-and-forget)
  try {
    await supabase.rpc('increment_views', { row_id: id });
  } catch {}

  return {
    data: data.resume_data as ResumeData,
    template: data.template as TemplateType,
  };
}

// Generate dynamic metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params; 
  const resume = await getResume(id);
  if (!resume) {
    return {
      title: 'Resume Not Found',
      description: 'The requested resume could not be found.',
    };
  }
  const name = `${resume.data.personal.firstName} ${resume.data.personal.lastName}`;
  return {
    title: `${name} – Resume`,
    description: resume.data.personal.summary.slice(0, 160),
  };
}

// Page component
export default async function ResumePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;   // 👈 await the params
  // ... rest of your code using `id`
  console.log('Resume ID:', id);

  const resume = await getResume(id);
  if (!resume) notFound();

  const TemplateComponent = templateComponents[resume.template];
  if (!TemplateComponent) notFound();

  return (
    <div className="min-h-screen bg-gray-100 py-8 print:bg-white">
      <div className="container mx-auto px-4 print:px-0">
        <TemplateComponent data={resume.data} />
         <div className="text-center mt-8 print:hidden">
          <PrintButton />
        </div>
      </div>
    </div>
  );
}