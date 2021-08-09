import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
//import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  media: {
    height: '35px',
    width:200,
    paddingTop: '50%', // 16:9
  },
  cardContent: {
    width: '200px',
    heigth: '200px',
    boxShadow: '3px 4px 8px #0b0c0c1a',

  },
  headerTitle: {
    color:'#363636',
    textDecoration:'none',
  },
 
  
}));

export default function CardProduct({id, name, image,price}) {
  const classes = useStyles();

  return (
    <Card className={classes.cardContent} >
      <Link to={`/detail/${id}`} className={classes.headerTitle}>
        <CardHeader  title={name}/>
        <CardMedia
          className={classes.media}
          image={image}
        />
      </Link>
      <CardActions disableSpacing>
        <h3>$ {price}</h3>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <AddShoppingCartIcon color="secondary"/>
        </IconButton>
      </CardActions>
    </Card>
  );
}