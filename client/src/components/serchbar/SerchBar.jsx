import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@material-ui/core";
import { searchQueryProducts } from "../../Redux/actions/actions";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { ReactComponent as SearchButton } from "../../assets/149852.svg";
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
  searchbar: {
    width: '50%',
  }
}));

const SerchBar = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  console.log(name)
  const [search, setSearch] = useState(false);
  const globalState = useSelector((state) => state.getProducts);
  const classes = useStyles();

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
    <div className={classes.searchbar}>
    <SearchBar>
      <form onSubmit={onClickXHandler}>
        <Input
          placeholder="Buscar.."
          inputProps={{ "aria-label": "description" }}
          value={name}
          autoComplete="on"
          onChange={(e) => setName(e.target.value)}
          />

        <input
          name="searchBarButton"
          type="submit"
          value="asd"
          />
      </form>
    </SearchBar>
    </div>
  );
};

export default SerchBar;
