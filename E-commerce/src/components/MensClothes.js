import React from 'react'
import Mens from '../datas/Mens';
import { useState,useEffect } from 'react';
import { addToCart } from "../redux/actions/action";
import { toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import Aos from "aos";

const MensClothes = () => {

  const [loaders, setLoaders] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaders(false);
    }, 2000);
    Aos.init();
    Aos.refresh();
  }, []);

  let dispatch = useDispatch();
  const addedItem = useSelector((state) => state.CartReducer.carts);

  const sendItem = (e) => {
    const cartAlready = addedItem.some((item) => item.id === e.id);
    if (cartAlready) {
      toast.warning("Item Already Added !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "text-center fw-bolder",
      });
    } else {
      dispatch(addToCart(e));
      toast.success("Item Added To Cart !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "text-center fw-bolder",
      });
    }
  };

  if (loaders) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <ClipLoader color={"#ef0e0e"} loading={loaders} size={100} />
      </div>
    );
  }




  return (
		<>
   <Navbar/>
    <div className="container mt-5" id="Products">
     <h1 
        className="text-center mb-4 fw-bolder text-uppercase text-gradient" 
        style={{
          fontSize: "3rem",
          color: "#212529",
          letterSpacing: "2px",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        MENS Wardrobe
      </h1>
      <div className="row">
        {Mens.map((ele) => {
          return (
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-4 mb-4"  // Adjusting grid classes for responsiveness
              key={ele.id}
            >
              <div
                className="card shadow-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
                style={{
                  borderRadius: "15px",
                  width: "100%",  // Ensure the card takes full width in small screens
                  margin: "0 auto", 
                }}
              >
                <img
                  src={ele.image}
                  className="card-img-top"
                  style={{
                    height: "35rem",
                    objectFit: "cover",
                    borderRadius: "15px 15px 0 0",
                  }}
                  alt={ele.brand}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-center">Fabric : {ele.fabric}</h5>
                  <p className="card-text text-dark text-center">
                    <strong>Size:</strong> {ele.size}
                  </p>
                  <p className="text-dark text-center">
                    <strong>Color:</strong> {ele.color}
                  </p>
                  <h5 className="text-center text-dark fw-bold">Rs: {ele.price}</h5>

                  <div className="d-flex justify-content-between mt-3">
                    <button
                      onClick={() => sendItem(ele)}
                      className="btn py-2 btn-secondary text-white"
                      style={{
                        borderRadius: "20px",
                        flex: 1,
                        marginRight: "8px",
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <Footer/>
   </>
  );
}

export default MensClothes
