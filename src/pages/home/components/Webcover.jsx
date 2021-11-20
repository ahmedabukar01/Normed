import {FaArrowRight} from 'react-icons/fa';

const Webcover = () => {
    return (
        <div className="webcover">
            <h2>Digital Marketing Resource</h2>
            <p>Designing high quality Posters then
                posting into Facebook, lastly we are running
                facebook ads and Google Ads
            </p>
            <button className="btn">View All Resources 
                <FaArrowRight style={margin}/>
            </button>
        </div>
    )
}

export default Webcover;

// css
const margin = {
    marginLeft:'5px'
}

