import { FaDesktop } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Serv = () => {
    return (
        <div className="service-content">
            <div className="serv-box">
                <FaDesktop className="icon"/>
                <h3>UI & UX Desgin</h3>
                <p>We make affective responsive web design 
                    that can work Desktop, Tablets and Smartphones!
                </p>
            </div>

            <div className="serv-box sp">
                <FaCode  className="icon"/>
                <h3>Development</h3>
                <p>We Design and Develop flexible, scale enterprise websites that are 
                    easy to use and manage.
                </p>
            </div>

            <div className="serv-box">
                <FaCameraRetro className="icon"/>
                <h3>Branding</h3>
                <p>
                    A solid brand strategy, logo and guidelines help you to get you recongnized.
                </p>
            </div>
        </div>
    )
}

export default Serv
