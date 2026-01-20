import type { Metadata } from 'next';
import Script from 'next/script';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { WhatsAppFloating } from '@/components/WhatsAppFloating';
import { siteConfig } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Ses ICT Hub | Electronics Store in Kenya',
    template: '%s | Ses ICT Hub'
  },
  description: siteConfig.description,
  metadataBase: new URL('https://sesicthub.co.ke'),
  openGraph: {
    title: 'Ses ICT Hub',
    description: siteConfig.description,
    type: 'website',
    locale: 'en_KE'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        <main className="mx-auto flex min-h-[70vh] max-w-6xl flex-col gap-10 py-10 container-px">
          {children}
        </main>
        <Footer />
        <WhatsAppFloating />
        <Script id="org-jsonld" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteConfig.name,
            description: siteConfig.description,
            url: 'https://sesicthub.co.ke',
            telephone: siteConfig.phone,
            email: siteConfig.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: siteConfig.address,
              addressLocality: 'Nairobi',
              addressCountry: 'KE'
            }
          })}
        </Script>
      </body>
    </html>
  );
}
