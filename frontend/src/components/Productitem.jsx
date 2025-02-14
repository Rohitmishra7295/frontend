import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';


const Productitem = ({id, image,name,price}) => {


    const {currency}= useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer ' to={`/product/${id}`}>
    <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image && image[0] ? image[0] : defaultImage} alt="" />
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
    </div>
    </Link> 
  );
};


export default Productitem
