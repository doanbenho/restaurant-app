import { useEffect, useState, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './content/Homepage.js'
import Menu from './content/Menu.js'
import Contact from './content/Contact'
import Aboutus from './content/Aboutus.js'
import Selling from './content/Selling.js'
import System from './content/System.js'
import Picture from './content/Picture.js'
import News from './content/News.js'
import './App.css'
import './font/all.min.css'
import './font/fontawesome.min.css'

const listOptionPage = [
    {
        namePage: 'TRANG CHỦ',
        accessPage: 'Homepage'
    },
    {
        namePage: 'VỀ CHÚNG TÔI', 
        accessPage: 'Aboutus'
    },
    {
        namePage: 'THỰC ĐƠN',
        accessPage: 'Menu'
    },
    {
        namePage:  'KHUYẾN MÃI',
        accessPage: 'Selling'
    },
    {
        namePage: 'HỆ THỐNG NHÀ HÀNG',
        accessPage: 'System'
    },
    {
        namePage:  'HÌNH ẢNH',
        accessPage: 'Pictures'
    },
    {
        namePage:  'LIÊN HỆ',
        accessPage: 'Contact'
    },
    {
        namePage:  'TIN TỨC',
        accessPage: 'News'
    }
]

function App() {
    
    const buttonAccessRef = useRef()
    const showRef = useRef()
    const [showSearch, setShowSearch] = useState(false)
    const banner = useRef()

    useEffect(() => {
        const nabavSearch = document.querySelector('.header-top-right .form-search .nabav-search' )
        showSearch ? nabavSearch.style.display = 'flex' : nabavSearch.style.display = 'none'
    }, [showSearch])


    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset
        const showTitle = document.querySelector('.container-header')
        if(scrollY > 300) {
            showTitle.classList.add('container-header-fixed')
        } else {
            showTitle.classList.remove('container-header-fixed')
        }
    })
    
    const handleAccessToPage = (access) => {
        hideShowAccess()
        window.location = `/${access}`
    }

    const chosePageCurrent = window.location.pathname.replace('/','')
    useEffect(() => {
        const access = document.querySelectorAll('.header-bottom .header-bottom-button p span')
        if(chosePageCurrent === '') {
            access[0].parentElement.style.color = '#c09440'
            document.title = 'trang chủ'
        } else {
            access.forEach(item => {
                if(chosePageCurrent === item.innerHTML) {
                    document.title = item.parentElement.outerText.toLowerCase()
                    item.parentElement.style.color = '#c09440'
                }
            })
        }
    }, [chosePageCurrent])

    const hideShowAccess = () => {
        buttonAccessRef.current.classList.toggle('hideTitleChangePage')
        buttonAccessRef.current.classList.remove('showTitleChangePage')
        banner.current.style.display = 'none'
    }

    window.onclick = (e) => {
        if(e.target === banner.current) 
            hideShowAccess()
        }

    console.log(document.body.clientWidth)

    return (
        <section>
            <div className="container-header" id="return-header">
                <span className='banner' ref={banner}></span>
                <div className="header">
                    <div className='header-top'>
                        <div className='header-top-left'>
                            <p><span><i className="fas fa-phone"></i></span>+84 392 53 48 42</p>
                            <p><span><i className="fas fa-envelope"></i></span>thaimarketrestaurant@gmail.com2</p>
                        </div>
                        <div className='header-top-right'>
                            <div className="form-search">
                                <i 
                                    className="fas fa-search"
                                    onClick={() => setShowSearch(!showSearch)}
                                ></i>
                                <div className="nabav-search">
                                    <input type="search" name="" id="" placeholder="Tìm kiếm ..."/>
                                    <span><i className="fab fa-searchengin"></i></span>
                                </div>
                            </div>
                            <div className="language">
                                <p className="color-title">VN</p>
                                <p>EN</p>
                            </div>
                        </div>
                    </div>
                    <div className='header-bottom'>
                        <div className='header-bottom-button'   ref={buttonAccessRef}>
                            {
                                listOptionPage.map((item, index) => (
                                    <p
                                    key={index}
                                    onClick={() => handleAccessToPage(item.accessPage)}
                                    >{item.namePage}<span>{item.accessPage}</span></p>
                                ))
                            }
                            <span onClick={hideShowAccess} className='hideAccess'></span>
                        </div>
                    </div>
                </div>
                <span className='open-access' ref={showRef} onClick={() => {
                    buttonAccessRef.current.classList.toggle('showTitleChangePage')
                    buttonAccessRef.current.classList.remove('hideTitleChangePage')
                    banner.current.style.display = 'block'
                }}></span>
            </div>  
            <Routes>
                <Route path='/http%20://doanbenho.github.io/restaurant' element={<Homepage />}/>
                <Route path='/' element={<Homepage />}/>
                <Route path='/Homepage' element={<Homepage />}/>
                <Route path='/Menu' element={<Menu />}/>
                <Route path='/Contact' element={<Contact />}/>
                <Route path='/Aboutus' element={<Aboutus />}/>
                <Route path='/Selling' element={<Selling />}/>
                <Route path='/System' element={<System />}/>
                <Route path='/Pictures' element={<Picture />}/>
                <Route path='/News' element={<News />}/>
            </Routes>
        </section>
  )
}

export default App

// "homepage": "https://github.com/conghieu312004.github.io/react-project",
