import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Aos from "aos";
import { useEffect } from "react";
import Footer from "./Footer";
import shoes from "../datas/Womens";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/action";
import { toast } from "react-toastify";
import Banner from "./Banner";
import Trending from "./Trending";
import Section from "./Section";
import Section2 from "./Section2";
import WomensClothes from "./Womens";

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
		<div className="bg-light">
			<Navbar />
			<Banner/>
			<Trending/>
			<Section/>
			<Section2/>
			
			<Footer />
		</div>
	);
};

export default MainHome;
