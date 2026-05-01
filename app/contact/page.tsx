import { Metadata } from 'next';
import ContactForm from '@/app/components/ContactForm';
import JsonLd from '@/app/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Us – Hire a Developer',
  description: 'Need a custom resume template or want to hire the developer behind this tool? Get in touch.',
};

export default function ContactPage() {
  return (
    <>
       <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Us",
          "description": "Get in touch for support, freelance work, or collaboration.",
          "mainEntity": {
            "@type": "ContactPoint",
            "email": "contact@yourdomain.com",
            "contactType": "customer service"
          }
        }}
      />
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <ContactForm />
      </div>
    </div>
    </>
  );
}