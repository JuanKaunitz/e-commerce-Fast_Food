import { Grid } from '@material-ui/core';
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
            <Grid>
           {               
            categories?.map((c) => (
                <p>{c.name}</p> 
            ))             
               
           }  

            </Grid>
        </div>
    )
}

export default Category
