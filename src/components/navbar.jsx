import "../index.css";
import logo from "../images/erickelnino.png";
import { NavigationLinks } from "./navigationLinks";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <NavigationLinks />
      </div>
    </nav>
  );
}
