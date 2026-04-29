'use client';

import { Award } from '@/app/lib/types';
import { Trash2, Plus } from 'lucide-react';

interface AwardsFormProps {
  items: Award[];
  onChange: (items: Award[]) => void;
}

export default function AwardsForm({ items=[], onChange }: AwardsFormProps) {
  const addNew = () => {
    const newItem: Award = {
      id: Date.now().toString(),
      title: '',
      issuer: '',
      date: '',
      description: '',
    };
    onChange([...items, newItem]);
  };

  const updateItem = (id: string, updates: Partial<Award>) => {
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
            aria-label="Delete award"
          >
            <Trash2 size={18} />
          </button>
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Award Title *</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => updateItem(item.id, { title: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="e.g., Employee of the Month, Best Innovation Award"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Issuing Organization *</label>
              <input
                type="text"
                value={item.issuer}
                onChange={(e) => updateItem(item.id, { issuer: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="e.g., Google, University, National Society"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date Received</label>
              <input
                type="text"
                value={item.date}
                onChange={(e) => updateItem(item.id, { date: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="e.g., March 2024, 2023"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description (optional)</label>
              <textarea
                rows={2}
                value={item.description || ''}
                onChange={(e) => updateItem(item.id, { description: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="Briefly describe the award or why you received it..."
              />
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={addNew}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={18} /> Add Award
      </button>
    </div>
  );
}