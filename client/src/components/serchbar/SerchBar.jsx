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
  const [search, setSearch] = useState(false);
  function searchProduct() {
    dispatch(searchQueryProducts(name));
  }

  useEffect(() => {
    if (search) {
      searchProduct();
    }
     //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search,searchProduct]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    setSearch(true);
  };
  const onClickXHandler = (e) => {
    e.preventDefault();
    dispatch(getAllProducts());
    setSearch(false);
  };
  return (
    <div className={classes.search}>
      {/* <div className={classes.searchIcon}>
            <SearchIcon />
        </div> */}
      <form className={classes.root}>
        <Input
          placeholder="Buscar.."
          inputProps={{ "aria-label": "description" }}
          value={name}
          autoComplete='on'
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <button
          onClick={(e) => {
            onClickHandler(e);
          }}
          type="submit"
        >
          Search
        </button>
        <button
          onClick={(e) => {
            onClickXHandler(e);
          }}
        >
          GoBack
        </button>
      </form>
    </div>
  );
};

export default SerchBar;
