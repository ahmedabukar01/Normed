import React from 'react'
import {FaArrowRight} from 'react-icons/fa';

const Showcase = () => {
    return (
        <div className="showcase center">
            <h1 className="title">
                We are Graphic Design and Web Development Experts
            </h1>
            <div className="subtitle">
                Normed Technology offering bespoke web <span>Design</span>,
                <span>Development</span> and <span>Support</span> Services based in Mogadisho
            </div>
            <button>Get My Guide
                <FaArrowRight />
            </button>
        </div>
    )
}

export default Showcase;
