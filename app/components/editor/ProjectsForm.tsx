'use client';

import { Project } from '@/app/lib/types';
import { Trash2, Plus } from 'lucide-react';

interface ProjectsFormProps {
  items: Project[];
  onChange: (items: Project[]) => void;
}

export default function ProjectsForm({ items=[], onChange }: ProjectsFormProps) {
  const addNew = () => {
    const newItem: Project = {
      id: Date.now().toString(),
      name: '',
      description: '',
      techStack: '',
      link: '',
    };
    onChange([...items, newItem]);
  };

  const updateItem = (id: string, updates: Partial<Project>) => {
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
            aria-label="Delete project"
          >
            <Trash2 size={18} />
          </button>
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Name *</label>
              <input
                type="text"
                value={item.name}
                onChange={(e) => updateItem(item.id, { name: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="E‑Commerce Dashboard"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                rows={3}
                value={item.description}
                onChange={(e) => updateItem(item.id, { description: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="Describe the project, your role, and key outcomes..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tech Stack</label>
              <input
                type="text"
                value={item.techStack}
                onChange={(e) => updateItem(item.id, { techStack: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="React, Node.js, MongoDB, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Link (optional)</label>
              <input
                type="url"
                value={item.link || ''}
                onChange={(e) => updateItem(item.id, { link: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="https://github.com/..."
              />
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={addNew}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={18} /> Add Project
      </button>
    </div>
  );
}