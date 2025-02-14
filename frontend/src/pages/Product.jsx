import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ShopContext} from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productId}=useParams();
  const {products ,currency ,addToCart} =useContext(ShopContext);
  const [productData ,setProductData] =useState(false);
  const [image,setImage] =useState('') 
  const [size , setSize]=useState('')

  const fetchProductData=async () => {

        products.map((item)=>{
          if(item._id===productId){
            setProductData(item)
            
            setImage(item.image[0])
            
            return null;
          }
        })
  }

  useEffect (()=>{
    fetchProductData();
  },[productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>

      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>

                {
                  productData.image.map((item,index)=>(
                    <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'  alt="" />
                  ))
                }
        </div>
                  <div className='w-full sm:w-[80%]'>
                      <img className='w-full h-auto' src={image} alt="" />
                  </div>
        </div>
           {/* product info */}
           <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
             <img src={assets.star_icon} alt="" className="w-3 5" />
             <img src={assets.star_icon} alt="" className="w-3 5" />
             <img src={assets.star_icon} alt="" className="w-3 5" />
             <img src={assets.star_icon} alt="" className="w-3 5" />
             <img src={assets.star_dull_icon} alt="" className="w-3 5" />
             <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description} </p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
            <div className='flex  gap-2 '>
              {productData.sizes.map((item,index)=>(
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size ?'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
           </div>
           <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
           <hr  className='mt-8 sm:w-4/5'/>

           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1 '>
                <p>100% Original product</p>
                <p>Cash on delivery available on this project</p>
                <p>Easy return and exchange policy within 7 days</p>
           </div>
      </div>
    </div>

    {/* description and review */}
    <div className='mt-20'>
      <div className='flex'>
        <p className='border px-5 py-3 text-sm'>Description</p>
        <p className='border px-5 py-3 text-sm'>Review(122)</p>
      </div>
      <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 '>
                <p> <strong>Rating: ⭐⭐⭐⭐⭐</strong>
                "I absolutely love this product! The material is so soft and breathable, perfect for all-day wear. The fit is exactly as described, and the color hasn't faded after multiple washes. It's stylish and versatile—I've worn it for casual outings and even to the gym. Highly recommend it to anyone looking for quality and comfort at a great price!"</p>
                <p><strong>Rating: ⭐⭐⭐⭐⭐</strong>
                "This product is good overall, but I wish the fabric was a little thicker. The design and print are exactly as shown on the website, and the size chart was accurate, which I appreciate. It's lightweight and comfortable, making it great for summer. A decent purchase for the price!"</p>
      </div>
    </div>

    {/* display related products */}
    <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ): <div className='opacity-0'></div>
}

export default Product
