'use client';

import { Trash2, Plus } from 'lucide-react';
import { useState } from 'react';

interface SkillsFormProps {
  skills: string[];
  onChange: (skills: string[]) => void;
}

export default function SkillsForm({ skills, onChange }: SkillsFormProps) {
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      onChange([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    onChange(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addSkill()}
          className="flex-1 border rounded-md px-3 py-2"
          placeholder="e.g., React, Project Management, Figma..."
        />
        <button
          onClick={addSkill}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full flex items-center gap-2"
          >
            {skill}
            <button onClick={() => removeSkill(skill)} className="text-red-500 hover:text-red-700">
              <Trash2 size={14} />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}