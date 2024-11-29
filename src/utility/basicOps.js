const SearchItem = (arrayOfProducts,searchTerm) => {
  let modifiedArray = arrayOfProducts;
  if(searchTerm != ""){
   modifiedArray = modifiedArray.filter((product) => {
     let lowerCaseSearchTerm = searchTerm.toLowerCase();
     let lowerCaseTitle = product.title.toLowerCase();
     return lowerCaseTitle.includes(lowerCaseSearchTerm);
    })
  }
  return modifiedArray;
}

const sortItem = (arrayOfProducts,sortDirection) => {
  let modifiedArray = arrayOfProducts;
  if(sortDirection != 0){
    if(sortDirection == -1){
      modifiedArray = modifiedArray.sort((product1,product2) => product1.price - product2.price)
      }
    else{
      modifiedArray = modifiedArray.sort((product1,product2) => product2.price - product1.price)
      }
    }

    return modifiedArray;
  }

  const categoryItem = ((arrayOfProducts,currentCategory) => {
    let modifiedArray = arrayOfProducts;
    if(currentCategory.localeCompare('All Categories') != 0){
      modifiedArray = modifiedArray.filter((product) => {
        return (product.category === currentCategory)
      })
    }
    return modifiedArray;
  })

  const pagination = ((arrayOfProducts,pageNumber,pageSize) => {
    let modifiedArray = arrayOfProducts;
    let totalPage = Math.ceil(arrayOfProducts.length/pageSize)
    let startIndex = (pageNumber-1) * pageSize;
    let endIndex = Math.min((startIndex + pageSize) -1,arrayOfProducts.length-1);

    modifiedArray = modifiedArray.slice(startIndex,endIndex+1);

    return{modifiedArray,totalPage};
  })


export default function basicOps(arrayOfProducts,searchTerm,sortDirection,currentCategory,pageNumber,pageSize){
  if(arrayOfProducts === null || arrayOfProducts.length === 0){
    return null;
  }

  let modifiedArray = arrayOfProducts;

  /** ******************filltering Products ********************** */
  modifiedArray = SearchItem(modifiedArray,searchTerm);

  /** ****************Sorting Products *************************** */
  modifiedArray = sortItem(modifiedArray,sortDirection);

  /** ****************selected Category ************************* */
  modifiedArray = categoryItem(modifiedArray,currentCategory);

  /* *****************pagination method ******************** */
  modifiedArray = pagination(modifiedArray,pageNumber,pageSize);


  return modifiedArray;
}