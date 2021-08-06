import React from 'react'

import {
  GET_ALL_PRODUCTS,
  GET_BY_ID,
  CREATE_PRODUCT,
  GET_CATEGORIES
} from '../constants'


const initialState = {
  getProducts : [],
  getDetail : {},
  createNewProduct : {},
  allCategories : []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        getProducts: action.payload,
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