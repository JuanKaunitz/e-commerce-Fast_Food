import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../Redux/actions/actions';


const Category = () => {
    const categories = useSelector((state) => state.allCategories);
    console.log('CATEGORIES: ', categories);
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <div>
           {
               
            categories[0]?.Hamburguesas.map((c) => (
                <p>{c.name}</p> 
            ))

            
               
               
           }  
        </div>
    )
}

export default Category
