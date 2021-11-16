import {FaArrowRight} from 'react-icons/fa';
import myImage from '../images/banner2.jpg';

const About = () => {
    return (
        <div className="about center" id="about">
            <div className="left">
                <img src={myImage} alt="image" />
            </div>
            <div className="right">
                <h2>About</h2>
                <h3>Normed Technology is The full service web design Agency You've Been looking for</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                     adipisicing elit. Beatae provident nobis ipsam eaque tenetur molestiae
                      soluta quasi aperiam, id facere!
                </p>
                <button>Read More <FaArrowRight /> </button>
            </div>
        </div>
    )
}

export default About
