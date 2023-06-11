import React, { useContext } from 'react';
import { ContextApp } from '../../Context';

const SearchBar = () => {
 const {onSearch} = useContext(ContextApp)
 const handdleSearch = (e)=>{
  onSearch(e)
 }
 return (
  <input type="text" onChange={(e)=>handdleSearch(e)} className='border border-black/50 w-[300px] h-[20px] self-center rounded-full px-3'/>
 );
};

export default SearchBar;