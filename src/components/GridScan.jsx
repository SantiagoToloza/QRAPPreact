import "../../css/GridScan.css";
import accept from "../../images/accept.svg";
export const GridScan = () => {
  return (
    <>
      <div className="scanqr grid">
        <div className="img2">
          <img src={accept} alt="" className="hero2" />
        </div>
        <div className="texto-scanear ">
          <h1>Escanee el codigo QR</h1>
          <p>
            Puede escanear cualquier codigo QR desde cualquier dispositivo movil
            Solo enfoque el QR y se le brindara el texto
          </p>
          <a href="/scanApp" className="btnscan">
            Escanear
          </a>
        </div>
      </div>
    </>
  );
};
