import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './views/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './views/Services';
import ViewAllProducts from './views/ViewAllProducts';
import ContactUs from './views/ContactUs';
import Locations from './views/Locations';
import Consulting from './views/Consulting';
import DisplayOneProduct from './components/DisplayOneProduct';
import UpdateProduct from './components/UpdateProduct';
// import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Account from './views/Account';


function App() {

  return (

    

    <BrowserRouter>

      <Navbar />
        <Routes>
          // home page: image carousel and featured products 
          <Route path='/' exact element={<Home/>} />
          // generic page
          <Route path='/services' element={<Services/>} />
          // will display products and allow the creating / editing of products
          <Route path="/products" element={<ViewAllProducts/>} />
          // might need to move these two routes into the ViewAllProducts Views file
          <Route path="/product/:id" element={<DisplayOneProduct/>}  />
          <Route path="/product/edit/:id" element={<UpdateProduct/>} />
          // generic page
          <Route path='/contact-us' element={<ContactUs/>} />
          // generic page
          <Route path='/locations' element={<Locations/>} />
          // generic page
          <Route path='/consulting' element={<Consulting/>} />
          <Route path='/account/login' element={<Account />} />
          <Route path='/account/login/account/register' element={<RegistrationForm/>} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;