import React from "react";
import "./Order.css";
import { useDispatch } from "react-redux";
import { getAllProducts, orderBy } from '../../Redux/actions/actions'

const Order = () => {
  const dispatch = useDispatch();  
  
  const onOrderChange = (e) => {  
    if(e.target.value === 'null') {
      dispatch(getAllProducts())
    } else {
      dispatch(orderBy(e.target.value));
    }
  }  

  return (
    <div className="select">
      <label className="order">Order: </label>
      <select name="slct" id="slct" onChange={onOrderChange}>
        <option defaultValue value="null">... </option>
        <option value="startLowerPrice">Price: Lower to highest</option>
        <option value="startHighestPrice">Price: Highest to lowest</option>
        <option value="DESC">Ranking: Most recomended </option>
        <option value="ASC">Ranking: Less recomended </option>
      </select>
    </div>
  );
};

export default Order;