import "../index.css";
import { CopyRights } from "./CopyRightMessage";
import { FooterIconsElement, FooterLinkElement } from "./footerElement";

export function Footer() {
  return (
    <footer className="section footer">
      <FooterLinkElement />
      <FooterIconsElement />
      <CopyRights
        mycopyRight={"copyright"}
        NameCompany={"Backroads travel tours company"}
      />
    </footer>
  );
}
