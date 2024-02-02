import React from 'react';

const Footer = () => {
  return (
    <>
    <div className="footer bg-dark">
    <div className="container text-center" style={{ color: 'white' }}>
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6 mt-4">
        <h4>Movies Hub</h4>
        <img src="/images/logo.png" alt="logo" style={{ height: '120px', width: '120px' }}/>
</div>
          <div className="col-lg-4 col-md-4 col-sm-6 mt-4">
            <h4>About Us</h4>
            <p>Welcome to our movie website, where we are passionate about bringing you the best in cinematic entertainment. Explore a world of captivating stories, thrilling adventures, and unforgettable characters.</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 mt-4 mb-3">
            <h4>Connect With Us</h4>
            <p>Stay updated on social media:</p>
            <div>
              <a href="https://facebook.com" target='_blank'>Facebook</a>
              <br />
              <a href="https://twitter.com" target='_blank'>Twitter</a>
              <br />
              <a href="https://instagram.com" target='_blank'>Instagram</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Footer;
