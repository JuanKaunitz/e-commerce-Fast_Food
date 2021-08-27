import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, getAllProducts } from "../../Redux/actions/actions";
import CardAdmin from "./CardAdmin";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    width:'90%',
    // backgroundColor:'black',
    color:'white',
    textAlign:'center',
    borderRadius:0.5
  },
  
  list1: {
    // backgroundColor:'black',
    width:'100%',
    color:'orange',
    fontSize: '20px',
    textAlign:'center',
    borderRadius:0.5,
    '& h1':{
      display:"flex",
      alignItems:"center",
      marginLeft:"250px",
      fontSize:"35px",
      fontWeight:800
    }
  },
  products:{
    display: 'flex',
    alignItems:'center',
    width:'100%',
    // justifyContent: 'space-around',

  },
  


}));
export default function EveryProducts() {
  const dispatch = useDispatch();
  const getAll = useSelector((state) => state.allProducts);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  function handleDeleteProduct(id) {
    dispatch(deleteProduct(id));
  }

  return (
    <div className={classes.products}>
    <div className={classes.list1}>
      <h1>Products List</h1>
      <div className={classes.list}>
      {getAll.map((e) => (
        <CardAdmin
          key={e._id}
          name={e.name}
          id={e._id}
          image={e.image}
          price={e.price}
          avalilable={e.available}
          stock={e.stock}
          type={e.type}
          description={e.description}
          identifier={e.identifier}
          deleteCart={handleDeleteProduct}
        />
      ))}
      </div>
    </div>
    </div>
  );
}
