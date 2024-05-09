import React from 'react'
import { Link} from 'react-router-dom'
import './Offers.css'
import exclusive_image from '../Assets/animebanner.jpg'

const Offers = () => {
  
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <Link to="kids" style={{textDecoration:'none'}}><button >Check Now</button></Link>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers