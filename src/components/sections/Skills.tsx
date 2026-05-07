import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-header" style={{ padding: 0, marginBottom: 0 }}>
        <h2 className="section-title" id="skills-title">
          Tech Stack
        </h2>
      </div>

      <div className="skills-grid" id="skills-grid">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="skill-box"
            data-level={skill.level}
          >
            <span className="skill-icon">{skill.icon}</span>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level">
              <div className="skill-level-fill" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
