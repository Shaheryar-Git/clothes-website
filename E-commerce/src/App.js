// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Sign from "./components/Sign";
import Checkout from "./components/Checkout";
import MainHome from "./components/MainHome";
import Shoes from "./components/Shoes";
import Detailpage from "./components/DetailsPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/product-details/:shoesID" element={<Detailpage />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
