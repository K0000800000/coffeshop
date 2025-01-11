import { Link } from 'react-router-dom';
import { FBSlider } from '../FBSlider/FBSlider';
import './Sections.css';
import people from '../../img/pg/people.png';
import building from '../../img/pg/building.png';
import rule from '../../img/pg/rule.png';
import feedback from '../../img/pg/feedback.png';

export const Sections = ({ specialItems, feedbacks }) => {
    return (
        <>
            <section className='sec-home-prime'>
                <div className='container'>
                    <div className="custom-sec-title">
                        <h2>Enjoy a cup of coffee and make your day a little brighter!</h2>
                    </div>
                    <div className="custom-sec">
                        <div className="about-left">
                            <p>The Hreengouse has the perfect vibe to enjoy your favorite beverage, crafted just the way you like it, whether you're relaxing in a cozy interior or lounging on the terrace with a scenic view.

                                With its inviting atmosphere and unique charm, the Hreengouse offers an unforgettable experience. Its warm ambiance, combined with expertly prepared drinks, makes it a haven for those seeking a moment of relaxation or connection.

                                Coffee shops like Hreengouse are destinations where memories are made, offering more than just coffee—they provide moments to cherish forever.</p>
                        </div>
                        <div className="about-right">
                            <img src={people} alt="people" />
                        </div>
                    </div>
                    <div className="custom-bot-sec">
                        <p>If you're exploring this vibrant city and searching for the perfect spot to relax and vibe with friends, Hreengouse is your go-to destination. We’re more than just a coffee shop—we’re a fusion of café culture, lifestyle, and a place to unwind.
                            Hreengouse is where quality time meets exceptional experiences. From our flavorful beverages to the inviting ambiance, every visit is designed to create unforgettable moments. Whether you’re savoring a coffee escape or simply soaking in the atmosphere, Hreengouse is the ultimate spot to make your time truly special.</p>
                        <p>Beyond our delicious treats, exceptional coffee, and trendy fashion, there’s even more to discover at Hreengouse. Looking for a unique keepsake to remember your visit? Our merchandise offers plenty of options to choose from.
                            Why not pick up something special, like a vintage wooden pipe, as a timeless memento of your time here? Take home authentic, handcrafted items that carry the essence of your experience and keep those cherished memories alive.</p>
                    </div>
                </div>
            </section>
            <section className="about-sec-home">
                <div className="container">
                    <div className="custom-about-sec">
                        <div className="home-about-left">
                            <img src={building} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="about" />
                        </div>
                        <div className="home-about-right">
                            <h3>ABOUT US</h3>
                            <p>Located in the centre of city as a <Link to="/about">Local Coffeeshop</Link> we have so much to offer to our customers. While you enjoy your time and share the right vibe with your friends you can capture the vivid view of the city from our place.</p>
                            <p>We believe a perfect coffee shop experience is about more than just great coffee—it’s about feeling truly welcome. That’s why at Hreengouse, we focus on creating a warm and inviting atmosphere. We’re here to make every visit special, offering some of the finest beverages and unforgettable moments. So, why not share your evening with us and make it a time to remember?</p>
                            <p>Our cozy and welcoming corner is the perfect spot for those seeking a moment of tranquility. Without breaking any boundaries, we offer a serene space where you can quiet the chaos of the mind, embrace calmness, and step into a world of peace.Our cozy and welcoming corner is the perfect spot for those seeking a moment of tranquility. Without breaking any boundaries, we offer a serene space where you can quiet the chaos of the mind, embrace calmness, and step into a world of peace.</p>
                            <div className="menu-btn">
                                <Link to="/about">Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="menu-sec">
                <div className="container">
                    <h2 className="h2">OUR SPECIAL MENU</h2>
                    <div className="main">
                        <div>
                            <div className="dish-content">
                                <div className="home-menu">
                                    {specialItems.map((item, index) => (
                                        <div key={index} className="menu-list">
                                            <div className="txt-left1"><h6>{item.name}</h6></div>
                                            <div className="price-right">{item.price}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-btn">
                        <Link to="/menu">View More</Link>
                    </div>
                </div>
            </section>
            <section className="rule-sec-home">
                <div className="container">
                    <div className="custom-rule-se-title">
                        <h3>OUR RULES</h3>
                        <div className="desc style1">
                            <p>
                                At Hreengouse, we’re dedicated to providing an exceptional experience for every customer who walks through our doors. While we offer so much for you to enjoy, we also have a set of rules that we kindly ask everyone, including our team and visitors, to respect and follow. This ensures a safe and enjoyable environment for all.. <br /> If not followed by anyone inside the house we have the authority to take strict actions for the same. <br />The rules that need to be followed are listed as follows:
                            </p>
                        </div>
                    </div>
                    <div className="custom-rule-sec">
                        <div className="home-rule-left">
                            <ul className="home-list_rules">
                                <li>Anyone wishing to enter the coffee shop must present a valid ID card proving they are 18 years or older. Without this, entry will not be permitted.</li>
                                <li>Bringing any alcoholic beverages into the venue is strictly prohibited.</li>
                                <li>Possessing drugs or weapons of any kind is strictly prohibited on the coffee shop premises.</li>
                                <li>Customers are solely responsible for their belongings, and we are not liable for any loss, theft, or damage.</li>
                                <li>We reserve the right to deny entry to anyone we deem a potential safety concern for the coffee shop.</li>
                                <li>Bringing outside food or drinks into the coffee shop is not allowed.</li>
                            </ul>
                        </div>
                        <div className="home-rule-rright">
                            <img src={rule} alt='rule' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-sec-home">
                <div className="container">
                    <div className="custom-about-sec">
                        <div className="home-about-left feedback">
                            <img src={feedback} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="about" />	</div>
                        <div className="home-about-right">
                            <h3>Client Testimonial</h3>
                            <FBSlider feedbacks={feedbacks} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}