import { linksData, SocialLinks } from "./data";
import { Social, ListTime } from "./social";
export function NavigationLinks() {
  return (
    <>
      <ul className="nav-links" id="nav-links">
        {linksData.map((link) => {
          return <ListTime key={link.id} link={link} />;
        })}
      </ul>

      <ul className="nav-icons">
        {SocialLinks.map((link) => {
          return <Social key={link.id} mySocialLink={link} />;
        })}
      </ul>
    </>
  );
}
