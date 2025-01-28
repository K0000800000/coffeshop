import './Footer.css';
import wa from '../../img/icon/whatsapp.svg';
import tg from '../../img/icon/telegram.svg';
import location from '../../img/icon/location-icon.png';
import phone from '../../img/icon/phone.png';
import timing from '../../img/icon/timing.png';

export const Footer = () => {
    return (
        <footer className="header-footer-group">
            <div className="section-inner">
                <div className="custom-footer">
                    <ul>
                        <li className="widget widget_text">
                            <div className="textwidget">
                                <div className="foo-img">
                                    <img src={location} alt="location" width="27" height="27" />
                                </div>
                                <p><a href="https://maps.app.goo.gl/bhbcukAx2oar6TQa8">Peter I Island</a></p>
                            </div>
                        </li>
                        <li className="widget widget_text">
                            <div className="textwidget">
                                <div className="foo-img">
                                    <img src={phone} alt="phone" width="16" height="27" />
                                </div>
                                <p><b>Contact</b><br />
                                    <a href="tel:00000000000">+00000000000</a></p>
                                <div className='sm-link'>
                                    <a href='#'>
                                        <img src={wa} width={62} height={56} alt="wa" />
                                    </a>
                                    <a href='#'>
                                        <img src={tg} width={62} height={56} alt="wa" />
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="widget widget_text">
                            <div className="textwidget">
                                <div className="foo-img">
                                    <img src={timing} alt="timing" width="27" height="27" />
                                </div>
                                <p><b>Opening Hours</b></p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Monday</td>
                                            <td>7 AM – 7 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Tuesday</td>
                                            <td>7 AM – 7 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Wednesday</td>
                                            <td>7 AM – 7 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Thursday</td>
                                            <td>7 AM – 7 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Friday</td>
                                            <td>7 AM – 7 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Saturday</td>
                                            <td>7 AM – 7 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday</td>
                                            <td>7 AM – 7 PM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="copyright-section">
                <p> © 2025 Coffeshop. NOT FOR COMMERCIAL PURPOSES by K067</p>
            </div>
        </footer>
    )
}