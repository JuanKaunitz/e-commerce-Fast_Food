
  
import React from 'react';
import {NavLink} from 'react-router-dom';
import Style from './Footer.module.css';



function Footer(){
    return(
      <div className={Style.container}>   
          
            <h3 className={Style.fast}>© 2021 FAST FOOD</h3>
            <h3><NavLink className={Style.comida} to='/' >LA COMIDA QUE TE GUSTA</NavLink></h3>
            <h3><NavLink className={Style.about2} to='/aboutUs' >ABOUT US</NavLink></h3>
        </div>
    )
}

export default Footer;