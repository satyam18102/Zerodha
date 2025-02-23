import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import './index.css'
import Home from "./Components/Home.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/*" element={<Home />} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
