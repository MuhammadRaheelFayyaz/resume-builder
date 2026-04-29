'use client';

import { SocialLink } from '@/app/lib/types';
import { Trash2, Plus } from 'lucide-react';

interface SocialLinksFormProps {
  items: SocialLink[];
  onChange: (items: SocialLink[]) => void;
}

export default function SocialLinksForm({ items=[], onChange }: SocialLinksFormProps) {
  const addNew = () => {
    const newItem: SocialLink = {
      id: Date.now().toString(),
      platform: '',
      url: '',
    };
    onChange([...items, newItem]);
  };

  const updateItem = (id: string, updates: Partial<SocialLink>) => {
    onChange(items.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const deleteItem = (id: string) => {
    onChange(items.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="border rounded-lg p-4 relative bg-gray-50">
          <button
            onClick={() => deleteItem(item.id)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            aria-label="Delete social link"
          >
            <Trash2 size={18} />
          </button>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Platform *</label>
              <input
                type="text"
                value={item.platform}
                onChange={(e) => updateItem(item.id, { platform: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="LinkedIn, GitHub, Twitter, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">URL *</label>
              <input
                type="url"
                value={item.url}
                onChange={(e) => updateItem(item.id, { url: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="https://..."
              />
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={addNew}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={18} /> Add Social Link
      </button>
    </div>
  );
}