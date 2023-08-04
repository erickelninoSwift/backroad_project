import { allfooterLinks, allIconsLink } from "./data";
import { FooterLink, FooterIconsLink } from "./footerLinks";

export function FooterLinkElement() {
  return (
    <ul className="footer-links">
      {allfooterLinks.map((link) => {
        return <FooterLink key={link.id} link={link} />;
      })}
    </ul>
  );
}

export function FooterIconsElement() {
  return (
    <ul className="footer-icons">
      {allIconsLink.map((icons) => {
        return <FooterIconsLink key={icons.id} myIcons={icons} />;
      })}
    </ul>
  );
}
