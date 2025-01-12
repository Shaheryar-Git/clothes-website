import React from 'react';
import { Link } from 'react-router-dom';

const Section2 = () => {

    const cards = [
        {
          id: 1,
          title: 'Category 1',
          video: '/Assets/WhatsApp Video 2025-01-11 at 17.02.28_e6716cf2.mp4',
        },
        {
          id: 2,
          title: 'Category 2',
          video: '/Assets/WhatsApp Video 2025-01-11 at 17.02.30_4b62f29c.mp4',
        },
        {
          id: 3,
          title: 'Category 3',
          video: '/Assets/WhatsApp Video 2025-01-11 at 17.02.30_90f51aa3.mp4',
        },
        {
          id: 4,
          title: 'Category 4',
          video: '/Assets/WhatsApp Video 2025-01-11 at 17.02.31_d08f5e33.mp4',
        },
      ];

  return (
    <div>
      <div className="container-fluid my-4">
        {/* Row 1: Banner */}
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <img
              src="/Assets/WhatsApp Image 2025-01-11 at 16.59.39_ee01bb6d.jpg"
              alt="Main Banner"
              className="img-fluid w-100"
              style={{ maxHeight: 400, objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Row 2: Cards */}
        <div className="row justify-content-center g-3 mt-4">
        {cards.map((card) => (
            <div key={card.id} className="col-lg-3 col-md-6 col-sm-12">
              <Link
                to={card.link}
                className="card text-decoration-none text-center shadow-sm"
              >
                  <video
                  src={card.video}
                  className="card-img-top img-fluid"
                //   style={videoStyle}
                  autoPlay
                  muted
                  loop
                ></video>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Section2;
