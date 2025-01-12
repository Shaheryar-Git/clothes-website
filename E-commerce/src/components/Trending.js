import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/action";
import { toast } from "react-toastify";

const Trending = () => {
  const categories = [
    {
      id: 1,
      image: "/Assets/1000041422.png",
      price: "2500",
      fabric : "ABRISH Embroidered Karandi"
    },
    {
      id: 2, 
      image: "/Assets/1000042027.png",
      price: "2500",
      fabric: "GREEN-DOBBY-3 PIECE",
    },
    {
      id: 3,
      image: "/Assets/1000042020.png",
      price: "2500",
      fabric: "Cotton Special 2pc"
    },
    {
      id: 4,
      image: "/Assets/1000042028.png",
      price: "2500",
      fabric: "ANew Saleha Print 2Pc"
    },
  ];

  let dispatch = useDispatch();
  const addedItem = useSelector((state) => state.CartReducer.carts);
	const sendItem = (e) => {
		// console.log(e);
		const cartAlready = addedItem.some((item) => item.id === e.id);
		// dispatch(updateQuantity(e.id, 1));
		if (cartAlready) {
			toast.warning("Item Already Added !", {
				position: "top-center",
				autoClose: 2000, // Auto-close the notification after 3 seconds
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
				autoClose: 2000, // Auto-close the notification after 3 seconds
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				className: "text-center fw-bolder",
			});
		}
	};

  return (
    <div className="container my-5 py-5" style={{ background: "#f9f9f9", borderRadius: "10px" }}>
    <h3 className="text-center text-uppercase mb-4 fw-bold" style={{ letterSpacing: "2px" }}>
      Trending Articles
    </h3>
    <div className="row g-4">
      {categories.map((ele, index) => (
        <div
          key={index}
          className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center"
        >
          <div
            className="card border-0 shadow-lg"
            style={{
              width: "20rem",
              borderRadius: "10px",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={ele.image}
              className="card-img-top"
              height={350}
              alt={ele.title}
              style={{
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div className="card-body text-center">
            <h6 className="card-title fw-bold "> {ele.fabric}</h6>
              <h5 className="card-title fw-bold fs-5"> Price : {ele.price}</h5>
              <div className="d-flex justify-content-center mt-3">
                <Link
                  onClick={() => sendItem(ele)}
                  className="btn btn-primary btn-lg"
                  style={{
                    borderRadius: "30px",
                    background: "linear-gradient(90deg, #ff7a18, #ff0000)",
                    border: "none",
                    color: "#fff",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    transition: "background 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "linear-gradient(90deg, #ff0000, #ff7a18)";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "linear-gradient(90deg, #ff7a18, #ff0000)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Trending;
