import Navbar from './component/Navbar';
import Intro from './component/Intro';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';
import './css/app.css'
export default function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Project />
      <Contact />
      <Footer />

    </>
  )
}