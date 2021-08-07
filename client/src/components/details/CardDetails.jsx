import React, {useEffect,useRef} from 'react';
import {useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import GradeIcon from '@material-ui/icons/Grade';

import {getById} from '../../Redux/actions/actions';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 600,
    height:500
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function CardDetails({match}) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const productId = useRef(match.params.id);
  console.log("ID ----", productId)

  useEffect(() => {
    dispatch(getById(productId.current));
  },[dispatch, productId]);
  
  const detail = useSelector(state => state.getDetail.product);

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
           {detail.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {detail.description}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Typography variant="subtitle1" color="textSecondary">
            ${detail.price}
          </Typography>
          <IconButton >
            <GradeIcon/>
            <GradeIcon/>
            <GradeIcon/>
          </IconButton>
          <IconButton >
            <FavoriteIcon/>
          </IconButton>
          <IconButton >
            <AddShoppingCartIcon color="secondary"/>
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={detail.image}
        title="Live from space album cover"
      />
    </Card>
  );
}