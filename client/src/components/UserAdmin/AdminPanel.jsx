import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabsBtn from "./Tabs_btn";
import { getAllProducts, getCategories } from "../../Redux/actions/actions";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { allUsers } from "../../Redux/actions/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    // position: 'absolute',
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
    backgroundColor: "black",
    color: "orange",
    alignItems: "center",
    textAlign: "center",
    marginTop:100
  },
  list: { 
    padding: "20px",
    display:'flex',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "white",
  },
}));

export default function AdminPanel() {
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getCategories());
    dispatch(allUsers());
  }, [dispatch]);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid cointaner>
      <Grid item lg={12} md={6} xs={12}>
        {/* <div className="list"> */}
          <Tabs
            className={classes.root}
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Products Panel" {...a11yProps(0)} />
            <Tab label="Clients Panel" {...a11yProps(1)} />
            <Tab label="New Categoria" {...a11yProps(2)} />
            <Tab label="New Product" {...a11yProps(3)} />
            <Tab label="Categories Panel" {...a11yProps(4)} />
            <Tab label="Orders Panel" {...a11yProps(5)} />
          </Tabs>
          <TabsBtn value={value} setValue={setValue} />
        {/* </div> */}
      </Grid>
    </Grid>
  );
}
