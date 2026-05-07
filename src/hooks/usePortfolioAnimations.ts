'use client';

import { useEffect, useRef, useState } from 'react';
import { loadGSAP } from '@/lib/gsap-loader';
import { animateLoader, animateMainPage, initCursorAnimation } from '@/lib/animations';

/**
 * Encapsulates all GSAP lifecycle logic for the portfolio.
 * Returns `progress` (0-100) for the loader counter display.
 */
export function usePortfolioAnimations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  /* ── Main GSAP animations ── */
  useEffect(() => {
    let ctx: any;

    const run = async () => {
      const { gsap, ScrollTrigger } = await loadGSAP();

      ctx = gsap.context(() => {
        animateLoader(gsap, setProgress, () => {
          animateMainPage(gsap, ScrollTrigger);
        });
      }, containerRef);
    };

    run();

    return () => ctx?.revert();
  }, []);

  /* ── Cursor animations ── */
  useEffect(() => {
    let cleanup: () => void = () => {};
    let intervalId: ReturnType<typeof setInterval>;

    intervalId = setInterval(() => {
      if (window.gsap) {
        clearInterval(intervalId);
        cleanup = initCursorAnimation(window.gsap);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
      cleanup();
    };
  }, []);

  return { containerRef, progress };
}
