import { useEffect, useState, useRef } from 'react'
import video from '../img-react/video-1639324823.mp4'
import './News.css'

function News() {

    const [openLover, setOpenLover] = useState(false)
    const videoLoverRef = useRef()

    const handleChangeLocation = () => {
        const Xwindow = document.body.clientWidth
        const Y = Math.floor(Math.random() * 600) 
        const X = Math.floor(Math.random() * (Xwindow - 100))
        change(X, Y)
    }

    const change = (X, Y) => {
        const button = document.querySelector('.buttonFalse')
        button.style.position = 'absolute'
        button.style.left = X + 'px'
        button.style.top = Y + 'px'
    }

    const timer = useRef()
    useEffect(() => {
        if(openLover) {
            timer.current = setInterval(() => {
                if(videoLoverRef.current.ended) {
                    setOpenLover(false)
                    document.querySelector('.news h1').innerHTML = 'Chúc mừng em đã có được anhhhh héhé'
                    const section = document.querySelector('.news')
                    section.removeChild(document.querySelector('.news .container-button'))
                }
            }, 500);
        }
        return () => {
            clearInterval(timer.current)
        }
    }, [openLover])

    const handleRemove = (e) => {
        if(e) {
            e.parentNode.removeChild(e)
        }
    }    
 
    return (
    <section className='news'>
        <h1>Đon làm dợ Híu nhéeee </h1>
        <div className='container-button'>
            <div><button className='buttonTrue' onClick={() => {
                setOpenLover(true)
            }}>Dạaaa</button></div>
            <div><button className='buttonFalse' onMouseOver={handleChangeLocation} onClick={(e) => handleRemove(e.target)}>Honggg</button></div>
        </div>
        {
            openLover
            &&
            <section>
                <span onClick={() => setOpenLover(false)}></span>
                <div className='videoLover'>
                    <video src={video} controls ref={videoLoverRef}/>
                </div>
            </section>
        }
   </section>
    )
}

export default News