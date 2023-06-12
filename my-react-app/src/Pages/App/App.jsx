import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ContextAppProvider } from '../../Context'
import './App.css'
import Logo from '../../assets/ARTIFY.png'
import { useContext } from 'react'
import Home from '../Home'
import SearchBar from '../../Components/search'
import ProductDetail from '../../Components/ProductDetail'

// Component defining the routes for the application
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
  ])

  return routes;
}

// Main App component
const App = () => {
  return (
    <ContextAppProvider>
      <BrowserRouter>
        <div className='flex w-full justify-center border-b-[1px] border-black/50 mb-4 fixed top-0 bg-white z-10'>
          <img className='w-[200px]' src={Logo} alt="logo" />
          <SearchBar/>
          <img className='w-[200px]' src={Logo} alt="logo" />
        </div>
        <ProductDetail/>
        <AppRoutes />
      </BrowserRouter>
    </ContextAppProvider>
  )
}

export default App;
