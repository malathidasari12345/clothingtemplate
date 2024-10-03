import React from 'react';
import "../assets/styles/ProductList.css"

const TopCategories = () => {
  return (
    <>
        <center> <h1>Mens Collection</h1> </center>
      <div className="top-categories">
      <div className='images'>
        <div className='image-item'>
          <img src="https://ramrajcotton.in/cdn/shop/files/ROUND_IMAGE-3_0c5b0fe9-a6ff-4aa5-a346-f10735e622d0.jpg?v=1631349664&width=480" alt="EyeWears" />
          <p className="image-label">READYMADE POCKET DHOTIS</p>
        </div>
        <div className='image-item'>
          <img src="https://ramrajcotton.in/cdn/shop/files/ROUND_IMAGE-6.jpg?v=1631252627&width=480"alt="Shirts" />
          <p className="image-label">SILK PANCHAKACHAMS</p>
        </div>
        <div className='image-item'>
          <img src="https://ramrajcotton.in/cdn/shop/files/ROUND_IMAGE-1.jpg?v=1631252650&width=480" alt="Pants" />
          <p className="image-label">MEN DHOTOS</p>
        </div>
        <div className='image-item'>
          <img src="https://ramrajcotton.in/cdn/shop/files/ROUND_IMAGE-9.jpg?v=1631252627&width=480" alt="Shoes" />
          <p className="image-label">WHITE SHIRTS</p>
        </div>
        <div className='image-item'>
          <img src="https://ramrajcotton.in/cdn/shop/files/ROUND_IMAGE-11.jpg?v=1631252627&width=480" alt="Caps" />
          <p className="image-label">SILK COLLECTION</p>
        </div>
        <div className='image-item'>
          <img src="https://ramrajcotton.in/cdn/shop/files/ROUND_IMAGE-4.jpg?v=1631252627&width=480" alt="Mobile" />
          <p className="image-label">MENS DHOTI & SHIRT SET</p>
        </div> 
        <div className='image-item'>
          <img src="https://ramrajcotton.in/cdn/shop/files/ROUND_IMAGE-2.jpg?v=1631252627&width=480" alt="Mobile" />
          <p className="image-label">Mens Banian</p>
        </div> 
        <div className='image-item'>
          <img src="https://ramrajcotton.in/cdn/shop/files/ROUND_IMAGE-12.jpg?v=1631349546&width=480" alt="Mobile" />
          <p className="image-label">Unstiched Fabric</p>
        </div> 

      </div>
      </div>
     

    
      
    </>
  );
};

export default TopCategories;