import React from 'react'
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ProfileCard from './ProfileCard';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
  },
  profile:{
    fontSize:"50px",
    fontFamily:"roboto",
    marginBottom: "40px",
    justifyContent:"center",
    marginLeft:"100px"
  
  },
  orders:{
    marginBottom:"20px",
    marginTop:"20px",
    justifyContent:"center"
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
  list:{
    marginTop:"100px"
  }
}));


const MyAcount = () => {
    const classes = useStyles()
    const client = useSelector((state) => state.client) 
    const ordersHistory = useSelector((state) => state.orderUser);

    return (
        <div className={classes.list}>    
          <div className={classes.profile}>My profile</div>    
          <Card key={client._id} className={classes.root}>
              <div>
                <CardMedia
                  className={classes.cover}
                  image={client.image}
                />
              </div>
              <div>
                <CardContent className={classes.content}>
                  <Typography  variant="h5" component="h2">
                    {client.name}
                  </Typography>
                  <Typography  color="textSecondary" component="h2">
                    {client.email}
                  </Typography>
                </CardContent>
              </div>
              <div className={classes.controls}>
                <Typography color="textSecondary" component="h2">
                {client.google} 
                </Typography>
              </div>
              <div className={classes.controls}>
                <Typography color="textSecondary" component="h2">
                {client.status} 
                </Typography>
              </div>
              <div className={classes.controls}>
                <Typography color="textSecondary" component="h2">
                {client.role} 
                </Typography>
              </div>             
            </Card> 

            <div className={classes.profile}>
            <div className={classes.orders}>Orders History</div>
              {
              ordersHistory.map((e) => (
                <ProfileCard
                  key={e._id}
                  status={e.status}
                  id={e._id}
                  order={e.order}
                
                />
              ))}
            </div>
        </div>
    )
}

export default MyAcount
