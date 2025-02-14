import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './landing_page/home/Hero'
import Awards from "./landing_page/home/Awards.jsx";
import Stats from './landing_page/home/Stats.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
      <Stats />
      <Awards />
  </StrictMode>,
)
