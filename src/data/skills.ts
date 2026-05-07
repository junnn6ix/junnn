export interface Skill {
  id: string;
  icon: string;
  name: string;
  level: number; // 0–100
}

export const skills: Skill[] = [
  { id: 'react',      icon: '⚛️', name: 'React',      level: 95 },
  { id: 'nextjs',     icon: '▲',  name: 'Next.js',    level: 90 },
  { id: 'nodejs',     icon: '🟢', name: 'Node.js',    level: 85 },
  { id: 'typescript', icon: '🔷', name: 'TypeScript', level: 88 },
  { id: 'gsap',       icon: '🌀', name: 'GSAP',       level: 80 },
  { id: 'threejs',    icon: '🌐', name: 'Three.js',   level: 75 },
];
