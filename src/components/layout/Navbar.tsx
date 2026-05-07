const navLinks = [
  { label: 'About',   href: '#about'   },
  { label: 'Work',    href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav id="navbar">
      <a className="nav-logo" href="#">
        YourName.
      </a>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
