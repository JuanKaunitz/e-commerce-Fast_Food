import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Divider,
  Drawer,
  useTheme,
  ListItem,  
  ListItemText,
  List,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
//import SearchIcon from '@material-ui/icons/Search'
import useStyles from "./styles";
import SerchBar from "../serchbar/SerchBar";
import { useLocation, Link  } from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import { categoryName} from '../../Redux/actions/actions';

/* function HeaderView() {
  return <span>Path : {location.pathname}</span>
} */

const Navbar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  //const searchProducts = useSelector((state) => state.searchProducts);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const categories = useSelector((state) => state.allCategories)
  
  const location = useLocation();
    //console.log(location.pathname);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handlerCategory(name){
    console.log("NAME",name)
    if(name === 'Hamburguesas'){
      dispatch(categoryName('hamburguesa'))
    }
    if(name === 'Bebidas'){
      dispatch(categoryName('Bebidas'))
    }
    if(name === 'Combos'){
      dispatch(categoryName('Empanadas'))
    }
    if(name === 'Guarniciones'){
      dispatch(categoryName('Guarnicion'))
    }
    if(name === 'Sandwich'){
      dispatch(categoryName('Sandwich'))
    }
}

  return (
    <div>
      <div className={location.pathname === '/categories'? classes.shiftTextRight : classes.shiftTextLeft }>
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
              <NavLink className="a" to="/" activeClassName="active">
                <HomeIcon className={classes.MuiButtonLabel} />
              </NavLink>
            </IconButton>
            <Typography variant="h5">Home</Typography>
            <Button color="inherit">
              <NavLink className={classes.MuiButtonLabel} to="/aboutUs">
                About Us
              </NavLink>
            </Button>
            <SerchBar />
            <div className={classes.toolbarButtons}>
              <NavLink
                className={classes.MuiButtonLabel}
                to="/form"
                activeClassName="active"
              >
                Form
              </NavLink>
              <IconButton aria-label="add to shopping cart">
                <NavLink
                  className={classes.MuiButtonLabel}
                  to="/cart"
                  activeClassName="active"
                >
                  <AddShoppingCartIcon />
                </NavLink>
              </IconButton>
              <Button color="inherit">
                <NavLink
                  className={classes.MuiButtonLabel}
                  to="/register"
                  activeClassName="active"
                >
                  Register
                </NavLink>
              </Button>
              <Button color="inherit" className={classes.loginButton}>
                <NavLink
                  className={classes.MuiButtonLabel}
                  to="/login"
                  activeClassName="active"
                >
                  Login
                </NavLink>
              </Button>
            </div>
          </Toolbar>

        </AppBar>
      </div>
      <Drawer
        className={classes.drawer}
        variant={location.pathname === '/categories' ? /* "permanent" */"persistent" : "persistent" }
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {" "}
          {categories.map((e) => (
            <ListItem button key={e.name} >
              {/* <ListItemIcon></ListItemIcon> */}
              <Link to="/categories">
                <ListItemText primary={e.name} onClick={() => handlerCategory(e.name)}/>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.offset} />
    </div>
  );
};

export default Navbar;
