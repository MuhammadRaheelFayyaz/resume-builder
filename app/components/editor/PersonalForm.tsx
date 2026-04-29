import { ResumeData } from '@/app/lib/types';

interface PersonalFormProps {
  data: ResumeData['personal'];
  onChange: (field: keyof ResumeData['personal'], value: string) => void;
}

export default function PersonalForm({ data, onChange }: PersonalFormProps) {
  const fields: Array<{ name: keyof ResumeData['personal']; label: string; placeholder: string; type?: string }> = [
    { name: 'firstName', label: 'First Name', placeholder: 'John', type: 'text' },
    { name: 'lastName', label: 'Last Name', placeholder: 'Doe', type: 'text' },
    { name: 'title', label: 'Professional Title', placeholder: 'Software Engineer' },
    { name: 'email', label: 'Email', placeholder: 'john@example.com', type: 'email' },
    { name: 'phone', label: 'Phone', placeholder: '+1 234 567 8900', type: 'tel' },
    { name: 'address', label: 'Address', placeholder: 'City, State' },
    { name: 'summary', label: 'Professional Summary', placeholder: 'Brief overview of your experience...' },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
            className="mt-1 w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
            className="mt-1 w-full border rounded-md px-3 py-2"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => onChange('title', e.target.value)}
          className="mt-1 w-full border rounded-md px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
          className="mt-1 w-full border rounded-md px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          className="mt-1 w-full border rounded-md px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          value={data.address}
          onChange={(e) => onChange('address', e.target.value)}
          className="mt-1 w-full border rounded-md px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Summary</label>
        <textarea
          rows={4}
          value={data.summary}
          onChange={(e) => onChange('summary', e.target.value)}
          className="mt-1 w-full border rounded-md px-3 py-2"
        />
      </div>
    </div>
  );
}