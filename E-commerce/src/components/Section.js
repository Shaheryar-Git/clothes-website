import React from 'react'
import { Link } from 'react-router-dom'

const Section = () => {
  return (
    <div className="container my-4">
    <div className="row justify-content-center g-3">
      {/* Men's Western */}
      <div className="col-lg-6 col-md-6 d-flex justify-content-center">
        <Link to={"/mens"} className="btn btn-light btn-lg w-100 text-center d-flex flex-column align-items-center">
          <img src="/Assets/mensBannner.jpg" alt="Men's Western" className="img-fluid mb-2" style={{maxHeight: 600}} />
          Men's Western
        </Link>
      </div>
      {/* Women's Western */}
      <div className="col-lg-6 col-md-6 d-flex justify-content-center">
        <Link to={"/womens"} className="btn btn-light btn-lg w-100 text-center d-flex flex-column align-items-center">
          <img src="Assets/WomensBanner2.webp" alt="Women's Western" className="img-fluid mb-2" style={{maxHeight: 600}} />
          Women's Western
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Section
