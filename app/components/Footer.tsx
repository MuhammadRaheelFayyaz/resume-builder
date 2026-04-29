// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 print:hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About / Portfolio */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Resume Builder</h3>
            <p className="text-sm mb-2">
              Create professional resumes with 20+ templates. Free, no sign‑up required.
            </p>
            <p className="text-sm">
              Built by{' '}
              <a
                href="https://muhammadfaizan.site"  // Replace with your actual portfolio URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Muhammad Faizan
              </a>
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:faizan@example.com"  // Replace with your email
                  className="hover:text-indigo-400"
                >
                  faizan@example.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername"  // Optional
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourusername"  // Optional
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Future Projects */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Upcoming Projects</h3>
            <ul className="space-y-2 text-sm">
              <li>✨ AI Cover Letter Generator</li>
              <li>📊 Portfolio Builder</li>
              <li>🎯 Job Tracker Dashboard</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}