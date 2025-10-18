import './App.css'
import Header from './components/Header'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Education from './components/Education'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <Header />
      <main className="grid">
        <section>
          <About />
          <Technologies />
          <Projects />
          <Education />
        </section>
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}

export default App