  
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '20vh',
    color:'white'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    textAlign:'center',
    marginTop: 'auto',
    backgroundColor:'black',
    color:'white'
  },
  color: {
    color:'orange'

  }

}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <Grid cointainer>
    <Grid items lg={12} md={12} xs={12}>
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="xs">
        <Typography variant="body2" className={classes.color}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        App FastFood
        </Link>
    </Typography>
          <Typography variant="body1">Design By Group 10 from Henry</Typography>
        </Container>
      </footer>
    </div>
    </Grid>
    </Grid>
  );
}