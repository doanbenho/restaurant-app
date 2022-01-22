import backgroundhethong from '../img-react/backgroundhethong.jpeg'
import nenn from '../img-react/nenn.png'
import Footer from './Footer.js'
import InshortSlide from './InshortSlide.js'
import systemimg1 from '../img-react/systemimg1.png'
import systemimg2 from '../img-react/systemimg2.jpg'
import systemimg3 from '../img-react/systemimg3.jpg'
import systemimg4 from '../img-react/systemimg4.jpg'
import systemimg5 from '../img-react/systemimg5.jpg'
import systemimg6 from '../img-react/stv.png'
import BackgroundHeader from './BackgroundHeader'
import GoToTop from './GoToTop.js'
import './System.css'
import { useState } from 'react'

const listImage = [
    [
        {
            'urlimg': systemimg5,
            'name-coso': 'THAI MARKET 183 NGUYỄN VĂN THOẠI',
            'address': '183 nguyễn Văn Thoại, Đà Nẵng'
        },
        {
            'urlimg': systemimg1,
            'name-coso': 'THAI MARKET 183 NGUYỄN VĂN THOẠI',
            'address': '183 nguyễn Văn Thoại, Đà Nẵng'
        },
        {
            'urlimg': systemimg3,
            'name-coso': 'THAI MARKET 183 NGUYỄN VĂN THOẠI',
            'address': '183 nguyễn Văn Thoại, Đà Nẵng'
        },
        {
            'urlimg': systemimg2,
            'name-coso': 'THAI MARKET 183 NGUYỄN VĂN THOẠI',
            'address': '183 nguyễn Văn Thoại, Đà Nẵng'
        },
        {
            'urlimg': systemimg4,
            'name-coso': 'THAI MARKET 183 NGUYỄN VĂN THOẠI',
            'address': '183 nguyễn Văn Thoại, Đà Nẵng'
        },
        {
            'urlimg': systemimg6,
            'name-coso': 'THAI MARKET 183 NGUYỄN VĂN THOẠI',
            'address': '183 nguyễn Văn Thoại, Đà Nẵng'
        }   
    ],
    [
        {
            'urlimg': systemimg6,
            'name-coso': 'THAI MARKET 183 NGUYỄN VĂN THOẠI',
            'address': '183 nguyễn Văn Thoại, Đà Nẵng'
        }
    ]
]

function System() {

    const [listImg, setListImg] = useState(listImage[0])


    return (
        <section className='container-system'>
            <GoToTop />
            <BackgroundHeader backgroundTopImageHeader={backgroundhethong} backgroundTopImageFooter={nenn}/>
            <div className='title-content-system'>
                <h1>Hệ thống nhà hàng</h1>
                <h5>“THAI MARKET DELICIOUS FOOD COOKED WITH LOTS OF LOVE AND CARE”</h5>
            </div>
            <div className='content-system'>
                <div className="content-system-local">
                    <div className='div-content'>
                        <select defaultValue='0'
                            onChange={(e) => setListImg(listImage[e.target.value])}
                        >
                            <option value='0'>Cơ sỡ thai market đà nẵng</option>
                            <option value='1'>Cơ sỡ thai market hội an</option>
                        </select>
                        <span><i className="fas fa-angle-double-down"></i></span>
                    </div>
                    <p className='text-system'><span>T</span>hai Market - Chuỗi nhà hàng Thái chính thống đầu tiên tại Miền Trung.</p>
                    <p className='text-system'><span>V</span>ới nguồn gia vị nhập khẩu trực tiếp từ Chiang Mai, Thái Lan cùng nguyên liệu tươi mới được chọn lựa kỹ càng mỗi ngày, Thai Market luôn mong muốn mang lại món Thái ngon được nấu từ rất nhiều yêu thương và tâm huyết.</p>
                </div>
                {
                    listImg.map((item, index) => (
                        <div className="img-local" key={index}>
                            <img src={item.urlimg} alt=""/>
                            <div className="local-among">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <b>{item['name-coso']}</b>
                                    <h5>{item.address}</h5>
                                </div>
                                <i className="fas fa-camera"></i>
                            </div>
                        </div>
                    ))
                }
            </div>
            <InshortSlide />
            <Footer />    
        </section>
    )
}

export default System