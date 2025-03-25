
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/flaticon.css'
import './assets/css/magnific-popup.css'
import './assets/css/animate.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
