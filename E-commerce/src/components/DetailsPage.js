import React from "react";
import { useParams } from "react-router-dom";
import shoes from "../datas/Shoes";
import { Link } from "react-router-dom";

const Detailpage = () => {
  let { shoesID } = useParams(); // Get the ID from the route params
  let Shoes = shoes.find((ele) => ele.id.toString() === shoesID); // Find the shoe object based on the ID

  return (
    <div className="d-flex vh-100" style={{ backgroundColor: "#000" }}>
      <div className="container mt-5">
        <div className="product-content clearfix shadow-lg rounded p-4 text-dark mx-auto " style={{ backgroundColor: "#FFFFFF",maxWidth: "600px" }}>
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-md-12 col-sm-12 d-flex justify-content-center">
              <div className="product-image">
                <img
                  src={Shoes.image}
                  height={500}
                  width="100%"
                  className="img-responsive rounded shadow"
                  alt="Product"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Product Details Section */}
            <div className="col-md-12 col-md-6 col-sm-12 d-flex flex-column align-items-center text-center">
              <h2 className="name mb-3">{Shoes.brand}</h2>
              <p className="mb-2">
                <strong>Price:</strong> {Shoes.price}
              </p>
              <p className="mb-2">
                <strong>Condition:</strong> {Shoes.condition}
              </p>

              <div className="mt-4">
                <Link to="/">
                  <button className="btn btn-dark btn-lg px-5 py-2 rounded-pill">
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
