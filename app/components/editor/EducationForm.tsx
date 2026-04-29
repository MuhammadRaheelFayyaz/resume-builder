'use client';

import { Education } from '@/app/lib/types';
import { Trash2, Plus } from 'lucide-react';

interface EducationFormProps {
  items: Education[];
  onChange: (items: Education[]) => void;
}

export default function EducationForm({ items, onChange }: EducationFormProps) {
  const addNew = () => {
    const newItem: Education = {
      id: Date.now().toString(),
      degree: '',
      institution: '',
      dateRange: '',
      description: '',
    };
    onChange([...items, newItem]);
  };

  const updateItem = (id: string, updates: Partial<Education>) => {
    onChange(items.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const deleteItem = (id: string) => {
    onChange(items.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.id} className="border rounded-lg p-4 relative bg-gray-50">
          <button
            onClick={() => deleteItem(item.id)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          >
            <Trash2 size={18} />
          </button>
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Degree / Program *</label>
              <input
                type="text"
                value={item.degree}
                onChange={(e) => updateItem(item.id, { degree: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="B.Sc. Computer Science, MBA, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Institution *</label>
              <input
                type="text"
                value={item.institution}
                onChange={(e) => updateItem(item.id, { institution: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="University Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date Range</label>
              <input
                type="text"
                value={item.dateRange}
                onChange={(e) => updateItem(item.id, { dateRange: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="2015 – 2019"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description (optional)</label>
              <textarea
                rows={2}
                value={item.description}
                onChange={(e) => updateItem(item.id, { description: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="Achievements, coursework, GPA, honors..."
              />
            </div>
          </div>
        </div>
      ))}
      <button onClick={addNew} className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
        <Plus size={18} /> Add Education
      </button>
    </div>
  );
}