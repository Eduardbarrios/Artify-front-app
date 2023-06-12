import React, { useContext } from 'react';
import './productCard.css';
import { ContextApp } from '../../Context';

const ProductCard = ({ name, category, price, image_path, item }) => {
  // Accessing the context using the useContext hook
  const { setProductToshow, isProductDetailOpen, setIsProductsDetail } = useContext(ContextApp);

  // Function to show product details when clicked
  const showProduct = (item) => {
    setProductToshow(item);
    setIsProductsDetail(!isProductDetailOpen);
  };

  return (
    <div onClick={() => showProduct(item)} className='bg-white cursor-pointer w-56 h-60 rounded-lg border border-black/30 shadow-xl'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category}</span>
        <img className='w-full h-full object-cover rounded-lg' src={image_path} alt={name} />
      </figure>
      <p className='flex justify-between px-3'>
        <span className='text-sm font-medium'>{name}</span>
        <span className='text-lg font-bold'>${price}</span>
      </p>
    </div>
  );
};

export default ProductCard;
