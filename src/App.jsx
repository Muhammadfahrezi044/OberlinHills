import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import logo from '/Users/Muham/Documents/Belajar_Muhammad Fahrezi/ReactJS/Jasa_Pemakaman-project/src/assets/logo.png'
import './App.css'

function App() {
  return (
    <>
    <Router>
      <header>
        <h1>Oberlin Hills</h1>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Layanan Kami</Link>
            </li>
            <li>
              <Link to="/about">Tentang Kami</Link>
            </li>
            <li>
              <Link to="/contact">Kontak</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimoni</Link>
            </li>
          </ul>
        </nav>
      </header>

       {/* Route Definitions */}
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>

      




    </>
  )
}

function Home() {
  return (
    <section className="welcome">
      <h1>Selamat Datang di Jasa Pemakaman Kami</h1>
      <p>Kami menyediakan layanan pemakaman yang penuh perhatian dan profesional untuk menghormati orang yang Anda cintai.</p>
    </section>
  );
}

export default App
