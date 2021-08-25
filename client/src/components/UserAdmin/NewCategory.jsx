import React, { useState, useEffect } from "react";
import { createCategory } from "../../Redux/actions/actions";
import { useDispatch } from "react-redux";
import { getCategories } from "../../Redux/actions/actions";
import Typography from '@material-ui/core/Typography';
import { Button, TextField } from "@material-ui/core";
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  group:{
    blackgroundColor:'black',
    display:'flex',
    flexDirection: 'column',
    margin:'5px',
},
  items:{
  cursor: 'pointer',
  width:'80%',
  fontSize: '25px',
  backgroundColor: 'aliceblue',
  boxShadow: '3px 4px 8px #0864B11A',
  border: '1.5px solid #616060',
},
  content:{
  maxWidth:1024,
  paddingLeft:40,
  margin:'auto',
  backgroundColor:'black',
  borderRadius:10,
  padding:5
  
 },
  save:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    color:'white',
    backgroundColor:'orange'
  },
  save1:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  }

}));
const NewCategory = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    image: "",
    types: [],
  });

  const [type, setType] = useState({
    type1: "",
    type2: "",
    type3: "",
  });


  const saveCategory = () => {
    console.log("INPUT: ", input);
    dispatch(createCategory(input));
  };

  const typesCategory = () => {
    input.types.push({ name: type.type1 });
    input.types.push({ name: type.type2 });
    input.types.push({ name: type.type3 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    typesCategory();
    console.log("INPUT-SUBMIT: ", input);
    setInput(input);
    saveCategory();
    props.history.push("/adminCategories");
  };

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleTypeChange = function (e) {
    setType({
      ...type,
      [e.target.name]: e.target.value,
    });
  };

  return (
  
    <div className={classes.content}>
      <Typography variant="h4" component="h2">
        Create a new category
      </Typography>

      <form onSubmit={handleSubmit}>
        <div className={classes.group}>
          <label>Name:</label>
          <TextField
            className={classes.items}
            type="text"
            name="name"
            onChange={handleInputChange}
            value={input.name}
            required
          />
        </div>

        <div className={classes.group}>
          <label>Image:</label>
          <TextField
            className={classes.items}
            type="text"
            name="image"
            onChange={handleInputChange}
            value={input.image}
          />
        </div>

        <div className={classes.group}>
          <label>Type 1:</label>
          <TextField
            className={classes.items}
            type="text"
            name="type1"
            rows="5"
            onChange={handleTypeChange}
            required
          />
        </div>

        <div className={classes.group}>
          <label>Type 2:</label>
          <TextField
            className={classes.items}
            type="text"
            name="type2"
            rows="5"
            onChange={handleTypeChange}
            required
          />
        </div>

        <div className={classes.group}>
          <label>Type 3:</label>
          <TextField
            className={classes.items}
            type="text"
            name="type3"
            rows="5"
            onChange={handleTypeChange}
            required
          />
        </div>
        <div className={classes.save1}>
        <Button className={classes.save} type="submit">
          CREATE
        </Button>
        </div>
      </form>
    </div>
  );
};

export default NewCategory;
