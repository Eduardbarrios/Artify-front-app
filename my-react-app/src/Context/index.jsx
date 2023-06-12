import { createContext, useState, useEffect } from 'react'
import { GetProducts } from '../utils/getProducts'

// Creating a new context
export const ContextApp = createContext()

// Creating a provider component for the context
export const ContextAppProvider = ({ children }) => {
 
  // State variables for products and filtered products
  const [products, setProducts] = useState()
  const [filteredProducts, setFilteredProducts] = useState()

  // Function to get products using the GetProducts utility
  const getProducts = async () => {
    const newProducts = await GetProducts()
    setProducts(newProducts)
  }

  // Fetching products when the component mounts
  useEffect(() => {
    getProducts()
  }, [])

  // State variables for product to show and product detail status
  const [productToShow, setProductToshow] = useState()
  const [isProductDetailOpen, setIsProductsDetail] = useState()

  // Function to handle search
  const onSearch = (e) => {
    if (e.target.value) {
      // Filtering products based on search input
      const newProducts = products.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setFilteredProducts(newProducts)
    } else {
      setFilteredProducts()
    }
  }
 
  return (
    // Providing values to the context
    <ContextApp.Provider value={{
      products, 
      setProducts, 
      filteredProducts, 
      productToShow,
      setProductToshow,
      isProductDetailOpen,
      setIsProductsDetail,
      onSearch
    }}>
      {children}
    </ContextApp.Provider>
  )
}
