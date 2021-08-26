import React from "react";
import UseStyles from './styles.js'
import './About.css';
import { Link } from "react-router-dom";


const aboutUs = () => {
  const classes = UseStyles()
  return (
    <div  className = 'about'>
      <h1 className = 'h1'>Ecommerce fast food</h1>
      <h1 className = {classes.title}>¿WHO WE ARE?</h1>
      <p className={classes.color}>
        Somos un grupo de 7 integrantes los cuales nos encontramos cursando el
        bootcamp HENRY en la etapa final denominada 'Proyecto Grupal', la cual
        consiste en crear un Ecommerce con diversas requisitos y
        funcionalidades. <br></br>Nosotros decidimos realizar una app de fast food, en la
        cual se pueden observar los productos disponibles, observando sus
        detalles, su rating y su precio, con la opcion de poder seleccionarlos y
        agregarlos al carrito. <br></br>Por otro lado realizamos 3 opciones de loggeo,
        una como administrador, para poder modificar el contenido de la pagina,
        una como usuario invitado, que puede navegar por la pagina web utilizar
        la barra de busqueda entre otras funcionalidades y por ultimo un usuario
        registrado o la opción de poder regstrarse para poder realizar compras.
      </p>
      <div className= 'cards'>
       <div className={classes.listItem}>
       <Link  to= {{
         pathname:'https://www.linkedin.com/in/jose-alberto-carballo-rojas/'
       }} target='_blank'>
      Jose A.Carballo Rojas
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGXPu_dVhOQZg/profile-displayphoto-shrink_200_200/0/1627651344866?e=1634169600&v=beta&t=zmrvLWZrw-9nACfWtXBiola_6CAizvhtGOauAOzKANk" style={{width:150}}  alt="img not found"/>
      </Link>
       </div>
       <div className={classes.listItem}>
       <Link  to= {{
         pathname:'https://www.linkedin.com/in/facundo-duartes-dev/' 
       }} target='_blank'>
         Facundo Duartes
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF_Br2Yl0voDQ/profile-displayphoto-shrink_800_800/0/1627603348548?e=1634169600&v=beta&t=Slfo5B7abjDCFMh6exaxcwupHeAaHCucCZOStEWUlzs" style={{width:150}} alt="img not found"/>
        </Link>
        </div>
        <div className={classes.listItem}>
       <Link  to= {{
         pathname:'https://www.linkedin.com/in/lucas-di-caro' 
       }}target='_blank'>
         Lucas Di Caro
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQH63CHkBHWSXw/profile-displayphoto-shrink_800_800/0/1619971645987?e=1634169600&v=beta&t=e8AU47KiFGFbrN9GsXSO1DlrW3H7TK-XW06mARXj8Ew" style={{width:150}} alt="img not found"/>
        </Link>
        </div>
        <div className={classes.listItem}>
       <Link  to= {{
         pathname:'https://www.linkedin.com/in/francomcruz/' 
        }} target='_blank'>
         Franco Cruz
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHsT06AGxUkBg/profile-displayphoto-shrink_800_800/0/1627516089011?e=1634169600&v=beta&t=OLyMrIHkPt0PAGhgtWAVNAZKNa6pXV9KN9XN_5mZZl0" style={{width:150}} alt="img not found"/>
        </Link>
        </div>
        <div className={classes.listItem}>
       <Link  to= {{
         pathname:'https://www.linkedin.com/in/juan-kaunitz/' 
       }}target='_blank'>
         Juan Kaunitz
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHHbMjCckHAZg/profile-displayphoto-shrink_800_800/0/1620252860274?e=1634169600&v=beta&t=CuZJC8C9hKUS8-Mxz6QOthKWWIiiFijIXamSWwz9IEM" style={{width:150}} alt="img not found"/>
       </Link>
        </div>
        <div className={classes.listItem}>
       <Link  to= {{
         pathname:'https://www.linkedin.com/in/kevin-luciano-favre-jarupkin/' 
       }} target='_blank'>
        Kevin L.Favre Jarupkin 
        </Link><img src="https://media-exp1.licdn.com/dms/image/C4E03AQEelOT7LzhUyg/profile-displayphoto-shrink_800_800/0/1563523709883?e=1634169600&v=beta&t=LVBJJqLNfMPX0Dxd8ss3tj5i2-eq444lJgP0VADd1ec" style={{width:150}} alt="img not found"/>
        </div>
        <div className={classes.listItem}>
       <Link  to= {{
         pathname:'https://www.linkedin.com/in/octavio-bissutti/' 
       }} target='_blank'>
        Octavio Bissutti
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFpH6x6o0OlTw/profile-displayphoto-shrink_800_800/0/1627669261072?e=1634169600&v=beta&t=jNL9H7PwnlwFWwAL20Y3iK3-TMJlwTrCzvUBf3YgzEc" style={{width:150}} alt="img not found"/>
        </Link>
        </div>
        </div>
    </div>
  );
};

export default aboutUs; 
















/* import React from "react";
import UseStyles from './styles.js'
import './About.css';
import { Link } from "react-router-dom";


const aboutUs = () => {
  const classes = UseStyles()
  return (
    <div  className = 'about'>
      <h1 className = 'h1'>Ecommerce fast food</h1>
      <p className={classes.color}>
        Somos un grupo de 7 integrantes los cuales nos encontramos cursando el
        bootcamp HENRY en la etapa final denominada 'Proyecto Grupal', la cual
        consiste en crear un Ecommerce con diversas requisitos y
        funcionalidades. <br></br>Nosotros decidimos realizar una app de fast food, en la
        cual se pueden observar los productos disponibles, observando sus
        detalles, su rating y su precio, con la opcion de poder seleccionarlos y
        agregarlos al carrito. <br></br>Por otro lado realizamos 3 opciones de loggeo,
        una como administrador, para poder modificar el contenido de la pagina,
        una como usuario invitado, que puede navegar por la pagina web utilizar
        la barra de busqueda entre otras funcionalidades y por ultimo un usuario
        registrado o la opción de poder regstrarse para poder realizar compras.
      </p>
      <h1 className = 'h1'>¿WHO WE ARE?</h1>
      <div className= 'cards'>
       <div className={classes.listItem}>
       <a href= 'https://www.linkedin.com/in/jose-alberto-carballo-rojas-31b606165/' target='_blank' rel="noopener noreferrer">
      Jose A.Carballo Rojas
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGXPu_dVhOQZg/profile-displayphoto-shrink_200_200/0/1627651344866?e=1634169600&v=beta&t=zmrvLWZrw-9nACfWtXBiola_6CAizvhtGOauAOzKANk" style={{width:150}}  alt="img not found"/>
      </a>
       </div>
       <div className={classes.listItem}>
       <a href='https://www.linkedin.com/in/facundo-duartes-dev/' target='_blank'rel="noopener noreferrer">
         Facundo Duartes
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF_Br2Yl0voDQ/profile-displayphoto-shrink_800_800/0/1627603348548?e=1634169600&v=beta&t=Slfo5B7abjDCFMh6exaxcwupHeAaHCucCZOStEWUlzs" style={{width:150}} alt="img not found"/>
        </a>
        </div>
        <div className={classes.listItem}>
       <a href='https://www.linkedin.com/in/lucas-di-caro' target='_blank'rel="noopener noreferrer">
         Lucas Di Caro
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQH63CHkBHWSXw/profile-displayphoto-shrink_800_800/0/1619971645987?e=1634169600&v=beta&t=e8AU47KiFGFbrN9GsXSO1DlrW3H7TK-XW06mARXj8Ew" style={{width:150}} alt="img not found"/>
        </a>
        </div>
        <div className={classes.listItem}>
       <a href='https://www.linkedin.com/in/francomcruz/' target='_blank'rel="noopener noreferrer">
         Franco Cruz
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHsT06AGxUkBg/profile-displayphoto-shrink_800_800/0/1627516089011?e=1634169600&v=beta&t=OLyMrIHkPt0PAGhgtWAVNAZKNa6pXV9KN9XN_5mZZl0" style={{width:150}} alt="img not found"/>
        </a>
        </div>
        <div className={classes.listItem}>
       <a href='https://www.linkedin.com/in/juan-kaunitz/' target='_blank'rel="noopener noreferrer">
         Juan Kaunitz
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHHbMjCckHAZg/profile-displayphoto-shrink_800_800/0/1620252860274?e=1634169600&v=beta&t=CuZJC8C9hKUS8-Mxz6QOthKWWIiiFijIXamSWwz9IEM" style={{width:150}} alt="img not found"/>
        </a>
        </div>
        <div className={classes.listItem}>
       <a href='https://www.linkedin.com/in/kevin-luciano-favre-jarupkin/' target='_blank'rel="noopener noreferrer">
        Kevin L.Favre Jarupkin 
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEelOT7LzhUyg/profile-displayphoto-shrink_800_800/0/1563523709883?e=1634169600&v=beta&t=LVBJJqLNfMPX0Dxd8ss3tj5i2-eq444lJgP0VADd1ec" style={{width:150}} alt="img not found"/>
        </a>
        </div>
        <div className={classes.listItem}>
       <a href='https://www.linkedin.com/in/octavio-bissutti/' target='_blank'rel="noopener noreferrer">
        Octavio Bissutti
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFpH6x6o0OlTw/profile-displayphoto-shrink_800_800/0/1627669261072?e=1634169600&v=beta&t=jNL9H7PwnlwFWwAL20Y3iK3-TMJlwTrCzvUBf3YgzEc" style={{width:150}} alt="img not found"/>
        </a>
        </div>
        </div>
    </div>
  );
};

export default aboutUs; */