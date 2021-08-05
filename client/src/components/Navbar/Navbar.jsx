import React from 'react'
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    grow: {
        flexGrow: 1,
    },
    homeIcon: {
    marginRight: theme.spacing(2),
    },
    toolbarButtons: {
        marginLeft: 'auto',
      },
}));

const Navbar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar>
              <Toolbar>
              <IconButton aria-label="delete" className={classes.homeIcon}>
                <NavLink className='a' to="/home" activeClassName="active" ><HomeIcon /></NavLink>
                
              </IconButton>

                <Typography variant='h6'>
                    Home
                </Typography>

                <Button color="inherit" >
                    <NavLink className='a' to="/aboutUs" activeClassName="active" >About Us</NavLink>
                </Button>

                <Typography variant='h6'>
                    Aca va la searchBar
                    </Typography>
                <div className={classes.toolbarButtons}>
                    <IconButton  aria-label="add to shopping cart">
                        <NavLink className='a' to="/cart" activeClassName="active" ><AddShoppingCartIcon /></NavLink>                        
                    </IconButton>

                    <Button color="inherit" >
                    <NavLink className='a' to="/register" activeClassName="active" >Register</NavLink>
                    </Button>
                    <Button color="inherit" className={classes.loginButton} >
                        <NavLink className='a' to="/login" activeClassName="active" >Login</NavLink>
                    </Button>
                    
                </div>
              </Toolbar>
            </AppBar>
            <div className={classes.offset} /> 
            </div>        
    )
}

export default Navbar