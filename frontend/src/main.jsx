// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './landing_page/home/HomePage.jsx'
import Signup from './landing_page/signup/Signup.jsx'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path="/" Component={HomePage}/>
          <Route path="/signup" Component={Signup} />
          <Route path="/about" Component={Signup} />
          <Route path="/products" Component={Signup} />
          <Route path="/pricing" Component={Signup} />
          <Route path="/support" Component={Signup} />
      </Routes>
  </BrowserRouter>
)
