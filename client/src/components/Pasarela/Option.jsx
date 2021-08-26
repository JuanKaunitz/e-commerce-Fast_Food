import React from 'react'
// import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from '@material-ui/core';


const Option = () => {
  

    const useStyles = makeStyles((theme) => ({
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        paper: {
          margin: theme.spacing(75),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: '100px',
          justifyContent: 'space-around'

        },
        submit: {
          margin: theme.spacing(3, 0, 1),
          width: '100px',
          height: '80px'
        },
        link: {
          cursor: "pointer",
        },
     
      }));





  const classes = useStyles();

    return (
        <div className = {classes.paper}>
            <Link href="/shipping">
        <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Ship to your location
            </Button>
            </Link>
             
              
            <Link href="/maps"> 
             <Button 
             type="submit"
             fullWidth
             variant="contained"
             color="primary"
             className={classes.submit}
             
             >
              Pick up at the store
            </Button>
            </Link>
        </div>
    )
}

export default Option;
