import { Link } from "react-router-dom";

const Footer = () => {
  return (
		<footer className="text-white py-5 bg-dark">
			<div className="container">
				<div className="row text-center text-md-start align-items-center">
					{/* Logo Section */}
					<div className="col-12 col-md-3 mb-4 d-flex align-items-center justify-content-center">
						<div
							style={{
								fontSize: "2rem",
								fontWeight: "bold",
								color: "#4a4a4a",
								textAlign: "center",
								borderRadius: "10px",
								padding: "20px",
								boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
								background:
									"linear-gradient(90deg,rgb(234, 228, 228),rgb(245, 245, 245))",
							}}
						>
							<h1 className="fw-bolder">ISHQBUNAI</h1>
						</div>
					</div>

					{/* Menu Section */}
					<div className="col-12 col-md-3 mb-4">
						<h4 className="text-warning text-center">Menu</h4>
						<ul className="list-unstyled text-center">
							<li>
								<Link to="/" className="text-white footer-link">
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/mens"
									className="text-white footer-link"
								>
									Men
								</Link>
							</li>
							<li>
								<Link
									to="/womens"
									className="text-white footer-link"
								>
									Women
								</Link>
							</li>
						</ul>
					</div>

					{/* Address Section */}
					<div className="col-12 col-md-3 mb-4">
						<h4 className="text-warning text-center">Address</h4>
						<p className="text-center">
							<i className="fas fa-map-marker-alt me-2"></i> On
							the Internet 😉
						</p>
					</div>

					{/* Contact Section */}
					<div className="col-12 col-md-3 mb-4 text-center">
						<h4 className="text-warning">WhatsApp</h4>
						<p>
							<i className="fab fa-whatsapp me-2"></i>03037171234
						</p>
						<h4 className="text-warning">Support</h4>
						<p>
							<i className="fas fa-envelope me-2"></i>
							<a
								href="mailto:mansoorhassankhan2003@gmail.com"
								className="text-white footer-link"
							>
								mansoorhassankhan2003@gmail.com
							</a>
						</p>
					</div>
				</div>

				{/* Social Media and Footer Note */}
				<div className="text-center mt-4">
					<div className="social-icons mb-3">
						<a
							href="https://www.facebook.com/profile.php?id=61566790959968&mibextid=ZbWKwL"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white me-3 footer-icon"
						>
							<i className="fab fa-facebook-f"></i>
						</a>
						<a
							href="https://www.instagram.com/thetayyabat/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white footer-icon"
						>
							<i className="fab fa-instagram"></i>
						</a>
					</div>
					<p className="mt-3 text-muted">
						&copy; 2024 ISHQBUNAI. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
  );
};

export default Footer;
