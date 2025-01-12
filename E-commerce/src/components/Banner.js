import React from "react";
import { Link } from "react-router-dom";


const Banner = () => {
	return (
		<div>
			<Link to="/">
				<div
					id="carouselExampleFade"
					className="carousel slide carousel-fade"
					data-bs-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src="Assets\WhatsApp Image 2025-01-11 at 11.37.57_9b8704ce.jpg"
								className="d-block w-100"
								alt="..."
								height={600}
							/>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Banner;
