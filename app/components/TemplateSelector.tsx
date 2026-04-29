// components/TemplateSelector.tsx
import { TemplateType } from '@/app/lib/types';

interface TemplateSelectorProps {
  selected: TemplateType;
  onChange: (template: TemplateType) => void;
}

const templates: { id: TemplateType; label: string }[] = [
  { id: 'template1', label: 'Classic' },
  { id: 'template2', label: 'Modern' },
  { id: 'template3', label: 'Minimal' },
  { id: 'template4', label: 'Split Banner' },
  { id: 'template5', label: 'Compact' },
  { id: 'template6', label: 'Card Style' },
  { id: 'template7', label: 'Professional' },
  { id: 'template8', label: 'Right Sidebar' },
  { id: 'template9', label: 'Creative Banner' },
   { id: 'template10', label: 'Timeline' },
  { id: 'template11', label: 'Photo Minimal' },
  { id: 'template12', label: 'Teal Sidebar' },
  { id: 'template13', label: 'Top Panel' },
  { id: 'template14', label: 'Compact Alt' },
  { id: 'template15', label: 'Card Style' },
  { id: 'template16', label: 'Executive' },
  { id: 'template17', label: 'Tech' },
  { id: 'template18', label: 'Ultra Minimal' },
  { id: 'template19', label: 'Academic' },
  { id: 'template20', label: 'Portfolio' },

];

export default function TemplateSelector({ selected, onChange }: TemplateSelectorProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {templates.map((template) => (
        <button
          key={template.id}
          onClick={() => onChange(template.id)}
          className={`px-4 py-2 rounded-md transition ${
            selected === template.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {template.label}
        </button>
      ))}
    </div>
  );
}