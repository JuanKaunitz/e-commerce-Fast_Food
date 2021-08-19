import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, getUpdateCategory,createNewType } from "../../Redux/actions/actions";
import useStyles from "./styles";
import { Link } from "react-router-dom";

export default function AdminCategoryDetail(props) {
  const categoryEdit = useSelector((state) => state.editCategory);
  const categories = useSelector((state) => state.allCategories);
  const types = useSelector((state) => state.types);

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
  console.log("arrayFilter: ", selectedCategory);


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

  console.log("INPUT", input)

  return (
    <div className={classes.form_content}>
      <h1>Edit your product</h1>

      <Link to="/adminPanel">
        {" "}
        <button>Admin Panel</button>
      </Link>
      <Link to="/clients">
        {" "}
        <button>Clients Panel</button>
      </Link>
      <Link to="/adminCategories">
        {" "}
        <button>Categories Panel</button>
      </Link>
      {input.length !== 0 ? (
        <form onSubmit={handleSubmit}>
          <div className={classes.form_group}>
            <label>Name:</label>
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
            <label>Image:</label>
            <input
              src={categoryEdit.image}
              alt={input.name}
              name="image"
              style={{ width: 200 }}
              defaultValue={selectedCategory[0].image}
              onChange={handleInputChange}
            />
          </div>

          <h4>Change your types!</h4>

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

          <button className={classes.btn_save} type="submit">
            Save
          </button>
        </form>
      ) : (
        <p>cargando</p>
      )}
    </div>
  );
}
