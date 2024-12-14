import React from 'react'
import About from '../component/About';
// import WhyChooseUs from '../component/Why';
import  Histary from '../component/Histary';
import Owner from '../component/Owner';

const Aboutpage = () => {
  return (
    <div>
      <About />
      {/* <WhyChooseUs /> */}
      <Histary />
      <Owner />
    </div>
  )
}

export default Aboutpage;
