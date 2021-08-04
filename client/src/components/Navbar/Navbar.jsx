import React from 'react'
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
                <HomeIcon />
              </IconButton>

                <Typography variant='h6'>
                    Home
                </Typography>

                <Button color="inherit" >About Us</Button>

                <Typography variant='h6'>
                    Aca va la searchBar
                    </Typography>
                <div className={classes.toolbarButtons}>
                    <IconButton  aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>

                    <Button color="inherit" >Registrate</Button>
                    <Button color="inherit" className={classes.loginButton} >Login</Button>
                </div>
              </Toolbar>
            </AppBar>
            <div className={classes.offset} /> 
            </div>        
    )
}

export default Navbar