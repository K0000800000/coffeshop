import './About.css';
import line from '../../img/pg/line.webp';
import line2 from '../../img/pg/line2.webp';

export const About = () => {
    return (
        <>
            <section className="about-top">
                <div className="container">
                    <div className="about-content-section">
                        <h1 className="main-heading">CoffeshopLocal Coffeeshop</h1>
                    </div>
                </div>
            </section>
            <section className="info-page">
                <div className="container">
                    <div className="info-section">
                        <div className="info-right">
                            <p>TheCoffeshop Coffee Shop offers a relaxing atmosphere for anyone seeking quality downtime. With a diverse range of high-quality products and an excellent selection of drinks to complement your experience, it strives to provide visitors with the very best in comfort and enjoyment.</p>
                            <p>Surrounded by the charm of a vibrant and welcoming setting, this coffee shop stands out as one of the coolest local spots. It offers a warm and inviting atmosphere for every guest who walks through the door, ensuring they can relax and enjoy their time. Rather than focusing solely on profit, the primary goal is to create meaningful experiences and provide quality moments tailored to the preferences of each customer.</p>
                            <p>Situated in a vibrant location, this coffee shop provides the perfect setting to enjoy your time to the fullest while soaking in the charm of the surroundings. With a wide array of offerings, it creates a memorable experience for visitors seeking a cozy and welcoming spot. If you’re searching for the best local coffee shops nearby, this is the place to discover a lot more than you could imagine!</p>
                        </div>
                        <div className="info-left">
                            <img src={line} alt='info' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="info-page">
                <div className="container">
                    <div className="info-section is2">
                        <div className="info-right story-row-right">
                            <img src={line2} alt='info' />
                        </div>
                        <div className="info-left story-row-left">
                            <div className="story-container">
                                <div className="story-singular">
                                    <h2 className="main-heading">The Coffee Shop: A Cozy Escape for Coffee Lovers</h2>
                                    <p>Nestled in a quiet corner of a bustling town, the Coffee Shop is a hidden gem cherished by locals and visitors alike. Its name, inspired by the owner's childhood fascination with nature and sustainability, is a subtle nod to the lush greenery adorning its walls and the cozy, plant-filled ambiance inside.
                                        The story of Coffeshop began with a dream to create a space where people could unwind, connect, and enjoy the finest coffee and homemade treats. The shop’s signature drink, a velvety caramel latte, pairs perfectly with their famed chocolate cake, a recipe passed down through generations. Patrons often marvel at the cake's rich flavor and rustic presentation, claiming it tastes just like it came out of a family kitchen.
                                        Coffeshop isn't just about coffee and desserts; it’s an experience. The warm, inviting staff ensures every visitor feels at home, while soft jazz tunes fill the air. The outdoor seating area, shaded by vines and twinkling lights, is a favorite spot for quiet reflection or lively conversation.
                                        Despite its humble beginnings, Coffeshop has grown into a beloved haven where memories are made over steaming cups and sweet bites. It’s a place where time seems to slow, if only for a moment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}