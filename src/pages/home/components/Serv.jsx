import { FaDesktop } from "react-icons/fa"
import { FaCode } from "react-icons/fa"

const Serv = () => {
    return (
        <div className="service-content">
            <div className="serv-box">
                <FaCode  className="icon"/>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor, sit amet 
                consectetur adipisicing elit. Ducimus, deserunt?</p>
            </div>

            <div className="serv-box sp">
                <FaDesktop className="icon"/>
                <h3>Graphic Design</h3>
                <p>Lorem ipsum dolor, sit amet 
                consectetur adipisicing elit. Ducimus, deserunt?</p>
            </div>

            <div className="serv-box">
                <FaCode className="icon"/>
                <h3>Support</h3>
                <p>Lorem ipsum dolor, sit amet 
                consectetur adipisicing elit. Ducimus, deserunt?</p>
            </div>
        </div>
    )
}

export default Serv
