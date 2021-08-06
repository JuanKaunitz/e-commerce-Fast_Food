import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, alpha, makeStyles, Button, IconButton, Input } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, searchQueryProducts } from '../../Redux/actions/actions';

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
        display: 'flex',
        alignItems: 'center',
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
        //position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      boton: {
        backgroundColor: '#3f51b5',
        border: 'none',
        height: '50px',

      }
}));


const Navbar =  () => {

  const classes = useStyles() 

    const dispatch = useDispatch();
    //const searchProducts = useSelector((state) => state.searchProducts);
    const [name, setName] = useState('')
    const [search, setSearch] = useState(false);


    function searchProduct(name) {
        console.log('VER SI LLEGO A SEARCHPRODUCTS: ',name)      
        dispatch(searchQueryProducts(name))  
      }
    
    /* useEffect(() =>{
      if(search) {
          searchProduct(name)      
      } 
    }, [search, name])  */

    const handleInputChange = (e) => {        
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    const onClickHandler = (name) => {
        searchProduct(name);
        setSearch(true)           
    }
    /* const onClickXHandler = (e) => {
        e.preventDefault()  
        dispatch(getAllProducts()) 
        setSearch(false)    
        
    }
 */
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
                  <form className={classes.root} >  
                    <div className={classes.searchIcon}>
                      <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description'}} 
                          value={name} onChange={(e) => {handleInputChange(e)}} /> 

                        <button className={classes.boton} onClick={(e) => onClickHandler(e)} type='button'>                      
                          {/* <SearchIcon /> */} search
                        </button>  
                    </div>                     
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