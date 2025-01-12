// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Sign from "./components/Sign";
import Checkout from "./components/Checkout";
import MainHome from "./components/MainHome";
import MensClothes from "./components/MensClothes";
import Womens from "./components/Womens";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/mens" element={<MensClothes />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
