import React, { useContext } from 'react';
import { ContextApp } from '../../Context';
import ProductCard from '../../Components/ProductCard';
import Layout from '../../Components/Layout';


const Home = () => {
 const {products}= useContext(ContextApp)
 const limitedProducts = products?.slice(0, 9);
 return (
  <Layout>
   <div className='grid gap-4 grid-cols-3 w-full max-w-screen-lg pl-16 '>
   {limitedProducts?.map(item => <ProductCard item= {item} key = {item.id} title={item.title} 
   category={item.category} 
   price={item.price} 
   description={item.description} 
   image={item.images[0]} 
   />)}
  </div>
  </Layout>
 );
};

export default Home;