import React, { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import Trending from "./Trending";

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
		<div>
			<div>
				<div className="bg-gradient p-2 text-center bg-light text-dark">
					<div>
						<marquee
							className="mb-0 fs-6 fw-bolder"
							style={{ width: "100%" }}
						>
							🎉 AVAIL 50% Discount WITH COUPON CODE 🎉
						</marquee>
					</div>
				</div>
				<nav className="navbar navbar-expand-lg bg-light">
					<div className="container-fluid">
						<Link
							className="navbar-brand d-flex align-items-center"
							to="/"
						>
							<img
								src="/Assets/logo3.jpg"
								alt="Company Logo"
								style={{
									objectFit: "contain",
									maxHeight: "150px",
									borderRadius: "5px",
									boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
								}}
							/>
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
								<Link to="/" className="nav-link">
									<h5 className="fw-bolder fs-3">
										<i>Home</i>
									</h5>
								</Link>
								<li className="nav-item">
									<Link to="/mens" className="nav-link ">
										<h5 className="fw-bolder fs-3">
											<i>Mens</i>
										</h5>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/womens" className="nav-link">
										<h5 className="fw-bolder fs-3">
											<i>Womens</i>
										</h5>
									</Link>
								</li>
							</ul>

							<Link
								to={cartsData.length > 0 ? "/checkout" : "/"}
								onClick={handleZeroProducts}
								className="nav-link text-dark fw-bold mt-1 me-3 ms-auto"
							>
								<Badge
									badgeContent={cartsData.length}
									color="primary"
								>
									<i className="fa-solid fa-cart-shopping fs-2"></i>
								</Badge>
							</Link>
						</div>
					</div>
				</nav>
			</div>
      
		</div>
	);
};

export default Navbar;
