import { Metadata } from 'next';
import ContactForm from '@/app/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us – Hire a Developer',
  description: 'Need a custom resume template or want to hire the developer behind this tool? Get in touch.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <ContactForm />
      </div>
    </div>
  );
}