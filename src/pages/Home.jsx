import React, { useEffect, useState } from 'react'
import basicOps from '../utility/basicOps';
import '../css/Home/HomeProducts.css'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';
import { usePaginationContext } from '../context/PaginationContext';
import Pagination from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { ProductApicall } from '../middleware/ProductApicall';
import { fetchCategoriesMiddleware } from '../middleware/fetchCategoriesMiddleware';
import { searchActions } from '../redux/slices/SearchItemSlice';


const ASCENDING_DIRECTION = -1;
const DESCENDING_DIRECTION = 1;

function Home() {
  const products = useSelector((state) => state.productState.product);
  const categories = useSelector((state) => state.categoriesState.categories);
  const searchItem = useSelector((state) => state.searchItemState.searchItem);
 
  const[sortDriection,setSortDriection] = useState(0);
  const[currentCategory,setCurrentCategory] = useState("All Categories");

  const{pageNumber,setPageNumber,pageSize,setPageSize} = usePaginationContext();

  const dispatch = useDispatch();


  /** ****************get all the products ********* */
  useEffect(() => {
    dispatch(ProductApicall());
  },[]);

  /** ******************get all the categories ************ */
  useEffect(() => {
    dispatch(fetchCategoriesMiddleware())
  },[]);


  let modifiedArrayOfProductsOfObject = basicOps(products,searchItem,sortDriection,currentCategory,pageNumber,pageSize);
  let modifiedArrayOfProducts = (modifiedArrayOfProductsOfObject === null) ? null  : modifiedArrayOfProductsOfObject.modifiedArray;
  let totalPage = (modifiedArrayOfProductsOfObject === null) ? null  : modifiedArrayOfProductsOfObject.totalPage;
  return (
    <>
      <header className='nav_wrapper'>
        <div className='search_sort'>
        <input type='text' className='search_input' value={searchItem} onChange={(input) => {dispatch(searchActions.setSearchItem(input.target.value));setPageNumber(1)}}></input>

        <ArrowCircleDownIcon style={{color: 'white'}} onClick={() => setSortDriection(ASCENDING_DIRECTION)}/>

        <ArrowCircleUpIcon style={{color: 'white'}} onClick={() => setSortDriection(DESCENDING_DIRECTION)}/>
        </div>

        <Categories setCurrentCategory={setCurrentCategory} categories={categories}/>
      </header>

      <main className='product_wrapper'>
        <ProductList productsData={modifiedArrayOfProducts}/>
      </main>

      <footer>
        <Pagination totalPage={totalPage}/>
      </footer>
      
    </>
  )
}
 
export default Home
