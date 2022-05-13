import { useEffect, useState } from "react";
import "../../css/AppQr.css";
import QRCode from "qrcode";
import { Link } from "react-router-dom";

export const AppQR = () => {
  const [text, setText] = useState("");
  const [pretexto, setPretexto] = useState("");
  const [src, setSrc] = useState();

  useEffect(() => {
    QRCode.toDataURL(text)
      .then((url) => {
        setSrc(url);
      })
      
  }, [text]);

  const enviar = (e) => {
    e.preventDefault();
    setText(pretexto);
  };

  return (
    <>
      <div className="inicioQR">
        <div className="intro">

        <h1 className="titulo">Generador de QR</h1>
        <p className="descripcion">
          inserte su texto para generar la imagen con su codigo <span>QR</span>
        </p>
        </div>

      <div className="app">

        <form onSubmit={enviar}>
          <input
            type="text"
            value={pretexto}
            onChange={(e) => setPretexto(e.target.value)}
            className="cuadroTxt"
            />
        </form>
          {src ? <img className="Qrimg" src={src} width="100px" /> : null}

        <div className="btn">
          <button type="button" value={"enviar"}onClick={enviar} className="btn-enviar">
            Generar
        </button>
          <Link
            className="volver"
            type="button"
            value="volver"
            to="/"
            >
            Volver
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};
