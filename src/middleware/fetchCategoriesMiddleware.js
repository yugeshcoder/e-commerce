import { actions } from "../redux/slices/CategoriesSlice";

export const fetchCategoriesMiddleware = () => {
  return (
    (async function (dispatch) {
      try{
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const data = await response.json();
        dispatch(actions.setCategories(data));
      }
      catch(error){
        console.error(`Error ${error}`);
      }
    })   
  )
}