const contactLinks = [
  { label: 'Send Email ↗', href: 'mailto:hello@yourname.com', primary: true },
  { label: 'LinkedIn',     href: 'https://linkedin.com',      primary: false },
  { label: 'GitHub',       href: 'https://github.com',        primary: false },
];

export default function Contact() {
  return (
    <section id="contact">
      <p className="contact-label" id="contact-label">
        ✦ Let&apos;s Connect
      </p>

      <div className="contact-big" id="contact-title">
        <span className="line"><span>Got a project</span></span>
        <span className="line">
          <span>
            in <em>mind?</em>
          </span>
        </span>
      </div>

      <div className="contact-links" id="contact-links">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`contact-btn${link.primary ? ' primary' : ''}`}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
