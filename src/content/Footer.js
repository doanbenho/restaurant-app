import './Footer.css'

function Footer() {
    return(  
        <div className='container-footer'>
            <div className='footer'>
                <div className='footer-first'>
                    <h2>Liên hệ với chúng tôi</h2>
                    <p>Bạn muốn tham gia cùng chúng tôi trên mạng xã hội</p>
                    <div>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-google-plus-g"></i>
                        <i className="fab fa-pinterest-p"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-instagram-square"></i>
                    </div>
                    <p>Copyright© 2019 Thai Market. All rights reserved.</p>
                </div>
                <div className='footer-bottom'>
                    <h2>Nhận đăng ký bản tin</h2>
                    <p>Nhận đăng ký bản tin từ chúng tôi</p>
                    <div className='div'>
                        <div>
                            <input placeholder='Email...'/>
                                <span>
                                    <i className="fas fa-arrow-right"></i>
                                </span>
                        </div>
                    </div>
                    <p>Designed and Maintained by Chat với Thai</p>
                </div>
            </div>
        </div>
    )
}


export default Footer