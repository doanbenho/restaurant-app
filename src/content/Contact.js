import NewContent from "./ContentContact.js"
import Footer from "./Footer.js"
import backgroundContact from '../img-react/backgroundContact.jpeg'
import congcont from '../img-react/congcont.png'
import nen from '../img-react/nen.png'
import cong1 from '../img-react/cong1.png'
import BackgroundHeader from "./BackgroundHeader.js"
import GoToTop from "./GoToTop.js"
import './Contact.css'

function Contact() {
    return (
        <section className='contact'>
            <GoToTop />
            <BackgroundHeader backgroundTopImageHeader={backgroundContact} backgroundTopImageFooter={congcont}/>
            <div className="content-contact">
                <NewContent />
            </div>
            <div className='footer-contact'>
                <img src={nen} alt='' className='img-contact-footer'/>
            </div>
            <img src={cong1} alt='' className='img-before-footer'/>
            <Footer />
        </section>
    )
}

export default Contact