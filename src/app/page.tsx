'use client';

import { usePortfolioAnimations } from '@/hooks/usePortfolioAnimations';

// Layout
import Navbar   from '@/components/layout/Navbar';
import Footer   from '@/components/layout/Footer';

// UI
import Loader   from '@/components/ui/Loader';
import Cursor   from '@/components/ui/Cursor';

// Sections
import Hero     from '@/components/sections/Hero';
import About    from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Gallery  from '@/components/sections/Gallery';
import Skills   from '@/components/sections/Skills';
import Contact  from '@/components/sections/Contact';

export default function HomePage() {
  const { containerRef, progress } = usePortfolioAnimations();

  return (
    <div ref={containerRef} className="portfolio-wrapper">
      <Loader progress={progress} />
      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
