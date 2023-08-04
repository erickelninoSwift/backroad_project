export function Social({ mySocialLink }) {
  return (
    <li>
      <a
        href={mySocialLink.href}
        rel="noreferrer"
        className={mySocialLink.classLink}
      >
        <i className={mySocialLink.linkName}></i>
      </a>
    </li>
  );
}

export function ListTime({ link }) {
  return (
    <li>
      <a href={link.href} rel="noreferrer" className={link.classLink}>
        {" "}
        {link.linkName}
      </a>
    </li>
  );
}
