
import {
  GET_ALL_PRODUCTS,
  GET_BY_ID,
  CREATE_PRODUCT,
  SEARCH_PRODUCTS,
  GET_CATEGORIES,
  LOWER_PRICE,
  HIGHER_PRICE,
  CATEGORY_NAME,
  LOADING,
  UPDATE_CART,
  LOGIN_CLIENT,
  NEW_USER,
  CLEAR_SEARCH
  /* ASC,
  DESC */  
} from '../constants'


const initialState = {
  getProducts : [],
  allProducts:[],
  productsBackUp : [],
  getDetail : {},
  createNewProduct : {},
  searchProducts: [], 
  loading: false,
  allCategories : [],
  categoryName: '',
  client: {},
  order:[],
  clientToken: {},
  orderFinal: {
      clientId: '',
      token: '',
      precioTotal: '',
      totalProductos: '',
      order: [],
    },
  createNewUser: {}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        getProducts: action.payload,
        allProducts:action.payload,
        productsBackUp: action.payload,
        loading: false
      };
    case GET_BY_ID: 
    return {
      ...state,
      getDetail: action.payload,
      loading: true
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
    
    case CLEAR_SEARCH:
      return {
        ...state, 
        searchProducts: action.payload,
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
 
      case CATEGORY_NAME:
        return {
          ...state,
          categoryName: action.payload
        }

      case LOADING: 
      return {
        ...state,
        loading: action.payload
      }
      
      case LOGIN_CLIENT: 
        return {
          ...state,
          client: action.payload
        }  
        
      case UPDATE_CART:
        return {
          ...state,
          order: action.payload
        }

      case NEW_USER:
        return {
          ...state,
          createNewUser: action.payload
        }  

    default:
      return state;
  };
    
}

export default rootReducer