import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabsBtn from "./Tabs_btn";
import { getAllProducts, getCategories } from "../../Redux/actions/actions";
import { makeStyles } from "@material-ui/core/styles";
import "./AdminPanel.css";
import { allUsers } from "../../Redux/actions/actions";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#a18722',
      padding: 0,
    },
  }));
  
export default function AdminPanel() {
  const dispatch = useDispatch();
  const classes = useStyles(); 
    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getCategories());
        dispatch(allUsers())
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
    <div className="list">
     
      <h1 className="list">Welcome to the your admin panel </h1>
   
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
        <Tab label='Orders Panel' {...a11yProps(5)} />
      </Tabs>
      <TabsBtn  value={value} setValue={setValue} />
    </div>
  );
}
