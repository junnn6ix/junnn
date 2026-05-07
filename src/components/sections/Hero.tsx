export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-accent" />

      <p className="hero-tag" id="hero-tag">
        ✦ Available for Freelance
      </p>

      <h1 className="hero-title" id="hero-title">
        <span className="line">
          <span>Front-End</span>
        </span>
        <span className="line">
          <span>
            Developer<em style={{ color: "var(--accent)" }}>.</em>
          </span>
        </span>
        {/* <span className="line">
          <span>
            Designer<em style={{ color: "var(--accent)" }}>.</em>
          </span>
        </span> */}
      </h1>

      <div className="hero-sub">
        <p className="hero-desc" id="hero-desc">
          I craft fast, purposeful digital experiences — from concept to
          deployment. Focused on clean code and thoughtful interaction.
        </p>
        <div className="hero-scroll" id="hero-scroll">
          <span className="scroll-line" /> Scroll to explore
        </div>
      </div>
    </section>
  );
}
