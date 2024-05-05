import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div> 
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(142)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                <div className="productdisplay-right-price-new">₹{product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            Anime-themed clothing, manga collections, and detailed action figures dominate the shelves of anime e-commerce sites,
            catering to fans looking to express their passion for their favorite series.Anime aficionados can find everything from 
            casual wear and rare manga editions to collectible action figures, offering a one-stop shop for all their anime-related desires 
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Volume</h1>
                <div className="productdisplay-right-sizes">
                    <div>II</div>
                    <div>III</div>
                    <div>IV</div>
                    <div>V</div>
                    <div>VI</div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span>Apparel, Manga ,Action figures</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Latest,Collectable</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay