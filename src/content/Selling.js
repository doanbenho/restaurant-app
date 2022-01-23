import sellingheader from '../img-react/sellingheader.jpeg'
import congcont from '../img-react/congcont.png'
import Footer from './Footer.js'
import InshortSlide from './InshortSlide.js'
import selling1 from '../img-react/selling_1.jpeg'
import selling2 from '../img-react/selling_2.jpeg'
import selling3 from '../img-react/selling_3.jpeg'
import logo1 from '../logo1.svg'
import BackgroundHeader from './BackgroundHeader'
import GoToTop from './GoToTop.js'
import './Selling.css'

function Selling() {

    return (     
        <section className='container-selling'>
            <GoToTop />
            <BackgroundHeader backgroundTopImageHeader={sellingheader} backgroundTopImageFooter={congcont}/>
            <div className='container-content-selling'>
                <div className='content-selling'>
                    <h1>Khuyến mãi</h1>
                    <h4>“THAI MARKET DELICIOUS FOOD COOKED WITH LOTS OF LOVE AND CARE”</h4>
                    <div>
                        <div><img src={selling1} alt=''/><span><img src={logo1} alt=''/><h5>WWW.thaimarket.com</h5></span></div>
                        <div><img src={selling2} alt=''/><span><img src={logo1} alt=''/><h5>WWW.thaimarket.com</h5></span></div>
                        <div><img src={selling3} alt=''/><span><img src={logo1} alt=''/><h5>WWW.thaimarket.com</h5></span></div>
                    </div>
                    <p>Lần đầu tiên đến với vùng đất Đông Bắc Thai Lan - Udon Thani nắng nóng, xa lạ bỡ ngỡ nhưng vô cùng thân thiện, Điều làm lưu luyến và lắng đọng mãi mãi không chỉ đối với riêng tôi mà với tất cả mọi người đó là hương vị ‘bùng nổ’ trong vòm họng. Tôi bắt đầu lao vào các hương vị “bùng nổ” ấy một cách say mê không một chút đắn đo, suy toán.</p>
                </div>
            </div>
            <InshortSlide />
            <Footer />
        </section>
    )
}

export default Selling