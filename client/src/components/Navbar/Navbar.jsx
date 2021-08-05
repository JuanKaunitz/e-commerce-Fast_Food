import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, alpha, makeStyles, Button, IconButton, Input } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search'

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
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
}));








const Navbar = () => {
    const [name, setName] = useState('')
    const classes = useStyles()

    const handleInputChange = (e) => {        
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    const onClickHandler = (e) => {
        e.preventDefault()
        console.log(name)    
    }
    const onClickXHandler = (e) => {
        e.preventDefault()      
    }

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

                <div className={classes.search}>
                {/* <div className={classes.searchIcon}>
                    <SearchIcon />
                </div> */}
                <form className={classes.root} noValidate autoComplete="off">  
                    <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description'}} 
                        value={name} onChange={(e) => {handleInputChange(e)}} /> 
                    <button onClick={(e) => {onClickHandler(e)}} type="submit" >Search</button>
                    <button onClick={(e) => {onClickXHandler(e)}} >X</button>
                </form>
                
                </div>

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