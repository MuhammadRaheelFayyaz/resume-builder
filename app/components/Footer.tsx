// components/Footer.tsx
import { url } from 'inspector';
import Link from 'next/link';

const DEVELOPER_NAME = process.env.DEVELOPER_NAME || 'MUHAMMAD RAHLEEL';
const DEVELOPER_EMAIL = process.env.DEVELOPER_EMAIL || 'raheelfayyazid@gmail.com';
const GITHUB_URL = process.env.GITHUB_URL || 'https://github.com/MuhammadRaheelFayyaz';
const LINKEDIN_URL = process.env.LINKEDIN_URL || 'https://www.linkedin.com/in/muhammad-raheel-841819174/';
const PHONE_NUMBER = process.env.PHONE_NUMBER || '+92 348 6226883';
const PORTFOLIO_URL = process.env.PORTFOLIO_URL || 'https://raheel-portfolio-mu.vercel.app/';


const INCOMING_PROJECTS = [
  { name: 'TRADING SIGNAL GENERATOR', emoji: '✨', url: 'https://trading-signal-six.vercel.app/' },
  { name: 'Image&Pdf Tool', emoji: '📊', url: 'https://image-pdf-tool-kappa.vercel.app/' },
  { name: 'Investment Portfolio Tracker Dashboard', emoji: '🎯' },
];
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
                href={PORTFOLIO_URL} // Replace with your actual portfolio URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
                {DEVELOPER_NAME}
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
                  {DEVELOPER_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="hover:text-indigo-400"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={GITHUB_URL}  // Optional
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}  // Optional
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
              {INCOMING_PROJECTS.map((project) => (
                <li key={project.name}>
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                      {project.emoji} {project.name}
                    </a>
                  ) : (
                    <span>
                      {project.emoji} {project.name} (coming soon)
                    </span>
                  )}
                </li>
              ))}
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