import React, { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const cartsData = useSelector((state) => state.CartReducer.carts);
  const navigate = useNavigate();


  const handleZeroProducts = () => {
    if (cartsData.length === 0) {
      toast.warn("Cart is empty. Please add some products!", {
        position: "top-center",
        autoClose: 3000,

      });
      navigate("/");
    }
  };

  return (
    <div >
      <div className="bg-gradient p-2 text-center bg-dark text-white ">
        <marquee className="mb-0 fs-6 fw-bolder ">🎉 Welcome To ShoeEnvy 🎉 Free Home Delivery</marquee>
      </div>
      <nav className="navbar navbar-expand-lg p-3" style={{backgroundColor:"#4D4D4C", height:"100px"}}>
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center ms-auto" to="/">
            <img
              src="\Assets\Shoes\WhatsApp Image 2024-12-09 at 18.19.38_7d96ac24.jpg"
              alt="Logo"
              height={80}
              width={200}
              className="me-2"
            />
          </Link>
        
          <Link
            to={cartsData.length > 0 ? "/checkout" : "/"}
            onClick={handleZeroProducts}
            className="nav-link text-dark fw-bold mt-1 me-3 ms-auto"
          >
            <Badge badgeContent={cartsData.length} color="primary">
              <i className="fa-solid fa-cart-shopping fs-2"></i>
            </Badge>
          </Link>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
