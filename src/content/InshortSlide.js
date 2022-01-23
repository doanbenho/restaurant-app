import avatar from '../img-react/donbenho.jpg'
import avatar2 from '../img-react/bedon.jpg'
import cong1 from '../img-react/cong1.png'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './InshortSlide.css'

const SimpleSlider = props => {

  const settings = {
    // dots: true,
    className: 'section-outstanding__slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    rows: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1
        }
      }
    ]
  }
  return (
    <section className='container-slide'>
      <span></span>
      <div className='content-slide'>
        <Slider {...settings} >
          <div className='item-slide'>
            <h1>vừa ngon vừa rẻ <i className="fas fa-heart"></i><i className="fas fa-heart"></i><i className="fas fa-heart"></i></h1>
            <p>món ăn rất ngon, không gian đẹp, lãng mạn, sáng tạo, đội ngũ nhân viện tận tâm, nhiệt huyết, chúc nhà hàng thành công hơn trong tương lai</p>
            <div>
                <img alt="" src={avatar}/>
                <h3>Khánh Đoan</h3>
                <p>sinh viên</p>
            </div>
          </div>
          <div className='item-slide'>
            <h1>vừa ngon vừa rẻ<i className="fas fa-heart"></i><i className="fas fa-heart"></i><i className="fas fa-heart"></i></h1>
            <p>món ăn rất ngon, không gian đẹp, lãng mạn, sáng tạo, đội ngũ nhân viện tận tâm, nhiệt huyết, chúc nhà hàng thành công hơn trong tương lai</p>
            <div>
                <img alt="" src={avatar2}/>
                <h3>Khánh Đoan</h3>
                <p>sinh viên</p>
            </div>
          </div>
          <div className='item-slide'>
            <h1>vừa ngon vừa rẻ<i className="fas fa-heart"></i><i className="fas fa-heart"></i><i className="fas fa-heart"></i></h1>
            <p>món ăn rất ngon, không gian đẹp, lãng mạn, sáng tạo, đội ngũ nhân viện tận tâm, nhiệt huyết, chúc nhà hàng thành công hơn trong tương lai</p>
            <div>
                <img alt="" src={avatar}/>
                <h3>Khánh Đoan</h3>
                <p>sinh viên</p>
            </div>
          </div>
          <div className='item-slide'>
            <h1>vừa ngon vừa rẻ<i className="fas fa-heart"></i><i className="fas fa-heart"></i><i className="fas fa-heart"></i></h1>
            <p>món ăn rất ngon, không gian đẹp, lãng mạn, sáng tạo, đội ngũ nhân viện tận tâm, nhiệt huyết, chúc nhà hàng thành công hơn trong tương lai</p>
            <div>
                <img alt="" src={avatar2}/>
                <h3>Khánh Đoan</h3>
                <p>sinh viên</p>
            </div>
          </div>
        </Slider>
      </div>
      <img src={cong1} alt='' className='img-footer-slide'/>
    </section>
  )
}

export default SimpleSlider;
