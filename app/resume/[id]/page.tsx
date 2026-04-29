import { defaultResumeData } from '@/app/lib/storage';
import { ResumeData } from '@/app/lib/types';
import Template1 from '@/app/components/templates/Template1';
import Template2 from '@/app/components/templates/Template2';

// This function can be extended to fetch real data from a database or API
async function getResumeData(id: string): Promise<ResumeData | null> {
  // For demo, return default data. In a real app you would fetch by id.
  // Because we only have localStorage on client, we'll simulate.
  return defaultResumeData;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const data = await getResumeData(params.id);
  if (!data) {
    return {
      title: 'Resume Not Found',
      description: 'The requested resume could not be found.',
    };
  }

  const fullName = `${data.personal.firstName} ${data.personal.lastName}`;
  const title = `${fullName} - ${data.personal.title} | Resume`;
  const description = data.personal.summary.slice(0, 160);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export default async function ResumePage({ params }: { params: { id: string } }) {
  const data = await getResumeData(params.id);
  if (!data) {
    return <div className="p-8 text-center">Resume not found</div>;
  }

  // Use a template, can be chosen based on a stored preference
  // For simplicity we use Template1 here
  return (
    <div className="min-h-screen bg-gray-100 py-8 print:bg-white">
      <div className="container mx-auto px-4">
        <Template1 data={data} />
        <div className="text-center mt-8 print:hidden">
          <button onClick={() => window.print()} className="bg-green-600 text-white px-4 py-2 rounded-md">
            Download as PDF
          </button>
        </div>
      </div>
    </div>
  );
}