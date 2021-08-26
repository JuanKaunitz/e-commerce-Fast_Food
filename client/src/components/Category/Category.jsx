import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../Redux/actions/actions";

const Category = () => {
  const categories = useSelector((state) => state.allCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!categories){
      dispatch(getCategories());
    }
  }, [dispatch]);

  return (
    <div>
      {categories?.map((c,_id) => (
        <p key={_id}>{c.name}</p>
      ))}
    </div>
  );
};

export default Category;
