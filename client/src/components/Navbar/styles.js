import { makeStyles, alpha } from "@material-ui/core";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  // const theme = useTheme();
  offset: theme.mixins.toolbar,
  color: "white",
  grow: {
    flexGrow: 1,
  },
  carrito: {
    color: "orange",
  },
  button: {
    color: "orange",
    width: "100px",
    height: "40px",
  },
  prueba: {
    backgroundColor:'black',
    color: "white",
    display:'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '97% '  
  },
  home: {
    color: "orange",
    width: "100px",
    height: "40px",
  },
  itemLeft: {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  MuiButtonLabel: {
    color: "orange",
    textDecoration: "none",
    fontSize: "20px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  homeIcon: {
    marginRight: theme.spacing(2),
  },
  toolbarButtons: {    
    display: 'flex', 
    alignItems: 'center',

  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: "orange",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
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
  shiftTextLeft: {
    marginLeft: "0px",
  },
  shiftTextRight: {
    marginLeft: drawerWidth,
  },
  totalCarrito: {
    display: "flex",
    flexDirection: "column",
  },
  appBar: {
    backgroundColor:'black'
  }
}));

export default useStyles;