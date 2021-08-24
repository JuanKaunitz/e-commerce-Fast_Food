import React from 'react'
import { Link } from 'react-router-dom';


const Option = () => {

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br /><br /><br /><br /><br />
            <h1>How would you like to get your order?</h1>
             <Link to="/shipping">
             <button>Ship to your location</button>
             </Link>
             <Link to="/maps"> 
             <button>Pick up at the store</button>
             </Link>
        </div>
    )
}

export default Option;
