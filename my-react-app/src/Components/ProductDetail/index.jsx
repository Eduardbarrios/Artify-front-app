import { useContext } from 'react'
import { ContextApp,  } from '../../Context'
import './style.css'

const ProductDetail = (data) => {
  const context = useContext(ContextApp)

  
  
  return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0  border border-black  rounded-lg bg-white z-10 `}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button onClick={() => context.setIsProductsDetail(false)} >
         x
        </button>
      </div>
      <figure className='px-6 max-h-[240px]'>
        <img
          className='w-full h-full rounded-lg object-cover'
          src={context.productToShow?.image_path}
          alt={context.productToShow?.name} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${context.productToShow?.price}</span>
        <span className='font-medium text-xl'>{context.productToShow?.name}</span>
        <span className='font-light text-sm'>{context.productToShow?.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail