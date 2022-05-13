import "../../css/GridScan.css"
export const GridScan = () => {
  return (

<div className="scan" id="scanJump">
        <img src="src\images\accept.svg" alt="" className="hero2" />
        <div className="texto-scanear grid  " >
            <h1>Escanee el codigo QR</h1>
            <p>Puede escanear cualquier codigo QR desde cualquier dispositivo movil
                Solo enfoque el QR y se le brindara el texto
            </p>    
            <a href="#" className="btnscan">Escanear</a>
        </div>
    </div>


    )
}

