import './App.css';
import Home from './pages/home/Home';
import About from './pages/home/About';
import Services from './pages/home/Services';
import Subpage from './pages/home/Subpage';
import CoverPage from './pages/home/CoverPage';
import Contact from './pages/home/Contact';
import Footer from './pages/home/Footer';


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Subpage />
      <Services />
      <CoverPage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
