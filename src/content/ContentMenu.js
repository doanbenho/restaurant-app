import { useState } from 'react'
import imageMenu from '../img-react/menu.png'
// import { Link } from 'react-router-dom'
import './ContentMenu.css'

const arrayAddress = [
    'Thai Market 183 Nguyễn Văn Thoại',
    'Thai Market 04 Trần Quốc Toản',
    'Thai Market 46 Thái Phiên',
    'Thai Market 17 Lê Hồng Phong',
    'Thai Market Hội An',
    'Thai Market Bà Nà Hills',
    'Thai Market 43 Bình Minh 5'
]

function ContentMenu() {

    const [choseMenu, setChoseMenu] = useState('Thai Market 183 Nguyễn Văn Thoại')
    // const [showMenu, setShowMenu] = useState(false)

    const handeleChangeColorMenu = (target) => {
        setChoseMenu(target)
    }

    return (
        <section className="trang-chu-menu">
            <div className="menu-top">
                <h1>Thực Đơn</h1>
                <h3>CÁC MÓN ĂN LÀM NÊN THƯƠNG HIỆU CỦA CHÚNG TÔI</h3>
            </div>
            <div className='chose-type-img'>
                    {
                        arrayAddress.map((item,index) => (
                            <p
                                style={choseMenu === item ? {backgroundColor: '#c09440', color: '#fff', borderColor: '#fff'} : {}}
                                key={index}
                                // to={item}
                                value={item}
                                className='button-change-img'
                                onClick={(e) => handeleChangeColorMenu(e.target.innerHTML)}
                            >{item}</p>
                        ))
                    }
                </div>
            <div className="menu-bottom">
                <div className='menu-bottom-first'>
                    <select>
                        <option value='0'>Món thực đơn món ăn 1</option>
                        <option value='1'>Món thực đơn món ăn 2</option>
                        <option value='2'>Món thực đơn món ăn 3</option>
                        <option value='3'>Món thực đơn món ăn 4</option>
                        <option value='4'>Món thực đơn món ăn 5</option>
                        <option value='5'>Món thực đơn món ăn 6</option>
                    </select>
                    <span><i className="fas fa-angle-double-down"></i></span>
                </div>
                <div className='menu-bottom-second'>
                    <img src={imageMenu} alt='' />
                </div>
            </div>
        </section>
    )
}

export default ContentMenu