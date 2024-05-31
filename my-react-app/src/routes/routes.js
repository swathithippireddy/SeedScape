// routes/routes.js
import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom'; // Rename Routes to avoid conflict
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

function AppRoutes() { // Rename Routes function
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </RouterRoutes>
  );
}

export default AppRoutes;
