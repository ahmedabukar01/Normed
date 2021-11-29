import {FaBars} from 'react-icons/fa';
import logo from './image/logo.png';
import {FaWindowClose} from 'react-icons/fa';
import { useState } from 'react';


const Navbar = () =>{
    const [visible, setVisible] = useState(false);

    const handleVisible = () =>{
        setVisible(!visible);
    }

    // Click Links
    const clickLinks = (e) =>{
        if(e.target.tagName === 'A' && visible){
            setVisible(false);
        }
    }
    
    return (
        <div className="navbar center">
            <div className="nav-content">
                <div className="logo">
                    <span>NT</span>
                </div>
                <div className={`tabs ${visible}`}
                >
                    <FaWindowClose className="close" 
                    onClick={()=>handleVisible()}
                    />
                <ul onClick={(e)=>clickLinks(e)}>
                    
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#resource">Resources</a></li>
                </ul>
                </div>
                <FaBars className="bars visible" 
                    onClick={()=>handleVisible()}
                />
                
            </div>
        </div>
    )
}

export default Navbar;