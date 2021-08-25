import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Gallery.css";
import { getCategories, categoryName } from "../../Redux/actions/actions";
import Carousel from 'react-elastic-carousel';

const Gallery = () => {
  const dispatch = useDispatch();
  const categoria = useSelector((state) => state.allCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  function categoryHamburguesa(name) {
    dispatch(categoryName(name));
  }
const breakPoints = [
  {width:500,itemsToShow:2},
  {width:800,itemsToShow:3},
  {width:1000,itemsToShow:4},
  {width:1200,itemsToShow:5}
]

  return (
    <div className="Grid-Categorias">
      <Carousel breakPoints={breakPoints}>
      {categoria?.map((item) => {
        return (
          <div className='Grid-Item'  key={item._id}>
            <img
              className="img1"
              alt={item.name}
              src={item.image}
              
              />
            <Link to={'/categories'}  onClick={() => categoryHamburguesa(item.name)} >{item.name}</Link>
          </div>
        );
      })}
      </Carousel>

    
    </div>
  );
};

export default Gallery;