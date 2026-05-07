/**
 * Dynamically loads GSAP and ScrollTrigger from CDN.
 * Returns both instances once ready.
 */
export async function loadGSAP(): Promise<{
  gsap: typeof window.gsap;
  ScrollTrigger: typeof window.ScrollTrigger;
}> {
  if (typeof window === 'undefined') {
    throw new Error('loadGSAP must be called in the browser');
  }

  if (!window.gsap) {
    await injectScript(
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'
    );
  }

  if (!window.ScrollTrigger) {
    await injectScript(
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js'
    );
  }

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  return { gsap, ScrollTrigger };
}

function injectScript(src: string): Promise<void> {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
}

// Extend Window interface so TypeScript is happy
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}
