
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { GridScan } from "./components/GridScan";
import { Footer } from "./components/Footer";
import { AppQR } from "./components/AppQR";
import { ScanApp } from "./components/ScanApp";





const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<> <Navbar/><Header/> <GridScan/> <Footer/></> }>
            </Route>
            <Route path="/APPQR" element={<><Navbar/> <AppQR/> <Footer/>  </>}>
            </Route>

        </Routes>
      </BrowserRouter>
      
    </>
  )
};
export default App;
