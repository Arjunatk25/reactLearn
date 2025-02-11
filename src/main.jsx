import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './component/App.jsx'



import NavBar from './component/NavBar.jsx'
import CourseOverview from './component/CourseOverview.jsx'
import SetupInstallation from './component/SetupInstallation.jsx'
import GetStarted from './component/GetStarted.jsx'
import JSXBasics from './component/JSXBasics.jsx'
+




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <App />
      <CourseOverview/>
      <SetupInstallation/>
      <GetStarted/>
      <JSXBasics/>
  
    
    
  </StrictMode>,
)
