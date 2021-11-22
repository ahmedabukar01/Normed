import React from 'react'
import Webcover from './components/Webcover'
import coverImage from './components/image/cover1.jpg'

const CoverPage = () => {
    return (
        <div className="cover-page center" style={coverStyle}>
            <Webcover />
        </div>
    )
}

export default CoverPage;

// css in js

const coverStyle = {
        backgroundImage: `linear-gradient(rgba(20, 17, 17, 0.527),rgba(10, 8, 8, 0.548)), url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minhieght: '80vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
}
