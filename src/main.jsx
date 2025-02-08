import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './component/App.jsx'
import Footer from './component/Footer.jsx'
import Content from './component/Content.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Content />
    <Footer />
    
  </StrictMode>,
)
