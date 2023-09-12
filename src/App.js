import React, { useState } from 'react';
import 'react-chatbot-kit/build/main.css';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import NotFound from './pages/NotFound';
import Result from './pages/result';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/submitted' element={<Result />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
