import './App.css';
import Home from './pages/home/Home';
import Navbar from './pages/home/components/Navbar';
import global from './global';

function App() {
  return (
    <div className="App">
      <div className="home-page">
      <Navbar />
      <Home />
      </div>
    </div>
  );
}

export default App;
