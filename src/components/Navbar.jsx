import "../../css/Navbar.css";
import "../../css/MediaQ.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggle = () => {
    setMenu(!menu);
  };
  return (
    <>
      <nav className="navbar">
        <ul className={"menu " + (menu ? "show " : "")} id="navUL">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/APPQR">APP QR</Link>
          </li>
          <li>
            <Link to="/SCANAPP">SCAN APP</Link>
          </li>
          <li>
            <a href="#footscroll">Contact</a>
          </li>
        </ul>
        <div className={"menu-bar" + (menu ? " mostrar" : "")}>
          <i className="fa-solid fa-bars" onClick={toggle}></i>
        </div>
      </nav>
    </>
  );
};
