import React from 'react';
import photo from './image/logo.png';

const Feedback = () => {
    return (
        <div className="feedback">
            <span> &bdquo; </span>
            <p className="text">
                I absolutely love working with your team! You all are wicked smart but never let us feel silly
                with the 'uhh I'll have to get back to you' response. I very
                much appreciate your  patience with our team and the amazing things we're doing together!
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
