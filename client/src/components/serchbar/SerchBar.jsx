import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Input } from "@material-ui/core";
import {
  getAllProducts,
  searchQueryProducts,
} from "../../Redux/actions/actions";
import useStyles from '../Navbar/styles';


const SerchBar = () => {
    const classes = useStyles();

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  console.log(name)
  const [search, setSearch] = useState(false);
  

  
  function searchProduct() {
    dispatch(searchQueryProducts(name));
    setSearch(true);
  } 
 
  useEffect(() => {
    if (name.length > 0) {
      searchProduct();
    }else{
      getAllProducts()
    }
     //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const onClickXHandler = (e) => {
    e.preventDefault();
    searchProduct();
    // setSearch(false);
  };
  return (
    <div className={classes.search}>
      {/* <div className={classes.searchIcon}>
            <SearchIcon />
        </div> */}
      <form className={classes.root} onSubmit={onClickXHandler}>
        <Input
          placeholder="Buscar.."
          inputProps={{ "aria-label": "description" }}
          value={name}
          autoComplete='on'
          onChange={(e) => setName(e.target.value)}
        />
        <button 
          type="submit"
        >
          Search
        </button>
        {/* <button className={classes.ocultarBtn}
          onClick={(e) => {
            onClickXHandler(e);
          }}
        >
          GoBack
        </button> */}
      </form>
    </div>
  );
};

export default SerchBar;