import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    color: "orange",
  },
}));

export default function Profile({ handleLogout }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const avatar = useSelector((state) => state.client);
  //const history = useHistory()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    //history.push('/myAcount')
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOut = () => {
    handleLogout();
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <div className={classes.avatar}>
          <Avatar alt={avatar.name} src={avatar.image} />
          <p>Hi, {avatar.name}</p>
        </div>
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>{avatar.email}</MenuItem>
        <Link style={{ textDecoration: "none", color: "black" }} to="/myAcount">
          <MenuItem onClick={handleClose}>My account</MenuItem>{" "}
        </Link>
        <MenuItem onClick={handleOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
