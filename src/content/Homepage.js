import picture1 from '../img-react/anh-nha-hang-1.jpeg'
import picture2 from '../img-react/anh-nha-hang-2.jpeg'
import picture3 from '../img-react/anh-nha-hang-3.jpeg'
import pictureDecrease from '../img-react/decrease-market.jpg'
import photo1 from '../img-react/pexels-photo-1092730.jpeg'
import photo2 from '../img-react/pexels-photo-566566.jpeg'
import photo3 from '../img-react/pexels-photo-730129.jpeg'
import photo4 from '../img-react/pexels-photo-1128678.jpeg'
import photo5 from '../img-react/pexels-photo-1267320.jpeg'
import photo6 from '../img-react/pexels-photo-1640768.jpeg'
import photo7 from '../img-react/pexels-photo-2284166.jpeg'
import tren from '../img-react/tren.png'
import duoi from '../img-react/duoi.png'
import congcont from '../img-react/congcont.png'
import cong1 from '../img-react/cong1.png'
import background from '../img-react/trang-chu-body-img.jpeg'
import ContentContact from './ContentContact.js'
import ContentMenu from './ContentMenu.js'
import Footer from './Footer.js'
import { useState } from 'react'
import BackgroundHeader from './BackgroundHeader'
import GoToTop from './GoToTop.js'
// import { Link } from 'react-router-dom'
import '../font/all.min.css'
import '../font/fontawesome.min.css'
import './Homepage.css'

const imgLocalHomepage = [
    [picture1, picture2, picture3],
    [picture2,picture3, picture1]
]

function Homepage() {

    const [showImgLocal, setShowImgLocal] = useState(imgLocalHomepage[0])

    const handleAccessAboutus = () => {
        window.location = '/Aboutus'
        document.title = 'VỀ CHÚNG TÔI'
    }

    const handleAccessPicture = () => {
        window.location = '/Pictures'
        document.title = "HINH ANH"
    }

    return (
        <div>
            <GoToTop />
            <BackgroundHeader backgroundTopImageHeader={background} backgroundTopImageFooter={congcont}/>
            <div className="trang-chu-info">
                <h1>Về chúng tôi</h1>
                <h3>Cuộc hành trình của thai market</h3>
                <li
                    onClick={handleAccessAboutus}
                    className='buttonAccessAboutus'
                >xem thêm</li>
            </div>
            <section className="trang-chu-local">
                <div className='content-trang-chu-local'>
                    <div className="local-left">
                        <h1>Hệ thống nhà hàng</h1>
                        <p>"Thái market delicious food Cooked With lots Of Love and Care "</p>
                    </div>
                    <div className="local-right">
                        <div>
                            <select defaultValue='0' className='form-local'
                                onChange={(e) => setShowImgLocal(imgLocalHomepage[e.target.value])}
                            >
                                <option value='0'>cơ sở thai market đà nẵng</option>
                                <option value='1'>cơ sở thai market nha trang</option>
                            </select>
                            <span><i className="fas fa-angle-double-down"></i></span>
                        </div>  
                    </div>
                </div>
            </section>
                <section className="trang-chu-img-local">
                    {
                        showImgLocal.map((item, index) => (
                            <div className="img-local" key={index}>
                                <img src={item} alt=""/>
                                <div className="local-among">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div>
                                        <b>THAI MARKET 183 NGUYỄN VĂN THOẠI</b>
                                        <h5>183 nguyễn Văn Thoại, Đà Nẵng</h5>
                                    </div>
                                    <i className="fas fa-camera"></i>
                                </div>
                            </div>
                        ))
                    }
                </section>
            <img src={pictureDecrease} alt='' className="img-decrease" />
            <ContentMenu />
            <section className='trang-chu-img'>
                {/* <div className='trang-chu-img-first'> */}
                    <div className='img'><img src={photo1} alt=''/><span><i className="fab fa-youtube"></i></span></div>
                    <div className='img'><img src={photo2} alt=''/><span><i className="fab fa-youtube"></i></span></div>
                    <div className='img'><img src={photo3} alt=''/><span><i className="fab fa-youtube"></i></span></div>
                    <div className='img'><img src={photo4} alt=''/><span><i className="fab fa-youtube"></i></span></div>
                    <div className='img'><img src={photo5} alt=''/><span><i className="fab fa-youtube"></i></span></div>
                    <div className='img'><img src={photo6} alt=''/><span><i className="fab fa-youtube"></i></span></div>
                    <div className='img'><img src={photo7} alt=''/><span><i className="fab fa-youtube"></i></span></div>
                    <div className='img'>
                        <div onClick={handleAccessPicture}>
                            <p>xem thêm</p>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                {/* </div> */}
            </section>
            <section className='contact-homepage'>
                <ContentContact />
                <img src={tren} alt=''/>
                <img src={duoi} alt=''/>
            </section>
            <div className='contain-homepage-footer'>
                <img src={cong1} alt='' className='homepage-footer'/>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage
// yeb eafb fph