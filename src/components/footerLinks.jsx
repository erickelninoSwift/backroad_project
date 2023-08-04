export function FooterLink({ link }) {
  return (
    <li>
      <a href={link.name} className="footer-link">
        {link.title}
      </a>
    </li>
  );
}

export function FooterIconsLink({ myIcons }) {
  return (
    <li>
      <a href={myIcons.href} target="#" className="footer-icon">
        <i className={myIcons.icons}></i>
      </a>
    </li>
  );
}
