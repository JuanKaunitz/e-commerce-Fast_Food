import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from '../components/Home/Home'
import aboutUs from "../components/aboutUs/AboutUs";
import Cart from "../components/cart/Cart";
// import CardDetails from "../components/details/CardDetails";
import Form from "../components/Form/Form";
import Categories from "../components/categories/Categories";
import FormularioLogin from "../components/login/FormLogin";
import Register from "../components/login/FormRegister";



const ViewScreen = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/aboutUs" component={aboutUs} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/login" component={FormularioLogin} />
      {/* <Route path="/detail/:id" exact component={CardDetails} /> */}
      <Route exact path="/form" component={Form} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
};

export default ViewScreen;
