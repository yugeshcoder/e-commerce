import React from 'react'
import { usePaginationContext } from '../context/PaginationContext';

function Categories(props) {
  const{categories,setCurrentCategory}= props;
  const{setPageNumber} = usePaginationContext();
  return (
    <div className='categories_wrapper'>
      <button className='categories_button' onClick={() => {setCurrentCategory('All Categories');setPageNumber(1)}}>All  Categories</button>
      {
        categories.map((category,index) => {
          return(
            <button key={index} className='categories_button' onClick={() => {setCurrentCategory(category);setPageNumber(1)}}>{category}</button>
        )
        })
      }
    </div>
  )
}

export default Categories
