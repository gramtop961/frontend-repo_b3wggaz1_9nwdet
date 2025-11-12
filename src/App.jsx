import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-sm text-gray-600">© {new Date().getFullYear()} Sarthak Tripathy • Built with love and data</footer>
    </div>
  )
}

export default App
