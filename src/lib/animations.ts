/**
 * All GSAP animation logic lives here.
 * Components import and call these functions — zero GSAP in JSX files.
 */

type GSAP = typeof window.gsap;
type ST   = typeof window.ScrollTrigger;

/* ─────────────────────────────────────────
   LOADER
───────────────────────────────────────── */
export function animateLoader(
  gsap: GSAP,
  setProgress: (n: number) => void,
  onComplete: () => void
) {
  const countObj = { val: 0 };

  gsap.to(countObj, {
    val: 100,
    duration: 2,
    ease: 'power2.inOut',
    onUpdate() {
      setProgress(Math.round(countObj.val));
      gsap.set('#loader-bar', { width: `${countObj.val}%` });
    },
    onComplete() {
      gsap.to('#loader', {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
        onComplete() {
          gsap.set('#loader', { display: 'none' });
          onComplete();
        },
      });
    },
  });
}

/* ─────────────────────────────────────────
   MAIN PAGE ANIMATIONS  (called after loader)
───────────────────────────────────────── */
export function animateMainPage(gsap: GSAP, ScrollTrigger: ST) {
  // NAV
  gsap.from('#navbar', { y: -30, opacity: 0, duration: 0.8, ease: 'power3.out' });

  // HERO
  gsap.fromTo(
    '#hero-tag',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, delay: 0.1, ease: 'power3.out' }
  );

  gsap.to('.hero-title .line span', {
    y: '0%',
    duration: 1.1,
    stagger: 0.12,
    delay: 0.2,
    ease: 'power4.out',
  });

  gsap.fromTo(
    '#hero-desc',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, delay: 0.8, ease: 'power3.out' }
  );

  gsap.to('#hero-scroll', { opacity: 1, duration: 0.8, delay: 1, ease: 'power3.out' });

  // ABOUT
  gsap.to('#about-heading .word', {
    scrollTrigger: { trigger: '#about', start: 'top 70%' },
    opacity: 1,
    y: 0,
    stagger: 0.07,
    duration: 0.7,
    ease: 'power3.out',
  });

  gsap.fromTo(
    '#about-body',
    { y: 30, opacity: 0 },
    {
      scrollTrigger: { trigger: '#about', start: 'top 65%' },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.3,
      ease: 'power3.out',
    }
  );

  gsap.fromTo(
    '.stat',
    { y: 40, opacity: 0 },
    {
      scrollTrigger: { trigger: '.about-stats', start: 'top 80%' },
      opacity: 1,
      y: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: 'back.out(1.7)',
    }
  );

  // PROJECTS
  gsap.from('#projects-title', {
    scrollTrigger: { trigger: '#projects', start: 'top 75%' },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  });

  gsap.from('.project-item', {
    scrollTrigger: { trigger: '.projects-list', start: 'top 75%' },
    y: 40,
    opacity: 0,
    stagger: 0.1,
    duration: 0.7,
    ease: 'power3.out',
  });

  // GALLERY (PINNING)
  const galleryTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#gallery',
      start: 'top top',
      end: '+=2500',
      pin: true,
      scrub: 1,
    },
  });

  galleryTl.to('.gallery-title-center', { scale: 1.5, opacity: 0.1, ease: 'none' }, 0);

  galleryTl.to(
    '.g-item',
    { opacity: 1, scale: 1, y: 0, stagger: { amount: 1, from: 'random' }, ease: 'power2.out' },
    0
  );

  // SKILLS
  gsap.from('#skills-title', {
    scrollTrigger: { trigger: '#skills', start: 'top 75%' },
    y: 40,
    opacity: 0,
    duration: 0.7,
    ease: 'power3.out',
  });

  gsap.to('.skill-box', {
    scrollTrigger: { trigger: '#skills-grid', start: 'top 80%' },
    opacity: 1,
    scale: 1,
    stagger: { amount: 0.8, from: 'random' },
    duration: 0.6,
    ease: 'back.out(1.4)',
    onComplete() {
      document.querySelectorAll<HTMLElement>('.skill-box').forEach((box) => {
        const level = box.getAttribute('data-level');
        const fill  = box.querySelector<HTMLElement>('.skill-level-fill');
        if (fill && level) {
          gsap.to(fill, { width: `${level}%`, duration: 1.2, ease: 'power2.out' });
        }
      });
    },
  });

  // CONTACT
  gsap.to('#contact-label', {
    scrollTrigger: { trigger: '#contact', start: 'top 70%' },
    opacity: 1,
    duration: 0.6,
    ease: 'power3.out',
  });

  gsap.to('#contact-title .line span', {
    scrollTrigger: { trigger: '#contact', start: 'top 65%' },
    y: '0%',
    stagger: 0.12,
    duration: 1,
    ease: 'power4.out',
  });

  gsap.fromTo(
    '#contact-links',
    { y: 30, opacity: 0 },
    {
      scrollTrigger: { trigger: '#contact', start: 'top 55%' },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }
  );

  // PARALLAX ACCENT
  gsap.to('.hero-accent', {
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    },
    y: 200,
    scale: 1.3,
  });
}

/* ─────────────────────────────────────────
   CURSOR
───────────────────────────────────────── */
export function initCursorAnimation(gsap: GSAP): () => void {
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');

  if (!window.matchMedia('(any-hover: hover)').matches || !cursor || !follower) {
    return () => {};
  }

  const onMouseMove = (e: MouseEvent) => {
    gsap.to(cursor,   { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'none' });
    gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power2.out' });
  };

  document.addEventListener('mousemove', onMouseMove);

  const hoverEls = document.querySelectorAll('a, button, .project-item, .skill-box, .g-item');

  const onEnter = () => {
    gsap.to(cursor,   { scale: 2.5, duration: 0.3 });
    gsap.to(follower, { scale: 2, opacity: 0.2, duration: 0.3 });
  };

  const onLeave = () => {
    gsap.to(cursor,   { scale: 1, duration: 0.3 });
    gsap.to(follower, { scale: 1, opacity: 0.5, duration: 0.3 });
  };

  hoverEls.forEach((el) => {
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
  });

  return () => {
    document.removeEventListener('mousemove', onMouseMove);
    hoverEls.forEach((el) => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    });
  };
}
