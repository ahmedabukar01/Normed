import React from 'react'
import Webcover from './components/Webcover'
import coverImage from './components/image/cover.jpg'

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
    // 
}
