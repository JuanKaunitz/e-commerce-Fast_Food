import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getUpdateCategory,createNewType } from "../../Redux/actions/actions";
import { Button, Typography } from "@material-ui/core";
import useStyles from "./styles";

export default function AdminCategoryDetail(props) {
  const categoryEdit = useSelector((state) => state.editCategory);
  const categories = useSelector((state) => state.allCategories);

  const classes = useStyles();
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const [type, setType] = useState({
    name:''
  });
  const [input, setInput] = useState({
    name: "",
    image: "",
  });

  const selectedCategory = categories.filter((e) => e._id === id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInput(input);
    dispatch(createNewType(type))
    dispatch(getUpdateCategory(id, input));
    props.history.push("/adminCategories");
  };

  const handleTypeChange = function (e) {
    setType({
      ...type,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div className={classes.form_content}>
      <Typography variant="h2" >
      Edit your product
      </Typography>

      {input.length !== 0 ? (
        <form onSubmit={handleSubmit}>
          <div className={classes.form_group}>
            <Typography>Name:</Typography>
            <input
              className={classes.input_items}
              type="text"
              name="name"
              onChange={handleInputChange}
              defaultValue={selectedCategory[0].name}
              required
            />
          </div>
          <div className={classes.form_group}>
            <Typography>Image:</Typography>
            <input
              src={categoryEdit.image}
              alt={input.name}
              name="image"
              style={{ width: 200 }}
              defaultValue={selectedCategory[0].image}
              onChange={handleInputChange}
            />
          </div>

          <Typography>Change your types!</Typography>

          <div className={classes.form_group}>
            <input
              className={classes.input_items}
              type="text"
              name='name'
              value={type.name}
              onChange={handleTypeChange}
              required
            />
          </div>

          <Button className={classes.btn_save} color='primary' type="submit">
            Save
          </Button>
        </form>
      ) : (
        <p>cargando</p>
      )}
    </div>
  );
}
