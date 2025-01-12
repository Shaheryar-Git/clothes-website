import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Aos from "aos";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/action";
import { toast } from "react-toastify";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Essentials from "../datas/Essentials"; // Replace `Essentials` with your relevant data source.

const WardrobeEssentials = () => {
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
      toast.warning("Item Already Added!", {
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
      toast.success("Item Added To Cart!", {
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
    <div className="container mt-5" id="Essentials">
      <h1
        className="text-center mb-4 fw-bolder text-uppercase text-gradient"
        style={{
          fontSize: "3rem",
          color: "#212529",
          letterSpacing: "2px",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        Wardrobe Essentials
      </h1>
      <div className="row row-cols-1 row-cols-sm-12 row-cols-md-12 row-cols-lg-3 g-4">
        {Essentials.map((ele) => {
          return (
            <div className="col" key={ele.id}>
              <div
                className="card shadow-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
                style={{
                  borderRadius: "15px",
                  width: "100%",
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
                  <h5 className="card-title fw-bold text-center">Fabric: {ele.fabric}</h5>
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
                      className="btn py-2 btn-secondary text-white w-100"
                      style={{
                        borderRadius: "20px",
                      }}
                    >
                      Add to Cart
                    </button>
                    {/* Uncomment below if you wish to include View Details */}
                    {/* <Link
                      to={`/product-details/${ele.id}`}
                      className="btn py-2 btn-secondary text-white w-100"
                      style={{
                        borderRadius: "20px",
                      }}
                    >
                      View Details
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WardrobeEssentials;
