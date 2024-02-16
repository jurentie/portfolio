import './App.css'
// import { Routes, Route, useLocation } from "react-router-dom"
// import { AnimatePresence } from 'framer-motion'

import Navbar from './components/utility/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  // const location = useLocation();

  return (
      <>
        <Navbar />
        <Landing />
        <About />
        <Projects />
        <Contact />
        {/* <AnimatePresence mode="wait"> */}
          {/* <Routes location={location} key={location.pathname}>
            <Route index element={<Landing />} />
            <Route path="/portfolio" element={<Landing />} />
            <Route path="/about" element={<About />} />
          </Routes> */}
        {/* </AnimatePresence> */}
      </>
    )
}

export default App;
