import React from 'react'
import './NewsLetter.css'
import Swal from 'sweetalert2'

const NewsLetter = () => {
  const handleClick = () => {
    Swal.fire({
      title: "Thanks For Suscribing Us.",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "rgb(1, 1, 70) url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    });
  }
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer On Your Email</h1>
        <p>Subscribe To Our NewsLetter And Stay Updated </p>
        <div>
            <input type="email" placeholder='Your Email' />
            <button onClick={handleClick}>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter