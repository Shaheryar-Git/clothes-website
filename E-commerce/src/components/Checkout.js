import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETEFROMCART } from "../redux/actions/action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [quantities, setQuantities] = useState(1);

  const IncreaseP = (id) => {
    setQuantities((preQuantities) => ({
      ...preQuantities,
      [id]: (preQuantities[id] || 1) + 1,
    }));
  };

  const DecreaseP = (id) => {
    if (quantities[id] > 1) {
      setQuantities((preQuantities) => ({
        ...preQuantities,
        [id]: preQuantities[id] - 1,
      }));
    }
  };

  const cartsData = useSelector((state) => state.CartReducer.carts);

  const calculateTotalPrice = (ele, Quantity) => {
    const price = parseFloat(ele.price.replace(/[^\d.-]/g, ""));
    return Quantity * price;
  };

  const subtotal = cartsData.reduce(
    (acc, ele) => acc + calculateTotalPrice(ele, quantities[ele.id] || 1),
    0
  );

  let navigate = useNavigate();

  if (cartsData.length === 0) {
    toast.success("Cart is Empty.. First Add Some Products!", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "text-center fw-bolder",
    });
    navigate("/");
  }

  let dispatch = useDispatch();

  const DELETE = (id) => {
    dispatch(DELETEFROMCART(id));
    toast.error("Item Deleted From Cart!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "text-danger text-center fw-bolder",
    });
  };

  const proceedToCheckout = () => {
    navigate("/sign");
  };

  return (
    <div className="checkout-page" style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <div>
        <h1 className="text-center">Checkout List</h1>
        <hr style={{ borderColor: "#fff" }} />

        <div className="container mx-auto">
          <div className="row1 row ">
            <div className="col-xl-8 mt-5 mx-auto">
              {cartsData.map((ele) => (
                <div
                  className="card shadow-lg mb-3"
                  key={ele.id}
                >
                  <div className="card-body">
                    <div className="d-flex border-bottom pb-3 " >
                      <div className="me-4">
                        <img
                          src={ele.image}
                          height={180}
                          width={200}
                          className="avatar-lg rounded"
                          alt={ele.brand}
                        />
                      </div>
                      <div className="flex-grow-1 align-self-center overflow-hidden">
                        <div>
                          <h5 className="text-truncate font-size-20 text-center">
                            <a href="#" className="text-dark">
                              {ele.brand}
                            </a>
                          </h5>
                        </div>
                      </div>
                      <div className="flex-shrink-0 my-4">
                        <button className="btn text-danger">
                          <i
                            className="fa-sharp fa-solid fa-trash fs-3"
                            onClick={() => DELETE(ele.id)}
                          ></i>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mt-3">
                            <p className="fw-bolder mb-2 ms-3">Price</p>
                            <h5 className="mb-0 mt-2">RS: {ele.price}</h5>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="mt-3">
                            <p className="fw-bolder mb-2">Quantity</p>
                            <button
                              className="btn btn-light fs-5 me-3"
                              onClick={() => DecreaseP(ele.id)}
                            >
                              -
                            </button>
                            {quantities[ele.id] || 1}
                            <button
                              className="btn btn-light fs-5  ms-3"
                              onClick={() => IncreaseP(ele.id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mt-3">
                            <p className="fw-bolder mb-2">Total</p>
                            <h5>RS: {calculateTotalPrice(ele, quantities[ele.id] || 1)}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="d-flex justify-content-center">
                <div className="col-xl-4 mt-auto">
                  <div className="mt-5 mt-lg-0">
                    <div className="card border shadow-5" >
                      <div className="card-header bg-transparent border-bottom py-3 px-4">
                        <h5 className="font-size-16 mb-0 text-center">Order Summary</h5>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table mb-0">
                            <tbody>
                              <tr>
                                <td className="fw-bolder">Total Amount: RS {subtotal}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-4 ms-5">
                <div className="col-sm-6">
                  <div className="text-sm-end mt-2">
                    <button
                      onClick={proceedToCheckout}
                      className="checkbtn btn btn-success ms-5"
                    >
                       Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
