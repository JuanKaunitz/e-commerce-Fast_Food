import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers } from '../../Redux/actions/actions';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './GetClients.css'



const useStyles = makeStyles((theme) => ({
  list: {
    width:'80%',
    color:'orange',
    
    
  },
  profile:{
    display:"flex",
    alignItems:"center",
    marginLeft:"250px",
    fontSize:"35px",
    fontWeight:800
  },
  root: {
    display: 'flex',
    backgroundColor:'white',
    color:'black',
  },
  content: {
    flex: '1 0 auto',
    backgroundColor:'white',
    color:'black'
  },
  cover: {
    width: 100,
    height:80,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    color:'black',
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
}, [dispatch])


  return (
    <div className={classes.list}>
    <div className={classes.profile}>
      Clients list
    </div>
    
      {
      clients.length > 0 ? clients.map((e) => (
          <Card key={e._id} className={classes.root}>
              <div>
                <CardMedia
                  className={classes.cover}
                  image={e.image? e.image : 'imagen'}
                />
              </div>
              <div>
                <CardContent className={classes.content}>
                  <Typography  variant="h5" component="h2">
                    {e.name}
                  </Typography>
                  <Typography   component="h2">
                    {e.email}
                  </Typography>
                </CardContent>
              </div>
              <div className={classes.controls}>
                <Typography  component="h2">
                {e.google} 
                </Typography>
              </div>
              <div className={classes.controls}>
                <Typography  component="h2">
                {e.status} 
                </Typography>
              </div>
              <div className={classes.controls}>
                <Typography  component="h2">
                {e.role} 
                </Typography>
              </div>
              <div>
                <Link to={`/clientEdit/${e._id}`} style={{textDecoration: "none",color:"black"}}
                >Editar</Link>
              </div>
            
            </Card> 
        ))
        : 
        <h4>Cannot found...</h4>
      }
    </div>
  )
}
