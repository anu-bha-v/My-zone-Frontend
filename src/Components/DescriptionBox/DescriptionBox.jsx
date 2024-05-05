import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="description-nav-box">Description</div>
            <div className="description-nav-box fade">Reviews(143)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Discover a world of style and comfort with our versatile clothing line.
                Each piece is designed to fit effortlessly into your unique lifestyle, offering both classic elegance and modern flair.
                Tailored from superior materials, our garments promise lasting quality and easy maintenance.
                Perfect for any occasion, they'll keep you looking your best day or night.
                Experience the perfect fusion of durability and design with our wearable collection. </p>
                <p>
                Enhance your everyday look with our collection that celebrates individuality and sophistication.
                Reliable, stylish, and crafted for all-day comfort, our clothing adapts to your busy life while keeping you fashion-forward. 
                </p>
        </div>
    </div>
  )
}

export default DescriptionBox