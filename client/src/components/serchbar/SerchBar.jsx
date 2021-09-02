import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchQueryProducts, loading} from "../../Redux/actions/actions";
import styles from "./styles.module.css";
import { ReactComponent as SearchButton } from "../../assets/149852.svg";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SerchBar = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [search, setSearch] = useState(false);
  const allProducts = useSelector((state) => state.getProducts);


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

 
  
  return (
    <div className={styles.searchBarMainContainer}>
        <div className={styles.buttonSearchContainer}>
          <Autocomplete
            id="combo-box-demo"
            options={allProducts}
            getOptionLabel={(option) => option.name}
            style={{ width: 300, backgroundColor:'white'}}
            renderInput={(params) => (
              <TextField 
              {...params} 
              label="Search" 
              variant="outlined" 
              onChange={(e) => setName(e.target.value)}
            
              />
            )}
          />
          <div className={styles.backgroundSearchButton}>
            <SearchButton className={styles.searchIcon} />
          </div>
        </div>
    </div>
  );
};

export default SerchBar;
