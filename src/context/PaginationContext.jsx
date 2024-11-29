import React, { useContext, useState } from 'react'

const paginationContext = React.createContext();

export default function PaginationProvider({children}){
  const[pageNumber,setPageNumber] = useState(1);
  const[pageSize,setPageSize] = useState(5);

  const props = {pageNumber,setPageNumber,pageSize,setPageSize};

  return(
    <paginationContext.Provider value={props}>{children}</paginationContext.Provider>
  )
}

export const usePaginationContext = () => {
  return useContext(paginationContext);
}
