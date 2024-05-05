import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/orbito1.svg'
import cart_icon from '../Assets/cart_icon2.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { useRef } from 'react'
import nav_hamburger from '../Assets/hamburger.png'
import Swal from 'sweetalert2';
const Navbar = () => {

    const[menu,setMenu]=useState("shop");
    const {totalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle=(e) =>{
        menuRef.current.classList.toggle('nav-menu-visibe');
        e.target.classList.toggle('open');
    }
    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure you want to logout?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, logout',
            cancelButtonText: 'No, cancel',
            cancelButtonColor: '#d33',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('auth-token');
                Swal.fire('Logged out!', '', 'success').then(() => {
                    window.location.replace('/');
                });
            }
        });
    };

  return (
    <div className='navbar'>
        <div className='nav-logo'>
        <Link style={{textDecoration:'none', color:'white'}} to='/'><img src={logo} alt="" /></Link>
            <Link style={{textDecoration:'none', color:'white'}} to='/'><p>ORBITO</p></Link>
        </div>
        <img className='nav_dropdown' onClick={dropdown_toggle} src={nav_hamburger} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color:'white'}} to='/'>HOME</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none', color:'white'}} to='/mens'>FIGURES</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none', color:'white'}} to='/womens'>MANGA</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none', color:'white'}} to='/kids'>APPAREL</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={handleLogout}>Logout</button>
            :<Link to='/login'><button>Login</button></Link>}
            {/* <Link to='/login'><button>Login</button></Link> */}
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{totalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar;