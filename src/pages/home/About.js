import {FaArrowRight} from 'react-icons/fa';
import myImage from '../images/banner5.jpg';

const About = () => {
    return (
        <div className="about center" id="about">
            <div className="left">
                <img src={myImage} alt="aboutimg" />
            </div>
            <div className="right">
                <h1>About us</h1>
                <h3>The Full Service Web Design Agency You've Been looking for</h3>
                <p>
                    Normed Technology Solutions is proud to provide comprehensive Solutions for Entire 
                    range of Graphic design, Social Media Marketing , Web Design and Web Development.
                </p>
                <button className="btn">Read More <FaArrowRight style={btnStyle} /> </button>
            </div>
        </div>
    )
}

export default About

// css
const btnStyle = {
    marginLeft: '10px'
}
