import React from 'react'
import { Link} from 'react-router-dom'
import './Hero.css'
// import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
// import hero_image from '../Assets/model2.png'
import hero_video from '../Assets/herovid.mp4'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Embrace</p>
                    {/* <img src={hand_icon} alt="" /> */}
                </div>
                <p>Our Anime</p>
                <p>World, Dive In!</p>
            </div>
            <Link to="/mens" style={{textDecoration:'none'}}><div className="hero-latest-btn">
                <div>Explore Now</div>
                <img src={arrow_icon} alt="" />
            </div></Link>
        </div>
        <div className="hero-right">
            {/* <img src={hero_image} alt="" /> */}
            <video src={hero_video} autoPlay loop muted></video>
        </div>

    </div>
  )
}

export default Hero