import React from 'react';
import HeroBanner from '../components/HeroBanner';
import visitHeroBanner from '../assets/images/visit-hero-banner.jpg';

const Visit = () => {
  return (
    <React.Fragment>
      <HeroBanner heading="Visit Us" imageFile={visitHeroBanner} />
      <section className="main-content visit">
        <h3>Hours</h3>
        <p>DAILY 7AM - 8PM</p>
        <h3>Phone</h3>
        <p><a href="tel:5555555555">(555) 555-5555</a></p>
        <h3>Email</h3>
        <p><a href="mailto:coffee.shop@gmail.com">coffee.shop@gmail.com</a></p>
        <h3>Location</h3>
        <p>Mysore Rd, Bangalore, India - 560059</p>
      </section>
    </React.Fragment>
  );
}

export default Visit;