import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password – Resume Builder',
  description: 'Set a new password for your account.',
  robots: 'noindex, nofollow', // prevent indexing
};

export default function ResetPasswordLayout({ children }: { children: React.ReactNode }) {
  return children;
}