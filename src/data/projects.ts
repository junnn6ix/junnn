export interface Project {
  id: string;
  num: string;
  name: string;
  tags: string[];
  href: string;
}

export const projects: Project[] = [
  {
    id: "homeease",
    num: "01",
    name: "HomeEase: Smart Home App UI",
    tags: ["Figma Design"],
    href: "#",
  },
  {
    id: "portfolio-website",
    num: "02",
    name: "Portfolio Website",
    tags: ["React", "Tailwind CSS"],
    href: "#",
  },
  {
    id: "3d-brand",
    num: "03",
    name: "3D Brand Website",
    tags: ["Three.js", "GSAP", "Blender"],
    href: "#",
  },
];
