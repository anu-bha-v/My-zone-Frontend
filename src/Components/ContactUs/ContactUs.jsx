import React from 'react'
import './ContactUs.css'
import Swal from 'sweetalert2'
import contactus from '../Assets/footbaner.jpg'
import banner from '../Assets/contact.jpg'
import video from '../Assets/contactvid.mp4'


const ContactUs = () => {

    const handleClick = () => {
        Swal.fire({
          title: "Working on your issue.!",
          width: 600,
          padding: "3em",
          color: "black",
          background: "#bebebe url(/images/trees.png)",
          backdrop: `
            #white
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        
        });
      }
    return (
        <div className='contact'>
            <div className="contactus">
                <div className="contactus-left">
                    <h2>#Contact</h2>
                </div>
                <div className="contactus-right">
                    {<img src={contactus} alt="" />}
                </div>
            </div>
            <div className="content1">
                <h3>How We Work</h3>
                <h2>Crafting connections through quality products and service</h2>
                <p>At Orbito, we're dedicated to revolutionizing your anime shopping experience, 
                    offering an immersive journey that knows no boundaries. Join us as we delve into 
                    the boundless realms of the anime universe, no matter where you reside</p>

                    <img src={banner} alt="" />
            </div>
            <div className="form">
            {/* <img src={banner} alt="" /> */}
            <p>Full Name</p>
                <input name='fullname'  type="text" placeholder='Full Name' />
                <p>Mobile Number</p>
                <input name='mobilenumber'  type="number" placeholder='Mobile Number'/>
                <p>E-mail</p>
                <input name='email'  type="e-mail" placeholder='E-mail' />
                <p>Subject</p>
                <input name='subject'  type="text" placeholder='subject' />
                <div className='description'>
                <p>Description</p>
                <textarea name="description" id="" style={{outline:'none'}}></textarea>
                </div>
                <div className="button">
                <button onClick={handleClick}>Submit</button>
                </div>
            </div>
            <div className="content2">
                <h3>OUR MISSION</h3>
                <h2>Enhancing the shopping experience for everyone across the globe</h2>
                <p>At Orbito, we're committed to transforming the way you shop for anime products, 
                    providing an immersive experience that transcends borders. Join us in exploring the endless
                    possibilities of the anime universe, wherever you are in the world</p>

                <video src={video} autoPlay loop muted></video>
            </div>
        </div>
        
      )
    }

export default ContactUs