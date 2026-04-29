'use client';

import { Experience } from '@/app/lib/types';
import { Trash2, Plus } from 'lucide-react';

interface ExperienceFormProps {
  items: Experience[];
  onChange: (items: Experience[]) => void;
}

export default function ExperienceForm({ items, onChange }: ExperienceFormProps) {
  const addNew = () => {
    const newItem: Experience = {
      id: Date.now().toString(),
      title: '',
      company: '',
      dateRange: '',
      description: '',
    };
    onChange([...items, newItem]);
  };

  const updateItem = (id: string, updates: Partial<Experience>) => {
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
            aria-label="Delete experience"
          >
            <Trash2 size={18} />
          </button>
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Job Title *</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => updateItem(item.id, { title: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="Senior Software Engineer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company *</label>
              <input
                type="text"
                value={item.company}
                onChange={(e) => updateItem(item.id, { company: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="Google, Microsoft, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date Range</label>
              <input
                type="text"
                value={item.dateRange}
                onChange={(e) => updateItem(item.id, { dateRange: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="Jan 2020 – Present"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                rows={3}
                value={item.description}
                onChange={(e) => updateItem(item.id, { description: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="Describe your responsibilities, achievements, technologies used..."
              />
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={addNew}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
      >
        <Plus size={18} /> Add Experience
      </button>
    </div>
  );
}