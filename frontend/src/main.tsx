import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/home.css'
// import App from './App.tsx'
import Home from '@/pages/home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
