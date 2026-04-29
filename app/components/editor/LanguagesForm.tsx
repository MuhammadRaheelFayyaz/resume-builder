'use client';

import { Language } from '@/app/lib/types';
import { Trash2, Plus } from 'lucide-react';

interface LanguagesFormProps {
  items: Language[];
  onChange: (items: Language[]) => void;
}

export default function LanguagesForm({ items=[], onChange }: LanguagesFormProps) {
  const addNew = () => {
    const newItem: Language = {
      id: Date.now().toString(),
      name: '',
      proficiency: '',
    };
    onChange([...items, newItem]);
  };

  const updateItem = (id: string, updates: Partial<Language>) => {
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
            aria-label="Delete language"
          >
            <Trash2 size={18} />
          </button>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Language *</label>
              <input
                type="text"
                value={item.name}
                onChange={(e) => updateItem(item.id, { name: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="English, Spanish, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Proficiency</label>
              <select
                value={item.proficiency}
                onChange={(e) => updateItem(item.id, { proficiency: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
              >
                <option value="">Select level</option>
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
                <option value="Advanced">Advanced</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Basic">Basic</option>
              </select>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={addNew}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={18} /> Add Language
      </button>
    </div>
  );
}