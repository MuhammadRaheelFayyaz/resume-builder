'use client';

import { Hobby } from '@/app/lib/types';
import { Trash2, Plus } from 'lucide-react';

interface HobbiesFormProps {
  items: Hobby[];
  onChange: (items: Hobby[]) => void;
}

export default function HobbiesForm({ items=[], onChange }: HobbiesFormProps) {
  const addNew = () => {
    const newItem: Hobby = {
      id: Date.now().toString(),
      name: '',
    };
    onChange([...items, newItem]);
  };

  const updateItem = (id: string, name: string) => {
    onChange(items.map(item => item.id === id ? { ...item, name } : item));
  };

  const deleteItem = (id: string) => {
    onChange(items.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-2">
          <input
            type="text"
            value={item.name}
            onChange={(e) => updateItem(item.id, e.target.value)}
            className="flex-1 border rounded-md px-3 py-2"
            placeholder="e.g., Photography, Chess, Travel"
          />
          <button
            onClick={() => deleteItem(item.id)}
            className="text-red-500 hover:text-red-700"
            aria-label="Delete hobby"
          >
            <Trash2 size={18} />
          </button>
        </div>
      ))}
      <button
        onClick={addNew}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={18} /> Add Hobby
      </button>
    </div>
  );
}