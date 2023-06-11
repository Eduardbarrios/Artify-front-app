import { createContext, useState, useEffect } from 'react'
import { GetProducts } from '../utils/getProducts'

export const ContextApp = createContext()

export const ContextAppProvider = ({children}) => {
 
 const [products, setProducts] = useState()
 
 const getProducts = async ()=>{
  const newProducts = await GetProducts()
  setProducts(newProducts)
 }
 useEffect(()=>{
  getProducts()
 }, [])
 const [productToShow, setProductToshow] = useState()
 const [isProductDetailOpen, setIsProductsDetail] = useState()
 const onSearch = (e)=>{
  if(e.target.value){
    console.log(e.target.value);
  }
 }
  return (
    <ContextApp.Provider value={{
      products, 
      setProducts,  
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
