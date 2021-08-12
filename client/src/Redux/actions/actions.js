import {
    GET_ALL_PRODUCTS,
    SEARCH_PRODUCTS,
    GET_BY_ID,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    GET_CATEGORIES,
    CATEGORY_NAME,
    LOGIN_CLIENT,
    ADD_CART,
    REMOVE_CART
    
} from '../constants'
import dotenv from 'dotenv'
import axios from 'axios';
// import { bindActionCreators } from 'redux';
dotenv.config()
const URL = process.env.REACT_APP_BACKEND_URL
//Obteniendo todos las foods.
export const getAllProducts = () => async (dispatch) => {
   try {
       const res = await axios.get(`${URL}/food/api/products`);
       dispatch({
           type: GET_ALL_PRODUCTS,
           payload: res.data
       });
   } catch (err) {
       console.log(err)
   }
};

//Obteniendo los productos por Query Name.
export const searchQueryProducts = (name) => async (dispatch) => {
    try {
        const res = await axios.get(`${URL}/food/api/products/search/${name}`);
        dispatch({            
            type: SEARCH_PRODUCTS, 
            payload: res.data
        });
    } catch (err) {
        console.log(err)
    }
 };

//Obteniendo productos por ID.
export const getById = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${URL}/food/api/products/${id}`);
        dispatch({
            type: GET_BY_ID,
            payload: res.data
        });
    } catch (err) {
        console.log(err)
    }
 };

 //Creando un producto.
 export const createProduct = (input) => async (dispatch) => {
    try {
        const product = await axios.post(`${URL}/food/api/products`,input);
        dispatch({
            type: CREATE_PRODUCT,
            payload: product.data.product
        });
    } catch (err) {
        console.log(err)
    }
 };

 //Actualizando producto.
 export const getUpdate = (id) => async (dispatch) => {
    try {        
        const res = await axios.get(`${URL}/food/api/${id}`);  
        dispatch({
            type: UPDATE_PRODUCT,
            payload: res.data
        });
        
    } catch (err) {
      console.log(err)
    }
 };

 //Borrando un producto.
 export const deleteProduct = (id) => async (dispatch) => {
     try {
         const res = await axios.get(`${URL}/food/api/${id}`);
         dispatch({
             type: DELETE_PRODUCT,
             payload: res.data
         });
     } catch (err) {
         console.log(err)
     }
 };


 //Obteniendo las categorías.
 export const getCategories = () => async (dispatch) => {
     try {
         const res = await axios.get(`${URL}/food/api/category`);
         dispatch({
             type: GET_CATEGORIES,
             payload: res.data
         });
     } catch (err) {
         console.log(err)
     }

};

// Ordenamiento ascendente y descendente.
export const orderBy = (sort) => (dispatch) => {  
    dispatch({
       type: sort,        
   })    
};

export const categoryName = (name) => (dispatch) => {  
    dispatch({
        type: CATEGORY_NAME,
        payload: name        
    })    
};

//Autenticación de usuario.    
export const authUser =  (user) => async (dispatch) => {
    try {
        const client = await axios.post(`${URL}/food/api/auth-sesion`, user);
        console.log('CLIENT: ', client)
        dispatch({
            type: LOGIN_CLIENT,
            payload: client.data
        })

    } catch (err) {
        console.log(err)
    }
};  


//Agregar el carrito.
export const addCart = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${URL}/food/api/products/${id}`);
        dispatch({
            type: ADD_CART,
            payload: res.data
        });
    } catch (err) {
        console.log(err)
    }
};

//Quitar el producto del carrito.
export const removeCart = (id) => (dispatch) => {
    dispatch({
        type:REMOVE_CART,
        payload: id
    })
};
