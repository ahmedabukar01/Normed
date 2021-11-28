import {  FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer center" id="resource">
            <div className="footer-content">
            <div className="social">
                <div className="footer-text">
                    <h3>Normed Technology</h3>
                    <p>We don't just design sites that look great,<br />
                        We develop sites that work great.
                    </p>
                </div>
                <h4>Follow us on social media</h4>
                <div className="social-links">
                    <FaFacebook className="social-icon"/>
                    <FaInstagram className="social-icon"/>
                    <FaTwitter className="social-icon"/>
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
                <div className="links">
                <a href="#about">Blog</a>
                <a href="#about">About Us</a>
                <a href="#about">Services</a>
                <a href="#about">Contact Me</a>
                </div>
            </div>
            <div className="contact">
                <h3>Contact us</h3>
                <div className="add">
                    <p>Taleeh, Hodan Distict</p>
                    <p>Mogadisho, Somalia</p>
                    <p>info@normed.so</p>
                    <p>+252 616 119 634</p>
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
            <div className="by">&copy; 2021 | Powered by Normed Technology</div>
        </div>
    )
}

export default Footer
