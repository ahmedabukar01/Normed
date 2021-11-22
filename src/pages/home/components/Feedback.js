import React from 'react';
import photo from './image/profile1.jpg';

const Feedback = () => {
    return (
        <div className="feedback">
            <span className="top"> &bdquo; </span>
            <p className="text">
                We brainstormed with the Normed Technology Team and within two months our
                system was operational. They are always <span className="bold">Very responsive</span> to our
                request and timelines, and innovative in creating solutions to needs.
                <span className="down"> &bdquo; </span>
            </p>
            <div className="info">
                 <div className="bg">
                 <img src={photo} alt="profile" />
                 </div>
                <div>
                <p className="person">Zacky Ally</p>
                <p className="title">product Manager, Som City</p>
                </div>
            </div>
        </div>
    )
}

export default Feedback


/*
    We brainstormed with the Normed Technology Team and within two months our
    system was operational. They are always <span>Very responsive</span> to our
    request and timelines, and innovative in creating solutions to needs.
*/