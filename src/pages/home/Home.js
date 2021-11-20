import Navbar from './components/Navbar';
import bgImage from '../images/banner4.jpg';
import Showcase from './components/Showcase';

const Home = () =>{
    
    return (
        <div className="home" id="home" style={styles}>
            <Navbar />
            <Showcase />
        </div>
    )
}
export default Home;

// css
const styles = {
    backgroundImage: `radial-gradient(rgba(7, 5, 5, 0.858),rgba(39, 34, 34, 0.804)), URL(${bgImage})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative'
}