/* eslint-disable react/no-unescaped-entities */
import { useLayoutEffect } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  useLayoutEffect(() => {
    const typed = document.querySelector('.typed');

    if (typed) {
      let typed_strings = typed.getAttribute('data-typed-items');
      typed_strings = typed_strings.split(',');

      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 50,  
        backSpeed: 500,     
        backDelay: 1000,    
        showCursor: false   
      });
    }}, []);

  return (
    <div>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Gerry Jonathan Runtu</h1>
          <p>
            I'M <span className="typed" style={{ color: "White", textDecoration: "none" }} data-typed-items="Freelancer, Frontend Developer" />
          </p>
        </div>
      </section>
      {/* End Hero */}
    </div>
  );
};

export default Hero;