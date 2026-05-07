import type { Metadata } from 'next';
import './globals.css';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
