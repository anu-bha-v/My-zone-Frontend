import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/orbito2.svg'
// import insta_icon from '../Assets/instagram.png'
import pintrest_icon from '../Assets/pinterest.png'
import whatsapp_icon from '../Assets/whatsapp.png'
import facebook_icon from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'
import google_play from '../Assets/google.png'
import app_store from '../Assets/appstore.png'
import visa from '../Assets/visacard.png'
import mastercard from '../Assets/mastercard.png'
import { useLocation ,Link} from 'react-router-dom'


const Footer = () => {
    const location = useLocation();
    const isLoginPage=location.pathname==='/login';
    if (isLoginPage){
        return null;
    };
    const linkStyle = {
        textDecoration: 'none' // Remove underline
      };
  return (
    <div className='footer'>
        <div className="col main">
            <img src={footer_logo} alt="" />

            <h4>contact</h4>
            <p><strong>Address: </strong>302/234 Sector C Oxygen Apartment</p>
            <p><strong>Phone: </strong>(+91)1234 567 890</p>
            <p><strong>Hours: </strong>10:00 - 18:00, Mon - Sat</p>
            <div className="follow">
                <h4>Follow Us</h4>
                <div className="icon">
                    {/* <p href="#"><img src={insta_icon} alt="" /></p> */}
                    <img src={pintrest_icon} alt="" />
                    <img src={whatsapp_icon} alt="" />
                    <img src={facebook_icon} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>
        </div>
        <div className="col">
            <h4>About</h4>
            <Link to='/aboutus' style={linkStyle}><p  href="#">About Us</p></Link>
            <p href="#" >Delivery Information</p>
            <Link to='/privacy'style={linkStyle}><p href="#">Privacy Policy</p></Link>
            <Link to='/terms'style={linkStyle}><p href="#">Terms & Conditions</p></Link>
            <Link to='/contactus'style={linkStyle}><p href="#">Contact Us</p></Link>
        </div>
        <div className="col">
            <h4>My Account</h4>
            <Link to='/login'style={linkStyle}><p href="#">Sign Up</p></Link>
            
            <Link to='/cart'style={linkStyle}><p href="#">View Cart</p></Link>
            <p href="#">My Wishlist</p>
            <p href="#">Track My Order</p>
            <Link to='/help'style={linkStyle}><p href="#">Help</p></Link>
        </div>
        <div className="col install">
            <h4>Install app</h4>
            <p>from App Store or Google Play</p>
            <div className="row">
                <img src={google_play} alt="" />
                <img src={app_store} alt="" />
            </div>
            <div>
                <p>Secured Payment Gateways</p>
                <img src={visa} alt="" />
                <img src={mastercard} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
                <hr />
                <p>Copyright @2023 - All Right Reserved</p>
            </div>
    </div>
  )
}

export default Footer