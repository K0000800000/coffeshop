import './Menu.css';
import coffee from '../../img/pg/coffee.png';
import tea from '../../img/pg/tea.png';
import soda from '../../img/pg/soda.png';
import fruit from '../../img/pg/fruit.png';
import snacks from '../../img/pg/snacks.png';
import bg from '../../img/pg/bg.png';
import bottle from '../../img/pg/bottle.png';

export const Menu = ({ feedbacks, specialItems, coffeeItems, drinksItems, juicesItems, teaItems, snacksItems, otherProductsItems }) => {
    return (
        <>
            <section className="menu-top">
                <div className="container">
                    <div className="menu-content-section">
                        <h1 className="main-heading">Hreengouse Effect Coffee Shop Menu</h1>
                        <h2>Be Our Guest Experience the Best Coffeeshop Menu</h2>
                        <p>Step into Hreengouse, where comfort meets flavor. We’re all about delivering the best in coffee and treats, crafted to satisfy your cravings and brighten your day. Whether you're here to unwind, catch up with friends, or fuel your day, our cozy spot welcomes you. With a wide selection of premium products, you’ll always find something to love. Come by and enjoy the vibe, the coffee, and the company!</p>
                    </div>
                </div>
            </section>
            <section className='menu-page'>
                <div className='container'>
                    <div className='dishes-section dishes-section1'>
                        <div className='menu-left'>
                            <img src={coffee} className='menuimg' alt="coffee" />
                        </div>
                        <div className='menu-right menu-space'>
                            <h4 className='menu-heading'>Coffee</h4>
                            {coffeeItems.map((item, index) => (
                                <div key={index} className="price_table_inner">
                                    <ul>
                                        <li className="prices">
                                            <div className="price_in_table">
                                                <span className="price">{item.price}</span>
                                            </div>
                                        </li>
                                        <li className="cell table_title">
                                            <span className="title_content">{item.name}</span>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                            <div className="menu-btn btn"><a className="cfs-hyperlink" href="https://maps.app.goo.gl/bhbcukAx2oar6TQa8"><span className="text">Visit Store</span></a> </div>
                        </div>
                    </div>
                    <div className='dishes-section dishes-section-opp dishes-section2'>
                        <div className='menu-left menu-space'>
                            <h4 className="menu-heading">Drinks</h4>
                            {drinksItems.map((item, index) => (
                                <div key={index} className="price_table_inner">
                                    <ul>
                                        <li className="prices">
                                            <div className="price_in_table">
                                                <span className="price">{item.price}</span>
                                            </div>
                                        </li>
                                        <li className="cell table_title">
                                            <span className="title_content">{item.name}</span>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className='menu-right'>
                            <img src={soda} alt="soda" className='menuimg' />
                        </div>
                    </div>
                    <div className='dishes-section dishes-section3'>
                        <div className='menu-left'>
                            <img src={fruit} className='menuimg' alt="fruit" />
                        </div>
                        <div className='menu-right menu-space'>
                            <h4 className='menu-heading'>Fruit Juices</h4>
                            {juicesItems.map((item, index) => (
                                <div key={index} className="price_table_inner">
                                    <ul>
                                        <li className="prices">
                                            <div className="price_in_table">
                                                <span className="price">{item.price}</span>
                                            </div>
                                        </li>
                                        <li className="cell table_title">
                                            <span className="title_content">{item.name}</span>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                            <div className="menu-btn btn"><a className="cfs-hyperlink" href="https://maps.app.goo.gl/bhbcukAx2oar6TQa8"><span className="text">Visit Store</span></a></div>
                        </div>
                    </div>
                    <div className='dishes-section dishes-section-opp dishes-section4'>
                        <div className='menu-left menu-space tea'>
                            <h4 className="menu-heading">Tea</h4>
                            {teaItems.map((item, index) => (
                                <div key={index} className="price_table_inner">
                                    <ul>
                                        <li className="prices">
                                            <div className="price_in_table">
                                                <span className="price">{item.price}</span>
                                            </div>
                                        </li>
                                        <li className="cell table_title">
                                            <span className="title_content">{item.name}</span>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className='menu-right'>
                            <img src={tea} alt="tea" className='menuimg' />
                        </div>
                    </div>
                    <div className='dishes-section dishes-section5'>
                        <div className='menu-left'>
                            <img src={snacks} className='menuimg' alt="snacks" />
                        </div>
                        <div className='menu-right menu-space'>
                            <h4 className='menu-heading'>Snacks</h4>
                            {snacksItems.map((item, index) => (
                                <div key={index} className="price_table_inner">
                                    <ul>
                                        <li className="prices">
                                            <div className="price_in_table">
                                                <span className="price">{item.price}</span>
                                            </div>
                                        </li>
                                        <li className="cell table_title">
                                            <span className="title_content">{item.name}</span>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='dishes-section dishes-section-opp dishes-section6'>
                        <div className='menu-left menu-space'>
                            <h4 className="menu-heading">Other Products</h4>
                            {otherProductsItems.map((item, index) => (
                                <div key={index} className="price_table_inner">
                                    <ul>
                                        <li className="prices">
                                            <div className="price_in_table">
                                                <span className="price">{item.price}</span>
                                            </div>
                                        </li>
                                        <li className="cell table_title">
                                            <span className="title_content">{item.name}</span>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                            <div className="menu-btn btn"><a className="cfs-hyperlink" href="https://maps.app.goo.gl/bhbcukAx2oar6TQa8"><span className="text">Visit Store</span></a> </div>
                        </div>
                        <div className='menu-right'>
                            <img src={bottle} alt="bottle" className='menuimg' />
                        </div>
                    </div>
                    <div className='dishes-section dishes-section7'>
                        <div className='menu-left'>
                            <img src={bg} className='menuimg' alt="bg" />
                        </div>
                        <div className='menu-right menu-space'>
                            <h4 className='menu-heading'>Why Hreengouse Coffeeshop</h4>
                            <p className="menu_cont">Let’s dive into our coffee selection, crafted with the finest beans sourced from around the world. Our espresso boasts a rich, full-bodied blend, making it the ideal way to kickstart your morning. If you’re after something smoother, our mocha with whipped cream offers a mellow, velvety flavor. For those craving a little indulgence, our lattes and cappuccinos, made with creamy steamed milk and espresso, hit the spot every time.</p>
                            <p className="menu_cont">If you’re in the mood for sweetness, our mocha combines chocolate and espresso into a decadent treat. On those hot summer days, our iced beverages provide the perfect mix of refreshment and energy. For a more herbal twist, our fresh mint options are sure to complement any mood. And if you’re feeling peckish, our baked goods—prepared fresh daily—are the perfect pairing with your drink of choice.</p>
                            <p className="menu_cont">Of course, our menu also includes a unique selection of offerings to elevate your experience. Our Hreengouse is fully licensed and features a variety of strains to suit your preferences. Whether you're new to the scene or a seasoned explorer, our knowledgeable team is here to guide you in finding the perfect option for your needs.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}