import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AboutUs from "./components/aboutUs/AboutUs.jsx";
import Cart from "./components/cart/Cart.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/login/Login.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Register from "./components/register/Register.jsx";
import CardDetails from "./components/details/CardDetails.jsx";
import Categories from "./components/categories/Categories.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  return (
      <div>
        <BrowserRouter>
        <Navbar />         
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route path="/detail/:id" exact component={CardDetails}/>
          <Route exact path="/form" component={Form} />
          <Route exact path="/categories" component={Categories} />
        </BrowserRouter>

      </div>
  );
}

export default App;
