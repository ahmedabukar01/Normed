import {FaBars} from 'react-icons/fa';
import {FaWindowClose} from 'react-icons/fa';


const Navbar = () =>{

    return (
        <div className="navbar">
            <div className="nav-content">
                <div className="logo">
                    <span>NT</span>
                </div>
                <div className="tabs invisible">
                    <FaWindowClose className="close" />
                <ul>
                    
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
                </div>
                <FaBars className="bars visible" />
                
            </div>
        </div>
    )
}

export default Navbar;