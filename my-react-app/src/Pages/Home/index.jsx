import React, { useContext } from 'react';
import { ContextApp } from '../../Context';
import ProductCard from '../../Components/ProductCard';
import Layout from '../../Components/Layout';

const Home = () => {
  // Accessing the context using the useContext hook
  const { filteredProducts, products } = useContext(ContextApp);

  // Function to determine which products to render based on filtering
  const productsToRender = () => {
    if (filteredProducts) {
      return filteredProducts;
    } else {
      return products;
    }
  };

  return (
    <Layout>
      <div className='grid gap-4 grid-cols-3 w-full max-w-screen-lg pl-16'>
        {productsToRender()?.map(item => (
          <ProductCard
            item={item}
            key={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            description={item.description}
            image_path={item.image_path}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
``
