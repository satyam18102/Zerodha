// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './landing_page/home/HomePage.jsx'
import Signup from './landing_page/signup/Signup.jsx'
import About from './landing_page/about/About.jsx'
import Product from './landing_page/products/Product.jsx'
import Pricing from './landing_page/pricing/Pricing.jsx'
import Support from './landing_page/support/Support.jsx'
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import NotFound from './landing_page/NotFound.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/signup" Component={Signup} ></Route>
          <Route path="/about" Component={About} ></Route>
          <Route path="/products" Component={Product} ></Route>
          <Route path="/pricing" Component={Pricing} ></Route>
          <Route path="/support" Component={Support} ></Route>
          <Route path="*" Component={NotFound} ></Route>
      </Routes>
      <Footer/>
  </BrowserRouter>
)
