import './Contact.css';
import location from '../../img/icon/location-icon.png';
import phone from '../../img/icon/phone.png';
import timing from '../../img/icon/timing.png';
import map from '../../img/pg/map.png';

export const Contact = () => {
    return (
        <section className="join-page contact-page">
            <div className="container">
                <div className="join-section">
                    <div className="contact-right">
                        <img src={map} alt="inside" className="img" draggable="false" />
                    </div>
                    <div className="contact-left contactus-left">
                        <h2 className="contact-heading">If you want to Contact, don’t hesitate!</h2>
                        <ul>
                            <li>
                                <div className="contactus-img">
                                    <img src={location} className='alignnone align-img' alt="location" width="27" height="27" />
                                </div>
                                <p><a href="https://maps.app.goo.gl/bhbcukAx2oar6TQa8">Peter I Island</a></p>
                            </li>
                            <li>
                                <div className="contactus-img">
                                    <img src={phone} className='alignnone align-img' alt="phone" width="16" height="27" />
                                </div>
                                <p><b>Contact</b><br />
                                    <a href="tel:00000000000">+00000000000</a></p>
                            </li>
                            <li>
                                <div className="contactus-img">
                                    <img src={timing} className='alignnone align-img' alt="timing" width="27" height="27" />
                                    <p><b>Opening Hours</b><br />
                                        7 AM - 7 AM</p>
                                </div>
                            </li>
                        </ul>
                        <div className='feedback'>
                            <h2 className="contact-heading">Leave us a feedback!</h2>
                            <form className="feedback-form">
                                <input type="text" name="name" placeholder="Your Name" maxLength="50" required />
                                <textarea name="message" placeholder="Your Message" maxLength="300" required></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}