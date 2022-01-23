// import { useImperativeHandle, forwardRef } from 'react'
import video from '../img-react/video-1639324823.mp4'
import './Video.css'

const Video = (props) => {

    return (
        <video src={props.video}  controls/>
    )
}     

export default Video