import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@material-ui/core";
import {
  searchQueryProducts, loading
} from "../../Redux/actions/actions";
import styles from "./styles.module.css"
import {ReactComponent as SearchButton} from '../../assets/149852.svg'

const SerchBar = () => {
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
    dispatch(loading())
     //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const onClickXHandler = (e) => {
    e.preventDefault();
    searchProduct();
    // setSearch(false);
  };
  return (
    <div className={styles.searchBarMainContainer}>
      <form onSubmit={onClickXHandler}>
        <div className={styles.buttonSearchContainer}>
        <Input className={styles.inputBox} placeholder="Buscar.."
          inputProps={{ "aria-label": "description" }}
          
          autoComplete='on'
          onChange={(e) => setName(e.target.value)}
        />
        <div className={styles.backgroundSearchButton}>
        <SearchButton className={styles.searchIcon} />
        </div>

        <input className={styles.inputBtn} name="searchBarButton" type='submit' value="asd" />
      </div>
      </form>
    </div>
  );
};

export default SerchBar;
