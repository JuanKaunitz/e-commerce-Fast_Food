import React , { useEffect, useState }   from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {/*  deleteOrder */ getOrder, allUsers } from "../../Redux/actions/actions";
import CardOrders from './CardOrders';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    backgroundColor:'black',
    color:'orange',
    marginLeft:"400px",
    marginRight:"550px",
  },
  profile:{
    display:"flex",
    alignItems:"center",
    marginLeft:"250px",
    fontSize:"35px"
  },
}));

const GetOrders = () => {
  const classes = useStyles()
    const dispatch = useDispatch(); 
    const [select, setSelect] = useState('')
    const [products, setProducts] = useState([])

    useEffect(() => { 
        dispatch(getOrder())
        dispatch(allUsers())
      }, [dispatch]);

    useEffect(() => {
      if(select === '...') {
        return setProducts([])
      } 
      const prodFilter = getAll.filter(prod => prod.status === select);
      setProducts(prodFilter)
    }, [select])

    const getAll = useSelector((state) => state.allOrders);
    console.log(getAll)
    const options = ['...','carrito', 'creada', 'procesando', 'cancelado', 'completada']

   
    return (
        <div>
            <div className={classes.list}>  
            <div className={classes.profile}>Orders list: </div>  
        <form>
          <select onChange={(e) => setSelect(e.target.value)}>
              {
                options.map((e) => <option name={e} value={e}>{e}</option>)
              }
          </select>    
        </form>   
          <div >

            {
                products.length > 0 ? 
                products.map((e) =>
                <Grid item key={e._id} xs={12} >
                  <CardOrders 
                  orderId={ e._id} 
                  status={e.status}                  
                  total={e.total}                       
                  />
                </Grid>
                )
                :
                getAll.map((e) =>
                <Grid item key={e._id} xs={12} >
                  <CardOrders 
                  orderId={ e._id} 
                  status={e.status}                  
                  total={e.total}                       
                 />
                </Grid>
                )
            } 
            </div>
            </div>
        </div>
    )
}

export default GetOrders
