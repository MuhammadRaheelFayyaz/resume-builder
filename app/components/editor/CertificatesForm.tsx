'use client';

import { Certificate } from '@/app/lib/types';
import { Trash2, Plus } from 'lucide-react';

interface CertificatesFormProps {
  items: Certificate[];
  onChange: (items: Certificate[]) => void;
}

export default function CertificatesForm({ items=[], onChange }: CertificatesFormProps) {
  const addNew = () => {
    const newItem: Certificate = {
      id: Date.now().toString(),
      name: '',
      issuer: '',
      date: '',
      credentialId: '',
    };
    onChange([...items, newItem]);
  };

  const updateItem = (id: string, updates: Partial<Certificate>) => {
    onChange(items.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const deleteItem = (id: string) => {
    onChange(items.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6">
      {items?.map((item) => (
        <div key={item.id} className="border rounded-lg p-4 relative bg-gray-50">
          <button
            onClick={() => deleteItem(item.id)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          >
            <Trash2 size={18} />
          </button>
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Certificate Name *</label>
              <input
                type="text"
                value={item.name}
                onChange={(e) => updateItem(item.id, { name: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="AWS Certified Solutions Architect"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Issuing Organization</label>
              <input
                type="text"
                value={item.issuer}
                onChange={(e) => updateItem(item.id, { issuer: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="Amazon Web Services"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date Earned</label>
              <input
                type="text"
                value={item.date}
                onChange={(e) => updateItem(item.id, { date: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="June 2023"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Credential ID (optional)</label>
              <input
                type="text"
                value={item.credentialId || ''}
                onChange={(e) => updateItem(item.id, { credentialId: e.target.value })}
                className="mt-1 w-full border rounded-md px-3 py-2"
                placeholder="ABC123XYZ"
              />
            </div>
          </div>
        </div>
      ))}
      <button onClick={addNew} className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
        <Plus size={18} /> Add Certificate
      </button>
    </div>
  );
}