import Booking from "./Booking"
import './BackgroundHeader.css'

const BackgroundHeader = (props) => {
    return (
        <div>  
            <div className='background'>
                <img src={props.backgroundTopImageHeader} alt="" />
                <Booking />
                <img src={props.backgroundTopImageFooter} alt='' />
            </div>
        </div>
    )
}

export default BackgroundHeader