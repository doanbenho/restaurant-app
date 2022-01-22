import { useEffect, useRef, useState } from 'react'
import './ContentContact.css'

function NewContent() {
    
    const FullnameRef = useRef()
    const Titleref = useRef()
    const Emailref = useRef()
    const Contentref = useRef()
    const [getValue, setGetValue] = useState([])

    const handleSubmit = () => {
        const inputs = document.querySelectorAll('.container-contact .container-menu-input div')

        inputs.forEach(item => {
            const value = item.childNodes[0]
            if(value.value === '') {
                item.childNodes[1].style.color = 'red'
                item.childNodes[1].innerHTML = `! nhập ${item.childNodes[0].placeholder}`.toLowerCase()
                value.style = 'border-color: red'
            } else {
                value.style = 'border-color: rgb(90, 90, 90)'
                item.childNodes[1].style.color = '#fff'
                if(value.placeholder === 'Email') {
                    if(value.value.includes('@gmail.com')) {
                        inputs[2].style = 'border-color: #fff'
                        inputs[2].childNodes[1].style.color = '#fff'
                        setGetValue([
                            `name : ${FullnameRef.current.value}`,
                            `title: ${Titleref.current.value}`,
                            `email: ${Emailref.current.value}`,
                            `content: ${Contentref.current.value}`    
                        ])
                        setTimeout(() => {
                            alert('Bạn đã gửi thông tin liên hệ thành công')
                        }, 1500);
                    } else {
                        if(inputs[2].childNodes[0].value === '') {
                            inputs[2].childNodes[0].style = 'border-color: red'
                            inputs[2].childNodes[1].innerHTML = `! nhập ${inputs[2].childNodes[0].placeholder}`.toLowerCase()
                            inputs[2].childNodes[1].style.color = 'red'
                        } else {
                            inputs[2].childNodes[1].innerHTML = `! cú pháp email example@gmail.com`
                            inputs[2].childNodes[0].style = 'border-color: red'
                            inputs[2].childNodes[1].style.color = 'red'
                        }
                    }
                }
            }
        })
    }

    useEffect(() => {
        localStorage.setItem('infomation', getValue)
        setTimeout(() => {
            FullnameRef.current.value = ''
            Titleref.current.value = ''
            Emailref.current.value = ''
            Contentref.current.value = ''
        }, 1500);
    }, [getValue])

    return (
        <div className='container-contact'>
            <h1>Liên hệ</h1>
            <h3>“NHỮNG MÓN ĂN NGON TUYỆT ĐƯỢC NẤU TỪ RẤT NHIỀU YÊU THƯƠNG VÀ TÂM HUYẾT”</h3>
            <div className='container-menu-contact'>
                <div>
                    <p><span><i className="fas fa-clock"></i></span>  10:00 am To 22:00 pm</p>
                    <p><span><i className="fas fa-envelope"></i></span>  thaimarketrestaurant@gmail.com</p>
                </div>
                <div>
                    <p><span><i className="fas fa-phone"></i></span> +84 934 72 74 72</p>
                    <p><span><i className="fab fa-google"></i></span> www.thaimarket.vn</p>
                </div>
            </div>
            <div className='container-menu-input'>
                <div>
                    <input placeholder='Họ và tên' ref={FullnameRef} />
                    <span>.</span>
                </div>
                <div>
                    <input placeholder='Tiêu đế' ref={Titleref}/>
                    <span>.</span>
                </div>
                <div>
                    <input placeholder='Email' ref={Emailref}/>
                    <span>.</span>
                </div>
                <div>
                    <textarea placeholder='Nội dung' ref={Contentref}></textarea>
                    <span>.</span>
                </div>
            </div>
            <div>
                <button onClick={handleSubmit}>GỬI</button>
            </div>
        </div>
    )
}

export default NewContent