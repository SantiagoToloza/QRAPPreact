import "../../css/GridScan.css"
import accept from '../../images/accept.svg'
export const GridScan = () => {
  return (

<div className="scan" id="scanJump">
        <img src={accept} alt="" className="hero2" />
        <div className="texto-scanear grid  " >
            <h1>Escanee el codigo QR asdfas</h1>
            <p>Puede escanear cualquier codigo QR desde cualquier dispositivo movil
                Solo enfoque el QR y se le brindara el texto
            </p>    
            <a href="#" className="btnscan">Escanear</a>
        </div>
    </div>


    )
}

