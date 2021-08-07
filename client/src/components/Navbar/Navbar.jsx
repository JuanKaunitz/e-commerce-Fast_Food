import React, { useState, useEffect } from 'react'
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, alpha, makeStyles, Button, IconButton, Input, Divider, Drawer, useTheme, ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//import SearchIcon from '@material-ui/icons/Search'
import { useDispatch } from 'react-redux';
import { getAllProducts, searchQueryProducts } from '../../Redux/actions/actions';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    grow: {
        flexGrow: 1,
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
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


const Navbar =  () => {

  const classes = useStyles() 

  const dispatch = useDispatch();
  //const searchProducts = useSelector((state) => state.searchProducts);
  const [name, setName] = useState('')
  const [search, setSearch] = useState(false);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  function searchProduct(name) {
      console.log('VER SI LLEGO A SEARCHPRODUCTS: ',name)      
      dispatch(searchQueryProducts(name))  
    }
  
    useEffect(() =>{
      if(search) {
          searchProduct(name)      
      } 
    }, [search, name]) 

  const handleInputChange = (e) => {        
      e.preventDefault()
      setName(e.target.value)
      console.log(name)
  }

  const onClickHandler = (e) => {
      e.preventDefault() 
      setSearch(true)           
  }
  const onClickXHandler = (e) => {
      e.preventDefault()  
      dispatch(getAllProducts()) 
      setSearch(false)    
      
  }

  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <IconButton aria-label="delete" className={classes.homeIcon}>
            <NavLink className='a' to="/" activeClassName="active" ><HomeIcon /></NavLink>          
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
                <button onClick={(e) => {onClickXHandler(e)}} >GoBack</button>
            </form>
          
          </div>

          <div className={classes.toolbarButtons}>
          <NavLink className='a' to="/form" activeClassName="active" >Form</NavLink>
            <IconButton  aria-label="add to shopping cart">
                <NavLink className='a' to="/cart" activeClassName="active" >
                  <AddShoppingCartIcon />
                </NavLink>                        
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
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List> {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
      </ListItem>
      ))}
      </List>
      </Drawer>
      <div className={classes.offset} /> 
    </div>        
  )
}

export default Navbar