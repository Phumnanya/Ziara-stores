import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Products from './Products';
import './index.css'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/products' element={<Products />} />
    </Routes>
    </>
  );
}

export default App;
