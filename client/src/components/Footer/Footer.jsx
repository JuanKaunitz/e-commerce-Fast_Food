
import React from 'react';
import {NavLink} from 'react-router-dom';
import Style from './Footer.module.css';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#54075b',
        width: '100%',
        height: '10vh',
        alignItems: 'center',
        borderStyle: 'solid 1px', 
        color:'#f7ba33'
    },
    about: {
    padding: '20px',
    font: 'Roboto Condensed', 
    fontSize: '16px',
    color:'#f7ba33'
    },
    comida:{
    padding: '5px',
    font: 'Roboto Condensed', 
    fontSize: '16px',
    color:'#f7ba33'
    }
}));
function Footer(){
    const classes = useStyles();
    return(
        <div className={classes.container}>   
        
        <h3 className={classes.fast}>© 2021 FAST FOOD</h3>
            <h3><NavLink className={classes.comida} to='/' >FAVOURITE FOOD</NavLink></h3>
            <h3><NavLink className={classes.about} to='/aboutUs' >ABOUT US</NavLink></h3>
        </div>
    )
}

export default Footer;