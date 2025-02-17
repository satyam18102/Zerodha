// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './landing_page/home/HomePage.jsx'
import Signup from './landing_page/signup/Signup.jsx'
import About from './landing_page/about/About.jsx'
import Product from './landing_page/products/Product.jsx'
import Pricing from './landing_page/pricing/Pricing.jsx'
import Support from './landing_page/support/Support.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path="/" Component={HomePage}/>
          <Route path="/signup" Component={Signup} />
          <Route path="/about" Component={About} />
          <Route path="/products" Component={Product} />
          <Route path="/pricing" Component={Pricing} />
          <Route path="/support" Component={Support} />
      </Routes>
  </BrowserRouter>
)
