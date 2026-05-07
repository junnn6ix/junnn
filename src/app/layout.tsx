import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'YourName — Full-Stack Developer & Designer',
  description:
    'I craft fast, purposeful digital experiences — from concept to deployment. Focused on clean code and thoughtful interaction.',
  openGraph: {
    title: 'YourName — Full-Stack Developer & Designer',
    description: 'Portfolio of a Full-Stack Developer & Designer based in Jakarta.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
