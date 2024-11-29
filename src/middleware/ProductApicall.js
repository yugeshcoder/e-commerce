import { actions } from "../redux/slices/ProductsSlice";

export const ProductApicall = () => {
  return(
    (async function (dispatch) {
      try{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        dispatch(actions.setProduct(data));
      }
      catch(error){
        console.error(`Error ${error}`)
      }
    })
  )
}