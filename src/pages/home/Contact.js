import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id="contact" className="contact center">
            <h1>About Us</h1>
            <div className="contact-content">
                <div className="contact-left">
                    <div className="cont-text">
                    <h3>Get in Touch </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ipsam. Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="cont-box">
                        <div className="icon-box">
                            <FaMapMarkerAlt className="icon"/>
                        </div>
                        <div className="info">
                            <div className="title">
                                Find us
                            </div>
                            <div className="subtitle">
                                KM4, Wabari Distict, W Taleeh
                            </div>
                        </div>
                    </div>
                    
                    <div className="cont-box">
                        <div className="icon-box">
                            <FaEnvelope className="icon"/>
                        </div>
                        <div className="info">
                            <div className="title">
                                Email
                            </div>
                            <div className="subtitle">
                                info@normed.so
                            </div>
                        </div>
                    </div>
                    <div className="cont-box">
                        <div className="icon-box">
                            <FaPhone className="icon"/>
                        </div>
                        <div className="info">
                            <div className="title">
                                Call us
                            </div>
                            <div className="subtitle">
                                +252 616 119 634
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cont-right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31898.251514613832!2d45.30776470120546!3d2.0433094046665197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58414977b71633%3A0xe88dc3726b63cb60!2sNormed%20Technology!5e0!3m2!1sen!2sso!4v1637601515208!5m2!1sen!2sso"
                 width="600" height="450" allowfullscreen="" loading="lazy"
                 ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact
