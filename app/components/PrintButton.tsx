// components/PrintButton.tsx
'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
    >
      Download PDF
    </button>
  );
}