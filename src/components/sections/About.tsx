const headingWords = ['Building', ' products', ' that', ' people', ' love', ' to', ' use.'];

const stats = [
  { num: '3+', label: 'Years Exp.' },
  { num: '24', label: 'Projects Done' },
  { num: '12', label: 'Happy Clients' },
];

export default function About() {
  return (
    <section id="about">
      {/* Left column */}
      <div className="about-left">
        <p className="about-label">/ About Me</p>
        <div className="about-number">01</div>
      </div>

      {/* Right column */}
      <div className="about-text">
        <h2 id="about-heading">
          {headingWords.map((word, i) => (
            <span key={i} className="word">
              {word}
            </span>
          ))}
        </h2>

        <p className="about-body" id="about-body">
          I&apos;m a developer based in Jakarta, with 3+ years of experience
          building web applications. I specialize in creating seamless user
          experiences with modern technologies like React, Next.js, and
          Node.js. When I&apos;m not coding, I&apos;m designing UI or learning
          about 3D web.
        </p>

        <div className="about-stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
