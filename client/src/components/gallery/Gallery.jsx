import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Gallery.css";
import { getCategories, categoryName } from "../../Redux/actions/actions";

const Gallery = () => {
  const dispatch = useDispatch();
  const categoria = useSelector((state) => state.allCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  function categoryHamburguesa(name) {
    dispatch(categoryName(name));
  }


  return (
    <div className="Grid-Categorias">
      {categoria.map((item) => {
        return (
          <div className='Grid-Item'  key={item._id}>
            <img
              alt={item.name}
              src={item.image}
            />
            <Link to={'/categories'}  onClick={() => categoryHamburguesa(item.name)} >{item.name}</Link>
          </div>
        );
      })}

    
    </div>
  );
};

export default Gallery;