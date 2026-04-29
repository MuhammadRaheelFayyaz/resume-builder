'use client';

import { Reference } from '@/app/lib/types';
import { Trash2, Plus } from 'lucide-react';

interface ReferencesFormProps {
  items: Reference[];
  onChange: (items: Reference[]) => void;
}

export default function ReferencesForm({ items=[], onChange }: ReferencesFormProps) {
  const addNew = () => {
    const newItem: Reference = {
      id: Date.now().toString(),
      name: '',
      title: '',
      company: '',
      email: '',
      phone: '',
    };
    onChange([...items, newItem]);
  };

  const updateItem = (id: string, updates: Partial<Reference>) => {
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
            aria-label="Delete reference"
          >
            <Trash2 size={18} />
          </button>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => updateItem(item.id, { name: e.target.value })}
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Title *</label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => updateItem(item.id, { title: e.target.value })}
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  placeholder="Senior Manager, Professor, etc."
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company (optional)</label>
              <input
                type="text"
                value={item.company || ''}
                onChange={(e) => updateItem(item.id, { company: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="Company/Organization name"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email (optional)</label>
                <input
                  type="email"
                  value={item.email || ''}
                  onChange={(e) => updateItem(item.id, { email: e.target.value })}
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone (optional)</label>
                <input
                  type="tel"
                  value={item.phone || ''}
                  onChange={(e) => updateItem(item.id, { phone: e.target.value })}
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  placeholder="+1 234 567 8900"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={addNew}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={18} /> Add Reference
      </button>
      <p className="text-xs text-gray-500 italic">
        💡 Tip: You can also write “Available upon request” as a single reference instead of listing specific contacts.
      </p>
    </div>
  );
}