
import {
  GET_ALL_PRODUCTS,
  GET_BY_ID,
  CREATE_PRODUCT,
  SEARCH_PRODUCTS,
 // SEARCH
} from '../constants'


const initialState = {
  //search: Boolean,
  getProducts : [],
  getDetail : {},
  createNewProduct : {},
  searchProducts: [], 
  loading: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        getProducts: action.payload,
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
    /* case SEARCH: 
    return {
      ...state,
      search: !state.search
    }   */
    default:
      return state;
  };
    
}

export default rootReducer