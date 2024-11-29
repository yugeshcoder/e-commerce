import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { usePaginationContext } from '../context/PaginationContext';

function Pagination({totalPage}) {
  const{pageNumber,setPageNumber,pageSize,setPageSize} = usePaginationContext();
  return (
    <div className='pagination'>
      <button onClick={() => {
        if(pageNumber === 1){
          return;
        }
        setPageNumber(pageNumber-1);
        }} disabled={pageNumber === 1 ? true : false}>
        <KeyboardArrowLeftIcon fontSize='large' />
      </button>
      <div className='page_number'>{pageNumber}</div>
      <button onClick={() => {
        if(pageNumber === totalPage){
          return;
        }
        setPageNumber(pageNumber + 1);
        }} disabled={pageNumber === totalPage ? true : false}>
        <KeyboardArrowRightIcon fontSize='large'/>
      </button>
    </div>
  )
}

export default Pagination
