import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './OrderEdit.css'
import { updateOrderFinal } from '../../Redux/actions/actions'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 100,
    height: 80,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));




const OrderEdit = (props) => {
    const dispatch = useDispatch();
    const editOrders = useSelector((state) => state.clients);
    const history = useHistory();



    const id = props.match.params.id;

    const filterOrders = editOrders.filter((c) => { 
       let userOrder = c.order
       let orderDetail = userOrder.length > 0 && userOrder.filter((e) => e._id === id)
        if(orderDetail.length > 0) {
            return {
                name: c.name,
                email: c.email,
                status: c.status,
                google: c.google,
                role: c.role,
                order: orderDetail,
                _id: c._id
            };
        }      
      return null
    });



     const client = filterOrders[0];
   
     
     const statusHandler = (e) => {
      
        client.status = e.target.value;
        
    }  
     const updateStatus = (e) => {
         e.preventDefault()
         const updateOrder = {            
            status: client.status,            
          }
         dispatch(updateOrderFinal(id, updateOrder ))
         history.push('/ordersPanel')
     }
 
  
    const classes = useStyles();

    return (

        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className='list'>Client Edit</h1>
            <Link to='/adminPanel'> <button >Admin Panel</button></Link>
            <Link to='/clients'> <button >Clients Panel</button></Link>
            <Link to='/adminCategories'> <button >Categories Panel</button></Link>
            <Link to='/ordersPanel'> <button >Orders Panel</button></Link>
            <br></br>
            <br></br>
            <h1>Aca va el form de edicion de Ordenes para cambiar sus status</h1>


            <Card className={classes.root}>
                <div>
                    <CardMedia
                    className={classes.cover}
                    /* {orderId} */
                    title="Order"
                    />
                </div>
                <div>

                    <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                           <h4>Name: {client?.name} </h4>  
                        </Typography>
                        <Typography component="h5" variant="h5">
                           <h4>Op: {id} </h4>  
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Email: {client?.email} 
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Role: {client?.role}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            isGoogle: {client?.google.toString()} 
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Orders: {client?.order.length} 
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            isLog: {client?.status.toString()} 
                        </Typography>
                     
                    </CardContent>
                </div>               
            </Card>

            <form onSubmit={ updateStatus }>
                <label>Change status</label>
                <select onClick={(e) => statusHandler(e)}>                    
                    <option name = "carrito" value="carrito">Carrito</option>
                    <option name = "creada" value="creada">Creada</option>
                    <option name = "procesando" value="procesando">Procesando</option>
                    <option name = "cancelado" value="cancelado">Cancelado</option>
                    <option name = "completada" value="completada">Completada</option>
                </select>
                <button type='submit'>status</button>
            </form> 
        </div>
    )
}

export default OrderEdit
