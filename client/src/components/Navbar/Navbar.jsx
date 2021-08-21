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
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import SerchBar from "../serchbar/SerchBar";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  categoryName,
  changeStatus,
  totalProductosCarrito,
  updateCart
} from "../../Redux/actions/actions";

export const Navbar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const categories = useSelector((state) => state.allCategories);
  const totalCarrito = useSelector((state) => state.totalCarrito);
  const adminClient = useSelector((state) => state.client);

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
    const id = adminClient._id;
    dispatch(changeStatus(id, input));
    localStorage.removeItem("order"); 
    dispatch(totalProductosCarrito(0));
    dispatch(updateCart([]));
   }

  return (
    <div>
      <div>
        <AppBar className={classes.prueba}>
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
            {/* <Typography variant="h5" >Home</Typography> */}
            <Button>
              <NavLink className={classes.MuiButtonLabel} to="/aboutUs">
                About Us
              </NavLink>
            </Button>
            <SerchBar />
            <div className={classes.toolbarButtons}>
              {adminClient.role === "ADMIN" && adminClient.status === true ? (
                <NavLink
                  className={classes.MuiButtonLabel}
                  to="/AdminPanel"
                  activeClassName="active"
                >
                  Admin Panel
                </NavLink>
              ) : null}

              <IconButton aria-label="add to shopping cart">
                <NavLink
                  className={classes.MuiButtonLabel}
                  to="/cart"
                  activeClassName="active"
                >
                  <Typography>{totalCarrito}</Typography>
                  <AddShoppingCartIcon />
                </NavLink>
              </IconButton>

              {adminClient.status === undefined ? (
                <Button color="inherit">
                  <NavLink
                    className={classes.MuiButtonLabel}
                    to="/register"
                    activeClassName="active"
                  >
                    LOGIN
                  </NavLink>
                </Button>
              ) : (
                <Button color="inherit" onClick={handleLogout}>
                  <NavLink
                    className={classes.MuiButtonLabel}
                    to="/"
                    activeClassName="active"
                  >
                    LOGOUT
                  </NavLink>
                </Button>
              )}

              <Button color="inherit">
                <NavLink
                  className={classes.MuiButtonLabel}
                  to="/formregister"
                  activeClassName="active"
                >
                  REGISTER
                </NavLink>
              </Button>
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
          {categories.map((e) => (
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
