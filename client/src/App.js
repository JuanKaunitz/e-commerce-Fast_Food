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
import AdminPanel from "./components/UserAdmin/AdminPanel.jsx";
import AdminProductDetail from "./components/UserAdmin/AdminProductDetail.jsx"
import GetClients from "./components/UserAdmin/GetClients.jsx";
import ClientEdit from "./components/UserAdmin/ClientEdit.jsx";
import NewProduct from "./components/UserAdmin/NewProduct.jsx";
import AdminCategories from "./components/UserAdmin/AdminCategories.jsx";
import AdminCategoryDetail from "./components/UserAdmin/AdminCategoryDetail.jsx";
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
        <Route exact path="/form" component={Form} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/formregister" component={FormNav} />        
        <Route exact path="/adminPanel" component={AdminPanel} />
        <Route exact path="/admProdDetail/:id" component={AdminProductDetail} />  
        <Route exact path="/clients" component={GetClients} />   
        <Route exact path="/clientEdit/:id" component={ClientEdit} />    
        <Route exact path="/newProduct" component={NewProduct} />
        <Route exact path="/adminCategories" component={AdminCategories} />
        <Route exact path="/admCategoryDetail" component={AdminCategoryDetail} />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
