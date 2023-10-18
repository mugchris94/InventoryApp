import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './controllers/AdminLogin';
import ProductList from './Views/ProductList';
import AdminDashboard from './controllers/AdminDashboard';



function App() {
  return (
    <div className="App">
      
      <div className='portal'> 
        <Routes>
          
            <Route path="/" element={<AdminLogin/>}/>
            <Route path="/Products" element={<ProductList/>}/>
            <Route path="/Dashboard" element={<AdminDashboard/>}/>
            
        </Routes>
      </div>
    
  </div>
      
     
    
  );
}

export default App;
