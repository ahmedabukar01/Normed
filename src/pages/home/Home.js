import Navbar from './components/Navbar';
import bgImage from '../images/banner1.jpg';

const Home = () =>{
      const styles = {
          backgroundImage: `radial-gradient(rgba(7, 5, 5, 0.808),rgba(39, 34, 34, 0.74)), URL(${bgImage})`
      }
    return (
        <div className="home" style={styles}>
            <Navbar />
        </div>
    )
}
export default Home;

// .home{
//     background:
//     height:100vh;
//     background-position:center;
//     background-size: cover;
//     overflow-x: hidden;
//     position: relative;
//   }