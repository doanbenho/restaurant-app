import teamwork from '../img-react/teamwork.jpeg'
import congcont from '../img-react/congcont.png'
import stv from '../img-react/stv.png'
import cong1 from '../img-react/cong1.png'
import Footer from './Footer.js'
// import Booking from './Booking'
import BackgroundHeader from './BackgroundHeader'
import GoToTop from './GoToTop.js'
import './Aboutus.css'

function Aboutus() {


    return (
        <section className='aboutus'>
            <GoToTop />
            <BackgroundHeader backgroundTopImageHeader={teamwork} backgroundTopImageFooter={congcont}/>
            <div className='container-content-aboutus'>
                <div className='title-content-aboutus'>
                    <h1>Về chúng tôi</h1>
                    <h3>CUỘC HÀNH TRÌNH CỦA THAI MARKET</h3>
                </div>
                <div className='content-content-aboutus'>
                    <p><span>C</span>hoáng ngợp với nền ẩm thực đa dạng, đầy tinh tuý của mảnh đất nụ cười ‘Land of Smile’ - Cuộc hành trình đầy gian nan và trắc trở để đưa tên tuổi Thai Market gần với người Việt hơn bao giờ hết.</p>
                    <p><span>L</span>ần đầu tiên đến với vùng đất Đông Bắc Thái Lan - Udon Thani nắng nóng, xa lạ bỡ ngỡ nhưng vô cùng thân thiện. Điều làm lưu luyến và lắng đọng mãi mãi không chỉ đối với riêng tôi mà với tất cả mọi người đó là hương vị ‘bùng nổ’ trong vòm họng. Tôi bắt đầu lao vào các hương vị “bùng nổ” ấy một cách say mê không một chút đắn đo, suy toán.</p>
                    <p><span>T</span>ôi mau chong đắm mình vào mê cung vị giác hằng ngày của vị chua - cay còn có mặn đắng - nồng ấm - ngọt bùi của tất cả các “gia vị cuộc đời” mang lại, được đúc kết trong hàng ngàn món ăn đường phố Bangkok - chợ đêm - trên mọi nẻo đường tôi dã đi qua, cho dù đó là ChiangMai - Phuket hay Pattaya …</p>
                    <p><span>T</span>hời gian này hầu như toàn bộ tâm trí và bao tử của tôi tập trung cho 1 việc duy nhất: Ăn - Ăn và Ăn, mỗi ngày 6 bữa - mỗi bữa 8 món. Cuộc hàng trình kỳ lạ đó đã đưa tôi đến những vùng đất khác nhau, gặp những con người khác nhau và ăn những món ăn ngon không thể nào quên. Và tôi dường như chưa được nghỉ ngơi lấy một ngày…</p>
                </div>
                <div className='comeback-content-aboutus'>
                    <h3>SỰ TRỞ VỀ</h3>
                    <div className='content-comeback'>
                        <img src={stv} alt=''/>
                        <div>
                            <p><span>T</span>hai Market đã ra đời sau chuỗi ngày gian nan vất vả đó. Những món ăn tinh tuy nhất của người Thái đã có thể tìm thấy ngay trong thực đơn của người Thái đã có thể tìm thấy ngay trong thực đơn của Nhà hàng chúng tôi.</p>
                            <p><span>N</span>hững thực khách đầu tiên biết đến Thai Market tại 04 Trần Quốc Toản (Đà Nẵng) cùng tên gọi “HQ THAI FOOD” với không gian ấm cúng và dịch vụ thân tình. Sau 3 năm phát triển với tên gọi cũ - “Thai Market” là cái tên được lựa chọn hướng đến con đường phát triển xa hơn và đã nhanh chóng mở rộng để trở thành chuỗi nhà hàng Thái chuyên nghiệp hiếm hoi ở Miền Trung Việt Nam với 5 nhà hàng trải khắp Đà Nẵng và Hội An. Tôi cùng tập thể Thai Market đang từng bữa chuyên nghiệp hoá trong phục vụ và không ngừng sáng tạo các món ăn trong thực đơn.</p>
                            <p><span>K</span>om Yum Kung ( Canh tôm chua cay); Som Tam (Gỏi đu đủ); Pad Thai (Phở xào kiểu Thái)… những món ăn không thể thiếu trong Menu của tất cả các nhà hàng Thái trên thế giời đã nhanh chóng trở thành Signature (Món ruột) của Thai Market. Ngoài ra, chúng tôi còn phát triển thêm các món ăn mang phong cách Fusion - như một sự kết hợp mang phong cách riêng của đầu bếp Thai Market gửi đến thực khách.</p>
                        </div>
                    </div>
                </div>
                <div className='content-criteria'>
                    <h3>TÔN CHỈ</h3>
                    <p><span>N</span>hững món ăn bạn sắp được thưởng thức trong thực đơn này không phải là thành quả ngắn ngày, mà là công sức nghiên cứu cùng cố gắng của Tôi và Tập thể Thai Market. Chúng tôi đã chuẩn bị và nấu nướng những món ăn bằng rất nhiều tâm huyết cùng sự yêu thương như đúng những gì câu slogan bạn nhìn thấy khi bước vào quán</p>
                </div>
                <div className='content-footer'>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-google-plus-g"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-instagram-square"></i>
                </div>
            </div>
            <div className='aboutusFooter'>
                <div className='inshortAboutus'>
                    <div className='content-footer-aboutus'>
                        <h1>Delicous food cooked with lots of love and care</h1>
                        <p>(Những món ăn ngon tuyệt được nấu từ rất nhiều yêu thương và tâm huyết)</p>
                        <p>Hân hạnh chào đón bạn bạn đã đến với Thai Market hôm nay và tham gia vào cuộc hành trình ẩm thực đầy lý thú của chúng tôi.</p>
                    </div>
                    <img src={cong1} alt='' />
                    <span className='opacity-footer-aboutus'></span>
                </div>
                <Footer />
            </div>
        </section>
    )
}

export default Aboutus