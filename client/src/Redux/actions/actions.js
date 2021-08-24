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
    NEW_USER,   
    GET_TYPES,
    EDIT_PRODUCT,
    ALL_USERS,    
    DELETE_CATEGORY,    
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    CREATE_TYPE,
    // GET_CLIENTS,
    HIGHER_PRICE,
    LOWER_PRICE,
    CLIENT_UPDATE,
    GOOGLE_LOGIN,
    ALL_ORDERS,
    EDIT_ORDER,
    CLIENT_STATUS,    
    UPDATE_CART,
    TOTAL_CARRITO,
    ORDER_REDUX,
    GET_USER_BY_ID,
    BAND_ORDER_USER,
    NEW_ORDER_USER,
    RESET_PASSWORD,
    NEW_PASSWORD
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
   
    try {
        const category = await axios.post(`${URL}/food/api/category`,input);
        // const category = await axios.post(`${URL}/food/api/category`, input)
     
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

    try {
        const res = await axios.put(`${URL}/food/api/category/${id}`, input);
     
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
       
        console.log('USUARIO LOGUEADO: ', client.data)
        dispatch({
            type: LOGIN_CLIENT,
            payload: client.data
        })

    } catch (err) {
        console.log(err)
    }
};  

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

//Traer un usuario por ID
export const getUserById = (id) => async(dispatch) => {
    console.log("ID USUARIO PARA BUSCAR ORDEN", id)
    try{
        const res = await axios.get(`${URL}/food/api/user/${id}`);
        console.log("USUARIO ENCONTRADO POR ID", res.data)
        dispatch({
            type: GET_USER_BY_ID,
            payload: res.data
        })
    } catch(err){
        console.log(err)
    }
}

//ACTUALIZAR ORDEN en redux
export const orderRedux = (order) => (dispatch) => {
    dispatch({
      type: ORDER_REDUX,
      payload: order
    });
  }
  
  
//SUMA TOTAL DE PRODUCTOS
export const totalProductosCarrito = (total) => (dispatch) => {
    dispatch({
        type: TOTAL_CARRITO,
        payload: total
    })
}


//ACTUALIZAR CARRITO DE CUALQUIER USUARIO
export const updateCart = (order) => (dispatch) => {

    dispatch({
        type: UPDATE_CART,
        payload: order
    });
}

export const bandOrderUser = () => (dispatch) => {

    dispatch({
        type: BAND_ORDER_USER,
    });
}


//Actualizar orden en back.
export const updateOrderFinal = (id,order) => async(dispatch) => {
        //console.log("ORDEN PARA ACTUALIZAR", order)
    try {
        const res = await axios.put(`${URL}/food/api/order/${id}`, order);
        //console.log("ORDEN ACTUALIZACION", res)
        
    } catch (err) {
    console.log(err)
    }
}
  
  
  //Envio de orden nueva al back.
  export const orderFinal = (order) => async(dispatch) => {
    //console.log("ORDEN PÀRA CREAR", order)
    try {
        const res = await axios.post(`${URL}/food/api/order`, order);
        //console.log("ORDEN CREADA", res.data)
        dispatch({
            type: NEW_ORDER_USER,
            payload: res.data,
        });
   } catch (err) {
    console.log(err)
  }
  }
  
  //Borrar una order
export const deleteOrden = (id, borrado) => async (dispatch) => {
    //console.log('ID DELETE',id) 
    try {
        const res = await axios.delete(`${URL}/food/api/order/${id}`); 
        //console.log('BORRADO DE ORDEN',res.data)        
        dispatch({
            type: "DELETE_ORDEN",
            payload: borrado
        });
    } catch (err) {
        console.log(err)
    }
};

//Buscar una orden  por ID
export const getOrderById = (id) => async(dispatch) => {
    //console.log('GET BY ID',id) 
    try {
        const res = await axios.get(`${URL}/food/api/order/${id}`)
        //console.log('ORDER POR ID',res.data)        
        dispatch({
            
        });
    } catch (error) {
        
    }
}
  
//Todas las ordenes.
export const getOrder = () => async(dispatch) => {
    try {
        const res = await axios.get(`${URL}/food/api/order`);
        console.log("GET ORDER", res.data)
        dispatch({
            type: ALL_ORDERS,
            payload: res.data
        });
        
    } catch (err) {
    console.log(err)
    }
}


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
export const getTypes = () => async(dispatch) => {
    const types = await axios.get(`${URL}/food/api/types`);
    dispatch({
        type: GET_TYPES,
        payload: types.data
    });
}


//Actualizacion de cliente.
export const updateClient = (id, input) => async (dispatch) => {
  
    try {
        const res = await axios.put(`${URL}/food/api/user/${id}`, input);
        console.log("usuario actualizado", res.data)
        dispatch({
            type: CLIENT_UPDATE,
            payload: res.data
        })

    } catch(err) {
        console.log(err)
    }
}


//crear un type
export const createNewType = (type) => async(dispatch)=>{
    const types = await axios.post(`${URL}/food/api/types`,type);
   
    dispatch({
        type: CREATE_TYPE,
        payload: types.data
    });
}

//Enviar nuevo usuario registrado con google.

export const createGoogleUser = (user) => async (dispatch) => {
    try {
    const res = await axios.post(`${URL}/food/api/auth-sesion/google`, user);
   
    dispatch({
        type: GOOGLE_LOGIN,
        payload: res.data
    })
    } catch(err) {
        console.log(err)
    }
}
export const changeStatus = (id, input) => async (dispatch) => {

    try {
        const res = await axios.put(`${URL}/food/api/user/${id}`,input );
            console.log("respuesta loguot", res.data)
       
        dispatch({
            type:CLIENT_STATUS,  
        })

    } catch(err) {
        console.log(err)
    }
}

    
export const resetPassword= (email)=> async(dispatch)=>{
    const sendEmail = await axios.post(`${URL}/food/api/auth-sesion/reset-password`,{email});
    console.log(sendEmail)
    dispatch({
        type:RESET_PASSWORD,
        payload:sendEmail
    })
};

export const newPassword = (data) => async(dispatch) =>{
    console.log(data)
    const resp = await axios.post(`${URL}/food/api/auth-sesion/newPassword`,data);
    console.log(resp)
    dispatch({
        type:NEW_PASSWORD,
        payload:resp
    })
}