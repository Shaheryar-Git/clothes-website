import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Aos from "aos";
import { useEffect } from "react";
import Footer from "./Footer";
import shoes from "../datas/Shoes";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/action";
import { toast } from "react-toastify";

const MainHome = () => {
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

	if (loaders) {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "100vh" }}
			>
				<ClipLoader color={"#ef0e0e"} loading={loaders} size={100} />
			</div>
		);
	}

	return (
		<div className="bg-black">
			<Navbar />
			{/* Banner */}
			<img
				src="Assets/PHOTO-2024-11-26-19-44-42.jpg"
				className="d-block w-100"
				width={100}
				height={620}
				alt="Banner"
				loading="lazy"
			/>

			{/* Products */}
			<h1 className="text-center my-5 text-white">Our Sneakers</h1>
			<center>
				<div className="container">
					<div className="row gy-4">
						{shoes.map((ele) => {
							return (
								<div
									className="col-lg-4 col-md-6 col-sm-12 mb-4 "
									key={ele.id}
								>
									<div
										className="card shadow-lg"
										data-aos="fade-up"
										data-aos-duration="1000"
										style={{ borderRadius: "15px" }}
									>
										<img
											src={ele.image}
											className="card-img-top "
											style={{
												height: "20rem",
												borderRadius: "15px 15px 0 0",
											}}
											alt={ele.brand}
										/>
										<div className="card-body">
											<h5 className="card-title fw-bold">
												{ele.brand}
											</h5>
											<p className="card-text text-dark fw-semibold fs-5">
												Price : {ele.price}
											</p>
											<p className="text-muted fw-bolder ">
												Size : {ele.size}
											</p>
											<div className="d-flex justify-content-between mt-3">
												<Link
													onClick={() =>
														sendItem(ele)
													}
													className="btn btn-secondary btn-lg"
													style={{
														borderRadius: "20px",
													}}
												>
													Add to Cart
												</Link>
												<Link
													to={`/product-details/${ele.id}`}
													className="btn  px-4 py-2 btn-secondary text-white"
													style={{
														borderRadius: "20px",
													}}
												>
													View Details
												</Link>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</center>

			<Footer />
		</div>
	);
};

export default MainHome;
