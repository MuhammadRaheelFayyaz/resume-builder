'use client';

import { Publication } from '@/app/lib/types';
import { Trash2, Plus } from 'lucide-react';

interface PublicationsFormProps {
  items: Publication[];
  onChange: (items: Publication[]) => void;
}

export default function PublicationsForm({ items=[], onChange }: PublicationsFormProps) {
  const addNew = () => {
    const newItem: Publication = {
      id: Date.now().toString(),
      title: '',
      publisher: '',
      date: '',
      link: '',
      description: '',
    };
    onChange([...items, newItem]);
  };

  const updateItem = (id: string, updates: Partial<Publication>) => {
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
            aria-label="Delete publication"
          >
            <Trash2 size={18} />
          </button>
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Publication Title *</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => updateItem(item.id, { title: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="e.g., Modern Web Development with Next.js"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Publisher / Venue *</label>
                <input
                  type="text"
                  value={item.publisher}
                  onChange={(e) => updateItem(item.id, { publisher: e.target.value })}
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  placeholder="e.g., Tech Journal, CSS Conference"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date *</label>
                <input
                  type="text"
                  value={item.date}
                  onChange={(e) => updateItem(item.id, { date: e.target.value })}
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  placeholder="e.g., 2024, March 2023"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Link (optional)</label>
              <input
                type="url"
                value={item.link || ''}
                onChange={(e) => updateItem(item.id, { link: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description (optional)</label>
              <textarea
                rows={2}
                value={item.description || ''}
                onChange={(e) => updateItem(item.id, { description: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="Authors, key findings, or any additional info..."
              />
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={addNew}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={18} /> Add Publication
      </button>
    </div>
  );
}