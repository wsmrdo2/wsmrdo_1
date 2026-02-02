
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
