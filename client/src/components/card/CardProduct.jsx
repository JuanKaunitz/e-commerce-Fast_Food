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

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

export default function CardProduct(props) {
  const classes = useStyles();

  return (
    <Card >
      <CardHeader title={props.name}/>
      <CardMedia
        className={classes.media}
        image={props.image}
      />
      <CardActions disableSpacing>
        <h3>{props.price}</h3>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}