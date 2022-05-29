import { useState } from "react";
import { QrReader } from "react-qr-reader";
import { Footer } from "./Footer";
import "../../css/ScanQRAPP.css";
export const ScanApp = (props) => {
  const [data, setData] = useState("No result");

  return (
    <>
      <div className="todo">
        
          <QrReader
            className="qrapp"
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
          />
          <p className="data">{data}</p>
     
        </div>

      <Footer className="footer" />
    </>
  );
};
