import React, { useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Divider,
  Drawer,
  useTheme,
  ListItem,
  ListItemText,
  List,
} from "@material-ui/core";
import SupervisorAccountSharpIcon from "@material-ui/icons/SupervisorAccountSharp";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import SerchBar from "../serchbar/SerchBar";
import Profile from "./Profile";
import Badge from "@material-ui/core/Badge";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  categoryName,
  changeStatus,
  orderRedux,
  totalProductosCarrito,
  updateCart,
  updateOrderFinal,  
} from "../../Redux/actions/actions";


export const Navbar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const categories = useSelector((state) => state.allCategories);
  const totalCarrito = useSelector((state) => state.totalCarrito);
  const adminClient = useSelector((state) => state.client);
  const token = useSelector((state) => state.clientToken);
  

  const [input, setInput] = useState({ status: false });

  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handlerCategory(name) {
    dispatch(categoryName(name));
  }

  function handleLogout() {
    if(localStorage.getItem('idOrderUser') && JSON.parse(localStorage.getItem('order'))){
      const idOrder = localStorage.getItem('idOrderUser');
      const orderCarrito = JSON.parse(localStorage.getItem('order'));
      const fecha = new Date();
      const order = {
        order: orderCarrito,
        status: "carrito",
        date: fecha.toUTCString(),
      }
      console.log("order para logout", order)
      dispatch(updateOrderFinal(idOrder, order))

    }

    const id = adminClient._id;
    dispatch(changeStatus(id, input));
    localStorage.removeItem("order");
    localStorage.removeItem("idOrderUser");
    dispatch(orderRedux({
      id: "",
      token: "",
      order: [],
      status: "",
      date: "",
    }));
    dispatch(totalProductosCarrito(0));
    dispatch(updateCart([]));    
   }

  return (
    <div>
      <div>
        <AppBar>
          <Toolbar className={classes.prueba}>
            <div className={classes.itemLeft}> 
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>

            <Link to="/">
                <HomeIcon className={classes.home} />
              </Link>
            {/* <Typography variant="h5" >Home</Typography> */}
            <Button className={classes.button} href="/aboutUs">
                About Us
              </Button>
            <SerchBar  />
            </div>
            
            <div className={classes.toolbarButtons}>
              {token && adminClient.role === "ADMIN" ? (
              <div>
              <IconButton color="inherit">
               <Link to="/AdminPanel">
              <SupervisorAccountSharpIcon className={classes.button} />
               </Link>
             </IconButton>
             </div>

              ) : null}

                {
                  totalCarrito > 0?
                  <IconButton
                  style={{ fontSize: 40 }}
                  aria-label="carrito"
                  backgroundColor="white"
                >
                  <Link to="/cart">
                    {" "}
                    <Badge badgeContent={totalCarrito} color="secondary">
                      <AddShoppingCartIcon className={classes.carrito} />
                    </Badge>
                  </Link>
                </IconButton>
      
                : 
                  <IconButton aria-label="add to shopping cart">
                    <NavLink
                      className={classes.MuiButtonLabel}
                      to="/"
                      activeClassName="active"
                    >
                      <Typography>{totalCarrito}</Typography>
                      <AddShoppingCartIcon />
                    </NavLink>
                </IconButton>
                }

              {!token? (
                <Button className={classes.button} href="/login">
                Login
              </Button>
              ) : (
                <Profile handleLogout={handleLogout}/>
               
              )}
               
            {
              token ? null 
              :
              <Button className={classes.button} href="/register">
                Register
              </Button>

            }
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer
        className={classes.drawer}
        variant={
          location.pathname === "/categories"
            ? /* "permanent" */ "persistent"
            : "persistent"
        }
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
          {categories?.map((e) => (
            <ListItem button key={e.name}>
              {/* <ListItemIcon></ListItemIcon> */}
              <Link to="/categories">
                <ListItemText
                  primary={e.name}
                  onClick={() => handlerCategory(e.name)}
                />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};