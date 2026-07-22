import './App.css'
import Header from './components/Header'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main className="layout">
        <div className="main-column">
          <About />
          <Technologies />
          <Projects />
          <Experience />
          <Education />
        </div>

        <Sidebar />
      </main>

      <Footer />
    </div>
  )
}

export default App
