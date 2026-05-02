'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/app/contexts/AuthContext';
import LoginModal from './LoginModal';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const { user, signOut } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="bg-white shadow-md print:hidden sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-indigo-600" onClick={closeMobileMenu}>
            Resume Builder
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link href="/builder" className="text-gray-700 hover:text-indigo-600">Builder</Link>
            <Link href="/blog" className="text-gray-700 hover:text-indigo-600">Blog</Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 hidden lg:inline">{user.email}</span>
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
                className="bg-indigo-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-indigo-700"
              >
                Login / Sign Up
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-2 px-4 shadow-lg">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-indigo-600 py-1" onClick={closeMobileMenu}>Home</Link>
              <Link href="/builder" className="text-gray-700 hover:text-indigo-600 py-1" onClick={closeMobileMenu}>Builder</Link>
              <Link href="/blog" className="text-gray-700 hover:text-indigo-600 py-1" onClick={closeMobileMenu}>Blog</Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 py-1" onClick={closeMobileMenu}>About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600 py-1" onClick={closeMobileMenu}>Contact</Link>
              <hr className="my-1 border-gray-200" />
              {user ? (
                <>
                  <span className="text-sm text-gray-600">{user.email}</span>
                  <button
                    onClick={() => {
                      signOut();
                      closeMobileMenu();
                    }}
                    className="bg-red-500 text-white px-3 py-1.5 rounded-md text-sm w-full text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    closeMobileMenu();
                  }}
                  className="bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm w-full text-left"
                >
                  Login / Sign Up
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}