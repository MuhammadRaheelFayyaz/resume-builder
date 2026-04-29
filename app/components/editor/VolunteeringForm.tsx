'use client';

import { Volunteering } from '@/app/lib/types';
import { Trash2, Plus } from 'lucide-react';

interface VolunteeringFormProps {
  items: Volunteering[];
  onChange: (items: Volunteering[]) => void;
}

export default function VolunteeringForm({ items=[], onChange }: VolunteeringFormProps) {
  const addNew = () => {
    const newItem: Volunteering = {
      id: Date.now().toString(),
      role: '',
      organization: '',
      dateRange: '',
      description: '',
    };
    onChange([...items, newItem]);
  };

  const updateItem = (id: string, updates: Partial<Volunteering>) => {
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
            aria-label="Delete volunteering entry"
          >
            <Trash2 size={18} />
          </button>
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Role / Title *</label>
              <input
                type="text"
                value={item.role}
                onChange={(e) => updateItem(item.id, { role: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="e.g., Volunteer Teacher, Event Organizer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Organization *</label>
              <input
                type="text"
                value={item.organization}
                onChange={(e) => updateItem(item.id, { organization: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="e.g., Red Cross, Local School, Non‑profit Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date Range</label>
              <input
                type="text"
                value={item.dateRange}
                onChange={(e) => updateItem(item.id, { dateRange: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="e.g., Jan 2022 – Present"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                rows={3}
                value={item.description}
                onChange={(e) => updateItem(item.id, { description: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="Describe your responsibilities, impact, achievements..."
              />
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={addNew}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={18} /> Add Volunteering Experience
      </button>
    </div>
  );
}