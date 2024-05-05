import React from 'react'
import './CSS/Checkout.css'
import remove_icon from '../Components/Assets/cart_cross_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {Link} from 'react-router-dom'
// import {FaCheckCircle} from 'react-remove_icon/fa';
import { useState } from 'react'
// import { Button } from 'bootstrap'
import Swal from 'sweetalert2'

    



const Checkout = () => {
    const{getTotalCartAmount,all_product,cartItems,removeFromCart,removeAllFromCart} = useContext(ShopContext)

    const [orderPlaced] = useState(false);   //, setOrderPlaced
    const handleClick = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Order is Placed",
            showConfirmButton: false,
            timer: 5500
          }).then(() => {
            // Empty the cart
            removeAllFromCart();
          });
        // setOrderPlaced(true);
        // alert('Successfully placed your order!');
      };
    
      
        <div>
          <h1>Order Form</h1>
          <button onClick={handleClick}>Cash On Delivery</button>
          {orderPlaced && (
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              {/* <FaCheckCircle style={{ color: 'green', marginRight: '5px' }} /> */}
              {/* <p>Successfully placed your order!</p> */}
            </div>
          )}
        </div>
      


  return (
    <div className='checkout'>
        <div className="container-left">
            <div className="detail-feild">
            <h1>Address Details</h1>
            {/* <h2>Billing  Address</h2>  */}
                <p>Full Name</p>
                <input name='fullname'  type="text" placeholder='Full Name' />
                <p>Mobile Number</p>
                <input name='mobilenumber'  type="number" placeholder='Mobile Number'/>
                <p>House No.</p>
                <input name='house'  type="text" placeholder='House No.' />
                <p>Area</p>
                <input name='area'  type="text" placeholder='Area' />
                <p>Landmark</p>
                <input name='landmark'  type="text" placeholder='Landmark' />
                <p>Pin Code</p>
                <input name='pincode'  type="number" placeholder='Pin Code' />
                <p>City</p>
                <input name='city'  type="text" placeholder='City' />
                <p>State</p>
                <select name="state" id="">
                <option value="">Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                </select>
                <div className="button">
                {/* <button>pay now</button> */}
                </div>
            </div>
            </div>
            <div className='paynow'>
                {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                return <div key={e.id}>
                            <div className="paynow-format paynow-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>₹{e.new_price}</p>
                                <button className='paynow-quantity'>{cartItems[e.id]}</button>
                                <p>₹{e.new_price*cartItems[e.id]}</p>
                                <img className='paynow-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr />
                        </div>
                }
                return null;
            })}
            <div className="paynow-down">
                <div className="payno-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="paynow-total-item">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="paynow-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="paynow-total-item">
                            <h3>Total</h3>
                            <h3>₹{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <Link to='/'><button  onClick={handleClick}>Cash On Delivery</button></Link>    
                </div>
            </div>
        </div>
    </div>
// </div>
           
               
  )
}

export default Checkout