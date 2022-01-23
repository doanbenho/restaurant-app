import backgroundPicture from '../img-react/backgroundPicture.jpg'
import congcont from '../img-react/congcont.png'
import photo1 from '../img-react/pexels-photo-1092730.jpeg'
import photo2 from '../img-react/pexels-photo-566566.jpeg'
import photo3 from '../img-react/pexels-photo-730129.jpeg'
import photo4 from '../img-react/pexels-photo-1128678.jpeg'
import photo5 from '../img-react/pexels-photo-1267320.jpeg'
import photo6 from '../img-react/pexels-photo-1640768.jpeg'
import photo7 from '../img-react/pexels-photo-2284166.jpeg'
// import { Link } from 'react-router-dom'
import Footer from './Footer.js'
import Video from './Video.js'
import cong1 from '../img-react/cong1.png'
import ngang from '../img-react/ngang.svg'
import systemimg1 from '../img-react/systemimg1.png'
import systemimg2 from '../img-react/systemimg2.jpg'
import systemimg3 from '../img-react/systemimg3.jpg'
import systemimg4 from '../img-react/systemimg4.jpg'
import systemimg5 from '../img-react/systemimg5.jpg'
import video1 from '../img-react/video-1637108987.mp4'
import video2 from '../img-react/video-1639324823.mp4'
import video3 from '../img-react/video-1639733168.mp4'
import video4 from '../img-react/video-1640741828.mp4'
import video5 from '../img-react/video-163710782888.mp4'
import BackgroundHeader from './BackgroundHeader'
import { useEffect, useState } from 'react'
import GoToTop from './GoToTop.js'
import './Picture.css'

const arrayImgPicture = [
    [
        photo1, photo2, photo4, photo3, photo5, photo6, photo7, photo1
    ],
    [
        photo4, photo6, photo3, photo5, photo4, photo7, photo1, photo2
    ],
    [
        photo6, photo2, photo5, photo7, photo3, photo4, photo1, photo3
    ],
    [
        photo1, photo7, photo2, photo5, photo6, photo1, photo3, photo4
    ],
    [
        photo7, photo6, photo3, photo1, photo1, photo2, photo4, photo5
    ],
    [
        photo5, photo6, photo7, photo1, photo4, photo2, photo3, photo6
    ],
    [
        photo2, photo1, photo3, photo5, photo7, photo4, photo6, photo7
    ],
    [
        photo4, photo7, photo4, photo6, photo1, photo5, photo2, photo3
    ]
]

const arrayAddress = [
    'Thai Market 183 Nguyễn Văn Thoại',
    'Thai Market 04 Trần Quốc Toản',
    'Thai Market 46 Thái Phiên',
    'Thai Market 17 Lê Hồng Phong',
    'Thai Market Hội An',
    'Thai Market Bà Nà Hills',
    'Thai Market 43 Bình Minh 5'
]

const arrayVideo = [
    {
        'image': systemimg1,
        'content': 'NHẬU KIỂU THÁI TẠI SOI79'
    },
    {
        'image': systemimg2,
        'content': ' CƠM CHIÊN TRÁI THƠM, MỘT TRONG NHỮNG MÓN NGON TẠI THAI MARKET RESTAURANT'
    },
    {
        'image': systemimg3,
        'content': 'Cùng nhìn lại những hình ảnh trong ngày khai trương cơ sở mới'
    },
    {
        'image': systemimg4,
        'content': "Thai Market Hoi An - HOIAN's FIRST AUTHENTIC THAI RESTAURANT"
    },
    {
        'image': systemimg5,
        'content': "Thai Market Hoi An - Hoian's first authentic Thai restaurant"
    }
]

const arrayVideoPlay = [
    video1, video2, video3, video4, video5
]
function Picture() {

    const [choseMenu2, setChoseMenu2] = useState('Thai Market 183 Nguyễn Văn Thoại')
    const [boxImg, setBoxImg] = useState(arrayImgPicture[0])
    const [openVideoBox, setOpenVideoBox] = useState(false)
    const [openImageBox, setOpenImageBox] = useState(false)
    const [fixedModal, setFixedModal] = useState(false)
    const [choseVideo, setChoseVideo] = useState()
    const [choseImage, setChoseImage] = useState()

    const handleChangeBoxImg = (target, index) => {
        if(target !== choseMenu2) {
            setChoseMenu2(target)
            setBoxImg(arrayImgPicture[index])
        }
    }
    
    useEffect(() => {
        return () => {
            const Y = window.pageYOffset
            const containerHeader = document.querySelector('.container-header').clientHeight
            if(fixedModal === false) {
                document.body.classList.add('tofixed-body')
                document.body.style.top = -Y - containerHeader + 'px'
                localStorage.setItem('currentY', Y)
            } else {
                document.body.classList.remove('tofixed-body')
                document.documentElement.scroll(0, Number(localStorage.getItem('currentY')))
            }
        }
    }, [fixedModal])

    const hideModalBox = () => {
        setOpenImageBox(false)
        setOpenVideoBox(false)
        setFixedModal(false)
    }

    return (
        <section className='container-picture'>
            <GoToTop />
            <BackgroundHeader backgroundTopImageHeader={backgroundPicture} backgroundTopImageFooter={congcont}/>
            {
                openVideoBox 
                && 
                <div className='modal-box'>
                    <span className='background-modal-box' onClick={hideModalBox}></span>
                    <Video video={choseVideo} />
                </div>
            }
            {
                openImageBox
                && 
                <div className='modal-box'>
                    <span className='background-modal-box' onClick={hideModalBox}></span>
                    <img alt='' src={choseImage}/>
                </div>
            }
            <div className='content-picture'>
                <h1>Hình ảnh</h1>
                <h5>các món ăn làm nên thương hiệu của chúng tôi</h5>
                <div className='chose-type-img'>
                    {
                        arrayAddress.map((item,index) => (
                            <p
                                key={index}
                                // to={item}
                                className='button-change-img'
                                value={item}
                                style={choseMenu2 === item ? {backgroundColor: '#c09440', color: '#fff', borderColor: '#fff'} : {}}
                                onClick={(e) => handleChangeBoxImg(e.target.innerHTML, index)}
                            >{item}</p>
                        ))
                    }
                </div>
                <div className='img-choose'>
                    {      
                        boxImg.map((item, index) => (
                            <div key={index}>
                                <img 
                                    key={index}
                                    src={item}
                                    alt=''
                                ></img>
                                <span><p>Khánh Đoan</p><i className="fas fa-eye"
                                    onClick={() => {
                                        setChoseImage(item)
                                        setOpenImageBox(true)
                                        setFixedModal(true)
                                    }}
                                ></i></span>
                            </div>
                        ))
                    }
                </div>
                <img src={ngang} alt='' className='ngang-img-picture'/>
                <div className='video-picture'>
                    <h1>Video</h1>
                    <div className='contain-video'>
                        {
                            arrayVideo.map((item, index) => (
                                <div key={index}>
                                    <img src={item.image} alt='' />
                                    <i 
                                        className='fab fa-youtube'
                                        onClick={() => {
                                            setChoseVideo(arrayVideoPlay[index])
                                            setOpenVideoBox(true)
                                            setFixedModal(true)
                                        }}
                                    ></i>
                                    <p><span>VIDEO {index+1}:</span> {item.content}</p>
                                </div>
                            ))
                        }
                    </div>
                <img src={cong1} alt='' className='img-footer-picture'/>
                </div>
            </div>
            <Footer />    
        </section>
    )
}

export default Picture