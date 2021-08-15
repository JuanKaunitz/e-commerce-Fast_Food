import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers } from '../../Redux/actions/actions';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import './GetClients.css'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 100,
    height:80
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function GetClients() {
const dispatch = useDispatch();
const classes = useStyles()
const clients = useSelector((state) => state.clients) 


useEffect(()=> {
  dispatch(allUsers())
}, [])

const handleDeleteUser= () => {
  dispatch()
}

  return (
    <div className='list'>

    <br></br> 
    <br></br> 
    <br></br> 
    <br></br> 
    <br></br>
    <Link to='/adminPanel'> <button >Admin Panel</button></Link>
    <Link to='/adminCategories'> <button >Categories Panel</button></Link>
    <Link to='/newProduct'> <button >New Product</button></Link>
    <h1 classname='list'>Clients list</h1>
      {
      clients? clients.map((e) => (
        <Grid item key={e._id} xs={12} >
          <Card className={classes.root}>
              <div>
                <CardMedia
                  className={classes.cover}
                  image={e.image}
                  title="Live from space album cover"
                />
              </div>
              <div>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {e.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {e.email}
                  </Typography>
                </CardContent>
              </div>
              <div className={classes.controls}>
                <Typography variant="subtitle1" color="textSecondary">
                {e.google} 
                </Typography>
              </div>
              <div className={classes.controls}>
                <Typography variant="subtitle1" color="textSecondary">
                {e.status} 
                </Typography>
              </div>
              <div className={classes.controls}>
                <Typography variant="subtitle1" color="textSecondary">
                {e.role} 
                </Typography>
              </div>
              <div>
                <IconButton onClick={() => handleDeleteUser(e._id)}>
                  <DeleteIcon />
                </IconButton>
                <Link to={`/clientEdit/${e._id}`}>Editar</Link>
              </div>
            
            </Card> 
        </Grid>))
        : 
        <h4>Canot found...</h4>
      }
    </div>
  )
}
