import { useEffect, useState } from 'react'
import './Booking.css'

const Booking = () => {

    const [openBooking, setOpenBooking] = useState(false)

    useEffect(() => {
        if(openBooking) {
            document.querySelector('.booking').classList.add('header-after-open')
            if(document.body.clientWidth <= 450) {
                document.querySelector('.form-booking').style.width = `${document.body.clientWidth}px`
                document.querySelector('.booking').style = 'z-index: 11'
            }
        } else {
            document.querySelector('.booking').classList.remove('header-after-open')
            document.querySelector('.booking').style = 'z-index: 8'
        }
    }, [openBooking])

    const handleNumberSmall = (target) => {
        if(target.value < 0) {
            target.value = 0
        } else {
            handleDefineBooking(target)
        }
    }

    const handleDefineBooking = target => {
        if(target.value === '') {
            target.parentNode.children[1].style.display = 'flex'
            target.parentNode.style = 'padding-bottom: 5px'
            target.style.borderColor = 'rgb(255, 83, 83)'
        } else {
            target.parentNode.children[1].style.display = 'none'
            target.style.borderColor = '#979797'
            target.parentNode.style.paddingBottom = '20px'
        }
    }
    
    const handleOfferBooking = () => {
        const inputs = document.querySelectorAll('.form-info-booking div input')
        console.log(inputs[0].name)
        
        const decideBooking = []

        const coso = document.querySelector('.form-info-booking div select')
        if(coso.value !== '' ) {
            decideBooking.push(`cơ sỡ: ${coso.value}`)
        } else {
            handleDefineBooking(coso)
        }

        inputs.forEach(item => {
            if(item.value === '') {
                handleDefineBooking(item)
            } else {
                decideBooking.push(`${item.name}: ${item.value}`)
            }
        })

        if(decideBooking.length === 8) {
            localStorage.setItem('Booking', decideBooking)
            setTimeout(() => {
                alert('Bạn đã đặt bàn thành ông. Chờ nhân viên của chúng tôi liên hệ để xác nhận.')
                inputs.forEach(item => {
                    item.value = ''
                })
                setOpenBooking(false)
            }, 1000);
        }
    }

    return (
        <div className='booking'>
            <div className='container-booking'>
                <div className='header-booking' onClick={() => setOpenBooking(!openBooking)}>
                    <i className="fas fa-concierge-bell"></i>
                    <h5>Đặt bàn</h5>
                </div>
                <span></span>   
            </div>
            {
                openBooking
                &&
                <div className='form-booking'>
                    <h3>Đặt bàn tại thaimatket</h3>
                    <div className='form-info-booking'>
                        <i className="fas fa-window-close"
                            onClick={() => setOpenBooking(false)}
                        ></i>
                        <div>
                            <input
                                name='họ và tên'
                                placeholder='họ và tên người đặt' 
                                onBlur={(e) => handleDefineBooking(e.target)}
                            />
                            <span><i className="fas fa-exclamation-triangle"></i><p>nhập họ và tên người đặt</p></span>
                        </div>
                        <div>
                            <input
                                name='số điện thoại'
                                placeholder='số điện thoại' type='tel'
                                onBlur={(e) => handleDefineBooking(e.target)}
                            />
                            <span><i className="fas fa-exclamation-triangle"></i><p>nhập số điện thoại</p></span>
                        </div>
                        <div>
                            <input 
                                name='người lớn'
                                placeholder='người lớn' type='number' 
                                onBlur={(e) => handleNumberSmall(e.target)}
                            />
                            <span><i className="fas fa-exclamation-triangle"></i><p>nhập số người lớn tham gia</p></span>
                        </div>
                        <div>
                            <input 
                                name='trẻ nhỏ'
                                placeholder='trẻ nhỏ' type='number'  min='0'
                                onBlur={(e) => handleNumberSmall(e.target)}
                            />
                            <span><i className="fas fa-exclamation-triangle"></i><p>nhập số trẻ em tham gia</p></span>
                        </div>
                        <div>
                            <select defaultValue=''
                                onBlur={(e) => handleDefineBooking(e.target)}
                            >
                                <option value='' disabled>Chọn cơ sỡ nhà hàng</option>
                                <option value="Cơ sỡ tại Nha Trang">Cơ sỡ tại Nha Trang</option>
                                <option value="Cơ sở tại Đà Nẵng">Cơ sở tại Đà Nẵng</option>
                            </select>
                            <span><i className="fas fa-exclamation-triangle"></i><p>chọn cơ sỡ nhà hàng</p></span>
                        </div>
                        <div>
                            <input 
                                name='số bàn'
                                placeholder='số bàn' type='number'  min='0'
                                onBlur={(e) => handleNumberSmall(e.target)}
                            />
                            <span><i className="fas fa-exclamation-triangle"></i><p>nhập số bàn đặt</p></span>
                        </div>
                        <div>
                            <input 
                                name='thời gian'
                                placeholder='thời gian' type='time'
                                onBlur={(e) => handleDefineBooking(e.target)}
                            />
                            <span><i className="fas fa-exclamation-triangle"></i><p>chọn khung thời gian</p></span>
                        </div>
                        <div>
                            <input 
                                name='ngày tháng'
                                placeholder='ngày tháng' type='date'
                                onBlur={(e) => handleDefineBooking(e.target)}
                            />
                            <span><i className="fas fa-exclamation-triangle"></i><p>chọn khung ngày</p></span>
                        </div>
                        <div>
                            <button
                                onClick={handleOfferBooking}
                            >đặt bàn</button>
                            <h3>your welcome</h3>
                            <p>thaimatket@gmail.com </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Booking

