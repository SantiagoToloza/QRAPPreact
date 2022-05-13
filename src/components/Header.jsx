import "../../css/Header.css"
import {Link} from "react-router-dom"
export const Header = () => {

  return (
    <>
      <header>
        <div className="grid introqr" id="home">
            <div className="textos-hero">
                <h1 className="weigth-600">App para generar Qr</h1>
                <p>App simple para crear una imagen QR introduciendo el texto que quieras convertir </p>
                <Link to="/AppQR" className="btnCrear" >Comenzar</Link>
            </div>
            <img src='src\images\undraw_mobile_payments_re_7udl.svg' className="hero"/>

            <a href="#scanJump" className="icono">
                <i className="fa-solid fa-angles-down"></i>
            </a>
        </div>
        
    </header>

    </>
  );
};
