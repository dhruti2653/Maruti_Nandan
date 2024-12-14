import React from "react";
import {  Route, Routes } from 'react-router-dom';
import Homepage from "../pages/Homepage";
import Aboutpage from "../pages/Aboutpage";
import Servicepage from "../pages/Servicepage";
import Gallerypage from "../pages/Gallerypage";
import Contactpage from "../pages/Contactpage";
import Layout from "../component/layout/Layout";
import Roadsurvey from "../component/Roadsurvey";
import Landsurvey from "../component/Landsurvey";
import Boundarysurvey from "../component/Boundarysurvey";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="services" element={<Servicepage />} />
        <Route path="gallery" element={<Gallerypage />} />
        <Route path="contact" element={<Contactpage />} />
        <Route path="road" element={<Roadsurvey />} />
        <Route path="land" element={<Landsurvey />} />
        <Route path="transmission" element={<Boundarysurvey />} />
      </Route>
    </Routes>
  );
};

export default Router;
