import {
  ORDER_REDUX,
  TOTAL_CARRITO,
  UPDATE_CART,
} from '../constants';

import dotenv from 'dotenv'
import axios from 'axios';

// import { bindActionCreators } from 'redux';
dotenv.config()

// const URL = process.env.REACT_APP_BACKEND_URL 
const URL = 'http://localhost:5001';


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
