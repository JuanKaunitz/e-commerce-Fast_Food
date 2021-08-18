import {
    GET_ALL_PRODUCTS,
    SEARCH_PRODUCTS,
    GET_BY_ID,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    GET_CATEGORIES,
    CATEGORY_NAME,
    UPDATE_CART,
    LOGIN_CLIENT,
    NEW_USER,   
    GET_TYPES,
    ORDER_REDUX,
    EDIT_PRODUCT,
    TOTAL_CARRITO,
    ALL_USERS,    
    DELETE_CATEGORY,    
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    // GET_CLIENTS,
    HIGHER_PRICE,
    LOWER_PRICE,
    CLIENT_UPDATE

} from '../constants'

import dotenv from 'dotenv'
import axios from 'axios';

// import { bindActionCreators } from 'redux';
dotenv.config()

// const URL = process.env.REACT_APP_BACKEND_URL 
const URL = 'http://localhost:5001';

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
     console.log('INPUT ACTION: ', input);
    try {
        const product = await axios.post(`${URL}/food/api/products`,input);
        console.log('PRODUCT: ', product);
        dispatch({
            type: CREATE_PRODUCT,
            payload: product.data.product
        });
    } catch (err) {
        console.log(err)
    }
 };

 //Actualizando producto.
 export const getUpdate = (id, input) => async (dispatch) => {
     //console.log('UPDATE: ', input)
    try {        
        const res = await axios.put(`${URL}/food/api/products/${id}`, input) 
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
     //console.log('ID DELETE',id)
     try {
         const res = await axios.delete(`${URL}/food/api/products/${id}`);
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

//Creando una categoria.
export const createCategory = (input) => async (dispatch) => {
    console.log('LLEGA?O NOOOOOOOOO: ', input)
    try {
        const category = await axios.post(`${URL}/food/api/category`,input);
        // const category = await axios.post(`${URL}/food/api/category`, input)
        console.log('CATEGORY: ', category.data);
        dispatch({
            type: CREATE_CATEGORY,
            payload: category.data
        });
    } catch (err) {
        console.log(err)
    }
 };

 //Actualizar categoria.
export const getUpdateCategory = (id, input) => async (dispatch) => {
    console.log('CATEGORIA ID:', id )
    console.log('CATEGORIA input:', input )
    try {
        const res = await axios.put(`${URL}/food/api/category/${id}`, input);
        console.log("RESPUESTA", res)
        dispatch({
            type: UPDATE_CATEGORY,
            payload: res.data
        });
    } catch (err) {
        console.log(err)
    }

};

//Borrando una categoria.
export const deleteCategory = (id) => async (dispatch) => {
     console.log('ID DELETE',id) 
    try {
        const res = await axios.delete(`${URL}/food/api/category/${id}`);        
        dispatch({
            type: DELETE_CATEGORY,
            payload: res.data
        });
    } catch (err) {
        console.log(err)
    }
};

// Ordenamiento ascendente y descendente.
export const orderBy = (sort) => (dispatch) => {  
    if(sort === "startLowerPrice"){
        dispatch({
            type: LOWER_PRICE,        
        }) 
    }
    if(sort === "startHighestPrice"){
        dispatch({
           type: HIGHER_PRICE,        
       })    
    }
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


//ACTUALIZAR CARRITO DE CUALQUIER USUARIO
export const updateCart = (order) => (dispatch) => {

    dispatch({
        type: UPDATE_CART,
        payload: order
    });
    
}

//ACTUALIZAR ORDEN en redux
export const orderRedux = (order) => (dispatch) => {
    dispatch({
        type: ORDER_REDUX,
        payload: order
    });
}

//Actualizar orden en back.
export const updateOrderFinal = (id,order) => async(dispatch) => {
    try {
        const res = await axios.put(`${URL}/food/api/order/${id}`, order);
        console.log("ORDER ACTUALIZADA", res)
       
   } catch (err) {
    console.log(err)
  }
}

//Envio de orden nueva al back.
export const orderFinal = (order) => async(dispatch) => {
    try {
        const res = await axios.get(`${URL}/food/api/order`, order);
        console.log("ORDER", res)
       
   } catch (err) {
    console.log(err)
  }
}

//Obtengo lista de clientes(register).
export const allUsers = () => async (dispatch) => {
    try {
        const res = await axios.get(`${URL}/food/api/user`);
        console.log('ALL USER: ', res.data)
        dispatch({
           type: ALL_USERS,
           payload: res.data
       });
    
   } catch (err) {
    console.log(err)
  }
};

//Crear nuevo usuario(register).
export const newUser = (user) => async (dispatch) => {
    try {
        const res = await axios.post(`${URL}/food/api/user`, user);        
        console.log('NEW USER: ', res.data)
        dispatch({
           type: NEW_USER,
           payload: res.data
       });
   } catch (err) {
    console.log(err)
  }
};

//recuperar el producto de la api para edicion
export const getProductById = (id) => async(dispatch)=>{
    try{
        const product = await axios.get(`${URL}/food/api/products/${id}`);        
        dispatch({
            type:EDIT_PRODUCT,
            payload:product.data.product
        })
    }catch(err){
        console.log(err)
    }
}

//Acceder a los types de categories.
export const getTypes = (tipos) => (dispatch) => {
    dispatch({
        type: GET_TYPES,
        payload: tipos
    });
}

//SUMA TOTAL DE PRODUCTOS
export const totalProductosCarrito = (total) => (dispatch) => {
    dispatch({
        type: TOTAL_CARRITO,
        payload: total
    })
}

//Actualizacion de cliente.
export const updateClient = (id, input) => async (dispatch) => {
    console.log('ID E INPUT ', input);
    try {
        const res = await axios.put(`${URL}/food/api/user/${id}`, input);
        dispatch({
            type: CLIENT_UPDATE,
            payload: res.data

        })

    } catch(err) {
        console.log(err)
    }
}