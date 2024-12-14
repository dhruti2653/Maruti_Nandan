import React from 'react';
import Slider from '../component/Slider';
import About from '../component/About';
import Welcome from '../component/Welcome';
import Why from '../component/Why';
import Email from '../component/Email';
import Services from '../component/Services';
// import Service from '../component/Service';
// import Testimonial from '../component/Testimonial';

const Homepage = () => {
  return (
    <div>
      <Slider />
      <Welcome />
    <About />
    <Services />
    {/* <Service /> */}
    <Why />
    {/* <Testimonial /> */}
    <Email />
    </div>
  )
}

export default Homepage;
