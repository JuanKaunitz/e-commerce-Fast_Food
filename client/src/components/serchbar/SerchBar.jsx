import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@material-ui/core";
import {
  searchQueryProducts,
} from "../../Redux/actions/actions";
import useStyles from '../Navbar/styles';


const SerchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [search, setSearch] = useState(false);
const globalState = useSelector(state => state.getProducts)

  

  
  function searchProduct() {
    dispatch(searchQueryProducts(name));
    setSearch(true);
  } 
 
  useEffect(() => {
    if (name.length > 0) {
      searchProduct();
    }
     //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalState]);

  const onClickXHandler = (e) => {
    e.preventDefault();
    searchProduct();
    // setSearch(false);
  };
  return (
    <div className={classes.search}>
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
     
      </form>
    </div>
  );
};

export default SerchBar;