
import {
  GET_ALL_PRODUCTS,
  GET_BY_ID,
  CREATE_PRODUCT,
  SEARCH_PRODUCTS,
  GET_CATEGORIES,
  LOWER_PRICE,
  HIGHER_PRICE,
  /* ASC,
  DESC */
  NULL,
} from '../constants'


const initialState = {
  getProducts : [],
  productsBackUp : [],
  getDetail : {},
  createNewProduct : {},
  searchProducts: [], 
  loading: false,
  allCategories : [{name:'Hamburguers'},{ name:'Sandwitches'},{name: 'Drinks'},{ name:'Combos'},{name: 'Siders'} ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        getProducts: action.payload,
        productsBackUp: action.payload,
        loading: false
      };
    case GET_BY_ID: 
    return {
      ...state,
      getDetail: action.payload
    }  
    case CREATE_PRODUCT: 
    return {
      ...state,
      createNewProduct: action.payload
    }
    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchProducts: action.payload,
        loading: true
      }
 
    case GET_CATEGORIES:
    return {
      ...state,
      allCategories: action.payload
    }

    case LOWER_PRICE:

      const res = state.getProducts.sort((a, b) => parseInt(a.price) - parseInt(b.price));     
      return {
        ...state,        
        getProducts: [...res],
      };

      case HIGHER_PRICE:
        const res1 = state.getProducts.sort((a, b) => parseInt(b.price) - parseInt(a.price));     
      return {
        ...state,        
        getProducts: [...res1],
      };

      /* case NULL:   
       console.log(NULL)  
       console.log(state.productsBackUp)   
        return {          
          getProducts: state.productsBackUp
        }
 */
    default:
      return state;
  };
    
}

export default rootReducer