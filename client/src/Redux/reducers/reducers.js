
import {
  GET_ALL_PRODUCTS,
  GET_BY_ID,
  CREATE_PRODUCT,
  SEARCH_PRODUCTS,
  GET_CATEGORIES
} from '../constants'


const initialState = {
  getProducts : [],
  allProducts:[],
  getDetail : {},
  createNewProduct : {},
  searchProducts: [], 
  loading: false,
  allCategories : []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        getProducts: action.payload,
        allProducts:action.payload,
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
      getProducts: [...state.allProducts,action.payload]
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
    default:
      return state;
  };
    
}

export default rootReducer