const Footer = () => {
  return (
    <div>
      <center>
      <footer
          className="bg-dark text-white mt-2"
          style={{ padding: "35px 0px"}}
        >
          <div className="Container w-75">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 mb-4">
                <h3 className="text-warning fw-bold">ShoeEnvy</h3>
                <p className="fw-bold text-white">
                  Our products empower more than 3 billion people around the
                  world to share ideas and offer support.
                </p>
              </div>

              <div className="col-lg-3 col-md-6 col-12 mb-4">
                <h3 className="text-warning fw-bold">PRODUCTS</h3>
                <ul className="list-unstyled">
                <li>Sneakers</li>
        <li>Running Shoes</li>
        <li>High Tops</li>
        <li>Casual Sneakers</li>
        <li>Sports Sneakers</li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 col-12 mb-4">
                <h3 className="text-warning fw-bold">CONTACTS</h3>
                <p className="text-white">
                  <i className="fa fa-home"></i> Pakistan, Lahore, Johar Town
                  <br />
                  <i className="fa fa-phone"></i> 096669565
                  <br />
                  <i className="fa fa-envelope"></i> ShoeEnvy@gmail.com
                  <br />
                  <i className="fa fa-help"></i> Any help
                </p>
              </div>

              <div className="col-lg-3 col-md-6 col-12 mb-4">
                <h3 className="text-warning fw-bold">PROVIDERS</h3>
                <ul className="list-unstyled">
                  <li><a href="https://www.instagram.com/" target="_blank" style={{ color: "white" }}>Instagram</a></li>
                  <li><a href="https://www.facebook.com/" target="_blank" style={{ color: "white" }}>Facebook</a></li>
                  <li><a href="https://www.linkedin.com/jobs/" target="_blank" style={{ color: "white" }}>LinkedIn</a></li>
                  <li><a href="https://www.amazon.com/" target="_blank" style={{ color: "white" }}>Amazon</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </center>
    </div>
  );
};

export default Footer