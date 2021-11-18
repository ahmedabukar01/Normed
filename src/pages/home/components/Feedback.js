import React from 'react';
import photo from './image/profile.jpg';

const Feedback = () => {
    return (
        <div className="feedback">
            <span className="top"> &bdquo; </span>
            <p className="text">
                Normed Technology has been pivotal to the success of our 
                city's Website. From its initial design to the final
                deployment, every phase has been met with <span className="bold">
                great customer service & quality technical support.
                </span>
                <span className="down"> &bdquo; </span>
            </p>
            <div className="info">
                 <div className="bg">
                 <img src={photo} alt="profile" />
                 </div>
                <div>
                <p className="person">Omar Abdy</p>
                <p className="title">product Manager at Som City</p>
                </div>
            </div>
        </div>
    )
}

export default Feedback


/*
    Normed Technology has been pivotal to the success of our 
    city's Website. From its initial design to the final
    deployment, every phase has been met with <span>
    great customer service &
    </span>
*/