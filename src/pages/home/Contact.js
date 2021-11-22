import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-content">
                <div className="contact-left">
                    <div className="cont-box">
                        <div className="icon">
                            <FaMapMarkerAlt />
                        </div>
                        <div className="info">
                            <div className="title">
                                Find us
                            </div>
                            <div className="subtitle">
                                Taleeh, Hodan Distict, Banaadir
                            </div>
                        </div>
                    </div>
                    <div className="cont-box">
                        <div className="icon">
                            <FaEnvelope />
                        </div>
                        <div className="info">
                            <div className="title">
                                Email
                            </div>
                            <div className="subtitle">
                                info@normed.so
                            </div>
                        </div>
                    </div>
                    <div className="cont-box">
                        <div className="icon">
                            <FaPhone />
                        </div>
                        <div className="info">
                            <div className="title">
                                Call us
                            </div>
                            <div className="subtitle">
                                Taleeh, Hodan Distict, Banaadir
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cont-right">

                </div>
            </div>
        </div>
    )
}

export default Contact
