import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <h2 className="section-title" id="projects-title">
          Projects
        </h2>
        <span className="section-meta">— 2023 / 2026</span>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.href}
            className="project-item"
            style={{ textDecoration: "none", color: "inherit" }}>
            <span className="project-num">{project.num}</span>
            <span className="project-name">{project.name}</span>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <span className="project-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
