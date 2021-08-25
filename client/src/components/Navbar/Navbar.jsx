import React, { useState } from "react";
import clsx from "clsx";
import { alpha, makeStyles } from "@material-ui/core/styles";
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
import { Grid } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import SupervisorAccountSharpIcon from "@material-ui/icons/SupervisorAccountSharp";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import SerchBar from "../serchbar/SerchBar";
import Profile from "./Profile";
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
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  MuiButtonLabel: {
    backgroundColor: "orange",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  home: {
    color: "orange",
    width: "100px",
    height: "40px",
  },
  root: {
    background: "black",
    borderRadius: 3,
    width: "10px",
    height: 40,
    border: 0,
    color: "white",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  search: {
    position: "fixed",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  carrito: {
    color: "orange",
  },
  button: {
    color: "orange",
  },
  grid: {
    justifyContent: "strech",
    display: "grid",
    justify: "start",
    textAlign: "center",
    padding: "20px",
    border: "black 5px solid",
    width: "100%",
  },
  link: {
    width: "auto",
    position: "auto",
    justifyContent: "strech",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    // margin:'auto',
    alignContent: "space-between",
    flexGrow: "1",
    flexDirection: "initial",
    marginLeft: "30%",
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
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
    if (
      localStorage.getItem("idOrderUser") &&
      JSON.parse(localStorage.getItem("order"))
    ) {
      const idOrder = localStorage.getItem("idOrderUser");
      const orderCarrito = JSON.parse(localStorage.getItem("order"));
      const fecha = new Date();
      const order = {
        order: orderCarrito,
        status: "carrito",
        date: fecha.toUTCString(),
      };
      console.log("order para logout", order);
      dispatch(updateOrderFinal(idOrder, order));
    }

    const id = adminClient._id;
    dispatch(changeStatus(id, input));
    localStorage.removeItem("order");
    localStorage.removeItem("idOrderUser");
    dispatch(
      orderRedux({
        id: "",
        token: "",
        order: [],
        status: "",
        date: "",
      })
    );
    dispatch(totalProductosCarrito(0));
    dispatch(updateCart([]));
  }

  return (
    <div className={classes.row}>
      <AppBar position="fixed" style={{ backgroundColor: "black" }}>
        <Grid container direction="row">
          <Grid items lg={8} xl={4} md={8} xs={10}>
            <Toolbar></Toolbar>
            <Button
              font-family="sans-serif"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.root)}
            >
              <MenuIcon />
            </Button>
            <Grid />
            <Link to="/">
              <HomeIcon className={classes.home} />
            </Link>
            <Button className={classes.button} href="/aboutUs">
              About Us
            </Button>
            <SerchBar />
            <div className={classes.toolbarButtons}>
              {token && adminClient.role === "ADMIN" ? (
                <NavLink
                  className={classes.MuiButtonLabel}
                  to="/AdminPanel"
                  activeClassName="active"
                >
                  Admin Panel
                </NavLink>
              ) : null}

              {totalCarrito > 0 ? (
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
              ) : (
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
              )}

              {!token ? (
                <Button color="inherit">
                  <NavLink
                    className={classes.MuiButtonLabel}
                    to="/login"
                    activeClassName="active"
                  >
                    LOGIN
                  </NavLink>
                </Button>
              ) : (
                <Profile handleLogout={handleLogout} />
              )}

              <Button color="inherit">
                <NavLink
                  className={classes.MuiButtonLabel}
                  to="/register"
                  activeClassName="active"
                >
                  REGISTER
                </NavLink>
              </Button>
            </div>
          </Grid>
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
        </Grid>
      </AppBar>
    </div>
  );
};
