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


const MyAcount = () => {
    const classes = useStyles()
    const client = useSelector((state) => state.client) 
    const ordersHistory = useSelector((state) => state.orderUser);

    return (
        <div className='list'> 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>   
          <h1 classname='list'>My profile</h1>   
          <br></br>   
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
            <h1>Orders History</h1>

            <div className="list">
      <h1>Products List</h1>
      {ordersHistory.map((e) => (
        <ProfileCard
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
         
        />
      ))}
    </div>
        </div>
    )
}

export default MyAcount
