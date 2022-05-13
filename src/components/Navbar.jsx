import "../../css/Navbar.css"
import "../../css/MediaQ.css"
import { useState } from "react";
  



export const Navbar = () => {   
    const [menu, setMenu] = useState(false)

    const toggle = ()=>{
    setMenu(!menu)
}   
  return (
    <>
    <nav className="navbar">
      <ul className= {"menu " + (menu ? 'show ' : '')  } id="navUL" >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#home">Create QR</a>
        </li>
        <li>
          <a href="#scanJump">Scan QR</a>
        </li>
        <li>
          <a href="#footscroll">Contact</a>
        </li>
      </ul>
      <div className={"menu-bar" + (menu ? ' mostrar' : '' )} >
        <i className="fa-solid fa-bars" onClick={toggle} ></i>
      </div>
    </nav>
    </>
  );
};
