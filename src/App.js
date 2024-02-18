import './App.css'

import Navbar from './components/utility/Navbar'
import ScrollBar from './components/utility/ScrollBar'
import Falcon from './components/utility/Falcon'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
      <>
        <Falcon />
        <Navbar />
        <ScrollBar />
        <Landing />
        <About />
        <Projects />
        <Contact />
      </>
    )
}

export default App;
