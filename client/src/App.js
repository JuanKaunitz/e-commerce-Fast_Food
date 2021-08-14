import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AboutUs from "./components/aboutUs/AboutUs.jsx";
import Cart from "./components/cart/Cart.jsx";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Register from "./components/register/Register.jsx";
import CardDetails from "./components/details/CardDetails.jsx";
import Categories from "./components/categories/Categories.jsx";
import Form from "./components/Form/Form.jsx";
import FormNav from "./components/LogForm/FormNav.jsx";
import EditProduct from "./components/editProduct/EditProduct.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/detail/:id" exact component={CardDetails} />
        <Route path="/editProduct/:id" exact component={EditProduct} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/formregister" component={FormNav} />
        <Route exact path='/https://www.linkedin.com/in/facundo-duartes-dev/'/>
      </BrowserRouter>
    </div>
  );
}

export default App;
