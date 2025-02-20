import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import Success from './Success';
import Fail from './Fail';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>  
    <Route path="/" element={<App />} />
    <Route path="/success" element={<Success />} />
    <Route path="/fail" element={<Fail />} />
  </Routes>
    
  </BrowserRouter>
);
