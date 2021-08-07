import React, { useState, useEffect } from 'react';
import {  createProduct } from '../../Redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';



const Form = () => {

    const dispatch = useDispatch();
    // const allCategories = useSelector((state) => state.allCategories);

 
   

    const [input, setInput] = useState({
        name: '',
        type: '',
        identifier: '',
        image: '',
        price: '',
        description: '',
        stock: false,
        categories: [] 

       });

       const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(input);
        createProduct(input);
        setInput({
            name: '',
            type: '',
            identifier: '',
            image: '',
            price: '',
            description: '',
            stock: true,
            categories: ['Hamburguesas', 'Bebidas', 'Sandwich', 'Guarnición'] 
        });
    };   


    const handleInputChange = function(e) {  
          setInput({
            ...input,
            [e.target.name]: e.target.value
          });
        
    }    

    return (
        <div>
            <h1>Create Product!</h1>
            <form onSubmit={handleSubmit}>
            <div>
              <h1>Create <span>Product</span></h1>
              <label>Name:</label>
              <br></br>
              <input  type="text" name="name" onChange={handleInputChange} value={input.name} required />
              </div>

              <div>
              <label>Type:</label>
              <br></br>
              <input  type="text" name="type" onChange={handleInputChange} value={input.type} required />
              </div>
                
              <div>
              <label>Identifier:</label>
              <br></br>
              <input  type="text" name="identifier" onChange={handleInputChange} value={input.identifier} required />
              </div>
             
              <div>
              <label>Image:</label>
              <br></br>
              <input  type="text" name="image" onChange={handleInputChange} value={input.image} required />
              </div>
              
                  
              <div>
              <label>Price:</label>
              <br></br>
              <input  type="text" name="price" onChange={handleInputChange} value={input.price} required />
              </div>   

              <div>
              <label>Description:</label>
              <br></br>
              <input  type="text" name="description" onChange={handleInputChange} value={input.description} required />
              </div>   
               
               
              <div>
              <label>Stock:</label>
              <br></br>
              <input  type="text" name="stock" onChange={handleInputChange} value={input.stock} required />
              </div>   

                  
              {/* <div>
              <label>categories:</label>
              <br></br>
              <input  type="text" name="categories" onChange={handleInputChange} value={input.categories} required />
              <option value='null'>null</option>
              <select>
              {input.categories && input.categories.map(c => (
                <option value = {c.id} name = {c.name}>{c.name}</option>
              ))}
              </select>

              </div>    */}
              <button className= "btn-create" onClick={()=>dispatch(createProduct(input))}>CREATE</button>


            </form>

            
        </div>
    )
}


export default Form;
