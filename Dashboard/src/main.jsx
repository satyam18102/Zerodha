import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/*" element={<App />} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
