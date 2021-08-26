import React, { useState, useEffect } from "react";
import { createCategory } from "../../Redux/actions/actions";
import { useDispatch } from "react-redux";
import { getCategories } from "../../Redux/actions/actions";
import Typography from '@material-ui/core/Typography';
import { Button, TextField } from "@material-ui/core";
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  group:{
    // blackgroundColor:'black',
    display:'flex',
    flexDirection: 'column',
    margin:'5px',
  maxWidth:500,

},
  items:{
  cursor: 'pointer',
  width:'80%',
  fontSize: '25px',
  backgroundColor: 'white',
  boxShadow: '3px 4px 8px #0864B11A',
  // border: '1.5px solid #616060',
},
  content:{
  maxWidth:500,
  padding:50,
  margin:'auto',
  backgroundColor:'white',
  borderRadius:10,
  
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
      <Typography variant='h4' color ="textPrimary" >
        Create a new category
      </Typography>

      <form onSubmit={handleSubmit}>
        <div className={classes.group}>
          <Typography  color ="textPrimary">Name:</Typography>
          <TextField
            className={classes.items}
            variant="outlined"
            fullWidth
            type="text"
            name="name"
            onChange={handleInputChange}
            value={input.name}
            required
          />
        </div>

        <div className={classes.group}>
          <Typography  color ="textPrimary">Image:</Typography>
          <TextField
            className={classes.items}
            variant="outlined"
            type="text"
            name="image"
            onChange={handleInputChange}
            value={input.image}
          />
        </div>

        <div className={classes.group}>
          <Typography  color ="textPrimary">Type 1:</Typography>
          <TextField
            className={classes.items}
            variant="outlined"
            type="text"
            name="type1"
            rows="5"
            onChange={handleTypeChange}
            required
          />
        </div>

        <div className={classes.group}>
          <Typography  color ="textPrimary">Type 2:</Typography>
          <TextField
            className={classes.items}
            variant="outlined"
            type="text"
            name="type2"
            rows="5"
            onChange={handleTypeChange}
            required
          />
        </div>

        <div className={classes.group}>
          <Typography  color ="textPrimary">Type 3:</Typography>
          <TextField
            className={classes.items}
            variant="outlined"
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
