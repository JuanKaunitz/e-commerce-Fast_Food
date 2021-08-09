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
              src="https://www.infobae.com/new-resizer/1YkLtqEyhWFdpQ9XjJVCUrBgrm0=/1200x900/filters:format(jpg):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg"
            />
            <Link to={'/categories'}  onClick={() => categoryHamburguesa(item.name)} >{item.name}</Link>
          </div>
        );
      })}

    
    </div>
  );
};

export default Gallery;
