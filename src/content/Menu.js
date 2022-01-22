import backgroundPicture from '../img-react/backgroundPicture.jpg'
import congcont from '../img-react/congcont.png'
import ContentMenu from './ContentMenu.js'
import Footer from './Footer.js'
import InshortSlide from './InshortSlide.js'
import BackgroundHeader from './BackgroundHeader'
import GoToTop from './GoToTop.js'
import './Menu.css'

function Menu() {
    return (
        <section className='menu'>
            <GoToTop />
            <BackgroundHeader backgroundTopImageHeader={backgroundPicture} backgroundTopImageFooter={congcont}/>
            <ContentMenu />
            <InshortSlide />
            <Footer />
        </section>
    )
}

export default Menu