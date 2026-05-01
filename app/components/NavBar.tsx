'use client';

import Link from 'next/link';
import { useAuth } from '@/app/contexts/AuthContext';
import { useState } from 'react';
import LoginModal from './LoginModal';

export default function NavBar() {
  const { user, signOut } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md print:hidden">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center flex-wrap gap-4">
          <Link href="/" className="text-xl font-bold text-indigo-600">
            Resume Builder
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link href="/builder" className="text-gray-700 hover:text-indigo-600">Builder</Link>
            <Link href="/blog" className="text-gray-700 hover:text-indigo-600">Blog</Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600">Contact/Hire Developer</Link>
            {/* {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">{user.email}</span>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700"
              >
                Login / Sign Up
              </button>
            )} */}
          </div>
        </div>
      </nav>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}