import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Send a POST request to your backend with the email address
    fetch('/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      alert(data.message); // You can display a success message to the user
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <footer className="bg-dark text-white p-4 text-center">
      <div className="container">
        <div className="row">

        <div className="col-md-12 mt-4 text-center">
  <h5>Email Subscription</h5>
  <form onSubmit={handleSubscribe} className="d-flex justify-content-center">
    <div className="input-group mb-3">
      <div className="col-md-10 text-center">
        <input
          type="email"
          className="form-control"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-group-append ml-2">
        <button className="btn btn-success" type="submit">Subscribe</button>
      </div>
    </div>
  </form>
</div>



<div className="row">
  <div className="col-md-4 mb-4">
    <h4>Menu</h4>
    <ul className="list-unstyled">
      <li><a href="/home" className="text-white text-decoration-none">Home</a></li>
      <li><a href="/about" className="text-white text-decoration-none">About</a></li>
      <li><a href="/ministries" className="text-white text-decoration-none">Ministries</a></li>
      <li><a href="/events" className="text-white text-decoration-none">Events</a></li>
      <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
    </ul>
  </div>

  <div className="col-md-4 mb-4 ">
    <h5>Follow Us</h5>
    <div className="social-icons">
      <a href="#" className="text-white fa-2x m-2">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="#" className="text-white fa-2x m-2">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#" className="text-white fa-2x m-2">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#" className="text-white fa-2x">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <h4>CONTACT US</h4>
    <ul className="list-unstyled">
      <li>Hotlines :
          +233 593 830 400 | +233 556 490 029</li>
      <li>Address: P.O.Box 1934 Adum-Kumasi</li>
      <li>Email: info@hospital.com</li>
    </ul>
  </div>
</div>

          <div className="col-md-12">
            <p>&copy; 2023 Patasi Family Hospital. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;