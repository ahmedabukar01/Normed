import {  FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <div className="footer-text">
                    <h4>Normed Technology</h4>
                    <p>We don't just design sites that look great,
                        We develop sites that work great.
                    </p>
                </div>
                <h4>Follow us on social media</h4>
                <div className="social-links">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </div>
            <div className="footer-serv">
                <h3>Explore</h3>
                <div className="links">
                    <a href="#">Web Design Services</a>
                    <a href="#">Web Development </a>
                    <a href="#">Normed SEO Services </a>
                    <a href="#">Social Media Marketing </a>
                    <a href="#">Graphic Design </a>
                    <a href="#">Branding </a>
                </div>
            </div>
            <div className="quick">
                <h3>Quick Links</h3>
                <div className="link">
                <a href="#about">Blog</a>
                <a href="#about">About Us</a>
                <a href="#about">Services</a>
                <a href="#about">Contact Me</a>
                </div>
            </div>
            <div className="contact">
                <h3>Contact us</h3>
                <div className="links">
                    <P>Taleeh, Hodan Distict</P>
                    <P>Mogadisho, Somalia</P>
                    <P>info@normed.so</P>
                    <P>+252 616 119 634</P>
                </div>
            </div>
            <div className="legal">
              <h3>Legal Stuff</h3>
              <div className="links">
                <a href="#">Privacy policy</a>
                <a href="#">use of cookies</a>
                <a href="#">Security policy</a>
                <a href="#">Terms of use</a>
              </div>
            </div>
        </div>
    )
}

export default Footer
