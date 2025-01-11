import './Title.css';
import wa from '../../img/icon/whatsapp.svg';
import tg from '../../img/icon/telegram.svg';

export const Title = () => {
    return (
        <div className='section1'>
            <div className='container'>
                <div className='banner'>
                    <h1 className='main-title'>Coffeeshop Hreengouse</h1>
                    <p>The Coffee Shop Hreengouse offers a relaxed vibe, perfect for anyone looking to unwind and enjoy some peaceful moments.</p>
                    <div className="main-bottom">
                        <div className='callbtn'>
                            <a className='cfs' href="https://maps.app.goo.gl/bhbcukAx2oar6TQa8">
                                <span className='text'>get location</span>
                            </a>
                        </div>
                    </div>
                    <div className='sm-link'>
                        <a href='#'>
                            <img src={wa} width={62} height={56} alt="wa" />
                        </a>
                        <a href='#'>
                            <img src={tg} width={62} height={56} alt="wa" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
