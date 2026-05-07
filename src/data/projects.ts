export interface Project {
  id: string;
  num: string;
  name: string;
  tags: string[];
  href: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce',
    num: '01',
    name: 'E-Commerce Platform',
    tags: ['Next.js', 'Stripe', 'Prisma'],
    href: '#',
  },
  {
    id: 'saas-dashboard',
    num: '02',
    name: 'SaaS Dashboard',
    tags: ['React', 'D3.js', 'Node'],
    href: '#',
  },
  {
    id: '3d-brand',
    num: '03',
    name: '3D Brand Website',
    tags: ['Three.js', 'GSAP', 'Blender'],
    href: '#',
  },
];
